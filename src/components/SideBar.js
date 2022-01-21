import styled from 'styled-components'
import linkedin from '../icons/linkedin.png'
import github from '../icons/github.png'
import email from '../icons/email.png'

const SideBar = () => {
  return (
    <Container>
      <Link title='Email' target='blank' href='mailto:jattas@gmail.com'>
        <Icon src={email} />
      </Link>
      <Link title='GitHub' target='blank' href='https://github.com/JanPotgieter'>
        <Icon src={github} />
      </Link>
      <Link title='LinkedIn' target='blank' href='https://www.linkedin.com/in/janpotgieter/'>
        <Icon src={linkedin} />
      </Link>
    </Container>
  )
}

const Container = styled.div`
  grid-area: sideBar;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  row-gap: 12px;
  margin-left: 40px;
`

const Link = styled.a`
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
