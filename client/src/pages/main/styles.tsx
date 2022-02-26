import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template:
    ". logo manage" 1fr
    ".  profile manage" 1fr
    ".  . ." 1fr
    /1fr 1fr 1fr;
`;

const Wrapper = styled.div`
  text-align: -webkit-center;
  grid-area: profile;
  width: 40vw;
  height: 60vh;
  overflow-y: auto;
`;
const Logo = styled.h1`
  text-align: center;
  grid-area: logo;
`;
export { Wrapper, Logo, Container };
