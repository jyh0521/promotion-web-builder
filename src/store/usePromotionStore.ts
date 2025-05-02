import { create } from 'zustand';
import { produce } from 'immer';
import {
  ButtonType,
  ClickEvent,
  ConditionAction,
  ContainerType,
  Event,
  ImageType,
  ModalType,
  PromotionType,
  TrueCondition,
} from '@/common/types';

interface PromotionStore {
  promotion: PromotionType;
  addImage: () => void;
  updateImage: (imageBlock: ImageType) => void;
  addButton: (selectedBlockId: number) => void;
  updateButton: (buttonBlock: ButtonType) => void;
  // addModal: (selectedBlockId: number) => void;
  addClickEvent: (state: PromotionStore, blockId: number) => number;
  addTrueConditionToEvent: (eventId: number, blockId: number, state: any) => void;
  getEventsByBlockId: (selectedBlockId: number) => PromotionType['events'];
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
    events: [],
    conditions: [],
    actions: [],
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

  // 이벤트 추가 함수 분리
  addClickEvent: (state: PromotionStore, blockId: number) => {
    const eventId = Object.keys(state.promotion.events).length + 1;
    state.promotion.events[eventId] = {
      eventId,
      blockId,
      type: 'click',
      condition: [],
      // conditionAction: {
      //   true: {} as ConditionAction,
      //   false: {} as ConditionAction,
      // },
      action: [],
    };

    (state.promotion.blocks[blockId] as ContainerType).events?.push(eventId);

    return eventId;
  },

  addTrueConditionToEvent: (eventId: number, blockId: number, state: PromotionStore) => {
    const conditionId = Object.keys(state.promotion.conditions).length + 1;
    state.promotion.conditions[conditionId] = {
      conditionId,
      type: 'true',
      child: [],
      eventId,
      blockId,
    } as TrueCondition;
    state.promotion.events[eventId].condition.push(conditionId);
  },

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

        // 분리된 함수 사용
        const eventId = usePromotionStore.getState().addClickEvent(state, blockId);
        // true 컨디션 자동 추가
        usePromotionStore.getState().addTrueConditionToEvent(eventId, blockId, state);
      }),
    );
  },

  updateButton: (buttonBlock: ButtonType) =>
    set(
      produce((state) => {
        state.promotion.blocks[buttonBlock.blockId] = buttonBlock;
      }),
    ),

  // insertTrueCondition: (eventId: number, conditionId: number) => {
  //   set(
  //     produce((state) => {
  //       state.promotion.events[eventId].condition.push(conditionId);
  //     }),
  //   );
  // },

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
  addModal: (selectedBlockId: number) => {
    set(
      produce((state) => {
        const newId = Object.keys(state.promotion.blocks).length + 1;
        state.promotion.blocks[newId] = {
          blockId: newId,
          type: 'modal',
          image: {
            blockId: newId + 1,
            type: 'image',
            url: '/images/test.png',
            width: 390,
            height: 500,
          },
          buttons: [],
        } as ModalType;
        (state.promotion.blocks[selectedBlockId] as ContainerType).nodes = [newId];
      }),
    );
  },

  getEventsByBlockId: (selectedBlockId: number): PromotionType['events'] => {
    return usePromotionStore.getState().promotion.events;
  },
}));
