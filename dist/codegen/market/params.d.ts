import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * leader earnings rates
     * 1,2,3 Comma separated, no space
     */
    earnRates: string;
    /** pool burning rate */
    burnRate: string;
    /** burn coin */
    burnCoin: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/pendulumlabs.market.market.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /**
     * leader earnings rates
     * 1,2,3 Comma separated, no space
     */
    earn_rates: string;
    /** pool burning rate */
    burn_rate: string;
    /** burn coin */
    burn_coin: string;
}
export interface ParamsAminoMsg {
    type: "/pendulumlabs.market.market.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    earn_rates: string;
    burn_rate: string;
    burn_coin: string;
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
