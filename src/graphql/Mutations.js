import { gql } from "@apollo/client"

export const ADD_POST= gql`

mutation AddPost($title: String, $body: String, $thumnail: String){

    insert_Blogs(objects: { title: $title body: $body, thumnail: $thumnail, }){
    returning{
        id
        title
        body
        thumnail
    }
}
}

`;

export const UPDATE_POST = gql`

mutation updatePost($id: Int, $title: String, $body: String, $thumnail: String) {
    update_Blogs(where: {id: {_eq: $id}}, _set: {body: $body , thumnail: $thumnail , title: $title}){
    returning{
        id
        title
        body
        thumnail
    }
  }
}
`;
export const DELETE_POST = gql`
mutation deletePost($id: Int){
    delete_Blogs(where: {id: {_eq: $id}}){
        affected_rows
    }

  }
`;  