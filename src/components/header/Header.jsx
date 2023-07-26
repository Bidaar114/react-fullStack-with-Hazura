import React from 'react'
import { Li, Logo, Nav, Ul } from './Style'
import { Link } from 'react-router-dom'



export const Header = () => {
  return (
    <div>
      <Nav>
      <Logo to ='Posts'> Social Posts </Logo>
      <Ul>
        <Li to ='Posts'> Posts </Li>
        <Li to ='NewPost'> New Post</Li>
      </Ul>

      </Nav>
      </div>
  
  )
}
