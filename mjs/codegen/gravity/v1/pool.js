import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseIDSet() {
    return {
        ids: []
    };
}
export const IDSet = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
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
                            message.ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.ids.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIDSet();
        message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => e);
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return IDSet.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IDSet.decode(message.value);
    },
    toProto(message) {
        return IDSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.IDSet",
            value: IDSet.encode(message).finish()
        };
    }
};
function createBaseBatchFees() {
    return {
        token: "",
        totalFees: "",
        txCount: Long.UZERO
    };
}
export const BatchFees = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                    message.txCount = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchFees();
        message.token = object.token ?? "";
        message.totalFees = object.totalFees ?? "";
        message.txCount = object.txCount !== undefined && object.txCount !== null ? Long.fromValue(object.txCount) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            token: object.token,
            totalFees: object.total_fees,
            txCount: Long.fromString(object.tx_count)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.token = message.token;
        obj.total_fees = message.totalFees;
        obj.tx_count = message.txCount ? message.txCount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchFees.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchFees.decode(message.value);
    },
    toProto(message) {
        return BatchFees.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.BatchFees",
            value: BatchFees.encode(message).finish()
        };
    }
};
//# sourceMappingURL=pool.js.map