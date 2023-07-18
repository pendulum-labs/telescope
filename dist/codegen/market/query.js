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
exports.QueryBookendsResponse = exports.QueryBookendsRequest = exports.QueryBookResponse = exports.QueryBookRequest = exports.QueryAllOrderResponse = exports.QueryAllOrderRequest = exports.QueryGetOrderResponse = exports.QueryGetOrderRequest = exports.QueryAllBurningsResponse = exports.QueryAllBurningsRequest = exports.QueryGetBurningsResponse = exports.QueryGetBurningsRequest = exports.QueryAllMemberResponse = exports.QueryAllMemberRequest = exports.QueryGetMemberResponse = exports.QueryGetMemberRequest = exports.QueryAllDropResponse = exports.QueryAllDropRequest = exports.QueryGetDropResponse = exports.QueryGetDropRequest = exports.QueryAllPoolResponse = exports.QueryAllPoolRequest = exports.QueryGetPoolResponse = exports.QueryGetPoolRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
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
function createBaseQueryGetDropRequest() {
    return {
        uid: helpers_1.Long.UZERO
    };
}
exports.QueryGetDropRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.uid.isZero()) {
            writer.uint32(8).uint64(message.uid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDropRequest();
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
        const message = createBaseQueryGetDropRequest();
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
        return exports.QueryGetDropRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetDropRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetDropRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetDropRequest",
            value: exports.QueryGetDropRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetDropResponse() {
    return {
        drop: drop_1.Drop.fromPartial({})
    };
}
exports.QueryGetDropResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.drop !== undefined) {
            drop_1.Drop.encode(message.drop, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDropResponse();
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
        const message = createBaseQueryGetDropResponse();
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
        return exports.QueryGetDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetDropResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetDropResponse",
            value: exports.QueryGetDropResponse.encode(message).finish()
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
function createBaseQueryAllDropResponse() {
    return {
        drop: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAllDropResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.drop) {
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
        const message = createBaseQueryAllDropResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.drop.push(drop_1.Drop.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAllDropResponse();
        message.drop = object.drop?.map(e => drop_1.Drop.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            drop: Array.isArray(object?.drop) ? object.drop.map((e) => drop_1.Drop.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.drop) {
            obj.drop = message.drop.map(e => e ? drop_1.Drop.toAmino(e) : undefined);
        }
        else {
            obj.drop = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllDropResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllDropResponse",
            value: exports.QueryAllDropResponse.encode(message).finish()
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
function createBaseQueryGetOrderRequest() {
    return {
        uid: helpers_1.Long.UZERO,
        owner: "",
        active: false,
        orderType: "",
        denomAsk: "",
        denomBid: ""
    };
}
exports.QueryGetOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint64();
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
    fromPartial(object) {
        const message = createBaseQueryGetOrderRequest();
        message.uid = object.uid !== undefined && object.uid !== null ? helpers_1.Long.fromValue(object.uid) : helpers_1.Long.UZERO;
        message.owner = object.owner ?? "";
        message.active = object.active ?? false;
        message.orderType = object.orderType ?? "";
        message.denomAsk = object.denomAsk ?? "";
        message.denomBid = object.denomBid ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            uid: helpers_1.Long.fromString(object.uid),
            owner: object.owner,
            active: object.active,
            orderType: object.orderType,
            denomAsk: object.denomAsk,
            denomBid: object.denomBid
        };
    },
    toAmino(message) {
        const obj = {};
        obj.uid = message.uid ? message.uid.toString() : undefined;
        obj.owner = message.owner;
        obj.active = message.active;
        obj.orderType = message.orderType;
        obj.denomAsk = message.denomAsk;
        obj.denomBid = message.denomBid;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetOrderRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetOrderRequest",
            value: exports.QueryGetOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetOrderResponse() {
    return {
        order: order_1.Order.fromPartial({})
    };
}
exports.QueryGetOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            order_1.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetOrderResponse();
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
        const message = createBaseQueryGetOrderResponse();
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
        return exports.QueryGetOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetOrderResponse",
            value: exports.QueryGetOrderResponse.encode(message).finish()
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
function createBaseQueryAllOrderResponse() {
    return {
        order: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAllOrderResponse = {
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
        const message = createBaseQueryAllOrderResponse();
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
        const message = createBaseQueryAllOrderResponse();
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
        return exports.QueryAllOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllOrderResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllOrderResponse",
            value: exports.QueryAllOrderResponse.encode(message).finish()
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
        book: []
    };
}
exports.QueryBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.book) {
            order_1.OrderResponse.encode(v, writer.uint32(10).fork()).ldelim();
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
        return message;
    },
    fromAmino(object) {
        return {
            book: Array.isArray(object?.book) ? object.book.map((e) => order_1.OrderResponse.fromAmino(e)) : []
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
//# sourceMappingURL=query.js.map