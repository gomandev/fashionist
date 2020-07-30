import React from 'react'
import styled from 'styled-components'
import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

const LAUNCH_DATA = gql`
  query LaunchData {
    launches {
      flight_number
      mission_name
      launch_success
      launch_date_local
    }
  }
`;

const Project = () => {
  const { loading, error, data } = useQuery(LAUNCH_DATA);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data)
  return (
    <>
      <ApolloProvider client={client}>
        <Wrapper>
          <Container>
            <h2></h2>
          </Container>
        </Wrapper>
      </ApolloProvider>
    </>
  )
}

export const Container = styled.div`
  width: 70%;
  margin: auto;
  overflow: hidden;
   
`

export const Wrapper = styled.div`

`

export default Project
