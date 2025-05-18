import styled from '@emotion/styled';
import { Button, Input } from 'antd';
import { BlockList } from './BlockList';
import { usePromotionStore } from '@/store/usePromotionStore';

export const LeftSidebar = () => {
  const { promotion } = usePromotionStore();

  return (
    <LeftSidebarContainer>
      <Container>
        <Input placeholder={'프로모션 이름'} />
        <Button type={'primary'} onClick={() => console.log(promotion)}>
          저장
        </Button>
      </Container>
      <BlockList />
    </LeftSidebarContainer>
  );
};

const LeftSidebarContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: #ffffff;

  padding: 24px;

  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  gap: 12px;
`;
