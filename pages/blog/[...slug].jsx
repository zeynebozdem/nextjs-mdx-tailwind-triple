import { Link } from 'next/link'

import { getMdxNode, getMdxPaths } from "next-mdx/server"

function PostPage({post}) {
    
    return <div>
        <h1>{post.frontMatter.title}</h1>
        <p>{post.content}</p>
    </div>
  }
  
  export async function getStaticPaths() {
    return {
      paths: await getMdxPaths("post"),
      fallback: false,
    }
  }
  
  export async function getStaticProps(context) {
    const post = await getMdxNode("post", context)
  
    if (!post) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        post,
      },
    }
  }

export default PostPage
