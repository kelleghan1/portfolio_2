import { ApolloClient, ApolloQueryResult, gql } from '@apollo/client'
import { Query } from '../types/generatedGQLTypes'

export const getPortfolioItems = (graphQLClient: ApolloClient<unknown>) =>
  async (): Promise<ApolloQueryResult<Query>> =>
    await graphQLClient.query({
      query: gql`
        query Query {
          portfolioItems {
            githubLinks {
              url
              label
              isInternal
            }
            productLinks {
              url
              label
              isInternal
            }
            categories {
              name
            }
            products {
              name
            }
            primaryImage {
              url
            }
            name
            images {
              url
            }
            projectId
            homeImage {
              url
            }
            description
          }
        }
      `,
      variables: {}
    })
