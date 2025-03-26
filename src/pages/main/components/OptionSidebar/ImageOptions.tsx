import styled from '@emotion/styled';
import { Descriptions, Input, InputNumber } from 'antd';
import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import { usePromotionStore } from '@/store/usePromotionStore';
import { ImageType } from '@/common/types';

export const ImageOptions = () => {
  const { promotion, updateImage } = usePromotionStore();
  const { selectedBlockId } = useSelectedBlockIdStore();

  if (!selectedBlockId) return null;

  const selectedBlock = promotion.blocks[selectedBlockId];

  return (
    <ImageOptionsContainer>
      <Descriptions title="URL" bordered style={{ textAlign: 'left' }} column={1}>
        <Descriptions.Item label="URL">
          <Input
            value={(selectedBlock as ImageType).url}
            onChange={(e) => {
              updateImage({
                ...(selectedBlock as ImageType),
                url: e.target.value,
              });
            }}
          />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="Layout" bordered style={{ textAlign: 'left' }} column={1}>
        <Descriptions.Item label="width">
          <InputNumber
            value={selectedBlock.width}
            onChange={(value) => {
              updateImage({
                ...(selectedBlock as ImageType),
                width: value ?? 0,
              });
            }}
            disabled={true}
          />
        </Descriptions.Item>
        <Descriptions.Item label="height">
          <InputNumber
            value={selectedBlock.height}
            onChange={(value) => {
              updateImage({
                ...(selectedBlock as ImageType),
                height: value ?? 0,
              });
            }}
          />
        </Descriptions.Item>
      </Descriptions>
    </ImageOptionsContainer>
  );
};

const ImageOptionsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 24px;
`;
