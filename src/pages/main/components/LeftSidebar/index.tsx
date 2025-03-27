import styled from '@emotion/styled';
import { Input } from 'antd';
import { BlockList } from './BlockList';

export const LeftSidebar = () => {
  return (
    <LeftSidebarContainer>
      <Input placeholder={'프로모션 이름'} />
      <BlockList />
    </LeftSidebarContainer>
  );
};

const LeftSidebarContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: #ffffff;

  padding: 24px;

  overflow-y: auto;
`;
