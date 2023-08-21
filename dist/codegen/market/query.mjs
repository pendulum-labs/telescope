import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Pool } from "./pool";
import { Drop } from "./drop";
import { Member } from "./member";
import { Burnings } from "./burnings";
import { Order, Orders, OrderResponse } from "./order";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
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
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryParamsRequest",
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
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetPoolRequest() {
    return {
        pair: ""
    };
}
export const QueryGetPoolRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pair !== "") {
            writer.uint32(10).string(message.pair);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryGetPoolRequest();
        message.pair = object.pair ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            pair: object.pair
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pair = message.pair;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetPoolRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetPoolRequest",
            value: QueryGetPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetPoolResponse() {
    return {
        pool: Pool.fromPartial({})
    };
}
export const QueryGetPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryGetPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pool: object?.pool ? Pool.fromAmino(object.pool) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? Pool.toAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetPoolResponse",
            value: QueryGetPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllPoolRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAllPoolRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAllPoolRequest();
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
        return QueryAllPoolRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllPoolRequest",
            value: QueryAllPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllPoolResponse() {
    return {
        pool: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAllPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pool) {
            Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAllPoolResponse();
        message.pool = object.pool?.map(e => Pool.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pool: Array.isArray(object?.pool) ? object.pool.map((e) => Pool.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? Pool.toAmino(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllPoolResponse",
            value: QueryAllPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropRequest() {
    return {
        uid: Long.UZERO
    };
}
export const QueryDropRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.uid.isZero()) {
            writer.uint32(8).uint64(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDropRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDropRequest();
        message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: Long.fromString(object.uid)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDropRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropRequest",
            value: QueryDropRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropCoinRequest() {
    return {
        denomA: "",
        denomB: "",
        amountA: ""
    };
}
export const QueryDropCoinRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropCoinRequest();
        message.denomA = object.denomA ?? "";
        message.denomB = object.denomB ?? "";
        message.amountA = object.amountA ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denomA: object.denomA,
            denomB: object.denomB,
            amountA: object.amountA
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denomA = message.denomA;
        obj.denomB = message.denomB;
        obj.amountA = message.amountA;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropCoinRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropCoinRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDropCoinRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropCoinRequest",
            value: QueryDropCoinRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropCoinResponse() {
    return {
        drops: "",
        amountB: ""
    };
}
export const QueryDropCoinResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.drops !== "") {
            writer.uint32(10).string(message.drops);
        }
        if (message.amountB !== "") {
            writer.uint32(18).string(message.amountB);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropCoinResponse();
        message.drops = object.drops ?? "";
        message.amountB = object.amountB ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            drops: object.drops,
            amountB: object.amountB
        };
    },
    toAmino(message) {
        const obj = {};
        obj.drops = message.drops;
        obj.amountB = message.amountB;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropCoinResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropCoinResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDropCoinResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropCoinResponse",
            value: QueryDropCoinResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropResponse() {
    return {
        drop: Drop.fromPartial({})
    };
}
export const QueryDropResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.drop !== undefined) {
            Drop.encode(message.drop, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropResponse();
        message.drop = object.drop !== undefined && object.drop !== null ? Drop.fromPartial(object.drop) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            drop: object?.drop ? Drop.fromAmino(object.drop) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.drop = message.drop ? Drop.toAmino(message.drop) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropResponse",
            value: QueryDropResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropAmountsRequest() {
    return {
        uid: Long.UZERO
    };
}
export const QueryDropAmountsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.uid.isZero()) {
            writer.uint32(8).uint64(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDropAmountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDropAmountsRequest();
        message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: Long.fromString(object.uid)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropAmountsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropAmountsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDropAmountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropAmountsRequest",
            value: QueryDropAmountsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropAmountsResponse() {
    return {
        denom1: "",
        denom2: "",
        amount1: "",
        amount2: ""
    };
}
export const QueryDropAmountsResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropAmountsResponse();
        message.denom1 = object.denom1 ?? "";
        message.denom2 = object.denom2 ?? "";
        message.amount1 = object.amount1 ?? "";
        message.amount2 = object.amount2 ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom1: object.denom1,
            denom2: object.denom2,
            amount1: object.amount1,
            amount2: object.amount2
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom1 = message.denom1;
        obj.denom2 = message.denom2;
        obj.amount1 = message.amount1;
        obj.amount2 = message.amount2;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropAmountsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropAmountsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDropAmountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropAmountsResponse",
            value: QueryDropAmountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropPairsRequest() {
    return {
        address: ""
    };
}
export const QueryDropPairsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropPairsRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropPairsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropPairsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDropPairsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropPairsRequest",
            value: QueryDropPairsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropPairsResponse() {
    return {
        pairs: []
    };
}
export const QueryDropPairsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairs) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropPairsResponse();
        message.pairs = object.pairs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropPairsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropPairsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDropPairsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropPairsResponse",
            value: QueryDropPairsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairRequest() {
    return {
        address: "",
        pair: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDropOwnerPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropOwnerPairRequest();
        message.address = object.address ?? "";
        message.pair = object.pair ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pair: object.pair,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pair = message.pair;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropOwnerPairRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropOwnerPairRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDropOwnerPairRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairRequest",
            value: QueryDropOwnerPairRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairSumRequest() {
    return {
        address: "",
        pair: ""
    };
}
export const QueryDropOwnerPairSumRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pair !== "") {
            writer.uint32(18).string(message.pair);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropOwnerPairSumRequest();
        message.address = object.address ?? "";
        message.pair = object.pair ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pair: object.pair
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pair = message.pair;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropOwnerPairSumRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropOwnerPairSumRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDropOwnerPairSumRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairSumRequest",
            value: QueryDropOwnerPairSumRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairSumResponse() {
    return {
        sum: ""
    };
}
export const QueryDropOwnerPairSumResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sum !== "") {
            writer.uint32(10).string(message.sum);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropOwnerPairSumResponse();
        message.sum = object.sum ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            sum: object.sum
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sum = message.sum;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropOwnerPairSumResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropOwnerPairSumResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDropOwnerPairSumResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairSumResponse",
            value: QueryDropOwnerPairSumResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairUidsRequest() {
    return {
        address: "",
        pair: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDropOwnerPairUidsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropOwnerPairUidsRequest();
        message.address = object.address ?? "";
        message.pair = object.pair ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pair: object.pair,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pair = message.pair;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropOwnerPairUidsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropOwnerPairUidsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDropOwnerPairUidsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairUidsRequest",
            value: QueryDropOwnerPairUidsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUidsResponse() {
    return {
        uids: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryUidsResponse = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
                            message.uids.push(reader.uint64());
                        }
                    }
                    else {
                        message.uids.push(reader.uint64());
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
    fromPartial(object) {
        const message = createBaseQueryUidsResponse();
        message.uids = object.uids?.map(e => Long.fromValue(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            uids: Array.isArray(object?.uids) ? object.uids.map((e) => e) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.uids) {
            obj.uids = message.uids.map(e => e);
        }
        else {
            obj.uids = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUidsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryUidsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUidsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryUidsResponse",
            value: QueryUidsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairDetailRequest() {
    return {
        address: "",
        pair: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryDropOwnerPairDetailRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropOwnerPairDetailRequest();
        message.address = object.address ?? "";
        message.pair = object.pair ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pair: object.pair,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pair = message.pair;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropOwnerPairDetailRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropOwnerPairDetailRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDropOwnerPairDetailRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairDetailRequest",
            value: QueryDropOwnerPairDetailRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllDropRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAllDropRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAllDropRequest();
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
        return QueryAllDropRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllDropRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllDropRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllDropRequest",
            value: QueryAllDropRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropsResponse() {
    return {
        drops: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryDropsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.drops) {
            Drop.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryDropsResponse();
        message.drops = object.drops?.map(e => Drop.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            drops: Array.isArray(object?.drops) ? object.drops.map((e) => Drop.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.drops) {
            obj.drops = message.drops.map(e => e ? Drop.toAmino(e) : undefined);
        }
        else {
            obj.drops = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDropsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDropsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDropsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropsResponse",
            value: QueryDropsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetMemberRequest() {
    return {
        denomA: "",
        denomB: ""
    };
}
export const QueryGetMemberRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomA !== "") {
            writer.uint32(18).string(message.denomA);
        }
        if (message.denomB !== "") {
            writer.uint32(26).string(message.denomB);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryGetMemberRequest();
        message.denomA = object.denomA ?? "";
        message.denomB = object.denomB ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denomA: object.denomA,
            denomB: object.denomB
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denomA = message.denomA;
        obj.denomB = message.denomB;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetMemberRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetMemberRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetMemberRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetMemberRequest",
            value: QueryGetMemberRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetMemberResponse() {
    return {
        member: Member.fromPartial({})
    };
}
export const QueryGetMemberResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.member !== undefined) {
            Member.encode(message.member, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryGetMemberResponse();
        message.member = object.member !== undefined && object.member !== null ? Member.fromPartial(object.member) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            member: object?.member ? Member.fromAmino(object.member) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.member = message.member ? Member.toAmino(message.member) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetMemberResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetMemberResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetMemberResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetMemberResponse",
            value: QueryGetMemberResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllMemberRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAllMemberRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAllMemberRequest();
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
        return QueryAllMemberRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllMemberRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllMemberRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllMemberRequest",
            value: QueryAllMemberRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllMemberResponse() {
    return {
        member: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAllMemberResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.member) {
            Member.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAllMemberResponse();
        message.member = object.member?.map(e => Member.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            member: Array.isArray(object?.member) ? object.member.map((e) => Member.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.member) {
            obj.member = message.member.map(e => e ? Member.toAmino(e) : undefined);
        }
        else {
            obj.member = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllMemberResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllMemberResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllMemberResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllMemberResponse",
            value: QueryAllMemberResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetBurningsRequest() {
    return {
        denom: ""
    };
}
export const QueryGetBurningsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryGetBurningsRequest();
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
        return QueryGetBurningsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetBurningsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetBurningsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetBurningsRequest",
            value: QueryGetBurningsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetBurningsResponse() {
    return {
        burnings: Burnings.fromPartial({})
    };
}
export const QueryGetBurningsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.burnings !== undefined) {
            Burnings.encode(message.burnings, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryGetBurningsResponse();
        message.burnings = object.burnings !== undefined && object.burnings !== null ? Burnings.fromPartial(object.burnings) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            burnings: object?.burnings ? Burnings.fromAmino(object.burnings) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.burnings = message.burnings ? Burnings.toAmino(message.burnings) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetBurningsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetBurningsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetBurningsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetBurningsResponse",
            value: QueryGetBurningsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllBurningsRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAllBurningsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAllBurningsRequest();
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
        return QueryAllBurningsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllBurningsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllBurningsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllBurningsRequest",
            value: QueryAllBurningsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllBurningsResponse() {
    return {
        burnings: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAllBurningsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.burnings) {
            Burnings.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAllBurningsResponse();
        message.burnings = object.burnings?.map(e => Burnings.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            burnings: Array.isArray(object?.burnings) ? object.burnings.map((e) => Burnings.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.burnings) {
            obj.burnings = message.burnings.map(e => e ? Burnings.toAmino(e) : undefined);
        }
        else {
            obj.burnings = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllBurningsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllBurningsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllBurningsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllBurningsResponse",
            value: QueryAllBurningsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOrderRequest() {
    return {
        uid: Long.UZERO
    };
}
export const QueryOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.uid.isZero()) {
            writer.uint32(8).uint64(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOrderRequest();
        message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: Long.fromString(object.uid)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderRequest",
            value: QueryOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderResponse() {
    return {
        order: Order.fromPartial({})
    };
}
export const QueryOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryOrderResponse();
        message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            order: object?.order ? Order.fromAmino(object.order) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.order = message.order ? Order.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderResponse",
            value: QueryOrderResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOrdersResponse() {
    return {
        orders: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryOrdersResponse();
        message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            orders: Array.isArray(object?.orders) ? object.orders.map((e) => Order.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrdersResponse",
            value: QueryOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllOrderRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAllOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryAllOrderRequest();
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
        return QueryAllOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllOrderRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllOrderRequest",
            value: QueryAllOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderOwnerRequest() {
    return {
        address: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryOrderOwnerRequest = {
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
    fromPartial(object) {
        const message = createBaseQueryOrderOwnerRequest();
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
        return QueryOrderOwnerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderOwnerRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOrderOwnerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerRequest",
            value: QueryOrderOwnerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderOwnerUidsResponse() {
    return {
        orders: Orders.fromPartial({}),
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryOrderOwnerUidsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orders !== undefined) {
            Orders.encode(message.orders, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryOrderOwnerUidsResponse();
        message.orders = object.orders !== undefined && object.orders !== null ? Orders.fromPartial(object.orders) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            orders: object?.orders ? Orders.fromAmino(object.orders) : undefined,
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.orders = message.orders ? Orders.toAmino(message.orders) : undefined;
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrderOwnerUidsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderOwnerUidsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOrderOwnerUidsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerUidsResponse",
            value: QueryOrderOwnerUidsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOrderOwnerPairRequest() {
    return {
        address: "",
        pair: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryOrderOwnerPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryOrderOwnerPairRequest();
        message.address = object.address ?? "";
        message.pair = object.pair ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pair: object.pair,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pair = message.pair;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrderOwnerPairRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderOwnerPairRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOrderOwnerPairRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerPairRequest",
            value: QueryOrderOwnerPairRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderOwnerPairResponse() {
    return {
        order: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryOrderOwnerPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.order) {
            Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryOrderOwnerPairResponse();
        message.order = object.order?.map(e => Order.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            order: Array.isArray(object?.order) ? object.order.map((e) => Order.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.order) {
            obj.order = message.order.map(e => e ? Order.toAmino(e) : undefined);
        }
        else {
            obj.order = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOrderOwnerPairResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOrderOwnerPairResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOrderOwnerPairResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerPairResponse",
            value: QueryOrderOwnerPairResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBookRequest() {
    return {
        denomA: "",
        denomB: "",
        orderType: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryBookRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryBookRequest();
        message.denomA = object.denomA ?? "";
        message.denomB = object.denomB ?? "";
        message.orderType = object.orderType ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denomA: object.denomA,
            denomB: object.denomB,
            orderType: object.orderType,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denomA = message.denomA;
        obj.denomB = message.denomB;
        obj.orderType = message.orderType;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBookRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBookRequest",
            value: QueryBookRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBookResponse() {
    return {
        book: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.book) {
            OrderResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryBookResponse();
        message.book = object.book?.map(e => OrderResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            book: Array.isArray(object?.book) ? object.book.map((e) => OrderResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.book) {
            obj.book = message.book.map(e => e ? OrderResponse.toAmino(e) : undefined);
        }
        else {
            obj.book = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBookResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBookResponse",
            value: QueryBookResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBookendsRequest() {
    return {
        coinA: "",
        coinB: "",
        orderType: "",
        rate: []
    };
}
export const QueryBookendsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryBookendsRequest();
        message.coinA = object.coinA ?? "";
        message.coinB = object.coinB ?? "";
        message.orderType = object.orderType ?? "";
        message.rate = object.rate?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            coinA: object.coinA,
            coinB: object.coinB,
            orderType: object.orderType,
            rate: Array.isArray(object?.rate) ? object.rate.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.coinA = message.coinA;
        obj.coinB = message.coinB;
        obj.orderType = message.orderType;
        if (message.rate) {
            obj.rate = message.rate.map(e => e);
        }
        else {
            obj.rate = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBookendsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBookendsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBookendsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBookendsRequest",
            value: QueryBookendsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBookendsResponse() {
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
    encode(message, writer = _m0.Writer.create()) {
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
            writer.uint32(34).string(v);
        }
        if (!message.prev.isZero()) {
            writer.uint32(40).uint64(message.prev);
        }
        if (!message.next.isZero()) {
            writer.uint32(48).uint64(message.next);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.prev = reader.uint64();
                    break;
                case 6:
                    message.next = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBookendsResponse();
        message.coinA = object.coinA ?? "";
        message.coinB = object.coinB ?? "";
        message.orderType = object.orderType ?? "";
        message.rate = object.rate?.map(e => e) || [];
        message.prev = object.prev !== undefined && object.prev !== null ? Long.fromValue(object.prev) : Long.UZERO;
        message.next = object.next !== undefined && object.next !== null ? Long.fromValue(object.next) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            coinA: object.coinA,
            coinB: object.coinB,
            orderType: object.orderType,
            rate: Array.isArray(object?.rate) ? object.rate.map((e) => e) : [],
            prev: Long.fromString(object.prev),
            next: Long.fromString(object.next)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.coinA = message.coinA;
        obj.coinB = message.coinB;
        obj.orderType = message.orderType;
        if (message.rate) {
            obj.rate = message.rate.map(e => e);
        }
        else {
            obj.rate = [];
        }
        obj.prev = message.prev ? message.prev.toString() : undefined;
        obj.next = message.next ? message.next.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBookendsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBookendsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBookendsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBookendsResponse",
            value: QueryBookendsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHistoryRequest() {
    return {
        pair: "",
        length: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryHistoryRequest();
        message.pair = object.pair ?? "";
        message.length = object.length ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pair: object.pair,
            length: object.length,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pair = message.pair;
        obj.length = message.length;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryHistoryRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryHistoryRequest.decode(message.value);
    },
    toProto(message) {
        return QueryHistoryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryHistoryRequest",
            value: QueryHistoryRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHistoryResponse() {
    return {
        history: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.history) {
            OrderResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryHistoryResponse();
        message.history = object.history?.map(e => OrderResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            history: Array.isArray(object?.history) ? object.history.map((e) => OrderResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.history) {
            obj.history = message.history.map(e => e ? OrderResponse.toAmino(e) : undefined);
        }
        else {
            obj.history = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryHistoryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryHistoryResponse.decode(message.value);
    },
    toProto(message) {
        return QueryHistoryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryHistoryResponse",
            value: QueryHistoryResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map