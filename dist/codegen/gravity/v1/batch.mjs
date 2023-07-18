import { ERC20Token } from "./attestation";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseOutgoingTxBatch() {
    return {
        batchNonce: Long.UZERO,
        batchTimeout: Long.UZERO,
        transactions: [],
        tokenContract: "",
        block: Long.UZERO
    };
}
export const OutgoingTxBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.batchNonce.isZero()) {
            writer.uint32(8).uint64(message.batchNonce);
        }
        if (!message.batchTimeout.isZero()) {
            writer.uint32(16).uint64(message.batchTimeout);
        }
        for (const v of message.transactions) {
            OutgoingTransferTx.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.transactions.push(OutgoingTransferTx.decode(reader, reader.uint32()));
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
        message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
        message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? Long.fromValue(object.batchTimeout) : Long.UZERO;
        message.transactions = object.transactions?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
        message.tokenContract = object.tokenContract ?? "";
        message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            batchNonce: Long.fromString(object.batch_nonce),
            batchTimeout: Long.fromString(object.batch_timeout),
            transactions: Array.isArray(object?.transactions) ? object.transactions.map((e) => OutgoingTransferTx.fromAmino(e)) : [],
            tokenContract: object.token_contract,
            block: Long.fromString(object.block)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
        obj.batch_timeout = message.batchTimeout ? message.batchTimeout.toString() : undefined;
        if (message.transactions) {
            obj.transactions = message.transactions.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.transactions = [];
        }
        obj.token_contract = message.tokenContract;
        obj.block = message.block ? message.block.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return OutgoingTxBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OutgoingTxBatch.decode(message.value);
    },
    toProto(message) {
        return OutgoingTxBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.OutgoingTxBatch",
            value: OutgoingTxBatch.encode(message).finish()
        };
    }
};
function createBaseOutgoingTransferTx() {
    return {
        id: Long.UZERO,
        sender: "",
        destAddress: "",
        erc20Token: ERC20Token.fromPartial({}),
        erc20Fee: ERC20Token.fromPartial({})
    };
}
export const OutgoingTransferTx = {
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
            ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
        }
        if (message.erc20Fee !== undefined) {
            ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
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
                    message.erc20Token = ERC20Token.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.erc20Fee = ERC20Token.decode(reader, reader.uint32());
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
        message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
        message.sender = object.sender ?? "";
        message.destAddress = object.destAddress ?? "";
        message.erc20Token = object.erc20Token !== undefined && object.erc20Token !== null ? ERC20Token.fromPartial(object.erc20Token) : undefined;
        message.erc20Fee = object.erc20Fee !== undefined && object.erc20Fee !== null ? ERC20Token.fromPartial(object.erc20Fee) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            id: Long.fromString(object.id),
            sender: object.sender,
            destAddress: object.dest_address,
            erc20Token: object?.erc20_token ? ERC20Token.fromAmino(object.erc20_token) : undefined,
            erc20Fee: object?.erc20_fee ? ERC20Token.fromAmino(object.erc20_fee) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.sender = message.sender;
        obj.dest_address = message.destAddress;
        obj.erc20_token = message.erc20Token ? ERC20Token.toAmino(message.erc20Token) : undefined;
        obj.erc20_fee = message.erc20Fee ? ERC20Token.toAmino(message.erc20Fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return OutgoingTransferTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OutgoingTransferTx.decode(message.value);
    },
    toProto(message) {
        return OutgoingTransferTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.OutgoingTransferTx",
            value: OutgoingTransferTx.encode(message).finish()
        };
    }
};
function createBaseOutgoingLogicCall() {
    return {
        transfers: [],
        fees: [],
        logicContractAddress: "",
        payload: new Uint8Array(),
        timeout: Long.UZERO,
        invalidationId: new Uint8Array(),
        invalidationNonce: Long.UZERO,
        block: Long.UZERO
    };
}
export const OutgoingLogicCall = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.transfers) {
            ERC20Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.fees) {
            ERC20Token.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.transfers.push(ERC20Token.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fees.push(ERC20Token.decode(reader, reader.uint32()));
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
        message.transfers = object.transfers?.map(e => ERC20Token.fromPartial(e)) || [];
        message.fees = object.fees?.map(e => ERC20Token.fromPartial(e)) || [];
        message.logicContractAddress = object.logicContractAddress ?? "";
        message.payload = object.payload ?? new Uint8Array();
        message.timeout = object.timeout !== undefined && object.timeout !== null ? Long.fromValue(object.timeout) : Long.UZERO;
        message.invalidationId = object.invalidationId ?? new Uint8Array();
        message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
        message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            transfers: Array.isArray(object?.transfers) ? object.transfers.map((e) => ERC20Token.fromAmino(e)) : [],
            fees: Array.isArray(object?.fees) ? object.fees.map((e) => ERC20Token.fromAmino(e)) : [],
            logicContractAddress: object.logic_contract_address,
            payload: object.payload,
            timeout: Long.fromString(object.timeout),
            invalidationId: object.invalidation_id,
            invalidationNonce: Long.fromString(object.invalidation_nonce),
            block: Long.fromString(object.block)
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map(e => e ? ERC20Token.toAmino(e) : undefined);
        }
        else {
            obj.transfers = [];
        }
        if (message.fees) {
            obj.fees = message.fees.map(e => e ? ERC20Token.toAmino(e) : undefined);
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
        return OutgoingLogicCall.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return OutgoingLogicCall.decode(message.value);
    },
    toProto(message) {
        return OutgoingLogicCall.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.OutgoingLogicCall",
            value: OutgoingLogicCall.encode(message).finish()
        };
    }
};
//# sourceMappingURL=batch.js.map