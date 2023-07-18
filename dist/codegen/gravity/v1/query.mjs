import { Params } from "./genesis";
import { Valset } from "./types";
import { MsgValsetConfirm, MsgConfirmBatch, MsgConfirmLogicCall } from "./msgs";
import { BatchFees } from "./pool";
import { OutgoingTxBatch, OutgoingLogicCall, OutgoingTransferTx } from "./batch";
import { Attestation } from "./attestation";
import { Long } from "../../helpers";
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
            typeUrl: "/gravity.v1.QueryParamsRequest",
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
            typeUrl: "/gravity.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentValsetRequest() {
    return {};
}
export const QueryCurrentValsetRequest = {
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
        return QueryCurrentValsetRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCurrentValsetRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentValsetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryCurrentValsetRequest",
            value: QueryCurrentValsetRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentValsetResponse() {
    return {
        valset: Valset.fromPartial({})
    };
}
export const QueryCurrentValsetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
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
                    message.valset = Valset.decode(reader, reader.uint32());
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
        message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            valset: object?.valset ? Valset.fromAmino(object.valset) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentValsetResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCurrentValsetResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentValsetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryCurrentValsetResponse",
            value: QueryCurrentValsetResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetRequestRequest() {
    return {
        nonce: Long.UZERO
    };
}
export const QueryValsetRequestRequest = {
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
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            nonce: Long.fromString(object.nonce)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetRequestRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetRequestRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValsetRequestRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetRequestRequest",
            value: QueryValsetRequestRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetRequestResponse() {
    return {
        valset: Valset.fromPartial({})
    };
}
export const QueryValsetRequestResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.valset !== undefined) {
            Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
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
                    message.valset = Valset.decode(reader, reader.uint32());
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
        message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            valset: object?.valset ? Valset.fromAmino(object.valset) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetRequestResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetRequestResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValsetRequestResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetRequestResponse",
            value: QueryValsetRequestResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmRequest() {
    return {
        nonce: Long.UZERO,
        address: ""
    };
}
export const QueryValsetConfirmRequest = {
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
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: Long.fromString(object.nonce),
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
        return QueryValsetConfirmRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetConfirmRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValsetConfirmRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetConfirmRequest",
            value: QueryValsetConfirmRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmResponse() {
    return {
        confirm: MsgValsetConfirm.fromPartial({})
    };
}
export const QueryValsetConfirmResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.confirm !== undefined) {
            MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
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
                    message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
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
        message.confirm = object.confirm !== undefined && object.confirm !== null ? MsgValsetConfirm.fromPartial(object.confirm) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            confirm: object?.confirm ? MsgValsetConfirm.fromAmino(object.confirm) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.confirm = message.confirm ? MsgValsetConfirm.toAmino(message.confirm) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetConfirmResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValsetConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetConfirmResponse",
            value: QueryValsetConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmsByNonceRequest() {
    return {
        nonce: Long.UZERO
    };
}
export const QueryValsetConfirmsByNonceRequest = {
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
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            nonce: Long.fromString(object.nonce)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetConfirmsByNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetConfirmsByNonceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValsetConfirmsByNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceRequest",
            value: QueryValsetConfirmsByNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValsetConfirmsByNonceResponse() {
    return {
        confirms: []
    };
}
export const QueryValsetConfirmsByNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            MsgValsetConfirm.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
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
        message.confirms = object.confirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            confirms: Array.isArray(object?.confirms) ? object.confirms.map((e) => MsgValsetConfirm.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValsetConfirmsByNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryValsetConfirmsByNonceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValsetConfirmsByNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceResponse",
            value: QueryValsetConfirmsByNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastValsetRequestsRequest() {
    return {};
}
export const QueryLastValsetRequestsRequest = {
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
        return QueryLastValsetRequestsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastValsetRequestsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastValsetRequestsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastValsetRequestsRequest",
            value: QueryLastValsetRequestsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastValsetRequestsResponse() {
    return {
        valsets: []
    };
}
export const QueryLastValsetRequestsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
        message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            valsets: Array.isArray(object?.valsets) ? object.valsets.map((e) => Valset.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastValsetRequestsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastValsetRequestsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastValsetRequestsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastValsetRequestsResponse",
            value: QueryLastValsetRequestsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastPendingValsetRequestByAddrRequest = {
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
        return QueryLastPendingValsetRequestByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingValsetRequestByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingValsetRequestByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrRequest",
            value: QueryLastPendingValsetRequestByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingValsetRequestByAddrResponse() {
    return {
        valsets: []
    };
}
export const QueryLastPendingValsetRequestByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
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
        message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            valsets: Array.isArray(object?.valsets) ? object.valsets.map((e) => Valset.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastPendingValsetRequestByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingValsetRequestByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingValsetRequestByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrResponse",
            value: QueryLastPendingValsetRequestByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchFeeRequest() {
    return {};
}
export const QueryBatchFeeRequest = {
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
        return QueryBatchFeeRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchFeeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchFeeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchFeeRequest",
            value: QueryBatchFeeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchFeeResponse() {
    return {
        batchFees: []
    };
}
export const QueryBatchFeeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batchFees) {
            BatchFees.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
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
        message.batchFees = object.batchFees?.map(e => BatchFees.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            batchFees: Array.isArray(object?.batch_fees) ? object.batch_fees.map((e) => BatchFees.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.batchFees) {
            obj.batch_fees = message.batchFees.map(e => e ? BatchFees.toAmino(e) : undefined);
        }
        else {
            obj.batch_fees = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchFeeResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchFeeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchFeeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchFeeResponse",
            value: QueryBatchFeeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastPendingBatchRequestByAddrRequest = {
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
        return QueryLastPendingBatchRequestByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingBatchRequestByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingBatchRequestByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrRequest",
            value: QueryLastPendingBatchRequestByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingBatchRequestByAddrResponse() {
    return {
        batch: []
    };
}
export const QueryLastPendingBatchRequestByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batch) {
            OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.batch.push(OutgoingTxBatch.decode(reader, reader.uint32()));
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
        message.batch = object.batch?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            batch: Array.isArray(object?.batch) ? object.batch.map((e) => OutgoingTxBatch.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.batch) {
            obj.batch = message.batch.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
        }
        else {
            obj.batch = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastPendingBatchRequestByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingBatchRequestByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingBatchRequestByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrResponse",
            value: QueryLastPendingBatchRequestByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingLogicCallByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastPendingLogicCallByAddrRequest = {
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
        return QueryLastPendingLogicCallByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingLogicCallByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingLogicCallByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrRequest",
            value: QueryLastPendingLogicCallByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastPendingLogicCallByAddrResponse() {
    return {
        call: []
    };
}
export const QueryLastPendingLogicCallByAddrResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.call) {
            OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.call.push(OutgoingLogicCall.decode(reader, reader.uint32()));
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
        message.call = object.call?.map(e => OutgoingLogicCall.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            call: Array.isArray(object?.call) ? object.call.map((e) => OutgoingLogicCall.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.call) {
            obj.call = message.call.map(e => e ? OutgoingLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.call = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastPendingLogicCallByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastPendingLogicCallByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastPendingLogicCallByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrResponse",
            value: QueryLastPendingLogicCallByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingTxBatchesRequest() {
    return {};
}
export const QueryOutgoingTxBatchesRequest = {
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
        return QueryOutgoingTxBatchesRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOutgoingTxBatchesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOutgoingTxBatchesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryOutgoingTxBatchesRequest",
            value: QueryOutgoingTxBatchesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingTxBatchesResponse() {
    return {
        batches: []
    };
}
export const QueryOutgoingTxBatchesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.batches) {
            OutgoingTxBatch.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
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
        message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            batches: Array.isArray(object?.batches) ? object.batches.map((e) => OutgoingTxBatch.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOutgoingTxBatchesResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOutgoingTxBatchesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOutgoingTxBatchesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryOutgoingTxBatchesResponse",
            value: QueryOutgoingTxBatchesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingLogicCallsRequest() {
    return {};
}
export const QueryOutgoingLogicCallsRequest = {
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
        return QueryOutgoingLogicCallsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOutgoingLogicCallsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryOutgoingLogicCallsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryOutgoingLogicCallsRequest",
            value: QueryOutgoingLogicCallsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryOutgoingLogicCallsResponse() {
    return {
        calls: []
    };
}
export const QueryOutgoingLogicCallsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.calls) {
            OutgoingLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.calls.push(OutgoingLogicCall.decode(reader, reader.uint32()));
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
        message.calls = object.calls?.map(e => OutgoingLogicCall.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            calls: Array.isArray(object?.calls) ? object.calls.map((e) => OutgoingLogicCall.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.calls) {
            obj.calls = message.calls.map(e => e ? OutgoingLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.calls = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryOutgoingLogicCallsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryOutgoingLogicCallsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryOutgoingLogicCallsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryOutgoingLogicCallsResponse",
            value: QueryOutgoingLogicCallsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequestByNonceRequest() {
    return {
        nonce: Long.UZERO,
        contractAddress: ""
    };
}
export const QueryBatchRequestByNonceRequest = {
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
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: Long.fromString(object.nonce),
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
        return QueryBatchRequestByNonceRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchRequestByNonceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchRequestByNonceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchRequestByNonceRequest",
            value: QueryBatchRequestByNonceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchRequestByNonceResponse() {
    return {
        batch: OutgoingTxBatch.fromPartial({})
    };
}
export const QueryBatchRequestByNonceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.batch !== undefined) {
            OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
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
                    message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
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
        message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            batch: object?.batch ? OutgoingTxBatch.fromAmino(object.batch) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.batch = message.batch ? OutgoingTxBatch.toAmino(message.batch) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchRequestByNonceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchRequestByNonceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchRequestByNonceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchRequestByNonceResponse",
            value: QueryBatchRequestByNonceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBatchConfirmsRequest() {
    return {
        nonce: Long.UZERO,
        contractAddress: ""
    };
}
export const QueryBatchConfirmsRequest = {
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
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        message.contractAddress = object.contractAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: Long.fromString(object.nonce),
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
        return QueryBatchConfirmsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchConfirmsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBatchConfirmsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchConfirmsRequest",
            value: QueryBatchConfirmsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBatchConfirmsResponse() {
    return {
        confirms: []
    };
}
export const QueryBatchConfirmsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            MsgConfirmBatch.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
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
        message.confirms = object.confirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            confirms: Array.isArray(object?.confirms) ? object.confirms.map((e) => MsgConfirmBatch.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBatchConfirmsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBatchConfirmsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBatchConfirmsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryBatchConfirmsResponse",
            value: QueryBatchConfirmsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLogicConfirmsRequest() {
    return {
        invalidationId: new Uint8Array(),
        invalidationNonce: Long.UZERO
    };
}
export const QueryLogicConfirmsRequest = {
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
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            invalidationId: object.invalidation_id,
            invalidationNonce: Long.fromString(object.invalidation_nonce)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.invalidation_id = message.invalidationId;
        obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLogicConfirmsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLogicConfirmsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLogicConfirmsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLogicConfirmsRequest",
            value: QueryLogicConfirmsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLogicConfirmsResponse() {
    return {
        confirms: []
    };
}
export const QueryLogicConfirmsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.confirms) {
            MsgConfirmLogicCall.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.confirms.push(MsgConfirmLogicCall.decode(reader, reader.uint32()));
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
        message.confirms = object.confirms?.map(e => MsgConfirmLogicCall.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            confirms: Array.isArray(object?.confirms) ? object.confirms.map((e) => MsgConfirmLogicCall.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.confirms) {
            obj.confirms = message.confirms.map(e => e ? MsgConfirmLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.confirms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLogicConfirmsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLogicConfirmsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLogicConfirmsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLogicConfirmsResponse",
            value: QueryLogicConfirmsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastEventNonceByAddrRequest() {
    return {
        address: ""
    };
}
export const QueryLastEventNonceByAddrRequest = {
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
        return QueryLastEventNonceByAddrRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastEventNonceByAddrRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastEventNonceByAddrRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastEventNonceByAddrRequest",
            value: QueryLastEventNonceByAddrRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastEventNonceByAddrResponse() {
    return {
        eventNonce: Long.UZERO
    };
}
export const QueryLastEventNonceByAddrResponse = {
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
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: Long.fromString(object.event_nonce)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastEventNonceByAddrResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryLastEventNonceByAddrResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastEventNonceByAddrResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryLastEventNonceByAddrResponse",
            value: QueryLastEventNonceByAddrResponse.encode(message).finish()
        };
    }
};
function createBaseQueryERC20ToDenomRequest() {
    return {
        erc20: ""
    };
}
export const QueryERC20ToDenomRequest = {
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
        return QueryERC20ToDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryERC20ToDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryERC20ToDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryERC20ToDenomRequest",
            value: QueryERC20ToDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryERC20ToDenomResponse() {
    return {
        denom: "",
        cosmosOriginated: false
    };
}
export const QueryERC20ToDenomResponse = {
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
        return QueryERC20ToDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryERC20ToDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryERC20ToDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryERC20ToDenomResponse",
            value: QueryERC20ToDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomToERC20Request() {
    return {
        denom: ""
    };
}
export const QueryDenomToERC20Request = {
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
        return QueryDenomToERC20Request.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomToERC20Request.decode(message.value);
    },
    toProto(message) {
        return QueryDenomToERC20Request.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDenomToERC20Request",
            value: QueryDenomToERC20Request.encode(message).finish()
        };
    }
};
function createBaseQueryDenomToERC20Response() {
    return {
        erc20: "",
        cosmosOriginated: false
    };
}
export const QueryDenomToERC20Response = {
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
        return QueryDenomToERC20Response.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDenomToERC20Response.decode(message.value);
    },
    toProto(message) {
        return QueryDenomToERC20Response.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDenomToERC20Response",
            value: QueryDenomToERC20Response.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsRequest() {
    return {
        limit: Long.UZERO
    };
}
export const QueryAttestationsRequest = {
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
        message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            limit: Long.fromString(object.limit)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.limit = message.limit ? message.limit.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestationsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAttestationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryAttestationsRequest",
            value: QueryAttestationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAttestationsResponse() {
    return {
        attestations: []
    };
}
export const QueryAttestationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.attestations) {
            Attestation.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.attestations.push(Attestation.decode(reader, reader.uint32()));
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
        message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            attestations: Array.isArray(object?.attestations) ? object.attestations.map((e) => Attestation.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? Attestation.toAmino(e) : undefined);
        }
        else {
            obj.attestations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAttestationsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAttestationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAttestationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryAttestationsResponse",
            value: QueryAttestationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByValidatorAddress() {
    return {
        validatorAddress: ""
    };
}
export const QueryDelegateKeysByValidatorAddress = {
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
        return QueryDelegateKeysByValidatorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByValidatorAddress.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByValidatorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddress",
            value: QueryDelegateKeysByValidatorAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByValidatorAddressResponse() {
    return {
        ethAddress: "",
        orchestratorAddress: ""
    };
}
export const QueryDelegateKeysByValidatorAddressResponse = {
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
        return QueryDelegateKeysByValidatorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByValidatorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByValidatorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddressResponse",
            value: QueryDelegateKeysByValidatorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByEthAddress() {
    return {
        ethAddress: ""
    };
}
export const QueryDelegateKeysByEthAddress = {
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
        return QueryDelegateKeysByEthAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByEthAddress.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByEthAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddress",
            value: QueryDelegateKeysByEthAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByEthAddressResponse() {
    return {
        validatorAddress: "",
        orchestratorAddress: ""
    };
}
export const QueryDelegateKeysByEthAddressResponse = {
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
        return QueryDelegateKeysByEthAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByEthAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByEthAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddressResponse",
            value: QueryDelegateKeysByEthAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddress() {
    return {
        orchestratorAddress: ""
    };
}
export const QueryDelegateKeysByOrchestratorAddress = {
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
        return QueryDelegateKeysByOrchestratorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByOrchestratorAddress.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByOrchestratorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddress",
            value: QueryDelegateKeysByOrchestratorAddress.encode(message).finish()
        };
    }
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse() {
    return {
        validatorAddress: "",
        ethAddress: ""
    };
}
export const QueryDelegateKeysByOrchestratorAddressResponse = {
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
        return QueryDelegateKeysByOrchestratorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryDelegateKeysByOrchestratorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse",
            value: QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPendingSendToEth() {
    return {
        senderAddress: ""
    };
}
export const QueryPendingSendToEth = {
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
        return QueryPendingSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPendingSendToEth.decode(message.value);
    },
    toProto(message) {
        return QueryPendingSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryPendingSendToEth",
            value: QueryPendingSendToEth.encode(message).finish()
        };
    }
};
function createBaseQueryPendingSendToEthResponse() {
    return {
        transfersInBatches: [],
        unbatchedTransfers: []
    };
}
export const QueryPendingSendToEthResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.transfersInBatches) {
            OutgoingTransferTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            OutgoingTransferTx.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
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
        message.transfersInBatches = object.transfersInBatches?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
        message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            transfersInBatches: Array.isArray(object?.transfers_in_batches) ? object.transfers_in_batches.map((e) => OutgoingTransferTx.fromAmino(e)) : [],
            unbatchedTransfers: Array.isArray(object?.unbatched_transfers) ? object.unbatched_transfers.map((e) => OutgoingTransferTx.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.transfersInBatches) {
            obj.transfers_in_batches = message.transfersInBatches.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.transfers_in_batches = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.unbatched_transfers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPendingSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryPendingSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPendingSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.QueryPendingSendToEthResponse",
            value: QueryPendingSendToEthResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map