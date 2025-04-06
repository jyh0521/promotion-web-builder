import { create } from 'zustand';
import { produce } from 'immer';
import { ButtonType, ClickEvent, ContainerType, ImageType, ModalType, PromotionType } from '@/common/types';

interface PromotionStore {
  promotion: PromotionType;
  addImage: () => void;
  updateImage: (imageBlock: ImageType) => void;
  addButton: (selectedBlockId: number) => void;
  updateButton: (buttonBlock: ButtonType) => void;
  // addModal: (selectedBlockId: number) => void;
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
        const blockId = Object.keys(state.promotion.blocks).length + 1;
        state.promotion.blocks[blockId] = {
          blockId,
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
        (state.promotion.blocks[selectedBlockId] as ContainerType).nodes?.push(blockId);

        // 일단 버튼 추가할 때, 클릭 이벤트 자동으로 달리게 해둠
        const eventId = Object.keys(state.promotion.events).length + 1;

        state.promotion.events[eventId] = {
          eventId,
          blockId,
          type: 'click',
          condition: [],
          conditionAction: {
            true: {},
            false: {},
          },
          action: [],
        };

        (state.promotion.blocks[blockId] as ContainerType).events?.push(eventId);
      }),
    );
  },

  updateButton: (buttonBlock: ButtonType) =>
    set(
      produce((state) => {
        state.promotion.blocks[buttonBlock.blockId] = buttonBlock;
      }),
    ),

  // addModal: (selectedBlockId: number) => {
  //   set(
  //     produce((state) => {
  //       const newId = Object.keys(state.promotion.blocks).length + 1;

  //       state.promotion.blocks[newId] = {
  //         blockId: newId,
  //         type: 'modal',
  //         nodes: [newId + 1],
  //       } as ModalType;

  //       state.promotion.blocks[newId + 1] = {
  //         blockId: newId + 1,
  //         type: 'image',
  //         url: '/images/test.png',
  //         width: 390,
  //         height: 500,
  //         nodes: [newId + 2, newId + 3],
  //       } as ImageType;

  //       state.promotion.blocks[newId + 2] = {
  //         blockId: newId + 2,
  //         type: 'button',
  //         text: 'ModalButton',
  //         width: 308,
  //         height: 50,
  //       } as ButtonType;

  //       state.promotion.blocks[newId + 3] = {
  //         blockId: newId + 3,
  //         type: 'button',
  //         text: 'ModalButton',
  //         width: 308,
  //         height: 50,
  //       } as ButtonType;

  //       (state.promotion.blocks[selectedBlockId] as ContainerType).nodes = [newId];
  //     }),
  //   );
  // },
}));
