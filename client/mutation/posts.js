import {gql} from '@apollo/client';

export const createPost = gql`
  mutation createPost($input: PostInput) {
    createPost(input: $input) {
      id, title, body
    }
  }
`

