import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Logo>{/* <h1>JP</h1> */}</Logo>
      <Buttons>
        <Button right='640' correction='2'>about</Button>
        <Button right='525' correction='3'>projects</Button>
        <Button right='451' correction='1'>tech</Button>
        <Button right='351' correction='2'>resume</Button>
        <Button right='167' correction='4'>certifications</Button>
        <Button right='60' correction='2'>contact</Button>
      </Buttons>
    </Container>
  )
}

const Container = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  margin: auto;
`

const Buttons = styled.nav`
  width: 100%;
`

const Button = styled.button`
  position: absolute;
  right: ${props => `${props.right}px`};
  background-color: inherit;
  border: none;
  font-size: 20px;
  color: #0d0d0df0;
  font-family: typewriter;
  font-weight: bold;
  height: 30px;
  padding: 0;
  top: 10px;

  :hover {
    font-size: 21px;
    cursor: pointer;
    border-bottom: 1px solid;
    right: ${props => `${props.right - props.correction}px`};
    top: 11px;
  }
`

export default Header
