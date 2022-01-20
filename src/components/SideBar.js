import styled from 'styled-components'

const SideBar = () => {

  return <Container><Button /><Button /><Button /></Container>

}

const Container = styled.div`
  grid-area: sideBar;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`

const Button = styled.div`  
  position: relative;
  width: 80px;
  height: 80px;
  background-color: orange;
`

export default SideBar
