
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './components/header/Header.jsx'
import Posts  from './components/posts/Posts.jsx'
import NewPost  from './components/newPost/NewPost.jsx'
import { GlobalStyle } from './GlobalStyle.js'
import { ApolloProvider } from '@apollo/client'
import { client } from './Apollo.js'
import PostInfo from './components/postInfo/PostInfo.jsx'


const router = createBrowserRouter([
  
  {
    path: '/',
   element: <App/>,
   errorElement: <h1>Error 404</h1>,
   children:[

    {
      path: '/',
     element:  <Posts/>,
     index: true
    },
    {
      path: '/Posts',
     element:  <Posts/> 
    },
    {
      path: '/NewPost',
     element:  <NewPost/>
    },
    {
      path: '/NewPost/:Id',
     element:  <NewPost/>
    },
    {
      path: '/post/:Id',
     element:  <PostInfo/>
    }
   ]

   
  }
  
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
   <RouterProvider router={router}/>
   <GlobalStyle/>
    {/* <App /> */}
    </ApolloProvider>
  </React.StrictMode>,
)
