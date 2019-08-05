import React from 'react'

const Post = ({post}) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <div id="text">
        <p>{post.content}</p>
      </div>
    </article>
  )
}

const Posts = ({posts}) => {
  return(
    <div>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
        ))
      }
    </div>
  )
}

export default Posts