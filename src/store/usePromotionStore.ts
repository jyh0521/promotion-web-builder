import { create } from 'zustand';
import { produce } from 'immer';
import { ContainerType, ImageType, PromotionType } from '../common/types';

interface PromotionStore {
  promotion: PromotionType;
  addImage: () => void;
  updateImage: (imageBlock: ImageType) => void;
}

export const usePromotionStore = create<PromotionStore>((set) => ({
  promotion: {
    name: 'Untitled',
    blocks: {
      1: {
        blockId: 1,
        type: 'container',
        children: [],
      } as ContainerType,
    },
    events: {},
    conditions: {},
    actions: {},
  },

  addImage: () =>
    set(
      produce((state) => {
        const newId = Object.keys(state.promotion.blocks).length + 1;
        state.promotion.blocks[newId] = {
          blockId: newId,
          type: 'image',
          url: '/images/test.png',
          width: 390,
          height: 500,
        } as ImageType;
        (state.promotion.blocks[1] as ContainerType).children.push(newId);
      }),
    ),

  updateImage: (imageBlock: ImageType) =>
    set(
      produce((state) => {
        state.promotion.blocks[imageBlock.blockId] = imageBlock;
      }),
    ),
}));
