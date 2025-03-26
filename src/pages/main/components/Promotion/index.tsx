import styled from '@emotion/styled';
import { ButtonType, ImageType, PromotionType } from '@/common/types';
import { ImageBlock } from './ImageBlock';
import { usePromotionStore } from '@/store/usePromotionStore';
import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import { ButtonBlock } from './ButtonBlock';
import { useEffect } from 'react';

export const Promotion = () => {
  const { promotion } = usePromotionStore();
  const { selectedBlockId, setSelectedBlockId } = useSelectedBlockIdStore();

  const onClickContainer = () => {
    setSelectedBlockId(null);
  };

  return (
    <PromotionContainer onClick={onClickContainer}>
      {Object.values(promotion.blocks).map((block) => {
        switch (block.type) {
          case 'image':
            return (
              <ImageBlock
                key={`image-${block.blockId}`}
                imageBlock={block}
                selected={selectedBlockId === block.blockId}
              >
                {block.nodes?.map((node: number) => {
                  return (
                    <ButtonBlock
                      key={`button-${node}`}
                      buttonBlock={promotion.blocks[node] as ButtonType}
                      selected={selectedBlockId === node}
                      totalWidth={block.width as number}
                      totalHeight={block.height as number}
                    />
                  );
                })}
              </ImageBlock>
            );
          default:
            return null;
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
