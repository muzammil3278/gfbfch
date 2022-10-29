import React from 'react'

export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <li>{post.body}</li>
        </div>
      ))}
    </ul>
  )
}
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:3004/comments')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}