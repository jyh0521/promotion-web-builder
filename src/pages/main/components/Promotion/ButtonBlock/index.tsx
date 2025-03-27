import { ButtonType } from '@/common/types';
import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import { useHoveredBlockIdStore } from '@/store/useHoveredBlockIdStore';
import { BlockContainer } from '@/components/BlockContainer';
import styled from '@emotion/styled';

type ButtonBlockProps = {
  buttonBlock: ButtonType;
  selected: boolean;
  totalWidth: number;
  totalHeight: number;
};

export const ButtonBlock = ({ buttonBlock, selected, totalWidth, totalHeight }: ButtonBlockProps) => {
  const { setSelectedBlockId } = useSelectedBlockIdStore();
  const { hoveredBlockId } = useHoveredBlockIdStore();

  const onClickButton = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectedBlockId(buttonBlock.blockId);
  };

  return (
    <AbsoluteDivButton
      selected={selected}
      fontSize={buttonBlock.fontSize}
      fontWeight={buttonBlock.fontWeight}
      lineHeight={buttonBlock.lineHeight}
      left={buttonBlock.left as number}
      right={buttonBlock.right as number}
      top={buttonBlock.top as number}
      bottom={buttonBlock.bottom as number}
      width={buttonBlock.width as number}
      height={buttonBlock.height as number}
      totalWidth={totalWidth}
      totalHeight={totalHeight}
      borderRadius={buttonBlock.borderRadius}
      backgroudColor={buttonBlock.backgroudColor}
      color={buttonBlock.color}
      hoverBackgroundColor={buttonBlock.hoverBackgroundColor}
      hoverColor={buttonBlock.hoverColor}
      disabledBackgroundColor={buttonBlock.disabledBackgroundColor}
      disabledColor={buttonBlock.disabledColor}
      onClick={onClickButton}
      hovered={hoveredBlockId === buttonBlock.blockId}
    >
      {buttonBlock.text}
    </AbsoluteDivButton>
  );
};

const AbsoluteDivButton = styled(BlockContainer)<{
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
  totalWidth: number;
  totalHeight: number;
  borderRadius?: number;
  backgroudColor?: string;
  color?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  disabledBackgroundColor?: string;
  disabledColor?: string;
  selected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px`};
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}px`};

  left: ${({ left, totalWidth }) => (left ? `${(left / totalWidth) * 100}%` : 'auto')};
  right: ${({ right, totalWidth }) => (right ? `${(right / totalWidth) * 100}%` : 'auto')};
  top: ${({ top, totalHeight }) => (top ? `${(top / totalHeight) * 100}%` : 'auto')};
  bottom: ${({ bottom, totalHeight }) => (bottom ? `${(bottom / totalHeight) * 100}%` : 'auto')};

  width: ${({ width, totalWidth }) => (width ? `${(width / totalWidth) * 100}%` : 'auto')};
  height: ${({ height, totalHeight }) => (height ? `${(height / totalHeight) * 100}%` : 'auto')};

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  cursor: pointer;

  ${({ color }) => color && `color: ${color}`};

  background-color: transparent;
  ${({ backgroudColor }) => backgroudColor && `background-color: ${backgroudColor}`};

  padding: 0;
  border: none;
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px`};

  ${({ hoverColor, hoverBackgroundColor }) =>
    hoverBackgroundColor &&
    `&:hover {
      cursor: pointer;
      color: ${hoverColor};
      background-color: ${hoverBackgroundColor};
    }`};

  ${({ disabledColor, disabledBackgroundColor }) =>
    disabledBackgroundColor &&
    `&:disabled {
      cursor: not-allowed;
      color: ${disabledColor};
      background-color: ${disabledBackgroundColor};
    }`};

  &:hover {
    outline: 1px solid #8d44f2;
    z-index: 1;
  }
`;
