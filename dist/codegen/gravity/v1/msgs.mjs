import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BridgeValidator } from "./types";
import { Any } from "../../google/protobuf/any";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgSetOrchestratorAddress() {
    return {
        validator: "",
        orchestrator: "",
        ethAddress: ""
    };
}
export const MsgSetOrchestratorAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
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
        const message = createBaseMsgSetOrchestratorAddress();
        message.validator = object.validator ?? "";
        message.orchestrator = object.orchestrator ?? "";
        message.ethAddress = object.ethAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validator: object.validator,
            orchestrator: object.orchestrator,
            ethAddress: object.eth_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator;
        obj.orchestrator = message.orchestrator;
        obj.eth_address = message.ethAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetOrchestratorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSetOrchestratorAddress.decode(message.value);
    },
    toProto(message) {
        return MsgSetOrchestratorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
            value: MsgSetOrchestratorAddress.encode(message).finish()
        };
    }
};
function createBaseMsgSetOrchestratorAddressResponse() {
    return {};
}
export const MsgSetOrchestratorAddressResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetOrchestratorAddressResponse();
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
        const message = createBaseMsgSetOrchestratorAddressResponse();
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
        return MsgSetOrchestratorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSetOrchestratorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetOrchestratorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse",
            value: MsgSetOrchestratorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseMsgValsetConfirm() {
    return {
        nonce: Long.UZERO,
        orchestrator: "",
        ethAddress: "",
        signature: ""
    };
}
export const MsgValsetConfirm = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(18).string(message.orchestrator);
        }
        if (message.ethAddress !== "") {
            writer.uint32(26).string(message.ethAddress);
        }
        if (message.signature !== "") {
            writer.uint32(34).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.orchestrator = reader.string();
                    break;
                case 3:
                    message.ethAddress = reader.string();
                    break;
                case 4:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgValsetConfirm();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        message.orchestrator = object.orchestrator ?? "";
        message.ethAddress = object.ethAddress ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: Long.fromString(object.nonce),
            orchestrator: object.orchestrator,
            ethAddress: object.eth_address,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        obj.orchestrator = message.orchestrator;
        obj.eth_address = message.ethAddress;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgValsetConfirm.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgValsetConfirm.decode(message.value);
    },
    toProto(message) {
        return MsgValsetConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgValsetConfirm",
            value: MsgValsetConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgValsetConfirmResponse() {
    return {};
}
export const MsgValsetConfirmResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetConfirmResponse();
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
        const message = createBaseMsgValsetConfirmResponse();
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
        return MsgValsetConfirmResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgValsetConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return MsgValsetConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgValsetConfirmResponse",
            value: MsgValsetConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSendToEth() {
    return {
        sender: "",
        ethDest: "",
        amount: Coin.fromPartial({}),
        bridgeFee: Coin.fromPartial({})
    };
}
export const MsgSendToEth = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ethDest !== "") {
            writer.uint32(18).string(message.ethDest);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.bridgeFee !== undefined) {
            Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.ethDest = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.bridgeFee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSendToEth();
        message.sender = object.sender ?? "";
        message.ethDest = object.ethDest ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.bridgeFee = object.bridgeFee !== undefined && object.bridgeFee !== null ? Coin.fromPartial(object.bridgeFee) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            ethDest: object.eth_dest,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            bridgeFee: object?.bridge_fee ? Coin.fromAmino(object.bridge_fee) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.eth_dest = message.ethDest;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.bridge_fee = message.bridgeFee ? Coin.toAmino(message.bridgeFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSendToEth.decode(message.value);
    },
    toProto(message) {
        return MsgSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSendToEth",
            value: MsgSendToEth.encode(message).finish()
        };
    }
};
function createBaseMsgSendToEthResponse() {
    return {};
}
export const MsgSendToEthResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToEthResponse();
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
        const message = createBaseMsgSendToEthResponse();
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
        return MsgSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSendToEthResponse",
            value: MsgSendToEthResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRequestBatch() {
    return {
        sender: "",
        denom: ""
    };
}
export const MsgRequestBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
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
        const message = createBaseMsgRequestBatch();
        message.sender = object.sender ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRequestBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRequestBatch.decode(message.value);
    },
    toProto(message) {
        return MsgRequestBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgRequestBatch",
            value: MsgRequestBatch.encode(message).finish()
        };
    }
};
function createBaseMsgRequestBatchResponse() {
    return {};
}
export const MsgRequestBatchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestBatchResponse();
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
        const message = createBaseMsgRequestBatchResponse();
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
        return MsgRequestBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRequestBatchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRequestBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgRequestBatchResponse",
            value: MsgRequestBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmBatch() {
    return {
        nonce: Long.UZERO,
        tokenContract: "",
        ethSigner: "",
        orchestrator: "",
        signature: ""
    };
}
export const MsgConfirmBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.nonce.isZero()) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(18).string(message.tokenContract);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = reader.uint64();
                    break;
                case 2:
                    message.tokenContract = reader.string();
                    break;
                case 3:
                    message.ethSigner = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgConfirmBatch();
        message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
        message.tokenContract = object.tokenContract ?? "";
        message.ethSigner = object.ethSigner ?? "";
        message.orchestrator = object.orchestrator ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: Long.fromString(object.nonce),
            tokenContract: object.token_contract,
            ethSigner: object.eth_signer,
            orchestrator: object.orchestrator,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        obj.token_contract = message.tokenContract;
        obj.eth_signer = message.ethSigner;
        obj.orchestrator = message.orchestrator;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConfirmBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConfirmBatch.decode(message.value);
    },
    toProto(message) {
        return MsgConfirmBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgConfirmBatch",
            value: MsgConfirmBatch.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmBatchResponse() {
    return {};
}
export const MsgConfirmBatchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmBatchResponse();
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
        const message = createBaseMsgConfirmBatchResponse();
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
        return MsgConfirmBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConfirmBatchResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConfirmBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgConfirmBatchResponse",
            value: MsgConfirmBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmLogicCall() {
    return {
        invalidationId: "",
        invalidationNonce: Long.UZERO,
        ethSigner: "",
        orchestrator: "",
        signature: ""
    };
}
export const MsgConfirmLogicCall = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.invalidationId !== "") {
            writer.uint32(10).string(message.invalidationId);
        }
        if (!message.invalidationNonce.isZero()) {
            writer.uint32(16).uint64(message.invalidationNonce);
        }
        if (message.ethSigner !== "") {
            writer.uint32(26).string(message.ethSigner);
        }
        if (message.orchestrator !== "") {
            writer.uint32(34).string(message.orchestrator);
        }
        if (message.signature !== "") {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmLogicCall();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invalidationId = reader.string();
                    break;
                case 2:
                    message.invalidationNonce = reader.uint64();
                    break;
                case 3:
                    message.ethSigner = reader.string();
                    break;
                case 4:
                    message.orchestrator = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgConfirmLogicCall();
        message.invalidationId = object.invalidationId ?? "";
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
        message.ethSigner = object.ethSigner ?? "";
        message.orchestrator = object.orchestrator ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            invalidationId: object.invalidation_id,
            invalidationNonce: Long.fromString(object.invalidation_nonce),
            ethSigner: object.eth_signer,
            orchestrator: object.orchestrator,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.invalidation_id = message.invalidationId;
        obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
        obj.eth_signer = message.ethSigner;
        obj.orchestrator = message.orchestrator;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConfirmLogicCall.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConfirmLogicCall.decode(message.value);
    },
    toProto(message) {
        return MsgConfirmLogicCall.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgConfirmLogicCall",
            value: MsgConfirmLogicCall.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmLogicCallResponse() {
    return {};
}
export const MsgConfirmLogicCallResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConfirmLogicCallResponse();
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
        const message = createBaseMsgConfirmLogicCallResponse();
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
        return MsgConfirmLogicCallResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgConfirmLogicCallResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConfirmLogicCallResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse",
            value: MsgConfirmLogicCallResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSendToCosmosClaim() {
    return {
        eventNonce: Long.UZERO,
        blockHeight: Long.UZERO,
        tokenContract: "",
        amount: "",
        ethereumSender: "",
        cosmosReceiver: "",
        orchestrator: ""
    };
}
export const MsgSendToCosmosClaim = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.eventNonce.isZero()) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (!message.blockHeight.isZero()) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.tokenContract !== "") {
            writer.uint32(26).string(message.tokenContract);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(42).string(message.ethereumSender);
        }
        if (message.cosmosReceiver !== "") {
            writer.uint32(50).string(message.cosmosReceiver);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToCosmosClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.blockHeight = reader.uint64();
                    break;
                case 3:
                    message.tokenContract = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.ethereumSender = reader.string();
                    break;
                case 6:
                    message.cosmosReceiver = reader.string();
                    break;
                case 7:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSendToCosmosClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
        message.tokenContract = object.tokenContract ?? "";
        message.amount = object.amount ?? "";
        message.ethereumSender = object.ethereumSender ?? "";
        message.cosmosReceiver = object.cosmosReceiver ?? "";
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: Long.fromString(object.event_nonce),
            blockHeight: Long.fromString(object.block_height),
            tokenContract: object.token_contract,
            amount: object.amount,
            ethereumSender: object.ethereum_sender,
            cosmosReceiver: object.cosmos_receiver,
            orchestrator: object.orchestrator
        };
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        obj.token_contract = message.tokenContract;
        obj.amount = message.amount;
        obj.ethereum_sender = message.ethereumSender;
        obj.cosmos_receiver = message.cosmosReceiver;
        obj.orchestrator = message.orchestrator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSendToCosmosClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSendToCosmosClaim.decode(message.value);
    },
    toProto(message) {
        return MsgSendToCosmosClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
            value: MsgSendToCosmosClaim.encode(message).finish()
        };
    }
};
function createBaseMsgSendToCosmosClaimResponse() {
    return {};
}
export const MsgSendToCosmosClaimResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendToCosmosClaimResponse();
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
        const message = createBaseMsgSendToCosmosClaimResponse();
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
        return MsgSendToCosmosClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSendToCosmosClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSendToCosmosClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse",
            value: MsgSendToCosmosClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchSendToEthClaim() {
    return {
        eventNonce: Long.UZERO,
        blockHeight: Long.UZERO,
        batchNonce: Long.UZERO,
        tokenContract: "",
        orchestrator: ""
    };
}
export const MsgBatchSendToEthClaim = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.eventNonce.isZero()) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (!message.blockHeight.isZero()) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (!message.batchNonce.isZero()) {
            writer.uint32(24).uint64(message.batchNonce);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchSendToEthClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.blockHeight = reader.uint64();
                    break;
                case 3:
                    message.batchNonce = reader.uint64();
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgBatchSendToEthClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
        message.tokenContract = object.tokenContract ?? "";
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: Long.fromString(object.event_nonce),
            blockHeight: Long.fromString(object.block_height),
            batchNonce: Long.fromString(object.batch_nonce),
            tokenContract: object.token_contract,
            orchestrator: object.orchestrator
        };
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
        obj.token_contract = message.tokenContract;
        obj.orchestrator = message.orchestrator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBatchSendToEthClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchSendToEthClaim.decode(message.value);
    },
    toProto(message) {
        return MsgBatchSendToEthClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
            value: MsgBatchSendToEthClaim.encode(message).finish()
        };
    }
};
function createBaseMsgBatchSendToEthClaimResponse() {
    return {};
}
export const MsgBatchSendToEthClaimResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBatchSendToEthClaimResponse();
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
        const message = createBaseMsgBatchSendToEthClaimResponse();
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
        return MsgBatchSendToEthClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBatchSendToEthClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBatchSendToEthClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse",
            value: MsgBatchSendToEthClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgERC20DeployedClaim() {
    return {
        eventNonce: Long.UZERO,
        blockHeight: Long.UZERO,
        cosmosDenom: "",
        tokenContract: "",
        name: "",
        symbol: "",
        decimals: Long.UZERO,
        orchestrator: ""
    };
}
export const MsgERC20DeployedClaim = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.eventNonce.isZero()) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (!message.blockHeight.isZero()) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.cosmosDenom !== "") {
            writer.uint32(26).string(message.cosmosDenom);
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(50).string(message.symbol);
        }
        if (!message.decimals.isZero()) {
            writer.uint32(56).uint64(message.decimals);
        }
        if (message.orchestrator !== "") {
            writer.uint32(66).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.blockHeight = reader.uint64();
                    break;
                case 3:
                    message.cosmosDenom = reader.string();
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.symbol = reader.string();
                    break;
                case 7:
                    message.decimals = reader.uint64();
                    break;
                case 8:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgERC20DeployedClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
        message.cosmosDenom = object.cosmosDenom ?? "";
        message.tokenContract = object.tokenContract ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.UZERO;
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: Long.fromString(object.event_nonce),
            blockHeight: Long.fromString(object.block_height),
            cosmosDenom: object.cosmos_denom,
            tokenContract: object.token_contract,
            name: object.name,
            symbol: object.symbol,
            decimals: Long.fromString(object.decimals),
            orchestrator: object.orchestrator
        };
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        obj.cosmos_denom = message.cosmosDenom;
        obj.token_contract = message.tokenContract;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.decimals = message.decimals ? message.decimals.toString() : undefined;
        obj.orchestrator = message.orchestrator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgERC20DeployedClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgERC20DeployedClaim.decode(message.value);
    },
    toProto(message) {
        return MsgERC20DeployedClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
            value: MsgERC20DeployedClaim.encode(message).finish()
        };
    }
};
function createBaseMsgERC20DeployedClaimResponse() {
    return {};
}
export const MsgERC20DeployedClaimResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgERC20DeployedClaimResponse();
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
        const message = createBaseMsgERC20DeployedClaimResponse();
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
        return MsgERC20DeployedClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgERC20DeployedClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgERC20DeployedClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse",
            value: MsgERC20DeployedClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgLogicCallExecutedClaim() {
    return {
        eventNonce: Long.UZERO,
        blockHeight: Long.UZERO,
        invalidationId: new Uint8Array(),
        invalidationNonce: Long.UZERO,
        orchestrator: ""
    };
}
export const MsgLogicCallExecutedClaim = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.eventNonce.isZero()) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (!message.blockHeight.isZero()) {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.invalidationId.length !== 0) {
            writer.uint32(26).bytes(message.invalidationId);
        }
        if (!message.invalidationNonce.isZero()) {
            writer.uint32(32).uint64(message.invalidationNonce);
        }
        if (message.orchestrator !== "") {
            writer.uint32(42).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLogicCallExecutedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.blockHeight = reader.uint64();
                    break;
                case 3:
                    message.invalidationId = reader.bytes();
                    break;
                case 4:
                    message.invalidationNonce = reader.uint64();
                    break;
                case 5:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgLogicCallExecutedClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
        message.invalidationId = object.invalidationId ?? new Uint8Array();
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: Long.fromString(object.event_nonce),
            blockHeight: Long.fromString(object.block_height),
            invalidationId: object.invalidation_id,
            invalidationNonce: Long.fromString(object.invalidation_nonce),
            orchestrator: object.orchestrator
        };
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        obj.invalidation_id = message.invalidationId;
        obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
        obj.orchestrator = message.orchestrator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLogicCallExecutedClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgLogicCallExecutedClaim.decode(message.value);
    },
    toProto(message) {
        return MsgLogicCallExecutedClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
            value: MsgLogicCallExecutedClaim.encode(message).finish()
        };
    }
};
function createBaseMsgLogicCallExecutedClaimResponse() {
    return {};
}
export const MsgLogicCallExecutedClaimResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLogicCallExecutedClaimResponse();
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
        const message = createBaseMsgLogicCallExecutedClaimResponse();
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
        return MsgLogicCallExecutedClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgLogicCallExecutedClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgLogicCallExecutedClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse",
            value: MsgLogicCallExecutedClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgValsetUpdatedClaim() {
    return {
        eventNonce: Long.UZERO,
        valsetNonce: Long.UZERO,
        blockHeight: Long.UZERO,
        members: [],
        rewardAmount: "",
        rewardToken: "",
        orchestrator: ""
    };
}
export const MsgValsetUpdatedClaim = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.eventNonce.isZero()) {
            writer.uint32(8).uint64(message.eventNonce);
        }
        if (!message.valsetNonce.isZero()) {
            writer.uint32(16).uint64(message.valsetNonce);
        }
        if (!message.blockHeight.isZero()) {
            writer.uint32(24).uint64(message.blockHeight);
        }
        for (const v of message.members) {
            BridgeValidator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.rewardAmount !== "") {
            writer.uint32(42).string(message.rewardAmount);
        }
        if (message.rewardToken !== "") {
            writer.uint32(50).string(message.rewardToken);
        }
        if (message.orchestrator !== "") {
            writer.uint32(58).string(message.orchestrator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventNonce = reader.uint64();
                    break;
                case 2:
                    message.valsetNonce = reader.uint64();
                    break;
                case 3:
                    message.blockHeight = reader.uint64();
                    break;
                case 4:
                    message.members.push(BridgeValidator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.rewardAmount = reader.string();
                    break;
                case 6:
                    message.rewardToken = reader.string();
                    break;
                case 7:
                    message.orchestrator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgValsetUpdatedClaim();
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
        message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? Long.fromValue(object.valsetNonce) : Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
        message.members = object.members?.map(e => BridgeValidator.fromPartial(e)) || [];
        message.rewardAmount = object.rewardAmount ?? "";
        message.rewardToken = object.rewardToken ?? "";
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: Long.fromString(object.event_nonce),
            valsetNonce: Long.fromString(object.valset_nonce),
            blockHeight: Long.fromString(object.block_height),
            members: Array.isArray(object?.members) ? object.members.map((e) => BridgeValidator.fromAmino(e)) : [],
            rewardAmount: object.reward_amount,
            rewardToken: object.reward_token,
            orchestrator: object.orchestrator
        };
    },
    toAmino(message) {
        const obj = {};
        obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
        obj.valset_nonce = message.valsetNonce ? message.valsetNonce.toString() : undefined;
        obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
        if (message.members) {
            obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.reward_amount = message.rewardAmount;
        obj.reward_token = message.rewardToken;
        obj.orchestrator = message.orchestrator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgValsetUpdatedClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgValsetUpdatedClaim.decode(message.value);
    },
    toProto(message) {
        return MsgValsetUpdatedClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
            value: MsgValsetUpdatedClaim.encode(message).finish()
        };
    }
};
function createBaseMsgValsetUpdatedClaimResponse() {
    return {};
}
export const MsgValsetUpdatedClaimResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValsetUpdatedClaimResponse();
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
        const message = createBaseMsgValsetUpdatedClaimResponse();
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
        return MsgValsetUpdatedClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgValsetUpdatedClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgValsetUpdatedClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse",
            value: MsgValsetUpdatedClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSendToEth() {
    return {
        transactionId: Long.UZERO,
        sender: ""
    };
}
export const MsgCancelSendToEth = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.transactionId.isZero()) {
            writer.uint32(8).uint64(message.transactionId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEth();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transactionId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelSendToEth();
        message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? Long.fromValue(object.transactionId) : Long.UZERO;
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            transactionId: Long.fromString(object.transaction_id),
            sender: object.sender
        };
    },
    toAmino(message) {
        const obj = {};
        obj.transaction_id = message.transactionId ? message.transactionId.toString() : undefined;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelSendToEth.decode(message.value);
    },
    toProto(message) {
        return MsgCancelSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgCancelSendToEth",
            value: MsgCancelSendToEth.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSendToEthResponse() {
    return {};
}
export const MsgCancelSendToEthResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelSendToEthResponse();
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
        const message = createBaseMsgCancelSendToEthResponse();
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
        return MsgCancelSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgCancelSendToEthResponse",
            value: MsgCancelSendToEthResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitBadSignatureEvidence() {
    return {
        subject: Any.fromPartial({}),
        signature: "",
        sender: ""
    };
}
export const MsgSubmitBadSignatureEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subject !== undefined) {
            Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subject = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signature = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitBadSignatureEvidence();
        message.subject = object.subject !== undefined && object.subject !== null ? Any.fromPartial(object.subject) : undefined;
        message.signature = object.signature ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            subject: object?.subject ? Any.fromAmino(object.subject) : undefined,
            signature: object.signature,
            sender: object.sender
        };
    },
    toAmino(message) {
        const obj = {};
        obj.subject = message.subject ? Any.toAmino(message.subject) : undefined;
        obj.signature = message.signature;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitBadSignatureEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSubmitBadSignatureEvidence.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitBadSignatureEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
            value: MsgSubmitBadSignatureEvidence.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitBadSignatureEvidenceResponse() {
    return {};
}
export const MsgSubmitBadSignatureEvidenceResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
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
        const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
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
        return MsgSubmitBadSignatureEvidenceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSubmitBadSignatureEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitBadSignatureEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
            value: MsgSubmitBadSignatureEvidenceResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=msgs.js.map