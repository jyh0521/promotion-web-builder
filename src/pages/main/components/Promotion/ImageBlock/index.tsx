import styled from '@emotion/styled';
import { ImageType } from '@common/types';
import { useSelectedBlockIdStore } from '@store/useSelectedBlockIdStore';
import { BlockContainer } from '@/components/BlockContainer';
type ImageBlockProps = {
  imageBlock: ImageType;
  selected: boolean;
  children: React.ReactNode;
};

export const ImageBlock = ({ imageBlock, selected, children }: ImageBlockProps) => {
  const { setSelectedBlockId } = useSelectedBlockIdStore();

  const onClickImage = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setSelectedBlockId(imageBlock.blockId);
  };

  return (
    <ImageContainer {...imageBlock} selected={selected} onClick={onClickImage}>
      <img src={imageBlock.url} alt={`block-${imageBlock.blockId}`} />
      {children}
    </ImageContainer>
  );
};

const ImageContainer = styled(BlockContainer)<ImageType>`
  position: relative;

  > img {
    ${({ width }) => width && `width: ${width}px;`}
    ${({ height }) => height && `height: ${height}px;`}
    display: block !important;
  }

  &:hover:not(:has(> div:hover)) {
    outline: 1px solid #8d44f2;
    z-index: 1;
  }
`;
