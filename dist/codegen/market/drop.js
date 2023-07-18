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
exports.Drops = exports.Drop = void 0;
const helpers_1 = require("../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseDrop() {
    return {
        uid: helpers_1.Long.UZERO,
        owner: "",
        pair: "",
        drops: "",
        sum: "",
        active: false
    };
}
exports.Drop = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDrop();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
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
    fromPartial(object) {
        const message = createBaseDrop();
        message.uid = object.uid !== undefined && object.uid !== null ? helpers_1.Long.fromValue(object.uid) : helpers_1.Long.UZERO;
        message.owner = object.owner ?? "";
        message.pair = object.pair ?? "";
        message.drops = object.drops ?? "";
        message.sum = object.sum ?? "";
        message.active = object.active ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            uid: helpers_1.Long.fromString(object.uid),
            owner: object.owner,
            pair: object.pair,
            drops: object.drops,
            sum: object.sum,
            active: object.active
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        obj.owner = message.owner;
        obj.pair = message.pair;
        obj.drops = message.drops;
        obj.sum = message.sum;
        obj.active = message.active;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Drop.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Drop.decode(message.value);
    },
    toProto(message) {
        return exports.Drop.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Drop",
            value: exports.Drop.encode(message).finish()
        };
    }
};
function createBaseDrops() {
    return {
        uids: []
    };
}
exports.Drops = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(18).fork();
        for (const v of message.uids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
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
                            message.uids.push(reader.uint64());
                        }
                    }
                    else {
                        message.uids.push(reader.uint64());
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
        const message = createBaseDrops();
        message.uids = object.uids?.map(e => helpers_1.Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            uids: Array.isArray(object?.uids) ? object.uids.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.uids) {
            obj.uids = message.uids.map(e => e);
        }
        else {
            obj.uids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Drops.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Drops.decode(message.value);
    },
    toProto(message) {
        return exports.Drops.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Drops",
            value: exports.Drops.encode(message).finish()
        };
    }
};
//# sourceMappingURL=drop.js.map