import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Member {
  pair: string;
  denomA: string;
  denomB: string;
  balance: string;
  previous: string;
  limit: Long;
  stop: Long;
}
export interface MemberProtoMsg {
  typeUrl: "/pendulumlabs.market.market.Member";
  value: Uint8Array;
}
export interface MemberAmino {
  pair: string;
  denomA: string;
  denomB: string;
  balance: string;
  previous: string;
  limit: string;
  stop: string;
}
export interface MemberAminoMsg {
  type: "/pendulumlabs.market.market.Member";
  value: MemberAmino;
}
export interface MemberSDKType {
  pair: string;
  denomA: string;
  denomB: string;
  balance: string;
  previous: string;
  limit: Long;
  stop: Long;
}
function createBaseMember(): Member {
  return {
    pair: "",
    denomA: "",
    denomB: "",
    balance: "",
    previous: "",
    limit: Long.UZERO,
    stop: Long.UZERO
  };
}
export const Member = {
  encode(message: Member, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.denomA !== "") {
      writer.uint32(18).string(message.denomA);
    }
    if (message.denomB !== "") {
      writer.uint32(26).string(message.denomB);
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (message.previous !== "") {
      writer.uint32(42).string(message.previous);
    }
    if (!message.limit.isZero()) {
      writer.uint32(48).uint64(message.limit);
    }
    if (!message.stop.isZero()) {
      writer.uint32(56).uint64(message.stop);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Member {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.denomA = reader.string();
          break;
        case 3:
          message.denomB = reader.string();
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.previous = reader.string();
          break;
        case 6:
          message.limit = (reader.uint64() as Long);
          break;
        case 7:
          message.stop = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Member>): Member {
    const message = createBaseMember();
    message.pair = object.pair ?? "";
    message.denomA = object.denomA ?? "";
    message.denomB = object.denomB ?? "";
    message.balance = object.balance ?? "";
    message.previous = object.previous ?? "";
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.stop = object.stop !== undefined && object.stop !== null ? Long.fromValue(object.stop) : Long.UZERO;
    return message;
  },
  fromAmino(object: MemberAmino): Member {
    return {
      pair: object.pair,
      denomA: object.denomA,
      denomB: object.denomB,
      balance: object.balance,
      previous: object.previous,
      limit: Long.fromString(object.limit),
      stop: Long.fromString(object.stop)
    };
  },
  toAmino(message: Member): MemberAmino {
    const obj: any = {};
    obj.pair = message.pair;
    obj.denomA = message.denomA;
    obj.denomB = message.denomB;
    obj.balance = message.balance;
    obj.previous = message.previous;
    obj.limit = message.limit ? message.limit.toString() : undefined;
    obj.stop = message.stop ? message.stop.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberAminoMsg): Member {
    return Member.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberProtoMsg): Member {
    return Member.decode(message.value);
  },
  toProto(message: Member): Uint8Array {
    return Member.encode(message).finish();
  },
  toProtoMsg(message: Member): MemberProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.Member",
      value: Member.encode(message).finish()
    };
  }
};