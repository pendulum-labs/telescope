import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Coin } from "../../base/v1beta1/coin";
import { Params, Metadata } from "./bank";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryBalanceRequest() {
    return {
        address: "",
        denom: ""
    };
}
export const QueryBalanceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceRequest();
        message.address = object.address ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryBalanceRequest",
            value: QueryBalanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest",
            value: QueryBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBalanceResponse() {
    return {
        balance: undefined
    };
}
export const QueryBalanceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.balance !== undefined) {
            Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBalanceResponse();
        message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            balance: object?.balance ? Coin.fromAmino(object.balance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.balance = message.balance ? Coin.toAmino(message.balance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBalanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryBalanceResponse",
            value: QueryBalanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse",
            value: QueryBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllBalancesRequest() {
    return {
        address: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAllBalancesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBalancesRequest();
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
    fromPartial(object) {
        const message = createBaseQueryAllBalancesRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllBalancesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllBalancesRequest",
            value: QueryAllBalancesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllBalancesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllBalancesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest",
            value: QueryAllBalancesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllBalancesResponse() {
    return {
        balances: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAllBalancesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.balances) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllBalancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balances.push(Coin.decode(reader, reader.uint32()));
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
    fromPartial(object) {
        const message = createBaseQueryAllBalancesResponse();
        message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            balances: Array.isArray(object?.balances) ? object.balances.map((e) => Coin.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllBalancesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllBalancesResponse",
            value: QueryAllBalancesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllBalancesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllBalancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse",
            value: QueryAllBalancesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSupplyRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryTotalSupplyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSupplyRequest();
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
    fromPartial(object) {
        const message = createBaseQueryTotalSupplyRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalSupplyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalSupplyRequest",
            value: QueryTotalSupplyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalSupplyRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSupplyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest",
            value: QueryTotalSupplyRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSupplyResponse() {
    return {
        supply: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryTotalSupplyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.supply) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSupplyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.supply.push(Coin.decode(reader, reader.uint32()));
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
    fromPartial(object) {
        const message = createBaseQueryTotalSupplyResponse();
        message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            supply: Array.isArray(object?.supply) ? object.supply.map((e) => Coin.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalSupplyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalSupplyResponse",
            value: QueryTotalSupplyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalSupplyResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSupplyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse",
            value: QueryTotalSupplyResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyOfRequest() {
    return {
        denom: ""
    };
}
export const QuerySupplyOfRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyOfRequest();
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
    fromPartial(object) {
        const message = createBaseQuerySupplyOfRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySupplyOfRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySupplyOfRequest",
            value: QuerySupplyOfRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySupplyOfRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyOfRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest",
            value: QuerySupplyOfRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySupplyOfResponse() {
    return {
        amount: undefined
    };
}
export const QuerySupplyOfResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySupplyOfResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQuerySupplyOfResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySupplyOfResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySupplyOfResponse",
            value: QuerySupplyOfResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySupplyOfResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySupplyOfResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse",
            value: QuerySupplyOfResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsMetadataRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDenomsMetadataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsMetadataRequest();
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
    fromPartial(object) {
        const message = createBaseQueryDenomsMetadataRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsMetadataRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomsMetadataRequest",
            value: QueryDenomsMetadataRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomsMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest",
            value: QueryDenomsMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomsMetadataResponse() {
    return {
        metadatas: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDenomsMetadataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.metadatas) {
            Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadatas.push(Metadata.decode(reader, reader.uint32()));
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
    fromPartial(object) {
        const message = createBaseQueryDenomsMetadataResponse();
        message.metadatas = object.metadatas?.map(e => Metadata.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            metadatas: Array.isArray(object?.metadatas) ? object.metadatas.map((e) => Metadata.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.metadatas) {
            obj.metadatas = message.metadatas.map(e => e ? Metadata.toAmino(e) : undefined);
        }
        else {
            obj.metadatas = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomsMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomsMetadataResponse",
            value: QueryDenomsMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomsMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomsMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse",
            value: QueryDenomsMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomMetadataRequest() {
    return {
        denom: ""
    };
}
export const QueryDenomMetadataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomMetadataRequest();
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
    fromPartial(object) {
        const message = createBaseQueryDenomMetadataRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomMetadataRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomMetadataRequest",
            value: QueryDenomMetadataRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomMetadataRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomMetadataRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest",
            value: QueryDenomMetadataRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomMetadataResponse() {
    return {
        metadata: Metadata.fromPartial({})
    };
}
export const QueryDenomMetadataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomMetadataResponse();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomMetadataResponse",
            value: QueryDenomMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse",
            value: QueryDenomMetadataResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map