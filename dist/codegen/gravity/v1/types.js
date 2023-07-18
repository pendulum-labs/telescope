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
exports.IBCMetadataProposal = exports.AirdropProposal = exports.UnhaltBridgeProposal = exports.ERC20ToDenom = exports.LastObservedEthereumBlockHeight = exports.Valset = exports.BridgeValidator = void 0;
const bank_1 = require("../../cosmos/bank/v1beta1/bank");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseBridgeValidator() {
    return {
        power: helpers_1.Long.UZERO,
        ethereumAddress: ""
    };
}
exports.BridgeValidator = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.power.isZero()) {
            writer.uint32(8).uint64(message.power);
        }
        if (message.ethereumAddress !== "") {
            writer.uint32(18).string(message.ethereumAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBridgeValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.power = reader.uint64();
                    break;
                case 2:
                    message.ethereumAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBridgeValidator();
        message.power = object.power !== undefined && object.power !== null ? helpers_1.Long.fromValue(object.power) : helpers_1.Long.UZERO;
        message.ethereumAddress = object.ethereumAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            power: helpers_1.Long.fromString(object.power),
            ethereumAddress: object.ethereum_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.power = message.power ? message.power.toString() : undefined;
        obj.ethereum_address = message.ethereumAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BridgeValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BridgeValidator.decode(message.value);
    },
    toProto(message) {
        return exports.BridgeValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.BridgeValidator",
            value: exports.BridgeValidator.encode(message).finish()
        };
    }
};
function createBaseValset() {
    return {
        nonce: helpers_1.Long.UZERO,
        members: [],
        height: helpers_1.Long.UZERO,
        rewardAmount: "",
        rewardToken: ""
    };
}
exports.Valset = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        for (const v of message.members) {
            exports.BridgeValidator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.rewardAmount !== "") {
            writer.uint32(34).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(42).string(message.rewardToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.members.push(exports.BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                case 4:
                    message.rewardAmount = reader.string();
                    break;
                case 5:
                    message.rewardToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseValset();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO;
        message.members = object.members?.map(e => exports.BridgeValidator.fromPartial(e)) || [];
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.UZERO;
        message.rewardAmount = object.rewardAmount ?? "";
        message.rewardToken = object.rewardToken ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: helpers_1.Long.fromString(object.nonce),
            members: Array.isArray(object?.members) ? object.members.map((e) => exports.BridgeValidator.fromAmino(e)) : [],
            height: helpers_1.Long.fromString(object.height),
            rewardAmount: object.reward_amount,
            rewardToken: object.reward_token
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        if (message.members) {
            obj.members = message.members.map(e => e ? exports.BridgeValidator.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.height = message.height ? message.height.toString() : undefined;
        obj.reward_amount = message.rewardAmount;
        obj.reward_token = message.rewardToken;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Valset.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Valset.decode(message.value);
    },
    toProto(message) {
        return exports.Valset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.Valset",
            value: exports.Valset.encode(message).finish()
        };
    }
};
function createBaseLastObservedEthereumBlockHeight() {
    return {
        cosmosBlockHeight: helpers_1.Long.UZERO,
        ethereumBlockHeight: helpers_1.Long.UZERO
    };
}
exports.LastObservedEthereumBlockHeight = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.cosmosBlockHeight.isZero()) {
            writer.uint32(8).uint64(message.cosmosBlockHeight);
        }
        if (!message.ethereumBlockHeight.isZero()) {
            writer.uint32(16).uint64(message.ethereumBlockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastObservedEthereumBlockHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cosmosBlockHeight = reader.uint64();
                    break;
                case 2:
                    message.ethereumBlockHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseLastObservedEthereumBlockHeight();
        message.cosmosBlockHeight = object.cosmosBlockHeight !== undefined && object.cosmosBlockHeight !== null ? helpers_1.Long.fromValue(object.cosmosBlockHeight) : helpers_1.Long.UZERO;
        message.ethereumBlockHeight = object.ethereumBlockHeight !== undefined && object.ethereumBlockHeight !== null ? helpers_1.Long.fromValue(object.ethereumBlockHeight) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            cosmosBlockHeight: helpers_1.Long.fromString(object.cosmos_block_height),
            ethereumBlockHeight: helpers_1.Long.fromString(object.ethereum_block_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.cosmos_block_height = message.cosmosBlockHeight ? message.cosmosBlockHeight.toString() : undefined;
        obj.ethereum_block_height = message.ethereumBlockHeight ? message.ethereumBlockHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LastObservedEthereumBlockHeight.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LastObservedEthereumBlockHeight.decode(message.value);
    },
    toProto(message) {
        return exports.LastObservedEthereumBlockHeight.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.LastObservedEthereumBlockHeight",
            value: exports.LastObservedEthereumBlockHeight.encode(message).finish()
        };
    }
};
function createBaseERC20ToDenom() {
    return {
        erc20: "",
        denom: ""
    };
}
exports.ERC20ToDenom = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.erc20 !== "") {
            writer.uint32(10).string(message.erc20);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseERC20ToDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = reader.string();
                    break;
                case 2:
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
        const message = createBaseERC20ToDenom();
        message.erc20 = object.erc20 ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            erc20: object.erc20,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.erc20 = message.erc20;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ERC20ToDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ERC20ToDenom.decode(message.value);
    },
    toProto(message) {
        return exports.ERC20ToDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.ERC20ToDenom",
            value: exports.ERC20ToDenom.encode(message).finish()
        };
    }
};
function createBaseUnhaltBridgeProposal() {
    return {
        title: "",
        description: "",
        targetNonce: helpers_1.Long.UZERO
    };
}
exports.UnhaltBridgeProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (!message.targetNonce.isZero()) {
            writer.uint32(32).uint64(message.targetNonce);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnhaltBridgeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.targetNonce = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUnhaltBridgeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.targetNonce = object.targetNonce !== undefined && object.targetNonce !== null ? helpers_1.Long.fromValue(object.targetNonce) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            targetNonce: helpers_1.Long.fromString(object.target_nonce)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.target_nonce = message.targetNonce ? message.targetNonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnhaltBridgeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UnhaltBridgeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UnhaltBridgeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.UnhaltBridgeProposal",
            value: exports.UnhaltBridgeProposal.encode(message).finish()
        };
    }
};
function createBaseAirdropProposal() {
    return {
        title: "",
        description: "",
        denom: "",
        recipients: new Uint8Array(),
        amounts: []
    };
}
exports.AirdropProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        if (message.recipients.length !== 0) {
            writer.uint32(34).bytes(message.recipients);
        }
        writer.uint32(42).fork();
        for (const v of message.amounts) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAirdropProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                case 4:
                    message.recipients = reader.bytes();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.amounts.push(reader.uint64());
                        }
                    }
                    else {
                        message.amounts.push(reader.uint64());
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
        const message = createBaseAirdropProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.denom = object.denom ?? "";
        message.recipients = object.recipients ?? new Uint8Array();
        message.amounts = object.amounts?.map(e => helpers_1.Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            denom: object.denom,
            recipients: object.recipients,
            amounts: Array.isArray(object?.amounts) ? object.amounts.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.denom = message.denom;
        obj.recipients = message.recipients;
        if (message.amounts) {
            obj.amounts = message.amounts.map(e => e);
        }
        else {
            obj.amounts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AirdropProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AirdropProposal.decode(message.value);
    },
    toProto(message) {
        return exports.AirdropProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.AirdropProposal",
            value: exports.AirdropProposal.encode(message).finish()
        };
    }
};
function createBaseIBCMetadataProposal() {
    return {
        title: "",
        description: "",
        metadata: bank_1.Metadata.fromPartial({}),
        ibcDenom: ""
    };
}
exports.IBCMetadataProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.metadata !== undefined) {
            bank_1.Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
        }
        if (message.ibcDenom !== "") {
            writer.uint32(34).string(message.ibcDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCMetadataProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.metadata = bank_1.Metadata.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ibcDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseIBCMetadataProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.metadata = object.metadata !== undefined && object.metadata !== null ? bank_1.Metadata.fromPartial(object.metadata) : undefined;
        message.ibcDenom = object.ibcDenom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            metadata: object?.metadata ? bank_1.Metadata.fromAmino(object.metadata) : undefined,
            ibcDenom: object.ibc_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.metadata = message.metadata ? bank_1.Metadata.toAmino(message.metadata) : undefined;
        obj.ibc_denom = message.ibcDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IBCMetadataProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.IBCMetadataProposal.decode(message.value);
    },
    toProto(message) {
        return exports.IBCMetadataProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.IBCMetadataProposal",
            value: exports.IBCMetadataProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map