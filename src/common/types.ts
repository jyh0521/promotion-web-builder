export interface PromotionType {
  name: string;
  blocks: Record<number, ContainerType | HeaderType | ImageType | ButtonType | ModalType | SnackbarType | CarouselType>;
  events: Record<number, ClickEvent>;
  conditions: Record<number, NewbieCondition>;
  actions: Record<number, CouponDownAction>;
}

// Block
interface Block {
  blockId: number;
  width?: number;
  height?: number;
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  nodes?: number[];
  events?: number[];
}

export interface ContainerType extends Block {
  type: 'container';
}
interface HeaderType extends Block {
  type: 'header';
  showYn: boolean;
  backgroundColor: string;
  closeIconType: 'close' | 'back';
  closeIconColor: 'black' | 'white';
}

export interface ImageType extends Block {
  type: 'image';
  url: string;
}

export interface ButtonType extends Block {
  type: 'button';
  text: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  borderRadius: number;
  backgroudColor: string;
  disabled: boolean;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
  disabledBackgroundColor: string;
  disabledColor: string;
}

export interface ModalType extends Block {
  type: 'modal';
  image: ModalImageType;
  buttons: ModalButtonType[];
}

interface ModalImageType {
  url: string;
  width: number;
  height: number;
}

interface ModalButtonType {
  text: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  borderRadius: number;
  backgroudColor: string;
  disabled: boolean;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
  disabledBackgroundColor: string;
  disabledColor: string;
}

interface SnackbarType extends Block {
  type: 'snackbar';
  message: string;
}

interface CarouselType extends Block {
  type: 'carousel';
}

// Event
interface Event {
  eventId: number;
  blockId: number;
  condition: number[];
  conditionAction: {
    true: ConditionAction;
    false: ConditionAction;
  };
}

interface ConditionAction {
  firstActionId: number;
  secondActionId: number;
}

interface ClickEvent extends Event {
  type: 'click';
  action: number[];
}

// Condition
interface Condition {
  conditionId: number;
  child: number[];
  eventId?: number;
  blockId?: number;
}

interface TrueCondition extends Condition {
  type: 'true';
}

interface NewbieCondition extends Condition {
  type: 'newbie';
}

interface MarketingCondition extends Condition {
  type: 'marketing';
}

// Action
interface Action {
  actionId: number;
}

interface CouponDownAction extends Action {
  type: 'couponDown';
  couponCampaignIds: number[];
}

interface MarketingAgreeAction extends Action {
  type: 'marketingAgree';
}

interface CopyAction extends Action {
  type: 'copy';
}

interface ShareAction extends Action {
  type: 'share';
}

interface ExternalWebAction extends Action {
  type: 'externalWeb';
}

interface AddCouponAction extends Action {
  type: 'addCoupon';
}

interface ReservationAction extends Action {
  type: 'reservation';
}

interface ModalAction extends Action {
  type: 'modal';
}

interface SnackbarAction extends Action {
  type: 'snackbar';
}

interface ModalSnackbarAction extends Action {
  modalUrl: '';
  snackbarMessage: '';
}
