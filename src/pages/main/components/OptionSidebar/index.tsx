import styled from '@emotion/styled';
import { ImageOptions } from './ImageOptions';
import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import { usePromotionStore } from '@/store/usePromotionStore';

export const OptionSidebar = () => {
  const { selectedBlockId } = useSelectedBlockIdStore();
  const { promotion } = usePromotionStore();

  if (!selectedBlockId) return <OptionSidebarContainer />;

  const selectedBlock = promotion.blocks[selectedBlockId];

  return <OptionSidebarContainer>{selectedBlockId && <ImageOptions />}</OptionSidebarContainer>;
};

const OptionSidebarContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: #ffffff;

  padding: 24px;
`;
