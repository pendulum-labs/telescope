"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBookendsResponse = exports.QueryBookendsRequest = exports.QueryBookResponse = exports.QueryBookRequest = exports.QueryOrderOwnerPairResponse = exports.QueryOrderOwnerPairRequest = exports.QueryOrderOwnerUidsResponse = exports.QueryOrderOwnerRequest = exports.QueryAllOrderRequest = exports.QueryOrdersResponse = exports.QueryOrderResponse = exports.QueryOrderRequest = exports.QueryAllBurningsResponse = exports.QueryAllBurningsRequest = exports.QueryGetBurningsResponse = exports.QueryGetBurningsRequest = exports.QueryAllMemberResponse = exports.QueryAllMemberRequest = exports.QueryGetMemberResponse = exports.QueryGetMemberRequest = exports.QueryDropsResponse = exports.QueryAllDropRequest = exports.QueryDropOwnerPairDetailRequest = exports.QueryUidsResponse = exports.QueryDropOwnerPairUidsRequest = exports.QueryDropOwnerPairSumResponse = exports.QueryDropOwnerPairSumRequest = exports.QueryDropOwnerPairRequest = exports.QueryDropPairsResponse = exports.QueryDropPairsRequest = exports.QueryDropsToCoinsResponse = exports.QueryDropsToCoinsRequest = exports.QueryDropAmountsResponse = exports.QueryDropAmountsRequest = exports.QueryDropResponse = exports.QueryDropCoinResponse = exports.QueryDropCoinRequest = exports.QueryDropRequest = exports.QueryBurnedResponse = exports.QueryBurnedRequest = exports.QueryAllVolumeResponse = exports.QueryAllVolumeRequest = exports.QueryVolumeResponse = exports.QueryVolumeRequest = exports.QueryAllPoolResponse = exports.QueryAllPoolRequest = exports.QueryGetPoolResponse = exports.QueryGetPoolRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
exports.QueryQuoteResponse = exports.QueryQuoteRequest = exports.QueryHistoryResponse = exports.QueryHistoryRequest = void 0;
const pagination_1 = require("../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const pool_1 = require("./pool");
const drop_1 = require("./drop");
const member_1 = require("./member");
const burnings_1 = require("./burnings");
const order_1 = require("./order");
const helpers_1 = require("../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetPoolRequest() {
    return {
        pair: ""
    };
}
exports.QueryGetPoolRequest = {
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
        return exports.QueryGetPoolRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetPoolRequest",
            value: exports.QueryGetPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetPoolResponse() {
    return {
        pool: pool_1.Pool.fromPartial({})
    };
}
exports.QueryGetPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pool !== undefined) {
            pool_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
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
                    message.pool = pool_1.Pool.decode(reader, reader.uint32());
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
        message.pool = object.pool !== undefined && object.pool !== null ? pool_1.Pool.fromPartial(object.pool) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pool: object?.pool ? pool_1.Pool.fromAmino(object.pool) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? pool_1.Pool.toAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetPoolResponse",
            value: exports.QueryGetPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllPoolRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAllPoolRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllPoolRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllPoolRequest",
            value: exports.QueryAllPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllPoolResponse() {
    return {
        pool: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAllPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pool) {
            pool_1.Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pool.push(pool_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.pool = object.pool?.map(e => pool_1.Pool.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pool: Array.isArray(object?.pool) ? object.pool.map((e) => pool_1.Pool.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? pool_1.Pool.toAmino(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllPoolResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllPoolResponse",
            value: exports.QueryAllPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVolumeRequest() {
    return {
        denom: ""
    };
}
exports.QueryVolumeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVolumeRequest();
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
        const message = createBaseQueryVolumeRequest();
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
        return exports.QueryVolumeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVolumeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVolumeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryVolumeRequest",
            value: exports.QueryVolumeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVolumeResponse() {
    return {
        amount: ""
    };
}
exports.QueryVolumeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVolumeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryVolumeResponse();
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVolumeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryVolumeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVolumeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryVolumeResponse",
            value: exports.QueryVolumeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllVolumeRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAllVolumeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVolumeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllVolumeRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllVolumeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllVolumeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllVolumeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllVolumeRequest",
            value: exports.QueryAllVolumeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllVolumeResponse() {
    return {
        volumes: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAllVolumeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.volumes) {
            pool_1.Volume.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllVolumeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volumes.push(pool_1.Volume.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAllVolumeResponse();
        message.volumes = object.volumes?.map(e => pool_1.Volume.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            volumes: Array.isArray(object?.volumes) ? object.volumes.map((e) => pool_1.Volume.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.volumes) {
            obj.volumes = message.volumes.map(e => e ? pool_1.Volume.toAmino(e) : undefined);
        }
        else {
            obj.volumes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllVolumeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllVolumeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllVolumeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllVolumeResponse",
            value: exports.QueryAllVolumeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBurnedRequest() {
    return {};
}
exports.QueryBurnedRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBurnedRequest();
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
        const message = createBaseQueryBurnedRequest();
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
        return exports.QueryBurnedRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBurnedRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBurnedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBurnedRequest",
            value: exports.QueryBurnedRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBurnedResponse() {
    return {
        denom: "",
        amount: ""
    };
}
exports.QueryBurnedResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBurnedResponse();
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
    fromPartial(object) {
        const message = createBaseQueryBurnedResponse();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBurnedResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBurnedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBurnedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBurnedResponse",
            value: exports.QueryBurnedResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropRequest() {
    return {
        uid: helpers_1.Long.UZERO
    };
}
exports.QueryDropRequest = {
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
        message.uid = object.uid !== undefined && object.uid !== null ? helpers_1.Long.fromValue(object.uid) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: helpers_1.Long.fromString(object.uid)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDropRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropRequest",
            value: exports.QueryDropRequest.encode(message).finish()
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
exports.QueryDropCoinRequest = {
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
        return exports.QueryDropCoinRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropCoinRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropCoinRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropCoinRequest",
            value: exports.QueryDropCoinRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropCoinResponse() {
    return {
        drops: "",
        amountB: ""
    };
}
exports.QueryDropCoinResponse = {
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
        return exports.QueryDropCoinResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropCoinResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropCoinResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropCoinResponse",
            value: exports.QueryDropCoinResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropResponse() {
    return {
        drop: drop_1.Drop.fromPartial({})
    };
}
exports.QueryDropResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.drop !== undefined) {
            drop_1.Drop.encode(message.drop, writer.uint32(10).fork()).ldelim();
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
                    message.drop = drop_1.Drop.decode(reader, reader.uint32());
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
        message.drop = object.drop !== undefined && object.drop !== null ? drop_1.Drop.fromPartial(object.drop) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            drop: object?.drop ? drop_1.Drop.fromAmino(object.drop) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.drop = message.drop ? drop_1.Drop.toAmino(message.drop) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropResponse",
            value: exports.QueryDropResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropAmountsRequest() {
    return {
        uid: helpers_1.Long.UZERO
    };
}
exports.QueryDropAmountsRequest = {
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
        message.uid = object.uid !== undefined && object.uid !== null ? helpers_1.Long.fromValue(object.uid) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: helpers_1.Long.fromString(object.uid)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDropAmountsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropAmountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropAmountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropAmountsRequest",
            value: exports.QueryDropAmountsRequest.encode(message).finish()
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
exports.QueryDropAmountsResponse = {
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
        return exports.QueryDropAmountsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropAmountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropAmountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropAmountsResponse",
            value: exports.QueryDropAmountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropsToCoinsRequest() {
    return {
        denom1: "",
        denom2: "",
        drops: ""
    };
}
exports.QueryDropsToCoinsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom1 !== "") {
            writer.uint32(10).string(message.denom1);
        }
        if (message.denom2 !== "") {
            writer.uint32(18).string(message.denom2);
        }
        if (message.drops !== "") {
            writer.uint32(26).string(message.drops);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDropsToCoinsRequest();
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
                    message.drops = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDropsToCoinsRequest();
        message.denom1 = object.denom1 ?? "";
        message.denom2 = object.denom2 ?? "";
        message.drops = object.drops ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom1: object.denom1,
            denom2: object.denom2,
            drops: object.drops
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom1 = message.denom1;
        obj.denom2 = message.denom2;
        obj.drops = message.drops;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDropsToCoinsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropsToCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropsToCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropsToCoinsRequest",
            value: exports.QueryDropsToCoinsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropsToCoinsResponse() {
    return {
        denom1: "",
        amount1: "",
        denom2: "",
        amount2: ""
    };
}
exports.QueryDropsToCoinsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom1 !== "") {
            writer.uint32(10).string(message.denom1);
        }
        if (message.amount1 !== "") {
            writer.uint32(18).string(message.amount1);
        }
        if (message.denom2 !== "") {
            writer.uint32(26).string(message.denom2);
        }
        if (message.amount2 !== "") {
            writer.uint32(34).string(message.amount2);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDropsToCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom1 = reader.string();
                    break;
                case 2:
                    message.amount1 = reader.string();
                    break;
                case 3:
                    message.denom2 = reader.string();
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
        const message = createBaseQueryDropsToCoinsResponse();
        message.denom1 = object.denom1 ?? "";
        message.amount1 = object.amount1 ?? "";
        message.denom2 = object.denom2 ?? "";
        message.amount2 = object.amount2 ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom1: object.denom1,
            amount1: object.amount1,
            denom2: object.denom2,
            amount2: object.amount2
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom1 = message.denom1;
        obj.amount1 = message.amount1;
        obj.denom2 = message.denom2;
        obj.amount2 = message.amount2;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDropsToCoinsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropsToCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropsToCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropsToCoinsResponse",
            value: exports.QueryDropsToCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropPairsRequest() {
    return {
        address: ""
    };
}
exports.QueryDropPairsRequest = {
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
        return exports.QueryDropPairsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropPairsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropPairsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropPairsRequest",
            value: exports.QueryDropPairsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropPairsResponse() {
    return {
        pairs: []
    };
}
exports.QueryDropPairsResponse = {
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
        return exports.QueryDropPairsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropPairsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropPairsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropPairsResponse",
            value: exports.QueryDropPairsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairRequest() {
    return {
        address: "",
        pair: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDropOwnerPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pair !== "") {
            writer.uint32(18).string(message.pair);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pair: object.pair,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pair = message.pair;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDropOwnerPairRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropOwnerPairRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropOwnerPairRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairRequest",
            value: exports.QueryDropOwnerPairRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairSumRequest() {
    return {
        address: "",
        pair: ""
    };
}
exports.QueryDropOwnerPairSumRequest = {
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
        return exports.QueryDropOwnerPairSumRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropOwnerPairSumRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropOwnerPairSumRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairSumRequest",
            value: exports.QueryDropOwnerPairSumRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairSumResponse() {
    return {
        sum: ""
    };
}
exports.QueryDropOwnerPairSumResponse = {
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
        return exports.QueryDropOwnerPairSumResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropOwnerPairSumResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropOwnerPairSumResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairSumResponse",
            value: exports.QueryDropOwnerPairSumResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairUidsRequest() {
    return {
        address: "",
        pair: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDropOwnerPairUidsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pair !== "") {
            writer.uint32(18).string(message.pair);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pair: object.pair,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pair = message.pair;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDropOwnerPairUidsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropOwnerPairUidsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropOwnerPairUidsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairUidsRequest",
            value: exports.QueryDropOwnerPairUidsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUidsResponse() {
    return {
        uids: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryUidsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.uids) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.uids = object.uids?.map(e => helpers_1.Long.fromValue(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            uids: Array.isArray(object?.uids) ? object.uids.map((e) => e) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUidsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryUidsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUidsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryUidsResponse",
            value: exports.QueryUidsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDropOwnerPairDetailRequest() {
    return {
        address: "",
        pair: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDropOwnerPairDetailRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pair !== "") {
            writer.uint32(18).string(message.pair);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pair: object.pair,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pair = message.pair;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDropOwnerPairDetailRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropOwnerPairDetailRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropOwnerPairDetailRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropOwnerPairDetailRequest",
            value: exports.QueryDropOwnerPairDetailRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllDropRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAllDropRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllDropRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllDropRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllDropRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllDropRequest",
            value: exports.QueryAllDropRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDropsResponse() {
    return {
        drops: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryDropsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.drops) {
            drop_1.Drop.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.drops.push(drop_1.Drop.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.drops = object.drops?.map(e => drop_1.Drop.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            drops: Array.isArray(object?.drops) ? object.drops.map((e) => drop_1.Drop.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.drops) {
            obj.drops = message.drops.map(e => e ? drop_1.Drop.toAmino(e) : undefined);
        }
        else {
            obj.drops = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDropsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDropsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDropsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryDropsResponse",
            value: exports.QueryDropsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetMemberRequest() {
    return {
        denomA: "",
        denomB: ""
    };
}
exports.QueryGetMemberRequest = {
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
        return exports.QueryGetMemberRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetMemberRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetMemberRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetMemberRequest",
            value: exports.QueryGetMemberRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetMemberResponse() {
    return {
        member: member_1.Member.fromPartial({})
    };
}
exports.QueryGetMemberResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.member !== undefined) {
            member_1.Member.encode(message.member, writer.uint32(10).fork()).ldelim();
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
                    message.member = member_1.Member.decode(reader, reader.uint32());
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
        message.member = object.member !== undefined && object.member !== null ? member_1.Member.fromPartial(object.member) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            member: object?.member ? member_1.Member.fromAmino(object.member) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.member = message.member ? member_1.Member.toAmino(message.member) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetMemberResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetMemberResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetMemberResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetMemberResponse",
            value: exports.QueryGetMemberResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllMemberRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAllMemberRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllMemberRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllMemberRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllMemberRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllMemberRequest",
            value: exports.QueryAllMemberRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllMemberResponse() {
    return {
        member: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAllMemberResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.member) {
            member_1.Member.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.member.push(member_1.Member.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.member = object.member?.map(e => member_1.Member.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            member: Array.isArray(object?.member) ? object.member.map((e) => member_1.Member.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.member) {
            obj.member = message.member.map(e => e ? member_1.Member.toAmino(e) : undefined);
        }
        else {
            obj.member = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllMemberResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllMemberResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllMemberResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllMemberResponse",
            value: exports.QueryAllMemberResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetBurningsRequest() {
    return {
        denom: ""
    };
}
exports.QueryGetBurningsRequest = {
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
        return exports.QueryGetBurningsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetBurningsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetBurningsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetBurningsRequest",
            value: exports.QueryGetBurningsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetBurningsResponse() {
    return {
        burnings: burnings_1.Burnings.fromPartial({})
    };
}
exports.QueryGetBurningsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.burnings !== undefined) {
            burnings_1.Burnings.encode(message.burnings, writer.uint32(10).fork()).ldelim();
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
                    message.burnings = burnings_1.Burnings.decode(reader, reader.uint32());
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
        message.burnings = object.burnings !== undefined && object.burnings !== null ? burnings_1.Burnings.fromPartial(object.burnings) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            burnings: object?.burnings ? burnings_1.Burnings.fromAmino(object.burnings) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.burnings = message.burnings ? burnings_1.Burnings.toAmino(message.burnings) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetBurningsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetBurningsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetBurningsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetBurningsResponse",
            value: exports.QueryGetBurningsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllBurningsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAllBurningsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllBurningsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllBurningsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllBurningsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllBurningsRequest",
            value: exports.QueryAllBurningsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllBurningsResponse() {
    return {
        burnings: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAllBurningsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.burnings) {
            burnings_1.Burnings.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.burnings.push(burnings_1.Burnings.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.burnings = object.burnings?.map(e => burnings_1.Burnings.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            burnings: Array.isArray(object?.burnings) ? object.burnings.map((e) => burnings_1.Burnings.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.burnings) {
            obj.burnings = message.burnings.map(e => e ? burnings_1.Burnings.toAmino(e) : undefined);
        }
        else {
            obj.burnings = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllBurningsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllBurningsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllBurningsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllBurningsResponse",
            value: exports.QueryAllBurningsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOrderRequest() {
    return {
        uid: helpers_1.Long.UZERO
    };
}
exports.QueryOrderRequest = {
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
        message.uid = object.uid !== undefined && object.uid !== null ? helpers_1.Long.fromValue(object.uid) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            uid: helpers_1.Long.fromString(object.uid)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrderRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderRequest",
            value: exports.QueryOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderResponse() {
    return {
        order: order_1.Order.fromPartial({})
    };
}
exports.QueryOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            order_1.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
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
                    message.order = order_1.Order.decode(reader, reader.uint32());
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
        message.order = object.order !== undefined && object.order !== null ? order_1.Order.fromPartial(object.order) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            order: object?.order ? order_1.Order.fromAmino(object.order) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.order = message.order ? order_1.Order.toAmino(message.order) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderResponse",
            value: exports.QueryOrderResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOrdersResponse() {
    return {
        orders: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.orders) {
            order_1.Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.orders.push(order_1.Order.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.orders = object.orders?.map(e => order_1.Order.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            orders: Array.isArray(object?.orders) ? object.orders.map((e) => order_1.Order.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.orders) {
            obj.orders = message.orders.map(e => e ? order_1.Order.toAmino(e) : undefined);
        }
        else {
            obj.orders = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrdersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrdersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrdersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrdersResponse",
            value: exports.QueryOrdersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllOrderRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAllOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllOrderRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllOrderRequest",
            value: exports.QueryAllOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderOwnerRequest() {
    return {
        address: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryOrderOwnerRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrderOwnerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrderOwnerRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrderOwnerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerRequest",
            value: exports.QueryOrderOwnerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderOwnerUidsResponse() {
    return {
        orders: order_1.Orders.fromPartial({}),
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryOrderOwnerUidsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orders !== undefined) {
            order_1.Orders.encode(message.orders, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.orders = order_1.Orders.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.orders = object.orders !== undefined && object.orders !== null ? order_1.Orders.fromPartial(object.orders) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            orders: object?.orders ? order_1.Orders.fromAmino(object.orders) : undefined,
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.orders = message.orders ? order_1.Orders.toAmino(message.orders) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrderOwnerUidsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrderOwnerUidsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrderOwnerUidsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerUidsResponse",
            value: exports.QueryOrderOwnerUidsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOrderOwnerPairRequest() {
    return {
        address: "",
        pair: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryOrderOwnerPairRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pair !== "") {
            writer.uint32(18).string(message.pair);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pair: object.pair,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pair = message.pair;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrderOwnerPairRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrderOwnerPairRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrderOwnerPairRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerPairRequest",
            value: exports.QueryOrderOwnerPairRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOrderOwnerPairResponse() {
    return {
        order: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryOrderOwnerPairResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.order) {
            order_1.Order.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.order.push(order_1.Order.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.order = object.order?.map(e => order_1.Order.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            order: Array.isArray(object?.order) ? object.order.map((e) => order_1.Order.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.order) {
            obj.order = message.order.map(e => e ? order_1.Order.toAmino(e) : undefined);
        }
        else {
            obj.order = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOrderOwnerPairResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOrderOwnerPairResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOrderOwnerPairResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryOrderOwnerPairResponse",
            value: exports.QueryOrderOwnerPairResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBookRequest() {
    return {
        denomA: "",
        denomB: "",
        orderType: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryBookRequest = {
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
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denomA: object.denomA,
            denomB: object.denomB,
            orderType: object.orderType,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denomA = message.denomA;
        obj.denomB = message.denomB;
        obj.orderType = message.orderType;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBookRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBookRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBookRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBookRequest",
            value: exports.QueryBookRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBookResponse() {
    return {
        book: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.book) {
            order_1.OrderResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.book.push(order_1.OrderResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.book = object.book?.map(e => order_1.OrderResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            book: Array.isArray(object?.book) ? object.book.map((e) => order_1.OrderResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.book) {
            obj.book = message.book.map(e => e ? order_1.OrderResponse.toAmino(e) : undefined);
        }
        else {
            obj.book = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBookResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBookResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBookResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBookResponse",
            value: exports.QueryBookResponse.encode(message).finish()
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
exports.QueryBookendsRequest = {
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
        return exports.QueryBookendsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBookendsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBookendsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBookendsRequest",
            value: exports.QueryBookendsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBookendsResponse() {
    return {
        coinA: "",
        coinB: "",
        orderType: "",
        rate: [],
        prev: helpers_1.Long.UZERO,
        next: helpers_1.Long.UZERO
    };
}
exports.QueryBookendsResponse = {
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
        message.prev = object.prev !== undefined && object.prev !== null ? helpers_1.Long.fromValue(object.prev) : helpers_1.Long.UZERO;
        message.next = object.next !== undefined && object.next !== null ? helpers_1.Long.fromValue(object.next) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            coinA: object.coinA,
            coinB: object.coinB,
            orderType: object.orderType,
            rate: Array.isArray(object?.rate) ? object.rate.map((e) => e) : [],
            prev: helpers_1.Long.fromString(object.prev),
            next: helpers_1.Long.fromString(object.next)
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
        return exports.QueryBookendsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBookendsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBookendsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryBookendsResponse",
            value: exports.QueryBookendsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHistoryRequest() {
    return {
        pair: "",
        length: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pair !== "") {
            writer.uint32(10).string(message.pair);
        }
        if (message.length !== "") {
            writer.uint32(18).string(message.length);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pair: object.pair,
            length: object.length,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pair = message.pair;
        obj.length = message.length;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHistoryRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryHistoryRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHistoryRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryHistoryRequest",
            value: exports.QueryHistoryRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHistoryResponse() {
    return {
        history: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.history) {
            order_1.OrderResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.history.push(order_1.OrderResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        message.history = object.history?.map(e => order_1.OrderResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            history: Array.isArray(object?.history) ? object.history.map((e) => order_1.OrderResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.history) {
            obj.history = message.history.map(e => e ? order_1.OrderResponse.toAmino(e) : undefined);
        }
        else {
            obj.history = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHistoryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryHistoryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHistoryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryHistoryResponse",
            value: exports.QueryHistoryResponse.encode(message).finish()
        };
    }
};
function createBaseQueryQuoteRequest() {
    return {
        denomAsk: "",
        denomBid: "",
        denomAmount: "",
        amount: ""
    };
}
exports.QueryQuoteRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryQuoteRequest();
        message.denomAsk = object.denomAsk ?? "";
        message.denomBid = object.denomBid ?? "";
        message.denomAmount = object.denomAmount ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denomAsk: object.denomAsk,
            denomBid: object.denomBid,
            denomAmount: object.denomAmount,
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denomAsk = message.denomAsk;
        obj.denomBid = message.denomBid;
        obj.denomAmount = message.denomAmount;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryQuoteRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryQuoteRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryQuoteRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryQuoteRequest",
            value: exports.QueryQuoteRequest.encode(message).finish()
        };
    }
};
function createBaseQueryQuoteResponse() {
    return {
        denom: "",
        amount: ""
    };
}
exports.QueryQuoteResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
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
    fromPartial(object) {
        const message = createBaseQueryQuoteResponse();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryQuoteResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryQuoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryQuoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryQuoteResponse",
            value: exports.QueryQuoteResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map