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
exports.SendAuthorization = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseSendAuthorization() {
    return {
        spendLimit: []
    };
}
exports.SendAuthorization = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.spendLimit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spendLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSendAuthorization();
        message.spendLimit = object.spendLimit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            spendLimit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.spendLimit) {
            obj.spend_limit = message.spendLimit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SendAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SendAuthorization",
            value: exports.SendAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SendAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.SendAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
            value: exports.SendAuthorization.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authz.js.map