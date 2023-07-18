import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Drop {
  uid: Long;
  owner: string;
  pair: string;
  drops: string;
  sum: string;
  active: boolean;
}
export interface DropProtoMsg {
  typeUrl: "/pendulumlabs.market.market.Drop";
  value: Uint8Array;
}
export interface DropAmino {
  uid: string;
  owner: string;
  pair: string;
  drops: string;
  sum: string;
  active: boolean;
}
export interface DropAminoMsg {
  type: "/pendulumlabs.market.market.Drop";
  value: DropAmino;
}
export interface DropSDKType {
  uid: Long;
  owner: string;
  pair: string;
  drops: string;
  sum: string;
  active: boolean;
}
export interface Drops {
  uids: Long[];
}
export interface DropsProtoMsg {
  typeUrl: "/pendulumlabs.market.market.Drops";
  value: Uint8Array;
}
export interface DropsAmino {
  uids: string[];
}
export interface DropsAminoMsg {
  type: "/pendulumlabs.market.market.Drops";
  value: DropsAmino;
}
export interface DropsSDKType {
  uids: Long[];
}
function createBaseDrop(): Drop {
  return {
    uid: Long.UZERO,
    owner: "",
    pair: "",
    drops: "",
    sum: "",
    active: false
  };
}
export const Drop = {
  encode(message: Drop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.uid.isZero()) {
      writer.uint32(8).uint64(message.uid);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pair !== "") {
      writer.uint32(26).string(message.pair);
    }
    if (message.drops !== "") {
      writer.uint32(34).string(message.drops);
    }
    if (message.sum !== "") {
      writer.uint32(42).string(message.sum);
    }
    if (message.active === true) {
      writer.uint32(48).bool(message.active);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Drop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDrop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = (reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pair = reader.string();
          break;
        case 4:
          message.drops = reader.string();
          break;
        case 5:
          message.sum = reader.string();
          break;
        case 6:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Drop>): Drop {
    const message = createBaseDrop();
    message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.pair = object.pair ?? "";
    message.drops = object.drops ?? "";
    message.sum = object.sum ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: DropAmino): Drop {
    return {
      uid: Long.fromString(object.uid),
      owner: object.owner,
      pair: object.pair,
      drops: object.drops,
      sum: object.sum,
      active: object.active
    };
  },
  toAmino(message: Drop): DropAmino {
    const obj: any = {};
    obj.uid = message.uid ? message.uid.toString() : undefined;
    obj.owner = message.owner;
    obj.pair = message.pair;
    obj.drops = message.drops;
    obj.sum = message.sum;
    obj.active = message.active;
    return obj;
  },
  fromAminoMsg(object: DropAminoMsg): Drop {
    return Drop.fromAmino(object.value);
  },
  fromProtoMsg(message: DropProtoMsg): Drop {
    return Drop.decode(message.value);
  },
  toProto(message: Drop): Uint8Array {
    return Drop.encode(message).finish();
  },
  toProtoMsg(message: Drop): DropProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.Drop",
      value: Drop.encode(message).finish()
    };
  }
};
function createBaseDrops(): Drops {
  return {
    uids: []
  };
}
export const Drops = {
  encode(message: Drops, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(18).fork();
    for (const v of message.uids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Drops {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDrops();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.uids.push((reader.uint64() as Long));
            }
          } else {
            message.uids.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Drops>): Drops {
    const message = createBaseDrops();
    message.uids = object.uids?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromAmino(object: DropsAmino): Drops {
    return {
      uids: Array.isArray(object?.uids) ? object.uids.map((e: any) => e) : []
    };
  },
  toAmino(message: Drops): DropsAmino {
    const obj: any = {};
    if (message.uids) {
      obj.uids = message.uids.map(e => e);
    } else {
      obj.uids = [];
    }
    return obj;
  },
  fromAminoMsg(object: DropsAminoMsg): Drops {
    return Drops.fromAmino(object.value);
  },
  fromProtoMsg(message: DropsProtoMsg): Drops {
    return Drops.decode(message.value);
  },
  toProto(message: Drops): Uint8Array {
    return Drops.encode(message).finish();
  },
  toProtoMsg(message: Drops): DropsProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.Drops",
      value: Drops.encode(message).finish()
    };
  }
};