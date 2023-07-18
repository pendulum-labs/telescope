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
exports.QueryPendingSendToEthResponse = exports.QueryPendingSendToEth = exports.QueryDelegateKeysByOrchestratorAddressResponse = exports.QueryDelegateKeysByOrchestratorAddress = exports.QueryDelegateKeysByEthAddressResponse = exports.QueryDelegateKeysByEthAddress = exports.QueryDelegateKeysByValidatorAddressResponse = exports.QueryDelegateKeysByValidatorAddress = exports.QueryAttestationsResponse = exports.QueryAttestationsRequest = exports.QueryDenomToERC20Response = exports.QueryDenomToERC20Request = exports.QueryERC20ToDenomResponse = exports.QueryERC20ToDenomRequest = exports.QueryLastEventNonceByAddrResponse = exports.QueryLastEventNonceByAddrRequest = exports.QueryLogicConfirmsResponse = exports.QueryLogicConfirmsRequest = exports.QueryBatchConfirmsResponse = exports.QueryBatchConfirmsRequest = exports.QueryBatchRequestByNonceResponse = exports.QueryBatchRequestByNonceRequest = exports.QueryOutgoingLogicCallsResponse = exports.QueryOutgoingLogicCallsRequest = exports.QueryOutgoingTxBatchesResponse = exports.QueryOutgoingTxBatchesRequest = exports.QueryLastPendingLogicCallByAddrResponse = exports.QueryLastPendingLogicCallByAddrRequest = exports.QueryLastPendingBatchRequestByAddrResponse = exports.QueryLastPendingBatchRequestByAddrRequest = exports.QueryBatchFeeResponse = exports.QueryBatchFeeRequest = exports.QueryLastPendingValsetRequestByAddrResponse = exports.QueryLastPendingValsetRequestByAddrRequest = exports.QueryLastValsetRequestsResponse = exports.QueryLastValsetRequestsRequest = exports.QueryValsetConfirmsByNonceResponse = exports.QueryValsetConfirmsByNonceRequest = exports.QueryValsetConfirmResponse = exports.QueryValsetConfirmRequest = exports.QueryValsetRequestResponse = exports.QueryValsetRequestRequest = exports.QueryCurrentValsetResponse = exports.QueryCurrentValsetRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
const genesis_1 = require("./genesis");
const types_1 = require("./types");
const msgs_1 = require("./msgs");
const pool_1 = require("./pool");
const batch_1 = require("./batch");
const attestation_1 = require("./attestation");
const helpers_1 = require("../../helpers");
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
            typeUrl: "/gravity.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: genesis_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
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
        message.params = object.params !== undefined && object.params !== null ? genesis_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? genesis_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? genesis_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/gravity.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentValsetRequest() {
    return {};
}
exports.QueryCurrentValsetRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetRequest();
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
        const message = createBaseQueryCurrentValsetRequest();
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
        return exports.QueryCurrentValsetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentValsetRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentValsetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryCurrentValsetRequest",
            value: exports.QueryCurrentValsetRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentValsetResponse() {
    return {
        valset: types_1.Valset.fromPartial({})
    };
}
exports.QueryCurrentValsetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valset !== undefined) {
            types_1.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentValsetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = types_1.Valset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentValsetResponse();
        message.valset = object.valset !== undefined && object.valset !== null ? types_1.Valset.fromPartial(object.valset) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            valset: object?.valset ? types_1.Valset.fromAmino(object.valset) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valset = message.valset ? types_1.Valset.toAmino(message.valset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentValsetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentValsetResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentValsetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryCurrentValsetResponse",
            value: exports.QueryCurrentValsetResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetRequestRequest() {
    return {
        nonce: helpers_1.Long.UZERO
    };
}
exports.QueryValsetRequestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            nonce: helpers_1.Long.fromString(object.nonce)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValsetRequestRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetRequestRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetRequestRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetRequestRequest",
            value: exports.QueryValsetRequestRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetRequestResponse() {
    return {
        valset: types_1.Valset.fromPartial({})
    };
}
exports.QueryValsetRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valset !== undefined) {
            types_1.Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetRequestResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valset = types_1.Valset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetRequestResponse();
        message.valset = object.valset !== undefined && object.valset !== null ? types_1.Valset.fromPartial(object.valset) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            valset: object?.valset ? types_1.Valset.fromAmino(object.valset) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valset = message.valset ? types_1.Valset.toAmino(message.valset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValsetRequestResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetRequestResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetRequestResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetRequestResponse",
            value: exports.QueryValsetRequestResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmRequest() {
    return {
        nonce: helpers_1.Long.UZERO,
        address: ""
    };
}
exports.QueryValsetConfirmRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
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
        const message = createBaseQueryValsetConfirmRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO;
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: helpers_1.Long.fromString(object.nonce),
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValsetConfirmRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetConfirmRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetConfirmRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetConfirmRequest",
            value: exports.QueryValsetConfirmRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmResponse() {
    return {
        confirm: msgs_1.MsgValsetConfirm.fromPartial({})
    };
}
exports.QueryValsetConfirmResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.confirm !== undefined) {
            msgs_1.MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirm = msgs_1.MsgValsetConfirm.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmResponse();
        message.confirm = object.confirm !== undefined && object.confirm !== null ? msgs_1.MsgValsetConfirm.fromPartial(object.confirm) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            confirm: object?.confirm ? msgs_1.MsgValsetConfirm.fromAmino(object.confirm) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.confirm = message.confirm ? msgs_1.MsgValsetConfirm.toAmino(message.confirm) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValsetConfirmResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetConfirmResponse",
            value: exports.QueryValsetConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return {
        nonce: helpers_1.Long.UZERO
    };
}
exports.QueryValsetConfirmsByNonceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmsByNonceRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            nonce: helpers_1.Long.fromString(object.nonce)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValsetConfirmsByNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetConfirmsByNonceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetConfirmsByNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceRequest",
            value: exports.QueryValsetConfirmsByNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmsByNonceResponse() {
    return {
        confirms: []
    };
}
exports.QueryValsetConfirmsByNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(msgs_1.MsgValsetConfirm.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryValsetConfirmsByNonceResponse();
        message.confirms = object.confirms?.map(e => msgs_1.MsgValsetConfirm.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            confirms: Array.isArray(object?.confirms) ? object.confirms.map((e) => msgs_1.MsgValsetConfirm.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? msgs_1.MsgValsetConfirm.toAmino(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValsetConfirmsByNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryValsetConfirmsByNonceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValsetConfirmsByNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceResponse",
            value: exports.QueryValsetConfirmsByNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
exports.QueryLastValsetRequestsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsRequest();
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
        const message = createBaseQueryLastValsetRequestsRequest();
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
        return exports.QueryLastValsetRequestsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastValsetRequestsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastValsetRequestsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastValsetRequestsRequest",
            value: exports.QueryLastValsetRequestsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastValsetRequestsResponse() {
    return {
        valsets: []
    };
}
exports.QueryLastValsetRequestsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastValsetRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastValsetRequestsResponse();
        message.valsets = object.valsets?.map(e => types_1.Valset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            valsets: Array.isArray(object?.valsets) ? object.valsets.map((e) => types_1.Valset.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? types_1.Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastValsetRequestsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastValsetRequestsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastValsetRequestsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastValsetRequestsResponse",
            value: exports.QueryLastValsetRequestsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return {
        address: ""
    };
}
exports.QueryLastPendingValsetRequestByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
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
        const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
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
        return exports.QueryLastPendingValsetRequestByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingValsetRequestByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingValsetRequestByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrRequest",
            value: exports.QueryLastPendingValsetRequestByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingValsetRequestByAddrResponse() {
    return {
        valsets: []
    };
}
exports.QueryLastPendingValsetRequestByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
        message.valsets = object.valsets?.map(e => types_1.Valset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            valsets: Array.isArray(object?.valsets) ? object.valsets.map((e) => types_1.Valset.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? types_1.Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastPendingValsetRequestByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingValsetRequestByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingValsetRequestByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrResponse",
            value: exports.QueryLastPendingValsetRequestByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
exports.QueryBatchFeeRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeRequest();
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
        const message = createBaseQueryBatchFeeRequest();
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
        return exports.QueryBatchFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchFeeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchFeeRequest",
            value: exports.QueryBatchFeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchFeeResponse() {
    return {
        batchFees: []
    };
}
exports.QueryBatchFeeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batchFees) {
            pool_1.BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchFeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchFees.push(pool_1.BatchFees.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchFeeResponse();
        message.batchFees = object.batchFees?.map(e => pool_1.BatchFees.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            batchFees: Array.isArray(object?.batch_fees) ? object.batch_fees.map((e) => pool_1.BatchFees.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.batchFees) {
            obj.batch_fees = message.batchFees.map(e => e ? pool_1.BatchFees.toAmino(e) : undefined);
        }
        else {
            obj.batch_fees = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchFeeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchFeeResponse",
            value: exports.QueryBatchFeeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return {
        address: ""
    };
}
exports.QueryLastPendingBatchRequestByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
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
        const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
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
        return exports.QueryLastPendingBatchRequestByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingBatchRequestByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingBatchRequestByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrRequest",
            value: exports.QueryLastPendingBatchRequestByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingBatchRequestByAddrResponse() {
    return {
        batch: []
    };
}
exports.QueryLastPendingBatchRequestByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batch) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
        message.batch = object.batch?.map(e => batch_1.OutgoingTxBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            batch: Array.isArray(object?.batch) ? object.batch.map((e) => batch_1.OutgoingTxBatch.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.batch) {
            obj.batch = message.batch.map(e => e ? batch_1.OutgoingTxBatch.toAmino(e) : undefined);
        }
        else {
            obj.batch = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastPendingBatchRequestByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingBatchRequestByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingBatchRequestByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrResponse",
            value: exports.QueryLastPendingBatchRequestByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingLogicCallByAddrRequest() {
    return {
        address: ""
    };
}
exports.QueryLastPendingLogicCallByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingLogicCallByAddrRequest();
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
        const message = createBaseQueryLastPendingLogicCallByAddrRequest();
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
        return exports.QueryLastPendingLogicCallByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingLogicCallByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingLogicCallByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrRequest",
            value: exports.QueryLastPendingLogicCallByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingLogicCallByAddrResponse() {
    return {
        call: []
    };
}
exports.QueryLastPendingLogicCallByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.call) {
            batch_1.OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastPendingLogicCallByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.call.push(batch_1.OutgoingLogicCall.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastPendingLogicCallByAddrResponse();
        message.call = object.call?.map(e => batch_1.OutgoingLogicCall.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            call: Array.isArray(object?.call) ? object.call.map((e) => batch_1.OutgoingLogicCall.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.call) {
            obj.call = message.call.map(e => e ? batch_1.OutgoingLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.call = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastPendingLogicCallByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastPendingLogicCallByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastPendingLogicCallByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrResponse",
            value: exports.QueryLastPendingLogicCallByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
exports.QueryOutgoingTxBatchesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesRequest();
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
        const message = createBaseQueryOutgoingTxBatchesRequest();
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
        return exports.QueryOutgoingTxBatchesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOutgoingTxBatchesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOutgoingTxBatchesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryOutgoingTxBatchesRequest",
            value: exports.QueryOutgoingTxBatchesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingTxBatchesResponse() {
    return {
        batches: []
    };
}
exports.QueryOutgoingTxBatchesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batches) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingTxBatchesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batches.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOutgoingTxBatchesResponse();
        message.batches = object.batches?.map(e => batch_1.OutgoingTxBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            batches: Array.isArray(object?.batches) ? object.batches.map((e) => batch_1.OutgoingTxBatch.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? batch_1.OutgoingTxBatch.toAmino(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOutgoingTxBatchesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOutgoingTxBatchesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOutgoingTxBatchesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryOutgoingTxBatchesResponse",
            value: exports.QueryOutgoingTxBatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingLogicCallsRequest() {
    return {};
}
exports.QueryOutgoingLogicCallsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingLogicCallsRequest();
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
        const message = createBaseQueryOutgoingLogicCallsRequest();
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
        return exports.QueryOutgoingLogicCallsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOutgoingLogicCallsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOutgoingLogicCallsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryOutgoingLogicCallsRequest",
            value: exports.QueryOutgoingLogicCallsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingLogicCallsResponse() {
    return {
        calls: []
    };
}
exports.QueryOutgoingLogicCallsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.calls) {
            batch_1.OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOutgoingLogicCallsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.calls.push(batch_1.OutgoingLogicCall.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryOutgoingLogicCallsResponse();
        message.calls = object.calls?.map(e => batch_1.OutgoingLogicCall.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            calls: Array.isArray(object?.calls) ? object.calls.map((e) => batch_1.OutgoingLogicCall.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.calls) {
            obj.calls = message.calls.map(e => e ? batch_1.OutgoingLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.calls = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryOutgoingLogicCallsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryOutgoingLogicCallsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryOutgoingLogicCallsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryOutgoingLogicCallsResponse",
            value: exports.QueryOutgoingLogicCallsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequestByNonceRequest() {
    return {
        nonce: helpers_1.Long.UZERO,
        contractAddress: ""
    };
}
exports.QueryBatchRequestByNonceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchRequestByNonceRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO;
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: helpers_1.Long.fromString(object.nonce),
            contractAddress: object.contract_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        obj.contract_address = message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchRequestByNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchRequestByNonceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchRequestByNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchRequestByNonceRequest",
            value: exports.QueryBatchRequestByNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequestByNonceResponse() {
    return {
        batch: batch_1.OutgoingTxBatch.fromPartial({})
    };
}
exports.QueryBatchRequestByNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.batch !== undefined) {
            batch_1.OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchRequestByNonceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = batch_1.OutgoingTxBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchRequestByNonceResponse();
        message.batch = object.batch !== undefined && object.batch !== null ? batch_1.OutgoingTxBatch.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            batch: object?.batch ? batch_1.OutgoingTxBatch.fromAmino(object.batch) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? batch_1.OutgoingTxBatch.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchRequestByNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchRequestByNonceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchRequestByNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchRequestByNonceResponse",
            value: exports.QueryBatchRequestByNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchConfirmsRequest() {
    return {
        nonce: helpers_1.Long.UZERO,
        contractAddress: ""
    };
}
exports.QueryBatchConfirmsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.contractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchConfirmsRequest();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO;
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: helpers_1.Long.fromString(object.nonce),
            contractAddress: object.contract_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        obj.contract_address = message.contractAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchConfirmsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchConfirmsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchConfirmsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchConfirmsRequest",
            value: exports.QueryBatchConfirmsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchConfirmsResponse() {
    return {
        confirms: []
    };
}
exports.QueryBatchConfirmsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBatchConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(msgs_1.MsgConfirmBatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBatchConfirmsResponse();
        message.confirms = object.confirms?.map(e => msgs_1.MsgConfirmBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            confirms: Array.isArray(object?.confirms) ? object.confirms.map((e) => msgs_1.MsgConfirmBatch.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? msgs_1.MsgConfirmBatch.toAmino(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryBatchConfirmsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryBatchConfirmsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryBatchConfirmsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchConfirmsResponse",
            value: exports.QueryBatchConfirmsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLogicConfirmsRequest() {
    return {
        invalidationId: new Uint8Array(),
        invalidationNonce: helpers_1.Long.UZERO
    };
}
exports.QueryLogicConfirmsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.invalidationId.length !== 0) {
            writer.uint32(10).bytes(message.invalidationId);
        }
        if (!message.invalidationNonce.isZero()) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLogicConfirmsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invalidationId = reader.bytes();
                    break;
                case 2:
                    message.invalidationNonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLogicConfirmsRequest();
        message.invalidationId = object.invalidationId ?? new Uint8Array();
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? helpers_1.Long.fromValue(object.invalidationNonce) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            invalidationId: object.invalidation_id,
            invalidationNonce: helpers_1.Long.fromString(object.invalidation_nonce)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.invalidation_id = message.invalidationId;
        obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLogicConfirmsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLogicConfirmsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLogicConfirmsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLogicConfirmsRequest",
            value: exports.QueryLogicConfirmsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLogicConfirmsResponse() {
    return {
        confirms: []
    };
}
exports.QueryLogicConfirmsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            msgs_1.MsgConfirmLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLogicConfirmsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.confirms.push(msgs_1.MsgConfirmLogicCall.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLogicConfirmsResponse();
        message.confirms = object.confirms?.map(e => msgs_1.MsgConfirmLogicCall.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            confirms: Array.isArray(object?.confirms) ? object.confirms.map((e) => msgs_1.MsgConfirmLogicCall.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? msgs_1.MsgConfirmLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLogicConfirmsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLogicConfirmsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLogicConfirmsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLogicConfirmsResponse",
            value: exports.QueryLogicConfirmsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastEventNonceByAddrRequest() {
    return {
        address: ""
    };
}
exports.QueryLastEventNonceByAddrRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventNonceByAddrRequest();
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
        const message = createBaseQueryLastEventNonceByAddrRequest();
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
        return exports.QueryLastEventNonceByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastEventNonceByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastEventNonceByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastEventNonceByAddrRequest",
            value: exports.QueryLastEventNonceByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastEventNonceByAddrResponse() {
    return {
        eventNonce: helpers_1.Long.UZERO
    };
}
exports.QueryLastEventNonceByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.eventNonce.isZero()) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastEventNonceByAddrResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryLastEventNonceByAddrResponse();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? helpers_1.Long.fromValue(object.eventNonce) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: helpers_1.Long.fromString(object.event_nonce)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastEventNonceByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryLastEventNonceByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastEventNonceByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastEventNonceByAddrResponse",
            value: exports.QueryLastEventNonceByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryERC20ToDenomRequest() {
    return {
        erc20: ""
    };
}
exports.QueryERC20ToDenomRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryERC20ToDenomRequest();
        message.erc20 = object.erc20 ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            erc20: object.erc20
        };
    },
    toAmino(message) {
        const obj = {};
        obj.erc20 = message.erc20;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryERC20ToDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryERC20ToDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryERC20ToDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryERC20ToDenomRequest",
            value: exports.QueryERC20ToDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryERC20ToDenomResponse() {
    return {
        denom: "",
        cosmosOriginated: false
    };
}
exports.QueryERC20ToDenomResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryERC20ToDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryERC20ToDenomResponse();
        message.denom = object.denom ?? "";
        message.cosmosOriginated = object.cosmosOriginated ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            cosmosOriginated: object.cosmos_originated
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.cosmos_originated = message.cosmosOriginated;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryERC20ToDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryERC20ToDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryERC20ToDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryERC20ToDenomResponse",
            value: exports.QueryERC20ToDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomToERC20Request() {
    return {
        denom: ""
    };
}
exports.QueryDenomToERC20Request = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Request();
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
        const message = createBaseQueryDenomToERC20Request();
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
        return exports.QueryDenomToERC20Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDenomToERC20Request.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomToERC20Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDenomToERC20Request",
            value: exports.QueryDenomToERC20Request.encode(message).finish()
        };
    }
};
function createBaseQueryDenomToERC20Response() {
    return {
        erc20: "",
        cosmosOriginated: false
    };
}
exports.QueryDenomToERC20Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.cosmosOriginated === true) {
            writer.uint32(16).bool(message.cosmosOriginated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomToERC20Response();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                case 2:
                    message.cosmosOriginated = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomToERC20Response();
        message.erc20 = object.erc20 ?? "";
        message.cosmosOriginated = object.cosmosOriginated ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            erc20: object.erc20,
            cosmosOriginated: object.cosmos_originated
        };
    },
    toAmino(message) {
        const obj = {};
        obj.erc20 = message.erc20;
        obj.cosmos_originated = message.cosmosOriginated;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomToERC20Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDenomToERC20Response.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomToERC20Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDenomToERC20Response",
            value: exports.QueryDenomToERC20Response.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsRequest() {
    return {
        limit: helpers_1.Long.UZERO
    };
}
exports.QueryAttestationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.limit.isZero()) {
            writer.uint32(8).uint64(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.limit = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestationsRequest();
        message.limit = object.limit !== undefined && object.limit !== null ? helpers_1.Long.fromValue(object.limit) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            limit: helpers_1.Long.fromString(object.limit)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.limit = message.limit ? message.limit.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestationsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryAttestationsRequest",
            value: exports.QueryAttestationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsResponse() {
    return {
        attestations: []
    };
}
exports.QueryAttestationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.attestations) {
            attestation_1.Attestation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAttestationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attestations.push(attestation_1.Attestation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAttestationsResponse();
        message.attestations = object.attestations?.map(e => attestation_1.Attestation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            attestations: Array.isArray(object?.attestations) ? object.attestations.map((e) => attestation_1.Attestation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? attestation_1.Attestation.toAmino(e) : undefined);
        }
        else {
            obj.attestations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAttestationsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAttestationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAttestationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryAttestationsResponse",
            value: exports.QueryAttestationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByValidatorAddress() {
    return {
        validatorAddress: ""
    };
}
exports.QueryDelegateKeysByValidatorAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByValidatorAddress();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegateKeysByValidatorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByValidatorAddress.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByValidatorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddress",
            value: exports.QueryDelegateKeysByValidatorAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByValidatorAddressResponse() {
    return {
        ethAddress: "",
        orchestratorAddress: ""
    };
}
exports.QueryDelegateKeysByValidatorAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
        message.ethAddress = object.ethAddress ?? "";
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            ethAddress: object.eth_address,
            orchestratorAddress: object.orchestrator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.eth_address = message.ethAddress;
        obj.orchestrator_address = message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegateKeysByValidatorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByValidatorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByValidatorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddressResponse",
            value: exports.QueryDelegateKeysByValidatorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByEthAddress() {
    return {
        ethAddress: ""
    };
}
exports.QueryDelegateKeysByEthAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ethAddress !== "") {
            writer.uint32(10).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByEthAddress();
        message.ethAddress = object.ethAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            ethAddress: object.eth_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.eth_address = message.ethAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegateKeysByEthAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByEthAddress.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByEthAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddress",
            value: exports.QueryDelegateKeysByEthAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByEthAddressResponse() {
    return {
        validatorAddress: "",
        orchestratorAddress: ""
    };
}
exports.QueryDelegateKeysByEthAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.orchestratorAddress !== "") {
            writer.uint32(18).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.orchestratorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByEthAddressResponse();
        message.validatorAddress = object.validatorAddress ?? "";
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            orchestratorAddress: object.orchestrator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.orchestrator_address = message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegateKeysByEthAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByEthAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByEthAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddressResponse",
            value: exports.QueryDelegateKeysByEthAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddress() {
    return {
        orchestratorAddress: ""
    };
}
exports.QueryDelegateKeysByOrchestratorAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.orchestratorAddress !== "") {
            writer.uint32(10).string(message.orchestratorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orchestratorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByOrchestratorAddress();
        message.orchestratorAddress = object.orchestratorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            orchestratorAddress: object.orchestrator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.orchestrator_address = message.orchestratorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegateKeysByOrchestratorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByOrchestratorAddress.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByOrchestratorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddress",
            value: exports.QueryDelegateKeysByOrchestratorAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse() {
    return {
        validatorAddress: "",
        ethAddress: ""
    };
}
exports.QueryDelegateKeysByOrchestratorAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.ethAddress !== "") {
            writer.uint32(18).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.ethAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
        message.validatorAddress = object.validatorAddress ?? "";
        message.ethAddress = object.ethAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address,
            ethAddress: object.eth_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        obj.eth_address = message.ethAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegateKeysByOrchestratorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryDelegateKeysByOrchestratorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse",
            value: exports.QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPendingSendToEth() {
    return {
        senderAddress: ""
    };
}
exports.QueryPendingSendToEth = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderAddress !== "") {
            writer.uint32(10).string(message.senderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPendingSendToEth();
        message.senderAddress = object.senderAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            senderAddress: object.sender_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender_address = message.senderAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPendingSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPendingSendToEth.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPendingSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryPendingSendToEth",
            value: exports.QueryPendingSendToEth.encode(message).finish()
        };
    }
};
function createBaseQueryPendingSendToEthResponse() {
    return {
        transfersInBatches: [],
        unbatchedTransfers: []
    };
}
exports.QueryPendingSendToEthResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.transfersInBatches) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingSendToEthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfersInBatches.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unbatchedTransfers.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryPendingSendToEthResponse();
        message.transfersInBatches = object.transfersInBatches?.map(e => batch_1.OutgoingTransferTx.fromPartial(e)) || [];
        message.unbatchedTransfers = object.unbatchedTransfers?.map(e => batch_1.OutgoingTransferTx.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            transfersInBatches: Array.isArray(object?.transfers_in_batches) ? object.transfers_in_batches.map((e) => batch_1.OutgoingTransferTx.fromAmino(e)) : [],
            unbatchedTransfers: Array.isArray(object?.unbatched_transfers) ? object.unbatched_transfers.map((e) => batch_1.OutgoingTransferTx.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfers_in_batches = message.transfersInBatches.map(e => e ? batch_1.OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.transfers_in_batches = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? batch_1.OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.unbatched_transfers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPendingSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryPendingSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPendingSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryPendingSendToEthResponse",
            value: exports.QueryPendingSendToEthResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map