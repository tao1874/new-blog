export interface MetaData {
  date?: string
  description?: string
  image?: string
  slug: string
  title: string
}

export interface Post {
  slug: string
  date: string
  thumbnail: string
  title: string
  description: string
  prerequisites: string[]
  stacks: string[]
}
