/// <reference types="long" />
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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
