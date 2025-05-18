import { Descriptions, Input, InputNumber } from 'antd';
import { ButtonOptionsContainer } from './ButtonOptionsContainer';
import { usePromotionStore } from '@/store/usePromotionStore';
import { ButtonType } from '@/common/types';

export const DesignOption = ({ selectedBlockId }: { selectedBlockId: number }) => {
  const { promotion, updateButton } = usePromotionStore();

  if (!selectedBlockId) return null;

  const selectedBlock = promotion.blocks[selectedBlockId];

  return (
    <ButtonOptionsContainer>
      <Descriptions title="Position" bordered style={{ textAlign: 'left' }} column={1}>
        <Descriptions.Item label="left">
          <InputNumber
            value={(selectedBlock as ButtonType).left}
            onChange={(value) => {
              updateButton({ ...(selectedBlock as ButtonType), left: value ?? 0 });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="right">
          <InputNumber
            value={(selectedBlock as ButtonType).right}
            onChange={(value) => {
              updateButton({ ...(selectedBlock as ButtonType), right: value ?? 0 });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="top">
          <InputNumber
            value={(selectedBlock as ButtonType).top}
            onChange={(value) => {
              updateButton({ ...(selectedBlock as ButtonType), top: value ?? 0 });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="bottom">
          <InputNumber
            value={(selectedBlock as ButtonType).bottom}
            onChange={(value) => {
              updateButton({ ...(selectedBlock as ButtonType), bottom: value ?? 0 });
            }}
          />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="Layout" bordered style={{ textAlign: 'left' }} column={1}>
        <Descriptions.Item label="width">
          <InputNumber
            value={(selectedBlock as ButtonType).width}
            onChange={(value) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                width: value ?? 0,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="height">
          <InputNumber
            value={(selectedBlock as ButtonType).height}
            onChange={(value) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                height: value ?? 0,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="border-radius">
          <InputNumber
            value={(selectedBlock as ButtonType).borderRadius}
            onChange={(value) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                borderRadius: value ?? 0,
              });
            }}
          />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="Font" bordered style={{ textAlign: 'left' }} column={1}>
        <Descriptions.Item label="text">
          <Input
            value={(selectedBlock as ButtonType).text}
            onChange={(e) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                text: e.target.value,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="font-size">
          <InputNumber
            value={(selectedBlock as ButtonType).fontSize}
            onChange={(value) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                fontSize: value ?? 0,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="font-weight">
          <InputNumber
            value={(selectedBlock as ButtonType).fontWeight}
            onChange={(value) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                fontWeight: value ?? 0,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="line-height">
          <InputNumber
            value={(selectedBlock as ButtonType).lineHeight}
            onChange={(value) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                lineHeight: value ?? 0,
              });
            }}
          />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="Color" bordered style={{ textAlign: 'left' }} column={1}>
        <Descriptions.Item label="background-color">
          <Input
            value={(selectedBlock as ButtonType).backgroudColor}
            onChange={(e) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                backgroudColor: e.target.value,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="color">
          <Input
            value={(selectedBlock as ButtonType).color}
            onChange={(e) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                color: e.target.value,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="hover-background-color">
          <Input
            value={(selectedBlock as ButtonType).hoverBackgroundColor}
            onChange={(e) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                hoverBackgroundColor: e.target.value,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="hover-color">
          <Input
            value={(selectedBlock as ButtonType).hoverColor}
            onChange={(e) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                hoverColor: e.target.value,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="disabled-background-color">
          <Input
            value={(selectedBlock as ButtonType).disabledBackgroundColor}
            onChange={(e) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                disabledBackgroundColor: e.target.value,
              });
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="disabled-color">
          <Input
            value={(selectedBlock as ButtonType).disabledColor}
            onChange={(e) => {
              updateButton({
                ...(selectedBlock as ButtonType),
                disabledColor: e.target.value,
              });
            }}
          />
        </Descriptions.Item>
      </Descriptions>
    </ButtonOptionsContainer>
  );
};
