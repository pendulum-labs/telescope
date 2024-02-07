import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
export interface Burnings {
    denom: string;
    amount: string;
}
export interface BurningsProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Burnings";
    value: Uint8Array;
}
export interface BurningsAmino {
    denom: string;
    amount: string;
}
export interface BurningsAminoMsg {
    type: "/pendulumlabs.market.market.Burnings";
    value: BurningsAmino;
}
export interface BurningsSDKType {
    denom: string;
    amount: string;
}
export interface Burned {
    amount: string;
}
export interface BurnedProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Burned";
    value: Uint8Array;
}
export interface BurnedAmino {
    amount: string;
}
export interface BurnedAminoMsg {
    type: "/pendulumlabs.market.market.Burned";
    value: BurnedAmino;
}
export interface BurnedSDKType {
    amount: string;
}
export declare const Burnings: {
    encode(message: Burnings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Burnings;
    fromPartial(object: DeepPartial<Burnings>): Burnings;
    fromAmino(object: BurningsAmino): Burnings;
    toAmino(message: Burnings): BurningsAmino;
    fromAminoMsg(object: BurningsAminoMsg): Burnings;
    fromProtoMsg(message: BurningsProtoMsg): Burnings;
    toProto(message: Burnings): Uint8Array;
    toProtoMsg(message: Burnings): BurningsProtoMsg;
};
export declare const Burned: {
    encode(message: Burned, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Burned;
    fromPartial(object: DeepPartial<Burned>): Burned;
    fromAmino(object: BurnedAmino): Burned;
    toAmino(message: Burned): BurnedAmino;
    fromAminoMsg(object: BurnedAminoMsg): Burned;
    fromProtoMsg(message: BurnedProtoMsg): Burned;
    toProto(message: Burned): Uint8Array;
    toProtoMsg(message: Burned): BurnedProtoMsg;
};
