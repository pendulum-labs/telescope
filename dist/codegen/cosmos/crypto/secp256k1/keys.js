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
exports.PrivKey = exports.PubKey = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBasePubKey() {
    return {
        key: new Uint8Array()
    };
}
exports.PubKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePubKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PubKey",
            value: exports.PubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PubKey.decode(message.value);
    },
    toProto(message) {
        return exports.PubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: exports.PubKey.encode(message).finish()
        };
    }
};
function createBasePrivKey() {
    return {
        key: new Uint8Array()
    };
}
exports.PrivKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrivKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePrivKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PrivKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PrivKey",
            value: exports.PrivKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PrivKey.decode(message.value);
    },
    toProto(message) {
        return exports.PrivKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
            value: exports.PrivKey.encode(message).finish()
        };
    }
};
//# sourceMappingURL=keys.js.map