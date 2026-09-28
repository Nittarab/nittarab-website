"use server";

import { gql, request } from "graphql-request";

const TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_API = "https://api.github.com/graphql";

const query = gql`
  query ($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

export async function fetchGithubContributions() {
  if (!TOKEN) {
    throw new Error("GITHUB_TOKEN is not set");
  }

  const data = await request({
    url: GITHUB_API,
    document: query,
    variables: { userName: "Nittarab" },
    requestHeaders: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  const calendar = data.user.contributionsCollection.contributionCalendar;

  return {
    login: "Nittarab",
    fetchedAt: new Date().toISOString(),
    totalContributions: calendar.totalContributions,
    weeks: calendar.weeks.map((week) => ({
      days: week.contributionDays.map((day) => ({
        date: day.date,
        weekday: day.weekday,
        count: day.contributionCount,
      })),
    })),
  };
}
