import * as _m0 from "protobufjs/minimal";
import { isSet } from "../helpers";
export var HashOp;
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
})(HashOp || (HashOp = {}));
export const HashOpSDKType = HashOp;
export const HashOpAmino = HashOp;
export function hashOpFromJSON(object) {
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
export function hashOpToJSON(object) {
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
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
export var LengthOp;
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
})(LengthOp || (LengthOp = {}));
export const LengthOpSDKType = LengthOp;
export const LengthOpAmino = LengthOp;
export function lengthOpFromJSON(object) {
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
export function lengthOpToJSON(object) {
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
function createBaseExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: LeafOp.fromPartial({}),
        path: []
    };
}
export const ExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.path) {
            InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.leaf = LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.path.push(InnerOp.decode(reader, reader.uint32()));
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
        message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map(e => InnerOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            leaf: object?.leaf ? LeafOp.fromAmino(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => InnerOp.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.leaf = message.leaf ? LeafOp.toAmino(message.leaf) : undefined;
        if (message.path) {
            obj.path = message.path.map(e => e ? InnerOp.toAmino(e) : undefined);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ExistenceProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExistenceProof.decode(message.value);
    },
    toProto(message) {
        return ExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.ExistenceProof",
            value: ExistenceProof.encode(message).finish()
        };
    }
};
function createBaseNonExistenceProof() {
    return {
        key: new Uint8Array(),
        left: ExistenceProof.fromPartial({}),
        right: ExistenceProof.fromPartial({})
    };
}
export const NonExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
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
                    message.left = ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = ExistenceProof.decode(reader, reader.uint32());
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
        message.left = object.left !== undefined && object.left !== null ? ExistenceProof.fromPartial(object.left) : undefined;
        message.right = object.right !== undefined && object.right !== null ? ExistenceProof.fromPartial(object.right) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            left: object?.left ? ExistenceProof.fromAmino(object.left) : undefined,
            right: object?.right ? ExistenceProof.fromAmino(object.right) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.left = message.left ? ExistenceProof.toAmino(message.left) : undefined;
        obj.right = message.right ? ExistenceProof.toAmino(message.right) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NonExistenceProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NonExistenceProof.decode(message.value);
    },
    toProto(message) {
        return NonExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.NonExistenceProof",
            value: NonExistenceProof.encode(message).finish()
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
export const CommitmentProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
        }
        if (message.compressed !== undefined) {
            CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
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
                    message.exist = ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.batch = BatchProof.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
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
        message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
        message.batch = object.batch !== undefined && object.batch !== null ? BatchProof.fromPartial(object.batch) : undefined;
        message.compressed = object.compressed !== undefined && object.compressed !== null ? CompressedBatchProof.fromPartial(object.compressed) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            exist: object?.exist ? ExistenceProof.fromAmino(object.exist) : undefined,
            nonexist: object?.nonexist ? NonExistenceProof.fromAmino(object.nonexist) : undefined,
            batch: object?.batch ? BatchProof.fromAmino(object.batch) : undefined,
            compressed: object?.compressed ? CompressedBatchProof.fromAmino(object.compressed) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? ExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? NonExistenceProof.toAmino(message.nonexist) : undefined;
        obj.batch = message.batch ? BatchProof.toAmino(message.batch) : undefined;
        obj.compressed = message.compressed ? CompressedBatchProof.toAmino(message.compressed) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CommitmentProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommitmentProof.decode(message.value);
    },
    toProto(message) {
        return CommitmentProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CommitmentProof",
            value: CommitmentProof.encode(message).finish()
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
export const LeafOp = {
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
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1,
            prehashKey: isSet(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : -1,
            prehashValue: isSet(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : -1,
            length: isSet(object.length) ? lengthOpFromJSON(object.length) : -1,
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
        return LeafOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LeafOp.decode(message.value);
    },
    toProto(message) {
        return LeafOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.LeafOp",
            value: LeafOp.encode(message).finish()
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
export const InnerOp = {
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
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1,
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
        return InnerOp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return InnerOp.decode(message.value);
    },
    toProto(message) {
        return InnerOp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.InnerOp",
            value: InnerOp.encode(message).finish()
        };
    }
};
function createBaseProofSpec() {
    return {
        leafSpec: LeafOp.fromPartial({}),
        innerSpec: InnerSpec.fromPartial({}),
        maxDepth: 0,
        minDepth: 0
    };
}
export const ProofSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.leafSpec !== undefined) {
            LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
        }
        if (message.innerSpec !== undefined) {
            InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
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
                    message.leafSpec = LeafOp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.innerSpec = InnerSpec.decode(reader, reader.uint32());
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
        message.leafSpec = object.leafSpec !== undefined && object.leafSpec !== null ? LeafOp.fromPartial(object.leafSpec) : undefined;
        message.innerSpec = object.innerSpec !== undefined && object.innerSpec !== null ? InnerSpec.fromPartial(object.innerSpec) : undefined;
        message.maxDepth = object.maxDepth ?? 0;
        message.minDepth = object.minDepth ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            leafSpec: object?.leaf_spec ? LeafOp.fromAmino(object.leaf_spec) : undefined,
            innerSpec: object?.inner_spec ? InnerSpec.fromAmino(object.inner_spec) : undefined,
            maxDepth: object.max_depth,
            minDepth: object.min_depth
        };
    },
    toAmino(message) {
        const obj = {};
        obj.leaf_spec = message.leafSpec ? LeafOp.toAmino(message.leafSpec) : undefined;
        obj.inner_spec = message.innerSpec ? InnerSpec.toAmino(message.innerSpec) : undefined;
        obj.max_depth = message.maxDepth;
        obj.min_depth = message.minDepth;
        return obj;
    },
    fromAminoMsg(object) {
        return ProofSpec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProofSpec.decode(message.value);
    },
    toProto(message) {
        return ProofSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.ProofSpec",
            value: ProofSpec.encode(message).finish()
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
export const InnerSpec = {
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
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1
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
        return InnerSpec.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return InnerSpec.decode(message.value);
    },
    toProto(message) {
        return InnerSpec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.InnerSpec",
            value: InnerSpec.encode(message).finish()
        };
    }
};
function createBaseBatchProof() {
    return {
        entries: []
    };
}
export const BatchProof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.entries.push(BatchEntry.decode(reader, reader.uint32()));
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
        message.entries = object.entries?.map(e => BatchEntry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => BatchEntry.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? BatchEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BatchProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchProof.decode(message.value);
    },
    toProto(message) {
        return BatchProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.BatchProof",
            value: BatchProof.encode(message).finish()
        };
    }
};
function createBaseBatchEntry() {
    return {
        exist: undefined,
        nonexist: undefined
    };
}
export const BatchEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
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
                    message.exist = ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
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
        message.exist = object.exist !== undefined && object.exist !== null ? ExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? NonExistenceProof.fromPartial(object.nonexist) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            exist: object?.exist ? ExistenceProof.fromAmino(object.exist) : undefined,
            nonexist: object?.nonexist ? NonExistenceProof.fromAmino(object.nonexist) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? ExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? NonExistenceProof.toAmino(message.nonexist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BatchEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BatchEntry.decode(message.value);
    },
    toProto(message) {
        return BatchEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.BatchEntry",
            value: BatchEntry.encode(message).finish()
        };
    }
};
function createBaseCompressedBatchProof() {
    return {
        entries: [],
        lookupInners: []
    };
}
export const CompressedBatchProof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lookupInners) {
            InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lookupInners.push(InnerOp.decode(reader, reader.uint32()));
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
        message.entries = object.entries?.map(e => CompressedBatchEntry.fromPartial(e)) || [];
        message.lookupInners = object.lookupInners?.map(e => InnerOp.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => CompressedBatchEntry.fromAmino(e)) : [],
            lookupInners: Array.isArray(object?.lookup_inners) ? object.lookup_inners.map((e) => InnerOp.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? CompressedBatchEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        if (message.lookupInners) {
            obj.lookup_inners = message.lookupInners.map(e => e ? InnerOp.toAmino(e) : undefined);
        }
        else {
            obj.lookup_inners = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CompressedBatchProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CompressedBatchProof.decode(message.value);
    },
    toProto(message) {
        return CompressedBatchProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CompressedBatchProof",
            value: CompressedBatchProof.encode(message).finish()
        };
    }
};
function createBaseCompressedBatchEntry() {
    return {
        exist: undefined,
        nonexist: undefined
    };
}
export const CompressedBatchEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
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
                    message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
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
        message.exist = object.exist !== undefined && object.exist !== null ? CompressedExistenceProof.fromPartial(object.exist) : undefined;
        message.nonexist = object.nonexist !== undefined && object.nonexist !== null ? CompressedNonExistenceProof.fromPartial(object.nonexist) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            exist: object?.exist ? CompressedExistenceProof.fromAmino(object.exist) : undefined,
            nonexist: object?.nonexist ? CompressedNonExistenceProof.fromAmino(object.nonexist) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.exist = message.exist ? CompressedExistenceProof.toAmino(message.exist) : undefined;
        obj.nonexist = message.nonexist ? CompressedNonExistenceProof.toAmino(message.nonexist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CompressedBatchEntry.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CompressedBatchEntry.decode(message.value);
    },
    toProto(message) {
        return CompressedBatchEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CompressedBatchEntry",
            value: CompressedBatchEntry.encode(message).finish()
        };
    }
};
function createBaseCompressedExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: LeafOp.fromPartial({}),
        path: []
    };
}
export const CompressedExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
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
                    message.leaf = LeafOp.decode(reader, reader.uint32());
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
        message.leaf = object.leaf !== undefined && object.leaf !== null ? LeafOp.fromPartial(object.leaf) : undefined;
        message.path = object.path?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            leaf: object?.leaf ? LeafOp.fromAmino(object.leaf) : undefined,
            path: Array.isArray(object?.path) ? object.path.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.leaf = message.leaf ? LeafOp.toAmino(message.leaf) : undefined;
        if (message.path) {
            obj.path = message.path.map(e => e);
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CompressedExistenceProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CompressedExistenceProof.decode(message.value);
    },
    toProto(message) {
        return CompressedExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CompressedExistenceProof",
            value: CompressedExistenceProof.encode(message).finish()
        };
    }
};
function createBaseCompressedNonExistenceProof() {
    return {
        key: new Uint8Array(),
        left: CompressedExistenceProof.fromPartial({}),
        right: CompressedExistenceProof.fromPartial({})
    };
}
export const CompressedNonExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
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
                    message.left = CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = CompressedExistenceProof.decode(reader, reader.uint32());
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
        message.left = object.left !== undefined && object.left !== null ? CompressedExistenceProof.fromPartial(object.left) : undefined;
        message.right = object.right !== undefined && object.right !== null ? CompressedExistenceProof.fromPartial(object.right) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            left: object?.left ? CompressedExistenceProof.fromAmino(object.left) : undefined,
            right: object?.right ? CompressedExistenceProof.fromAmino(object.right) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.left = message.left ? CompressedExistenceProof.toAmino(message.left) : undefined;
        obj.right = message.right ? CompressedExistenceProof.toAmino(message.right) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CompressedNonExistenceProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CompressedNonExistenceProof.decode(message.value);
    },
    toProto(message) {
        return CompressedNonExistenceProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ics23.CompressedNonExistenceProof",
            value: CompressedNonExistenceProof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proofs.js.map