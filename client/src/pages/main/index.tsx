import Profile from "@components/profile";
import ManageBoard from "@components/manageBoard";
import { Container, Wrapper, Logo } from "./styles";
const Main = () => {
  return (
    <Container>
      <Logo>AJOU</Logo>
      <Wrapper>
        {Array(15)
          .fill("")
          .map((element) => (
            <Profile />
          ))}
      </Wrapper>
      <ManageBoard />
    </Container>
  );
};

export default Main;
