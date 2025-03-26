import styled from '@emotion/styled';
import { ImageOptions } from './ImageOptions';
import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import { usePromotionStore } from '@/store/usePromotionStore';
import { ButtonOptions } from './ButtonOptios';

export const OptionSidebar = () => {
  const { promotion } = usePromotionStore();
  const { selectedBlockId } = useSelectedBlockIdStore();

  if (!selectedBlockId) return <OptionSidebarContainer />;

  return (
    <OptionSidebarContainer>
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
    </OptionSidebarContainer>
  );
};

const OptionSidebarContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: #ffffff;

  padding: 24px;

  overflow-y: auto;
`;
