import { DecCoin, Coin } from "../../base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
    return {
        communityTax: "",
        baseProposerReward: "",
        bonusProposerReward: "",
        withdrawAddrEnabled: false
    };
}
export const Params = {
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
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseValidatorHistoricalRewards() {
    return {
        cumulativeRewardRatio: [],
        referenceCount: 0
    };
}
export const ValidatorHistoricalRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.cumulativeRewardRatio) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32()));
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
        message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map(e => DecCoin.fromPartial(e)) || [];
        message.referenceCount = object.referenceCount ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            cumulativeRewardRatio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e) => DecCoin.fromAmino(e)) : [],
            referenceCount: object.reference_count
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.cumulativeRewardRatio) {
            obj.cumulative_reward_ratio = message.cumulativeRewardRatio.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        obj.reference_count = message.referenceCount;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorHistoricalRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorHistoricalRewards",
            value: ValidatorHistoricalRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorHistoricalRewards.decode(message.value);
    },
    toProto(message) {
        return ValidatorHistoricalRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
            value: ValidatorHistoricalRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorCurrentRewards() {
    return {
        rewards: [],
        period: Long.UZERO
    };
}
export const ValidatorCurrentRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
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
        message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
        message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DecCoin.fromAmino(e)) : [],
            period: Long.fromString(object.period)
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        obj.period = message.period ? message.period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorCurrentRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorCurrentRewards",
            value: ValidatorCurrentRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorCurrentRewards.decode(message.value);
    },
    toProto(message) {
        return ValidatorCurrentRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
            value: ValidatorCurrentRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorAccumulatedCommission() {
    return {
        commission: []
    };
}
export const ValidatorAccumulatedCommission = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commission) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.commission.push(DecCoin.decode(reader, reader.uint32()));
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
        message.commission = object.commission?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorAccumulatedCommission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorAccumulatedCommission",
            value: ValidatorAccumulatedCommission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorAccumulatedCommission.decode(message.value);
    },
    toProto(message) {
        return ValidatorAccumulatedCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
            value: ValidatorAccumulatedCommission.encode(message).finish()
        };
    }
};
function createBaseValidatorOutstandingRewards() {
    return {
        rewards: []
    };
}
export const ValidatorOutstandingRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
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
        message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorOutstandingRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorOutstandingRewards",
            value: ValidatorOutstandingRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorOutstandingRewards.decode(message.value);
    },
    toProto(message) {
        return ValidatorOutstandingRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
            value: ValidatorOutstandingRewards.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEvent() {
    return {
        validatorPeriod: Long.UZERO,
        fraction: ""
    };
}
export const ValidatorSlashEvent = {
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
        message.validatorPeriod = object.validatorPeriod !== undefined && object.validatorPeriod !== null ? Long.fromValue(object.validatorPeriod) : Long.UZERO;
        message.fraction = object.fraction ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorPeriod: Long.fromString(object.validator_period),
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
        return ValidatorSlashEvent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvent",
            value: ValidatorSlashEvent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSlashEvent.decode(message.value);
    },
    toProto(message) {
        return ValidatorSlashEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
            value: ValidatorSlashEvent.encode(message).finish()
        };
    }
};
function createBaseValidatorSlashEvents() {
    return {
        validatorSlashEvents: []
    };
}
export const ValidatorSlashEvents = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validatorSlashEvents) {
            ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
        message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e) => ValidatorSlashEvent.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validatorSlashEvents) {
            obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEvent.toAmino(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSlashEvents.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvents",
            value: ValidatorSlashEvents.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSlashEvents.decode(message.value);
    },
    toProto(message) {
        return ValidatorSlashEvents.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
            value: ValidatorSlashEvents.encode(message).finish()
        };
    }
};
function createBaseFeePool() {
    return {
        communityPool: []
    };
}
export const FeePool = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.communityPool) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
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
        message.communityPool = object.communityPool?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            communityPool: Array.isArray(object?.community_pool) ? object.community_pool.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.communityPool) {
            obj.community_pool = message.communityPool.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return FeePool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FeePool",
            value: FeePool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return FeePool.decode(message.value);
    },
    toProto(message) {
        return FeePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.FeePool",
            value: FeePool.encode(message).finish()
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
export const CommunityPoolSpendProposal = {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            recipient: object.recipient,
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.recipient = message.recipient;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CommunityPoolSpendProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposal",
            value: CommunityPoolSpendProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommunityPoolSpendProposal.decode(message.value);
    },
    toProto(message) {
        return CommunityPoolSpendProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
            value: CommunityPoolSpendProposal.encode(message).finish()
        };
    }
};
function createBaseDelegatorStartingInfo() {
    return {
        previousPeriod: Long.UZERO,
        stake: "",
        height: Long.UZERO
    };
}
export const DelegatorStartingInfo = {
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
        message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? Long.fromValue(object.previousPeriod) : Long.UZERO;
        message.stake = object.stake ?? "";
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            previousPeriod: Long.fromString(object.previous_period),
            stake: object.stake,
            height: Long.fromString(object.height)
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
        return DelegatorStartingInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorStartingInfo",
            value: DelegatorStartingInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegatorStartingInfo.decode(message.value);
    },
    toProto(message) {
        return DelegatorStartingInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
            value: DelegatorStartingInfo.encode(message).finish()
        };
    }
};
function createBaseDelegationDelegatorReward() {
    return {
        validatorAddress: "",
        reward: []
    };
}
export const DelegationDelegatorReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.reward) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.reward.push(DecCoin.decode(reader, reader.uint32()));
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
        message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return DelegationDelegatorReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationDelegatorReward",
            value: DelegationDelegatorReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DelegationDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return DelegationDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
            value: DelegationDelegatorReward.encode(message).finish()
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
export const CommunityPoolSpendProposalWithDeposit = {
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
        return CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
            value: CommunityPoolSpendProposalWithDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommunityPoolSpendProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return CommunityPoolSpendProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
            value: CommunityPoolSpendProposalWithDeposit.encode(message).finish()
        };
    }
};
//# sourceMappingURL=distribution.js.map