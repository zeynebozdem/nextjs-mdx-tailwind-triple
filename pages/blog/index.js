import {Link} from "next/link"
import { getAllNodes } from "next-mdx/server"

function BlogPage({posts}) {
    console.log(posts);
    return <div>
        {posts.map((post)=>{
            return <article>
                <a href={post.url}>{post.frontMatter.title}</a>
            </article>
        })}
    </div>
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  }
}
/**
 * {posts.map((post)=>{
            return(<article>
                <h2>
                    <Link href={post.url}>
                        <a>{post.frontMatter.title}</a>
                    </Link>
                </h2>
            </article>)
        })}
 */
  
export default BlogPage