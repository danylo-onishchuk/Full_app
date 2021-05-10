import {gql} from '@apollo/client';

export const getAllPosts = gql`
  query {
    getAllPosts {
      id, title, body
    }
  }
`

export const getPost = (id) => gql`
  query {
    getPost(id: ${id}) {
      id, title, body
    }
  }
`