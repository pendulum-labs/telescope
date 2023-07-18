"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchFees = exports.IDSet = void 0;
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseIDSet() {
    return {
        ids: []
    };
}
exports.IDSet = {
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
        message.ids = object.ids?.map(e => helpers_1.Long.fromValue(e)) || [];
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
        return exports.IDSet.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.IDSet.decode(message.value);
    },
    toProto(message) {
        return exports.IDSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.IDSet",
            value: exports.IDSet.encode(message).finish()
        };
    }
};
function createBaseBatchFees() {
    return {
        token: "",
        totalFees: "",
        txCount: helpers_1.Long.UZERO
    };
}
exports.BatchFees = {
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
        message.txCount = object.txCount !== undefined && object.txCount !== null ? helpers_1.Long.fromValue(object.txCount) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            token: object.token,
            totalFees: object.total_fees,
            txCount: helpers_1.Long.fromString(object.tx_count)
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
        return exports.BatchFees.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchFees.decode(message.value);
    },
    toProto(message) {
        return exports.BatchFees.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.BatchFees",
            value: exports.BatchFees.encode(message).finish()
        };
    }
};
//# sourceMappingURL=pool.js.map