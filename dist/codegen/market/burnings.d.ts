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
