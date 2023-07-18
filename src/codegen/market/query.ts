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
  owner: string;
  active: boolean;
  orderType: string;
  denomAsk: string;
  denomBid: string;
}
export interface QueryGetOrderRequestProtoMsg {
  typeUrl: "/pendulumlabs.market.market.QueryGetOrderRequest";
  value: Uint8Array;
}
export interface QueryGetOrderRequestAmino {
  uid: string;
  owner: string;
  active: boolean;
  orderType: string;
  denomAsk: string;
  denomBid: string;
}
export interface QueryGetOrderRequestAminoMsg {
  type: "/pendulumlabs.market.market.QueryGetOrderRequest";
  value: QueryGetOrderRequestAmino;
}
export interface QueryGetOrderRequestSDKType {
  uid: Long;
  owner: string;
  active: boolean;
  orderType: string;
  denomAsk: string;
  denomBid: string;
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
}
export interface QueryBookResponseProtoMsg {
  typeUrl: "/pendulumlabs.market.market.QueryBookResponse";
  value: Uint8Array;
}
export interface QueryBookResponseAmino {
  book: OrderResponseAmino[];
}
export interface QueryBookResponseAminoMsg {
  type: "/pendulumlabs.market.market.QueryBookResponse";
  value: QueryBookResponseAmino;
}
export interface QueryBookResponseSDKType {
  book: OrderResponseSDKType[];
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
function createBaseQueryGetDropRequest(): QueryGetDropRequest {
  return {
    uid: Long.UZERO
  };
}
export const QueryGetDropRequest = {
  encode(message: QueryGetDropRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.uid.isZero()) {
      writer.uint32(8).uint64(message.uid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDropRequest();
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
  fromPartial(object: DeepPartial<QueryGetDropRequest>): QueryGetDropRequest {
    const message = createBaseQueryGetDropRequest();
    message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryGetDropRequestAmino): QueryGetDropRequest {
    return {
      uid: Long.fromString(object.uid)
    };
  },
  toAmino(message: QueryGetDropRequest): QueryGetDropRequestAmino {
    const obj: any = {};
    obj.uid = message.uid ? message.uid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDropRequestAminoMsg): QueryGetDropRequest {
    return QueryGetDropRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDropRequestProtoMsg): QueryGetDropRequest {
    return QueryGetDropRequest.decode(message.value);
  },
  toProto(message: QueryGetDropRequest): Uint8Array {
    return QueryGetDropRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDropRequest): QueryGetDropRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetDropRequest",
      value: QueryGetDropRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDropResponse(): QueryGetDropResponse {
  return {
    drop: Drop.fromPartial({})
  };
}
export const QueryGetDropResponse = {
  encode(message: QueryGetDropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.drop !== undefined) {
      Drop.encode(message.drop, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDropResponse();
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
  fromPartial(object: DeepPartial<QueryGetDropResponse>): QueryGetDropResponse {
    const message = createBaseQueryGetDropResponse();
    message.drop = object.drop !== undefined && object.drop !== null ? Drop.fromPartial(object.drop) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDropResponseAmino): QueryGetDropResponse {
    return {
      drop: object?.drop ? Drop.fromAmino(object.drop) : undefined
    };
  },
  toAmino(message: QueryGetDropResponse): QueryGetDropResponseAmino {
    const obj: any = {};
    obj.drop = message.drop ? Drop.toAmino(message.drop) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDropResponseAminoMsg): QueryGetDropResponse {
    return QueryGetDropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDropResponseProtoMsg): QueryGetDropResponse {
    return QueryGetDropResponse.decode(message.value);
  },
  toProto(message: QueryGetDropResponse): Uint8Array {
    return QueryGetDropResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDropResponse): QueryGetDropResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetDropResponse",
      value: QueryGetDropResponse.encode(message).finish()
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
function createBaseQueryAllDropResponse(): QueryAllDropResponse {
  return {
    drop: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllDropResponse = {
  encode(message: QueryAllDropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.drop) {
      Drop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.drop.push(Drop.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryAllDropResponse>): QueryAllDropResponse {
    const message = createBaseQueryAllDropResponse();
    message.drop = object.drop?.map(e => Drop.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDropResponseAmino): QueryAllDropResponse {
    return {
      drop: Array.isArray(object?.drop) ? object.drop.map((e: any) => Drop.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllDropResponse): QueryAllDropResponseAmino {
    const obj: any = {};
    if (message.drop) {
      obj.drop = message.drop.map(e => e ? Drop.toAmino(e) : undefined);
    } else {
      obj.drop = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDropResponseAminoMsg): QueryAllDropResponse {
    return QueryAllDropResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDropResponseProtoMsg): QueryAllDropResponse {
    return QueryAllDropResponse.decode(message.value);
  },
  toProto(message: QueryAllDropResponse): Uint8Array {
    return QueryAllDropResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDropResponse): QueryAllDropResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllDropResponse",
      value: QueryAllDropResponse.encode(message).finish()
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
function createBaseQueryGetOrderRequest(): QueryGetOrderRequest {
  return {
    uid: Long.UZERO,
    owner: "",
    active: false,
    orderType: "",
    denomAsk: "",
    denomBid: ""
  };
}
export const QueryGetOrderRequest = {
  encode(message: QueryGetOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.uid.isZero()) {
      writer.uint32(8).uint64(message.uid);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    if (message.orderType !== "") {
      writer.uint32(34).string(message.orderType);
    }
    if (message.denomAsk !== "") {
      writer.uint32(42).string(message.denomAsk);
    }
    if (message.denomBid !== "") {
      writer.uint32(50).string(message.denomBid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = (reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        case 4:
          message.orderType = reader.string();
          break;
        case 5:
          message.denomAsk = reader.string();
          break;
        case 6:
          message.denomBid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetOrderRequest>): QueryGetOrderRequest {
    const message = createBaseQueryGetOrderRequest();
    message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.active = object.active ?? false;
    message.orderType = object.orderType ?? "";
    message.denomAsk = object.denomAsk ?? "";
    message.denomBid = object.denomBid ?? "";
    return message;
  },
  fromAmino(object: QueryGetOrderRequestAmino): QueryGetOrderRequest {
    return {
      uid: Long.fromString(object.uid),
      owner: object.owner,
      active: object.active,
      orderType: object.orderType,
      denomAsk: object.denomAsk,
      denomBid: object.denomBid
    };
  },
  toAmino(message: QueryGetOrderRequest): QueryGetOrderRequestAmino {
    const obj: any = {};
    obj.uid = message.uid ? message.uid.toString() : undefined;
    obj.owner = message.owner;
    obj.active = message.active;
    obj.orderType = message.orderType;
    obj.denomAsk = message.denomAsk;
    obj.denomBid = message.denomBid;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderRequestAminoMsg): QueryGetOrderRequest {
    return QueryGetOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderRequestProtoMsg): QueryGetOrderRequest {
    return QueryGetOrderRequest.decode(message.value);
  },
  toProto(message: QueryGetOrderRequest): Uint8Array {
    return QueryGetOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderRequest): QueryGetOrderRequestProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetOrderRequest",
      value: QueryGetOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrderResponse(): QueryGetOrderResponse {
  return {
    order: Order.fromPartial({})
  };
}
export const QueryGetOrderResponse = {
  encode(message: QueryGetOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderResponse();
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
  fromPartial(object: DeepPartial<QueryGetOrderResponse>): QueryGetOrderResponse {
    const message = createBaseQueryGetOrderResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  },
  fromAmino(object: QueryGetOrderResponseAmino): QueryGetOrderResponse {
    return {
      order: object?.order ? Order.fromAmino(object.order) : undefined
    };
  },
  toAmino(message: QueryGetOrderResponse): QueryGetOrderResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderResponseAminoMsg): QueryGetOrderResponse {
    return QueryGetOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderResponseProtoMsg): QueryGetOrderResponse {
    return QueryGetOrderResponse.decode(message.value);
  },
  toProto(message: QueryGetOrderResponse): Uint8Array {
    return QueryGetOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderResponse): QueryGetOrderResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryGetOrderResponse",
      value: QueryGetOrderResponse.encode(message).finish()
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
function createBaseQueryAllOrderResponse(): QueryAllOrderResponse {
  return {
    order: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllOrderResponse = {
  encode(message: QueryAllOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.order) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllOrderResponse();
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
  fromPartial(object: DeepPartial<QueryAllOrderResponse>): QueryAllOrderResponse {
    const message = createBaseQueryAllOrderResponse();
    message.order = object.order?.map(e => Order.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllOrderResponseAmino): QueryAllOrderResponse {
    return {
      order: Array.isArray(object?.order) ? object.order.map((e: any) => Order.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllOrderResponse): QueryAllOrderResponseAmino {
    const obj: any = {};
    if (message.order) {
      obj.order = message.order.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.order = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllOrderResponseAminoMsg): QueryAllOrderResponse {
    return QueryAllOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllOrderResponseProtoMsg): QueryAllOrderResponse {
    return QueryAllOrderResponse.decode(message.value);
  },
  toProto(message: QueryAllOrderResponse): Uint8Array {
    return QueryAllOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllOrderResponse): QueryAllOrderResponseProtoMsg {
    return {
      typeUrl: "/pendulumlabs.market.market.QueryAllOrderResponse",
      value: QueryAllOrderResponse.encode(message).finish()
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
    book: []
  };
}
export const QueryBookResponse = {
  encode(message: QueryBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.book) {
      OrderResponse.encode(v!, writer.uint32(10).fork()).ldelim();
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
    return message;
  },
  fromAmino(object: QueryBookResponseAmino): QueryBookResponse {
    return {
      book: Array.isArray(object?.book) ? object.book.map((e: any) => OrderResponse.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBookResponse): QueryBookResponseAmino {
    const obj: any = {};
    if (message.book) {
      obj.book = message.book.map(e => e ? OrderResponse.toAmino(e) : undefined);
    } else {
      obj.book = [];
    }
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