import { FileImageOutlined, LineOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { usePromotionStore } from '../../../store/usePromotionStore';

export const Toolbar = () => {
  const { addImage } = usePromotionStore();

  return (
    <ToolbarContainer>
      <ToolbarButton>
        <LineOutlined style={{ fontSize: 24 }} />
      </ToolbarButton>
      <ToolbarButton onClick={addImage}>
        <FileImageOutlined style={{ fontSize: 24 }} />
      </ToolbarButton>
    </ToolbarContainer>
  );
};

const ToolbarContainer = styled.div`
  width: 150px;
  height: 48px;
  background-color: #00bed6;

  border-radius: 10px;

  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;

  padding: 0 12px;

  gap: 12px;

  z-index: 100;
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
