import Link from 'next/link';

export function MainLayout({ children }) {
  return (
    <>
      <h1>Simple Blog</h1>
      <nav>
      <p>
        <Link href="/posts">
          <a>
            All posts
          </a>
        </Link>
      </p>
      <p>
        <Link href="/">
          <a>
            Last post
          </a>
        </Link>
      </p>
      <p>
        <Link href="/posts/new">
          <a>
            Add new post
          </a>
        </Link>
      </p>
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}