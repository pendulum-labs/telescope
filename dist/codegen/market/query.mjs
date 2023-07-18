import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Pool } from "./pool";
import { Drop } from "./drop";
import { Member } from "./member";
import { Burnings } from "./burnings";
import { Order, OrderResponse } from "./order";
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
function createBaseQueryGetDropRequest() {
    return {
        uid: Long.UZERO
    };
}
export const QueryGetDropRequest = {
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
        return QueryGetDropRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetDropRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetDropRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetDropRequest",
            value: QueryGetDropRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetDropResponse() {
    return {
        drop: Drop.fromPartial({})
    };
}
export const QueryGetDropResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.drop !== undefined) {
            Drop.encode(message.drop, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryGetDropResponse();
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
        return QueryGetDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetDropResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetDropResponse",
            value: QueryGetDropResponse.encode(message).finish()
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
function createBaseQueryAllDropResponse() {
    return {
        drop: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAllDropResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.drop) {
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
    fromPartial(object) {
        const message = createBaseQueryAllDropResponse();
        message.drop = object.drop?.map(e => Drop.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            drop: Array.isArray(object?.drop) ? object.drop.map((e) => Drop.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.drop) {
            obj.drop = message.drop.map(e => e ? Drop.toAmino(e) : undefined);
        }
        else {
            obj.drop = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllDropResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllDropResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllDropResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllDropResponse",
            value: QueryAllDropResponse.encode(message).finish()
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
function createBaseQueryGetOrderRequest() {
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
        message.uid = object.uid !== undefined && object.uid !== null ? Long.fromValue(object.uid) : Long.UZERO;
        message.owner = object.owner ?? "";
        message.active = object.active ?? false;
        message.orderType = object.orderType ?? "";
        message.denomAsk = object.denomAsk ?? "";
        message.denomBid = object.denomBid ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            uid: Long.fromString(object.uid),
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
        return QueryGetOrderRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetOrderRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetOrderRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetOrderRequest",
            value: QueryGetOrderRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetOrderResponse() {
    return {
        order: Order.fromPartial({})
    };
}
export const QueryGetOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.order !== undefined) {
            Order.encode(message.order, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryGetOrderResponse();
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
        return QueryGetOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetOrderResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryGetOrderResponse",
            value: QueryGetOrderResponse.encode(message).finish()
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
function createBaseQueryAllOrderResponse() {
    return {
        order: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAllOrderResponse = {
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
    fromPartial(object) {
        const message = createBaseQueryAllOrderResponse();
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
        return QueryAllOrderResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllOrderResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllOrderResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/pendulumlabs.market.market.QueryAllOrderResponse",
            value: QueryAllOrderResponse.encode(message).finish()
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
        book: []
    };
}
export const QueryBookResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.book) {
            OrderResponse.encode(v, writer.uint32(10).fork()).ldelim();
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
        return message;
    },
    fromAmino(object) {
        return {
            book: Array.isArray(object?.book) ? object.book.map((e) => OrderResponse.fromAmino(e)) : []
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
//# sourceMappingURL=query.js.map