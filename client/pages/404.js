import Link from 'next/link';

export default function ErrorPage() {

  return (
    <>
      <h1>Something wrong</h1>
      <Link href='/'>
        <a>
          Go to the last post!
        </a>
      </Link>
    </>
  )
}