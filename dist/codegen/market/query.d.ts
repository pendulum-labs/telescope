/// <reference types="long" />
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Drop, DropAmino, DropSDKType } from "./drop";
import { Member, MemberAmino, MemberSDKType } from "./member";
import { Burnings, BurningsAmino, BurningsSDKType } from "./burnings";
import { Order, OrderAmino, OrderSDKType, OrderResponse, OrderResponseAmino, OrderResponseSDKType } from "./order";
import { Long, DeepPartial } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryParamsRequest";
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
    typeUrl: "/pendulumlabs.market.market.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetPoolRequest {
    pair: string;
}
export interface QueryGetPoolRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetPoolRequest";
    value: Uint8Array;
}
export interface QueryGetPoolRequestAmino {
    pair: string;
}
export interface QueryGetPoolRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetPoolRequest";
    value: QueryGetPoolRequestAmino;
}
export interface QueryGetPoolRequestSDKType {
    pair: string;
}
export interface QueryGetPoolResponse {
    pool: Pool;
}
export interface QueryGetPoolResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetPoolResponse";
    value: Uint8Array;
}
export interface QueryGetPoolResponseAmino {
    pool?: PoolAmino;
}
export interface QueryGetPoolResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetPoolResponse";
    value: QueryGetPoolResponseAmino;
}
export interface QueryGetPoolResponseSDKType {
    pool: PoolSDKType;
}
export interface QueryAllPoolRequest {
    pagination: PageRequest;
}
export interface QueryAllPoolRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllPoolRequest";
    value: Uint8Array;
}
export interface QueryAllPoolRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllPoolRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllPoolRequest";
    value: QueryAllPoolRequestAmino;
}
export interface QueryAllPoolRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryAllPoolResponse {
    pool: Pool[];
    pagination: PageResponse;
}
export interface QueryAllPoolResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllPoolResponse";
    value: Uint8Array;
}
export interface QueryAllPoolResponseAmino {
    pool: PoolAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllPoolResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllPoolResponse";
    value: QueryAllPoolResponseAmino;
}
export interface QueryAllPoolResponseSDKType {
    pool: PoolSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryGetDropRequest {
    uid: Long;
}
export interface QueryGetDropRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetDropRequest";
    value: Uint8Array;
}
export interface QueryGetDropRequestAmino {
    uid: string;
}
export interface QueryGetDropRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetDropRequest";
    value: QueryGetDropRequestAmino;
}
export interface QueryGetDropRequestSDKType {
    uid: Long;
}
export interface QueryGetDropResponse {
    drop: Drop;
}
export interface QueryGetDropResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetDropResponse";
    value: Uint8Array;
}
export interface QueryGetDropResponseAmino {
    drop?: DropAmino;
}
export interface QueryGetDropResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetDropResponse";
    value: QueryGetDropResponseAmino;
}
export interface QueryGetDropResponseSDKType {
    drop: DropSDKType;
}
export interface QueryAllDropRequest {
    pagination: PageRequest;
}
export interface QueryAllDropRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllDropRequest";
    value: Uint8Array;
}
export interface QueryAllDropRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllDropRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllDropRequest";
    value: QueryAllDropRequestAmino;
}
export interface QueryAllDropRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryAllDropResponse {
    drop: Drop[];
    pagination: PageResponse;
}
export interface QueryAllDropResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllDropResponse";
    value: Uint8Array;
}
export interface QueryAllDropResponseAmino {
    drop: DropAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllDropResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllDropResponse";
    value: QueryAllDropResponseAmino;
}
export interface QueryAllDropResponseSDKType {
    drop: DropSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryGetMemberRequest {
    denomA: string;
    denomB: string;
}
export interface QueryGetMemberRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetMemberRequest";
    value: Uint8Array;
}
export interface QueryGetMemberRequestAmino {
    denomA: string;
    denomB: string;
}
export interface QueryGetMemberRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetMemberRequest";
    value: QueryGetMemberRequestAmino;
}
export interface QueryGetMemberRequestSDKType {
    denomA: string;
    denomB: string;
}
export interface QueryGetMemberResponse {
    member: Member;
}
export interface QueryGetMemberResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetMemberResponse";
    value: Uint8Array;
}
export interface QueryGetMemberResponseAmino {
    member?: MemberAmino;
}
export interface QueryGetMemberResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetMemberResponse";
    value: QueryGetMemberResponseAmino;
}
export interface QueryGetMemberResponseSDKType {
    member: MemberSDKType;
}
export interface QueryAllMemberRequest {
    pagination: PageRequest;
}
export interface QueryAllMemberRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllMemberRequest";
    value: Uint8Array;
}
export interface QueryAllMemberRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllMemberRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllMemberRequest";
    value: QueryAllMemberRequestAmino;
}
export interface QueryAllMemberRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryAllMemberResponse {
    member: Member[];
    pagination: PageResponse;
}
export interface QueryAllMemberResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllMemberResponse";
    value: Uint8Array;
}
export interface QueryAllMemberResponseAmino {
    member: MemberAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllMemberResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllMemberResponse";
    value: QueryAllMemberResponseAmino;
}
export interface QueryAllMemberResponseSDKType {
    member: MemberSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryGetBurningsRequest {
    denom: string;
}
export interface QueryGetBurningsRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetBurningsRequest";
    value: Uint8Array;
}
export interface QueryGetBurningsRequestAmino {
    denom: string;
}
export interface QueryGetBurningsRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetBurningsRequest";
    value: QueryGetBurningsRequestAmino;
}
export interface QueryGetBurningsRequestSDKType {
    denom: string;
}
export interface QueryGetBurningsResponse {
    burnings: Burnings;
}
export interface QueryGetBurningsResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetBurningsResponse";
    value: Uint8Array;
}
export interface QueryGetBurningsResponseAmino {
    burnings?: BurningsAmino;
}
export interface QueryGetBurningsResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetBurningsResponse";
    value: QueryGetBurningsResponseAmino;
}
export interface QueryGetBurningsResponseSDKType {
    burnings: BurningsSDKType;
}
export interface QueryAllBurningsRequest {
    pagination: PageRequest;
}
export interface QueryAllBurningsRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllBurningsRequest";
    value: Uint8Array;
}
export interface QueryAllBurningsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllBurningsRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllBurningsRequest";
    value: QueryAllBurningsRequestAmino;
}
export interface QueryAllBurningsRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryAllBurningsResponse {
    burnings: Burnings[];
    pagination: PageResponse;
}
export interface QueryAllBurningsResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllBurningsResponse";
    value: Uint8Array;
}
export interface QueryAllBurningsResponseAmino {
    burnings: BurningsAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllBurningsResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllBurningsResponse";
    value: QueryAllBurningsResponseAmino;
}
export interface QueryAllBurningsResponseSDKType {
    burnings: BurningsSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryGetOrderRequest {
    uid: Long;
}
export interface QueryGetOrderRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetOrderRequest";
    value: Uint8Array;
}
export interface QueryGetOrderRequestAmino {
    uid: string;
}
export interface QueryGetOrderRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetOrderRequest";
    value: QueryGetOrderRequestAmino;
}
export interface QueryGetOrderRequestSDKType {
    uid: Long;
}
export interface QueryGetOrderResponse {
    order: Order;
}
export interface QueryGetOrderResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryGetOrderResponse";
    value: Uint8Array;
}
export interface QueryGetOrderResponseAmino {
    order?: OrderAmino;
}
export interface QueryGetOrderResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryGetOrderResponse";
    value: QueryGetOrderResponseAmino;
}
export interface QueryGetOrderResponseSDKType {
    order: OrderSDKType;
}
export interface QueryAllOrderRequest {
    pagination: PageRequest;
}
export interface QueryAllOrderRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllOrderRequest";
    value: Uint8Array;
}
export interface QueryAllOrderRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllOrderRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllOrderRequest";
    value: QueryAllOrderRequestAmino;
}
export interface QueryAllOrderRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryAllOrderResponse {
    order: Order[];
    pagination: PageResponse;
}
export interface QueryAllOrderResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryAllOrderResponse";
    value: Uint8Array;
}
export interface QueryAllOrderResponseAmino {
    order: OrderAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllOrderResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryAllOrderResponse";
    value: QueryAllOrderResponseAmino;
}
export interface QueryAllOrderResponseSDKType {
    order: OrderSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryBookRequest {
    denomA: string;
    denomB: string;
    orderType: string;
    pagination: PageRequest;
}
export interface QueryBookRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryBookRequest";
    value: Uint8Array;
}
export interface QueryBookRequestAmino {
    denomA: string;
    denomB: string;
    orderType: string;
    pagination?: PageRequestAmino;
}
export interface QueryBookRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryBookRequest";
    value: QueryBookRequestAmino;
}
export interface QueryBookRequestSDKType {
    denomA: string;
    denomB: string;
    orderType: string;
    pagination: PageRequestSDKType;
}
export interface QueryBookResponse {
    book: OrderResponse[];
    pagination: PageResponse;
}
export interface QueryBookResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryBookResponse";
    value: Uint8Array;
}
export interface QueryBookResponseAmino {
    book: OrderResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryBookResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryBookResponse";
    value: QueryBookResponseAmino;
}
export interface QueryBookResponseSDKType {
    book: OrderResponseSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryBookendsRequest {
    coinA: string;
    coinB: string;
    orderType: string;
    rate: string[];
}
export interface QueryBookendsRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryBookendsRequest";
    value: Uint8Array;
}
export interface QueryBookendsRequestAmino {
    coinA: string;
    coinB: string;
    orderType: string;
    rate: string[];
}
export interface QueryBookendsRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryBookendsRequest";
    value: QueryBookendsRequestAmino;
}
export interface QueryBookendsRequestSDKType {
    coinA: string;
    coinB: string;
    orderType: string;
    rate: string[];
}
export interface QueryBookendsResponse {
    coinA: string;
    coinB: string;
    orderType: string;
    rate: string[];
    prev: Long;
    next: Long;
}
export interface QueryBookendsResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryBookendsResponse";
    value: Uint8Array;
}
export interface QueryBookendsResponseAmino {
    coinA: string;
    coinB: string;
    orderType: string;
    rate: string[];
    prev: string;
    next: string;
}
export interface QueryBookendsResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryBookendsResponse";
    value: QueryBookendsResponseAmino;
}
export interface QueryBookendsResponseSDKType {
    coinA: string;
    coinB: string;
    orderType: string;
    rate: string[];
    prev: Long;
    next: Long;
}
export interface QueryHistoryRequest {
    pair: string;
    length: string;
    pagination: PageRequest;
}
export interface QueryHistoryRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryHistoryRequest";
    value: Uint8Array;
}
export interface QueryHistoryRequestAmino {
    pair: string;
    length: string;
    pagination?: PageRequestAmino;
}
export interface QueryHistoryRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryHistoryRequest";
    value: QueryHistoryRequestAmino;
}
export interface QueryHistoryRequestSDKType {
    pair: string;
    length: string;
    pagination: PageRequestSDKType;
}
export interface QueryHistoryResponse {
    history: OrderResponse[];
    pagination: PageResponse;
}
export interface QueryHistoryResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryHistoryResponse";
    value: Uint8Array;
}
export interface QueryHistoryResponseAmino {
    history: OrderResponseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryHistoryResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryHistoryResponse";
    value: QueryHistoryResponseAmino;
}
export interface QueryHistoryResponseSDKType {
    history: OrderResponseSDKType[];
    pagination: PageResponseSDKType;
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
export declare const QueryGetPoolRequest: {
    encode(message: QueryGetPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolRequest;
    fromPartial(object: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest;
    fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest;
    toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino;
    fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest;
    fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest;
    toProto(message: QueryGetPoolRequest): Uint8Array;
    toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg;
};
export declare const QueryGetPoolResponse: {
    encode(message: QueryGetPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolResponse;
    fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse;
    fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse;
    toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino;
    fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse;
    fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse;
    toProto(message: QueryGetPoolResponse): Uint8Array;
    toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg;
};
export declare const QueryAllPoolRequest: {
    encode(message: QueryAllPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRequest;
    fromPartial(object: DeepPartial<QueryAllPoolRequest>): QueryAllPoolRequest;
    fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest;
    toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino;
    fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest;
    fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest;
    toProto(message: QueryAllPoolRequest): Uint8Array;
    toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg;
};
export declare const QueryAllPoolResponse: {
    encode(message: QueryAllPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolResponse;
    fromPartial(object: DeepPartial<QueryAllPoolResponse>): QueryAllPoolResponse;
    fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse;
    toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino;
    fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse;
    fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse;
    toProto(message: QueryAllPoolResponse): Uint8Array;
    toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg;
};
export declare const QueryGetDropRequest: {
    encode(message: QueryGetDropRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDropRequest;
    fromPartial(object: DeepPartial<QueryGetDropRequest>): QueryGetDropRequest;
    fromAmino(object: QueryGetDropRequestAmino): QueryGetDropRequest;
    toAmino(message: QueryGetDropRequest): QueryGetDropRequestAmino;
    fromAminoMsg(object: QueryGetDropRequestAminoMsg): QueryGetDropRequest;
    fromProtoMsg(message: QueryGetDropRequestProtoMsg): QueryGetDropRequest;
    toProto(message: QueryGetDropRequest): Uint8Array;
    toProtoMsg(message: QueryGetDropRequest): QueryGetDropRequestProtoMsg;
};
export declare const QueryGetDropResponse: {
    encode(message: QueryGetDropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDropResponse;
    fromPartial(object: DeepPartial<QueryGetDropResponse>): QueryGetDropResponse;
    fromAmino(object: QueryGetDropResponseAmino): QueryGetDropResponse;
    toAmino(message: QueryGetDropResponse): QueryGetDropResponseAmino;
    fromAminoMsg(object: QueryGetDropResponseAminoMsg): QueryGetDropResponse;
    fromProtoMsg(message: QueryGetDropResponseProtoMsg): QueryGetDropResponse;
    toProto(message: QueryGetDropResponse): Uint8Array;
    toProtoMsg(message: QueryGetDropResponse): QueryGetDropResponseProtoMsg;
};
export declare const QueryAllDropRequest: {
    encode(message: QueryAllDropRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDropRequest;
    fromPartial(object: DeepPartial<QueryAllDropRequest>): QueryAllDropRequest;
    fromAmino(object: QueryAllDropRequestAmino): QueryAllDropRequest;
    toAmino(message: QueryAllDropRequest): QueryAllDropRequestAmino;
    fromAminoMsg(object: QueryAllDropRequestAminoMsg): QueryAllDropRequest;
    fromProtoMsg(message: QueryAllDropRequestProtoMsg): QueryAllDropRequest;
    toProto(message: QueryAllDropRequest): Uint8Array;
    toProtoMsg(message: QueryAllDropRequest): QueryAllDropRequestProtoMsg;
};
export declare const QueryAllDropResponse: {
    encode(message: QueryAllDropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDropResponse;
    fromPartial(object: DeepPartial<QueryAllDropResponse>): QueryAllDropResponse;
    fromAmino(object: QueryAllDropResponseAmino): QueryAllDropResponse;
    toAmino(message: QueryAllDropResponse): QueryAllDropResponseAmino;
    fromAminoMsg(object: QueryAllDropResponseAminoMsg): QueryAllDropResponse;
    fromProtoMsg(message: QueryAllDropResponseProtoMsg): QueryAllDropResponse;
    toProto(message: QueryAllDropResponse): Uint8Array;
    toProtoMsg(message: QueryAllDropResponse): QueryAllDropResponseProtoMsg;
};
export declare const QueryGetMemberRequest: {
    encode(message: QueryGetMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMemberRequest;
    fromPartial(object: DeepPartial<QueryGetMemberRequest>): QueryGetMemberRequest;
    fromAmino(object: QueryGetMemberRequestAmino): QueryGetMemberRequest;
    toAmino(message: QueryGetMemberRequest): QueryGetMemberRequestAmino;
    fromAminoMsg(object: QueryGetMemberRequestAminoMsg): QueryGetMemberRequest;
    fromProtoMsg(message: QueryGetMemberRequestProtoMsg): QueryGetMemberRequest;
    toProto(message: QueryGetMemberRequest): Uint8Array;
    toProtoMsg(message: QueryGetMemberRequest): QueryGetMemberRequestProtoMsg;
};
export declare const QueryGetMemberResponse: {
    encode(message: QueryGetMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMemberResponse;
    fromPartial(object: DeepPartial<QueryGetMemberResponse>): QueryGetMemberResponse;
    fromAmino(object: QueryGetMemberResponseAmino): QueryGetMemberResponse;
    toAmino(message: QueryGetMemberResponse): QueryGetMemberResponseAmino;
    fromAminoMsg(object: QueryGetMemberResponseAminoMsg): QueryGetMemberResponse;
    fromProtoMsg(message: QueryGetMemberResponseProtoMsg): QueryGetMemberResponse;
    toProto(message: QueryGetMemberResponse): Uint8Array;
    toProtoMsg(message: QueryGetMemberResponse): QueryGetMemberResponseProtoMsg;
};
export declare const QueryAllMemberRequest: {
    encode(message: QueryAllMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMemberRequest;
    fromPartial(object: DeepPartial<QueryAllMemberRequest>): QueryAllMemberRequest;
    fromAmino(object: QueryAllMemberRequestAmino): QueryAllMemberRequest;
    toAmino(message: QueryAllMemberRequest): QueryAllMemberRequestAmino;
    fromAminoMsg(object: QueryAllMemberRequestAminoMsg): QueryAllMemberRequest;
    fromProtoMsg(message: QueryAllMemberRequestProtoMsg): QueryAllMemberRequest;
    toProto(message: QueryAllMemberRequest): Uint8Array;
    toProtoMsg(message: QueryAllMemberRequest): QueryAllMemberRequestProtoMsg;
};
export declare const QueryAllMemberResponse: {
    encode(message: QueryAllMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMemberResponse;
    fromPartial(object: DeepPartial<QueryAllMemberResponse>): QueryAllMemberResponse;
    fromAmino(object: QueryAllMemberResponseAmino): QueryAllMemberResponse;
    toAmino(message: QueryAllMemberResponse): QueryAllMemberResponseAmino;
    fromAminoMsg(object: QueryAllMemberResponseAminoMsg): QueryAllMemberResponse;
    fromProtoMsg(message: QueryAllMemberResponseProtoMsg): QueryAllMemberResponse;
    toProto(message: QueryAllMemberResponse): Uint8Array;
    toProtoMsg(message: QueryAllMemberResponse): QueryAllMemberResponseProtoMsg;
};
export declare const QueryGetBurningsRequest: {
    encode(message: QueryGetBurningsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBurningsRequest;
    fromPartial(object: DeepPartial<QueryGetBurningsRequest>): QueryGetBurningsRequest;
    fromAmino(object: QueryGetBurningsRequestAmino): QueryGetBurningsRequest;
    toAmino(message: QueryGetBurningsRequest): QueryGetBurningsRequestAmino;
    fromAminoMsg(object: QueryGetBurningsRequestAminoMsg): QueryGetBurningsRequest;
    fromProtoMsg(message: QueryGetBurningsRequestProtoMsg): QueryGetBurningsRequest;
    toProto(message: QueryGetBurningsRequest): Uint8Array;
    toProtoMsg(message: QueryGetBurningsRequest): QueryGetBurningsRequestProtoMsg;
};
export declare const QueryGetBurningsResponse: {
    encode(message: QueryGetBurningsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBurningsResponse;
    fromPartial(object: DeepPartial<QueryGetBurningsResponse>): QueryGetBurningsResponse;
    fromAmino(object: QueryGetBurningsResponseAmino): QueryGetBurningsResponse;
    toAmino(message: QueryGetBurningsResponse): QueryGetBurningsResponseAmino;
    fromAminoMsg(object: QueryGetBurningsResponseAminoMsg): QueryGetBurningsResponse;
    fromProtoMsg(message: QueryGetBurningsResponseProtoMsg): QueryGetBurningsResponse;
    toProto(message: QueryGetBurningsResponse): Uint8Array;
    toProtoMsg(message: QueryGetBurningsResponse): QueryGetBurningsResponseProtoMsg;
};
export declare const QueryAllBurningsRequest: {
    encode(message: QueryAllBurningsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBurningsRequest;
    fromPartial(object: DeepPartial<QueryAllBurningsRequest>): QueryAllBurningsRequest;
    fromAmino(object: QueryAllBurningsRequestAmino): QueryAllBurningsRequest;
    toAmino(message: QueryAllBurningsRequest): QueryAllBurningsRequestAmino;
    fromAminoMsg(object: QueryAllBurningsRequestAminoMsg): QueryAllBurningsRequest;
    fromProtoMsg(message: QueryAllBurningsRequestProtoMsg): QueryAllBurningsRequest;
    toProto(message: QueryAllBurningsRequest): Uint8Array;
    toProtoMsg(message: QueryAllBurningsRequest): QueryAllBurningsRequestProtoMsg;
};
export declare const QueryAllBurningsResponse: {
    encode(message: QueryAllBurningsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBurningsResponse;
    fromPartial(object: DeepPartial<QueryAllBurningsResponse>): QueryAllBurningsResponse;
    fromAmino(object: QueryAllBurningsResponseAmino): QueryAllBurningsResponse;
    toAmino(message: QueryAllBurningsResponse): QueryAllBurningsResponseAmino;
    fromAminoMsg(object: QueryAllBurningsResponseAminoMsg): QueryAllBurningsResponse;
    fromProtoMsg(message: QueryAllBurningsResponseProtoMsg): QueryAllBurningsResponse;
    toProto(message: QueryAllBurningsResponse): Uint8Array;
    toProtoMsg(message: QueryAllBurningsResponse): QueryAllBurningsResponseProtoMsg;
};
export declare const QueryGetOrderRequest: {
    encode(message: QueryGetOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderRequest;
    fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest;
    fromAmino(object: QueryGetOrderRequestAmino): QueryGetOrderRequest;
    toAmino(message: QueryGetOrderRequest): QueryGetOrderRequestAmino;
    fromAminoMsg(object: QueryGetOrderRequestAminoMsg): QueryGetOrderRequest;
    fromProtoMsg(message: QueryGetOrderRequestProtoMsg): QueryGetOrderRequest;
    toProto(message: QueryGetOrderRequest): Uint8Array;
    toProtoMsg(message: QueryGetOrderRequest): QueryGetOrderRequestProtoMsg;
};
export declare const QueryGetOrderResponse: {
    encode(message: QueryGetOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderResponse;
    fromPartial(object: DeepPartial<QueryGetOrderResponse>): QueryGetOrderResponse;
    fromAmino(object: QueryGetOrderResponseAmino): QueryGetOrderResponse;
    toAmino(message: QueryGetOrderResponse): QueryGetOrderResponseAmino;
    fromAminoMsg(object: QueryGetOrderResponseAminoMsg): QueryGetOrderResponse;
    fromProtoMsg(message: QueryGetOrderResponseProtoMsg): QueryGetOrderResponse;
    toProto(message: QueryGetOrderResponse): Uint8Array;
    toProtoMsg(message: QueryGetOrderResponse): QueryGetOrderResponseProtoMsg;
};
export declare const QueryAllOrderRequest: {
    encode(message: QueryAllOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderRequest;
    fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest;
    fromAmino(object: QueryAllOrderRequestAmino): QueryAllOrderRequest;
    toAmino(message: QueryAllOrderRequest): QueryAllOrderRequestAmino;
    fromAminoMsg(object: QueryAllOrderRequestAminoMsg): QueryAllOrderRequest;
    fromProtoMsg(message: QueryAllOrderRequestProtoMsg): QueryAllOrderRequest;
    toProto(message: QueryAllOrderRequest): Uint8Array;
    toProtoMsg(message: QueryAllOrderRequest): QueryAllOrderRequestProtoMsg;
};
export declare const QueryAllOrderResponse: {
    encode(message: QueryAllOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderResponse;
    fromPartial(object: DeepPartial<QueryAllOrderResponse>): QueryAllOrderResponse;
    fromAmino(object: QueryAllOrderResponseAmino): QueryAllOrderResponse;
    toAmino(message: QueryAllOrderResponse): QueryAllOrderResponseAmino;
    fromAminoMsg(object: QueryAllOrderResponseAminoMsg): QueryAllOrderResponse;
    fromProtoMsg(message: QueryAllOrderResponseProtoMsg): QueryAllOrderResponse;
    toProto(message: QueryAllOrderResponse): Uint8Array;
    toProtoMsg(message: QueryAllOrderResponse): QueryAllOrderResponseProtoMsg;
};
export declare const QueryBookRequest: {
    encode(message: QueryBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookRequest;
    fromPartial(object: DeepPartial<QueryBookRequest>): QueryBookRequest;
    fromAmino(object: QueryBookRequestAmino): QueryBookRequest;
    toAmino(message: QueryBookRequest): QueryBookRequestAmino;
    fromAminoMsg(object: QueryBookRequestAminoMsg): QueryBookRequest;
    fromProtoMsg(message: QueryBookRequestProtoMsg): QueryBookRequest;
    toProto(message: QueryBookRequest): Uint8Array;
    toProtoMsg(message: QueryBookRequest): QueryBookRequestProtoMsg;
};
export declare const QueryBookResponse: {
    encode(message: QueryBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookResponse;
    fromPartial(object: DeepPartial<QueryBookResponse>): QueryBookResponse;
    fromAmino(object: QueryBookResponseAmino): QueryBookResponse;
    toAmino(message: QueryBookResponse): QueryBookResponseAmino;
    fromAminoMsg(object: QueryBookResponseAminoMsg): QueryBookResponse;
    fromProtoMsg(message: QueryBookResponseProtoMsg): QueryBookResponse;
    toProto(message: QueryBookResponse): Uint8Array;
    toProtoMsg(message: QueryBookResponse): QueryBookResponseProtoMsg;
};
export declare const QueryBookendsRequest: {
    encode(message: QueryBookendsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookendsRequest;
    fromPartial(object: DeepPartial<QueryBookendsRequest>): QueryBookendsRequest;
    fromAmino(object: QueryBookendsRequestAmino): QueryBookendsRequest;
    toAmino(message: QueryBookendsRequest): QueryBookendsRequestAmino;
    fromAminoMsg(object: QueryBookendsRequestAminoMsg): QueryBookendsRequest;
    fromProtoMsg(message: QueryBookendsRequestProtoMsg): QueryBookendsRequest;
    toProto(message: QueryBookendsRequest): Uint8Array;
    toProtoMsg(message: QueryBookendsRequest): QueryBookendsRequestProtoMsg;
};
export declare const QueryBookendsResponse: {
    encode(message: QueryBookendsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookendsResponse;
    fromPartial(object: DeepPartial<QueryBookendsResponse>): QueryBookendsResponse;
    fromAmino(object: QueryBookendsResponseAmino): QueryBookendsResponse;
    toAmino(message: QueryBookendsResponse): QueryBookendsResponseAmino;
    fromAminoMsg(object: QueryBookendsResponseAminoMsg): QueryBookendsResponse;
    fromProtoMsg(message: QueryBookendsResponseProtoMsg): QueryBookendsResponse;
    toProto(message: QueryBookendsResponse): Uint8Array;
    toProtoMsg(message: QueryBookendsResponse): QueryBookendsResponseProtoMsg;
};
export declare const QueryHistoryRequest: {
    encode(message: QueryHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoryRequest;
    fromPartial(object: DeepPartial<QueryHistoryRequest>): QueryHistoryRequest;
    fromAmino(object: QueryHistoryRequestAmino): QueryHistoryRequest;
    toAmino(message: QueryHistoryRequest): QueryHistoryRequestAmino;
    fromAminoMsg(object: QueryHistoryRequestAminoMsg): QueryHistoryRequest;
    fromProtoMsg(message: QueryHistoryRequestProtoMsg): QueryHistoryRequest;
    toProto(message: QueryHistoryRequest): Uint8Array;
    toProtoMsg(message: QueryHistoryRequest): QueryHistoryRequestProtoMsg;
};
export declare const QueryHistoryResponse: {
    encode(message: QueryHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoryResponse;
    fromPartial(object: DeepPartial<QueryHistoryResponse>): QueryHistoryResponse;
    fromAmino(object: QueryHistoryResponseAmino): QueryHistoryResponse;
    toAmino(message: QueryHistoryResponse): QueryHistoryResponseAmino;
    fromAminoMsg(object: QueryHistoryResponseAminoMsg): QueryHistoryResponse;
    fromProtoMsg(message: QueryHistoryResponseProtoMsg): QueryHistoryResponse;
    toProto(message: QueryHistoryResponse): Uint8Array;
    toProtoMsg(message: QueryHistoryResponse): QueryHistoryResponseProtoMsg;
};
