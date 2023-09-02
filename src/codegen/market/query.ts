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
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pendulumlabs.market.market.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pendulumlabs.market.market.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
export interface QueryDropsToCoinsRequest {
  pair: string;
  drops: string;
}
export interface QueryDropsToCoinsRequestProtoMsg {
  typeUrl: "/pendulumlabs.market.market.QueryDropsToCoinsRequest";
  value: Uint8Array;
}
export interface QueryDropsToCoinsRequestAmino {
  pair: string;
  drops: string;
}
export interface QueryDropsToCoinsRequestAminoMsg {
  type: "/pendulumlabs.market.market.QueryDropsToCoinsRequest";
  value: QueryDropsToCoinsRequestAmino;
}
export interface QueryDropsToCoinsRequestSDKType {
  pair: string;
  drops: string;
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
/** Market Quote: denom is the denom that is input for quote */
export interface QueryQuoteRequest {
  denomAsk: string;
  denomBid: string;
  denomAmount: string;
  amount: string;
}
export interface QueryQuoteRequestProtoMsg {
  typeUrl: "/pendulumlabs.market.market.QueryQuoteRequest";
  value: Uint8Array;
}
/** Market Quote: denom is the denom that is input for quote */
export interface QueryQuoteRequestAmino {
  denomAsk: string;
  denomBid: string;
  denomAmount: string;
  amount: string;
}
export interface QueryQuoteRequestAminoMsg {
  type: "/pendulumlabs.market.market.QueryQuoteRequest";
  value: QueryQuoteRequestAmino;
}
/** Market Quote: denom is the denom that is input for quote */
export interface QueryQuoteRequestSDKType {
  denomAsk: string;
  denomBid: string;
  denomAmount: string;
  amount: string;
}
export interface QueryQuoteResponse {
  denom: string;
  amount: string;
}
export interface QueryQuoteResponseProtoMsg {
  typeUrl: "/pendulumlabs.market.market.QueryQuoteResponse";
  value: Uint8Array;
}
export interface QueryQuoteResponseAmino {
  denom: string;
  amount: string;
}
export interface QueryQuoteResponseAminoMsg {
  type: "/pendulumlabs.market.market.QueryQuoteResponse";
  value: QueryQuoteResponseAmino;
}
export interface QueryQuoteResponseSDKType {
  denom: string;
  amount: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolRequest(): QueryGetPoolRequest {
  return {
    pair: ""
  };
}
export const QueryGetPoolRequest = {
  encode(message: QueryGetPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = createBaseQueryGetPoolRequest();
    message.pair = object.pair ?? "";
    return message;
  },
  fromAmino(object: QueryGetPoolRequestAmino): QueryGetPoolRequest {
    return {
      pair: object.pair
    };
  },
  toAmino(message: QueryGetPoolRequest): QueryGetPoolRequestAmino {
    const obj: any = {};
    obj.pair = message.pair;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolRequestAminoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolRequestProtoMsg): QueryGetPoolRequest {
    return QueryGetPoolRequest.decode(message.value);
  },
  toProto(message: QueryGetPoolRequest): Uint8Array {
    return QueryGetPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolRequest): QueryGetPoolRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetPoolRequest",
      value: QueryGetPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPoolResponse(): QueryGetPoolResponse {
  return {
    pool: Pool.fromPartial({})
  };
}
export const QueryGetPoolResponse = {
  encode(message: QueryGetPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = createBaseQueryGetPoolResponse();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPoolResponseAmino): QueryGetPoolResponse {
    return {
      pool: object?.pool ? Pool.fromAmino(object.pool) : undefined
    };
  },
  toAmino(message: QueryGetPoolResponse): QueryGetPoolResponseAmino {
    const obj: any = {};
    obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPoolResponseAminoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPoolResponseProtoMsg): QueryGetPoolResponse {
    return QueryGetPoolResponse.decode(message.value);
  },
  toProto(message: QueryGetPoolResponse): Uint8Array {
    return QueryGetPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPoolResponse): QueryGetPoolResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetPoolResponse",
      value: QueryGetPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolRequest(): QueryAllPoolRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllPoolRequest = {
  encode(message: QueryAllPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllPoolRequest>): QueryAllPoolRequest {
    const message = createBaseQueryAllPoolRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolRequestAmino): QueryAllPoolRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPoolRequest): QueryAllPoolRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolRequestAminoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolRequestProtoMsg): QueryAllPoolRequest {
    return QueryAllPoolRequest.decode(message.value);
  },
  toProto(message: QueryAllPoolRequest): Uint8Array {
    return QueryAllPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolRequest): QueryAllPoolRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllPoolRequest",
      value: QueryAllPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPoolResponse(): QueryAllPoolResponse {
  return {
    pool: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllPoolResponse = {
  encode(message: QueryAllPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllPoolResponse>): QueryAllPoolResponse {
    const message = createBaseQueryAllPoolResponse();
    message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPoolResponseAmino): QueryAllPoolResponse {
    return {
      pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Pool.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllPoolResponse): QueryAllPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pool = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPoolResponseAminoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPoolResponseProtoMsg): QueryAllPoolResponse {
    return QueryAllPoolResponse.decode(message.value);
  },
  toProto(message: QueryAllPoolResponse): Uint8Array {
    return QueryAllPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPoolResponse): QueryAllPoolResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllPoolResponse",
      value: QueryAllPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDropRequest(): QueryDropRequest {
  return {
    uid: Long.UZERO
  };
}
export const QueryDropRequest = {
  encode(message: QueryDropRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.uid.isZero()) {
      writer.uint32(8).uint64(message.uid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropRequest>): QueryDropRequest {
    const message = createBaseQueryDropRequest();
    message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryDropRequestAmino): QueryDropRequest {
    return {
      uid: Long.fromString(object.uid)
    };
  },
  toAmino(message: QueryDropRequest): QueryDropRequestAmino {
    const obj: any = {};
    obj.uid = message.uid ? message.uid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDropRequestAminoMsg): QueryDropRequest {
    return QueryDropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropRequestProtoMsg): QueryDropRequest {
    return QueryDropRequest.decode(message.value);
  },
  toProto(message: QueryDropRequest): Uint8Array {
    return QueryDropRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDropRequest): QueryDropRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropRequest",
      value: QueryDropRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDropCoinRequest(): QueryDropCoinRequest {
  return {
    denomA: "",
    denomB: "",
    amountA: ""
  };
}
export const QueryDropCoinRequest = {
  encode(message: QueryDropCoinRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomA !== "") {
      writer.uint32(10).string(message.denomA);
    }
    if (message.denomB !== "") {
      writer.uint32(18).string(message.denomB);
    }
    if (message.amountA !== "") {
      writer.uint32(26).string(message.amountA);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropCoinRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropCoinRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomA = reader.string();
          break;
        case 2:
          message.denomB = reader.string();
          break;
        case 3:
          message.amountA = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropCoinRequest>): QueryDropCoinRequest {
    const message = createBaseQueryDropCoinRequest();
    message.denomA = object.denomA ?? "";
    message.denomB = object.denomB ?? "";
    message.amountA = object.amountA ?? "";
    return message;
  },
  fromAmino(object: QueryDropCoinRequestAmino): QueryDropCoinRequest {
    return {
      denomA: object.denomA,
      denomB: object.denomB,
      amountA: object.amountA
    };
  },
  toAmino(message: QueryDropCoinRequest): QueryDropCoinRequestAmino {
    const obj: any = {};
    obj.denomA = message.denomA;
    obj.denomB = message.denomB;
    obj.amountA = message.amountA;
    return obj;
  },
  fromAminoMsg(object: QueryDropCoinRequestAminoMsg): QueryDropCoinRequest {
    return QueryDropCoinRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropCoinRequestProtoMsg): QueryDropCoinRequest {
    return QueryDropCoinRequest.decode(message.value);
  },
  toProto(message: QueryDropCoinRequest): Uint8Array {
    return QueryDropCoinRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDropCoinRequest): QueryDropCoinRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropCoinRequest",
      value: QueryDropCoinRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDropCoinResponse(): QueryDropCoinResponse {
  return {
    drops: "",
    amountB: ""
  };
}
export const QueryDropCoinResponse = {
  encode(message: QueryDropCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.drops !== "") {
      writer.uint32(10).string(message.drops);
    }
    if (message.amountB !== "") {
      writer.uint32(18).string(message.amountB);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drops = reader.string();
          break;
        case 2:
          message.amountB = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropCoinResponse>): QueryDropCoinResponse {
    const message = createBaseQueryDropCoinResponse();
    message.drops = object.drops ?? "";
    message.amountB = object.amountB ?? "";
    return message;
  },
  fromAmino(object: QueryDropCoinResponseAmino): QueryDropCoinResponse {
    return {
      drops: object.drops,
      amountB: object.amountB
    };
  },
  toAmino(message: QueryDropCoinResponse): QueryDropCoinResponseAmino {
    const obj: any = {};
    obj.drops = message.drops;
    obj.amountB = message.amountB;
    return obj;
  },
  fromAminoMsg(object: QueryDropCoinResponseAminoMsg): QueryDropCoinResponse {
    return QueryDropCoinResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropCoinResponseProtoMsg): QueryDropCoinResponse {
    return QueryDropCoinResponse.decode(message.value);
  },
  toProto(message: QueryDropCoinResponse): Uint8Array {
    return QueryDropCoinResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDropCoinResponse): QueryDropCoinResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropCoinResponse",
      value: QueryDropCoinResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDropResponse(): QueryDropResponse {
  return {
    drop: Drop.fromPartial({})
  };
}
export const QueryDropResponse = {
  encode(message: QueryDropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.drop !== undefined) {
      Drop.encode(message.drop, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drop = Drop.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropResponse>): QueryDropResponse {
    const message = createBaseQueryDropResponse();
    message.drop = object.drop !== undefined && object.drop !== null ? Drop.fromPartial(object.drop) : undefined;
    return message;
  },
  fromAmino(object: QueryDropResponseAmino): QueryDropResponse {
    return {
      drop: object?.drop ? Drop.fromAmino(object.drop) : undefined
    };
  },
  toAmino(message: QueryDropResponse): QueryDropResponseAmino {
    const obj: any = {};
    obj.drop = message.drop ? Drop.toAmino(message.drop) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDropResponseAminoMsg): QueryDropResponse {
    return QueryDropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropResponseProtoMsg): QueryDropResponse {
    return QueryDropResponse.decode(message.value);
  },
  toProto(message: QueryDropResponse): Uint8Array {
    return QueryDropResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDropResponse): QueryDropResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropResponse",
      value: QueryDropResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDropAmountsRequest(): QueryDropAmountsRequest {
  return {
    uid: Long.UZERO
  };
}
export const QueryDropAmountsRequest = {
  encode(message: QueryDropAmountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.uid.isZero()) {
      writer.uint32(8).uint64(message.uid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropAmountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropAmountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropAmountsRequest>): QueryDropAmountsRequest {
    const message = createBaseQueryDropAmountsRequest();
    message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryDropAmountsRequestAmino): QueryDropAmountsRequest {
    return {
      uid: Long.fromString(object.uid)
    };
  },
  toAmino(message: QueryDropAmountsRequest): QueryDropAmountsRequestAmino {
    const obj: any = {};
    obj.uid = message.uid ? message.uid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDropAmountsRequestAminoMsg): QueryDropAmountsRequest {
    return QueryDropAmountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropAmountsRequestProtoMsg): QueryDropAmountsRequest {
    return QueryDropAmountsRequest.decode(message.value);
  },
  toProto(message: QueryDropAmountsRequest): Uint8Array {
    return QueryDropAmountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDropAmountsRequest): QueryDropAmountsRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropAmountsRequest",
      value: QueryDropAmountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDropAmountsResponse(): QueryDropAmountsResponse {
  return {
    denom1: "",
    denom2: "",
    amount1: "",
    amount2: ""
  };
}
export const QueryDropAmountsResponse = {
  encode(message: QueryDropAmountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom1 !== "") {
      writer.uint32(10).string(message.denom1);
    }
    if (message.denom2 !== "") {
      writer.uint32(18).string(message.denom2);
    }
    if (message.amount1 !== "") {
      writer.uint32(26).string(message.amount1);
    }
    if (message.amount2 !== "") {
      writer.uint32(34).string(message.amount2);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropAmountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropAmountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom1 = reader.string();
          break;
        case 2:
          message.denom2 = reader.string();
          break;
        case 3:
          message.amount1 = reader.string();
          break;
        case 4:
          message.amount2 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropAmountsResponse>): QueryDropAmountsResponse {
    const message = createBaseQueryDropAmountsResponse();
    message.denom1 = object.denom1 ?? "";
    message.denom2 = object.denom2 ?? "";
    message.amount1 = object.amount1 ?? "";
    message.amount2 = object.amount2 ?? "";
    return message;
  },
  fromAmino(object: QueryDropAmountsResponseAmino): QueryDropAmountsResponse {
    return {
      denom1: object.denom1,
      denom2: object.denom2,
      amount1: object.amount1,
      amount2: object.amount2
    };
  },
  toAmino(message: QueryDropAmountsResponse): QueryDropAmountsResponseAmino {
    const obj: any = {};
    obj.denom1 = message.denom1;
    obj.denom2 = message.denom2;
    obj.amount1 = message.amount1;
    obj.amount2 = message.amount2;
    return obj;
  },
  fromAminoMsg(object: QueryDropAmountsResponseAminoMsg): QueryDropAmountsResponse {
    return QueryDropAmountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropAmountsResponseProtoMsg): QueryDropAmountsResponse {
    return QueryDropAmountsResponse.decode(message.value);
  },
  toProto(message: QueryDropAmountsResponse): Uint8Array {
    return QueryDropAmountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDropAmountsResponse): QueryDropAmountsResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropAmountsResponse",
      value: QueryDropAmountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDropsToCoinsRequest(): QueryDropsToCoinsRequest {
  return {
    pair: "",
    drops: ""
  };
}
export const QueryDropsToCoinsRequest = {
  encode(message: QueryDropsToCoinsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.drops !== "") {
      writer.uint32(18).string(message.drops);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropsToCoinsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropsToCoinsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.drops = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropsToCoinsRequest>): QueryDropsToCoinsRequest {
    const message = createBaseQueryDropsToCoinsRequest();
    message.pair = object.pair ?? "";
    message.drops = object.drops ?? "";
    return message;
  },
  fromAmino(object: QueryDropsToCoinsRequestAmino): QueryDropsToCoinsRequest {
    return {
      pair: object.pair,
      drops: object.drops
    };
  },
  toAmino(message: QueryDropsToCoinsRequest): QueryDropsToCoinsRequestAmino {
    const obj: any = {};
    obj.pair = message.pair;
    obj.drops = message.drops;
    return obj;
  },
  fromAminoMsg(object: QueryDropsToCoinsRequestAminoMsg): QueryDropsToCoinsRequest {
    return QueryDropsToCoinsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropsToCoinsRequestProtoMsg): QueryDropsToCoinsRequest {
    return QueryDropsToCoinsRequest.decode(message.value);
  },
  toProto(message: QueryDropsToCoinsRequest): Uint8Array {
    return QueryDropsToCoinsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDropsToCoinsRequest): QueryDropsToCoinsRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropsToCoinsRequest",
      value: QueryDropsToCoinsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDropPairsRequest(): QueryDropPairsRequest {
  return {
    address: ""
  };
}
export const QueryDropPairsRequest = {
  encode(message: QueryDropPairsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropPairsRequest>): QueryDropPairsRequest {
    const message = createBaseQueryDropPairsRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryDropPairsRequestAmino): QueryDropPairsRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryDropPairsRequest): QueryDropPairsRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryDropPairsRequestAminoMsg): QueryDropPairsRequest {
    return QueryDropPairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropPairsRequestProtoMsg): QueryDropPairsRequest {
    return QueryDropPairsRequest.decode(message.value);
  },
  toProto(message: QueryDropPairsRequest): Uint8Array {
    return QueryDropPairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDropPairsRequest): QueryDropPairsRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropPairsRequest",
      value: QueryDropPairsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDropPairsResponse(): QueryDropPairsResponse {
  return {
    pairs: []
  };
}
export const QueryDropPairsResponse = {
  encode(message: QueryDropPairsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropPairsResponse>): QueryDropPairsResponse {
    const message = createBaseQueryDropPairsResponse();
    message.pairs = object.pairs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryDropPairsResponseAmino): QueryDropPairsResponse {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryDropPairsResponse): QueryDropPairsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDropPairsResponseAminoMsg): QueryDropPairsResponse {
    return QueryDropPairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropPairsResponseProtoMsg): QueryDropPairsResponse {
    return QueryDropPairsResponse.decode(message.value);
  },
  toProto(message: QueryDropPairsResponse): Uint8Array {
    return QueryDropPairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDropPairsResponse): QueryDropPairsResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropPairsResponse",
      value: QueryDropPairsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDropOwnerPairRequest(): QueryDropOwnerPairRequest {
  return {
    address: "",
    pair: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDropOwnerPairRequest = {
  encode(message: QueryDropOwnerPairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropOwnerPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pair = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropOwnerPairRequest>): QueryDropOwnerPairRequest {
    const message = createBaseQueryDropOwnerPairRequest();
    message.address = object.address ?? "";
    message.pair = object.pair ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDropOwnerPairRequestAmino): QueryDropOwnerPairRequest {
    return {
      address: object.address,
      pair: object.pair,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDropOwnerPairRequest): QueryDropOwnerPairRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pair = message.pair;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDropOwnerPairRequestAminoMsg): QueryDropOwnerPairRequest {
    return QueryDropOwnerPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropOwnerPairRequestProtoMsg): QueryDropOwnerPairRequest {
    return QueryDropOwnerPairRequest.decode(message.value);
  },
  toProto(message: QueryDropOwnerPairRequest): Uint8Array {
    return QueryDropOwnerPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDropOwnerPairRequest): QueryDropOwnerPairRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairRequest",
      value: QueryDropOwnerPairRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDropOwnerPairSumRequest(): QueryDropOwnerPairSumRequest {
  return {
    address: "",
    pair: ""
  };
}
export const QueryDropOwnerPairSumRequest = {
  encode(message: QueryDropOwnerPairSumRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairSumRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropOwnerPairSumRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pair = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropOwnerPairSumRequest>): QueryDropOwnerPairSumRequest {
    const message = createBaseQueryDropOwnerPairSumRequest();
    message.address = object.address ?? "";
    message.pair = object.pair ?? "";
    return message;
  },
  fromAmino(object: QueryDropOwnerPairSumRequestAmino): QueryDropOwnerPairSumRequest {
    return {
      address: object.address,
      pair: object.pair
    };
  },
  toAmino(message: QueryDropOwnerPairSumRequest): QueryDropOwnerPairSumRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pair = message.pair;
    return obj;
  },
  fromAminoMsg(object: QueryDropOwnerPairSumRequestAminoMsg): QueryDropOwnerPairSumRequest {
    return QueryDropOwnerPairSumRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropOwnerPairSumRequestProtoMsg): QueryDropOwnerPairSumRequest {
    return QueryDropOwnerPairSumRequest.decode(message.value);
  },
  toProto(message: QueryDropOwnerPairSumRequest): Uint8Array {
    return QueryDropOwnerPairSumRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDropOwnerPairSumRequest): QueryDropOwnerPairSumRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairSumRequest",
      value: QueryDropOwnerPairSumRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDropOwnerPairSumResponse(): QueryDropOwnerPairSumResponse {
  return {
    sum: ""
  };
}
export const QueryDropOwnerPairSumResponse = {
  encode(message: QueryDropOwnerPairSumResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sum !== "") {
      writer.uint32(10).string(message.sum);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairSumResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropOwnerPairSumResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropOwnerPairSumResponse>): QueryDropOwnerPairSumResponse {
    const message = createBaseQueryDropOwnerPairSumResponse();
    message.sum = object.sum ?? "";
    return message;
  },
  fromAmino(object: QueryDropOwnerPairSumResponseAmino): QueryDropOwnerPairSumResponse {
    return {
      sum: object.sum
    };
  },
  toAmino(message: QueryDropOwnerPairSumResponse): QueryDropOwnerPairSumResponseAmino {
    const obj: any = {};
    obj.sum = message.sum;
    return obj;
  },
  fromAminoMsg(object: QueryDropOwnerPairSumResponseAminoMsg): QueryDropOwnerPairSumResponse {
    return QueryDropOwnerPairSumResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropOwnerPairSumResponseProtoMsg): QueryDropOwnerPairSumResponse {
    return QueryDropOwnerPairSumResponse.decode(message.value);
  },
  toProto(message: QueryDropOwnerPairSumResponse): Uint8Array {
    return QueryDropOwnerPairSumResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDropOwnerPairSumResponse): QueryDropOwnerPairSumResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairSumResponse",
      value: QueryDropOwnerPairSumResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDropOwnerPairUidsRequest(): QueryDropOwnerPairUidsRequest {
  return {
    address: "",
    pair: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDropOwnerPairUidsRequest = {
  encode(message: QueryDropOwnerPairUidsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairUidsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropOwnerPairUidsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pair = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropOwnerPairUidsRequest>): QueryDropOwnerPairUidsRequest {
    const message = createBaseQueryDropOwnerPairUidsRequest();
    message.address = object.address ?? "";
    message.pair = object.pair ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDropOwnerPairUidsRequestAmino): QueryDropOwnerPairUidsRequest {
    return {
      address: object.address,
      pair: object.pair,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDropOwnerPairUidsRequest): QueryDropOwnerPairUidsRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pair = message.pair;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDropOwnerPairUidsRequestAminoMsg): QueryDropOwnerPairUidsRequest {
    return QueryDropOwnerPairUidsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropOwnerPairUidsRequestProtoMsg): QueryDropOwnerPairUidsRequest {
    return QueryDropOwnerPairUidsRequest.decode(message.value);
  },
  toProto(message: QueryDropOwnerPairUidsRequest): Uint8Array {
    return QueryDropOwnerPairUidsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDropOwnerPairUidsRequest): QueryDropOwnerPairUidsRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairUidsRequest",
      value: QueryDropOwnerPairUidsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUidsResponse(): QueryUidsResponse {
  return {
    uids: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryUidsResponse = {
  encode(message: QueryUidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.uids) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.uids.push((reader.uint64() as Long));
            }
          } else {
            message.uids.push((reader.uint64() as Long));
          }
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryUidsResponse>): QueryUidsResponse {
    const message = createBaseQueryUidsResponse();
    message.uids = object.uids?.map(e => Long.fromValue(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUidsResponseAmino): QueryUidsResponse {
    return {
      uids: Array.isArray(object?.uids) ? object.uids.map((e: any) => e) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryUidsResponse): QueryUidsResponseAmino {
    const obj: any = {};
    if (message.uids) {
      obj.uids = message.uids.map(e => e);
    } else {
      obj.uids = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUidsResponseAminoMsg): QueryUidsResponse {
    return QueryUidsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUidsResponseProtoMsg): QueryUidsResponse {
    return QueryUidsResponse.decode(message.value);
  },
  toProto(message: QueryUidsResponse): Uint8Array {
    return QueryUidsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUidsResponse): QueryUidsResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryUidsResponse",
      value: QueryUidsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDropOwnerPairDetailRequest(): QueryDropOwnerPairDetailRequest {
  return {
    address: "",
    pair: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDropOwnerPairDetailRequest = {
  encode(message: QueryDropOwnerPairDetailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropOwnerPairDetailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropOwnerPairDetailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pair = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropOwnerPairDetailRequest>): QueryDropOwnerPairDetailRequest {
    const message = createBaseQueryDropOwnerPairDetailRequest();
    message.address = object.address ?? "";
    message.pair = object.pair ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDropOwnerPairDetailRequestAmino): QueryDropOwnerPairDetailRequest {
    return {
      address: object.address,
      pair: object.pair,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDropOwnerPairDetailRequest): QueryDropOwnerPairDetailRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pair = message.pair;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDropOwnerPairDetailRequestAminoMsg): QueryDropOwnerPairDetailRequest {
    return QueryDropOwnerPairDetailRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropOwnerPairDetailRequestProtoMsg): QueryDropOwnerPairDetailRequest {
    return QueryDropOwnerPairDetailRequest.decode(message.value);
  },
  toProto(message: QueryDropOwnerPairDetailRequest): Uint8Array {
    return QueryDropOwnerPairDetailRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDropOwnerPairDetailRequest): QueryDropOwnerPairDetailRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairDetailRequest",
      value: QueryDropOwnerPairDetailRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDropRequest(): QueryAllDropRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllDropRequest = {
  encode(message: QueryAllDropRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllDropRequest>): QueryAllDropRequest {
    const message = createBaseQueryAllDropRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDropRequestAmino): QueryAllDropRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllDropRequest): QueryAllDropRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDropRequestAminoMsg): QueryAllDropRequest {
    return QueryAllDropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDropRequestProtoMsg): QueryAllDropRequest {
    return QueryAllDropRequest.decode(message.value);
  },
  toProto(message: QueryAllDropRequest): Uint8Array {
    return QueryAllDropRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDropRequest): QueryAllDropRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllDropRequest",
      value: QueryAllDropRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDropsResponse(): QueryDropsResponse {
  return {
    drops: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDropsResponse = {
  encode(message: QueryDropsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.drops) {
      Drop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDropsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDropsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drops.push(Drop.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDropsResponse>): QueryDropsResponse {
    const message = createBaseQueryDropsResponse();
    message.drops = object.drops?.map(e => Drop.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDropsResponseAmino): QueryDropsResponse {
    return {
      drops: Array.isArray(object?.drops) ? object.drops.map((e: any) => Drop.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDropsResponse): QueryDropsResponseAmino {
    const obj: any = {};
    if (message.drops) {
      obj.drops = message.drops.map(e => e ? Drop.toAmino(e) : undefined);
    } else {
      obj.drops = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDropsResponseAminoMsg): QueryDropsResponse {
    return QueryDropsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDropsResponseProtoMsg): QueryDropsResponse {
    return QueryDropsResponse.decode(message.value);
  },
  toProto(message: QueryDropsResponse): Uint8Array {
    return QueryDropsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDropsResponse): QueryDropsResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryDropsResponse",
      value: QueryDropsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberRequest(): QueryGetMemberRequest {
  return {
    denomA: "",
    denomB: ""
  };
}
export const QueryGetMemberRequest = {
  encode(message: QueryGetMemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomA !== "") {
      writer.uint32(18).string(message.denomA);
    }
    if (message.denomB !== "") {
      writer.uint32(26).string(message.denomB);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.denomA = reader.string();
          break;
        case 3:
          message.denomB = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberRequest>): QueryGetMemberRequest {
    const message = createBaseQueryGetMemberRequest();
    message.denomA = object.denomA ?? "";
    message.denomB = object.denomB ?? "";
    return message;
  },
  fromAmino(object: QueryGetMemberRequestAmino): QueryGetMemberRequest {
    return {
      denomA: object.denomA,
      denomB: object.denomB
    };
  },
  toAmino(message: QueryGetMemberRequest): QueryGetMemberRequestAmino {
    const obj: any = {};
    obj.denomA = message.denomA;
    obj.denomB = message.denomB;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberRequestAminoMsg): QueryGetMemberRequest {
    return QueryGetMemberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberRequestProtoMsg): QueryGetMemberRequest {
    return QueryGetMemberRequest.decode(message.value);
  },
  toProto(message: QueryGetMemberRequest): Uint8Array {
    return QueryGetMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberRequest): QueryGetMemberRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetMemberRequest",
      value: QueryGetMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMemberResponse(): QueryGetMemberResponse {
  return {
    member: Member.fromPartial({})
  };
}
export const QueryGetMemberResponse = {
  encode(message: QueryGetMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMemberResponse>): QueryGetMemberResponse {
    const message = createBaseQueryGetMemberResponse();
    message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
    return message;
  },
  fromAmino(object: QueryGetMemberResponseAmino): QueryGetMemberResponse {
    return {
      member: object?.member ? Member.fromAmino(object.member) : undefined
    };
  },
  toAmino(message: QueryGetMemberResponse): QueryGetMemberResponseAmino {
    const obj: any = {};
    obj.member = message.member ? Member.toAmino(message.member) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMemberResponseAminoMsg): QueryGetMemberResponse {
    return QueryGetMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMemberResponseProtoMsg): QueryGetMemberResponse {
    return QueryGetMemberResponse.decode(message.value);
  },
  toProto(message: QueryGetMemberResponse): Uint8Array {
    return QueryGetMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMemberResponse): QueryGetMemberResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetMemberResponse",
      value: QueryGetMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberRequest(): QueryAllMemberRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllMemberRequest = {
  encode(message: QueryAllMemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllMemberRequest>): QueryAllMemberRequest {
    const message = createBaseQueryAllMemberRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberRequestAmino): QueryAllMemberRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllMemberRequest): QueryAllMemberRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberRequestAminoMsg): QueryAllMemberRequest {
    return QueryAllMemberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberRequestProtoMsg): QueryAllMemberRequest {
    return QueryAllMemberRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberRequest): Uint8Array {
    return QueryAllMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberRequest): QueryAllMemberRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllMemberRequest",
      value: QueryAllMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberResponse(): QueryAllMemberResponse {
  return {
    member: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllMemberResponse = {
  encode(message: QueryAllMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.member) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.member.push(Member.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllMemberResponse>): QueryAllMemberResponse {
    const message = createBaseQueryAllMemberResponse();
    message.member = object.member?.map(e => Member.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberResponseAmino): QueryAllMemberResponse {
    return {
      member: Array.isArray(object?.member) ? object.member.map((e: any) => Member.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllMemberResponse): QueryAllMemberResponseAmino {
    const obj: any = {};
    if (message.member) {
      obj.member = message.member.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.member = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberResponseAminoMsg): QueryAllMemberResponse {
    return QueryAllMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberResponseProtoMsg): QueryAllMemberResponse {
    return QueryAllMemberResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberResponse): Uint8Array {
    return QueryAllMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberResponse): QueryAllMemberResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllMemberResponse",
      value: QueryAllMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBurningsRequest(): QueryGetBurningsRequest {
  return {
    denom: ""
  };
}
export const QueryGetBurningsRequest = {
  encode(message: QueryGetBurningsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBurningsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBurningsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetBurningsRequest>): QueryGetBurningsRequest {
    const message = createBaseQueryGetBurningsRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryGetBurningsRequestAmino): QueryGetBurningsRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryGetBurningsRequest): QueryGetBurningsRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryGetBurningsRequestAminoMsg): QueryGetBurningsRequest {
    return QueryGetBurningsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBurningsRequestProtoMsg): QueryGetBurningsRequest {
    return QueryGetBurningsRequest.decode(message.value);
  },
  toProto(message: QueryGetBurningsRequest): Uint8Array {
    return QueryGetBurningsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBurningsRequest): QueryGetBurningsRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetBurningsRequest",
      value: QueryGetBurningsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBurningsResponse(): QueryGetBurningsResponse {
  return {
    burnings: Burnings.fromPartial({})
  };
}
export const QueryGetBurningsResponse = {
  encode(message: QueryGetBurningsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.burnings !== undefined) {
      Burnings.encode(message.burnings, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBurningsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBurningsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnings = Burnings.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetBurningsResponse>): QueryGetBurningsResponse {
    const message = createBaseQueryGetBurningsResponse();
    message.burnings = object.burnings !== undefined && object.burnings !== null ? Burnings.fromPartial(object.burnings) : undefined;
    return message;
  },
  fromAmino(object: QueryGetBurningsResponseAmino): QueryGetBurningsResponse {
    return {
      burnings: object?.burnings ? Burnings.fromAmino(object.burnings) : undefined
    };
  },
  toAmino(message: QueryGetBurningsResponse): QueryGetBurningsResponseAmino {
    const obj: any = {};
    obj.burnings = message.burnings ? Burnings.toAmino(message.burnings) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBurningsResponseAminoMsg): QueryGetBurningsResponse {
    return QueryGetBurningsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBurningsResponseProtoMsg): QueryGetBurningsResponse {
    return QueryGetBurningsResponse.decode(message.value);
  },
  toProto(message: QueryGetBurningsResponse): Uint8Array {
    return QueryGetBurningsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBurningsResponse): QueryGetBurningsResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetBurningsResponse",
      value: QueryGetBurningsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBurningsRequest(): QueryAllBurningsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllBurningsRequest = {
  encode(message: QueryAllBurningsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBurningsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBurningsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllBurningsRequest>): QueryAllBurningsRequest {
    const message = createBaseQueryAllBurningsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBurningsRequestAmino): QueryAllBurningsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllBurningsRequest): QueryAllBurningsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBurningsRequestAminoMsg): QueryAllBurningsRequest {
    return QueryAllBurningsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBurningsRequestProtoMsg): QueryAllBurningsRequest {
    return QueryAllBurningsRequest.decode(message.value);
  },
  toProto(message: QueryAllBurningsRequest): Uint8Array {
    return QueryAllBurningsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBurningsRequest): QueryAllBurningsRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllBurningsRequest",
      value: QueryAllBurningsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBurningsResponse(): QueryAllBurningsResponse {
  return {
    burnings: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllBurningsResponse = {
  encode(message: QueryAllBurningsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.burnings) {
      Burnings.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBurningsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBurningsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnings.push(Burnings.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllBurningsResponse>): QueryAllBurningsResponse {
    const message = createBaseQueryAllBurningsResponse();
    message.burnings = object.burnings?.map(e => Burnings.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBurningsResponseAmino): QueryAllBurningsResponse {
    return {
      burnings: Array.isArray(object?.burnings) ? object.burnings.map((e: any) => Burnings.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllBurningsResponse): QueryAllBurningsResponseAmino {
    const obj: any = {};
    if (message.burnings) {
      obj.burnings = message.burnings.map(e => e ? Burnings.toAmino(e) : undefined);
    } else {
      obj.burnings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBurningsResponseAminoMsg): QueryAllBurningsResponse {
    return QueryAllBurningsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBurningsResponseProtoMsg): QueryAllBurningsResponse {
    return QueryAllBurningsResponse.decode(message.value);
  },
  toProto(message: QueryAllBurningsResponse): Uint8Array {
    return QueryAllBurningsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBurningsResponse): QueryAllBurningsResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllBurningsResponse",
      value: QueryAllBurningsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOrderRequest(): QueryOrderRequest {
  return {
    uid: Long.UZERO
  };
}
export const QueryOrderRequest = {
  encode(message: QueryOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.uid.isZero()) {
      writer.uint32(8).uint64(message.uid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOrderRequest>): QueryOrderRequest {
    const message = createBaseQueryOrderRequest();
    message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryOrderRequestAmino): QueryOrderRequest {
    return {
      uid: Long.fromString(object.uid)
    };
  },
  toAmino(message: QueryOrderRequest): QueryOrderRequestAmino {
    const obj: any = {};
    obj.uid = message.uid ? message.uid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderRequestAminoMsg): QueryOrderRequest {
    return QueryOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderRequestProtoMsg): QueryOrderRequest {
    return QueryOrderRequest.decode(message.value);
  },
  toProto(message: QueryOrderRequest): Uint8Array {
    return QueryOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderRequest): QueryOrderRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryOrderRequest",
      value: QueryOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrderResponse(): QueryOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const QueryOrderResponse = {
  encode(message: QueryOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse {
    const message = createBaseQueryOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderResponseAmino): QueryOrderResponse {
    return {
      order: object?.order ? Order.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: QueryOrderResponse): QueryOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderResponseAminoMsg): QueryOrderResponse {
    return QueryOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderResponseProtoMsg): QueryOrderResponse {
    return QueryOrderResponse.decode(message.value);
  },
  toProto(message: QueryOrderResponse): Uint8Array {
    return QueryOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderResponse): QueryOrderResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryOrderResponse",
      value: QueryOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOrdersResponse(): QueryOrdersResponse {
  return {
    orders: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryOrdersResponse = {
  encode(message: QueryOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOrdersResponse>): QueryOrdersResponse {
    const message = createBaseQueryOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrdersResponseAmino): QueryOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOrdersResponse): QueryOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrdersResponseAminoMsg): QueryOrdersResponse {
    return QueryOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrdersResponseProtoMsg): QueryOrdersResponse {
    return QueryOrdersResponse.decode(message.value);
  },
  toProto(message: QueryOrdersResponse): Uint8Array {
    return QueryOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrdersResponse): QueryOrdersResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryOrdersResponse",
      value: QueryOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllOrderRequest(): QueryAllOrderRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllOrderRequest = {
  encode(message: QueryAllOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllOrderRequest>): QueryAllOrderRequest {
    const message = createBaseQueryAllOrderRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrderRequestAmino): QueryAllOrderRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllOrderRequest): QueryAllOrderRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrderRequestAminoMsg): QueryAllOrderRequest {
    return QueryAllOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrderRequestProtoMsg): QueryAllOrderRequest {
    return QueryAllOrderRequest.decode(message.value);
  },
  toProto(message: QueryAllOrderRequest): Uint8Array {
    return QueryAllOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrderRequest): QueryAllOrderRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllOrderRequest",
      value: QueryAllOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrderOwnerRequest(): QueryOrderOwnerRequest {
  return {
    address: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryOrderOwnerRequest = {
  encode(message: QueryOrderOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOrderOwnerRequest>): QueryOrderOwnerRequest {
    const message = createBaseQueryOrderOwnerRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderOwnerRequestAmino): QueryOrderOwnerRequest {
    return {
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOrderOwnerRequest): QueryOrderOwnerRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderOwnerRequestAminoMsg): QueryOrderOwnerRequest {
    return QueryOrderOwnerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderOwnerRequestProtoMsg): QueryOrderOwnerRequest {
    return QueryOrderOwnerRequest.decode(message.value);
  },
  toProto(message: QueryOrderOwnerRequest): Uint8Array {
    return QueryOrderOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderOwnerRequest): QueryOrderOwnerRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerRequest",
      value: QueryOrderOwnerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrderOwnerUidsResponse(): QueryOrderOwnerUidsResponse {
  return {
    orders: Orders.fromPartial({}),
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryOrderOwnerUidsResponse = {
  encode(message: QueryOrderOwnerUidsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orders !== undefined) {
      Orders.encode(message.orders, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderOwnerUidsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderOwnerUidsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders = Orders.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOrderOwnerUidsResponse>): QueryOrderOwnerUidsResponse {
    const message = createBaseQueryOrderOwnerUidsResponse();
    message.orders = object.orders !== undefined && object.orders !== null ? Orders.fromPartial(object.orders) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderOwnerUidsResponseAmino): QueryOrderOwnerUidsResponse {
    return {
      orders: object?.orders ? Orders.fromAmino(object.orders) : undefined,
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOrderOwnerUidsResponse): QueryOrderOwnerUidsResponseAmino {
    const obj: any = {};
    obj.orders = message.orders ? Orders.toAmino(message.orders) : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderOwnerUidsResponseAminoMsg): QueryOrderOwnerUidsResponse {
    return QueryOrderOwnerUidsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderOwnerUidsResponseProtoMsg): QueryOrderOwnerUidsResponse {
    return QueryOrderOwnerUidsResponse.decode(message.value);
  },
  toProto(message: QueryOrderOwnerUidsResponse): Uint8Array {
    return QueryOrderOwnerUidsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderOwnerUidsResponse): QueryOrderOwnerUidsResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerUidsResponse",
      value: QueryOrderOwnerUidsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOrderOwnerPairRequest(): QueryOrderOwnerPairRequest {
  return {
    address: "",
    pair: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryOrderOwnerPairRequest = {
  encode(message: QueryOrderOwnerPairRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pair !== "") {
      writer.uint32(18).string(message.pair);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderOwnerPairRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderOwnerPairRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pair = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOrderOwnerPairRequest>): QueryOrderOwnerPairRequest {
    const message = createBaseQueryOrderOwnerPairRequest();
    message.address = object.address ?? "";
    message.pair = object.pair ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderOwnerPairRequestAmino): QueryOrderOwnerPairRequest {
    return {
      address: object.address,
      pair: object.pair,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOrderOwnerPairRequest): QueryOrderOwnerPairRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pair = message.pair;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderOwnerPairRequestAminoMsg): QueryOrderOwnerPairRequest {
    return QueryOrderOwnerPairRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderOwnerPairRequestProtoMsg): QueryOrderOwnerPairRequest {
    return QueryOrderOwnerPairRequest.decode(message.value);
  },
  toProto(message: QueryOrderOwnerPairRequest): Uint8Array {
    return QueryOrderOwnerPairRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderOwnerPairRequest): QueryOrderOwnerPairRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerPairRequest",
      value: QueryOrderOwnerPairRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrderOwnerPairResponse(): QueryOrderOwnerPairResponse {
  return {
    order: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryOrderOwnerPairResponse = {
  encode(message: QueryOrderOwnerPairResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderOwnerPairResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderOwnerPairResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOrderOwnerPairResponse>): QueryOrderOwnerPairResponse {
    const message = createBaseQueryOrderOwnerPairResponse();
    message.order = object.order?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryOrderOwnerPairResponseAmino): QueryOrderOwnerPairResponse {
    return {
      order: Array.isArray(object?.order) ? object.order.map((e: any) => Order.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryOrderOwnerPairResponse): QueryOrderOwnerPairResponseAmino {
    const obj: any = {};
    if (message.order) {
      obj.order = message.order.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.order = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOrderOwnerPairResponseAminoMsg): QueryOrderOwnerPairResponse {
    return QueryOrderOwnerPairResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderOwnerPairResponseProtoMsg): QueryOrderOwnerPairResponse {
    return QueryOrderOwnerPairResponse.decode(message.value);
  },
  toProto(message: QueryOrderOwnerPairResponse): Uint8Array {
    return QueryOrderOwnerPairResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderOwnerPairResponse): QueryOrderOwnerPairResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerPairResponse",
      value: QueryOrderOwnerPairResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBookRequest(): QueryBookRequest {
  return {
    denomA: "",
    denomB: "",
    orderType: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryBookRequest = {
  encode(message: QueryBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomA !== "") {
      writer.uint32(10).string(message.denomA);
    }
    if (message.denomB !== "") {
      writer.uint32(18).string(message.denomB);
    }
    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomA = reader.string();
          break;
        case 2:
          message.denomB = reader.string();
          break;
        case 3:
          message.orderType = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBookRequest>): QueryBookRequest {
    const message = createBaseQueryBookRequest();
    message.denomA = object.denomA ?? "";
    message.denomB = object.denomB ?? "";
    message.orderType = object.orderType ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBookRequestAmino): QueryBookRequest {
    return {
      denomA: object.denomA,
      denomB: object.denomB,
      orderType: object.orderType,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryBookRequest): QueryBookRequestAmino {
    const obj: any = {};
    obj.denomA = message.denomA;
    obj.denomB = message.denomB;
    obj.orderType = message.orderType;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBookRequestAminoMsg): QueryBookRequest {
    return QueryBookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBookRequestProtoMsg): QueryBookRequest {
    return QueryBookRequest.decode(message.value);
  },
  toProto(message: QueryBookRequest): Uint8Array {
    return QueryBookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBookRequest): QueryBookRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryBookRequest",
      value: QueryBookRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBookResponse(): QueryBookResponse {
  return {
    book: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryBookResponse = {
  encode(message: QueryBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.book) {
      OrderResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.book.push(OrderResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBookResponse>): QueryBookResponse {
    const message = createBaseQueryBookResponse();
    message.book = object.book?.map(e => OrderResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryBookResponseAmino): QueryBookResponse {
    return {
      book: Array.isArray(object?.book) ? object.book.map((e: any) => OrderResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryBookResponse): QueryBookResponseAmino {
    const obj: any = {};
    if (message.book) {
      obj.book = message.book.map(e => e ? OrderResponse.toAmino(e) : undefined);
    } else {
      obj.book = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBookResponseAminoMsg): QueryBookResponse {
    return QueryBookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBookResponseProtoMsg): QueryBookResponse {
    return QueryBookResponse.decode(message.value);
  },
  toProto(message: QueryBookResponse): Uint8Array {
    return QueryBookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBookResponse): QueryBookResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryBookResponse",
      value: QueryBookResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBookendsRequest(): QueryBookendsRequest {
  return {
    coinA: "",
    coinB: "",
    orderType: "",
    rate: []
  };
}
export const QueryBookendsRequest = {
  encode(message: QueryBookendsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinA !== "") {
      writer.uint32(10).string(message.coinA);
    }
    if (message.coinB !== "") {
      writer.uint32(18).string(message.coinB);
    }
    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }
    for (const v of message.rate) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookendsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBookendsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinA = reader.string();
          break;
        case 2:
          message.coinB = reader.string();
          break;
        case 3:
          message.orderType = reader.string();
          break;
        case 4:
          message.rate.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBookendsRequest>): QueryBookendsRequest {
    const message = createBaseQueryBookendsRequest();
    message.coinA = object.coinA ?? "";
    message.coinB = object.coinB ?? "";
    message.orderType = object.orderType ?? "";
    message.rate = object.rate?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryBookendsRequestAmino): QueryBookendsRequest {
    return {
      coinA: object.coinA,
      coinB: object.coinB,
      orderType: object.orderType,
      rate: Array.isArray(object?.rate) ? object.rate.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryBookendsRequest): QueryBookendsRequestAmino {
    const obj: any = {};
    obj.coinA = message.coinA;
    obj.coinB = message.coinB;
    obj.orderType = message.orderType;
    if (message.rate) {
      obj.rate = message.rate.map(e => e);
    } else {
      obj.rate = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBookendsRequestAminoMsg): QueryBookendsRequest {
    return QueryBookendsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBookendsRequestProtoMsg): QueryBookendsRequest {
    return QueryBookendsRequest.decode(message.value);
  },
  toProto(message: QueryBookendsRequest): Uint8Array {
    return QueryBookendsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBookendsRequest): QueryBookendsRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryBookendsRequest",
      value: QueryBookendsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBookendsResponse(): QueryBookendsResponse {
  return {
    coinA: "",
    coinB: "",
    orderType: "",
    rate: [],
    prev: Long.UZERO,
    next: Long.UZERO
  };
}
export const QueryBookendsResponse = {
  encode(message: QueryBookendsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinA !== "") {
      writer.uint32(10).string(message.coinA);
    }
    if (message.coinB !== "") {
      writer.uint32(18).string(message.coinB);
    }
    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }
    for (const v of message.rate) {
      writer.uint32(34).string(v!);
    }
    if (!message.prev.isZero()) {
      writer.uint32(40).uint64(message.prev);
    }
    if (!message.next.isZero()) {
      writer.uint32(48).uint64(message.next);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookendsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBookendsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinA = reader.string();
          break;
        case 2:
          message.coinB = reader.string();
          break;
        case 3:
          message.orderType = reader.string();
          break;
        case 4:
          message.rate.push(reader.string());
          break;
        case 5:
          message.prev = (reader.uint64() as Long);
          break;
        case 6:
          message.next = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBookendsResponse>): QueryBookendsResponse {
    const message = createBaseQueryBookendsResponse();
    message.coinA = object.coinA ?? "";
    message.coinB = object.coinB ?? "";
    message.orderType = object.orderType ?? "";
    message.rate = object.rate?.map(e => e) || [];
    message.prev = object.prev !== undefined && object.prev !== null ? Long.fromValue(object.prev) : Long.UZERO;
    message.next = object.next !== undefined && object.next !== null ? Long.fromValue(object.next) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryBookendsResponseAmino): QueryBookendsResponse {
    return {
      coinA: object.coinA,
      coinB: object.coinB,
      orderType: object.orderType,
      rate: Array.isArray(object?.rate) ? object.rate.map((e: any) => e) : [],
      prev: Long.fromString(object.prev),
      next: Long.fromString(object.next)
    };
  },
  toAmino(message: QueryBookendsResponse): QueryBookendsResponseAmino {
    const obj: any = {};
    obj.coinA = message.coinA;
    obj.coinB = message.coinB;
    obj.orderType = message.orderType;
    if (message.rate) {
      obj.rate = message.rate.map(e => e);
    } else {
      obj.rate = [];
    }
    obj.prev = message.prev ? message.prev.toString() : undefined;
    obj.next = message.next ? message.next.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBookendsResponseAminoMsg): QueryBookendsResponse {
    return QueryBookendsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBookendsResponseProtoMsg): QueryBookendsResponse {
    return QueryBookendsResponse.decode(message.value);
  },
  toProto(message: QueryBookendsResponse): Uint8Array {
    return QueryBookendsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBookendsResponse): QueryBookendsResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryBookendsResponse",
      value: QueryBookendsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryHistoryRequest(): QueryHistoryRequest {
  return {
    pair: "",
    length: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryHistoryRequest = {
  encode(message: QueryHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== "") {
      writer.uint32(10).string(message.pair);
    }
    if (message.length !== "") {
      writer.uint32(18).string(message.length);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = reader.string();
          break;
        case 2:
          message.length = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHistoryRequest>): QueryHistoryRequest {
    const message = createBaseQueryHistoryRequest();
    message.pair = object.pair ?? "";
    message.length = object.length ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHistoryRequestAmino): QueryHistoryRequest {
    return {
      pair: object.pair,
      length: object.length,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryHistoryRequest): QueryHistoryRequestAmino {
    const obj: any = {};
    obj.pair = message.pair;
    obj.length = message.length;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHistoryRequestAminoMsg): QueryHistoryRequest {
    return QueryHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoryRequestProtoMsg): QueryHistoryRequest {
    return QueryHistoryRequest.decode(message.value);
  },
  toProto(message: QueryHistoryRequest): Uint8Array {
    return QueryHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoryRequest): QueryHistoryRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryHistoryRequest",
      value: QueryHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryHistoryResponse(): QueryHistoryResponse {
  return {
    history: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryHistoryResponse = {
  encode(message: QueryHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.history) {
      OrderResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.history.push(OrderResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHistoryResponse>): QueryHistoryResponse {
    const message = createBaseQueryHistoryResponse();
    message.history = object.history?.map(e => OrderResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryHistoryResponseAmino): QueryHistoryResponse {
    return {
      history: Array.isArray(object?.history) ? object.history.map((e: any) => OrderResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryHistoryResponse): QueryHistoryResponseAmino {
    const obj: any = {};
    if (message.history) {
      obj.history = message.history.map(e => e ? OrderResponse.toAmino(e) : undefined);
    } else {
      obj.history = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryHistoryResponseAminoMsg): QueryHistoryResponse {
    return QueryHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoryResponseProtoMsg): QueryHistoryResponse {
    return QueryHistoryResponse.decode(message.value);
  },
  toProto(message: QueryHistoryResponse): Uint8Array {
    return QueryHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoryResponse): QueryHistoryResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryHistoryResponse",
      value: QueryHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryQuoteRequest(): QueryQuoteRequest {
  return {
    denomAsk: "",
    denomBid: "",
    denomAmount: "",
    amount: ""
  };
}
export const QueryQuoteRequest = {
  encode(message: QueryQuoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomAsk !== "") {
      writer.uint32(10).string(message.denomAsk);
    }
    if (message.denomBid !== "") {
      writer.uint32(18).string(message.denomBid);
    }
    if (message.denomAmount !== "") {
      writer.uint32(26).string(message.denomAmount);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomAsk = reader.string();
          break;
        case 2:
          message.denomBid = reader.string();
          break;
        case 3:
          message.denomAmount = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuoteRequest>): QueryQuoteRequest {
    const message = createBaseQueryQuoteRequest();
    message.denomAsk = object.denomAsk ?? "";
    message.denomBid = object.denomBid ?? "";
    message.denomAmount = object.denomAmount ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: QueryQuoteRequestAmino): QueryQuoteRequest {
    return {
      denomAsk: object.denomAsk,
      denomBid: object.denomBid,
      denomAmount: object.denomAmount,
      amount: object.amount
    };
  },
  toAmino(message: QueryQuoteRequest): QueryQuoteRequestAmino {
    const obj: any = {};
    obj.denomAsk = message.denomAsk;
    obj.denomBid = message.denomBid;
    obj.denomAmount = message.denomAmount;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: QueryQuoteRequestAminoMsg): QueryQuoteRequest {
    return QueryQuoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteRequestProtoMsg): QueryQuoteRequest {
    return QueryQuoteRequest.decode(message.value);
  },
  toProto(message: QueryQuoteRequest): Uint8Array {
    return QueryQuoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteRequest): QueryQuoteRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryQuoteRequest",
      value: QueryQuoteRequest.encode(message).finish()
    };
  }
};
function createBaseQueryQuoteResponse(): QueryQuoteResponse {
  return {
    denom: "",
    amount: ""
  };
}
export const QueryQuoteResponse = {
  encode(message: QueryQuoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuoteResponse>): QueryQuoteResponse {
    const message = createBaseQueryQuoteResponse();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: QueryQuoteResponseAmino): QueryQuoteResponse {
    return {
      denom: object.denom,
      amount: object.amount
    };
  },
  toAmino(message: QueryQuoteResponse): QueryQuoteResponseAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: QueryQuoteResponseAminoMsg): QueryQuoteResponse {
    return QueryQuoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteResponseProtoMsg): QueryQuoteResponse {
    return QueryQuoteResponse.decode(message.value);
  },
  toProto(message: QueryQuoteResponse): Uint8Array {
    return QueryQuoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteResponse): QueryQuoteResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryQuoteResponse",
      value: QueryQuoteResponse.encode(message).finish()
    };
  }
};