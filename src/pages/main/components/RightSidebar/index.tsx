import styled from '@emotion/styled';
import { ImageOptions } from './ImageOptions';
import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import { usePromotionStore } from '@/store/usePromotionStore';
import { ButtonOptions } from './ButtonOptios';

export const RightSidebar = () => {
  const { promotion } = usePromotionStore();
  const { selectedBlockId } = useSelectedBlockIdStore();

  if (!selectedBlockId) return <RightSidebarContainer />;

  return (
    <RightSidebarContainer>
      {(() => {
        switch (promotion.blocks[selectedBlockId].type) {
          case 'image':
            return <ImageOptions />;
          case 'button':
            return <ButtonOptions />;
          default:
            return null;
        }
      })()}
    </RightSidebarContainer>
  );
};

const RightSidebarContainer = styled.div`
  width: 500px;
  height: 100%;
  background-color: #ffffff;

  padding: 24px;

  overflow-y: auto;
`;
