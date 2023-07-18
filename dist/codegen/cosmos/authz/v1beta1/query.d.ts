import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType } from "./authz";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msgTypeUrl: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
export interface QueryGrantsRequestProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest";
    value: Uint8Array;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestAmino {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msg_type_url: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryGrantsRequestAminoMsg {
    type: "cosmos-sdk/QueryGrantsRequest";
    value: QueryGrantsRequestAmino;
}
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequestSDKType {
    granter: string;
    grantee: string;
    msg_type_url: string;
    pagination: PageRequestSDKType;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: Grant[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
export interface QueryGrantsResponseProtoMsg {
    typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse";
    value: Uint8Array;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseAmino {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: GrantAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface QueryGrantsResponseAminoMsg {
    type: "cosmos-sdk/QueryGrantsResponse";
    value: QueryGrantsResponseAmino;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponseSDKType {
    grants: GrantSDKType[];
    pagination: PageResponseSDKType;
}
export declare const QueryGrantsRequest: {
    encode(message: QueryGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsRequest;
    fromPartial(object: DeepPartial<QueryGrantsRequest>): QueryGrantsRequest;
    fromAmino(object: QueryGrantsRequestAmino): QueryGrantsRequest;
    toAmino(message: QueryGrantsRequest): QueryGrantsRequestAmino;
    fromAminoMsg(object: QueryGrantsRequestAminoMsg): QueryGrantsRequest;
    toAminoMsg(message: QueryGrantsRequest): QueryGrantsRequestAminoMsg;
    fromProtoMsg(message: QueryGrantsRequestProtoMsg): QueryGrantsRequest;
    toProto(message: QueryGrantsRequest): Uint8Array;
    toProtoMsg(message: QueryGrantsRequest): QueryGrantsRequestProtoMsg;
};
export declare const QueryGrantsResponse: {
    encode(message: QueryGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsResponse;
    fromPartial(object: DeepPartial<QueryGrantsResponse>): QueryGrantsResponse;
    fromAmino(object: QueryGrantsResponseAmino): QueryGrantsResponse;
    toAmino(message: QueryGrantsResponse): QueryGrantsResponseAmino;
    fromAminoMsg(object: QueryGrantsResponseAminoMsg): QueryGrantsResponse;
    toAminoMsg(message: QueryGrantsResponse): QueryGrantsResponseAminoMsg;
    fromProtoMsg(message: QueryGrantsResponseProtoMsg): QueryGrantsResponse;
    toProto(message: QueryGrantsResponse): Uint8Array;
    toProtoMsg(message: QueryGrantsResponse): QueryGrantsResponseProtoMsg;
};
