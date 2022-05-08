import Layout from '../../components/layout'
import { getAllPostsPath, getPostBySlug } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Post } from '../../lib/types'
import remarkPrism from 'remark-prism'
type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: Omit<Post, 'slug'>
}

export default function PostPage({ source, frontMatter }: Props) {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <article>
        <h1>{frontMatter.title}</h1>
        <div>
          <Date dateString={frontMatter.date} />
        </div>
        <MDXRemote {...source}></MDXRemote>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsPath()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { meta, content } = await getPostBySlug(params?.slug as string)

  const mdxSource = await serialize(content, {
    scope: {},
    mdxOptions: {
      remarkPlugins: [[remarkPrism, {}]],
      rehypePlugins: [],
    },
  })
  return {
    props: {
      frontMatter: meta,
      source: mdxSource,
    },
  }
}
