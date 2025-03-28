import { create } from 'zustand';
import { produce } from 'immer';
import { ButtonType, ContainerType, ImageType, PromotionType } from '@/common/types';

interface PromotionStore {
  promotion: PromotionType;
  addImage: () => void;
  updateImage: (imageBlock: ImageType) => void;
  addButton: (selectedBlockId: number) => void;
  updateButton: (buttonBlock: ButtonType) => void;
}

export const usePromotionStore = create<PromotionStore>((set) => ({
  promotion: {
    name: 'Untitled',
    blocks: {
      1: {
        blockId: 1,
        type: 'container',
        nodes: [],
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
          nodes: [],
        } as ImageType;
        (state.promotion.blocks[1] as ContainerType).nodes?.push(newId);
      }),
    ),

  updateImage: (imageBlock: ImageType) =>
    set(
      produce((state) => {
        state.promotion.blocks[imageBlock.blockId] = imageBlock;
      }),
    ),

  addButton: (selectedBlockId: number) => {
    set(
      produce((state) => {
        const newId = Object.keys(state.promotion.blocks).length + 1;
        state.promotion.blocks[newId] = {
          blockId: newId,
          type: 'button',
          text: 'Button',
          width: 350,
          height: 56,
          left: 20,
          bottom: 60,
          fontSize: 17,
          fontWeight: 600,
          lineHeight: 140,
          borderRadius: 8,
          color: '#FFFFFF',
          backgroudColor: '#00bed6',
          disabled: false,
          disabledBackgroundColor: '#00bed6',
          disabledColor: '#FFFFFF',
          hoverBackgroundColor: '#00bed6',
          hoverColor: '#FFFFFF',
        } as ButtonType;
        (state.promotion.blocks[selectedBlockId] as ContainerType).nodes?.push(newId);
      }),
    );
  },

  updateButton: (buttonBlock: ButtonType) =>
    set(
      produce((state) => {
        state.promotion.blocks[buttonBlock.blockId] = buttonBlock;
      }),
    ),
}));
