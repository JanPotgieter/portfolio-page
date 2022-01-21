import { useState } from 'react'
import styled from 'styled-components'
import TypeWriter from '../../components/TypeWriter'

const WelcomeText = () => {
  const [cycle, setCycle] = useState(0)

  const lines = [
    <TypeWriter
      id='helloWorld'
      text='Hello world!'
      delay={1800}
      width='100%'
      color='#313131'
      textShadow='1px 1px 1px #2c2b33'
      fontFamily='typewriter'
      fontSize={window.innerWidth < 1000 ? '20px': '50px'}
      finished={startNext}
    />,
    <TypeWriter
      id='myName'
      text='My name is Jan Potgieter.'
      delay={500}
      width='100%'
      color='#313131'
      textShadow='1px 1px 1px #2c2b33'
      fontFamily='typewriter'
      fontSize={window.innerWidth < 1000 ? '20px': '50px'}
      finished={startNext}
    />,
    <TypeWriter
      id='iAm'
      text='I am a Front End Developer.'
      delay={500}
      width='100%'
      color='#313131'
      textShadow='1px 1px 1px #2c2b33'
      fontFamily='typewriter'
      fontSize={window.innerWidth < 1000 ? '20px': '50px'}
    />,
  ]

  function startNext() {
    setCycle(prevState => prevState + 1)
  }

  return (
    <Container>
      {cycle >= 0 ? lines[0] : <p />}
      {cycle >= 1 ? lines[1] : <p />}
      {cycle >= 2 ? lines[2] : <p />}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 10px;
`

export default WelcomeText
