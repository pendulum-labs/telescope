import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
    return {
        withdrawRewardPeriod: Long.ZERO,
        poolRate: new Uint8Array(),
        maxProposalRate: new Uint8Array(),
        maxValCommission: new Uint8Array()
    };
}
export const Params = {
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
        message.withdrawRewardPeriod = object.withdrawRewardPeriod !== undefined && object.withdrawRewardPeriod !== null ? Long.fromValue(object.withdrawRewardPeriod) : Long.ZERO;
        message.poolRate = object.poolRate ?? new Uint8Array();
        message.maxProposalRate = object.maxProposalRate ?? new Uint8Array();
        message.maxValCommission = object.maxValCommission ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            withdrawRewardPeriod: Long.fromString(object.withdraw_reward_period),
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
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/onomyprotocol.dao.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map