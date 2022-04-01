import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')
const mdx_file_extention = '.mdx'

type PostItems = {
  [key: string]: string
}

// structure of a post

type Post = {
  meta: {
    [key: string]: string
  }
  content: string
}
function getAllFilesInDirectory() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return path.parse(fileName)
  })
}

function getMdxFiles() {
  const files = getAllFilesInDirectory()
  return files.filter((parsedFile) => parsedFile.ext === mdx_file_extention)
}
export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}${mdx_file_extention}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)
  return {
    meta: data,
    content,
  }
}
export function getPostItems(slug: string, fields: string[]): PostItems {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${slug}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)
  const items: PostItems = {}
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}
export function getAllPostsPath() {
  const allMdxFiles = getMdxFiles()
  return allMdxFiles.map((parsedFile) => {
    return {
      params: {
        slug: parsedFile.name,
      },
    }
  })
}

export function getAllPosts(fields: string[]) {
  const allMdxFiles = getMdxFiles()
  const posts = allMdxFiles
    .map((parsedFile) => {
      return getPostItems(parsedFile.base, fields)
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
