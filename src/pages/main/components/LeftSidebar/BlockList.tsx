import { usePromotionStore } from '@/store/usePromotionStore';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const Block = () => {};

type ShowBlock = {
  blockId: number;
  type: string;
  isShow: boolean;
};

export const BlockList = () => {
  const { promotion } = usePromotionStore();
  const [renderedBlocks, setRenderedBlocks] = useState<Set<number>>(new Set());
  const [blockElements, setBlockElements] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newRenderedBlocks = new Set<number>();

    const renderBlock = (blockId: number, depth: number = 0, isLastChild: boolean = false) => {
      const block = promotion.blocks[blockId];
      if (!block || newRenderedBlocks.has(blockId)) return null;

      newRenderedBlocks.add(blockId);

      return (
        <BlockItem key={blockId} depth={depth} isLastChild={isLastChild}>
          {block.type}
          {block.nodes && (
            <BlockChildren>
              {block.nodes.map((nodeId, index, array) => renderBlock(nodeId, depth + 1, index === array.length - 1))}
            </BlockChildren>
          )}
        </BlockItem>
      );
    };

    const rootBlocks = Object.values(promotion.blocks).filter((block) => {
      return !Object.values(promotion.blocks).some((b) => b.nodes?.includes(block.blockId));
    });

    const elements = rootBlocks.map((block, index, array) => renderBlock(block.blockId, 0, index === array.length - 1));
    setBlockElements(elements);
    setRenderedBlocks(newRenderedBlocks);
  }, [promotion.blocks]);

  return <BlockListContainer>{blockElements}</BlockListContainer>;
};

const BlockListContainer = styled.div`
  margin-top: 24px;
`;

const BlockItem = styled.div<{ depth: number; isLastChild: boolean }>`
  padding-left: ${({ depth }) => depth * 24}px;
  padding-top: 8px;
  ${({ isLastChild }) =>
    isLastChild &&
    `
    padding-bottom: 16px;
  `}
`;

const BlockChildren = styled.div``;
