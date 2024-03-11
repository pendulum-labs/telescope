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
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDenomTracesResponse = exports.QueryDenomTracesRequest = exports.QueryDenomTraceResponse = exports.QueryDenomTraceRequest = void 0;
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const transfer_1 = require("./transfer");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryDenomTraceRequest() {
    return {
        hash: ""
    };
}
exports.QueryDenomTraceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceRequest();
        message.hash = object.hash ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomTraceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceRequest",
            value: exports.QueryDenomTraceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTraceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTraceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
            value: exports.QueryDenomTraceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTraceResponse() {
    return {
        denomTrace: transfer_1.DenomTrace.fromPartial({})
    };
}
exports.QueryDenomTraceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denomTrace !== undefined) {
            transfer_1.DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTrace = transfer_1.DenomTrace.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceResponse();
        message.denomTrace = object.denomTrace !== undefined && object.denomTrace !== null ? transfer_1.DenomTrace.fromPartial(object.denomTrace) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denomTrace: object?.denom_trace ? transfer_1.DenomTrace.fromAmino(object.denom_trace) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_trace = message.denomTrace ? transfer_1.DenomTrace.toAmino(message.denomTrace) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomTraceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceResponse",
            value: exports.QueryDenomTraceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTraceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTraceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
            value: exports.QueryDenomTraceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTracesRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryDenomTracesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesRequest();
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
        const message = createBaseQueryDenomTracesRequest();
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
        return exports.QueryDenomTracesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesRequest",
            value: exports.QueryDenomTracesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTracesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTracesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
            value: exports.QueryDenomTracesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTracesResponse() {
    return {
        denomTraces: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryDenomTracesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denomTraces) {
            transfer_1.DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomTraces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
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
        const message = createBaseQueryDenomTracesResponse();
        message.denomTraces = object.denomTraces?.map(e => transfer_1.DenomTrace.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denomTraces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => transfer_1.DenomTrace.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denomTraces) {
            obj.denom_traces = message.denomTraces.map(e => e ? transfer_1.DenomTrace.toAmino(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomTracesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesResponse",
            value: exports.QueryDenomTracesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTracesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTracesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
            value: exports.QueryDenomTracesResponse.encode(message).finish()
        };
    }
};
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: transfer_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? transfer_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? transfer_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? transfer_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map