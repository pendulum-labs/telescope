import { Order, Counterparty, CounterpartyAmino, CounterpartySDKType } from "../../channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequest {
    /** port unique identifier */
    portId: string;
    /** connection unique identifier */
    connectionId: string;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty: Counterparty;
    /** proposed version */
    proposedVersion: string;
}
export interface QueryAppVersionRequestProtoMsg {
    typeUrl: "/ibc.core.port.v1.QueryAppVersionRequest";
    value: Uint8Array;
}
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequestAmino {
    /** port unique identifier */
    port_id: string;
    /** connection unique identifier */
    connection_id: string;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty?: CounterpartyAmino;
    /** proposed version */
    proposed_version: string;
}
export interface QueryAppVersionRequestAminoMsg {
    type: "cosmos-sdk/QueryAppVersionRequest";
    value: QueryAppVersionRequestAmino;
}
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequestSDKType {
    port_id: string;
    connection_id: string;
    ordering: Order;
    counterparty: CounterpartySDKType;
    proposed_version: string;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponse {
    /** port id associated with the request identifiers */
    portId: string;
    /** supported app version */
    version: string;
}
export interface QueryAppVersionResponseProtoMsg {
    typeUrl: "/ibc.core.port.v1.QueryAppVersionResponse";
    value: Uint8Array;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponseAmino {
    /** port id associated with the request identifiers */
    port_id: string;
    /** supported app version */
    version: string;
}
export interface QueryAppVersionResponseAminoMsg {
    type: "cosmos-sdk/QueryAppVersionResponse";
    value: QueryAppVersionResponseAmino;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponseSDKType {
    port_id: string;
    version: string;
}
export declare const QueryAppVersionRequest: {
    encode(message: QueryAppVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionRequest;
    fromPartial(object: DeepPartial<QueryAppVersionRequest>): QueryAppVersionRequest;
    fromAmino(object: QueryAppVersionRequestAmino): QueryAppVersionRequest;
    toAmino(message: QueryAppVersionRequest): QueryAppVersionRequestAmino;
    fromAminoMsg(object: QueryAppVersionRequestAminoMsg): QueryAppVersionRequest;
    toAminoMsg(message: QueryAppVersionRequest): QueryAppVersionRequestAminoMsg;
    fromProtoMsg(message: QueryAppVersionRequestProtoMsg): QueryAppVersionRequest;
    toProto(message: QueryAppVersionRequest): Uint8Array;
    toProtoMsg(message: QueryAppVersionRequest): QueryAppVersionRequestProtoMsg;
};
export declare const QueryAppVersionResponse: {
    encode(message: QueryAppVersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionResponse;
    fromPartial(object: DeepPartial<QueryAppVersionResponse>): QueryAppVersionResponse;
    fromAmino(object: QueryAppVersionResponseAmino): QueryAppVersionResponse;
    toAmino(message: QueryAppVersionResponse): QueryAppVersionResponseAmino;
    fromAminoMsg(object: QueryAppVersionResponseAminoMsg): QueryAppVersionResponse;
    toAminoMsg(message: QueryAppVersionResponse): QueryAppVersionResponseAminoMsg;
    fromProtoMsg(message: QueryAppVersionResponseProtoMsg): QueryAppVersionResponse;
    toProto(message: QueryAppVersionResponse): Uint8Array;
    toProtoMsg(message: QueryAppVersionResponse): QueryAppVersionResponseProtoMsg;
};
