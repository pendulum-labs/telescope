import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** IDSet represents a set of IDs */
export interface IDSet {
  /** IDSet represents a set of IDs */
  ids: Long[];
}
export interface IDSetProtoMsg {
  typeUrl: "/gravity.v1.IDSet";
  value: Uint8Array;
}
/** IDSet represents a set of IDs */
export interface IDSetAmino {
  /** IDSet represents a set of IDs */
  ids: string[];
}
export interface IDSetAminoMsg {
  type: "/gravity.v1.IDSet";
  value: IDSetAmino;
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
  ids: Long[];
}
export interface BatchFees {
  token: string;
  totalFees: string;
  txCount: Long;
}
export interface BatchFeesProtoMsg {
  typeUrl: "/gravity.v1.BatchFees";
  value: Uint8Array;
}
export interface BatchFeesAmino {
  token: string;
  total_fees: string;
  tx_count: string;
}
export interface BatchFeesAminoMsg {
  type: "/gravity.v1.BatchFees";
  value: BatchFeesAmino;
}
export interface BatchFeesSDKType {
  token: string;
  total_fees: string;
  tx_count: Long;
}
function createBaseIDSet(): IDSet {
  return {
    ids: []
  };
}
export const IDSet = {
  encode(message: IDSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IDSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push((reader.uint64() as Long));
            }
          } else {
            message.ids.push((reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<IDSet>): IDSet {
    const message = createBaseIDSet();
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    return message;
  },
  fromAmino(object: IDSetAmino): IDSet {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => e) : []
    };
  },
  toAmino(message: IDSet): IDSetAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: IDSetAminoMsg): IDSet {
    return IDSet.fromAmino(object.value);
  },
  fromProtoMsg(message: IDSetProtoMsg): IDSet {
    return IDSet.decode(message.value);
  },
  toProto(message: IDSet): Uint8Array {
    return IDSet.encode(message).finish();
  },
  toProtoMsg(message: IDSet): IDSetProtoMsg {
    return {
      typeUrl: "/gravity.v1.IDSet",
      value: IDSet.encode(message).finish()
    };
  }
};
function createBaseBatchFees(): BatchFees {
  return {
    token: "",
    totalFees: "",
    txCount: Long.UZERO
  };
}
export const BatchFees = {
  encode(message: BatchFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.totalFees !== "") {
      writer.uint32(18).string(message.totalFees);
    }
    if (!message.txCount.isZero()) {
      writer.uint32(24).uint64(message.txCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BatchFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.totalFees = reader.string();
          break;
        case 3:
          message.txCount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchFees>): BatchFees {
    const message = createBaseBatchFees();
    message.token = object.token ?? "";
    message.totalFees = object.totalFees ?? "";
    message.txCount = object.txCount !== undefined && object.txCount !== null ? Long.fromValue(object.txCount) : Long.UZERO;
    return message;
  },
  fromAmino(object: BatchFeesAmino): BatchFees {
    return {
      token: object.token,
      totalFees: object.total_fees,
      txCount: Long.fromString(object.tx_count)
    };
  },
  toAmino(message: BatchFees): BatchFeesAmino {
    const obj: any = {};
    obj.token = message.token;
    obj.total_fees = message.totalFees;
    obj.tx_count = message.txCount ? message.txCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BatchFeesAminoMsg): BatchFees {
    return BatchFees.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchFeesProtoMsg): BatchFees {
    return BatchFees.decode(message.value);
  },
  toProto(message: BatchFees): Uint8Array {
    return BatchFees.encode(message).finish();
  },
  toProtoMsg(message: BatchFees): BatchFeesProtoMsg {
    return {
      typeUrl: "/gravity.v1.BatchFees",
      value: BatchFees.encode(message).finish()
    };
  }
};