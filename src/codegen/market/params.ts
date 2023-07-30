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
  /** market_fee (parameter / 1000), 9999 representing as 99.99% */
  marketFee: string;
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
  /** market_fee (parameter / 1000), 9999 representing as 99.99% */
  market_fee: string;
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
  market_fee: string;
}
function createBaseParams(): Params {
  return {
    earnRates: "",
    burnRate: "",
    burnCoin: "",
    marketFee: ""
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
    if (message.marketFee !== "") {
      writer.uint32(34).string(message.marketFee);
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
        case 4:
          message.marketFee = reader.string();
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
    message.marketFee = object.marketFee ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      earnRates: object.earn_rates,
      burnRate: object.burn_rate,
      burnCoin: object.burn_coin,
      marketFee: object.market_fee
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.earn_rates = message.earnRates;
    obj.burn_rate = message.burnRate;
    obj.burn_coin = message.burnCoin;
    obj.market_fee = message.marketFee;
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