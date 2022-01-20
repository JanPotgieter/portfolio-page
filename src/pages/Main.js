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
  padding: 200px;
`

export default Main
