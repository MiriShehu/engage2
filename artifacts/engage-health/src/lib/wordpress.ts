import { GraphQLClient } from 'graphql-request';

// We pull the WordPress GraphQL endpoint from environment variables
// For local development, this could be http://localhost:8000/graphql 
// or the URL of your hosted WordPress instance like https://my-wp-site.com/graphql
const endpoint = import.meta.env.VITE_WP_GRAPHQL_URL || 'https://manage.engagehealthgroup.co.uk/graphql';

export const wpClient = new GraphQLClient(endpoint, {
  headers: {
    // If you need authentication for draft posts or private data, you can add an Auth token
    // authorization: `Bearer ${import.meta.env.VITE_WP_AUTH_TOKEN}`,
  },
});

/**
 * A generic helper function to query the WordPress API.
 * 
 * @param query The GraphQL query string
 * @param variables Optional variables for the query
 * @returns The typed response data
 */
export async function fetchWP<T = any>(query: string, variables: any = {}): Promise<T> {
  try {
    const data = await wpClient.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error('WPGraphQL query error:', error);
    throw new Error('Failed to fetch data from WordPress API.');
  }
}
