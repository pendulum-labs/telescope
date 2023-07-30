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
}
export interface DropsProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Drops";
    value: Uint8Array;
}
export interface DropsAmino {
    uids: string[];
}
export interface DropsAminoMsg {
    type: "/pendulumlabs.market.market.Drops";
    value: DropsAmino;
}
export interface DropsSDKType {
    uids: Long[];
}
export interface DropsSum {
    sum: string;
}
export interface DropsSumProtoMsg {
    typeUrl: "/pendulumlabs.market.market.DropsSum";
    value: Uint8Array;
}
export interface DropsSumAmino {
    sum: string;
}
export interface DropsSumAminoMsg {
    type: "/pendulumlabs.market.market.DropsSum";
    value: DropsSumAmino;
}
export interface DropsSumSDKType {
    sum: string;
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
export declare const DropsSum: {
    encode(message: DropsSum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropsSum;
    fromPartial(object: DeepPartial<DropsSum>): DropsSum;
    fromAmino(object: DropsSumAmino): DropsSum;
    toAmino(message: DropsSum): DropsSumAmino;
    fromAminoMsg(object: DropsSumAminoMsg): DropsSum;
    fromProtoMsg(message: DropsSumProtoMsg): DropsSum;
    toProto(message: DropsSum): Uint8Array;
    toProtoMsg(message: DropsSum): DropsSumProtoMsg;
};
