/// <reference types="long" />
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** IDSet represents a set of IDs */
export interface IDSet {
    /** IDSet represents a set of IDs */
    ids: Long[];
}
export interface IDSetProtoMsg {
    typeUrl: "/gravity.v1.IDSet";
    value: Uint8Array;
}
/** IDSet represents a set of IDs */
export interface IDSetAmino {
    /** IDSet represents a set of IDs */
    ids: string[];
}
export interface IDSetAminoMsg {
    type: "/gravity.v1.IDSet";
    value: IDSetAmino;
}
/** IDSet represents a set of IDs */
export interface IDSetSDKType {
    ids: Long[];
}
export interface BatchFees {
    token: string;
    totalFees: string;
    txCount: Long;
}
export interface BatchFeesProtoMsg {
    typeUrl: "/gravity.v1.BatchFees";
    value: Uint8Array;
}
export interface BatchFeesAmino {
    token: string;
    total_fees: string;
    tx_count: string;
}
export interface BatchFeesAminoMsg {
    type: "/gravity.v1.BatchFees";
    value: BatchFeesAmino;
}
export interface BatchFeesSDKType {
    token: string;
    total_fees: string;
    tx_count: Long;
}
export declare const IDSet: {
    encode(message: IDSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDSet;
    fromPartial(object: DeepPartial<IDSet>): IDSet;
    fromAmino(object: IDSetAmino): IDSet;
    toAmino(message: IDSet): IDSetAmino;
    fromAminoMsg(object: IDSetAminoMsg): IDSet;
    fromProtoMsg(message: IDSetProtoMsg): IDSet;
    toProto(message: IDSet): Uint8Array;
    toProtoMsg(message: IDSet): IDSetProtoMsg;
};
export declare const BatchFees: {
    encode(message: BatchFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchFees;
    fromPartial(object: DeepPartial<BatchFees>): BatchFees;
    fromAmino(object: BatchFeesAmino): BatchFees;
    toAmino(message: BatchFees): BatchFeesAmino;
    fromAminoMsg(object: BatchFeesAminoMsg): BatchFees;
    fromProtoMsg(message: BatchFeesProtoMsg): BatchFees;
    toProto(message: BatchFees): Uint8Array;
    toProtoMsg(message: BatchFees): BatchFeesProtoMsg;
};
