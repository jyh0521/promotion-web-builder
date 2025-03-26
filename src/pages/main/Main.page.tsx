import styled from "@emotion/styled";
import { LeftSidebar } from "./components/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar";
import { Promotion } from "./components/Promotion";
import { Toolbar } from "./components/Toolbar";
import { useState } from "react";
import { PromotionType } from "../../common/types";

const MainPage = () => {
  const [promotion, setPromotion] = useState<PromotionType>({
    blocks: {},
    events: {},
    conditions: {},
    actions: {},
  });

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
