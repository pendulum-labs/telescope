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
exports.DecProto = exports.IntProto = exports.DecCoin = exports.Coin = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.Coin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCoin();
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
    fromPartial(object) {
        const message = createBaseCoin();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Coin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Coin",
            value: exports.Coin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Coin.decode(message.value);
    },
    toProto(message) {
        return exports.Coin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.Coin",
            value: exports.Coin.encode(message).finish()
        };
    }
};
function createBaseDecCoin() {
    return {
        denom: "",
        amount: ""
    };
}
exports.DecCoin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecCoin();
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
    fromPartial(object) {
        const message = createBaseDecCoin();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DecCoin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecCoin",
            value: exports.DecCoin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DecCoin.decode(message.value);
    },
    toProto(message) {
        return exports.DecCoin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecCoin",
            value: exports.DecCoin.encode(message).finish()
        };
    }
};
function createBaseIntProto() {
    return {
        int: ""
    };
}
exports.IntProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.int !== "") {
            writer.uint32(10).string(message.int);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIntProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.int = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIntProto();
        message.int = object.int ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            int: object.int
        };
    },
    toAmino(message) {
        const obj = {};
        obj.int = message.int;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IntProto.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IntProto",
            value: exports.IntProto.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IntProto.decode(message.value);
    },
    toProto(message) {
        return exports.IntProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.IntProto",
            value: exports.IntProto.encode(message).finish()
        };
    }
};
function createBaseDecProto() {
    return {
        dec: ""
    };
}
exports.DecProto = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dec !== "") {
            writer.uint32(10).string(message.dec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dec = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDecProto();
        message.dec = object.dec ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            dec: object.dec
        };
    },
    toAmino(message) {
        const obj = {};
        obj.dec = message.dec;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DecProto.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecProto",
            value: exports.DecProto.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DecProto.decode(message.value);
    },
    toProto(message) {
        return exports.DecProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.v1beta1.DecProto",
            value: exports.DecProto.encode(message).finish()
        };
    }
};
//# sourceMappingURL=coin.js.map