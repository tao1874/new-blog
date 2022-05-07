import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { Post } from '../lib/types'

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>Featured Posts</h2>
        <ul>
          {posts.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getAllPosts(['title', 'slug', 'date', 'description'])

  return {
    props: {
      posts: postsData,
    },
  }
}
