import { Link } from 'next/link'
import { getAllNodes } from 'next-mdx/server'

function BlogPage({ posts }) {
  console.log(posts)
  return (
    <div className="site-container">
      {posts.map((post) => {
        return (
          <article>
            <h2>
                <a href={post.url}>{post.frontMatter.title}</a>
            </h2>
          </article>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes('post')
    }
  }
}

export default BlogPage
