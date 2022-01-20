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

function App() {
  return (
    <Layout>
      {/* <Header />
      <SideBar /> */}
      <Main />
      {/* <Footer /> */}
    </Layout>
  )
}

const Layout = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas: 'main';
  /* grid-template-columns: 100px auto; */
  /* grid-template-rows: 100px 1fr 80px; */
  /* grid-template-areas:
    'header header'
    'sideBar main'
    'footer footer'; */
  background: #f2ede4;
`

export default App
