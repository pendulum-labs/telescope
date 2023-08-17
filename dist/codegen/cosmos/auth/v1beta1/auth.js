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
exports.Params = exports.ModuleAccount = exports.BaseAccount = void 0;
const any_1 = require("../../../google/protobuf/any");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseBaseAccount() {
    return {
        address: "",
        pubKey: any_1.Any.fromPartial({}),
        accountNumber: helpers_1.Long.UZERO,
        sequence: helpers_1.Long.UZERO
    };
}
exports.BaseAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            any_1.Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (!message.accountNumber.isZero()) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
                    break;
                case 4:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBaseAccount();
        message.address = object.address ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? any_1.Any.fromPartial(object.pubKey) : undefined;
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? helpers_1.Long.fromValue(object.accountNumber) : helpers_1.Long.UZERO;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pubKey: object?.pub_key ? any_1.Any.fromAmino(object.pub_key) : undefined,
            accountNumber: helpers_1.Long.fromString(object.account_number),
            sequence: helpers_1.Long.fromString(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pubKey ? any_1.Any.toAmino(message.pubKey) : undefined;
        obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BaseAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BaseAccount",
            value: exports.BaseAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BaseAccount.decode(message.value);
    },
    toProto(message) {
        return exports.BaseAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
            value: exports.BaseAccount.encode(message).finish()
        };
    }
};
function createBaseModuleAccount() {
    return {
        baseAccount: exports.BaseAccount.fromPartial({}),
        name: "",
        permissions: []
    };
}
exports.ModuleAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.baseAccount !== undefined) {
            exports.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.permissions) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = exports.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? exports.BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.name = object.name ?? "";
        message.permissions = object.permissions?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            baseAccount: object?.base_account ? exports.BaseAccount.fromAmino(object.base_account) : undefined,
            name: object.name,
            permissions: Array.isArray(object?.permissions) ? object.permissions.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? exports.BaseAccount.toAmino(message.baseAccount) : undefined;
        obj.name = message.name;
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleAccount",
            value: exports.ModuleAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleAccount.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
            value: exports.ModuleAccount.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        maxMemoCharacters: helpers_1.Long.UZERO,
        txSigLimit: helpers_1.Long.UZERO,
        txSizeCostPerByte: helpers_1.Long.UZERO,
        sigVerifyCostEd25519: helpers_1.Long.UZERO,
        sigVerifyCostSecp256k1: helpers_1.Long.UZERO
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.maxMemoCharacters.isZero()) {
            writer.uint32(8).uint64(message.maxMemoCharacters);
        }
        if (!message.txSigLimit.isZero()) {
            writer.uint32(16).uint64(message.txSigLimit);
        }
        if (!message.txSizeCostPerByte.isZero()) {
            writer.uint32(24).uint64(message.txSizeCostPerByte);
        }
        if (!message.sigVerifyCostEd25519.isZero()) {
            writer.uint32(32).uint64(message.sigVerifyCostEd25519);
        }
        if (!message.sigVerifyCostSecp256k1.isZero()) {
            writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxMemoCharacters = reader.uint64();
                    break;
                case 2:
                    message.txSigLimit = reader.uint64();
                    break;
                case 3:
                    message.txSizeCostPerByte = reader.uint64();
                    break;
                case 4:
                    message.sigVerifyCostEd25519 = reader.uint64();
                    break;
                case 5:
                    message.sigVerifyCostSecp256k1 = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.maxMemoCharacters = object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null ? helpers_1.Long.fromValue(object.maxMemoCharacters) : helpers_1.Long.UZERO;
        message.txSigLimit = object.txSigLimit !== undefined && object.txSigLimit !== null ? helpers_1.Long.fromValue(object.txSigLimit) : helpers_1.Long.UZERO;
        message.txSizeCostPerByte = object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null ? helpers_1.Long.fromValue(object.txSizeCostPerByte) : helpers_1.Long.UZERO;
        message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null ? helpers_1.Long.fromValue(object.sigVerifyCostEd25519) : helpers_1.Long.UZERO;
        message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null ? helpers_1.Long.fromValue(object.sigVerifyCostSecp256k1) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            maxMemoCharacters: helpers_1.Long.fromString(object.max_memo_characters),
            txSigLimit: helpers_1.Long.fromString(object.tx_sig_limit),
            txSizeCostPerByte: helpers_1.Long.fromString(object.tx_size_cost_per_byte),
            sigVerifyCostEd25519: helpers_1.Long.fromString(object.sig_verify_cost_ed25519),
            sigVerifyCostSecp256k1: helpers_1.Long.fromString(object.sig_verify_cost_secp256k1)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_memo_characters = message.maxMemoCharacters ? message.maxMemoCharacters.toString() : undefined;
        obj.tx_sig_limit = message.txSigLimit ? message.txSigLimit.toString() : undefined;
        obj.tx_size_cost_per_byte = message.txSizeCostPerByte ? message.txSizeCostPerByte.toString() : undefined;
        obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519 ? message.sigVerifyCostEd25519.toString() : undefined;
        obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1 ? message.sigVerifyCostSecp256k1.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=auth.js.map