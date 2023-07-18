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
exports.CompressedNonExistenceProof = exports.CompressedExistenceProof = exports.CompressedBatchEntry = exports.CompressedBatchProof = exports.BatchEntry = exports.BatchProof = exports.InnerSpec = exports.ProofSpec = exports.InnerOp = exports.LeafOp = exports.CommitmentProof = exports.NonExistenceProof = exports.ExistenceProof = exports.lengthOpToJSON = exports.lengthOpFromJSON = exports.LengthOpAmino = exports.LengthOpSDKType = exports.LengthOp = exports.hashOpToJSON = exports.hashOpFromJSON = exports.HashOpAmino = exports.HashOpSDKType = exports.HashOp = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../helpers");
var HashOp;
(function (HashOp) {
    /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
    HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
    HashOp[HashOp["SHA256"] = 1] = "SHA256";
    HashOp[HashOp["SHA512"] = 2] = "SHA512";
    HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
    HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
    /** BITCOIN - ripemd160(sha256(x)) */
    HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
    HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOp || (exports.HashOp = HashOp = {}));
exports.HashOpSDKType = HashOp;
exports.HashOpAmino = HashOp;
function hashOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_HASH":
            return HashOp.NO_HASH;
        case 1:
        case "SHA256":
            return HashOp.SHA256;
        case 2:
        case "SHA512":
            return HashOp.SHA512;
        case 3:
        case "KECCAK":
            return HashOp.KECCAK;
        case 4:
        case "RIPEMD160":
            return HashOp.RIPEMD160;
        case 5:
        case "BITCOIN":
            return HashOp.BITCOIN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HashOp.UNRECOGNIZED;
    }
}
exports.hashOpFromJSON = hashOpFromJSON;
function hashOpToJSON(object) {
    switch (object) {
        case HashOp.NO_HASH:
            return "NO_HASH";
        case HashOp.SHA256:
            return "SHA256";
        case HashOp.SHA512:
            return "SHA512";
        case HashOp.KECCAK:
            return "KECCAK";
        case HashOp.RIPEMD160:
            return "RIPEMD160";
        case HashOp.BITCOIN:
            return "BITCOIN";
        case HashOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.hashOpToJSON = hashOpToJSON;
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
var LengthOp;
(function (LengthOp) {
    /** NO_PREFIX - NO_PREFIX don't include any length info */
    LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
    /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
    LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
    /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
    LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
    /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
    /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
    /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
    /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
    /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
    LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
    /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
    LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
    LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOp || (exports.LengthOp = LengthOp = {}));
exports.LengthOpSDKType = LengthOp;
exports.LengthOpAmino = LengthOp;
function lengthOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_PREFIX":
            return LengthOp.NO_PREFIX;
        case 1:
        case "VAR_PROTO":
            return LengthOp.VAR_PROTO;
        case 2:
        case "VAR_RLP":
            return LengthOp.VAR_RLP;
        case 3:
        case "FIXED32_BIG":
            return LengthOp.FIXED32_BIG;
        case 4:
        case "FIXED32_LITTLE":
            return LengthOp.FIXED32_LITTLE;
        case 5:
        case "FIXED64_BIG":
            return LengthOp.FIXED64_BIG;
        case 6:
        case "FIXED64_LITTLE":
            return LengthOp.FIXED64_LITTLE;
        case 7:
        case "REQUIRE_32_BYTES":
            return LengthOp.REQUIRE_32_BYTES;
        case 8:
        case "REQUIRE_64_BYTES":
            return LengthOp.REQUIRE_64_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LengthOp.UNRECOGNIZED;
    }
}
exports.lengthOpFromJSON = lengthOpFromJSON;
function lengthOpToJSON(object) {
    switch (object) {
        case LengthOp.NO_PREFIX:
            return "NO_PREFIX";
        case LengthOp.VAR_PROTO:
            return "VAR_PROTO";
        case LengthOp.VAR_RLP:
            return "VAR_RLP";
        case LengthOp.FIXED32_BIG:
            return "FIXED32_BIG";
        case LengthOp.FIXED32_LITTLE:
            return "FIXED32_LITTLE";
        case LengthOp.FIXED64_BIG:
            return "FIXED64_BIG";
        case LengthOp.FIXED64_LITTLE:
            return "FIXED64_LITTLE";
        case LengthOp.REQUIRE_32_BYTES:
            return "REQUIRE_32_BYTES";
        case LengthOp.REQUIRE_64_BYTES:
            return "REQUIRE_64_BYTES";
        case LengthOp.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.lengthOpToJSON = lengthOpToJSON;
function createBaseExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: exports.LeafOp.fromPartial({}),
        path: []
    };
}
exports.ExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.path) {
            exports.InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.path.push(exports.InnerOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.leaf = object.leaf !== undefined && object.leaf !== null ? exports.LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map(e => exports.InnerOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            leaf: object?.leaf ? exports.LeafOp.fromAmino(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => exports.InnerOp.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.leaf = message.leaf ? exports.LeafOp.toAmino(message.leaf) : undefined;
        if (message.path) {
            obj.path = message.path.map(e => e ? exports.InnerOp.toAmino(e) : undefined);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExistenceProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.ExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.ExistenceProof",
            value: exports.ExistenceProof.encode(message).finish()
        };
    }
};
function createBaseNonExistenceProof() {
    return {
        key: new Uint8Array(),
        left: exports.ExistenceProof.fromPartial({}),
        right: exports.ExistenceProof.fromPartial({})
    };
}
exports.NonExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseNonExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.left = object.left !== undefined && object.left !== null ? exports.ExistenceProof.fromPartial(object.left) : undefined;
        message.right = object.right !== undefined && object.right !== null ? exports.ExistenceProof.fromPartial(object.right) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            left: object?.left ? exports.ExistenceProof.fromAmino(object.left) : undefined,
            right: object?.right ? exports.ExistenceProof.fromAmino(object.right) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.left = message.left ? exports.ExistenceProof.toAmino(message.left) : undefined;
        obj.right = message.right ? exports.ExistenceProof.toAmino(message.right) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NonExistenceProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NonExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.NonExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.NonExistenceProof",
            value: exports.NonExistenceProof.encode(message).finish()
        };
    }
};
function createBaseCommitmentProof() {
    return {
        exist: undefined,
        nonexist: undefined,
        batch: undefined,
        compressed: undefined
    };
}
exports.CommitmentProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            exports.BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
        }
        if (message.compressed !== undefined) {
            exports.CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitmentProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.batch = exports.BatchProof.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.compressed = exports.CompressedBatchProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCommitmentProof();
        message.exist = object.exist !== undefined && object.exist !== null ? exports.ExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? exports.NonExistenceProof.fromPartial(object.nonexist) : undefined;
        message.batch = object.batch !== undefined && object.batch !== null ? exports.BatchProof.fromPartial(object.batch) : undefined;
        message.compressed = object.compressed !== undefined && object.compressed !== null ? exports.CompressedBatchProof.fromPartial(object.compressed) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            exist: object?.exist ? exports.ExistenceProof.fromAmino(object.exist) : undefined,
            nonexist: object?.nonexist ? exports.NonExistenceProof.fromAmino(object.nonexist) : undefined,
            batch: object?.batch ? exports.BatchProof.fromAmino(object.batch) : undefined,
            compressed: object?.compressed ? exports.CompressedBatchProof.fromAmino(object.compressed) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? exports.ExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? exports.NonExistenceProof.toAmino(message.nonexist) : undefined;
        obj.batch = message.batch ? exports.BatchProof.toAmino(message.batch) : undefined;
        obj.compressed = message.compressed ? exports.CompressedBatchProof.toAmino(message.compressed) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitmentProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CommitmentProof.decode(message.value);
    },
    toProto(message) {
        return exports.CommitmentProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CommitmentProof",
            value: exports.CommitmentProof.encode(message).finish()
        };
    }
};
function createBaseLeafOp() {
    return {
        hash: 0,
        prehashKey: 0,
        prehashValue: 0,
        length: 0,
        prefix: new Uint8Array()
    };
}
exports.LeafOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prehashKey !== 0) {
            writer.uint32(16).int32(message.prehashKey);
        }
        if (message.prehashValue !== 0) {
            writer.uint32(24).int32(message.prehashValue);
        }
        if (message.length !== 0) {
            writer.uint32(32).int32(message.length);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(42).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeafOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prehashKey = reader.int32();
                    break;
                case 3:
                    message.prehashValue = reader.int32();
                    break;
                case 4:
                    message.length = reader.int32();
                    break;
                case 5:
                    message.prefix = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLeafOp();
        message.hash = object.hash ?? 0;
        message.prehashKey = object.prehashKey ?? 0;
        message.prehashValue = object.prehashValue ?? 0;
        message.length = object.length ?? 0;
        message.prefix = object.prefix ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
            prehashKey: (0, helpers_1.isSet)(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : -1,
            prehashValue: (0, helpers_1.isSet)(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : -1,
            length: (0, helpers_1.isSet)(object.length) ? lengthOpFromJSON(object.length) : -1,
            prefix: object.prefix
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.prehash_key = message.prehashKey;
        obj.prehash_value = message.prehashValue;
        obj.length = message.length;
        obj.prefix = message.prefix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LeafOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LeafOp.decode(message.value);
    },
    toProto(message) {
        return exports.LeafOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.LeafOp",
            value: exports.LeafOp.encode(message).finish()
        };
    }
};
function createBaseInnerOp() {
    return {
        hash: 0,
        prefix: new Uint8Array(),
        suffix: new Uint8Array()
    };
}
exports.InnerOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            writer.uint32(26).bytes(message.suffix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prefix = reader.bytes();
                    break;
                case 3:
                    message.suffix = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInnerOp();
        message.hash = object.hash ?? 0;
        message.prefix = object.prefix ?? new Uint8Array();
        message.suffix = object.suffix ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1,
            prefix: object.prefix,
            suffix: object.suffix
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.prefix = message.prefix;
        obj.suffix = message.suffix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InnerOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.InnerOp.decode(message.value);
    },
    toProto(message) {
        return exports.InnerOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.InnerOp",
            value: exports.InnerOp.encode(message).finish()
        };
    }
};
function createBaseProofSpec() {
    return {
        leafSpec: exports.LeafOp.fromPartial({}),
        innerSpec: exports.InnerSpec.fromPartial({}),
        maxDepth: 0,
        minDepth: 0
    };
}
exports.ProofSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.leafSpec !== undefined) {
            exports.LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.innerSpec !== undefined) {
            exports.InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
        }
        if (message.maxDepth !== 0) {
            writer.uint32(24).int32(message.maxDepth);
        }
        if (message.minDepth !== 0) {
            writer.uint32(32).int32(message.minDepth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leafSpec = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.innerSpec = exports.InnerSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.maxDepth = reader.int32();
                    break;
                case 4:
                    message.minDepth = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProofSpec();
        message.leafSpec = object.leafSpec !== undefined && object.leafSpec !== null ? exports.LeafOp.fromPartial(object.leafSpec) : undefined;
        message.innerSpec = object.innerSpec !== undefined && object.innerSpec !== null ? exports.InnerSpec.fromPartial(object.innerSpec) : undefined;
        message.maxDepth = object.maxDepth ?? 0;
        message.minDepth = object.minDepth ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            leafSpec: object?.leaf_spec ? exports.LeafOp.fromAmino(object.leaf_spec) : undefined,
            innerSpec: object?.inner_spec ? exports.InnerSpec.fromAmino(object.inner_spec) : undefined,
            maxDepth: object.max_depth,
            minDepth: object.min_depth
        };
    },
    toAmino(message) {
        const obj = {};
        obj.leaf_spec = message.leafSpec ? exports.LeafOp.toAmino(message.leafSpec) : undefined;
        obj.inner_spec = message.innerSpec ? exports.InnerSpec.toAmino(message.innerSpec) : undefined;
        obj.max_depth = message.maxDepth;
        obj.min_depth = message.minDepth;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProofSpec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProofSpec.decode(message.value);
    },
    toProto(message) {
        return exports.ProofSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.ProofSpec",
            value: exports.ProofSpec.encode(message).finish()
        };
    }
};
function createBaseInnerSpec() {
    return {
        childOrder: [],
        childSize: 0,
        minPrefixLength: 0,
        maxPrefixLength: 0,
        emptyChild: new Uint8Array(),
        hash: 0
    };
}
exports.InnerSpec = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.childOrder) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.childSize !== 0) {
            writer.uint32(16).int32(message.childSize);
        }
        if (message.minPrefixLength !== 0) {
            writer.uint32(24).int32(message.minPrefixLength);
        }
        if (message.maxPrefixLength !== 0) {
            writer.uint32(32).int32(message.maxPrefixLength);
        }
        if (message.emptyChild.length !== 0) {
            writer.uint32(42).bytes(message.emptyChild);
        }
        if (message.hash !== 0) {
            writer.uint32(48).int32(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.childOrder.push(reader.int32());
                        }
                    }
                    else {
                        message.childOrder.push(reader.int32());
                    }
                    break;
                case 2:
                    message.childSize = reader.int32();
                    break;
                case 3:
                    message.minPrefixLength = reader.int32();
                    break;
                case 4:
                    message.maxPrefixLength = reader.int32();
                    break;
                case 5:
                    message.emptyChild = reader.bytes();
                    break;
                case 6:
                    message.hash = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseInnerSpec();
        message.childOrder = object.childOrder?.map(e => e) || [];
        message.childSize = object.childSize ?? 0;
        message.minPrefixLength = object.minPrefixLength ?? 0;
        message.maxPrefixLength = object.maxPrefixLength ?? 0;
        message.emptyChild = object.emptyChild ?? new Uint8Array();
        message.hash = object.hash ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            childOrder: Array.isArray(object?.child_order) ? object.child_order.map((e) => e) : [],
            childSize: object.child_size,
            minPrefixLength: object.min_prefix_length,
            maxPrefixLength: object.max_prefix_length,
            emptyChild: object.empty_child,
            hash: (0, helpers_1.isSet)(object.hash) ? hashOpFromJSON(object.hash) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.childOrder) {
            obj.child_order = message.childOrder.map(e => e);
        }
        else {
            obj.child_order = [];
        }
        obj.child_size = message.childSize;
        obj.min_prefix_length = message.minPrefixLength;
        obj.max_prefix_length = message.maxPrefixLength;
        obj.empty_child = message.emptyChild;
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InnerSpec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.InnerSpec.decode(message.value);
    },
    toProto(message) {
        return exports.InnerSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.InnerSpec",
            value: exports.InnerSpec.encode(message).finish()
        };
    }
};
function createBaseBatchProof() {
    return {
        entries: []
    };
}
exports.BatchProof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            exports.BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.BatchEntry.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchProof();
        message.entries = object.entries?.map(e => exports.BatchEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.BatchEntry.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.BatchEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchProof.decode(message.value);
    },
    toProto(message) {
        return exports.BatchProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.BatchProof",
            value: exports.BatchProof.encode(message).finish()
        };
    }
};
function createBaseBatchEntry() {
    return {
        exist: undefined,
        nonexist: undefined
    };
}
exports.BatchEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchEntry();
        message.exist = object.exist !== undefined && object.exist !== null ? exports.ExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? exports.NonExistenceProof.fromPartial(object.nonexist) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            exist: object?.exist ? exports.ExistenceProof.fromAmino(object.exist) : undefined,
            nonexist: object?.nonexist ? exports.NonExistenceProof.fromAmino(object.nonexist) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? exports.ExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? exports.NonExistenceProof.toAmino(message.nonexist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchEntry.decode(message.value);
    },
    toProto(message) {
        return exports.BatchEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.BatchEntry",
            value: exports.BatchEntry.encode(message).finish()
        };
    }
};
function createBaseCompressedBatchProof() {
    return {
        entries: [],
        lookupInners: []
    };
}
exports.CompressedBatchProof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            exports.CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lookupInners) {
            exports.InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.CompressedBatchEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lookupInners.push(exports.InnerOp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchProof();
        message.entries = object.entries?.map(e => exports.CompressedBatchEntry.fromPartial(e)) || [];
        message.lookupInners = object.lookupInners?.map(e => exports.InnerOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.CompressedBatchEntry.fromAmino(e)) : [],
            lookupInners: Array.isArray(object?.lookup_inners) ? object.lookup_inners.map((e) => exports.InnerOp.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.CompressedBatchEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        if (message.lookupInners) {
            obj.lookup_inners = message.lookupInners.map(e => e ? exports.InnerOp.toAmino(e) : undefined);
        }
        else {
            obj.lookup_inners = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedBatchProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CompressedBatchProof.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedBatchProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CompressedBatchProof",
            value: exports.CompressedBatchProof.encode(message).finish()
        };
    }
};
function createBaseCompressedBatchEntry() {
    return {
        exist: undefined,
        nonexist: undefined
    };
}
exports.CompressedBatchEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            exports.CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.CompressedNonExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchEntry();
        message.exist = object.exist !== undefined && object.exist !== null ? exports.CompressedExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? exports.CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            exist: object?.exist ? exports.CompressedExistenceProof.fromAmino(object.exist) : undefined,
            nonexist: object?.nonexist ? exports.CompressedNonExistenceProof.fromAmino(object.nonexist) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? exports.CompressedExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? exports.CompressedNonExistenceProof.toAmino(message.nonexist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedBatchEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CompressedBatchEntry.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedBatchEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CompressedBatchEntry",
            value: exports.CompressedBatchEntry.encode(message).finish()
        };
    }
};
function createBaseCompressedExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: exports.LeafOp.fromPartial({}),
        path: []
    };
}
exports.CompressedExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompressedExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.leaf = object.leaf !== undefined && object.leaf !== null ? exports.LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            leaf: object?.leaf ? exports.LeafOp.fromAmino(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.leaf = message.leaf ? exports.LeafOp.toAmino(message.leaf) : undefined;
        if (message.path) {
            obj.path = message.path.map(e => e);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedExistenceProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CompressedExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CompressedExistenceProof",
            value: exports.CompressedExistenceProof.encode(message).finish()
        };
    }
};
function createBaseCompressedNonExistenceProof() {
    return {
        key: new Uint8Array(),
        left: exports.CompressedExistenceProof.fromPartial({}),
        right: exports.CompressedExistenceProof.fromPartial({})
    };
}
exports.CompressedNonExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCompressedNonExistenceProof();
        message.key = object.key ?? new Uint8Array();
        message.left = object.left !== undefined && object.left !== null ? exports.CompressedExistenceProof.fromPartial(object.left) : undefined;
        message.right = object.right !== undefined && object.right !== null ? exports.CompressedExistenceProof.fromPartial(object.right) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            left: object?.left ? exports.CompressedExistenceProof.fromAmino(object.left) : undefined,
            right: object?.right ? exports.CompressedExistenceProof.fromAmino(object.right) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.left = message.left ? exports.CompressedExistenceProof.toAmino(message.left) : undefined;
        obj.right = message.right ? exports.CompressedExistenceProof.toAmino(message.right) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompressedNonExistenceProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CompressedNonExistenceProof.decode(message.value);
    },
    toProto(message) {
        return exports.CompressedNonExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CompressedNonExistenceProof",
            value: exports.CompressedNonExistenceProof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proofs.js.map