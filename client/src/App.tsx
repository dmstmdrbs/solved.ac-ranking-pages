import Main from "@pages/main/index";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
`;
function App() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
