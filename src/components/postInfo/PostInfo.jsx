import { gql, useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Info, InfoContent, InfoThumbnail, InfoTitle, PostInfoCard, PostInfoMisc } from './Style';
import { Category } from '../post/Style';
import { DELETE_POST } from '../../graphql/Mutations';




const GET_POST_INFO = gql`
query MyQuery ($id: Int){
    Blogs(where: {id: {_eq: $id}}) {
      title
      body
      date
      id
      thumnail
    }
  }

`;

const PostInfo = () => {

  const [deletePost] = useMutation(DELETE_POST);

 const { Id } = useParams()
 const navigate = useNavigate();


 const handleDelete = ()=>{
  if(!confirm('Are you sure you want to delete')) return;
  deletePost({variables: {id: Id}})
navigate('/');
 }

 const{data, loading, error} = useQuery(GET_POST_INFO, {variables: {id: Id}})

 if(error){
  return <h1> Somthing went wrong </h1>
 }
 if(loading){
  return <p>Loading...</p>
 }

 const {id, thumnail:thumbnail, title, body, date} = data.Blogs[0];
 
 console.log(body);

  return (
<PostInfoCard>

      <InfoThumbnail src={thumbnail}/> 
      <InfoTitle>{title}</InfoTitle>

 <PostInfoMisc>       
        <Category><span>Coding</span></Category>
        <Info><p>By Ibraa &nbsp;</p> 
        at {new Date(date).toDateString()}</Info>     
</PostInfoMisc>
       <InfoContent>{body}</InfoContent> 
      {/* <InfoContent dangerouslySetI nnerHTML={{__html: body}}/> */}

      <Link to = {`/newPost/${id}`}>
        <Button> Update</Button>

      </Link>
      <Button style={{background: "red"}} onClick={handleDelete}> Delete</Button>
 </PostInfoCard>
 
  )
}

export default PostInfo