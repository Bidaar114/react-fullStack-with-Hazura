import { gql } from "@apollo/client";




export const GET_POST= gql`

query MyQuery($id: Int) {
    Blogs(where: {id: {_eq: $id}}) {
      title
      body
      date
      id
      thumnail
    }
  }
  




`;