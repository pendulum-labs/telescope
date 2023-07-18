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
exports.CommunityPoolSpendProposalWithDeposit = exports.DelegationDelegatorReward = exports.DelegatorStartingInfo = exports.CommunityPoolSpendProposal = exports.FeePool = exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorAccumulatedCommission = exports.ValidatorCurrentRewards = exports.ValidatorHistoricalRewards = exports.Params = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams() {
    return {
        communityTax: "",
        baseProposerReward: "",
        bonusProposerReward: "",
        withdrawAddrEnabled: false
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.communityTax !== "") {
            writer.uint32(10).string(message.communityTax);
        }
        if (message.baseProposerReward !== "") {
            writer.uint32(18).string(message.baseProposerReward);
        }
        if (message.bonusProposerReward !== "") {
            writer.uint32(26).string(message.bonusProposerReward);
        }
        if (message.withdrawAddrEnabled === true) {
            writer.uint32(32).bool(message.withdrawAddrEnabled);
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
                    message.communityTax = reader.string();
                    break;
                case 2:
                    message.baseProposerReward = reader.string();
                    break;
                case 3:
                    message.bonusProposerReward = reader.string();
                    break;
                case 4:
                    message.withdrawAddrEnabled = reader.bool();
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
        message.communityTax = object.communityTax ?? "";
        message.baseProposerReward = object.baseProposerReward ?? "";
        message.bonusProposerReward = object.bonusProposerReward ?? "";
        message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            communityTax: object.community_tax,
            baseProposerReward: object.base_proposer_reward,
            bonusProposerReward: object.bonus_proposer_reward,
            withdrawAddrEnabled: object.withdraw_addr_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.community_tax = message.communityTax;
        obj.base_proposer_reward = message.baseProposerReward;
        obj.bonus_proposer_reward = message.bonusProposerReward;
        obj.withdraw_addr_enabled = message.withdrawAddrEnabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseValidatorHistoricalRewards() {
    return {
        cumulativeRewardRatio: [],
        referenceCount: 0
    };
}
exports.ValidatorHistoricalRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.cumulativeRewardRatio) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.referenceCount !== 0) {
            writer.uint32(16).uint32(message.referenceCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulativeRewardRatio.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.referenceCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewards();
        message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.referenceCount = object.referenceCount ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            cumulativeRewardRatio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e) => coin_1.DecCoin.fromAmino(e)) : [],
            referenceCount: object.reference_count
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.cumulativeRewardRatio) {
            obj.cumulative_reward_ratio = message.cumulativeRewardRatio.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        obj.reference_count = message.referenceCount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorHistoricalRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorHistoricalRewards",
            value: exports.ValidatorHistoricalRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorHistoricalRewards.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorHistoricalRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
            value: exports.ValidatorHistoricalRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorCurrentRewards() {
    return {
        rewards: [],
        period: helpers_1.Long.UZERO
    };
}
exports.ValidatorCurrentRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewards();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.period = object.period !== undefined && object.period !== null ? helpers_1.Long.fromValue(object.period) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromAmino(e)) : [],
            period: helpers_1.Long.fromString(object.period)
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        obj.period = message.period ? message.period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorCurrentRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorCurrentRewards",
            value: exports.ValidatorCurrentRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorCurrentRewards.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorCurrentRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
            value: exports.ValidatorCurrentRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorAccumulatedCommission() {
    return {
        commission: []
    };
}
exports.ValidatorAccumulatedCommission = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commission) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommission();
        message.commission = object.commission?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorAccumulatedCommission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorAccumulatedCommission",
            value: exports.ValidatorAccumulatedCommission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorAccumulatedCommission.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorAccumulatedCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
            value: exports.ValidatorAccumulatedCommission.encode(message).finish()
        };
    }
};
function createBaseValidatorOutstandingRewards() {
    return {
        rewards: []
    };
}
exports.ValidatorOutstandingRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorOutstandingRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorOutstandingRewards",
            value: exports.ValidatorOutstandingRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorOutstandingRewards.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorOutstandingRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
            value: exports.ValidatorOutstandingRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEvent() {
    return {
        validatorPeriod: helpers_1.Long.UZERO,
        fraction: ""
    };
}
exports.ValidatorSlashEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.validatorPeriod.isZero()) {
            writer.uint32(8).uint64(message.validatorPeriod);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorPeriod = reader.uint64();
                    break;
                case 2:
                    message.fraction = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvent();
        message.validatorPeriod = object.validatorPeriod !== undefined && object.validatorPeriod !== null ? helpers_1.Long.fromValue(object.validatorPeriod) : helpers_1.Long.UZERO;
        message.fraction = object.fraction ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorPeriod: helpers_1.Long.fromString(object.validator_period),
            fraction: object.fraction
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_period = message.validatorPeriod ? message.validatorPeriod.toString() : undefined;
        obj.fraction = message.fraction;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSlashEvent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvent",
            value: exports.ValidatorSlashEvent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSlashEvent.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSlashEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
            value: exports.ValidatorSlashEvent.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEvents() {
    return {
        validatorSlashEvents: []
    };
}
exports.ValidatorSlashEvents = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validatorSlashEvents) {
            exports.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorSlashEvents.push(exports.ValidatorSlashEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvents();
        message.validatorSlashEvents = object.validatorSlashEvents?.map(e => exports.ValidatorSlashEvent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e) => exports.ValidatorSlashEvent.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validatorSlashEvents) {
            obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? exports.ValidatorSlashEvent.toAmino(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSlashEvents.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvents",
            value: exports.ValidatorSlashEvents.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSlashEvents.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSlashEvents.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
            value: exports.ValidatorSlashEvents.encode(message).finish()
        };
    }
};
function createBaseFeePool() {
    return {
        communityPool: []
    };
}
exports.FeePool = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.communityPool) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.communityPool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFeePool();
        message.communityPool = object.communityPool?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            communityPool: Array.isArray(object?.community_pool) ? object.community_pool.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.communityPool) {
            obj.community_pool = message.communityPool.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeePool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FeePool",
            value: exports.FeePool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.FeePool.decode(message.value);
    },
    toProto(message) {
        return exports.FeePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.FeePool",
            value: exports.FeePool.encode(message).finish()
        };
    }
};
function createBaseCommunityPoolSpendProposal() {
    return {
        title: "",
        description: "",
        recipient: "",
        amount: []
    };
}
exports.CommunityPoolSpendProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
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
        const message = createBaseCommunityPoolSpendProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            recipient: object.recipient,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.recipient = message.recipient;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommunityPoolSpendProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposal",
            value: exports.CommunityPoolSpendProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommunityPoolSpendProposal.decode(message.value);
    },
    toProto(message) {
        return exports.CommunityPoolSpendProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
            value: exports.CommunityPoolSpendProposal.encode(message).finish()
        };
    }
};
function createBaseDelegatorStartingInfo() {
    return {
        previousPeriod: helpers_1.Long.UZERO,
        stake: "",
        height: helpers_1.Long.UZERO
    };
}
exports.DelegatorStartingInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.previousPeriod.isZero()) {
            writer.uint32(8).uint64(message.previousPeriod);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(message.stake);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previousPeriod = reader.uint64();
                    break;
                case 2:
                    message.stake = reader.string();
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfo();
        message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? helpers_1.Long.fromValue(object.previousPeriod) : helpers_1.Long.UZERO;
        message.stake = object.stake ?? "";
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            previousPeriod: helpers_1.Long.fromString(object.previous_period),
            stake: object.stake,
            height: helpers_1.Long.fromString(object.height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.previous_period = message.previousPeriod ? message.previousPeriod.toString() : undefined;
        obj.stake = message.stake;
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorStartingInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorStartingInfo",
            value: exports.DelegatorStartingInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegatorStartingInfo.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorStartingInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
            value: exports.DelegatorStartingInfo.encode(message).finish()
        };
    }
};
function createBaseDelegationDelegatorReward() {
    return {
        validatorAddress: "",
        reward: []
    };
}
exports.DelegationDelegatorReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.reward) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.reward.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDelegationDelegatorReward();
        message.validatorAddress = object.validatorAddress ?? "";
        message.reward = object.reward?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegationDelegatorReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationDelegatorReward",
            value: exports.DelegationDelegatorReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegationDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return exports.DelegationDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
            value: exports.DelegationDelegatorReward.encode(message).finish()
        };
    }
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return {
        title: "",
        description: "",
        recipient: "",
        amount: "",
        deposit: ""
    };
}
exports.CommunityPoolSpendProposalWithDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount ?? "";
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            recipient: object.recipient,
            amount: object.amount,
            deposit: object.deposit
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.recipient = message.recipient;
        obj.amount = message.amount;
        obj.deposit = message.deposit;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
            value: exports.CommunityPoolSpendProposalWithDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommunityPoolSpendProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.CommunityPoolSpendProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
            value: exports.CommunityPoolSpendProposalWithDeposit.encode(message).finish()
        };
    }
};
//# sourceMappingURL=distribution.js.map