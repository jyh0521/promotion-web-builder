import styled from "@emotion/styled";
import { Button, Input } from "antd";

export const LeftSidebar = () => {
  return (
    <LeftSidebarContainer>
      <Input placeholder={"프로모션 이름"} />
    </LeftSidebarContainer>
  );
};

const LeftSidebarContainer = styled.div`
  width: 365px;
  height: 100%;
  background-color: #ffffff;

  padding: 24px;
`;
