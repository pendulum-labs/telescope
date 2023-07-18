import { Metadata } from "../../cosmos/bank/v1beta1/bank";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseBridgeValidator() {
    return {
        power: Long.UZERO,
        ethereumAddress: ""
    };
}
export const BridgeValidator = {
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
        message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.UZERO;
        message.ethereumAddress = object.ethereumAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            power: Long.fromString(object.power),
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
        return BridgeValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BridgeValidator.decode(message.value);
    },
    toProto(message) {
        return BridgeValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.BridgeValidator",
            value: BridgeValidator.encode(message).finish()
        };
    }
};
function createBaseValset() {
    return {
        nonce: Long.UZERO,
        members: [],
        height: Long.UZERO,
        rewardAmount: "",
        rewardToken: ""
    };
}
export const Valset = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        for (const v of message.members) {
            BridgeValidator.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.members.push(BridgeValidator.decode(reader, reader.uint32()));
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
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
        message.rewardAmount = object.rewardAmount ?? "";
        message.rewardToken = object.rewardToken ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: Long.fromString(object.nonce),
            members: Array.isArray(object?.members) ? object.members.map((e) => BridgeValidator.fromAmino(e)) : [],
            height: Long.fromString(object.height),
            rewardAmount: object.reward_amount,
            rewardToken: object.reward_token
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        if (message.members) {
            obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
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
        return Valset.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Valset.decode(message.value);
    },
    toProto(message) {
        return Valset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.Valset",
            value: Valset.encode(message).finish()
        };
    }
};
function createBaseLastObservedEthereumBlockHeight() {
    return {
        cosmosBlockHeight: Long.UZERO,
        ethereumBlockHeight: Long.UZERO
    };
}
export const LastObservedEthereumBlockHeight = {
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
        message.cosmosBlockHeight = object.cosmosBlockHeight !== undefined && object.cosmosBlockHeight !== null ? Long.fromValue(object.cosmosBlockHeight) : Long.UZERO;
        message.ethereumBlockHeight = object.ethereumBlockHeight !== undefined && object.ethereumBlockHeight !== null ? Long.fromValue(object.ethereumBlockHeight) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            cosmosBlockHeight: Long.fromString(object.cosmos_block_height),
            ethereumBlockHeight: Long.fromString(object.ethereum_block_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.cosmos_block_height = message.cosmosBlockHeight ? message.cosmosBlockHeight.toString() : undefined;
        obj.ethereum_block_height = message.ethereumBlockHeight ? message.ethereumBlockHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LastObservedEthereumBlockHeight.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LastObservedEthereumBlockHeight.decode(message.value);
    },
    toProto(message) {
        return LastObservedEthereumBlockHeight.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.LastObservedEthereumBlockHeight",
            value: LastObservedEthereumBlockHeight.encode(message).finish()
        };
    }
};
function createBaseERC20ToDenom() {
    return {
        erc20: "",
        denom: ""
    };
}
export const ERC20ToDenom = {
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
        return ERC20ToDenom.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ERC20ToDenom.decode(message.value);
    },
    toProto(message) {
        return ERC20ToDenom.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.ERC20ToDenom",
            value: ERC20ToDenom.encode(message).finish()
        };
    }
};
function createBaseUnhaltBridgeProposal() {
    return {
        title: "",
        description: "",
        targetNonce: Long.UZERO
    };
}
export const UnhaltBridgeProposal = {
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
        message.targetNonce = object.targetNonce !== undefined && object.targetNonce !== null ? Long.fromValue(object.targetNonce) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            targetNonce: Long.fromString(object.target_nonce)
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
        return UnhaltBridgeProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return UnhaltBridgeProposal.decode(message.value);
    },
    toProto(message) {
        return UnhaltBridgeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.UnhaltBridgeProposal",
            value: UnhaltBridgeProposal.encode(message).finish()
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
export const AirdropProposal = {
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
        message.amounts = object.amounts?.map(e => Long.fromValue(e)) || [];
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
        return AirdropProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AirdropProposal.decode(message.value);
    },
    toProto(message) {
        return AirdropProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.AirdropProposal",
            value: AirdropProposal.encode(message).finish()
        };
    }
};
function createBaseIBCMetadataProposal() {
    return {
        title: "",
        description: "",
        metadata: Metadata.fromPartial({}),
        ibcDenom: ""
    };
}
export const IBCMetadataProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
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
                    message.metadata = Metadata.decode(reader, reader.uint32());
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
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        message.ibcDenom = object.ibcDenom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined,
            ibcDenom: object.ibc_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        obj.ibc_denom = message.ibcDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return IBCMetadataProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return IBCMetadataProposal.decode(message.value);
    },
    toProto(message) {
        return IBCMetadataProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.IBCMetadataProposal",
            value: IBCMetadataProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map