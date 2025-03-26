import styled from '@emotion/styled';

export default function MarginBox({ height = 0, width = 1 }) {
  return <Margin height={height} width={width} />;
}

const Margin = styled.div<{ width: number; height: number }>`
  max-width: 100%;
  display: block;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
`;
