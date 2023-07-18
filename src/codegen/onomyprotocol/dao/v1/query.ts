import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/onomyprotocol.dao.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/onomyprotocol.dao.v1.QueryParamsRequest";
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
export interface QueryTreasuryRequest {}
export interface QueryTreasuryRequestProtoMsg {
  typeUrl: "/onomyprotocol.dao.v1.QueryTreasuryRequest";
  value: Uint8Array;
}
/** QueryTreasuryRequest is request type for the Query/Treasury RPC method. */
export interface QueryTreasuryRequestAmino {}
export interface QueryTreasuryRequestAminoMsg {
  type: "/onomyprotocol.dao.v1.QueryTreasuryRequest";
  value: QueryTreasuryRequestAmino;
}
/** QueryTreasuryRequest is request type for the Query/Treasury RPC method. */
export interface QueryTreasuryRequestSDKType {}
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
      typeUrl: "/onomyprotocol.dao.v1.QueryParamsRequest",
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
      typeUrl: "/onomyprotocol.dao.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTreasuryRequest(): QueryTreasuryRequest {
  return {};
}
export const QueryTreasuryRequest = {
  encode(_: QueryTreasuryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTreasuryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTreasuryRequest();
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
  fromPartial(_: DeepPartial<QueryTreasuryRequest>): QueryTreasuryRequest {
    const message = createBaseQueryTreasuryRequest();
    return message;
  },
  fromAmino(_: QueryTreasuryRequestAmino): QueryTreasuryRequest {
    return {};
  },
  toAmino(_: QueryTreasuryRequest): QueryTreasuryRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTreasuryRequestAminoMsg): QueryTreasuryRequest {
    return QueryTreasuryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTreasuryRequestProtoMsg): QueryTreasuryRequest {
    return QueryTreasuryRequest.decode(message.value);
  },
  toProto(message: QueryTreasuryRequest): Uint8Array {
    return QueryTreasuryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTreasuryRequest): QueryTreasuryRequestProtoMsg {
    return {
      typeUrl: "/onomyprotocol.dao.v1.QueryTreasuryRequest",
      value: QueryTreasuryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTreasuryResponse(): QueryTreasuryResponse {
  return {
    treasuryBalance: []
  };
}
export const QueryTreasuryResponse = {
  encode(message: QueryTreasuryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.treasuryBalance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTreasuryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTreasuryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.treasuryBalance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTreasuryResponse>): QueryTreasuryResponse {
    const message = createBaseQueryTreasuryResponse();
    message.treasuryBalance = object.treasuryBalance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTreasuryResponseAmino): QueryTreasuryResponse {
    return {
      treasuryBalance: Array.isArray(object?.treasury_balance) ? object.treasury_balance.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTreasuryResponse): QueryTreasuryResponseAmino {
    const obj: any = {};
    if (message.treasuryBalance) {
      obj.treasury_balance = message.treasuryBalance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.treasury_balance = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTreasuryResponseAminoMsg): QueryTreasuryResponse {
    return QueryTreasuryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTreasuryResponseProtoMsg): QueryTreasuryResponse {
    return QueryTreasuryResponse.decode(message.value);
  },
  toProto(message: QueryTreasuryResponse): Uint8Array {
    return QueryTreasuryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTreasuryResponse): QueryTreasuryResponseProtoMsg {
    return {
      typeUrl: "/onomyprotocol.dao.v1.QueryTreasuryResponse",
      value: QueryTreasuryResponse.encode(message).finish()
    };
  }
};