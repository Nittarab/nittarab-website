'use server'

import { request, gql } from 'graphql-request'
import { unstable_cache } from 'next/cache'

const TOKEN = process.env.GITHUB_TOKEN
const GITHUB_API = 'https://api.github.com/graphql'

const query = gql`
  query($userName: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $userName) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`

const getCachedContributions = unstable_cache(
  async (userName, fromISO, toISO) => {
    const variables = { userName, from: fromISO, to: toISO }

    const data = await request({
      url: GITHUB_API,
      document: query,
      variables,
      requestHeaders: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })

    const contributionCalendar = data.user.contributionsCollection.contributionCalendar
    const totalContributions = contributionCalendar.totalContributions

    const rawContributions = contributionCalendar.weeks.flatMap(week => 
      week.contributionDays.map(day => ({
        count: day.contributionCount,
        date: day.date
      }))
    )

    const from = new Date(fromISO)
    const to = new Date(toISO)
    const preparedContributions = prepareContributionData(rawContributions, from, to)

    return { contributions: preparedContributions, totalContributions }
  },
  ['github-contributions'],
  { revalidate: 3600 } // Cache for 1 hour (3600 seconds)
)

export async function fetchGithubContributions() {
  const userName = 'nittarab'
  const to = new Date()
  const from = new Date(to)
  from.setDate(from.getDate() - 119) // 17 weeks * 7 days = 119 days

  try {
    return await getCachedContributions(userName, from.toISOString(), to.toISOString())
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    throw error
  }
}

function prepareContributionData(rawContributions, from, to) {
  const preparedData = []
  const startDate = new Date(from)

  for (let i = 0; i < 17; i++) {
    const column = []
    for (let j = 0; j < 7; j++) {
      const date = new Date(startDate)
      date.setDate(date.getDate() + (i * 7 + j))
      const dateString = date.toISOString().split('T')[0]
      const contribution = rawContributions.find(c => c.date === dateString) || { count: 0, date: dateString }
      column.push(contribution)
    }
    preparedData.push(column)
  }

  return preparedData
}