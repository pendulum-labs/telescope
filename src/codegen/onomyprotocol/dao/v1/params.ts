import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  /** the period of blocks to withdraw the dao staking reward */
  withdrawRewardPeriod: Long;
  /** the rate of total dao's staking coins to keep unstaked */
  poolRate: Uint8Array;
  /** the max rage of total dao's staking coins to be allowed in proposals */
  maxProposalRate: Uint8Array;
  /** the max validator's commission to be staked by the dao */
  maxValCommission: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: "/onomyprotocol.dao.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** the period of blocks to withdraw the dao staking reward */
  withdraw_reward_period: string;
  /** the rate of total dao's staking coins to keep unstaked */
  pool_rate: Uint8Array;
  /** the max rage of total dao's staking coins to be allowed in proposals */
  max_proposal_rate: Uint8Array;
  /** the max validator's commission to be staked by the dao */
  max_val_commission: Uint8Array;
}
export interface ParamsAminoMsg {
  type: "/onomyprotocol.dao.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  withdraw_reward_period: Long;
  pool_rate: Uint8Array;
  max_proposal_rate: Uint8Array;
  max_val_commission: Uint8Array;
}
function createBaseParams(): Params {
  return {
    withdrawRewardPeriod: Long.ZERO,
    poolRate: new Uint8Array(),
    maxProposalRate: new Uint8Array(),
    maxValCommission: new Uint8Array()
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawRewardPeriod = (reader.int64() as Long);
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
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.withdrawRewardPeriod = object.withdrawRewardPeriod !== undefined && object.withdrawRewardPeriod !== null ? Long.fromValue(object.withdrawRewardPeriod) : Long.ZERO;
    message.poolRate = object.poolRate ?? new Uint8Array();
    message.maxProposalRate = object.maxProposalRate ?? new Uint8Array();
    message.maxValCommission = object.maxValCommission ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      withdrawRewardPeriod: Long.fromString(object.withdraw_reward_period),
      poolRate: object.pool_rate,
      maxProposalRate: object.max_proposal_rate,
      maxValCommission: object.max_val_commission
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.withdraw_reward_period = message.withdrawRewardPeriod ? message.withdrawRewardPeriod.toString() : undefined;
    obj.pool_rate = message.poolRate;
    obj.max_proposal_rate = message.maxProposalRate;
    obj.max_val_commission = message.maxValCommission;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/onomyprotocol.dao.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};