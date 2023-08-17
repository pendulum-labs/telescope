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
exports.MsgSubmitBadSignatureEvidenceResponse = exports.MsgSubmitBadSignatureEvidence = exports.MsgCancelSendToEthResponse = exports.MsgCancelSendToEth = exports.MsgValsetUpdatedClaimResponse = exports.MsgValsetUpdatedClaim = exports.MsgLogicCallExecutedClaimResponse = exports.MsgLogicCallExecutedClaim = exports.MsgERC20DeployedClaimResponse = exports.MsgERC20DeployedClaim = exports.MsgBatchSendToEthClaimResponse = exports.MsgBatchSendToEthClaim = exports.MsgSendToCosmosClaimResponse = exports.MsgSendToCosmosClaim = exports.MsgConfirmLogicCallResponse = exports.MsgConfirmLogicCall = exports.MsgConfirmBatchResponse = exports.MsgConfirmBatch = exports.MsgRequestBatchResponse = exports.MsgRequestBatch = exports.MsgSendToEthResponse = exports.MsgSendToEth = exports.MsgValsetConfirmResponse = exports.MsgValsetConfirm = exports.MsgSetOrchestratorAddressResponse = exports.MsgSetOrchestratorAddress = void 0;
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const types_1 = require("./types");
const any_1 = require("../../google/protobuf/any");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgSetOrchestratorAddress() {
    return {
        validator: "",
        orchestrator: "",
        ethAddress: ""
    };
}
exports.MsgSetOrchestratorAddress = {
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
        return exports.MsgSetOrchestratorAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSetOrchestratorAddress.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetOrchestratorAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
            value: exports.MsgSetOrchestratorAddress.encode(message).finish()
        };
    }
};
function createBaseMsgSetOrchestratorAddressResponse() {
    return {};
}
exports.MsgSetOrchestratorAddressResponse = {
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
        return exports.MsgSetOrchestratorAddressResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSetOrchestratorAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetOrchestratorAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse",
            value: exports.MsgSetOrchestratorAddressResponse.encode(message).finish()
        };
    }
};
function createBaseMsgValsetConfirm() {
    return {
        nonce: helpers_1.Long.UZERO,
        orchestrator: "",
        ethAddress: "",
        signature: ""
    };
}
exports.MsgValsetConfirm = {
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
        message.nonce = object.nonce !== undefined && object.nonce !== null ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO;
        message.orchestrator = object.orchestrator ?? "";
        message.ethAddress = object.ethAddress ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: helpers_1.Long.fromString(object.nonce),
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
        return exports.MsgValsetConfirm.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgValsetConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValsetConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgValsetConfirm",
            value: exports.MsgValsetConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgValsetConfirmResponse() {
    return {};
}
exports.MsgValsetConfirmResponse = {
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
        return exports.MsgValsetConfirmResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgValsetConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValsetConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgValsetConfirmResponse",
            value: exports.MsgValsetConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSendToEth() {
    return {
        sender: "",
        ethDest: "",
        amount: coin_1.Coin.fromPartial({}),
        bridgeFee: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSendToEth = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.ethDest !== "") {
            writer.uint32(18).string(message.ethDest);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.bridgeFee !== undefined) {
            coin_1.Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.bridgeFee = coin_1.Coin.decode(reader, reader.uint32());
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
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.bridgeFee = object.bridgeFee !== undefined && object.bridgeFee !== null ? coin_1.Coin.fromPartial(object.bridgeFee) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            ethDest: object.eth_dest,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            bridgeFee: object?.bridge_fee ? coin_1.Coin.fromAmino(object.bridge_fee) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.eth_dest = message.ethDest;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.bridge_fee = message.bridgeFee ? coin_1.Coin.toAmino(message.bridgeFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSendToEth.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSendToEth",
            value: exports.MsgSendToEth.encode(message).finish()
        };
    }
};
function createBaseMsgSendToEthResponse() {
    return {};
}
exports.MsgSendToEthResponse = {
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
        return exports.MsgSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSendToEthResponse",
            value: exports.MsgSendToEthResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRequestBatch() {
    return {
        sender: "",
        denom: ""
    };
}
exports.MsgRequestBatch = {
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
        return exports.MsgRequestBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRequestBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRequestBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgRequestBatch",
            value: exports.MsgRequestBatch.encode(message).finish()
        };
    }
};
function createBaseMsgRequestBatchResponse() {
    return {};
}
exports.MsgRequestBatchResponse = {
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
        return exports.MsgRequestBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRequestBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRequestBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgRequestBatchResponse",
            value: exports.MsgRequestBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmBatch() {
    return {
        nonce: helpers_1.Long.UZERO,
        tokenContract: "",
        ethSigner: "",
        orchestrator: "",
        signature: ""
    };
}
exports.MsgConfirmBatch = {
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
        message.nonce = object.nonce !== undefined && object.nonce !== null ? helpers_1.Long.fromValue(object.nonce) : helpers_1.Long.UZERO;
        message.tokenContract = object.tokenContract ?? "";
        message.ethSigner = object.ethSigner ?? "";
        message.orchestrator = object.orchestrator ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            nonce: helpers_1.Long.fromString(object.nonce),
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
        return exports.MsgConfirmBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgConfirmBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConfirmBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgConfirmBatch",
            value: exports.MsgConfirmBatch.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmBatchResponse() {
    return {};
}
exports.MsgConfirmBatchResponse = {
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
        return exports.MsgConfirmBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgConfirmBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConfirmBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgConfirmBatchResponse",
            value: exports.MsgConfirmBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmLogicCall() {
    return {
        invalidationId: "",
        invalidationNonce: helpers_1.Long.UZERO,
        ethSigner: "",
        orchestrator: "",
        signature: ""
    };
}
exports.MsgConfirmLogicCall = {
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
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? helpers_1.Long.fromValue(object.invalidationNonce) : helpers_1.Long.UZERO;
        message.ethSigner = object.ethSigner ?? "";
        message.orchestrator = object.orchestrator ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            invalidationId: object.invalidation_id,
            invalidationNonce: helpers_1.Long.fromString(object.invalidation_nonce),
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
        return exports.MsgConfirmLogicCall.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgConfirmLogicCall.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConfirmLogicCall.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgConfirmLogicCall",
            value: exports.MsgConfirmLogicCall.encode(message).finish()
        };
    }
};
function createBaseMsgConfirmLogicCallResponse() {
    return {};
}
exports.MsgConfirmLogicCallResponse = {
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
        return exports.MsgConfirmLogicCallResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgConfirmLogicCallResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConfirmLogicCallResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse",
            value: exports.MsgConfirmLogicCallResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSendToCosmosClaim() {
    return {
        eventNonce: helpers_1.Long.UZERO,
        blockHeight: helpers_1.Long.UZERO,
        tokenContract: "",
        amount: "",
        ethereumSender: "",
        cosmosReceiver: "",
        orchestrator: ""
    };
}
exports.MsgSendToCosmosClaim = {
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
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? helpers_1.Long.fromValue(object.eventNonce) : helpers_1.Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? helpers_1.Long.fromValue(object.blockHeight) : helpers_1.Long.UZERO;
        message.tokenContract = object.tokenContract ?? "";
        message.amount = object.amount ?? "";
        message.ethereumSender = object.ethereumSender ?? "";
        message.cosmosReceiver = object.cosmosReceiver ?? "";
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: helpers_1.Long.fromString(object.event_nonce),
            blockHeight: helpers_1.Long.fromString(object.block_height),
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
        return exports.MsgSendToCosmosClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSendToCosmosClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendToCosmosClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
            value: exports.MsgSendToCosmosClaim.encode(message).finish()
        };
    }
};
function createBaseMsgSendToCosmosClaimResponse() {
    return {};
}
exports.MsgSendToCosmosClaimResponse = {
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
        return exports.MsgSendToCosmosClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSendToCosmosClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendToCosmosClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse",
            value: exports.MsgSendToCosmosClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBatchSendToEthClaim() {
    return {
        eventNonce: helpers_1.Long.UZERO,
        blockHeight: helpers_1.Long.UZERO,
        batchNonce: helpers_1.Long.UZERO,
        tokenContract: "",
        orchestrator: ""
    };
}
exports.MsgBatchSendToEthClaim = {
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
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? helpers_1.Long.fromValue(object.eventNonce) : helpers_1.Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? helpers_1.Long.fromValue(object.blockHeight) : helpers_1.Long.UZERO;
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? helpers_1.Long.fromValue(object.batchNonce) : helpers_1.Long.UZERO;
        message.tokenContract = object.tokenContract ?? "";
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: helpers_1.Long.fromString(object.event_nonce),
            blockHeight: helpers_1.Long.fromString(object.block_height),
            batchNonce: helpers_1.Long.fromString(object.batch_nonce),
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
        return exports.MsgBatchSendToEthClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchSendToEthClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchSendToEthClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
            value: exports.MsgBatchSendToEthClaim.encode(message).finish()
        };
    }
};
function createBaseMsgBatchSendToEthClaimResponse() {
    return {};
}
exports.MsgBatchSendToEthClaimResponse = {
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
        return exports.MsgBatchSendToEthClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBatchSendToEthClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBatchSendToEthClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse",
            value: exports.MsgBatchSendToEthClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgERC20DeployedClaim() {
    return {
        eventNonce: helpers_1.Long.UZERO,
        blockHeight: helpers_1.Long.UZERO,
        cosmosDenom: "",
        tokenContract: "",
        name: "",
        symbol: "",
        decimals: helpers_1.Long.UZERO,
        orchestrator: ""
    };
}
exports.MsgERC20DeployedClaim = {
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
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? helpers_1.Long.fromValue(object.eventNonce) : helpers_1.Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? helpers_1.Long.fromValue(object.blockHeight) : helpers_1.Long.UZERO;
        message.cosmosDenom = object.cosmosDenom ?? "";
        message.tokenContract = object.tokenContract ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.decimals = object.decimals !== undefined && object.decimals !== null ? helpers_1.Long.fromValue(object.decimals) : helpers_1.Long.UZERO;
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: helpers_1.Long.fromString(object.event_nonce),
            blockHeight: helpers_1.Long.fromString(object.block_height),
            cosmosDenom: object.cosmos_denom,
            tokenContract: object.token_contract,
            name: object.name,
            symbol: object.symbol,
            decimals: helpers_1.Long.fromString(object.decimals),
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
        return exports.MsgERC20DeployedClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgERC20DeployedClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgERC20DeployedClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
            value: exports.MsgERC20DeployedClaim.encode(message).finish()
        };
    }
};
function createBaseMsgERC20DeployedClaimResponse() {
    return {};
}
exports.MsgERC20DeployedClaimResponse = {
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
        return exports.MsgERC20DeployedClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgERC20DeployedClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgERC20DeployedClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse",
            value: exports.MsgERC20DeployedClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgLogicCallExecutedClaim() {
    return {
        eventNonce: helpers_1.Long.UZERO,
        blockHeight: helpers_1.Long.UZERO,
        invalidationId: new Uint8Array(),
        invalidationNonce: helpers_1.Long.UZERO,
        orchestrator: ""
    };
}
exports.MsgLogicCallExecutedClaim = {
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
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? helpers_1.Long.fromValue(object.eventNonce) : helpers_1.Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? helpers_1.Long.fromValue(object.blockHeight) : helpers_1.Long.UZERO;
        message.invalidationId = object.invalidationId ?? new Uint8Array();
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? helpers_1.Long.fromValue(object.invalidationNonce) : helpers_1.Long.UZERO;
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: helpers_1.Long.fromString(object.event_nonce),
            blockHeight: helpers_1.Long.fromString(object.block_height),
            invalidationId: object.invalidation_id,
            invalidationNonce: helpers_1.Long.fromString(object.invalidation_nonce),
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
        return exports.MsgLogicCallExecutedClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgLogicCallExecutedClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLogicCallExecutedClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
            value: exports.MsgLogicCallExecutedClaim.encode(message).finish()
        };
    }
};
function createBaseMsgLogicCallExecutedClaimResponse() {
    return {};
}
exports.MsgLogicCallExecutedClaimResponse = {
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
        return exports.MsgLogicCallExecutedClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgLogicCallExecutedClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLogicCallExecutedClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse",
            value: exports.MsgLogicCallExecutedClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgValsetUpdatedClaim() {
    return {
        eventNonce: helpers_1.Long.UZERO,
        valsetNonce: helpers_1.Long.UZERO,
        blockHeight: helpers_1.Long.UZERO,
        members: [],
        rewardAmount: "",
        rewardToken: "",
        orchestrator: ""
    };
}
exports.MsgValsetUpdatedClaim = {
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
            types_1.BridgeValidator.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.members.push(types_1.BridgeValidator.decode(reader, reader.uint32()));
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
        message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? helpers_1.Long.fromValue(object.eventNonce) : helpers_1.Long.UZERO;
        message.valsetNonce = object.valsetNonce !== undefined && object.valsetNonce !== null ? helpers_1.Long.fromValue(object.valsetNonce) : helpers_1.Long.UZERO;
        message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? helpers_1.Long.fromValue(object.blockHeight) : helpers_1.Long.UZERO;
        message.members = object.members?.map(e => types_1.BridgeValidator.fromPartial(e)) || [];
        message.rewardAmount = object.rewardAmount ?? "";
        message.rewardToken = object.rewardToken ?? "";
        message.orchestrator = object.orchestrator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            eventNonce: helpers_1.Long.fromString(object.event_nonce),
            valsetNonce: helpers_1.Long.fromString(object.valset_nonce),
            blockHeight: helpers_1.Long.fromString(object.block_height),
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.BridgeValidator.fromAmino(e)) : [],
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
            obj.members = message.members.map(e => e ? types_1.BridgeValidator.toAmino(e) : undefined);
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
        return exports.MsgValsetUpdatedClaim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgValsetUpdatedClaim.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValsetUpdatedClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
            value: exports.MsgValsetUpdatedClaim.encode(message).finish()
        };
    }
};
function createBaseMsgValsetUpdatedClaimResponse() {
    return {};
}
exports.MsgValsetUpdatedClaimResponse = {
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
        return exports.MsgValsetUpdatedClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgValsetUpdatedClaimResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValsetUpdatedClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse",
            value: exports.MsgValsetUpdatedClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSendToEth() {
    return {
        transactionId: helpers_1.Long.UZERO,
        sender: ""
    };
}
exports.MsgCancelSendToEth = {
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
        message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? helpers_1.Long.fromValue(object.transactionId) : helpers_1.Long.UZERO;
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            transactionId: helpers_1.Long.fromString(object.transaction_id),
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
        return exports.MsgCancelSendToEth.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelSendToEth.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelSendToEth.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgCancelSendToEth",
            value: exports.MsgCancelSendToEth.encode(message).finish()
        };
    }
};
function createBaseMsgCancelSendToEthResponse() {
    return {};
}
exports.MsgCancelSendToEthResponse = {
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
        return exports.MsgCancelSendToEthResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelSendToEthResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelSendToEthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgCancelSendToEthResponse",
            value: exports.MsgCancelSendToEthResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitBadSignatureEvidence() {
    return {
        subject: any_1.Any.fromPartial({}),
        signature: "",
        sender: ""
    };
}
exports.MsgSubmitBadSignatureEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.subject !== undefined) {
            any_1.Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
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
                    message.subject = any_1.Any.decode(reader, reader.uint32());
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
        message.subject = object.subject !== undefined && object.subject !== null ? any_1.Any.fromPartial(object.subject) : undefined;
        message.signature = object.signature ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            subject: object?.subject ? any_1.Any.fromAmino(object.subject) : undefined,
            signature: object.signature,
            sender: object.sender
        };
    },
    toAmino(message) {
        const obj = {};
        obj.subject = message.subject ? any_1.Any.toAmino(message.subject) : undefined;
        obj.signature = message.signature;
        obj.sender = message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitBadSignatureEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitBadSignatureEvidence.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitBadSignatureEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
            value: exports.MsgSubmitBadSignatureEvidence.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitBadSignatureEvidenceResponse() {
    return {};
}
exports.MsgSubmitBadSignatureEvidenceResponse = {
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
        return exports.MsgSubmitBadSignatureEvidenceResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitBadSignatureEvidenceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitBadSignatureEvidenceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
            value: exports.MsgSubmitBadSignatureEvidenceResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=msgs.js.map