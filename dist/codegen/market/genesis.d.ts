import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Drop, DropAmino, DropSDKType } from "./drop";
import { Member, MemberAmino, MemberSDKType } from "./member";
import { Burnings, BurningsAmino, BurningsSDKType } from "./burnings";
import { Order, OrderAmino, OrderSDKType } from "./order";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** GenesisState defines the market module's genesis state. */
export interface GenesisState {
    params: Params;
    poolList: Pool[];
    dropList: Drop[];
    memberList: Member[];
    burningsList: Burnings[];
    orderList: Order[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/pendulumlabs.market.market.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the market module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    poolList: PoolAmino[];
    dropList: DropAmino[];
    memberList: MemberAmino[];
    burningsList: BurningsAmino[];
    orderList: OrderAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/pendulumlabs.market.market.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the market module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    poolList: PoolSDKType[];
    dropList: DropSDKType[];
    memberList: MemberSDKType[];
    burningsList: BurningsSDKType[];
    orderList: OrderSDKType[];
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
