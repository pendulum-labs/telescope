import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { ValidatorSet } from "./validator";
import { Long, toTimestamp, fromTimestamp, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BlockIdFlag indicates which BlcokID the signature is for */
export var BlockIDFlag;
(function (BlockIDFlag) {
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (BlockIDFlag = {}));
export const BlockIDFlagSDKType = BlockIDFlag;
export const BlockIDFlagAmino = BlockIDFlag;
export function blockIDFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_ID_FLAG_UNKNOWN":
            return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        case 1:
        case "BLOCK_ID_FLAG_ABSENT":
            return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
        case 2:
        case "BLOCK_ID_FLAG_COMMIT":
            return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
        case 3:
        case "BLOCK_ID_FLAG_NIL":
            return BlockIDFlag.BLOCK_ID_FLAG_NIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockIDFlag.UNRECOGNIZED;
    }
}
export function blockIDFlagToJSON(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return "BLOCK_ID_FLAG_UNKNOWN";
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return "BLOCK_ID_FLAG_ABSENT";
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return "BLOCK_ID_FLAG_COMMIT";
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return "BLOCK_ID_FLAG_NIL";
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** SignedMsgType is a type of signed message in the consensus. */
export var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (SignedMsgType = {}));
export const SignedMsgTypeSDKType = SignedMsgType;
export const SignedMsgTypeAmino = SignedMsgType;
export function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
export function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBasePartSetHeader() {
    return {
        total: 0,
        hash: new Uint8Array()
    };
}
export const PartSetHeader = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePartSetHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePartSetHeader();
        message.total = object.total ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            total: object.total,
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.total = message.total;
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return PartSetHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PartSetHeader.decode(message.value);
    },
    toProto(message) {
        return PartSetHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.PartSetHeader",
            value: PartSetHeader.encode(message).finish()
        };
    }
};
function createBasePart() {
    return {
        index: 0,
        bytes: new Uint8Array(),
        proof: Proof.fromPartial({})
    };
}
export const Part = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.bytes = reader.bytes();
                    break;
                case 3:
                    message.proof = Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePart();
        message.index = object.index ?? 0;
        message.bytes = object.bytes ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            index: object.index,
            bytes: object.bytes,
            proof: object?.proof ? Proof.fromAmino(object.proof) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.bytes = message.bytes;
        obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Part.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Part.decode(message.value);
    },
    toProto(message) {
        return Part.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Part",
            value: Part.encode(message).finish()
        };
    }
};
function createBaseBlockID() {
    return {
        hash: new Uint8Array(),
        partSetHeader: PartSetHeader.fromPartial({})
    };
}
export const BlockID = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.partSetHeader !== undefined) {
            PartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.partSetHeader = PartSetHeader.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockID();
        message.hash = object.hash ?? new Uint8Array();
        message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? PartSetHeader.fromPartial(object.partSetHeader) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            hash: object.hash,
            partSetHeader: object?.part_set_header ? PartSetHeader.fromAmino(object.part_set_header) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.part_set_header = message.partSetHeader ? PartSetHeader.toAmino(message.partSetHeader) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlockID.decode(message.value);
    },
    toProto(message) {
        return BlockID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockID",
            value: BlockID.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        version: Consensus.fromPartial({}),
        chainId: "",
        height: Long.ZERO,
        time: new Date(),
        lastBlockId: BlockID.fromPartial({}),
        lastCommitHash: new Uint8Array(),
        dataHash: new Uint8Array(),
        validatorsHash: new Uint8Array(),
        nextValidatorsHash: new Uint8Array(),
        consensusHash: new Uint8Array(),
        appHash: new Uint8Array(),
        lastResultsHash: new Uint8Array(),
        evidenceHash: new Uint8Array(),
        proposerAddress: new Uint8Array()
    };
}
export const Header = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== undefined) {
            Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockId !== undefined) {
            BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastCommitHash.length !== 0) {
            writer.uint32(50).bytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(58).bytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            writer.uint32(66).bytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(74).bytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            writer.uint32(82).bytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(90).bytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            writer.uint32(106).bytes(message.evidenceHash);
        }
        if (message.proposerAddress.length !== 0) {
            writer.uint32(114).bytes(message.proposerAddress);
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
                    message.version = Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastBlockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.lastCommitHash = reader.bytes();
                    break;
                case 7:
                    message.dataHash = reader.bytes();
                    break;
                case 8:
                    message.validatorsHash = reader.bytes();
                    break;
                case 9:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 10:
                    message.consensusHash = reader.bytes();
                    break;
                case 11:
                    message.appHash = reader.bytes();
                    break;
                case 12:
                    message.lastResultsHash = reader.bytes();
                    break;
                case 13:
                    message.evidenceHash = reader.bytes();
                    break;
                case 14:
                    message.proposerAddress = reader.bytes();
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
        message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
        message.chainId = object.chainId ?? "";
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.time = object.time ?? undefined;
        message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
        message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
        message.dataHash = object.dataHash ?? new Uint8Array();
        message.validatorsHash = object.validatorsHash ?? new Uint8Array();
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        message.consensusHash = object.consensusHash ?? new Uint8Array();
        message.appHash = object.appHash ?? new Uint8Array();
        message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
        message.evidenceHash = object.evidenceHash ?? new Uint8Array();
        message.proposerAddress = object.proposerAddress ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            version: object?.version ? Consensus.fromAmino(object.version) : undefined,
            chainId: object.chain_id,
            height: Long.fromString(object.height),
            time: object.time,
            lastBlockId: object?.last_block_id ? BlockID.fromAmino(object.last_block_id) : undefined,
            lastCommitHash: object.last_commit_hash,
            dataHash: object.data_hash,
            validatorsHash: object.validators_hash,
            nextValidatorsHash: object.next_validators_hash,
            consensusHash: object.consensus_hash,
            appHash: object.app_hash,
            lastResultsHash: object.last_results_hash,
            evidenceHash: object.evidence_hash,
            proposerAddress: object.proposer_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? Consensus.toAmino(message.version) : undefined;
        obj.chain_id = message.chainId;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.last_block_id = message.lastBlockId ? BlockID.toAmino(message.lastBlockId) : undefined;
        obj.last_commit_hash = message.lastCommitHash;
        obj.data_hash = message.dataHash;
        obj.validators_hash = message.validatorsHash;
        obj.next_validators_hash = message.nextValidatorsHash;
        obj.consensus_hash = message.consensusHash;
        obj.app_hash = message.appHash;
        obj.last_results_hash = message.lastResultsHash;
        obj.evidence_hash = message.evidenceHash;
        obj.proposer_address = message.proposerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Header",
            value: Header.encode(message).finish()
        };
    }
};
function createBaseData() {
    return {
        txs: []
    };
}
export const Data = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseData();
        message.txs = object.txs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Data.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Data.decode(message.value);
    },
    toProto(message) {
        return Data.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Data",
            value: Data.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        type: 0,
        height: Long.ZERO,
        round: 0,
        blockId: BlockID.fromPartial({}),
        timestamp: new Date(),
        validatorAddress: new Uint8Array(),
        validatorIndex: 0,
        signature: new Uint8Array()
    };
}
export const Vote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(50).bytes(message.validatorAddress);
        }
        if (message.validatorIndex !== 0) {
            writer.uint32(56).int32(message.validatorIndex);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAddress = reader.bytes();
                    break;
                case 7:
                    message.validatorIndex = reader.int32();
                    break;
                case 8:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.round = object.round ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.validatorIndex = object.validatorIndex ?? 0;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: Long.fromString(object.height),
            round: object.round,
            blockId: object?.block_id ? BlockID.fromAmino(object.block_id) : undefined,
            timestamp: object.timestamp,
            validatorAddress: object.validator_address,
            validatorIndex: object.validator_index,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.timestamp = message.timestamp;
        obj.validator_address = message.validatorAddress;
        obj.validator_index = message.validatorIndex;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return Vote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Vote.decode(message.value);
    },
    toProto(message) {
        return Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Vote",
            value: Vote.encode(message).finish()
        };
    }
};
function createBaseCommit() {
    return {
        height: Long.ZERO,
        round: 0,
        blockId: BlockID.fromPartial({}),
        signatures: []
    };
}
export const Commit = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signatures) {
            CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatures.push(CommitSig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommit();
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.round = object.round ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.signatures = object.signatures?.map(e => CommitSig.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            height: Long.fromString(object.height),
            round: object.round,
            blockId: object?.block_id ? BlockID.fromAmino(object.block_id) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => CommitSig.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? CommitSig.toAmino(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Commit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Commit.decode(message.value);
    },
    toProto(message) {
        return Commit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Commit",
            value: Commit.encode(message).finish()
        };
    }
};
function createBaseCommitSig() {
    return {
        blockIdFlag: 0,
        validatorAddress: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
export const CommitSig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockIdFlag !== 0) {
            writer.uint32(8).int32(message.blockIdFlag);
        }
        if (message.validatorAddress.length !== 0) {
            writer.uint32(18).bytes(message.validatorAddress);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockIdFlag = reader.int32();
                    break;
                case 2:
                    message.validatorAddress = reader.bytes();
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommitSig();
        message.blockIdFlag = object.blockIdFlag ?? 0;
        message.validatorAddress = object.validatorAddress ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            blockIdFlag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1,
            validatorAddress: object.validator_address,
            timestamp: object.timestamp,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id_flag = message.blockIdFlag;
        obj.validator_address = message.validatorAddress;
        obj.timestamp = message.timestamp;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return CommitSig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommitSig.decode(message.value);
    },
    toProto(message) {
        return CommitSig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.CommitSig",
            value: CommitSig.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        type: 0,
        height: Long.ZERO,
        round: 0,
        polRound: 0,
        blockId: BlockID.fromPartial({}),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
export const Proposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.polRound !== 0) {
            writer.uint32(32).int32(message.polRound);
        }
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.polRound = reader.int32();
                    break;
                case 5:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.round = object.round ?? 0;
        message.polRound = object.polRound ?? 0;
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: Long.fromString(object.height),
            round: object.round,
            polRound: object.pol_round,
            blockId: object?.block_id ? BlockID.fromAmino(object.block_id) : undefined,
            timestamp: object.timestamp,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.pol_round = message.polRound;
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.timestamp = message.timestamp;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return Proposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Proposal.decode(message.value);
    },
    toProto(message) {
        return Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Proposal",
            value: Proposal.encode(message).finish()
        };
    }
};
function createBaseSignedHeader() {
    return {
        header: Header.fromPartial({}),
        commit: Commit.fromPartial({})
    };
}
export const SignedHeader = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commit = Commit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSignedHeader();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            header: object?.header ? Header.fromAmino(object.header) : undefined,
            commit: object?.commit ? Commit.fromAmino(object.commit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.commit = message.commit ? Commit.toAmino(message.commit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignedHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignedHeader.decode(message.value);
    },
    toProto(message) {
        return SignedHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SignedHeader",
            value: SignedHeader.encode(message).finish()
        };
    }
};
function createBaseLightBlock() {
    return {
        signedHeader: SignedHeader.fromPartial({}),
        validatorSet: ValidatorSet.fromPartial({})
    };
}
export const LightBlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signedHeader !== undefined) {
            SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorSet !== undefined) {
            ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedHeader = SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLightBlock();
        message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? SignedHeader.fromPartial(object.signedHeader) : undefined;
        message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            signedHeader: object?.signed_header ? SignedHeader.fromAmino(object.signed_header) : undefined,
            validatorSet: object?.validator_set ? ValidatorSet.fromAmino(object.validator_set) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signedHeader ? SignedHeader.toAmino(message.signedHeader) : undefined;
        obj.validator_set = message.validatorSet ? ValidatorSet.toAmino(message.validatorSet) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LightBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LightBlock.decode(message.value);
    },
    toProto(message) {
        return LightBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightBlock",
            value: LightBlock.encode(message).finish()
        };
    }
};
function createBaseBlockMeta() {
    return {
        blockId: BlockID.fromPartial({}),
        blockSize: Long.ZERO,
        header: Header.fromPartial({}),
        numTxs: Long.ZERO
    };
}
export const BlockMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.blockId !== undefined) {
            BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
        }
        if (!message.blockSize.isZero()) {
            writer.uint32(16).int64(message.blockSize);
        }
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (!message.numTxs.isZero()) {
            writer.uint32(32).int64(message.numTxs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blockSize = reader.int64();
                    break;
                case 3:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.numTxs = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlockMeta();
        message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
        message.blockSize = object.blockSize !== undefined && object.blockSize !== null ? Long.fromValue(object.blockSize) : Long.ZERO;
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.numTxs = object.numTxs !== undefined && object.numTxs !== null ? Long.fromValue(object.numTxs) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            blockId: object?.block_id ? BlockID.fromAmino(object.block_id) : undefined,
            blockSize: Long.fromString(object.block_size),
            header: object?.header ? Header.fromAmino(object.header) : undefined,
            numTxs: Long.fromString(object.num_txs)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
        obj.block_size = message.blockSize ? message.blockSize.toString() : undefined;
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.num_txs = message.numTxs ? message.numTxs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockMeta.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlockMeta.decode(message.value);
    },
    toProto(message) {
        return BlockMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockMeta",
            value: BlockMeta.encode(message).finish()
        };
    }
};
function createBaseTxProof() {
    return {
        rootHash: new Uint8Array(),
        data: new Uint8Array(),
        proof: Proof.fromPartial({})
    };
}
export const TxProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rootHash.length !== 0) {
            writer.uint32(10).bytes(message.rootHash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rootHash = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.proof = Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTxProof();
        message.rootHash = object.rootHash ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            rootHash: object.root_hash,
            data: object.data,
            proof: object?.proof ? Proof.fromAmino(object.proof) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.root_hash = message.rootHash;
        obj.data = message.data;
        obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TxProof.decode(message.value);
    },
    toProto(message) {
        return TxProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.TxProof",
            value: TxProof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map