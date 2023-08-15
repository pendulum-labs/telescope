/// <reference types="long" />
import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Drop {
    uid: Long;
    owner: string;
    pair: string;
    drops: string;
    product: string;
    active: boolean;
}
export interface DropProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Drop";
    value: Uint8Array;
}
export interface DropAmino {
    uid: string;
    owner: string;
    pair: string;
    drops: string;
    product: string;
    active: boolean;
}
export interface DropAminoMsg {
    type: "/pendulumlabs.market.market.Drop";
    value: DropAmino;
}
export interface DropSDKType {
    uid: Long;
    owner: string;
    pair: string;
    drops: string;
    product: string;
    active: boolean;
}
export interface Drops {
    uids: Long[];
    sum: string;
}
export interface DropsProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Drops";
    value: Uint8Array;
}
export interface DropsAmino {
    uids: string[];
    sum: string;
}
export interface DropsAminoMsg {
    type: "/pendulumlabs.market.market.Drops";
    value: DropsAmino;
}
export interface DropsSDKType {
    uids: Long[];
    sum: string;
}
export interface DropPairs {
    pairs: string[];
}
export interface DropPairsProtoMsg {
    typeUrl: "/pendulumlabs.market.market.DropPairs";
    value: Uint8Array;
}
export interface DropPairsAmino {
    pairs: string[];
}
export interface DropPairsAminoMsg {
    type: "/pendulumlabs.market.market.DropPairs";
    value: DropPairsAmino;
}
export interface DropPairsSDKType {
    pairs: string[];
}
export declare const Drop: {
    encode(message: Drop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Drop;
    fromPartial(object: DeepPartial<Drop>): Drop;
    fromAmino(object: DropAmino): Drop;
    toAmino(message: Drop): DropAmino;
    fromAminoMsg(object: DropAminoMsg): Drop;
    fromProtoMsg(message: DropProtoMsg): Drop;
    toProto(message: Drop): Uint8Array;
    toProtoMsg(message: Drop): DropProtoMsg;
};
export declare const Drops: {
    encode(message: Drops, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Drops;
    fromPartial(object: DeepPartial<Drops>): Drops;
    fromAmino(object: DropsAmino): Drops;
    toAmino(message: Drops): DropsAmino;
    fromAminoMsg(object: DropsAminoMsg): Drops;
    fromProtoMsg(message: DropsProtoMsg): Drops;
    toProto(message: Drops): Uint8Array;
    toProtoMsg(message: Drops): DropsProtoMsg;
};
export declare const DropPairs: {
    encode(message: DropPairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropPairs;
    fromPartial(object: DeepPartial<DropPairs>): DropPairs;
    fromAmino(object: DropPairsAmino): DropPairs;
    toAmino(message: DropPairs): DropPairsAmino;
    fromAminoMsg(object: DropPairsAminoMsg): DropPairs;
    fromProtoMsg(message: DropPairsProtoMsg): DropPairs;
    toProto(message: DropPairs): Uint8Array;
    toProtoMsg(message: DropPairs): DropPairsProtoMsg;
};
