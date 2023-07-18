import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * leader earnings rates
   * 1,2,3 Comma separated, no space
   */
  earnRates: string;
  /** pool burning rate */
  burnRate: string;
  /** burn coin */
  burnCoin: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/pendulumlabs.market.market.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * leader earnings rates
   * 1,2,3 Comma separated, no space
   */
  earn_rates: string;
  /** pool burning rate */
  burn_rate: string;
  /** burn coin */
  burn_coin: string;
}
export interface ParamsAminoMsg {
  type: "/pendulumlabs.market.market.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  earn_rates: string;
  burn_rate: string;
  burn_coin: string;
}
function createBaseParams(): Params {
  return {
    earnRates: "",
    burnRate: "",
    burnCoin: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.earnRates !== "") {
      writer.uint32(10).string(message.earnRates);
    }
    if (message.burnRate !== "") {
      writer.uint32(18).string(message.burnRate);
    }
    if (message.burnCoin !== "") {
      writer.uint32(26).string(message.burnCoin);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.earnRates = reader.string();
          break;
        case 2:
          message.burnRate = reader.string();
          break;
        case 3:
          message.burnCoin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.earnRates = object.earnRates ?? "";
    message.burnRate = object.burnRate ?? "";
    message.burnCoin = object.burnCoin ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      earnRates: object.earn_rates,
      burnRate: object.burn_rate,
      burnCoin: object.burn_coin
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.earn_rates = message.earnRates;
    obj.burn_rate = message.burnRate;
    obj.burn_coin = message.burnCoin;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.Params",
      value: Params.encode(message).finish()
    };
  }
};