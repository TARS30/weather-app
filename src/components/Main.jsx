import styled from "styled-components";

const StyledMain = styled.main`
  gap: 4rem;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  transition: all 1s ease 0s;
`;

const Main = ({ children, wallpaper }) => {
  return (
    <StyledMain style={{ backgroundImage: `url(${wallpaper})` }}>
      {children}
    </StyledMain>
  );
};

export default Main;
