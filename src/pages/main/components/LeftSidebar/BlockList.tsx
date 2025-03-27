import { usePromotionStore } from '@/store/usePromotionStore';
import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import { useHoveredBlockIdStore } from '@/store/useHoveredBlockIdStore';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

export const BlockList = () => {
  const { selectedBlockId, setSelectedBlockId } = useSelectedBlockIdStore();
  const { hoveredBlockId, setHoveredBlockId } = useHoveredBlockIdStore();

  const { promotion } = usePromotionStore();
  const [renderedBlocks, setRenderedBlocks] = useState<Set<number>>(new Set());
  const [blockElements, setBlockElements] = useState<React.ReactNode[]>([]);

  const onClickBlock = (blockId: number) => {
    setSelectedBlockId(blockId);
  };

  useEffect(() => {
    const newRenderedBlocks = new Set<number>();

    const renderBlock = (blockId: number, depth: number = 0, isLastChild: boolean = false) => {
      const block = promotion.blocks[blockId];
      if (!block || newRenderedBlocks.has(blockId)) return null;

      newRenderedBlocks.add(blockId);

      return (
        <BlockItem key={blockId} depth={depth} isLastChild={isLastChild}>
          <BlockChildren
            type={block.type}
            onClick={() => onClickBlock(blockId)}
            selected={block.type !== 'container' && selectedBlockId === blockId}
            onMouseEnter={() => setHoveredBlockId(blockId)}
            onMouseLeave={() => setHoveredBlockId(null)}
          >
            {block.type}
          </BlockChildren>
          {block.nodes && (
            <>{block.nodes.map((nodeId, index, array) => renderBlock(nodeId, depth + 1, index === array.length - 1))}</>
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
  }, [promotion.blocks, selectedBlockId, hoveredBlockId]);

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

const BlockChildren = styled.div<{ type: string; selected: boolean }>`
  ${({ type }) =>
    type === 'container' &&
    `
    pointer-events: none;
  `}

  cursor: pointer;

  &:hover {
    ${({ type }) =>
      type !== 'container' &&
      `
      background-color: #f0f0f0;
  `}
  }

  ${({ selected }) =>
    selected &&
    `
    outline: 1px solid #8d44f2;
  `}
`;
