/*

home

about
contact
resume
projects
tech

linkedin
github
gmail

*/

import styled from 'styled-components'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './pages/Main'
import Footer from './components/Footer'
import background from './textures/paper.png'

function App() {
  return (
    <Layout>
      <Header />
      <SideBar />
      <Main />
      <Footer />
    </Layout>
  )
}

const Layout = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60px auto; 
  grid-template-rows: 60px 1fr 80px;
  grid-template-areas: 
    'header header'
    'sideBar main'
    'footer footer';
  background-color: #f2ede4;
  background-image: url(${background});

  @media (max-width: 1000px) {
    grid-template-columns: 20px auto; 
    grid-template-rows: 60px 1fr 60px;
  }
`

export default App
