import styled from 'styled-components'
import linkedin from '../icons/linkedin.png'
import github from '../icons/github.png'
import email from '../icons/email.png'

const SideBar = () => {
  return (
    <Container>
      <Button id='email' onClick={buttonClicked} title='Email'>
        <Icon id='email' src={email} />
      </Button>
      <Button id='github' onClick={buttonClicked} title='GitHub'>
        <Icon id='github' src={github} />
      </Button>
      <Button id='linkedin' onClick={buttonClicked} title='LinkedIn'>
        <Icon id='linkedin' src={linkedin} />
      </Button>
    </Container>
  )
}

const links = {
  linkedin: 'https://www.linkedin.com/in/janpotgieter/',
  github: 'https://github.com/JanPotgieter',
  email: 'mailto:jattas@gmail.com'
}

function buttonClicked(event) {
  const id = event.target.id
  const link = <a href={links[id]} target='blank' />
  link.click()
}

const Container = styled.nav`
  grid-area: sideBar;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 12px;
  margin-left: 40px;
`

const Button = styled.button`
  position: relative;
  background-color: inherit;
  border: none;
  margin: 1px;

  :hover {
    cursor: pointer;
    margin: 0px;

    img {
      width: 42px;
    }
  }
`

const Icon = styled.img`
  width: 40px;
`

export default SideBar

// icon colors: #313131
// background: #f2ede4
