import styled from '@emotion/styled';
import { ImageType, PromotionType } from '../../../../common/types';
import { ImageBlock } from './ImageBlock';
import { usePromotionStore } from '../../../../store/usePromotionStore';
import { useSelectedBlockIdStore } from '../../../../store/useSelectedBlockIdStore';

export const Promotion = () => {
  const { promotion } = usePromotionStore();
  const { selectedBlockId, setSelectedBlockId } = useSelectedBlockIdStore();

  const onClickContainer = () => {
    setSelectedBlockId(null);
  };

  return (
    <PromotionContainer onClick={onClickContainer}>
      {Object.values(promotion.blocks).map((block) => {
        if (block.type === 'image') {
          return <ImageBlock key={block.blockId} imageBlock={block} selected={selectedBlockId === block.blockId} />;
        }
      })}
    </PromotionContainer>
  );
};

export default Promotion;

const PromotionContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 24px 0 100px 0;

  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
