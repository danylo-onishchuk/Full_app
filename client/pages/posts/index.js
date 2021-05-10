import { useEffect, useState } from 'react';
import { MainLayout } from '../../components/MainLayout';
import { getAllPosts } from '../../query/posts';
import { useQuery } from '@apollo/client';
import Router from 'next/router';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const {data, loading, error, refetch} = useQuery(getAllPosts);


  useEffect(() => {
    refetch();
    if (!loading) {
      setPosts(data.getAllPosts)
    }

    if (loading) {
      return <h2>Loading...</h2>
    }
  }, [data])

  const GoToPost = (id) => (
    Router.push(`./posts/${id}`)
  )

  return (
    <MainLayout>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <button
              type="button"
              onClick={() => GoToPost(post.id)}
              className="btn btn-outline-primary"
            >
              {`#${post.id} ${post.title}`}
            </button>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}