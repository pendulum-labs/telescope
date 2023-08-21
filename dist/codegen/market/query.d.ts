/// <reference types="long" />
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Pool, PoolAmino, PoolSDKType } from "./pool";
import { Drop, DropAmino, DropSDKType } from "./drop";
import { Member, MemberAmino, MemberSDKType } from "./member";
import { Burnings, BurningsAmino, BurningsSDKType } from "./burnings";
import { Order, OrderAmino, OrderSDKType, Orders, OrdersAmino, OrdersSDKType, OrderResponse, OrderResponseAmino, OrderResponseSDKType } from "./order";
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
export interface QueryDropRequest {
    uid: Long;
}
export interface QueryDropRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropRequest";
    value: Uint8Array;
}
export interface QueryDropRequestAmino {
    uid: string;
}
export interface QueryDropRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropRequest";
    value: QueryDropRequestAmino;
}
export interface QueryDropRequestSDKType {
    uid: Long;
}
export interface QueryDropCoinRequest {
    denomA: string;
    denomB: string;
    amountA: string;
}
export interface QueryDropCoinRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropCoinRequest";
    value: Uint8Array;
}
export interface QueryDropCoinRequestAmino {
    denomA: string;
    denomB: string;
    amountA: string;
}
export interface QueryDropCoinRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropCoinRequest";
    value: QueryDropCoinRequestAmino;
}
export interface QueryDropCoinRequestSDKType {
    denomA: string;
    denomB: string;
    amountA: string;
}
export interface QueryDropCoinResponse {
    drops: string;
    amountB: string;
}
export interface QueryDropCoinResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropCoinResponse";
    value: Uint8Array;
}
export interface QueryDropCoinResponseAmino {
    drops: string;
    amountB: string;
}
export interface QueryDropCoinResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropCoinResponse";
    value: QueryDropCoinResponseAmino;
}
export interface QueryDropCoinResponseSDKType {
    drops: string;
    amountB: string;
}
export interface QueryDropResponse {
    drop: Drop;
}
export interface QueryDropResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropResponse";
    value: Uint8Array;
}
export interface QueryDropResponseAmino {
    drop?: DropAmino;
}
export interface QueryDropResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropResponse";
    value: QueryDropResponseAmino;
}
export interface QueryDropResponseSDKType {
    drop: DropSDKType;
}
export interface QueryDropAmountsRequest {
    uid: Long;
}
export interface QueryDropAmountsRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropAmountsRequest";
    value: Uint8Array;
}
export interface QueryDropAmountsRequestAmino {
    uid: string;
}
export interface QueryDropAmountsRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropAmountsRequest";
    value: QueryDropAmountsRequestAmino;
}
export interface QueryDropAmountsRequestSDKType {
    uid: Long;
}
export interface QueryDropAmountsResponse {
    denom1: string;
    denom2: string;
    amount1: string;
    amount2: string;
}
export interface QueryDropAmountsResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropAmountsResponse";
    value: Uint8Array;
}
export interface QueryDropAmountsResponseAmino {
    denom1: string;
    denom2: string;
    amount1: string;
    amount2: string;
}
export interface QueryDropAmountsResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropAmountsResponse";
    value: QueryDropAmountsResponseAmino;
}
export interface QueryDropAmountsResponseSDKType {
    denom1: string;
    denom2: string;
    amount1: string;
    amount2: string;
}
export interface QueryDropPairsRequest {
    address: string;
}
export interface QueryDropPairsRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropPairsRequest";
    value: Uint8Array;
}
export interface QueryDropPairsRequestAmino {
    address: string;
}
export interface QueryDropPairsRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropPairsRequest";
    value: QueryDropPairsRequestAmino;
}
export interface QueryDropPairsRequestSDKType {
    address: string;
}
export interface QueryDropPairsResponse {
    pairs: string[];
}
export interface QueryDropPairsResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropPairsResponse";
    value: Uint8Array;
}
export interface QueryDropPairsResponseAmino {
    pairs: string[];
}
export interface QueryDropPairsResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropPairsResponse";
    value: QueryDropPairsResponseAmino;
}
export interface QueryDropPairsResponseSDKType {
    pairs: string[];
}
export interface QueryDropOwnerPairRequest {
    address: string;
    pair: string;
    pagination: PageRequest;
}
export interface QueryDropOwnerPairRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairRequest";
    value: Uint8Array;
}
export interface QueryDropOwnerPairRequestAmino {
    address: string;
    pair: string;
    pagination?: PageRequestAmino;
}
export interface QueryDropOwnerPairRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropOwnerPairRequest";
    value: QueryDropOwnerPairRequestAmino;
}
export interface QueryDropOwnerPairRequestSDKType {
    address: string;
    pair: string;
    pagination: PageRequestSDKType;
}
export interface QueryDropOwnerPairSumRequest {
    address: string;
    pair: string;
}
export interface QueryDropOwnerPairSumRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairSumRequest";
    value: Uint8Array;
}
export interface QueryDropOwnerPairSumRequestAmino {
    address: string;
    pair: string;
}
export interface QueryDropOwnerPairSumRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropOwnerPairSumRequest";
    value: QueryDropOwnerPairSumRequestAmino;
}
export interface QueryDropOwnerPairSumRequestSDKType {
    address: string;
    pair: string;
}
export interface QueryDropOwnerPairSumResponse {
    sum: string;
}
export interface QueryDropOwnerPairSumResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairSumResponse";
    value: Uint8Array;
}
export interface QueryDropOwnerPairSumResponseAmino {
    sum: string;
}
export interface QueryDropOwnerPairSumResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropOwnerPairSumResponse";
    value: QueryDropOwnerPairSumResponseAmino;
}
export interface QueryDropOwnerPairSumResponseSDKType {
    sum: string;
}
export interface QueryDropOwnerPairUidsRequest {
    address: string;
    pair: string;
    pagination: PageRequest;
}
export interface QueryDropOwnerPairUidsRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairUidsRequest";
    value: Uint8Array;
}
export interface QueryDropOwnerPairUidsRequestAmino {
    address: string;
    pair: string;
    pagination?: PageRequestAmino;
}
export interface QueryDropOwnerPairUidsRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropOwnerPairUidsRequest";
    value: QueryDropOwnerPairUidsRequestAmino;
}
export interface QueryDropOwnerPairUidsRequestSDKType {
    address: string;
    pair: string;
    pagination: PageRequestSDKType;
}
export interface QueryUidsResponse {
    uids: Long[];
    pagination: PageResponse;
}
export interface QueryUidsResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryUidsResponse";
    value: Uint8Array;
}
export interface QueryUidsResponseAmino {
    uids: string[];
    pagination?: PageResponseAmino;
}
export interface QueryUidsResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryUidsResponse";
    value: QueryUidsResponseAmino;
}
export interface QueryUidsResponseSDKType {
    uids: Long[];
    pagination: PageResponseSDKType;
}
export interface QueryDropOwnerPairDetailRequest {
    address: string;
    pair: string;
    pagination: PageRequest;
}
export interface QueryDropOwnerPairDetailRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairDetailRequest";
    value: Uint8Array;
}
export interface QueryDropOwnerPairDetailRequestAmino {
    address: string;
    pair: string;
    pagination?: PageRequestAmino;
}
export interface QueryDropOwnerPairDetailRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropOwnerPairDetailRequest";
    value: QueryDropOwnerPairDetailRequestAmino;
}
export interface QueryDropOwnerPairDetailRequestSDKType {
    address: string;
    pair: string;
    pagination: PageRequestSDKType;
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
export interface QueryDropsResponse {
    drops: Drop[];
    pagination: PageResponse;
}
export interface QueryDropsResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryDropsResponse";
    value: Uint8Array;
}
export interface QueryDropsResponseAmino {
    drops: DropAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryDropsResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryDropsResponse";
    value: QueryDropsResponseAmino;
}
export interface QueryDropsResponseSDKType {
    drops: DropSDKType[];
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
export interface QueryOrderRequest {
    uid: Long;
}
export interface QueryOrderRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryOrderRequest";
    value: Uint8Array;
}
export interface QueryOrderRequestAmino {
    uid: string;
}
export interface QueryOrderRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryOrderRequest";
    value: QueryOrderRequestAmino;
}
export interface QueryOrderRequestSDKType {
    uid: Long;
}
export interface QueryOrderResponse {
    order: Order;
}
export interface QueryOrderResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryOrderResponse";
    value: Uint8Array;
}
export interface QueryOrderResponseAmino {
    order?: OrderAmino;
}
export interface QueryOrderResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryOrderResponse";
    value: QueryOrderResponseAmino;
}
export interface QueryOrderResponseSDKType {
    order: OrderSDKType;
}
export interface QueryOrdersResponse {
    orders: Order[];
    pagination: PageResponse;
}
export interface QueryOrdersResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryOrdersResponse";
    value: Uint8Array;
}
export interface QueryOrdersResponseAmino {
    orders: OrderAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryOrdersResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryOrdersResponse";
    value: QueryOrdersResponseAmino;
}
export interface QueryOrdersResponseSDKType {
    orders: OrderSDKType[];
    pagination: PageResponseSDKType;
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
export interface QueryOrderOwnerRequest {
    address: string;
    pagination: PageRequest;
}
export interface QueryOrderOwnerRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerRequest";
    value: Uint8Array;
}
export interface QueryOrderOwnerRequestAmino {
    address: string;
    pagination?: PageRequestAmino;
}
export interface QueryOrderOwnerRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryOrderOwnerRequest";
    value: QueryOrderOwnerRequestAmino;
}
export interface QueryOrderOwnerRequestSDKType {
    address: string;
    pagination: PageRequestSDKType;
}
export interface QueryOrderOwnerUidsResponse {
    orders: Orders;
    pagination: PageResponse;
}
export interface QueryOrderOwnerUidsResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerUidsResponse";
    value: Uint8Array;
}
export interface QueryOrderOwnerUidsResponseAmino {
    orders?: OrdersAmino;
    pagination?: PageResponseAmino;
}
export interface QueryOrderOwnerUidsResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryOrderOwnerUidsResponse";
    value: QueryOrderOwnerUidsResponseAmino;
}
export interface QueryOrderOwnerUidsResponseSDKType {
    orders: OrdersSDKType;
    pagination: PageResponseSDKType;
}
export interface QueryOrderOwnerPairRequest {
    address: string;
    pair: string;
    pagination: PageRequest;
}
export interface QueryOrderOwnerPairRequestProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerPairRequest";
    value: Uint8Array;
}
export interface QueryOrderOwnerPairRequestAmino {
    address: string;
    pair: string;
    pagination?: PageRequestAmino;
}
export interface QueryOrderOwnerPairRequestAminoMsg {
    type: "/pendulumlabs.market.market.QueryOrderOwnerPairRequest";
    value: QueryOrderOwnerPairRequestAmino;
}
export interface QueryOrderOwnerPairRequestSDKType {
    address: string;
    pair: string;
    pagination: PageRequestSDKType;
}
export interface QueryOrderOwnerPairResponse {
    order: Order[];
    pagination: PageResponse;
}
export interface QueryOrderOwnerPairResponseProtoMsg {
    typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerPairResponse";
    value: Uint8Array;
}
export interface QueryOrderOwnerPairResponseAmino {
    order: OrderAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryOrderOwnerPairResponseAminoMsg {
    type: "/pendulumlabs.market.market.QueryOrderOwnerPairResponse";
    value: QueryOrderOwnerPairResponseAmino;
}
export interface QueryOrderOwnerPairResponseSDKType {
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
export declare const QueryDropRequest: {
    encode(message: QueryDropRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropRequest;
    fromPartial(object: DeepPartial<QueryDropRequest>): QueryDropRequest;
    fromAmino(object: QueryDropRequestAmino): QueryDropRequest;
    toAmino(message: QueryDropRequest): QueryDropRequestAmino;
    fromAminoMsg(object: QueryDropRequestAminoMsg): QueryDropRequest;
    fromProtoMsg(message: QueryDropRequestProtoMsg): QueryDropRequest;
    toProto(message: QueryDropRequest): Uint8Array;
    toProtoMsg(message: QueryDropRequest): QueryDropRequestProtoMsg;
};
export declare const QueryDropCoinRequest: {
    encode(message: QueryDropCoinRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropCoinRequest;
    fromPartial(object: DeepPartial<QueryDropCoinRequest>): QueryDropCoinRequest;
    fromAmino(object: QueryDropCoinRequestAmino): QueryDropCoinRequest;
    toAmino(message: QueryDropCoinRequest): QueryDropCoinRequestAmino;
    fromAminoMsg(object: QueryDropCoinRequestAminoMsg): QueryDropCoinRequest;
    fromProtoMsg(message: QueryDropCoinRequestProtoMsg): QueryDropCoinRequest;
    toProto(message: QueryDropCoinRequest): Uint8Array;
    toProtoMsg(message: QueryDropCoinRequest): QueryDropCoinRequestProtoMsg;
};
export declare const QueryDropCoinResponse: {
    encode(message: QueryDropCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropCoinResponse;
    fromPartial(object: DeepPartial<QueryDropCoinResponse>): QueryDropCoinResponse;
    fromAmino(object: QueryDropCoinResponseAmino): QueryDropCoinResponse;
    toAmino(message: QueryDropCoinResponse): QueryDropCoinResponseAmino;
    fromAminoMsg(object: QueryDropCoinResponseAminoMsg): QueryDropCoinResponse;
    fromProtoMsg(message: QueryDropCoinResponseProtoMsg): QueryDropCoinResponse;
    toProto(message: QueryDropCoinResponse): Uint8Array;
    toProtoMsg(message: QueryDropCoinResponse): QueryDropCoinResponseProtoMsg;
};
export declare const QueryDropResponse: {
    encode(message: QueryDropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropResponse;
    fromPartial(object: DeepPartial<QueryDropResponse>): QueryDropResponse;
    fromAmino(object: QueryDropResponseAmino): QueryDropResponse;
    toAmino(message: QueryDropResponse): QueryDropResponseAmino;
    fromAminoMsg(object: QueryDropResponseAminoMsg): QueryDropResponse;
    fromProtoMsg(message: QueryDropResponseProtoMsg): QueryDropResponse;
    toProto(message: QueryDropResponse): Uint8Array;
    toProtoMsg(message: QueryDropResponse): QueryDropResponseProtoMsg;
};
export declare const QueryDropAmountsRequest: {
    encode(message: QueryDropAmountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropAmountsRequest;
    fromPartial(object: DeepPartial<QueryDropAmountsRequest>): QueryDropAmountsRequest;
    fromAmino(object: QueryDropAmountsRequestAmino): QueryDropAmountsRequest;
    toAmino(message: QueryDropAmountsRequest): QueryDropAmountsRequestAmino;
    fromAminoMsg(object: QueryDropAmountsRequestAminoMsg): QueryDropAmountsRequest;
    fromProtoMsg(message: QueryDropAmountsRequestProtoMsg): QueryDropAmountsRequest;
    toProto(message: QueryDropAmountsRequest): Uint8Array;
    toProtoMsg(message: QueryDropAmountsRequest): QueryDropAmountsRequestProtoMsg;
};
export declare const QueryDropAmountsResponse: {
    encode(message: QueryDropAmountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropAmountsResponse;
    fromPartial(object: DeepPartial<QueryDropAmountsResponse>): QueryDropAmountsResponse;
    fromAmino(object: QueryDropAmountsResponseAmino): QueryDropAmountsResponse;
    toAmino(message: QueryDropAmountsResponse): QueryDropAmountsResponseAmino;
    fromAminoMsg(object: QueryDropAmountsResponseAminoMsg): QueryDropAmountsResponse;
    fromProtoMsg(message: QueryDropAmountsResponseProtoMsg): QueryDropAmountsResponse;
    toProto(message: QueryDropAmountsResponse): Uint8Array;
    toProtoMsg(message: QueryDropAmountsResponse): QueryDropAmountsResponseProtoMsg;
};
export declare const QueryDropPairsRequest: {
    encode(message: QueryDropPairsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropPairsRequest;
    fromPartial(object: DeepPartial<QueryDropPairsRequest>): QueryDropPairsRequest;
    fromAmino(object: QueryDropPairsRequestAmino): QueryDropPairsRequest;
    toAmino(message: QueryDropPairsRequest): QueryDropPairsRequestAmino;
    fromAminoMsg(object: QueryDropPairsRequestAminoMsg): QueryDropPairsRequest;
    fromProtoMsg(message: QueryDropPairsRequestProtoMsg): QueryDropPairsRequest;
    toProto(message: QueryDropPairsRequest): Uint8Array;
    toProtoMsg(message: QueryDropPairsRequest): QueryDropPairsRequestProtoMsg;
};
export declare const QueryDropPairsResponse: {
    encode(message: QueryDropPairsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropPairsResponse;
    fromPartial(object: DeepPartial<QueryDropPairsResponse>): QueryDropPairsResponse;
    fromAmino(object: QueryDropPairsResponseAmino): QueryDropPairsResponse;
    toAmino(message: QueryDropPairsResponse): QueryDropPairsResponseAmino;
    fromAminoMsg(object: QueryDropPairsResponseAminoMsg): QueryDropPairsResponse;
    fromProtoMsg(message: QueryDropPairsResponseProtoMsg): QueryDropPairsResponse;
    toProto(message: QueryDropPairsResponse): Uint8Array;
    toProtoMsg(message: QueryDropPairsResponse): QueryDropPairsResponseProtoMsg;
};
export declare const QueryDropOwnerPairRequest: {
    encode(message: QueryDropOwnerPairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairRequest;
    fromPartial(object: DeepPartial<QueryDropOwnerPairRequest>): QueryDropOwnerPairRequest;
    fromAmino(object: QueryDropOwnerPairRequestAmino): QueryDropOwnerPairRequest;
    toAmino(message: QueryDropOwnerPairRequest): QueryDropOwnerPairRequestAmino;
    fromAminoMsg(object: QueryDropOwnerPairRequestAminoMsg): QueryDropOwnerPairRequest;
    fromProtoMsg(message: QueryDropOwnerPairRequestProtoMsg): QueryDropOwnerPairRequest;
    toProto(message: QueryDropOwnerPairRequest): Uint8Array;
    toProtoMsg(message: QueryDropOwnerPairRequest): QueryDropOwnerPairRequestProtoMsg;
};
export declare const QueryDropOwnerPairSumRequest: {
    encode(message: QueryDropOwnerPairSumRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairSumRequest;
    fromPartial(object: DeepPartial<QueryDropOwnerPairSumRequest>): QueryDropOwnerPairSumRequest;
    fromAmino(object: QueryDropOwnerPairSumRequestAmino): QueryDropOwnerPairSumRequest;
    toAmino(message: QueryDropOwnerPairSumRequest): QueryDropOwnerPairSumRequestAmino;
    fromAminoMsg(object: QueryDropOwnerPairSumRequestAminoMsg): QueryDropOwnerPairSumRequest;
    fromProtoMsg(message: QueryDropOwnerPairSumRequestProtoMsg): QueryDropOwnerPairSumRequest;
    toProto(message: QueryDropOwnerPairSumRequest): Uint8Array;
    toProtoMsg(message: QueryDropOwnerPairSumRequest): QueryDropOwnerPairSumRequestProtoMsg;
};
export declare const QueryDropOwnerPairSumResponse: {
    encode(message: QueryDropOwnerPairSumResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairSumResponse;
    fromPartial(object: DeepPartial<QueryDropOwnerPairSumResponse>): QueryDropOwnerPairSumResponse;
    fromAmino(object: QueryDropOwnerPairSumResponseAmino): QueryDropOwnerPairSumResponse;
    toAmino(message: QueryDropOwnerPairSumResponse): QueryDropOwnerPairSumResponseAmino;
    fromAminoMsg(object: QueryDropOwnerPairSumResponseAminoMsg): QueryDropOwnerPairSumResponse;
    fromProtoMsg(message: QueryDropOwnerPairSumResponseProtoMsg): QueryDropOwnerPairSumResponse;
    toProto(message: QueryDropOwnerPairSumResponse): Uint8Array;
    toProtoMsg(message: QueryDropOwnerPairSumResponse): QueryDropOwnerPairSumResponseProtoMsg;
};
export declare const QueryDropOwnerPairUidsRequest: {
    encode(message: QueryDropOwnerPairUidsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairUidsRequest;
    fromPartial(object: DeepPartial<QueryDropOwnerPairUidsRequest>): QueryDropOwnerPairUidsRequest;
    fromAmino(object: QueryDropOwnerPairUidsRequestAmino): QueryDropOwnerPairUidsRequest;
    toAmino(message: QueryDropOwnerPairUidsRequest): QueryDropOwnerPairUidsRequestAmino;
    fromAminoMsg(object: QueryDropOwnerPairUidsRequestAminoMsg): QueryDropOwnerPairUidsRequest;
    fromProtoMsg(message: QueryDropOwnerPairUidsRequestProtoMsg): QueryDropOwnerPairUidsRequest;
    toProto(message: QueryDropOwnerPairUidsRequest): Uint8Array;
    toProtoMsg(message: QueryDropOwnerPairUidsRequest): QueryDropOwnerPairUidsRequestProtoMsg;
};
export declare const QueryUidsResponse: {
    encode(message: QueryUidsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUidsResponse;
    fromPartial(object: DeepPartial<QueryUidsResponse>): QueryUidsResponse;
    fromAmino(object: QueryUidsResponseAmino): QueryUidsResponse;
    toAmino(message: QueryUidsResponse): QueryUidsResponseAmino;
    fromAminoMsg(object: QueryUidsResponseAminoMsg): QueryUidsResponse;
    fromProtoMsg(message: QueryUidsResponseProtoMsg): QueryUidsResponse;
    toProto(message: QueryUidsResponse): Uint8Array;
    toProtoMsg(message: QueryUidsResponse): QueryUidsResponseProtoMsg;
};
export declare const QueryDropOwnerPairDetailRequest: {
    encode(message: QueryDropOwnerPairDetailRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairDetailRequest;
    fromPartial(object: DeepPartial<QueryDropOwnerPairDetailRequest>): QueryDropOwnerPairDetailRequest;
    fromAmino(object: QueryDropOwnerPairDetailRequestAmino): QueryDropOwnerPairDetailRequest;
    toAmino(message: QueryDropOwnerPairDetailRequest): QueryDropOwnerPairDetailRequestAmino;
    fromAminoMsg(object: QueryDropOwnerPairDetailRequestAminoMsg): QueryDropOwnerPairDetailRequest;
    fromProtoMsg(message: QueryDropOwnerPairDetailRequestProtoMsg): QueryDropOwnerPairDetailRequest;
    toProto(message: QueryDropOwnerPairDetailRequest): Uint8Array;
    toProtoMsg(message: QueryDropOwnerPairDetailRequest): QueryDropOwnerPairDetailRequestProtoMsg;
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
export declare const QueryDropsResponse: {
    encode(message: QueryDropsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropsResponse;
    fromPartial(object: DeepPartial<QueryDropsResponse>): QueryDropsResponse;
    fromAmino(object: QueryDropsResponseAmino): QueryDropsResponse;
    toAmino(message: QueryDropsResponse): QueryDropsResponseAmino;
    fromAminoMsg(object: QueryDropsResponseAminoMsg): QueryDropsResponse;
    fromProtoMsg(message: QueryDropsResponseProtoMsg): QueryDropsResponse;
    toProto(message: QueryDropsResponse): Uint8Array;
    toProtoMsg(message: QueryDropsResponse): QueryDropsResponseProtoMsg;
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
export declare const QueryOrderRequest: {
    encode(message: QueryOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest;
    fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest;
    fromAmino(object: QueryOrderRequestAmino): QueryOrderRequest;
    toAmino(message: QueryOrderRequest): QueryOrderRequestAmino;
    fromAminoMsg(object: QueryOrderRequestAminoMsg): QueryOrderRequest;
    fromProtoMsg(message: QueryOrderRequestProtoMsg): QueryOrderRequest;
    toProto(message: QueryOrderRequest): Uint8Array;
    toProtoMsg(message: QueryOrderRequest): QueryOrderRequestProtoMsg;
};
export declare const QueryOrderResponse: {
    encode(message: QueryOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse;
    fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse;
    fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse;
    toAmino(message: QueryOrderResponse): QueryOrderResponseAmino;
    fromAminoMsg(object: QueryOrderResponseAminoMsg): QueryOrderResponse;
    fromProtoMsg(message: QueryOrderResponseProtoMsg): QueryOrderResponse;
    toProto(message: QueryOrderResponse): Uint8Array;
    toProtoMsg(message: QueryOrderResponse): QueryOrderResponseProtoMsg;
};
export declare const QueryOrdersResponse: {
    encode(message: QueryOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse;
    fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse;
    fromAmino(object: QueryOrdersResponseAmino): QueryOrdersResponse;
    toAmino(message: QueryOrdersResponse): QueryOrdersResponseAmino;
    fromAminoMsg(object: QueryOrdersResponseAminoMsg): QueryOrdersResponse;
    fromProtoMsg(message: QueryOrdersResponseProtoMsg): QueryOrdersResponse;
    toProto(message: QueryOrdersResponse): Uint8Array;
    toProtoMsg(message: QueryOrdersResponse): QueryOrdersResponseProtoMsg;
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
export declare const QueryOrderOwnerRequest: {
    encode(message: QueryOrderOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderOwnerRequest;
    fromPartial(object: DeepPartial<QueryOrderOwnerRequest>): QueryOrderOwnerRequest;
    fromAmino(object: QueryOrderOwnerRequestAmino): QueryOrderOwnerRequest;
    toAmino(message: QueryOrderOwnerRequest): QueryOrderOwnerRequestAmino;
    fromAminoMsg(object: QueryOrderOwnerRequestAminoMsg): QueryOrderOwnerRequest;
    fromProtoMsg(message: QueryOrderOwnerRequestProtoMsg): QueryOrderOwnerRequest;
    toProto(message: QueryOrderOwnerRequest): Uint8Array;
    toProtoMsg(message: QueryOrderOwnerRequest): QueryOrderOwnerRequestProtoMsg;
};
export declare const QueryOrderOwnerUidsResponse: {
    encode(message: QueryOrderOwnerUidsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderOwnerUidsResponse;
    fromPartial(object: DeepPartial<QueryOrderOwnerUidsResponse>): QueryOrderOwnerUidsResponse;
    fromAmino(object: QueryOrderOwnerUidsResponseAmino): QueryOrderOwnerUidsResponse;
    toAmino(message: QueryOrderOwnerUidsResponse): QueryOrderOwnerUidsResponseAmino;
    fromAminoMsg(object: QueryOrderOwnerUidsResponseAminoMsg): QueryOrderOwnerUidsResponse;
    fromProtoMsg(message: QueryOrderOwnerUidsResponseProtoMsg): QueryOrderOwnerUidsResponse;
    toProto(message: QueryOrderOwnerUidsResponse): Uint8Array;
    toProtoMsg(message: QueryOrderOwnerUidsResponse): QueryOrderOwnerUidsResponseProtoMsg;
};
export declare const QueryOrderOwnerPairRequest: {
    encode(message: QueryOrderOwnerPairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderOwnerPairRequest;
    fromPartial(object: DeepPartial<QueryOrderOwnerPairRequest>): QueryOrderOwnerPairRequest;
    fromAmino(object: QueryOrderOwnerPairRequestAmino): QueryOrderOwnerPairRequest;
    toAmino(message: QueryOrderOwnerPairRequest): QueryOrderOwnerPairRequestAmino;
    fromAminoMsg(object: QueryOrderOwnerPairRequestAminoMsg): QueryOrderOwnerPairRequest;
    fromProtoMsg(message: QueryOrderOwnerPairRequestProtoMsg): QueryOrderOwnerPairRequest;
    toProto(message: QueryOrderOwnerPairRequest): Uint8Array;
    toProtoMsg(message: QueryOrderOwnerPairRequest): QueryOrderOwnerPairRequestProtoMsg;
};
export declare const QueryOrderOwnerPairResponse: {
    encode(message: QueryOrderOwnerPairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderOwnerPairResponse;
    fromPartial(object: DeepPartial<QueryOrderOwnerPairResponse>): QueryOrderOwnerPairResponse;
    fromAmino(object: QueryOrderOwnerPairResponseAmino): QueryOrderOwnerPairResponse;
    toAmino(message: QueryOrderOwnerPairResponse): QueryOrderOwnerPairResponseAmino;
    fromAminoMsg(object: QueryOrderOwnerPairResponseAminoMsg): QueryOrderOwnerPairResponse;
    fromProtoMsg(message: QueryOrderOwnerPairResponseProtoMsg): QueryOrderOwnerPairResponse;
    toProto(message: QueryOrderOwnerPairResponse): Uint8Array;
    toProtoMsg(message: QueryOrderOwnerPairResponse): QueryOrderOwnerPairResponseProtoMsg;
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
