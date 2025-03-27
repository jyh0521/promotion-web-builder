import styled from '@emotion/styled';

export const BlockContainer = styled.div<{ selected: boolean; hovered: boolean }>`
  position: relative;
  z-index: ${({ hovered, selected }) => (hovered || selected ? 1 : 0)};
  outline: ${({ hovered, selected }) => (hovered || selected ? '1px solid #8D44F2' : 'none')};
`;
