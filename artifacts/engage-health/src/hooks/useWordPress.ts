import { useQuery } from '@tanstack/react-query';
import { fetchWP } from '../lib/wordpress';

// --- QUERIES ---

const GET_BLOG_POSTS_QUERY = `
  query GetBlogPosts {
    posts(first: 100) {
      nodes {
        id
        title
        slug
        date
        isSticky
        excerpt
        categories {
          nodes { name }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

const GET_BLOG_POST_BY_SLUG_QUERY = `
  query GetBlogPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      date
      modified
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
    }
  }
`;

// Example of querying an ACF page using WPGraphQL
// Requires WPGraphQL + WPGraphQL for ACF to be active
const GET_PAGE_DATA_QUERY = `
  query GetPageData($uri: String!) {
    pageBy(uri: $uri) {
      id
      title
      content
      # Replace 'pageFields' with your actual ACF field group name
      # pageFields {
      #   heroImage {
      #     sourceUrl
      #   }
      #   heroHeading
      #   heroSubheading
      # }
    }
  }
`;

const GET_TEAM_MEMBERS_QUERY = `
  query GetTeamMembers {
    # 'teamMembers' depends on how your CPT is exposed in GraphQL
    teamMembers(first: 100) {
      nodes {
        id
        slug
        title
        content
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        staffMemberFields {
          positionTitle
        }
      }
    }
  }
`;

const GET_TEAM_MEMBER_BY_SLUG_QUERY = `
  query GetTeamMemberBySlug($slug: ID!) {
    teamMember(id: $slug, idType: SLUG) {
      id
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      staffMemberFields {
        positionTitle
      }
    }
  }
`;

// --- HOOKS ---

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blogPosts'],
    queryFn: () => fetchWP(GET_BLOG_POSTS_QUERY),
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchWP(GET_BLOG_POST_BY_SLUG_QUERY, { slug }),
    enabled: !!slug,
  });
}

export function usePageData(uri: string) {
  return useQuery({
    queryKey: ['pageData', uri],
    queryFn: () => fetchWP(GET_PAGE_DATA_QUERY, { uri }),
    enabled: !!uri,
  });
}

export function useTeamMembers() {
  return useQuery({
    queryKey: ['teamMembers'],
    queryFn: () => fetchWP(GET_TEAM_MEMBERS_QUERY),
  });
}

export function useTeamMember(slug: string) {
  return useQuery({
    queryKey: ['teamMember', slug],
    queryFn: () => fetchWP(GET_TEAM_MEMBER_BY_SLUG_QUERY, { slug }),
    enabled: !!slug,
  });
}
