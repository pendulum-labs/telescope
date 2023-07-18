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
exports.EvidenceList = exports.LightClientAttackEvidence = exports.DuplicateVoteEvidence = exports.Evidence = void 0;
const types_1 = require("./types");
const timestamp_1 = require("../../google/protobuf/timestamp");
const validator_1 = require("./validator");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseEvidence() {
    return {
        duplicateVoteEvidence: undefined,
        lightClientAttackEvidence: undefined
    };
}
exports.Evidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.duplicateVoteEvidence !== undefined) {
            exports.DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.lightClientAttackEvidence !== undefined) {
            exports.LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duplicateVoteEvidence = exports.DuplicateVoteEvidence.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lightClientAttackEvidence = exports.LightClientAttackEvidence.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEvidence();
        message.duplicateVoteEvidence = object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null ? exports.DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence) : undefined;
        message.lightClientAttackEvidence = object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null ? exports.LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            duplicateVoteEvidence: object?.duplicate_vote_evidence ? exports.DuplicateVoteEvidence.fromAmino(object.duplicate_vote_evidence) : undefined,
            lightClientAttackEvidence: object?.light_client_attack_evidence ? exports.LightClientAttackEvidence.fromAmino(object.light_client_attack_evidence) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.duplicate_vote_evidence = message.duplicateVoteEvidence ? exports.DuplicateVoteEvidence.toAmino(message.duplicateVoteEvidence) : undefined;
        obj.light_client_attack_evidence = message.lightClientAttackEvidence ? exports.LightClientAttackEvidence.toAmino(message.lightClientAttackEvidence) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Evidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Evidence.decode(message.value);
    },
    toProto(message) {
        return exports.Evidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Evidence",
            value: exports.Evidence.encode(message).finish()
        };
    }
};
function createBaseDuplicateVoteEvidence() {
    return {
        voteA: types_1.Vote.fromPartial({}),
        voteB: types_1.Vote.fromPartial({}),
        totalVotingPower: helpers_1.Long.ZERO,
        validatorPower: helpers_1.Long.ZERO,
        timestamp: undefined
    };
}
exports.DuplicateVoteEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.voteA !== undefined) {
            types_1.Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
        }
        if (message.voteB !== undefined) {
            types_1.Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
        }
        if (!message.totalVotingPower.isZero()) {
            writer.uint32(24).int64(message.totalVotingPower);
        }
        if (!message.validatorPower.isZero()) {
            writer.uint32(32).int64(message.validatorPower);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDuplicateVoteEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voteA = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.voteB = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.totalVotingPower = reader.int64();
                    break;
                case 4:
                    message.validatorPower = reader.int64();
                    break;
                case 5:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDuplicateVoteEvidence();
        message.voteA = object.voteA !== undefined && object.voteA !== null ? types_1.Vote.fromPartial(object.voteA) : undefined;
        message.voteB = object.voteB !== undefined && object.voteB !== null ? types_1.Vote.fromPartial(object.voteB) : undefined;
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? helpers_1.Long.fromValue(object.totalVotingPower) : helpers_1.Long.ZERO;
        message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? helpers_1.Long.fromValue(object.validatorPower) : helpers_1.Long.ZERO;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            voteA: object?.vote_a ? types_1.Vote.fromAmino(object.vote_a) : undefined,
            voteB: object?.vote_b ? types_1.Vote.fromAmino(object.vote_b) : undefined,
            totalVotingPower: helpers_1.Long.fromString(object.total_voting_power),
            validatorPower: helpers_1.Long.fromString(object.validator_power),
            timestamp: object.timestamp
        };
    },
    toAmino(message) {
        const obj = {};
        obj.vote_a = message.voteA ? types_1.Vote.toAmino(message.voteA) : undefined;
        obj.vote_b = message.voteB ? types_1.Vote.toAmino(message.voteB) : undefined;
        obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
        obj.validator_power = message.validatorPower ? message.validatorPower.toString() : undefined;
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DuplicateVoteEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DuplicateVoteEvidence.decode(message.value);
    },
    toProto(message) {
        return exports.DuplicateVoteEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.DuplicateVoteEvidence",
            value: exports.DuplicateVoteEvidence.encode(message).finish()
        };
    }
};
function createBaseLightClientAttackEvidence() {
    return {
        conflictingBlock: types_1.LightBlock.fromPartial({}),
        commonHeight: helpers_1.Long.ZERO,
        byzantineValidators: [],
        totalVotingPower: helpers_1.Long.ZERO,
        timestamp: undefined
    };
}
exports.LightClientAttackEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.conflictingBlock !== undefined) {
            types_1.LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
        }
        if (!message.commonHeight.isZero()) {
            writer.uint32(16).int64(message.commonHeight);
        }
        for (const v of message.byzantineValidators) {
            validator_1.Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (!message.totalVotingPower.isZero()) {
            writer.uint32(32).int64(message.totalVotingPower);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightClientAttackEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.conflictingBlock = types_1.LightBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commonHeight = reader.int64();
                    break;
                case 3:
                    message.byzantineValidators.push(validator_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.totalVotingPower = reader.int64();
                    break;
                case 5:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLightClientAttackEvidence();
        message.conflictingBlock = object.conflictingBlock !== undefined && object.conflictingBlock !== null ? types_1.LightBlock.fromPartial(object.conflictingBlock) : undefined;
        message.commonHeight = object.commonHeight !== undefined && object.commonHeight !== null ? helpers_1.Long.fromValue(object.commonHeight) : helpers_1.Long.ZERO;
        message.byzantineValidators = object.byzantineValidators?.map(e => validator_1.Validator.fromPartial(e)) || [];
        message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? helpers_1.Long.fromValue(object.totalVotingPower) : helpers_1.Long.ZERO;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            conflictingBlock: object?.conflicting_block ? types_1.LightBlock.fromAmino(object.conflicting_block) : undefined,
            commonHeight: helpers_1.Long.fromString(object.common_height),
            byzantineValidators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e) => validator_1.Validator.fromAmino(e)) : [],
            totalVotingPower: helpers_1.Long.fromString(object.total_voting_power),
            timestamp: object.timestamp
        };
    },
    toAmino(message) {
        const obj = {};
        obj.conflicting_block = message.conflictingBlock ? types_1.LightBlock.toAmino(message.conflictingBlock) : undefined;
        obj.common_height = message.commonHeight ? message.commonHeight.toString() : undefined;
        if (message.byzantineValidators) {
            obj.byzantine_validators = message.byzantineValidators.map(e => e ? validator_1.Validator.toAmino(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LightClientAttackEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LightClientAttackEvidence.decode(message.value);
    },
    toProto(message) {
        return exports.LightClientAttackEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightClientAttackEvidence",
            value: exports.LightClientAttackEvidence.encode(message).finish()
        };
    }
};
function createBaseEvidenceList() {
    return {
        evidence: []
    };
}
exports.EvidenceList = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.evidence) {
            exports.Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(exports.Evidence.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEvidenceList();
        message.evidence = object.evidence?.map(e => exports.Evidence.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            evidence: Array.isArray(object?.evidence) ? object.evidence.map((e) => exports.Evidence.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? exports.Evidence.toAmino(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EvidenceList.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EvidenceList.decode(message.value);
    },
    toProto(message) {
        return exports.EvidenceList.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.EvidenceList",
            value: exports.EvidenceList.encode(message).finish()
        };
    }
};
//# sourceMappingURL=evidence.js.map