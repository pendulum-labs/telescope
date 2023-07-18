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
exports.OutgoingLogicCall = exports.OutgoingTransferTx = exports.OutgoingTxBatch = void 0;
const attestation_1 = require("./attestation");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseOutgoingTxBatch() {
    return {
        batchNonce: helpers_1.Long.UZERO,
        batchTimeout: helpers_1.Long.UZERO,
        transactions: [],
        tokenContract: "",
        block: helpers_1.Long.UZERO
    };
}
exports.OutgoingTxBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.batchNonce.isZero()) {
            writer.uint32(8).uint64(message.batchNonce);
        }
        if (!message.batchTimeout.isZero()) {
            writer.uint32(16).uint64(message.batchTimeout);
        }
        for (const v of message.transactions) {
            exports.OutgoingTransferTx.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenContract !== "") {
            writer.uint32(34).string(message.tokenContract);
        }
        if (!message.block.isZero()) {
            writer.uint32(40).uint64(message.block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTxBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchNonce = reader.uint64();
                    break;
                case 2:
                    message.batchTimeout = reader.uint64();
                    break;
                case 3:
                    message.transactions.push(exports.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.tokenContract = reader.string();
                    break;
                case 5:
                    message.block = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOutgoingTxBatch();
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? helpers_1.Long.fromValue(object.batchNonce) : helpers_1.Long.UZERO;
        message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? helpers_1.Long.fromValue(object.batchTimeout) : helpers_1.Long.UZERO;
        message.transactions = object.transactions?.map(e => exports.OutgoingTransferTx.fromPartial(e)) || [];
        message.tokenContract = object.tokenContract ?? "";
        message.block = object.block !== undefined && object.block !== null ? helpers_1.Long.fromValue(object.block) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            batchNonce: helpers_1.Long.fromString(object.batch_nonce),
            batchTimeout: helpers_1.Long.fromString(object.batch_timeout),
            transactions: Array.isArray(object?.transactions) ? object.transactions.map((e) => exports.OutgoingTransferTx.fromAmino(e)) : [],
            tokenContract: object.token_contract,
            block: helpers_1.Long.fromString(object.block)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
        obj.batch_timeout = message.batchTimeout ? message.batchTimeout.toString() : undefined;
        if (message.transactions) {
            obj.transactions = message.transactions.map(e => e ? exports.OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.transactions = [];
        }
        obj.token_contract = message.tokenContract;
        obj.block = message.block ? message.block.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OutgoingTxBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OutgoingTxBatch.decode(message.value);
    },
    toProto(message) {
        return exports.OutgoingTxBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.OutgoingTxBatch",
            value: exports.OutgoingTxBatch.encode(message).finish()
        };
    }
};
function createBaseOutgoingTransferTx() {
    return {
        id: helpers_1.Long.UZERO,
        sender: "",
        destAddress: "",
        erc20Token: attestation_1.ERC20Token.fromPartial({}),
        erc20Fee: attestation_1.ERC20Token.fromPartial({})
    };
}
exports.OutgoingTransferTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.destAddress !== "") {
            writer.uint32(26).string(message.destAddress);
        }
        if (message.erc20Token !== undefined) {
            attestation_1.ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
        }
        if (message.erc20Fee !== undefined) {
            attestation_1.ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingTransferTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.destAddress = reader.string();
                    break;
                case 4:
                    message.erc20Token = attestation_1.ERC20Token.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.erc20Fee = attestation_1.ERC20Token.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOutgoingTransferTx();
        message.id = object.id !== undefined && object.id !== null ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO;
        message.sender = object.sender ?? "";
        message.destAddress = object.destAddress ?? "";
        message.erc20Token = object.erc20Token !== undefined && object.erc20Token !== null ? attestation_1.ERC20Token.fromPartial(object.erc20Token) : undefined;
        message.erc20Fee = object.erc20Fee !== undefined && object.erc20Fee !== null ? attestation_1.ERC20Token.fromPartial(object.erc20Fee) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            id: helpers_1.Long.fromString(object.id),
            sender: object.sender,
            destAddress: object.dest_address,
            erc20Token: object?.erc20_token ? attestation_1.ERC20Token.fromAmino(object.erc20_token) : undefined,
            erc20Fee: object?.erc20_fee ? attestation_1.ERC20Token.fromAmino(object.erc20_fee) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.sender = message.sender;
        obj.dest_address = message.destAddress;
        obj.erc20_token = message.erc20Token ? attestation_1.ERC20Token.toAmino(message.erc20Token) : undefined;
        obj.erc20_fee = message.erc20Fee ? attestation_1.ERC20Token.toAmino(message.erc20Fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OutgoingTransferTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OutgoingTransferTx.decode(message.value);
    },
    toProto(message) {
        return exports.OutgoingTransferTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.OutgoingTransferTx",
            value: exports.OutgoingTransferTx.encode(message).finish()
        };
    }
};
function createBaseOutgoingLogicCall() {
    return {
        transfers: [],
        fees: [],
        logicContractAddress: "",
        payload: new Uint8Array(),
        timeout: helpers_1.Long.UZERO,
        invalidationId: new Uint8Array(),
        invalidationNonce: helpers_1.Long.UZERO,
        block: helpers_1.Long.UZERO
    };
}
exports.OutgoingLogicCall = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.transfers) {
            attestation_1.ERC20Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.fees) {
            attestation_1.ERC20Token.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.logicContractAddress !== "") {
            writer.uint32(26).string(message.logicContractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(34).bytes(message.payload);
        }
        if (!message.timeout.isZero()) {
            writer.uint32(40).uint64(message.timeout);
        }
        if (message.invalidationId.length !== 0) {
            writer.uint32(50).bytes(message.invalidationId);
        }
        if (!message.invalidationNonce.isZero()) {
            writer.uint32(56).uint64(message.invalidationNonce);
        }
        if (!message.block.isZero()) {
            writer.uint32(64).uint64(message.block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutgoingLogicCall();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfers.push(attestation_1.ERC20Token.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fees.push(attestation_1.ERC20Token.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.logicContractAddress = reader.string();
                    break;
                case 4:
                    message.payload = reader.bytes();
                    break;
                case 5:
                    message.timeout = reader.uint64();
                    break;
                case 6:
                    message.invalidationId = reader.bytes();
                    break;
                case 7:
                    message.invalidationNonce = reader.uint64();
                    break;
                case 8:
                    message.block = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOutgoingLogicCall();
        message.transfers = object.transfers?.map(e => attestation_1.ERC20Token.fromPartial(e)) || [];
        message.fees = object.fees?.map(e => attestation_1.ERC20Token.fromPartial(e)) || [];
        message.logicContractAddress = object.logicContractAddress ?? "";
        message.payload = object.payload ?? new Uint8Array();
        message.timeout = object.timeout !== undefined && object.timeout !== null ? helpers_1.Long.fromValue(object.timeout) : helpers_1.Long.UZERO;
        message.invalidationId = object.invalidationId ?? new Uint8Array();
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? helpers_1.Long.fromValue(object.invalidationNonce) : helpers_1.Long.UZERO;
        message.block = object.block !== undefined && object.block !== null ? helpers_1.Long.fromValue(object.block) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            transfers: Array.isArray(object?.transfers) ? object.transfers.map((e) => attestation_1.ERC20Token.fromAmino(e)) : [],
            fees: Array.isArray(object?.fees) ? object.fees.map((e) => attestation_1.ERC20Token.fromAmino(e)) : [],
            logicContractAddress: object.logic_contract_address,
            payload: object.payload,
            timeout: helpers_1.Long.fromString(object.timeout),
            invalidationId: object.invalidation_id,
            invalidationNonce: helpers_1.Long.fromString(object.invalidation_nonce),
            block: helpers_1.Long.fromString(object.block)
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map(e => e ? attestation_1.ERC20Token.toAmino(e) : undefined);
        }
        else {
            obj.transfers = [];
        }
        if (message.fees) {
            obj.fees = message.fees.map(e => e ? attestation_1.ERC20Token.toAmino(e) : undefined);
        }
        else {
            obj.fees = [];
        }
        obj.logic_contract_address = message.logicContractAddress;
        obj.payload = message.payload;
        obj.timeout = message.timeout ? message.timeout.toString() : undefined;
        obj.invalidation_id = message.invalidationId;
        obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
        obj.block = message.block ? message.block.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OutgoingLogicCall.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OutgoingLogicCall.decode(message.value);
    },
    toProto(message) {
        return exports.OutgoingLogicCall.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.OutgoingLogicCall",
            value: exports.OutgoingLogicCall.encode(message).finish()
        };
    }
};
//# sourceMappingURL=batch.js.map