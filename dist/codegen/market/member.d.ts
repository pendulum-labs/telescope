/// <reference types="long" />
import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Member {
    pair: string;
    denomA: string;
    denomB: string;
    balance: string;
    previous: string;
    limit: Long;
    stop: Long;
}
export interface MemberProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Member";
    value: Uint8Array;
}
export interface MemberAmino {
    pair: string;
    denomA: string;
    denomB: string;
    balance: string;
    previous: string;
    limit: string;
    stop: string;
}
export interface MemberAminoMsg {
    type: "/pendulumlabs.market.market.Member";
    value: MemberAmino;
}
export interface MemberSDKType {
    pair: string;
    denomA: string;
    denomB: string;
    balance: string;
    previous: string;
    limit: Long;
    stop: Long;
}
export declare const Member: {
    encode(message: Member, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Member;
    fromPartial(object: DeepPartial<Member>): Member;
    fromAmino(object: MemberAmino): Member;
    toAmino(message: Member): MemberAmino;
    fromAminoMsg(object: MemberAminoMsg): Member;
    fromProtoMsg(message: MemberProtoMsg): Member;
    toProto(message: Member): Uint8Array;
    toProtoMsg(message: Member): MemberProtoMsg;
};
