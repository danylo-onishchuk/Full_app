const {buildSchema} = require('graphql');

const schema = buildSchema(`
  type Post {
    id: ID,
    title: String,
    body: String
  }

  input PostInput {
    id: ID,
    title: String!,
    body: String!
  }

  type Query {
    getAllPosts: [Post],
    getPost(id:ID): Post
  }

  type Mutation {
    createPost(input: PostInput): Post
  }
`);

module.exports = schema;