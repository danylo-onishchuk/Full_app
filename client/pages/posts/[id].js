import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { getPost } from '../../query/posts';
import { MainLayout } from '../../components/MainLayout';


export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState([]);
  const {data, loading, error} = useQuery(getPost(router.query.id));

  useEffect(() => {
    if (!loading) {
      setPost(data.getPost)
    }

    if (loading) {
      return <h2>Loading...</h2>
    }
  }, [data])

  return (
    <MainLayout>
      <h2>Post {router.query.id}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </MainLayout>
  )
}