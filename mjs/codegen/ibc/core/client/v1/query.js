import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState, ConsensusStateWithHeight, Params } from "./client";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryClientStateRequest() {
    return {
        clientId: ""
    };
}
export const QueryClientStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateRequest();
        message.clientId = object.clientId ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            clientId: object.client_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateRequest",
            value: QueryClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
            value: QueryClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStateResponse() {
    return {
        clientState: Any.fromPartial({}),
        proof: new Uint8Array(),
        proofHeight: Height.fromPartial({})
    };
}
export const QueryClientStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientState = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateResponse();
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
            proof: object.proof,
            proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateResponse",
            value: QueryClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
            value: QueryClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatesRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryClientStatesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesRequest();
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
        const message = createBaseQueryClientStatesRequest();
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
        return QueryClientStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesRequest",
            value: QueryClientStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
            value: QueryClientStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatesResponse() {
    return {
        clientStates: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryClientStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clientStates) {
            IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientStates.push(IdentifiedClientState.decode(reader, reader.uint32()));
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
        const message = createBaseQueryClientStatesResponse();
        message.clientStates = object.clientStates?.map(e => IdentifiedClientState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            clientStates: Array.isArray(object?.client_states) ? object.client_states.map((e) => IdentifiedClientState.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.clientStates) {
            obj.client_states = message.clientStates.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesResponse",
            value: QueryClientStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
            value: QueryClientStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateRequest() {
    return {
        clientId: "",
        revisionNumber: Long.UZERO,
        revisionHeight: Long.UZERO,
        latestHeight: false
    };
}
export const QueryConsensusStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.revisionNumber.isZero()) {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (!message.revisionHeight.isZero()) {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        if (message.latestHeight === true) {
            writer.uint32(32).bool(message.latestHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.revisionNumber = reader.uint64();
                    break;
                case 3:
                    message.revisionHeight = reader.uint64();
                    break;
                case 4:
                    message.latestHeight = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateRequest();
        message.clientId = object.clientId ?? "";
        message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? Long.fromValue(object.revisionNumber) : Long.UZERO;
        message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? Long.fromValue(object.revisionHeight) : Long.UZERO;
        message.latestHeight = object.latestHeight ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            clientId: object.client_id,
            revisionNumber: Long.fromString(object.revision_number),
            revisionHeight: Long.fromString(object.revision_height),
            latestHeight: object.latest_height
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
        obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
        obj.latest_height = message.latestHeight;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateRequest",
            value: QueryConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
            value: QueryConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateResponse() {
    return {
        consensusState: Any.fromPartial({}),
        proof: new Uint8Array(),
        proofHeight: Height.fromPartial({})
    };
}
export const QueryConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusState = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateResponse();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
            proof: object.proof,
            proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateResponse",
            value: QueryConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
            value: QueryConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStatesRequest() {
    return {
        clientId: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryConsensusStatesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
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
        const message = createBaseQueryConsensusStatesRequest();
        message.clientId = object.clientId ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            clientId: object.client_id,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesRequest",
            value: QueryConsensusStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
            value: QueryConsensusStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStatesResponse() {
    return {
        consensusStates: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryConsensusStatesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.consensusStates) {
            ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
        const message = createBaseQueryConsensusStatesResponse();
        message.consensusStates = object.consensusStates?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => ConsensusStateWithHeight.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.consensusStates) {
            obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesResponse",
            value: QueryConsensusStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
            value: QueryConsensusStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatusRequest() {
    return {
        clientId: ""
    };
}
export const QueryClientStatusRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatusRequest();
        message.clientId = object.clientId ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            clientId: object.client_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientStatusRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusRequest",
            value: QueryClientStatusRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStatusRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientStatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
            value: QueryClientStatusRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatusResponse() {
    return {
        status: ""
    };
}
export const QueryClientStatusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatusResponse();
        message.status = object.status ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            status: object.status
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientStatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusResponse",
            value: QueryClientStatusResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStatusResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
            value: QueryClientStatusResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientParamsRequest() {
    return {};
}
export const QueryClientParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsRequest();
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
        const message = createBaseQueryClientParamsRequest();
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
        return QueryClientParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsRequest",
            value: QueryClientParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
            value: QueryClientParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryClientParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsResponse();
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
        const message = createBaseQueryClientParamsResponse();
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
        return QueryClientParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsResponse",
            value: QueryClientParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
            value: QueryClientParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
export const QueryUpgradedClientStateRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateRequest();
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
        const message = createBaseQueryUpgradedClientStateRequest();
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
        return QueryUpgradedClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateRequest",
            value: QueryUpgradedClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
            value: QueryUpgradedClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedClientStateResponse() {
    return {
        upgradedClientState: Any.fromPartial({})
    };
}
export const QueryUpgradedClientStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.upgradedClientState !== undefined) {
            Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgradedClientState = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            upgradedClientState: object?.upgraded_client_state ? Any.fromAmino(object.upgraded_client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_client_state = message.upgradedClientState ? Any.toAmino(message.upgradedClientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateResponse",
            value: QueryUpgradedClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
            value: QueryUpgradedClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
export const QueryUpgradedConsensusStateRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
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
        const message = createBaseQueryUpgradedConsensusStateRequest();
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
        return QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
            value: QueryUpgradedConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
            value: QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgradedConsensusState: Any.fromPartial({})
    };
}
export const QueryUpgradedConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.upgradedConsensusState !== undefined) {
            Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgradedConsensusState = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgradedConsensusState = object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null ? Any.fromPartial(object.upgradedConsensusState) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            upgradedConsensusState: object?.upgraded_consensus_state ? Any.fromAmino(object.upgraded_consensus_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgradedConsensusState ? Any.toAmino(message.upgradedConsensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
            value: QueryUpgradedConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
            value: QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map