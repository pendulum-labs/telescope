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
exports.MsgMultiSendResponse = exports.MsgMultiSend = exports.MsgSendResponse = exports.MsgSend = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const bank_1 = require("./bank");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgSend() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: []
    };
}
exports.MsgSend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSend();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fromAddress: object.from_address,
            toAddress: object.to_address,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.fromAddress;
        obj.to_address = message.toAddress;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSend",
            value: exports.MsgSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: exports.MsgSend.encode(message).finish()
        };
    }
};
function createBaseMsgSendResponse() {
    return {};
}
exports.MsgSendResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendResponse",
            value: exports.MsgSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
            value: exports.MsgSendResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMultiSend() {
    return {
        inputs: [],
        outputs: []
    };
}
exports.MsgMultiSend = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.inputs) {
            bank_1.Input.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.outputs) {
            bank_1.Output.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputs.push(bank_1.Input.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.outputs.push(bank_1.Output.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMultiSend();
        message.inputs = object.inputs?.map(e => bank_1.Input.fromPartial(e)) || [];
        message.outputs = object.outputs?.map(e => bank_1.Output.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            inputs: Array.isArray(object?.inputs) ? object.inputs.map((e) => bank_1.Input.fromAmino(e)) : [],
            outputs: Array.isArray(object?.outputs) ? object.outputs.map((e) => bank_1.Output.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.inputs) {
            obj.inputs = message.inputs.map(e => e ? bank_1.Input.toAmino(e) : undefined);
        }
        else {
            obj.inputs = [];
        }
        if (message.outputs) {
            obj.outputs = message.outputs.map(e => e ? bank_1.Output.toAmino(e) : undefined);
        }
        else {
            obj.outputs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMultiSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgMultiSend",
            value: exports.MsgMultiSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgMultiSend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMultiSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
            value: exports.MsgMultiSend.encode(message).finish()
        };
    }
};
function createBaseMsgMultiSendResponse() {
    return {};
}
exports.MsgMultiSendResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgMultiSendResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMultiSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgMultiSendResponse",
            value: exports.MsgMultiSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgMultiSendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMultiSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
            value: exports.MsgMultiSendResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map