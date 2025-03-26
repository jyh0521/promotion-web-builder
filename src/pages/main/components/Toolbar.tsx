import { LineOutlined, PictureOutlined, PlusSquareOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { usePromotionStore } from '../../../store/usePromotionStore';
import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import { useEffect, useState } from 'react';

export const Toolbar = () => {
  const { promotion, addImage, addButton } = usePromotionStore();
  const { selectedBlockId } = useSelectedBlockIdStore();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (selectedBlockId) {
      setIsDisabled(!(promotion.blocks[selectedBlockId]?.type === 'image'));
    } else {
      setIsDisabled(true);
    }
  }, [selectedBlockId]);

  return (
    <ToolbarContainer>
      <ToolbarButton>
        <LineOutlined style={{ fontSize: 24 }} />
      </ToolbarButton>
      <ToolbarButton onClick={addImage}>
        <PictureOutlined style={{ fontSize: 24 }} />
      </ToolbarButton>
      <ToolbarButton disabled={isDisabled} onClick={() => addButton(selectedBlockId as number)}>
        <PlusSquareOutlined style={{ fontSize: 24 }} />
      </ToolbarButton>
    </ToolbarContainer>
  );
};

const ToolbarContainer = styled.div`
  width: 180px;
  height: 48px;
  background-color: #00bed6;

  border-radius: 10px;

  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;

  padding: 0 24px;

  gap: 24px;

  z-index: 100;
`;

const ToolbarButton = styled.button`
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

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;
