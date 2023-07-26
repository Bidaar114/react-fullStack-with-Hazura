import React from 'react'
import { Card, CardInfo, Category, Title } from './Style'

const Post = ({id, title, body, thumnail, date, index}) => {
  return (
    <Card to={`/post/${id}`} thumbnail={thumnail} index={index}>
        <CardInfo>

            <Category> <span> Coding </span></Category>
            <Title>{title}</Title>
            {index == 0 && (
            <div>
                <span>Ibraa</span>
                <span>{new Date(date).toDateString()}</span>
            </div>
  )}
        </CardInfo>


    </Card>
  )
}

export default Post