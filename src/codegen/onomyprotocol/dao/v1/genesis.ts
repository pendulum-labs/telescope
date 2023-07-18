import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the dao module's genesis state. */
export interface GenesisState {
  /** the dao module managed params */
  params: Params;
  /** the list of dao module coins */
  treasuryBalance: Coin[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/onomyprotocol.dao.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the dao module's genesis state. */
export interface GenesisStateAmino {
  /** the dao module managed params */
  params?: ParamsAmino;
  /** the list of dao module coins */
  treasury_balance: CoinAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/onomyprotocol.dao.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the dao module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  treasury_balance: CoinSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    treasuryBalance: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.treasuryBalance) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.treasuryBalance.push(Coin.decode(reader, reader.uint32()));
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
    message.treasuryBalance = object.treasuryBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      treasuryBalance: Array.isArray(object?.treasury_balance) ? object.treasury_balance.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.treasuryBalance) {
      obj.treasury_balance = message.treasuryBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.treasury_balance = [];
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
      typeUrl: "/onomyprotocol.dao.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};