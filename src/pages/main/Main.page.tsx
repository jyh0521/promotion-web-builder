import styled from '@emotion/styled';
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { Promotion } from './components/Promotion';
import { Toolbar } from './components/Toolbar';

const MainPage = () => {
  return (
    <MainContainer>
      <LeftSidebar />
      <Promotion />
      <Toolbar />
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

  position: relative;
`;
