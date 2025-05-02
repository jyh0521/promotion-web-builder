import { ButtonType } from '@/common/types';
import { usePromotionStore } from '@/store/usePromotionStore';
import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import styled from '@emotion/styled';
import { Descriptions, Input, InputNumber, Select, Tabs, TabsProps } from 'antd';

export const ButtonOptions = () => {
  const { promotion, updateButton, getEventsByBlockId } = usePromotionStore();
  const { selectedBlockId } = useSelectedBlockIdStore();

  if (!selectedBlockId) return null;

  const selectedBlock = promotion.blocks[selectedBlockId];

  const events = getEventsByBlockId(selectedBlockId);

  const TabItems: TabsProps['items'] = [
    {
      key: 'ButtonDesign',
      label: 'Design',
      children: (
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
      ),
    },
    {
      key: 'ButtonFeature',
      label: 'Feature',
      children: (
        <>
          {Object.values(events).map((event) => (
            <ButtonOptionsContainer key={event.eventId}>
              <Descriptions title="이벤트" bordered style={{ textAlign: 'left' }} column={1}>
                <Descriptions.Item label="종류">
                  <Select defaultValue="click" disabled>
                    <Select.Option value="click">클릭</Select.Option>
                  </Select>
                </Descriptions.Item>
                <Descriptions.Item label="조건">
                  <Select defaultValue="none" disabled>
                    <Select.Option value="none">없음</Select.Option>
                    {/* <Select.Option value="newbie">뉴비</Select.Option> */}
                  </Select>
                </Descriptions.Item>
                <Descriptions.Item label="true 액션">
                  <Select defaultValue="openUrl" disabled>
                    <Select.Option value="none">없음</Select.Option>
                    <Select.Option value="couponDownload">쿠폰 다운</Select.Option>
                    <Select.Option value="alert">얼럿</Select.Option>
                    <Select.Option value="openUrl">URL 열기</Select.Option>
                  </Select>
                </Descriptions.Item>
                {/* 이벤트 id를 알고, true 액션의  */}
                <Descriptions.Item label="URL">
                  <></>
                  {/* <Input
                    value={(selectedBlock as ButtonType).url}
                    onChange={(e) => {
                      updateButton({ ...(selectedBlock as ButtonType), url: e.target.value });
                    }}
                  /> */}
                </Descriptions.Item>
                <Descriptions.Item label="true 액션 결과">
                  <Select defaultValue="none">
                    <Select.Option value="none">없음</Select.Option>
                    <Select.Option value="modal">모달</Select.Option>
                  </Select>
                </Descriptions.Item>
                {event.conditionAction?.false !== undefined && (
                  <>
                    <Descriptions.Item label="false 액션">
                      <Select defaultValue="none">
                        <Select.Option value="none">없음</Select.Option>
                        <Select.Option value="couponDownload">쿠폰 다운</Select.Option>
                        <Select.Option value="alert">얼럿</Select.Option>
                      </Select>
                    </Descriptions.Item>
                    <Descriptions.Item label="false 액션 결과">
                      <Select defaultValue="none">
                        <Select.Option value="none">없음</Select.Option>
                        <Select.Option value="modal">모달</Select.Option>
                      </Select>
                    </Descriptions.Item>
                  </>
                )}
              </Descriptions>
            </ButtonOptionsContainer>
          ))}
        </>
      ),
    },
  ];

  return <Tabs items={TabItems} />;
};

const ButtonOptionsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 24px;
`;
