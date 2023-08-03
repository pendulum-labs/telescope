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
exports.Leader = exports.Pool = void 0;
const helpers_1 = require("../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBasePool() {
    return {
        pair: "",
        denom1: "",
        denom2: "",
        leaders: [],
        drops: "",
        history: helpers_1.Long.UZERO
    };
}
exports.Pool = {
    encode(message, writer = _m0.Writer.create()) {
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
            exports.Leader.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.drops !== "") {
            writer.uint32(42).string(message.drops);
        }
        if (!message.history.isZero()) {
            writer.uint32(48).uint64(message.history);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.leaders.push(exports.Leader.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.drops = reader.string();
                    break;
                case 6:
                    message.history = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.pair = object.pair ?? "";
        message.denom1 = object.denom1 ?? "";
        message.denom2 = object.denom2 ?? "";
        message.leaders = object.leaders?.map(e => exports.Leader.fromPartial(e)) || [];
        message.drops = object.drops ?? "";
        message.history = object.history !== undefined && object.history !== null ? helpers_1.Long.fromValue(object.history) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            pair: object.pair,
            denom1: object.denom1,
            denom2: object.denom2,
            leaders: Array.isArray(object?.leaders) ? object.leaders.map((e) => exports.Leader.fromAmino(e)) : [],
            drops: object.drops,
            history: helpers_1.Long.fromString(object.history)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pair = message.pair;
        obj.denom1 = message.denom1;
        obj.denom2 = message.denom2;
        if (message.leaders) {
            obj.leaders = message.leaders.map(e => e ? exports.Leader.toAmino(e) : undefined);
        }
        else {
            obj.leaders = [];
        }
        obj.drops = message.drops;
        obj.history = message.history ? message.history.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Pool.decode(message.value);
    },
    toProto(message) {
        return exports.Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Pool",
            value: exports.Pool.encode(message).finish()
        };
    }
};
function createBaseLeader() {
    return {
        address: "",
        drops: ""
    };
}
exports.Leader = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.drops !== "") {
            writer.uint32(18).string(message.drops);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseLeader();
        message.address = object.address ?? "";
        message.drops = object.drops ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            drops: object.drops
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.drops = message.drops;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Leader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Leader.decode(message.value);
    },
    toProto(message) {
        return exports.Leader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Leader",
            value: exports.Leader.encode(message).finish()
        };
    }
};
//# sourceMappingURL=pool.js.map