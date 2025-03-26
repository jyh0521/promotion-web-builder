import { FileImageOutlined, LineOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Toolbar = () => {
  return (
    <ToolbarContainer>
      <ToolbarButton>
        <LineOutlined style={{ fontSize: 24 }} />
      </ToolbarButton>
      <ToolbarButton>
        <FileImageOutlined style={{ fontSize: 24 }} />
      </ToolbarButton>
    </ToolbarContainer>
  );
};

const ToolbarContainer = styled.div`
  width: 150px;
  height: 48px;
  background-color: #ffffff;

  border-radius: 10px;

  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;

  padding: 0 12px;

  gap: 12px;
`;

const ToolbarButton = styled.div`
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;
