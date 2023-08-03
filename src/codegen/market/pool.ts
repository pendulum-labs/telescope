import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Pool {
  pair: string;
  denom1: string;
  denom2: string;
  leaders: Leader[];
  drops: string;
  history: Long;
}
export interface PoolProtoMsg {
  typeUrl: "/pendulumlabs.market.market.Pool";
  value: Uint8Array;
}
export interface PoolAmino {
  pair: string;
  denom1: string;
  denom2: string;
  leaders: LeaderAmino[];
  drops: string;
  history: string;
}
export interface PoolAminoMsg {
  type: "/pendulumlabs.market.market.Pool";
  value: PoolAmino;
}
export interface PoolSDKType {
  pair: string;
  denom1: string;
  denom2: string;
  leaders: LeaderSDKType[];
  drops: string;
  history: Long;
}
export interface Leader {
  address: string;
  drops: string;
}
export interface LeaderProtoMsg {
  typeUrl: "/pendulumlabs.market.market.Leader";
  value: Uint8Array;
}
export interface LeaderAmino {
  address: string;
  drops: string;
}
export interface LeaderAminoMsg {
  type: "/pendulumlabs.market.market.Leader";
  value: LeaderAmino;
}
export interface LeaderSDKType {
  address: string;
  drops: string;
}
function createBasePool(): Pool {
  return {
    pair: "",
    denom1: "",
    denom2: "",
    leaders: [],
    drops: "",
    history: Long.UZERO
  };
}
export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.denom1 !== "") {
      writer.uint32(18).string(message.denom1);
    }
    if (message.denom2 !== "") {
      writer.uint32(26).string(message.denom2);
    }
    for (const v of message.leaders) {
      Leader.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.drops !== "") {
      writer.uint32(42).string(message.drops);
    }
    if (!message.history.isZero()) {
      writer.uint32(48).uint64(message.history);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.denom1 = reader.string();
          break;
        case 3:
          message.denom2 = reader.string();
          break;
        case 4:
          message.leaders.push(Leader.decode(reader, reader.uint32()));
          break;
        case 5:
          message.drops = reader.string();
          break;
        case 6:
          message.history = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Pool>): Pool {
    const message = createBasePool();
    message.pair = object.pair ?? "";
    message.denom1 = object.denom1 ?? "";
    message.denom2 = object.denom2 ?? "";
    message.leaders = object.leaders?.map(e => Leader.fromPartial(e)) || [];
    message.drops = object.drops ?? "";
    message.history = object.history !== undefined && object.history !== null ? Long.fromValue(object.history) : Long.UZERO;
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    return {
      pair: object.pair,
      denom1: object.denom1,
      denom2: object.denom2,
      leaders: Array.isArray(object?.leaders) ? object.leaders.map((e: any) => Leader.fromAmino(e)) : [],
      drops: object.drops,
      history: Long.fromString(object.history)
    };
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.pair = message.pair;
    obj.denom1 = message.denom1;
    obj.denom2 = message.denom2;
    if (message.leaders) {
      obj.leaders = message.leaders.map(e => e ? Leader.toAmino(e) : undefined);
    } else {
      obj.leaders = [];
    }
    obj.drops = message.drops;
    obj.history = message.history ? message.history.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
  fromProtoMsg(message: PoolProtoMsg): Pool {
    return Pool.decode(message.value);
  },
  toProto(message: Pool): Uint8Array {
    return Pool.encode(message).finish();
  },
  toProtoMsg(message: Pool): PoolProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.Pool",
      value: Pool.encode(message).finish()
    };
  }
};
function createBaseLeader(): Leader {
  return {
    address: "",
    drops: ""
  };
}
export const Leader = {
  encode(message: Leader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.drops !== "") {
      writer.uint32(18).string(message.drops);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Leader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.drops = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Leader>): Leader {
    const message = createBaseLeader();
    message.address = object.address ?? "";
    message.drops = object.drops ?? "";
    return message;
  },
  fromAmino(object: LeaderAmino): Leader {
    return {
      address: object.address,
      drops: object.drops
    };
  },
  toAmino(message: Leader): LeaderAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.drops = message.drops;
    return obj;
  },
  fromAminoMsg(object: LeaderAminoMsg): Leader {
    return Leader.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaderProtoMsg): Leader {
    return Leader.decode(message.value);
  },
  toProto(message: Leader): Uint8Array {
    return Leader.encode(message).finish();
  },
  toProtoMsg(message: Leader): LeaderProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.Leader",
      value: Leader.encode(message).finish()
    };
  }
};