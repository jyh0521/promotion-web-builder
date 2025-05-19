import { create } from 'zustand';
import { produce } from 'immer';
import { ButtonType, ContainerType, Event, ImageType, ModalType, PromotionType, TrueCondition } from '@/common/types';

interface PromotionStore {
  promotion: PromotionType;
  updatePromotionName: (name: string) => void;
  addImage: () => void;
  updateImage: (imageBlock: ImageType) => void;
  addButton: (selectedBlockId: number) => void;
  updateButton: (buttonBlock: ButtonType) => void;
  // addModal: (selectedBlockId: number) => void;
  addClickEvent: (state: PromotionStore, blockId: number) => number;
  addTrueConditionToEvent: (eventId: number, blockId: number, state: any) => void;
  getEventsByBlockId: (selectedBlockId: number) => Event[];
  addOpenUrlAction: ({ eventId, url, trueAction }: { eventId: number; url: string; trueAction: boolean }) => void;
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

  updatePromotionName: (name: string) =>
    set(
      produce((state) => {
        state.promotion.name = name;
      }),
    ),

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

  addOpenUrlAction: ({ eventId, url, trueAction = true }: { eventId: number; url: string; trueAction: boolean }) =>
    set(
      produce((state) => {
        const event = state.promotion.events[eventId];
        let actionId = 0;

        if (!event) {
          actionId = Object.keys(state.promotion.actions).length + 1;
        } else {
          if (trueAction) {
            actionId = event.conditionAction?.true?.actionId ?? Object.keys(state.promotion.actions).length + 1;
          } else {
            actionId = event.conditionAction?.false?.actionId ?? Object.keys(state.promotion.actions).length + 1;
          }
        }

        state.promotion.actions[actionId] = {
          actionId,
          type: 'openUrl',
          url,
        };

        if (trueAction) {
          state.promotion.events[eventId].conditionAction = {
            true: {
              actionId,
            },
          };
        } else {
          state.promotion.events[eventId].conditionAction = {
            false: {
              actionId,
            },
          };
        }
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

  getEventsByBlockId: (selectedBlockId: number): Event[] => {
    const events = Object.values(usePromotionStore.getState().promotion.events).filter(
      (event) => event.blockId === selectedBlockId,
    );

    return events;
  },
}));
