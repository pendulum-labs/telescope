import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant } from "./authz";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryGrantsRequest() {
    return {
        granter: "",
        grantee: "",
        msgTypeUrl: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryGrantsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.msgTypeUrl !== "") {
            writer.uint32(26).string(message.msgTypeUrl);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGrantsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.msgTypeUrl = reader.string();
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
        const message = createBaseQueryGrantsRequest();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.msgTypeUrl = object.msgTypeUrl ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            granter: object.granter,
            grantee: object.grantee,
            msgTypeUrl: object.msg_type_url,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.msg_type_url = message.msgTypeUrl;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGrantsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGrantsRequest",
            value: QueryGrantsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGrantsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGrantsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest",
            value: QueryGrantsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGrantsResponse() {
    return {
        grants: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryGrantsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.grants) {
            Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGrantsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grants.push(Grant.decode(reader, reader.uint32()));
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
        const message = createBaseQueryGrantsResponse();
        message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            grants: Array.isArray(object?.grants) ? object.grants.map((e) => Grant.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.grants) {
            obj.grants = message.grants.map(e => e ? Grant.toAmino(e) : undefined);
        }
        else {
            obj.grants = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGrantsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGrantsResponse",
            value: QueryGrantsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGrantsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGrantsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse",
            value: QueryGrantsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map