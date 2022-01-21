import { Component } from 'react'
import WelcomeText from './Main/WelcomeText'
import styled from 'styled-components'

class Main extends Component {
  render() {
    return (
      <Container>
        <WelcomeText />
      </Container>
    )
  }
}

const Container = styled.div`
  grid-area: main;
  padding: 300px 200px;

  @media (max-width: 1000px) {
    padding: 200px 40px 0px 40px;
  }
`

export default Main
