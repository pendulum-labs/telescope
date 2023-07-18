import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/onomyprotocol.dao.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/onomyprotocol.dao.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/onomyprotocol.dao.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/onomyprotocol.dao.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryTreasuryRequest is request type for the Query/Treasury RPC method. */
export interface QueryTreasuryRequest {
}
export interface QueryTreasuryRequestProtoMsg {
    typeUrl: "/onomyprotocol.dao.v1.QueryTreasuryRequest";
    value: Uint8Array;
}
/** QueryTreasuryRequest is request type for the Query/Treasury RPC method. */
export interface QueryTreasuryRequestAmino {
}
export interface QueryTreasuryRequestAminoMsg {
    type: "/onomyprotocol.dao.v1.QueryTreasuryRequest";
    value: QueryTreasuryRequestAmino;
}
/** QueryTreasuryRequest is request type for the Query/Treasury RPC method. */
export interface QueryTreasuryRequestSDKType {
}
/** QueryTreasuryResponse is response type for the Query/Treasury RPC method. */
export interface QueryTreasuryResponse {
    treasuryBalance: Coin[];
}
export interface QueryTreasuryResponseProtoMsg {
    typeUrl: "/onomyprotocol.dao.v1.QueryTreasuryResponse";
    value: Uint8Array;
}
/** QueryTreasuryResponse is response type for the Query/Treasury RPC method. */
export interface QueryTreasuryResponseAmino {
    treasury_balance: CoinAmino[];
}
export interface QueryTreasuryResponseAminoMsg {
    type: "/onomyprotocol.dao.v1.QueryTreasuryResponse";
    value: QueryTreasuryResponseAmino;
}
/** QueryTreasuryResponse is response type for the Query/Treasury RPC method. */
export interface QueryTreasuryResponseSDKType {
    treasury_balance: CoinSDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryTreasuryRequest: {
    encode(_: QueryTreasuryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTreasuryRequest;
    fromPartial(_: DeepPartial<QueryTreasuryRequest>): QueryTreasuryRequest;
    fromAmino(_: QueryTreasuryRequestAmino): QueryTreasuryRequest;
    toAmino(_: QueryTreasuryRequest): QueryTreasuryRequestAmino;
    fromAminoMsg(object: QueryTreasuryRequestAminoMsg): QueryTreasuryRequest;
    fromProtoMsg(message: QueryTreasuryRequestProtoMsg): QueryTreasuryRequest;
    toProto(message: QueryTreasuryRequest): Uint8Array;
    toProtoMsg(message: QueryTreasuryRequest): QueryTreasuryRequestProtoMsg;
};
export declare const QueryTreasuryResponse: {
    encode(message: QueryTreasuryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTreasuryResponse;
    fromPartial(object: DeepPartial<QueryTreasuryResponse>): QueryTreasuryResponse;
    fromAmino(object: QueryTreasuryResponseAmino): QueryTreasuryResponse;
    toAmino(message: QueryTreasuryResponse): QueryTreasuryResponseAmino;
    fromAminoMsg(object: QueryTreasuryResponseAminoMsg): QueryTreasuryResponse;
    fromProtoMsg(message: QueryTreasuryResponseProtoMsg): QueryTreasuryResponse;
    toProto(message: QueryTreasuryResponse): Uint8Array;
    toProtoMsg(message: QueryTreasuryResponse): QueryTreasuryResponseProtoMsg;
};
