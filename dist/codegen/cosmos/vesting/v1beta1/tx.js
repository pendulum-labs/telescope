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
exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgCreateVestingAccount() {
    return {
        fromAddress: "",
        toAddress: "",
        amount: [],
        endTime: helpers_1.Long.ZERO,
        delayed: false
    };
}
exports.MsgCreateVestingAccount = {
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
        if (!message.endTime.isZero()) {
            writer.uint32(32).int64(message.endTime);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccount();
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
                case 4:
                    message.endTime = reader.int64();
                    break;
                case 5:
                    message.delayed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateVestingAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.toAddress = object.toAddress ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.endTime = object.endTime !== undefined && object.endTime !== null ? helpers_1.Long.fromValue(object.endTime) : helpers_1.Long.ZERO;
        message.delayed = object.delayed ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            fromAddress: object.from_address,
            toAddress: object.to_address,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : [],
            endTime: helpers_1.Long.fromString(object.end_time),
            delayed: object.delayed
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
        obj.end_time = message.endTime ? message.endTime.toString() : undefined;
        obj.delayed = message.delayed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
exports.MsgCreateVestingAccountResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccountResponse();
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
        const message = createBaseMsgCreateVestingAccountResponse();
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
        return exports.MsgCreateVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map