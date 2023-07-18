import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
    authorization: GrantAuthorization[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the authz module's genesis state. */
export interface GenesisStateAmino {
    authorization: GrantAuthorizationAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the authz module's genesis state. */
export interface GenesisStateSDKType {
    authorization: GrantAuthorizationSDKType[];
}
/** GrantAuthorization defines the GenesisState/GrantAuthorization type. */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization: Any;
    expiration: Date;
}
export interface GrantAuthorizationProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
    value: Uint8Array;
}
/** GrantAuthorization defines the GenesisState/GrantAuthorization type. */
export interface GrantAuthorizationAmino {
    granter: string;
    grantee: string;
    authorization?: AnyAmino;
    expiration?: Date;
}
export interface GrantAuthorizationAminoMsg {
    type: "cosmos-sdk/GrantAuthorization";
    value: GrantAuthorizationAmino;
}
/** GrantAuthorization defines the GenesisState/GrantAuthorization type. */
export interface GrantAuthorizationSDKType {
    granter: string;
    grantee: string;
    authorization: AnySDKType;
    expiration: Date;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GrantAuthorization: {
    encode(message: GrantAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantAuthorization;
    fromPartial(object: DeepPartial<GrantAuthorization>): GrantAuthorization;
    fromAmino(object: GrantAuthorizationAmino): GrantAuthorization;
    toAmino(message: GrantAuthorization): GrantAuthorizationAmino;
    fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization;
    toAminoMsg(message: GrantAuthorization): GrantAuthorizationAminoMsg;
    fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization;
    toProto(message: GrantAuthorization): Uint8Array;
    toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg;
};
