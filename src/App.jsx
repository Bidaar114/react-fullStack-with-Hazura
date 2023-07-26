
import { styled } from 'styled-components'
import { Header } from './components/header/Header'
import { Outlet } from 'react-router-dom'


const Main = styled.div`
width: 1110px;
margin: 0 auto;

`;
function App() {

  

  return (
  
      <Main>
       <Header/>
       <Outlet/>
      </Main>
     
    
  )
}

export default App
