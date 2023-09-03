import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgCreatePool {
  creator: string;
  coinA: string;
  coinB: string;
}
export interface MsgCreatePoolProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgCreatePool";
  value: Uint8Array;
}
export interface MsgCreatePoolAmino {
  creator: string;
  coinA: string;
  coinB: string;
}
export interface MsgCreatePoolAminoMsg {
  type: "/pendulumlabs.market.market.MsgCreatePool";
  value: MsgCreatePoolAmino;
}
export interface MsgCreatePoolSDKType {
  creator: string;
  coinA: string;
  coinB: string;
}
export interface MsgCreatePoolResponse {}
export interface MsgCreatePoolResponseProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgCreatePoolResponse";
  value: Uint8Array;
}
export interface MsgCreatePoolResponseAmino {}
export interface MsgCreatePoolResponseAminoMsg {
  type: "/pendulumlabs.market.market.MsgCreatePoolResponse";
  value: MsgCreatePoolResponseAmino;
}
export interface MsgCreatePoolResponseSDKType {}
export interface MsgCreateDrop {
  creator: string;
  pair: string;
  drops: string;
}
export interface MsgCreateDropProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgCreateDrop";
  value: Uint8Array;
}
export interface MsgCreateDropAmino {
  creator: string;
  pair: string;
  drops: string;
}
export interface MsgCreateDropAminoMsg {
  type: "/pendulumlabs.market.market.MsgCreateDrop";
  value: MsgCreateDropAmino;
}
export interface MsgCreateDropSDKType {
  creator: string;
  pair: string;
  drops: string;
}
export interface MsgCreateDropResponse {}
export interface MsgCreateDropResponseProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgCreateDropResponse";
  value: Uint8Array;
}
export interface MsgCreateDropResponseAmino {}
export interface MsgCreateDropResponseAminoMsg {
  type: "/pendulumlabs.market.market.MsgCreateDropResponse";
  value: MsgCreateDropResponseAmino;
}
export interface MsgCreateDropResponseSDKType {}
export interface MsgRedeemDrop {
  creator: string;
  uid: string;
}
export interface MsgRedeemDropProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop";
  value: Uint8Array;
}
export interface MsgRedeemDropAmino {
  creator: string;
  uid: string;
}
export interface MsgRedeemDropAminoMsg {
  type: "/pendulumlabs.market.market.MsgRedeemDrop";
  value: MsgRedeemDropAmino;
}
export interface MsgRedeemDropSDKType {
  creator: string;
  uid: string;
}
export interface MsgRedeemDropResponse {}
export interface MsgRedeemDropResponseProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgRedeemDropResponse";
  value: Uint8Array;
}
export interface MsgRedeemDropResponseAmino {}
export interface MsgRedeemDropResponseAminoMsg {
  type: "/pendulumlabs.market.market.MsgRedeemDropResponse";
  value: MsgRedeemDropResponseAmino;
}
export interface MsgRedeemDropResponseSDKType {}
export interface MsgCreateOrder {
  creator: string;
  denomAsk: string;
  denomBid: string;
  orderType: string;
  amount: string;
  rate: string[];
  prev: string;
  next: string;
}
export interface MsgCreateOrderProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgCreateOrder";
  value: Uint8Array;
}
export interface MsgCreateOrderAmino {
  creator: string;
  denomAsk: string;
  denomBid: string;
  orderType: string;
  amount: string;
  rate: string[];
  prev: string;
  next: string;
}
export interface MsgCreateOrderAminoMsg {
  type: "/pendulumlabs.market.market.MsgCreateOrder";
  value: MsgCreateOrderAmino;
}
export interface MsgCreateOrderSDKType {
  creator: string;
  denomAsk: string;
  denomBid: string;
  orderType: string;
  amount: string;
  rate: string[];
  prev: string;
  next: string;
}
export interface MsgCreateOrderResponse {
  uid: Long;
}
export interface MsgCreateOrderResponseProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgCreateOrderResponse";
  value: Uint8Array;
}
export interface MsgCreateOrderResponseAmino {
  uid: string;
}
export interface MsgCreateOrderResponseAminoMsg {
  type: "/pendulumlabs.market.market.MsgCreateOrderResponse";
  value: MsgCreateOrderResponseAmino;
}
export interface MsgCreateOrderResponseSDKType {
  uid: Long;
}
export interface MsgCancelOrder {
  creator: string;
  uid: string;
}
export interface MsgCancelOrderProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgCancelOrder";
  value: Uint8Array;
}
export interface MsgCancelOrderAmino {
  creator: string;
  uid: string;
}
export interface MsgCancelOrderAminoMsg {
  type: "/pendulumlabs.market.market.MsgCancelOrder";
  value: MsgCancelOrderAmino;
}
export interface MsgCancelOrderSDKType {
  creator: string;
  uid: string;
}
export interface MsgCancelOrderResponse {}
export interface MsgCancelOrderResponseProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgCancelOrderResponse";
  value: Uint8Array;
}
export interface MsgCancelOrderResponseAmino {}
export interface MsgCancelOrderResponseAminoMsg {
  type: "/pendulumlabs.market.market.MsgCancelOrderResponse";
  value: MsgCancelOrderResponseAmino;
}
export interface MsgCancelOrderResponseSDKType {}
export interface MsgMarketOrder {
  creator: string;
  denomAsk: string;
  amountAsk: string;
  denomBid: string;
  amountBid: string;
  /** Slippage is percentage based on (parameter / 10000), 9999 representing as 99.99% */
  slippage: string;
}
export interface MsgMarketOrderProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgMarketOrder";
  value: Uint8Array;
}
export interface MsgMarketOrderAmino {
  creator: string;
  denomAsk: string;
  amountAsk: string;
  denomBid: string;
  amountBid: string;
  /** Slippage is percentage based on (parameter / 10000), 9999 representing as 99.99% */
  slippage: string;
}
export interface MsgMarketOrderAminoMsg {
  type: "/pendulumlabs.market.market.MsgMarketOrder";
  value: MsgMarketOrderAmino;
}
export interface MsgMarketOrderSDKType {
  creator: string;
  denomAsk: string;
  amountAsk: string;
  denomBid: string;
  amountBid: string;
  slippage: string;
}
export interface MsgMarketOrderResponse {
  amountBid: string;
  amountAsk: string;
  slippage: string;
}
export interface MsgMarketOrderResponseProtoMsg {
  typeUrl: "/pendulumlabs.market.market.MsgMarketOrderResponse";
  value: Uint8Array;
}
export interface MsgMarketOrderResponseAmino {
  amountBid: string;
  amountAsk: string;
  slippage: string;
}
export interface MsgMarketOrderResponseAminoMsg {
  type: "/pendulumlabs.market.market.MsgMarketOrderResponse";
  value: MsgMarketOrderResponseAmino;
}
export interface MsgMarketOrderResponseSDKType {
  amountBid: string;
  amountAsk: string;
  slippage: string;
}
function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    creator: "",
    coinA: "",
    coinB: ""
  };
}
export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.coinA !== "") {
      writer.uint32(18).string(message.coinA);
    }
    if (message.coinB !== "") {
      writer.uint32(26).string(message.coinB);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.coinA = reader.string();
          break;
        case 3:
          message.coinB = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.creator = object.creator ?? "";
    message.coinA = object.coinA ?? "";
    message.coinB = object.coinB ?? "";
    return message;
  },
  fromAmino(object: MsgCreatePoolAmino): MsgCreatePool {
    return {
      creator: object.creator,
      coinA: object.coinA,
      coinB: object.coinB
    };
  },
  toAmino(message: MsgCreatePool): MsgCreatePoolAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.coinA = message.coinA;
    obj.coinB = message.coinB;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolAminoMsg): MsgCreatePool {
    return MsgCreatePool.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolProtoMsg): MsgCreatePool {
    return MsgCreatePool.decode(message.value);
  },
  toProto(message: MsgCreatePool): Uint8Array {
    return MsgCreatePool.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePool): MsgCreatePoolProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgCreatePool",
      value: MsgCreatePool.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}
export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  },
  fromAmino(_: MsgCreatePoolResponseAmino): MsgCreatePoolResponse {
    return {};
  },
  toAmino(_: MsgCreatePoolResponse): MsgCreatePoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePoolResponseAminoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePoolResponseProtoMsg): MsgCreatePoolResponse {
    return MsgCreatePoolResponse.decode(message.value);
  },
  toProto(message: MsgCreatePoolResponse): Uint8Array {
    return MsgCreatePoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePoolResponse): MsgCreatePoolResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgCreatePoolResponse",
      value: MsgCreatePoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDrop(): MsgCreateDrop {
  return {
    creator: "",
    pair: "",
    drops: ""
  };
}
export const MsgCreateDrop = {
  encode(message: MsgCreateDrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair);
    }
    if (message.drops !== "") {
      writer.uint32(26).string(message.drops);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pair = reader.string();
          break;
        case 3:
          message.drops = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateDrop>): MsgCreateDrop {
    const message = createBaseMsgCreateDrop();
    message.creator = object.creator ?? "";
    message.pair = object.pair ?? "";
    message.drops = object.drops ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDropAmino): MsgCreateDrop {
    return {
      creator: object.creator,
      pair: object.pair,
      drops: object.drops
    };
  },
  toAmino(message: MsgCreateDrop): MsgCreateDropAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.pair = message.pair;
    obj.drops = message.drops;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDropAminoMsg): MsgCreateDrop {
    return MsgCreateDrop.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDropProtoMsg): MsgCreateDrop {
    return MsgCreateDrop.decode(message.value);
  },
  toProto(message: MsgCreateDrop): Uint8Array {
    return MsgCreateDrop.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDrop): MsgCreateDropProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgCreateDrop",
      value: MsgCreateDrop.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDropResponse(): MsgCreateDropResponse {
  return {};
}
export const MsgCreateDropResponse = {
  encode(_: MsgCreateDropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCreateDropResponse>): MsgCreateDropResponse {
    const message = createBaseMsgCreateDropResponse();
    return message;
  },
  fromAmino(_: MsgCreateDropResponseAmino): MsgCreateDropResponse {
    return {};
  },
  toAmino(_: MsgCreateDropResponse): MsgCreateDropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDropResponseAminoMsg): MsgCreateDropResponse {
    return MsgCreateDropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDropResponseProtoMsg): MsgCreateDropResponse {
    return MsgCreateDropResponse.decode(message.value);
  },
  toProto(message: MsgCreateDropResponse): Uint8Array {
    return MsgCreateDropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDropResponse): MsgCreateDropResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgCreateDropResponse",
      value: MsgCreateDropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemDrop(): MsgRedeemDrop {
  return {
    creator: "",
    uid: ""
  };
}
export const MsgRedeemDrop = {
  encode(message: MsgRedeemDrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uid !== "") {
      writer.uint32(18).string(message.uid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemDrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemDrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRedeemDrop>): MsgRedeemDrop {
    const message = createBaseMsgRedeemDrop();
    message.creator = object.creator ?? "";
    message.uid = object.uid ?? "";
    return message;
  },
  fromAmino(object: MsgRedeemDropAmino): MsgRedeemDrop {
    return {
      creator: object.creator,
      uid: object.uid
    };
  },
  toAmino(message: MsgRedeemDrop): MsgRedeemDropAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.uid = message.uid;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemDropAminoMsg): MsgRedeemDrop {
    return MsgRedeemDrop.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemDropProtoMsg): MsgRedeemDrop {
    return MsgRedeemDrop.decode(message.value);
  },
  toProto(message: MsgRedeemDrop): Uint8Array {
    return MsgRedeemDrop.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemDrop): MsgRedeemDropProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgRedeemDrop",
      value: MsgRedeemDrop.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemDropResponse(): MsgRedeemDropResponse {
  return {};
}
export const MsgRedeemDropResponse = {
  encode(_: MsgRedeemDropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemDropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemDropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRedeemDropResponse>): MsgRedeemDropResponse {
    const message = createBaseMsgRedeemDropResponse();
    return message;
  },
  fromAmino(_: MsgRedeemDropResponseAmino): MsgRedeemDropResponse {
    return {};
  },
  toAmino(_: MsgRedeemDropResponse): MsgRedeemDropResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedeemDropResponseAminoMsg): MsgRedeemDropResponse {
    return MsgRedeemDropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRedeemDropResponseProtoMsg): MsgRedeemDropResponse {
    return MsgRedeemDropResponse.decode(message.value);
  },
  toProto(message: MsgRedeemDropResponse): Uint8Array {
    return MsgRedeemDropResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemDropResponse): MsgRedeemDropResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgRedeemDropResponse",
      value: MsgRedeemDropResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOrder(): MsgCreateOrder {
  return {
    creator: "",
    denomAsk: "",
    denomBid: "",
    orderType: "",
    amount: "",
    rate: [],
    prev: "",
    next: ""
  };
}
export const MsgCreateOrder = {
  encode(message: MsgCreateOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denomAsk !== "") {
      writer.uint32(18).string(message.denomAsk);
    }
    if (message.denomBid !== "") {
      writer.uint32(26).string(message.denomBid);
    }
    if (message.orderType !== "") {
      writer.uint32(34).string(message.orderType);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    for (const v of message.rate) {
      writer.uint32(50).string(v!);
    }
    if (message.prev !== "") {
      writer.uint32(58).string(message.prev);
    }
    if (message.next !== "") {
      writer.uint32(66).string(message.next);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denomAsk = reader.string();
          break;
        case 3:
          message.denomBid = reader.string();
          break;
        case 4:
          message.orderType = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.rate.push(reader.string());
          break;
        case 7:
          message.prev = reader.string();
          break;
        case 8:
          message.next = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateOrder>): MsgCreateOrder {
    const message = createBaseMsgCreateOrder();
    message.creator = object.creator ?? "";
    message.denomAsk = object.denomAsk ?? "";
    message.denomBid = object.denomBid ?? "";
    message.orderType = object.orderType ?? "";
    message.amount = object.amount ?? "";
    message.rate = object.rate?.map(e => e) || [];
    message.prev = object.prev ?? "";
    message.next = object.next ?? "";
    return message;
  },
  fromAmino(object: MsgCreateOrderAmino): MsgCreateOrder {
    return {
      creator: object.creator,
      denomAsk: object.denomAsk,
      denomBid: object.denomBid,
      orderType: object.orderType,
      amount: object.amount,
      rate: Array.isArray(object?.rate) ? object.rate.map((e: any) => e) : [],
      prev: object.prev,
      next: object.next
    };
  },
  toAmino(message: MsgCreateOrder): MsgCreateOrderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.denomAsk = message.denomAsk;
    obj.denomBid = message.denomBid;
    obj.orderType = message.orderType;
    obj.amount = message.amount;
    if (message.rate) {
      obj.rate = message.rate.map(e => e);
    } else {
      obj.rate = [];
    }
    obj.prev = message.prev;
    obj.next = message.next;
    return obj;
  },
  fromAminoMsg(object: MsgCreateOrderAminoMsg): MsgCreateOrder {
    return MsgCreateOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOrderProtoMsg): MsgCreateOrder {
    return MsgCreateOrder.decode(message.value);
  },
  toProto(message: MsgCreateOrder): Uint8Array {
    return MsgCreateOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOrder): MsgCreateOrderProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgCreateOrder",
      value: MsgCreateOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCreateOrderResponse(): MsgCreateOrderResponse {
  return {
    uid: Long.UZERO
  };
}
export const MsgCreateOrderResponse = {
  encode(message: MsgCreateOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.uid.isZero()) {
      writer.uint32(8).uint64(message.uid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateOrderResponse>): MsgCreateOrderResponse {
    const message = createBaseMsgCreateOrderResponse();
    message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateOrderResponseAmino): MsgCreateOrderResponse {
    return {
      uid: Long.fromString(object.uid)
    };
  },
  toAmino(message: MsgCreateOrderResponse): MsgCreateOrderResponseAmino {
    const obj: any = {};
    obj.uid = message.uid ? message.uid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateOrderResponseAminoMsg): MsgCreateOrderResponse {
    return MsgCreateOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateOrderResponseProtoMsg): MsgCreateOrderResponse {
    return MsgCreateOrderResponse.decode(message.value);
  },
  toProto(message: MsgCreateOrderResponse): Uint8Array {
    return MsgCreateOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateOrderResponse): MsgCreateOrderResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgCreateOrderResponse",
      value: MsgCreateOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOrder(): MsgCancelOrder {
  return {
    creator: "",
    uid: ""
  };
}
export const MsgCancelOrder = {
  encode(message: MsgCancelOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uid !== "") {
      writer.uint32(18).string(message.uid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder {
    const message = createBaseMsgCancelOrder();
    message.creator = object.creator ?? "";
    message.uid = object.uid ?? "";
    return message;
  },
  fromAmino(object: MsgCancelOrderAmino): MsgCancelOrder {
    return {
      creator: object.creator,
      uid: object.uid
    };
  },
  toAmino(message: MsgCancelOrder): MsgCancelOrderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.uid = message.uid;
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderAminoMsg): MsgCancelOrder {
    return MsgCancelOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelOrderProtoMsg): MsgCancelOrder {
    return MsgCancelOrder.decode(message.value);
  },
  toProto(message: MsgCancelOrder): Uint8Array {
    return MsgCancelOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrder): MsgCancelOrderProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgCancelOrder",
      value: MsgCancelOrder.encode(message).finish()
    };
  }
};
function createBaseMsgCancelOrderResponse(): MsgCancelOrderResponse {
  return {};
}
export const MsgCancelOrderResponse = {
  encode(_: MsgCancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = createBaseMsgCancelOrderResponse();
    return message;
  },
  fromAmino(_: MsgCancelOrderResponseAmino): MsgCancelOrderResponse {
    return {};
  },
  toAmino(_: MsgCancelOrderResponse): MsgCancelOrderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelOrderResponseAminoMsg): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelOrderResponseProtoMsg): MsgCancelOrderResponse {
    return MsgCancelOrderResponse.decode(message.value);
  },
  toProto(message: MsgCancelOrderResponse): Uint8Array {
    return MsgCancelOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelOrderResponse): MsgCancelOrderResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgCancelOrderResponse",
      value: MsgCancelOrderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMarketOrder(): MsgMarketOrder {
  return {
    creator: "",
    denomAsk: "",
    amountAsk: "",
    denomBid: "",
    amountBid: "",
    slippage: ""
  };
}
export const MsgMarketOrder = {
  encode(message: MsgMarketOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denomAsk !== "") {
      writer.uint32(18).string(message.denomAsk);
    }
    if (message.amountAsk !== "") {
      writer.uint32(26).string(message.amountAsk);
    }
    if (message.denomBid !== "") {
      writer.uint32(34).string(message.denomBid);
    }
    if (message.amountBid !== "") {
      writer.uint32(42).string(message.amountBid);
    }
    if (message.slippage !== "") {
      writer.uint32(50).string(message.slippage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMarketOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMarketOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denomAsk = reader.string();
          break;
        case 3:
          message.amountAsk = reader.string();
          break;
        case 4:
          message.denomBid = reader.string();
          break;
        case 5:
          message.amountBid = reader.string();
          break;
        case 6:
          message.slippage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMarketOrder>): MsgMarketOrder {
    const message = createBaseMsgMarketOrder();
    message.creator = object.creator ?? "";
    message.denomAsk = object.denomAsk ?? "";
    message.amountAsk = object.amountAsk ?? "";
    message.denomBid = object.denomBid ?? "";
    message.amountBid = object.amountBid ?? "";
    message.slippage = object.slippage ?? "";
    return message;
  },
  fromAmino(object: MsgMarketOrderAmino): MsgMarketOrder {
    return {
      creator: object.creator,
      denomAsk: object.denomAsk,
      amountAsk: object.amountAsk,
      denomBid: object.denomBid,
      amountBid: object.amountBid,
      slippage: object.slippage
    };
  },
  toAmino(message: MsgMarketOrder): MsgMarketOrderAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.denomAsk = message.denomAsk;
    obj.amountAsk = message.amountAsk;
    obj.denomBid = message.denomBid;
    obj.amountBid = message.amountBid;
    obj.slippage = message.slippage;
    return obj;
  },
  fromAminoMsg(object: MsgMarketOrderAminoMsg): MsgMarketOrder {
    return MsgMarketOrder.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMarketOrderProtoMsg): MsgMarketOrder {
    return MsgMarketOrder.decode(message.value);
  },
  toProto(message: MsgMarketOrder): Uint8Array {
    return MsgMarketOrder.encode(message).finish();
  },
  toProtoMsg(message: MsgMarketOrder): MsgMarketOrderProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgMarketOrder",
      value: MsgMarketOrder.encode(message).finish()
    };
  }
};
function createBaseMsgMarketOrderResponse(): MsgMarketOrderResponse {
  return {
    amountBid: "",
    amountAsk: "",
    slippage: ""
  };
}
export const MsgMarketOrderResponse = {
  encode(message: MsgMarketOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amountBid !== "") {
      writer.uint32(10).string(message.amountBid);
    }
    if (message.amountAsk !== "") {
      writer.uint32(18).string(message.amountAsk);
    }
    if (message.slippage !== "") {
      writer.uint32(26).string(message.slippage);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMarketOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMarketOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountBid = reader.string();
          break;
        case 2:
          message.amountAsk = reader.string();
          break;
        case 3:
          message.slippage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMarketOrderResponse>): MsgMarketOrderResponse {
    const message = createBaseMsgMarketOrderResponse();
    message.amountBid = object.amountBid ?? "";
    message.amountAsk = object.amountAsk ?? "";
    message.slippage = object.slippage ?? "";
    return message;
  },
  fromAmino(object: MsgMarketOrderResponseAmino): MsgMarketOrderResponse {
    return {
      amountBid: object.amountBid,
      amountAsk: object.amountAsk,
      slippage: object.slippage
    };
  },
  toAmino(message: MsgMarketOrderResponse): MsgMarketOrderResponseAmino {
    const obj: any = {};
    obj.amountBid = message.amountBid;
    obj.amountAsk = message.amountAsk;
    obj.slippage = message.slippage;
    return obj;
  },
  fromAminoMsg(object: MsgMarketOrderResponseAminoMsg): MsgMarketOrderResponse {
    return MsgMarketOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMarketOrderResponseProtoMsg): MsgMarketOrderResponse {
    return MsgMarketOrderResponse.decode(message.value);
  },
  toProto(message: MsgMarketOrderResponse): Uint8Array {
    return MsgMarketOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMarketOrderResponse): MsgMarketOrderResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.MsgMarketOrderResponse",
      value: MsgMarketOrderResponse.encode(message).finish()
    };
  }
};