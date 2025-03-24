import styled from "@emotion/styled";
import { LeftSidebar } from "./components/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar";
const MainPage = () => {
  return (
    <MainContainer>
      <LeftSidebar />
      <RightSidebar />
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #d9d9d9;

  display: flex;
  justify-content: space-between;
`;
