import { ButtonOptionsContainer } from './ButtonOptionsContainer';
import { usePromotionStore } from '@/store/usePromotionStore';
import { Descriptions, Input, Select } from 'antd';

export const FeatureOption = ({ selectedBlockId }: { selectedBlockId: number }) => {
  const { getEventsByBlockId, addOpenUrlAction } = usePromotionStore();

  const events = getEventsByBlockId(selectedBlockId);

  return (
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
            <Descriptions.Item label="URL">
              <Input
                onChange={(e) => {
                  addOpenUrlAction({
                    eventId: event.eventId,
                    url: e.target.value,
                    trueAction: true,
                  });
                }}
              />
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
  );
};
