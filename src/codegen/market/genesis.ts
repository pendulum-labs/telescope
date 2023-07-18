import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Drop, DropAmino, DropSDKType } from "./drop";
import { Member, MemberAmino, MemberSDKType } from "./member";
import { Burnings, BurningsAmino, BurningsSDKType } from "./burnings";
import { Order, OrderAmino, OrderSDKType } from "./order";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
  params: Params;
  poolList: Pool[];
  dropList: Drop[];
  memberList: Member[];
  burningsList: Burnings[];
  orderList: Order[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pendulumlabs.market.market.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the market module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  poolList: PoolAmino[];
  dropList: DropAmino[];
  memberList: MemberAmino[];
  burningsList: BurningsAmino[];
  orderList: OrderAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pendulumlabs.market.market.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the market module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  poolList: PoolSDKType[];
  dropList: DropSDKType[];
  memberList: MemberSDKType[];
  burningsList: BurningsSDKType[];
  orderList: OrderSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    poolList: [],
    dropList: [],
    memberList: [],
    burningsList: [],
    orderList: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.dropList) {
      Drop.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.memberList) {
      Member.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.burningsList) {
      Burnings.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.orderList) {
      Order.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolList.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.dropList.push(Drop.decode(reader, reader.uint32()));
          break;
        case 4:
          message.memberList.push(Member.decode(reader, reader.uint32()));
          break;
        case 5:
          message.burningsList.push(Burnings.decode(reader, reader.uint32()));
          break;
        case 6:
          message.orderList.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.dropList = object.dropList?.map(e => Drop.fromPartial(e)) || [];
    message.memberList = object.memberList?.map(e => Member.fromPartial(e)) || [];
    message.burningsList = object.burningsList?.map(e => Burnings.fromPartial(e)) || [];
    message.orderList = object.orderList?.map(e => Order.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => Pool.fromAmino(e)) : [],
      dropList: Array.isArray(object?.dropList) ? object.dropList.map((e: any) => Drop.fromAmino(e)) : [],
      memberList: Array.isArray(object?.memberList) ? object.memberList.map((e: any) => Member.fromAmino(e)) : [],
      burningsList: Array.isArray(object?.burningsList) ? object.burningsList.map((e: any) => Burnings.fromAmino(e)) : [],
      orderList: Array.isArray(object?.orderList) ? object.orderList.map((e: any) => Order.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.poolList) {
      obj.poolList = message.poolList.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.poolList = [];
    }
    if (message.dropList) {
      obj.dropList = message.dropList.map(e => e ? Drop.toAmino(e) : undefined);
    } else {
      obj.dropList = [];
    }
    if (message.memberList) {
      obj.memberList = message.memberList.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.memberList = [];
    }
    if (message.burningsList) {
      obj.burningsList = message.burningsList.map(e => e ? Burnings.toAmino(e) : undefined);
    } else {
      obj.burningsList = [];
    }
    if (message.orderList) {
      obj.orderList = message.orderList.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orderList = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};