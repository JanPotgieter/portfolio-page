import styled from "styled-components"

function App() {
  return (
    <Main>
      <h2>Coming soon</h2>
    </Main>
  );
}

const Main = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
  border: 2px solid white;

  h2 {
    color: white;
    font-size: 40px;
  }
`

export default App;
