import React from 'react'
import posts from '@/data/posts.json'
const PostList = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-4 pb-8  '>
      {posts.map((post) => (
        <div key={post.id} className='w-full flex flex-col items-start justify-start gap-4 border-2 p-2'>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.date}</p>
          <div>
            {post.comments.map((comment, index) => (
              <div key={index} className='flex flex-col items-start justify-start gap-4 '>
                <p>{comment.user}</p>
                <p>{comment.comment}</p>
                </div>
            ))}


          </div>
         
          </div>
          ))}
    </div>
  )
}

export default PostList