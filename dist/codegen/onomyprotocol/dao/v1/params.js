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
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams() {
    return {
        withdrawRewardPeriod: helpers_1.Long.ZERO,
        poolRate: new Uint8Array(),
        maxProposalRate: new Uint8Array(),
        maxValCommission: new Uint8Array()
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.withdrawRewardPeriod.isZero()) {
            writer.uint32(8).int64(message.withdrawRewardPeriod);
        }
        if (message.poolRate.length !== 0) {
            writer.uint32(18).bytes(message.poolRate);
        }
        if (message.maxProposalRate.length !== 0) {
            writer.uint32(26).bytes(message.maxProposalRate);
        }
        if (message.maxValCommission.length !== 0) {
            writer.uint32(34).bytes(message.maxValCommission);
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
                    message.withdrawRewardPeriod = reader.int64();
                    break;
                case 2:
                    message.poolRate = reader.bytes();
                    break;
                case 3:
                    message.maxProposalRate = reader.bytes();
                    break;
                case 4:
                    message.maxValCommission = reader.bytes();
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
        message.withdrawRewardPeriod = object.withdrawRewardPeriod !== undefined && object.withdrawRewardPeriod !== null ? helpers_1.Long.fromValue(object.withdrawRewardPeriod) : helpers_1.Long.ZERO;
        message.poolRate = object.poolRate ?? new Uint8Array();
        message.maxProposalRate = object.maxProposalRate ?? new Uint8Array();
        message.maxValCommission = object.maxValCommission ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            withdrawRewardPeriod: helpers_1.Long.fromString(object.withdraw_reward_period),
            poolRate: object.pool_rate,
            maxProposalRate: object.max_proposal_rate,
            maxValCommission: object.max_val_commission
        };
    },
    toAmino(message) {
        const obj = {};
        obj.withdraw_reward_period = message.withdrawRewardPeriod ? message.withdrawRewardPeriod.toString() : undefined;
        obj.pool_rate = message.poolRate;
        obj.max_proposal_rate = message.maxProposalRate;
        obj.max_val_commission = message.maxValCommission;
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
            typeUrl: "/onomyprotocol.dao.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map