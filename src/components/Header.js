import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Logo>
        <h1>JP</h1>
      </Logo>
      <Buttons>
        <button>projects</button>
        <button>resume</button>
        <button>tech</button>
        <button>about</button>
        <button>contact</button>
      </Buttons>
    </Container>
  )
}

const Container = styled.div`
  grid-area: header;
  background-color: red;
  display: flex;
  justify-content: space-between;
`

const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  margin: auto;
`

const Buttons = styled.div`
position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`

export default Header
