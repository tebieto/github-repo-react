import { request } from "express";

const queryGithub = maxReposLength => `
{
  viewer {
    login
    bio
    avatarUrl(size: 300)
    name
    repositories(first: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
      edges {
        node {
          id
          name
          languages(first: 1) {
            edges {
              node {
                name
                color
              }
            }
          }
          updatedAt
        }
      }
      totalCount
    }
  }
}
`;

export const GITHUB_API_URL = 'https://api.github.com/graphql';

export const GITHUB_REQUEST_OPTIONS = {
    method: "post",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `bearer ${process.env.GITHUB_API_KEY}`
    },
    body: JSON.stringify({
        query: queryGithub(20)
    })
};
