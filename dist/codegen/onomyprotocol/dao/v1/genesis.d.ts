import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the dao module's genesis state. */
export interface GenesisState {
    /** the dao module managed params */
    params: Params;
    /** the list of dao module coins */
    treasuryBalance: Coin[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/onomyprotocol.dao.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the dao module's genesis state. */
export interface GenesisStateAmino {
    /** the dao module managed params */
    params?: ParamsAmino;
    /** the list of dao module coins */
    treasury_balance: CoinAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/onomyprotocol.dao.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the dao module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    treasury_balance: CoinSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
