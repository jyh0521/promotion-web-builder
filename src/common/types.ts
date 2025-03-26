export interface PromotionType {
  blocks: Record<
    number,
    Header | Container | Image | Button | Modal | Snackbar | Carousel
  >;
  events: Record<number, ClickEvent>;
  conditions: Record<number, NewbieCondition>;
  actions: Record<number, CouponDownAction>;
}

// Block
interface Block {
  id: number;
  width: number;
  height: number;
  children: number[];
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
}

interface Header extends Block {
  type: "header";
  showYn: boolean;
  backgroundColor: string;
  closeIconType: "close" | "back";
  closeIconColor: "black" | "white";
}

interface Container extends Block {
  type: "container";
}

interface Image extends Block {
  type: "image";
  imageUrl: string;
}

interface Button extends Block {
  type: "button";
  text: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  boderRadius: number;
  backgroudColor: string;
  disabled: boolean; // default false
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
  disabledBackgroundColor: string;
  disabledColor: string;
  canChangeState: boolean;
}

interface Modal extends Block {
  // 모달은 container와 image와 button을 조합해서 만들 수 있음
}

interface Snackbar extends Block {
  type: "snackbar";
  message: string;
}

interface Carousel extends Block {
  type: "carousel";
}

// Event
interface Event {
  id: number;
  blockId: number;
  condition: number[];
  conditionAction: {
    true: number[];
    false: number[];
  };
}

interface ClickEvent extends Event {
  type: "click";
  action: number[];
}

// Condition
interface Condition {
  child: number[];
  eventId?: number;
  blockId?: number;
}

interface NewbieCondition extends Condition {
  type: "newbie";
}

// Action
interface Action {
  id: number;
}

interface CouponDownAction extends Action {
  type: "couponDown";
  couponId: number[];
}
