import { gql, useQuery, useSubscription } from '@apollo/client';
import React from 'react'
import Post from '../post/Post';
import { Grid } from './Style';
import { GET_ALL_SUB_POSTS } from '../../graphql/Subscription';


// const GET_ALL_POSTS = gql`

// query getPosts{
//   Blogs {
//     title
//     body
//     date
//     id
//     thumnail
//   }
// }

// `;



 const Posts = () => {

  const {data, loading, error} = useSubscription(GET_ALL_SUB_POSTS);
  if(error){
    console.log(error);
    return <h1> oh, uh something went wrong...</h1>
  }
  if(loading){
    return <p>Loading...</p>
  }

  console.log(data);

  return (
    <Grid>
      {
        data.Blogs.map((blog, index) => (
          <Post  index={index} key={blog.id}{...blog}/>
        ))
      }



    </Grid>
  )
}

export default Posts;