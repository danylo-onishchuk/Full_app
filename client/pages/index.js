import { useState, useEffect } from 'react';
import { MainLayout } from '../components/MainLayout';
import { useQuery } from '@apollo/client';
import { getAllPosts } from '../query/posts';

export default function Index() {
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

  if (posts.length === 0) {
    return (
      <MainLayout>
        <h2>No Posts yet!</h2>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
        <h2>{posts[posts.length - 1].title}</h2>
        <p>{posts[posts.length - 1].body}</p>
    </MainLayout>
  )
}