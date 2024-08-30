'use server'

import { request, gql } from 'graphql-request'

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

export async function fetchGithubContributions() {
  const userName = 'nittarab'
  const to = new Date()
  const from = new Date(to)
  from.setDate(from.getDate() - 84) // 12 weeks * 7 days = 84 days
  const variables = { userName, from: from.toISOString(), to: to.toISOString() }

  try {
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

    // Prepare the contribution data
    const preparedContributions = prepareContributionData(rawContributions, from, to)

    return { contributions: preparedContributions, totalContributions }
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    throw error
  }
}

function prepareContributionData(rawContributions, from, to) {
  const preparedData = []
  const startDate = new Date(from)

  for (let i = 0; i < 12; i++) {
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