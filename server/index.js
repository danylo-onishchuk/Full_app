const posts = [{id:1 , title: 'hello', body: 'Hello guys'}];

const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema')
const app = express();

app.use(cors())

const createPost = (input) => {
  const id = posts.length + 1;
    return {
      id,
      ...input
    }
}

const root = {
  getAllPosts: () => {
    return posts;
  },
  getPost: ({id}) => {
    return posts.find(post => post.id === +id);
  },
  createPost: ({input}) => {
    const post = createPost(input);
    posts.push(post);
    return post;
  }
}

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}))

app.listen(5000, () => console.log('server go'));