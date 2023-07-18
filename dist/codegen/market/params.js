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
exports.Params = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams() {
    return {
        earnRates: "",
        burnRate: "",
        burnCoin: ""
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.earnRates !== "") {
            writer.uint32(10).string(message.earnRates);
        }
        if (message.burnRate !== "") {
            writer.uint32(18).string(message.burnRate);
        }
        if (message.burnCoin !== "") {
            writer.uint32(26).string(message.burnCoin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.earnRates = reader.string();
                    break;
                case 2:
                    message.burnRate = reader.string();
                    break;
                case 3:
                    message.burnCoin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.earnRates = object.earnRates ?? "";
        message.burnRate = object.burnRate ?? "";
        message.burnCoin = object.burnCoin ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            earnRates: object.earn_rates,
            burnRate: object.burn_rate,
            burnCoin: object.burn_coin
        };
    },
    toAmino(message) {
        const obj = {};
        obj.earn_rates = message.earnRates;
        obj.burn_rate = message.burnRate;
        obj.burn_coin = message.burnCoin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map