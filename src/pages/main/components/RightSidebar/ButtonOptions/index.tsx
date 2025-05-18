import { useSelectedBlockIdStore } from '@/store/useSelectedBlockIdStore';
import { Tabs, TabsProps } from 'antd';
import { DesignOption } from './DesignOption';
import { FeatureOption } from './FeatureOption';

export const ButtonOptions = () => {
  const { selectedBlockId } = useSelectedBlockIdStore();

  if (!selectedBlockId) return null;

  const TabItems: TabsProps['items'] = [
    {
      key: 'ButtonDesign',
      label: 'Design',
      children: <DesignOption selectedBlockId={selectedBlockId} />,
    },
    {
      key: 'ButtonFeature',
      label: 'Feature',
      children: <FeatureOption selectedBlockId={selectedBlockId} />,
    },
  ];

  return <Tabs items={TabItems} />;
};
