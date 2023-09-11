import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface Burnings {
  denom: string;
  amount: string;
}
export interface BurningsProtoMsg {
  typeUrl: "/pendulumlabs.market.market.Burnings";
  value: Uint8Array;
}
export interface BurningsAmino {
  denom: string;
  amount: string;
}
export interface BurningsAminoMsg {
  type: "/pendulumlabs.market.market.Burnings";
  value: BurningsAmino;
}
export interface BurningsSDKType {
  denom: string;
  amount: string;
}
export interface Burned {
  amount: string;
}
export interface BurnedProtoMsg {
  typeUrl: "/pendulumlabs.market.market.Burned";
  value: Uint8Array;
}
export interface BurnedAmino {
  amount: string;
}
export interface BurnedAminoMsg {
  type: "/pendulumlabs.market.market.Burned";
  value: BurnedAmino;
}
export interface BurnedSDKType {
  amount: string;
}
function createBaseBurnings(): Burnings {
  return {
    denom: "",
    amount: ""
  };
}
export const Burnings = {
  encode(message: Burnings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Burnings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurnings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Burnings>): Burnings {
    const message = createBaseBurnings();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: BurningsAmino): Burnings {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino(message: Burnings): BurningsAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: BurningsAminoMsg): Burnings {
    return Burnings.fromAmino(object.value);
  },
  fromProtoMsg(message: BurningsProtoMsg): Burnings {
    return Burnings.decode(message.value);
  },
  toProto(message: Burnings): Uint8Array {
    return Burnings.encode(message).finish();
  },
  toProtoMsg(message: Burnings): BurningsProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.Burnings",
      value: Burnings.encode(message).finish()
    };
  }
};
function createBaseBurned(): Burned {
  return {
    amount: ""
  };
}
export const Burned = {
  encode(message: Burned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Burned {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBurned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Burned>): Burned {
    const message = createBaseBurned();
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: BurnedAmino): Burned {
    return {
      amount: object.amount
    };
  },
  toAmino(message: Burned): BurnedAmino {
    const obj: any = {};
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: BurnedAminoMsg): Burned {
    return Burned.fromAmino(object.value);
  },
  fromProtoMsg(message: BurnedProtoMsg): Burned {
    return Burned.decode(message.value);
  },
  toProto(message: Burned): Uint8Array {
    return Burned.encode(message).finish();
  },
  toProtoMsg(message: Burned): BurnedProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.Burned",
      value: Burned.encode(message).finish()
    };
  }
};