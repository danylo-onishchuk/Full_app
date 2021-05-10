import { useState } from 'react';
import { MainLayout } from '../../components/MainLayout';
import { useMutation } from '@apollo/client';
import { createPost } from '../../mutation/posts';

export default function New() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errorVisible, setErrorVisible] = useState(true);
  const [newUser] = useMutation(createPost);

  const addPost = (e) => {
    if (title.length > 0 && body.length > 0) {
      e.preventDefault();
      setErrorVisible(true);
      newUser({
        variables: {
          input: {
            title, body
          }
        }
      })
      setTitle('');
      setBody('');
    } else {
      e.preventDefault();
      setErrorVisible(false);
    }
  }

  return (
    <MainLayout>
      <form onSubmit={e => addPost(e)}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-success"
      >
        Add post
      </button>
      </form>
      <div
        className="alert alert-danger"
        role="alert"
        hidden={errorVisible}
      >
        Fill all
      </div>
    </MainLayout>
  )
}