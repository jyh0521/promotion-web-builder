import styled from '@emotion/styled';

export const BlockContainer = styled.div<{ selected: boolean }>`
  position: relative;
  z-index: ${({ selected }) => (selected ? 1 : 0)};
  outline: ${({ selected }) => (selected ? '1px solid #8D44F2' : 'none')};

  &:hover {
    outline: 1px solid #8d44f2;
    z-index: 1;
  }
`;
