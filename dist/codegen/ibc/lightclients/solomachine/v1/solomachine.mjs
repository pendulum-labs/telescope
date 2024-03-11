import { Any } from "../../../../google/protobuf/any";
import { ConnectionEnd } from "../../../core/connection/v1/connection";
import { Channel } from "../../../core/channel/v1/channel";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export var DataType;
(function (DataType) {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
    /** DATA_TYPE_HEADER - Data type for header verification */
    DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
    DataType[DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataType || (DataType = {}));
export const DataTypeSDKType = DataType;
export const DataTypeAmino = DataType;
export function dataTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
            return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "DATA_TYPE_CLIENT_STATE":
            return DataType.DATA_TYPE_CLIENT_STATE;
        case 2:
        case "DATA_TYPE_CONSENSUS_STATE":
            return DataType.DATA_TYPE_CONSENSUS_STATE;
        case 3:
        case "DATA_TYPE_CONNECTION_STATE":
            return DataType.DATA_TYPE_CONNECTION_STATE;
        case 4:
        case "DATA_TYPE_CHANNEL_STATE":
            return DataType.DATA_TYPE_CHANNEL_STATE;
        case 5:
        case "DATA_TYPE_PACKET_COMMITMENT":
            return DataType.DATA_TYPE_PACKET_COMMITMENT;
        case 6:
        case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
            return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
        case 7:
        case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
            return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
        case 8:
        case "DATA_TYPE_NEXT_SEQUENCE_RECV":
            return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
        case 9:
        case "DATA_TYPE_HEADER":
            return DataType.DATA_TYPE_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DataType.UNRECOGNIZED;
    }
}
export function dataTypeToJSON(object) {
    switch (object) {
        case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
            return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
        case DataType.DATA_TYPE_CLIENT_STATE:
            return "DATA_TYPE_CLIENT_STATE";
        case DataType.DATA_TYPE_CONSENSUS_STATE:
            return "DATA_TYPE_CONSENSUS_STATE";
        case DataType.DATA_TYPE_CONNECTION_STATE:
            return "DATA_TYPE_CONNECTION_STATE";
        case DataType.DATA_TYPE_CHANNEL_STATE:
            return "DATA_TYPE_CHANNEL_STATE";
        case DataType.DATA_TYPE_PACKET_COMMITMENT:
            return "DATA_TYPE_PACKET_COMMITMENT";
        case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
            return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
        case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
            return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
        case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
            return "DATA_TYPE_NEXT_SEQUENCE_RECV";
        case DataType.DATA_TYPE_HEADER:
            return "DATA_TYPE_HEADER";
        case DataType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseClientState() {
    return {
        sequence: Long.UZERO,
        frozenSequence: Long.UZERO,
        consensusState: ConsensusState.fromPartial({}),
        allowUpdateAfterProposal: false
    };
}
export const ClientState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (!message.frozenSequence.isZero()) {
            writer.uint32(16).uint64(message.frozenSequence);
        }
        if (message.consensusState !== undefined) {
            ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
        }
        if (message.allowUpdateAfterProposal === true) {
            writer.uint32(32).bool(message.allowUpdateAfterProposal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.frozenSequence = reader.uint64();
                    break;
                case 3:
                    message.consensusState = ConsensusState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.allowUpdateAfterProposal = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.frozenSequence = object.frozenSequence !== undefined && object.frozenSequence !== null ? Long.fromValue(object.frozenSequence) : Long.UZERO;
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? ConsensusState.fromPartial(object.consensusState) : undefined;
        message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            sequence: Long.fromString(object.sequence),
            frozenSequence: Long.fromString(object.frozen_sequence),
            consensusState: object?.consensus_state ? ConsensusState.fromAmino(object.consensus_state) : undefined,
            allowUpdateAfterProposal: object.allow_update_after_proposal
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.frozen_sequence = message.frozenSequence ? message.frozenSequence.toString() : undefined;
        obj.consensus_state = message.consensusState ? ConsensusState.toAmino(message.consensusState) : undefined;
        obj.allow_update_after_proposal = message.allowUpdateAfterProposal;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientState.decode(message.value);
    },
    toProto(message) {
        return ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
            value: ClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusState() {
    return {
        publicKey: Any.fromPartial({}),
        diversifier: "",
        timestamp: Long.UZERO
    };
}
export const ConsensusState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.publicKey !== undefined) {
            Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.diversifier !== "") {
            writer.uint32(18).string(message.diversifier);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(24).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.diversifier = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
        message.diversifier = object.diversifier ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            publicKey: object?.public_key ? Any.fromAmino(object.public_key) : undefined,
            diversifier: object.diversifier,
            timestamp: Long.fromString(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
        obj.diversifier = message.diversifier;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusState.decode(message.value);
    },
    toProto(message) {
        return ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
            value: ConsensusState.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        sequence: Long.UZERO,
        timestamp: Long.UZERO,
        signature: new Uint8Array(),
        newPublicKey: Any.fromPartial({}),
        newDiversifier: ""
    };
}
export const Header = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        if (message.newPublicKey !== undefined) {
            Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(42).string(message.newDiversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                case 4:
                    message.newPublicKey = Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.newDiversifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        message.signature = object.signature ?? new Uint8Array();
        message.newPublicKey = object.newPublicKey !== undefined && object.newPublicKey !== null ? Any.fromPartial(object.newPublicKey) : undefined;
        message.newDiversifier = object.newDiversifier ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            sequence: Long.fromString(object.sequence),
            timestamp: Long.fromString(object.timestamp),
            signature: object.signature,
            newPublicKey: object?.new_public_key ? Any.fromAmino(object.new_public_key) : undefined,
            newDiversifier: object.new_diversifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.signature = message.signature;
        obj.new_public_key = message.newPublicKey ? Any.toAmino(message.newPublicKey) : undefined;
        obj.new_diversifier = message.newDiversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.Header",
            value: Header.encode(message).finish()
        };
    }
};
function createBaseMisbehaviour() {
    return {
        clientId: "",
        sequence: Long.UZERO,
        signatureOne: SignatureAndData.fromPartial({}),
        signatureTwo: SignatureAndData.fromPartial({})
    };
}
export const Misbehaviour = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.signatureOne !== undefined) {
            SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
        }
        if (message.signatureTwo !== undefined) {
            SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.signatureOne = SignatureAndData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatureTwo = SignatureAndData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.clientId = object.clientId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.signatureOne = object.signatureOne !== undefined && object.signatureOne !== null ? SignatureAndData.fromPartial(object.signatureOne) : undefined;
        message.signatureTwo = object.signatureTwo !== undefined && object.signatureTwo !== null ? SignatureAndData.fromPartial(object.signatureTwo) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            clientId: object.client_id,
            sequence: Long.fromString(object.sequence),
            signatureOne: object?.signature_one ? SignatureAndData.fromAmino(object.signature_one) : undefined,
            signatureTwo: object?.signature_two ? SignatureAndData.fromAmino(object.signature_two) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.signature_one = message.signatureOne ? SignatureAndData.toAmino(message.signatureOne) : undefined;
        obj.signature_two = message.signatureTwo ? SignatureAndData.toAmino(message.signatureTwo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
            value: Misbehaviour.encode(message).finish()
        };
    }
};
function createBaseSignatureAndData() {
    return {
        signature: new Uint8Array(),
        dataType: 0,
        data: new Uint8Array(),
        timestamp: Long.UZERO
    };
}
export const SignatureAndData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.dataType !== 0) {
            writer.uint32(16).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(32).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureAndData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature = reader.bytes();
                    break;
                case 2:
                    message.dataType = reader.int32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignatureAndData();
        message.signature = object.signature ?? new Uint8Array();
        message.dataType = object.dataType ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            signature: object.signature,
            dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: object.data,
            timestamp: Long.fromString(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signature = message.signature;
        obj.data_type = message.dataType;
        obj.data = message.data;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignatureAndData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignatureAndData",
            value: SignatureAndData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignatureAndData.decode(message.value);
    },
    toProto(message) {
        return SignatureAndData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
            value: SignatureAndData.encode(message).finish()
        };
    }
};
function createBaseTimestampedSignatureData() {
    return {
        signatureData: new Uint8Array(),
        timestamp: Long.UZERO
    };
}
export const TimestampedSignatureData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signatureData.length !== 0) {
            writer.uint32(10).bytes(message.signatureData);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestampedSignatureData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureData = reader.bytes();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTimestampedSignatureData();
        message.signatureData = object.signatureData ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            signatureData: object.signature_data,
            timestamp: Long.fromString(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signature_data = message.signatureData;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TimestampedSignatureData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TimestampedSignatureData",
            value: TimestampedSignatureData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TimestampedSignatureData.decode(message.value);
    },
    toProto(message) {
        return TimestampedSignatureData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
            value: TimestampedSignatureData.encode(message).finish()
        };
    }
};
function createBaseSignBytes() {
    return {
        sequence: Long.UZERO,
        timestamp: Long.UZERO,
        diversifier: "",
        dataType: 0,
        data: new Uint8Array()
    };
}
export const SignBytes = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.diversifier !== "") {
            writer.uint32(26).string(message.diversifier);
        }
        if (message.dataType !== 0) {
            writer.uint32(32).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(42).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignBytes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.diversifier = reader.string();
                    break;
                case 4:
                    message.dataType = reader.int32();
                    break;
                case 5:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignBytes();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        message.diversifier = object.diversifier ?? "";
        message.dataType = object.dataType ?? 0;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            sequence: Long.fromString(object.sequence),
            timestamp: Long.fromString(object.timestamp),
            diversifier: object.diversifier,
            dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.diversifier = message.diversifier;
        obj.data_type = message.dataType;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return SignBytes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignBytes",
            value: SignBytes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignBytes.decode(message.value);
    },
    toProto(message) {
        return SignBytes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
            value: SignBytes.encode(message).finish()
        };
    }
};
function createBaseHeaderData() {
    return {
        newPubKey: Any.fromPartial({}),
        newDiversifier: ""
    };
}
export const HeaderData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.newPubKey !== undefined) {
            Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(18).string(message.newDiversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeaderData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newPubKey = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.newDiversifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHeaderData();
        message.newPubKey = object.newPubKey !== undefined && object.newPubKey !== null ? Any.fromPartial(object.newPubKey) : undefined;
        message.newDiversifier = object.newDiversifier ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            newPubKey: object?.new_pub_key ? Any.fromAmino(object.new_pub_key) : undefined,
            newDiversifier: object.new_diversifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.new_pub_key = message.newPubKey ? Any.toAmino(message.newPubKey) : undefined;
        obj.new_diversifier = message.newDiversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return HeaderData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HeaderData",
            value: HeaderData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return HeaderData.decode(message.value);
    },
    toProto(message) {
        return HeaderData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
            value: HeaderData.encode(message).finish()
        };
    }
};
function createBaseClientStateData() {
    return {
        path: new Uint8Array(),
        clientState: Any.fromPartial({})
    };
}
export const ClientStateData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.clientState !== undefined) {
            Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.clientState = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClientStateData();
        message.path = object.path ?? new Uint8Array();
        message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientStateData",
            value: ClientStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientStateData.decode(message.value);
    },
    toProto(message) {
        return ClientStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
            value: ClientStateData.encode(message).finish()
        };
    }
};
function createBaseConsensusStateData() {
    return {
        path: new Uint8Array(),
        consensusState: Any.fromPartial({})
    };
}
export const ConsensusStateData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.consensusState = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateData();
        message.path = object.path ?? new Uint8Array();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateData",
            value: ConsensusStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusStateData.decode(message.value);
    },
    toProto(message) {
        return ConsensusStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
            value: ConsensusStateData.encode(message).finish()
        };
    }
};
function createBaseConnectionStateData() {
    return {
        path: new Uint8Array(),
        connection: ConnectionEnd.fromPartial({})
    };
}
export const ConnectionStateData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.connection !== undefined) {
            ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.connection = ConnectionEnd.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseConnectionStateData();
        message.path = object.path ?? new Uint8Array();
        message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            connection: object?.connection ? ConnectionEnd.fromAmino(object.connection) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConnectionStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionStateData",
            value: ConnectionStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConnectionStateData.decode(message.value);
    },
    toProto(message) {
        return ConnectionStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
            value: ConnectionStateData.encode(message).finish()
        };
    }
};
function createBaseChannelStateData() {
    return {
        path: new Uint8Array(),
        channel: Channel.fromPartial({})
    };
}
export const ChannelStateData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannelStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.channel = Channel.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseChannelStateData();
        message.path = object.path ?? new Uint8Array();
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            channel: object?.channel ? Channel.fromAmino(object.channel) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ChannelStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ChannelStateData",
            value: ChannelStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ChannelStateData.decode(message.value);
    },
    toProto(message) {
        return ChannelStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
            value: ChannelStateData.encode(message).finish()
        };
    }
};
function createBasePacketCommitmentData() {
    return {
        path: new Uint8Array(),
        commitment: new Uint8Array()
    };
}
export const PacketCommitmentData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.commitment.length !== 0) {
            writer.uint32(18).bytes(message.commitment);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketCommitmentData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.commitment = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePacketCommitmentData();
        message.path = object.path ?? new Uint8Array();
        message.commitment = object.commitment ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            commitment: object.commitment
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.commitment = message.commitment;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketCommitmentData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketCommitmentData",
            value: PacketCommitmentData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketCommitmentData.decode(message.value);
    },
    toProto(message) {
        return PacketCommitmentData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
            value: PacketCommitmentData.encode(message).finish()
        };
    }
};
function createBasePacketAcknowledgementData() {
    return {
        path: new Uint8Array(),
        acknowledgement: new Uint8Array()
    };
}
export const PacketAcknowledgementData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketAcknowledgementData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePacketAcknowledgementData();
        message.path = object.path ?? new Uint8Array();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            acknowledgement: object.acknowledgement
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.acknowledgement = message.acknowledgement;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketAcknowledgementData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketAcknowledgementData",
            value: PacketAcknowledgementData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketAcknowledgementData.decode(message.value);
    },
    toProto(message) {
        return PacketAcknowledgementData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
            value: PacketAcknowledgementData.encode(message).finish()
        };
    }
};
function createBasePacketReceiptAbsenceData() {
    return {
        path: new Uint8Array()
    };
}
export const PacketReceiptAbsenceData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketReceiptAbsenceData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePacketReceiptAbsenceData();
        message.path = object.path ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketReceiptAbsenceData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketReceiptAbsenceData",
            value: PacketReceiptAbsenceData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketReceiptAbsenceData.decode(message.value);
    },
    toProto(message) {
        return PacketReceiptAbsenceData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
            value: PacketReceiptAbsenceData.encode(message).finish()
        };
    }
};
function createBaseNextSequenceRecvData() {
    return {
        path: new Uint8Array(),
        nextSeqRecv: Long.UZERO
    };
}
export const NextSequenceRecvData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (!message.nextSeqRecv.isZero()) {
            writer.uint32(16).uint64(message.nextSeqRecv);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextSequenceRecvData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.nextSeqRecv = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNextSequenceRecvData();
        message.path = object.path ?? new Uint8Array();
        message.nextSeqRecv = object.nextSeqRecv !== undefined && object.nextSeqRecv !== null ? Long.fromValue(object.nextSeqRecv) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            nextSeqRecv: Long.fromString(object.next_seq_recv)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.next_seq_recv = message.nextSeqRecv ? message.nextSeqRecv.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NextSequenceRecvData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NextSequenceRecvData",
            value: NextSequenceRecvData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return NextSequenceRecvData.decode(message.value);
    },
    toProto(message) {
        return NextSequenceRecvData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
            value: NextSequenceRecvData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=solomachine.js.map