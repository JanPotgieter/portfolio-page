import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import delay from '../utilities/delay'

const TypeWriter = props => {
  const [testing, setTesting] = useState(true)
  const [typing, setTyping] = useState(false)
  const [finished, setFinished] = useState(false)
  const [text, setText] = useState('')
  var fullWidth, wordWidths

  useEffect(async () => {
    calculateWidths()
    setTesting(false)
    await delay(props.delay || 500)
    await type()
    if (props.finished) {
      setFinished(true)
      props.finished()
    }
  }, [])

  function calculateWidths() {
    fullWidth = calculateFullWidth()
    wordWidths = calculateWordWidths()
  }

  function calculateFullWidth() {
    const container = document.getElementById(`${props.id}-container`)
    return container.clientWidth
  }

  function calculateWordWidths() {
    const testText = document.getElementById(`${props.id}-testText`)

    return props.text.split(' ').map(word => {
      testText.innerText = `${word}_`
      return testText.offsetWidth
    })
  }

  async function type() {
    setTyping(true)
    let x = 0
    for (const i of props.text) {
      await delay(Math.random() * 300)
      if (i === ' ') x++
      setText(prevText => (i === ' ' && noSpaceLeft(wordWidths[x]) ? prevText + `\n` : prevText + i))
    }
    setTyping(false)
    return
  }

  function noSpaceLeft(nextWordWidth) {
    if (!nextWordWidth) return false
    const cursorPosition = document.getElementById(`${props.id}-cursor`).offsetLeft
    const remainingSpace = fullWidth - cursorPosition
    return remainingSpace - nextWordWidth < 0
  }

  return (
    <Container
      id={`${props.id}-container`}
      color={props.color}
      fontSize={props.fontSize}
      fontFamily={props.fontFamily}
      textShadow={props.textShadow}
    >
      {testing ? (
        <TestText id={`${props.id}-testText`}></TestText>
      ) : (
        <React.Fragment>
          <TypedText>
            {text}
            {finished ? null : (
              <Cursor typing={typing} id={`${props.id}-cursor`}>
                _
              </Cursor>
            )}
          </TypedText>
        </React.Fragment>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize || '14px'};
  white-space: pre-wrap;
  font-family: ${props => props.fontFamily || 'inherit'};
  text-shadow: ${props => props.textShadow || 'inherit'};
`

const TypedText = styled.span``

const TestText = styled.span`
  visibility: hidden;
`

const Cursor = styled.span`
  animation: ${props => (props.typing ? 'none' : 'blink 1s steps(2, start) infinite')};

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
`

export default TypeWriter
