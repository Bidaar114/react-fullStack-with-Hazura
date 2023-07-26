import { gql } from "@apollo/client";


export const GET_ALL_SUB_POSTS = gql`

subscription getPosts{
  Blogs {
    title
    body
    date
    id
    thumnail
  }
}

`;