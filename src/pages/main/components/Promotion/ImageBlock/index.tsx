import styled from '@emotion/styled';
import { ImageType } from '@common/types';
import { BlockContainer } from '@components/BlockContainer';
import { useSelectedBlockIdStore } from '@store/useSelectedBlockIdStore';
type ImageBlockProps = {
  imageBlock: ImageType;
  selected: boolean;
};

export const ImageBlock = ({ imageBlock, selected }: ImageBlockProps) => {
  const { setSelectedBlockId } = useSelectedBlockIdStore();

  return (
    <ImageContainer
      {...imageBlock}
      selected={selected}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedBlockId(imageBlock.blockId);
      }}
    >
      <img src={imageBlock.url} alt={`block-${imageBlock.blockId}`} />
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
`;
