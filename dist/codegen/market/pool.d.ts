/// <reference types="long" />
import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Pool {
    pair: string;
    denom1: string;
    denom2: string;
    leaders: Leader[];
    drops: string;
    history: Long;
}
export interface PoolProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Pool";
    value: Uint8Array;
}
export interface PoolAmino {
    pair: string;
    denom1: string;
    denom2: string;
    leaders: LeaderAmino[];
    drops: string;
    history: string;
}
export interface PoolAminoMsg {
    type: "/pendulumlabs.market.market.Pool";
    value: PoolAmino;
}
export interface PoolSDKType {
    pair: string;
    denom1: string;
    denom2: string;
    leaders: LeaderSDKType[];
    drops: string;
    history: Long;
}
export interface Leader {
    address: string;
    drops: string;
}
export interface LeaderProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Leader";
    value: Uint8Array;
}
export interface LeaderAmino {
    address: string;
    drops: string;
}
export interface LeaderAminoMsg {
    type: "/pendulumlabs.market.market.Leader";
    value: LeaderAmino;
}
export interface LeaderSDKType {
    address: string;
    drops: string;
}
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromPartial(object: DeepPartial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
export declare const Leader: {
    encode(message: Leader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Leader;
    fromPartial(object: DeepPartial<Leader>): Leader;
    fromAmino(object: LeaderAmino): Leader;
    toAmino(message: Leader): LeaderAmino;
    fromAminoMsg(object: LeaderAminoMsg): Leader;
    fromProtoMsg(message: LeaderProtoMsg): Leader;
    toProto(message: Leader): Uint8Array;
    toProtoMsg(message: Leader): LeaderProtoMsg;
};
