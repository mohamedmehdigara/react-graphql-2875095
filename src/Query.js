const githubQuery = (
  pageCount,
  queryString,
  paginationKeyword,
  paginationString
) => {
  return {
    query: `
        {
          viewer {
            name
          }
          search( query: "${queryString} user:mohamedmehdigara sort:updated-desc", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
           repositoryCount
           edges{
               cursor
               nodes {
                ... on Repository {
                  name
                  description
                  id
                  url
                  viewerSubscription
                  licenseInfo {
                    spdxId
                  }
                }
              }
           }
           pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
            
          }
        }
        
        `,
  };
};

export default githubQuery;
