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
exports.GravityNonces = exports.GenesisState = exports.Params = void 0;
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const types_1 = require("./types");
const msgs_1 = require("./msgs");
const batch_1 = require("./batch");
const attestation_1 = require("./attestation");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseParams() {
    return {
        gravityId: "",
        contractSourceHash: "",
        bridgeEthereumAddress: "",
        bridgeChainId: helpers_1.Long.UZERO,
        signedValsetsWindow: helpers_1.Long.UZERO,
        signedBatchesWindow: helpers_1.Long.UZERO,
        signedLogicCallsWindow: helpers_1.Long.UZERO,
        targetBatchTimeout: helpers_1.Long.UZERO,
        averageBlockTime: helpers_1.Long.UZERO,
        averageEthereumBlockTime: helpers_1.Long.UZERO,
        slashFractionValset: new Uint8Array(),
        slashFractionBatch: new Uint8Array(),
        slashFractionLogicCall: new Uint8Array(),
        unbondSlashingValsetsWindow: helpers_1.Long.UZERO,
        slashFractionBadEthSignature: new Uint8Array(),
        valsetReward: coin_1.Coin.fromPartial({}),
        bridgeActive: false,
        ethereumBlacklist: [],
        erc20ToDenomPermanentSwap: types_1.ERC20ToDenom.fromPartial({})
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gravityId !== "") {
            writer.uint32(10).string(message.gravityId);
        }
        if (message.contractSourceHash !== "") {
            writer.uint32(18).string(message.contractSourceHash);
        }
        if (message.bridgeEthereumAddress !== "") {
            writer.uint32(34).string(message.bridgeEthereumAddress);
        }
        if (!message.bridgeChainId.isZero()) {
            writer.uint32(40).uint64(message.bridgeChainId);
        }
        if (!message.signedValsetsWindow.isZero()) {
            writer.uint32(48).uint64(message.signedValsetsWindow);
        }
        if (!message.signedBatchesWindow.isZero()) {
            writer.uint32(56).uint64(message.signedBatchesWindow);
        }
        if (!message.signedLogicCallsWindow.isZero()) {
            writer.uint32(64).uint64(message.signedLogicCallsWindow);
        }
        if (!message.targetBatchTimeout.isZero()) {
            writer.uint32(72).uint64(message.targetBatchTimeout);
        }
        if (!message.averageBlockTime.isZero()) {
            writer.uint32(80).uint64(message.averageBlockTime);
        }
        if (!message.averageEthereumBlockTime.isZero()) {
            writer.uint32(88).uint64(message.averageEthereumBlockTime);
        }
        if (message.slashFractionValset.length !== 0) {
            writer.uint32(98).bytes(message.slashFractionValset);
        }
        if (message.slashFractionBatch.length !== 0) {
            writer.uint32(106).bytes(message.slashFractionBatch);
        }
        if (message.slashFractionLogicCall.length !== 0) {
            writer.uint32(114).bytes(message.slashFractionLogicCall);
        }
        if (!message.unbondSlashingValsetsWindow.isZero()) {
            writer.uint32(120).uint64(message.unbondSlashingValsetsWindow);
        }
        if (message.slashFractionBadEthSignature.length !== 0) {
            writer.uint32(130).bytes(message.slashFractionBadEthSignature);
        }
        if (message.valsetReward !== undefined) {
            coin_1.Coin.encode(message.valsetReward, writer.uint32(138).fork()).ldelim();
        }
        if (message.bridgeActive === true) {
            writer.uint32(144).bool(message.bridgeActive);
        }
        for (const v of message.ethereumBlacklist) {
            writer.uint32(154).string(v);
        }
        if (message.erc20ToDenomPermanentSwap !== undefined) {
            types_1.ERC20ToDenom.encode(message.erc20ToDenomPermanentSwap, writer.uint32(402).fork()).ldelim();
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
                    message.gravityId = reader.string();
                    break;
                case 2:
                    message.contractSourceHash = reader.string();
                    break;
                case 4:
                    message.bridgeEthereumAddress = reader.string();
                    break;
                case 5:
                    message.bridgeChainId = reader.uint64();
                    break;
                case 6:
                    message.signedValsetsWindow = reader.uint64();
                    break;
                case 7:
                    message.signedBatchesWindow = reader.uint64();
                    break;
                case 8:
                    message.signedLogicCallsWindow = reader.uint64();
                    break;
                case 9:
                    message.targetBatchTimeout = reader.uint64();
                    break;
                case 10:
                    message.averageBlockTime = reader.uint64();
                    break;
                case 11:
                    message.averageEthereumBlockTime = reader.uint64();
                    break;
                case 12:
                    message.slashFractionValset = reader.bytes();
                    break;
                case 13:
                    message.slashFractionBatch = reader.bytes();
                    break;
                case 14:
                    message.slashFractionLogicCall = reader.bytes();
                    break;
                case 15:
                    message.unbondSlashingValsetsWindow = reader.uint64();
                    break;
                case 16:
                    message.slashFractionBadEthSignature = reader.bytes();
                    break;
                case 17:
                    message.valsetReward = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.bridgeActive = reader.bool();
                    break;
                case 19:
                    message.ethereumBlacklist.push(reader.string());
                    break;
                case 50:
                    message.erc20ToDenomPermanentSwap = types_1.ERC20ToDenom.decode(reader, reader.uint32());
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
        message.gravityId = object.gravityId ?? "";
        message.contractSourceHash = object.contractSourceHash ?? "";
        message.bridgeEthereumAddress = object.bridgeEthereumAddress ?? "";
        message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? helpers_1.Long.fromValue(object.bridgeChainId) : helpers_1.Long.UZERO;
        message.signedValsetsWindow = object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null ? helpers_1.Long.fromValue(object.signedValsetsWindow) : helpers_1.Long.UZERO;
        message.signedBatchesWindow = object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null ? helpers_1.Long.fromValue(object.signedBatchesWindow) : helpers_1.Long.UZERO;
        message.signedLogicCallsWindow = object.signedLogicCallsWindow !== undefined && object.signedLogicCallsWindow !== null ? helpers_1.Long.fromValue(object.signedLogicCallsWindow) : helpers_1.Long.UZERO;
        message.targetBatchTimeout = object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null ? helpers_1.Long.fromValue(object.targetBatchTimeout) : helpers_1.Long.UZERO;
        message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? helpers_1.Long.fromValue(object.averageBlockTime) : helpers_1.Long.UZERO;
        message.averageEthereumBlockTime = object.averageEthereumBlockTime !== undefined && object.averageEthereumBlockTime !== null ? helpers_1.Long.fromValue(object.averageEthereumBlockTime) : helpers_1.Long.UZERO;
        message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
        message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
        message.slashFractionLogicCall = object.slashFractionLogicCall ?? new Uint8Array();
        message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null ? helpers_1.Long.fromValue(object.unbondSlashingValsetsWindow) : helpers_1.Long.UZERO;
        message.slashFractionBadEthSignature = object.slashFractionBadEthSignature ?? new Uint8Array();
        message.valsetReward = object.valsetReward !== undefined && object.valsetReward !== null ? coin_1.Coin.fromPartial(object.valsetReward) : undefined;
        message.bridgeActive = object.bridgeActive ?? false;
        message.ethereumBlacklist = object.ethereumBlacklist?.map(e => e) || [];
        message.erc20ToDenomPermanentSwap = object.erc20ToDenomPermanentSwap !== undefined && object.erc20ToDenomPermanentSwap !== null ? types_1.ERC20ToDenom.fromPartial(object.erc20ToDenomPermanentSwap) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            gravityId: object.gravity_id,
            contractSourceHash: object.contract_source_hash,
            bridgeEthereumAddress: object.bridge_ethereum_address,
            bridgeChainId: helpers_1.Long.fromString(object.bridge_chain_id),
            signedValsetsWindow: helpers_1.Long.fromString(object.signed_valsets_window),
            signedBatchesWindow: helpers_1.Long.fromString(object.signed_batches_window),
            signedLogicCallsWindow: helpers_1.Long.fromString(object.signed_logic_calls_window),
            targetBatchTimeout: helpers_1.Long.fromString(object.target_batch_timeout),
            averageBlockTime: helpers_1.Long.fromString(object.average_block_time),
            averageEthereumBlockTime: helpers_1.Long.fromString(object.average_ethereum_block_time),
            slashFractionValset: object.slash_fraction_valset,
            slashFractionBatch: object.slash_fraction_batch,
            slashFractionLogicCall: object.slash_fraction_logic_call,
            unbondSlashingValsetsWindow: helpers_1.Long.fromString(object.unbond_slashing_valsets_window),
            slashFractionBadEthSignature: object.slash_fraction_bad_eth_signature,
            valsetReward: object?.valset_reward ? coin_1.Coin.fromAmino(object.valset_reward) : undefined,
            bridgeActive: object.bridge_active,
            ethereumBlacklist: Array.isArray(object?.ethereum_blacklist) ? object.ethereum_blacklist.map((e) => e) : [],
            erc20ToDenomPermanentSwap: object?.erc20_to_denom_permanent_swap ? types_1.ERC20ToDenom.fromAmino(object.erc20_to_denom_permanent_swap) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gravity_id = message.gravityId;
        obj.contract_source_hash = message.contractSourceHash;
        obj.bridge_ethereum_address = message.bridgeEthereumAddress;
        obj.bridge_chain_id = message.bridgeChainId ? message.bridgeChainId.toString() : undefined;
        obj.signed_valsets_window = message.signedValsetsWindow ? message.signedValsetsWindow.toString() : undefined;
        obj.signed_batches_window = message.signedBatchesWindow ? message.signedBatchesWindow.toString() : undefined;
        obj.signed_logic_calls_window = message.signedLogicCallsWindow ? message.signedLogicCallsWindow.toString() : undefined;
        obj.target_batch_timeout = message.targetBatchTimeout ? message.targetBatchTimeout.toString() : undefined;
        obj.average_block_time = message.averageBlockTime ? message.averageBlockTime.toString() : undefined;
        obj.average_ethereum_block_time = message.averageEthereumBlockTime ? message.averageEthereumBlockTime.toString() : undefined;
        obj.slash_fraction_valset = message.slashFractionValset;
        obj.slash_fraction_batch = message.slashFractionBatch;
        obj.slash_fraction_logic_call = message.slashFractionLogicCall;
        obj.unbond_slashing_valsets_window = message.unbondSlashingValsetsWindow ? message.unbondSlashingValsetsWindow.toString() : undefined;
        obj.slash_fraction_bad_eth_signature = message.slashFractionBadEthSignature;
        obj.valset_reward = message.valsetReward ? coin_1.Coin.toAmino(message.valsetReward) : undefined;
        obj.bridge_active = message.bridgeActive;
        if (message.ethereumBlacklist) {
            obj.ethereum_blacklist = message.ethereumBlacklist.map(e => e);
        }
        else {
            obj.ethereum_blacklist = [];
        }
        obj.erc20_to_denom_permanent_swap = message.erc20ToDenomPermanentSwap ? types_1.ERC20ToDenom.toAmino(message.erc20ToDenomPermanentSwap) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: exports.Params.fromPartial({}),
        gravityNonces: exports.GravityNonces.fromPartial({}),
        valsets: [],
        valsetConfirms: [],
        batches: [],
        batchConfirms: [],
        logicCalls: [],
        logicCallConfirms: [],
        attestations: [],
        delegateKeys: [],
        erc20ToDenoms: [],
        unbatchedTransfers: []
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.gravityNonces !== undefined) {
            exports.GravityNonces.encode(message.gravityNonces, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.valsets) {
            types_1.Valset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.valsetConfirms) {
            msgs_1.MsgValsetConfirm.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.batches) {
            batch_1.OutgoingTxBatch.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.batchConfirms) {
            msgs_1.MsgConfirmBatch.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.logicCalls) {
            batch_1.OutgoingLogicCall.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.logicCallConfirms) {
            msgs_1.MsgConfirmLogicCall.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.attestations) {
            attestation_1.Attestation.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.delegateKeys) {
            msgs_1.MsgSetOrchestratorAddress.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.erc20ToDenoms) {
            types_1.ERC20ToDenom.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            batch_1.OutgoingTransferTx.encode(v, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gravityNonces = exports.GravityNonces.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.valsets.push(types_1.Valset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.valsetConfirms.push(msgs_1.MsgValsetConfirm.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.batches.push(batch_1.OutgoingTxBatch.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.batchConfirms.push(msgs_1.MsgConfirmBatch.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.logicCalls.push(batch_1.OutgoingLogicCall.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.logicCallConfirms.push(msgs_1.MsgConfirmLogicCall.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.attestations.push(attestation_1.Attestation.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.delegateKeys.push(msgs_1.MsgSetOrchestratorAddress.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.erc20ToDenoms.push(types_1.ERC20ToDenom.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.unbatchedTransfers.push(batch_1.OutgoingTransferTx.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        message.gravityNonces = object.gravityNonces !== undefined && object.gravityNonces !== null ? exports.GravityNonces.fromPartial(object.gravityNonces) : undefined;
        message.valsets = object.valsets?.map(e => types_1.Valset.fromPartial(e)) || [];
        message.valsetConfirms = object.valsetConfirms?.map(e => msgs_1.MsgValsetConfirm.fromPartial(e)) || [];
        message.batches = object.batches?.map(e => batch_1.OutgoingTxBatch.fromPartial(e)) || [];
        message.batchConfirms = object.batchConfirms?.map(e => msgs_1.MsgConfirmBatch.fromPartial(e)) || [];
        message.logicCalls = object.logicCalls?.map(e => batch_1.OutgoingLogicCall.fromPartial(e)) || [];
        message.logicCallConfirms = object.logicCallConfirms?.map(e => msgs_1.MsgConfirmLogicCall.fromPartial(e)) || [];
        message.attestations = object.attestations?.map(e => attestation_1.Attestation.fromPartial(e)) || [];
        message.delegateKeys = object.delegateKeys?.map(e => msgs_1.MsgSetOrchestratorAddress.fromPartial(e)) || [];
        message.erc20ToDenoms = object.erc20ToDenoms?.map(e => types_1.ERC20ToDenom.fromPartial(e)) || [];
        message.unbatchedTransfers = object.unbatchedTransfers?.map(e => batch_1.OutgoingTransferTx.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? exports.Params.fromAmino(object.params) : undefined,
            gravityNonces: object?.gravity_nonces ? exports.GravityNonces.fromAmino(object.gravity_nonces) : undefined,
            valsets: Array.isArray(object?.valsets) ? object.valsets.map((e) => types_1.Valset.fromAmino(e)) : [],
            valsetConfirms: Array.isArray(object?.valset_confirms) ? object.valset_confirms.map((e) => msgs_1.MsgValsetConfirm.fromAmino(e)) : [],
            batches: Array.isArray(object?.batches) ? object.batches.map((e) => batch_1.OutgoingTxBatch.fromAmino(e)) : [],
            batchConfirms: Array.isArray(object?.batch_confirms) ? object.batch_confirms.map((e) => msgs_1.MsgConfirmBatch.fromAmino(e)) : [],
            logicCalls: Array.isArray(object?.logic_calls) ? object.logic_calls.map((e) => batch_1.OutgoingLogicCall.fromAmino(e)) : [],
            logicCallConfirms: Array.isArray(object?.logic_call_confirms) ? object.logic_call_confirms.map((e) => msgs_1.MsgConfirmLogicCall.fromAmino(e)) : [],
            attestations: Array.isArray(object?.attestations) ? object.attestations.map((e) => attestation_1.Attestation.fromAmino(e)) : [],
            delegateKeys: Array.isArray(object?.delegate_keys) ? object.delegate_keys.map((e) => msgs_1.MsgSetOrchestratorAddress.fromAmino(e)) : [],
            erc20ToDenoms: Array.isArray(object?.erc20_to_denoms) ? object.erc20_to_denoms.map((e) => types_1.ERC20ToDenom.fromAmino(e)) : [],
            unbatchedTransfers: Array.isArray(object?.unbatched_transfers) ? object.unbatched_transfers.map((e) => batch_1.OutgoingTransferTx.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        obj.gravity_nonces = message.gravityNonces ? exports.GravityNonces.toAmino(message.gravityNonces) : undefined;
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? types_1.Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        if (message.valsetConfirms) {
            obj.valset_confirms = message.valsetConfirms.map(e => e ? msgs_1.MsgValsetConfirm.toAmino(e) : undefined);
        }
        else {
            obj.valset_confirms = [];
        }
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? batch_1.OutgoingTxBatch.toAmino(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        if (message.batchConfirms) {
            obj.batch_confirms = message.batchConfirms.map(e => e ? msgs_1.MsgConfirmBatch.toAmino(e) : undefined);
        }
        else {
            obj.batch_confirms = [];
        }
        if (message.logicCalls) {
            obj.logic_calls = message.logicCalls.map(e => e ? batch_1.OutgoingLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.logic_calls = [];
        }
        if (message.logicCallConfirms) {
            obj.logic_call_confirms = message.logicCallConfirms.map(e => e ? msgs_1.MsgConfirmLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.logic_call_confirms = [];
        }
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? attestation_1.Attestation.toAmino(e) : undefined);
        }
        else {
            obj.attestations = [];
        }
        if (message.delegateKeys) {
            obj.delegate_keys = message.delegateKeys.map(e => e ? msgs_1.MsgSetOrchestratorAddress.toAmino(e) : undefined);
        }
        else {
            obj.delegate_keys = [];
        }
        if (message.erc20ToDenoms) {
            obj.erc20_to_denoms = message.erc20ToDenoms.map(e => e ? types_1.ERC20ToDenom.toAmino(e) : undefined);
        }
        else {
            obj.erc20_to_denoms = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? batch_1.OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.unbatched_transfers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseGravityNonces() {
    return {
        latestValsetNonce: helpers_1.Long.UZERO,
        lastObservedNonce: helpers_1.Long.UZERO,
        lastSlashedValsetNonce: helpers_1.Long.UZERO,
        lastSlashedBatchBlock: helpers_1.Long.UZERO,
        lastSlashedLogicCallBlock: helpers_1.Long.UZERO,
        lastTxPoolId: helpers_1.Long.UZERO,
        lastBatchId: helpers_1.Long.UZERO
    };
}
exports.GravityNonces = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.latestValsetNonce.isZero()) {
            writer.uint32(8).uint64(message.latestValsetNonce);
        }
        if (!message.lastObservedNonce.isZero()) {
            writer.uint32(16).uint64(message.lastObservedNonce);
        }
        if (!message.lastSlashedValsetNonce.isZero()) {
            writer.uint32(24).uint64(message.lastSlashedValsetNonce);
        }
        if (!message.lastSlashedBatchBlock.isZero()) {
            writer.uint32(32).uint64(message.lastSlashedBatchBlock);
        }
        if (!message.lastSlashedLogicCallBlock.isZero()) {
            writer.uint32(40).uint64(message.lastSlashedLogicCallBlock);
        }
        if (!message.lastTxPoolId.isZero()) {
            writer.uint32(48).uint64(message.lastTxPoolId);
        }
        if (!message.lastBatchId.isZero()) {
            writer.uint32(56).uint64(message.lastBatchId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGravityNonces();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.latestValsetNonce = reader.uint64();
                    break;
                case 2:
                    message.lastObservedNonce = reader.uint64();
                    break;
                case 3:
                    message.lastSlashedValsetNonce = reader.uint64();
                    break;
                case 4:
                    message.lastSlashedBatchBlock = reader.uint64();
                    break;
                case 5:
                    message.lastSlashedLogicCallBlock = reader.uint64();
                    break;
                case 6:
                    message.lastTxPoolId = reader.uint64();
                    break;
                case 7:
                    message.lastBatchId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGravityNonces();
        message.latestValsetNonce = object.latestValsetNonce !== undefined && object.latestValsetNonce !== null ? helpers_1.Long.fromValue(object.latestValsetNonce) : helpers_1.Long.UZERO;
        message.lastObservedNonce = object.lastObservedNonce !== undefined && object.lastObservedNonce !== null ? helpers_1.Long.fromValue(object.lastObservedNonce) : helpers_1.Long.UZERO;
        message.lastSlashedValsetNonce = object.lastSlashedValsetNonce !== undefined && object.lastSlashedValsetNonce !== null ? helpers_1.Long.fromValue(object.lastSlashedValsetNonce) : helpers_1.Long.UZERO;
        message.lastSlashedBatchBlock = object.lastSlashedBatchBlock !== undefined && object.lastSlashedBatchBlock !== null ? helpers_1.Long.fromValue(object.lastSlashedBatchBlock) : helpers_1.Long.UZERO;
        message.lastSlashedLogicCallBlock = object.lastSlashedLogicCallBlock !== undefined && object.lastSlashedLogicCallBlock !== null ? helpers_1.Long.fromValue(object.lastSlashedLogicCallBlock) : helpers_1.Long.UZERO;
        message.lastTxPoolId = object.lastTxPoolId !== undefined && object.lastTxPoolId !== null ? helpers_1.Long.fromValue(object.lastTxPoolId) : helpers_1.Long.UZERO;
        message.lastBatchId = object.lastBatchId !== undefined && object.lastBatchId !== null ? helpers_1.Long.fromValue(object.lastBatchId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            latestValsetNonce: helpers_1.Long.fromString(object.latest_valset_nonce),
            lastObservedNonce: helpers_1.Long.fromString(object.last_observed_nonce),
            lastSlashedValsetNonce: helpers_1.Long.fromString(object.last_slashed_valset_nonce),
            lastSlashedBatchBlock: helpers_1.Long.fromString(object.last_slashed_batch_block),
            lastSlashedLogicCallBlock: helpers_1.Long.fromString(object.last_slashed_logic_call_block),
            lastTxPoolId: helpers_1.Long.fromString(object.last_tx_pool_id),
            lastBatchId: helpers_1.Long.fromString(object.last_batch_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.latest_valset_nonce = message.latestValsetNonce ? message.latestValsetNonce.toString() : undefined;
        obj.last_observed_nonce = message.lastObservedNonce ? message.lastObservedNonce.toString() : undefined;
        obj.last_slashed_valset_nonce = message.lastSlashedValsetNonce ? message.lastSlashedValsetNonce.toString() : undefined;
        obj.last_slashed_batch_block = message.lastSlashedBatchBlock ? message.lastSlashedBatchBlock.toString() : undefined;
        obj.last_slashed_logic_call_block = message.lastSlashedLogicCallBlock ? message.lastSlashedLogicCallBlock.toString() : undefined;
        obj.last_tx_pool_id = message.lastTxPoolId ? message.lastTxPoolId.toString() : undefined;
        obj.last_batch_id = message.lastBatchId ? message.lastBatchId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GravityNonces.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GravityNonces.decode(message.value);
    },
    toProto(message) {
        return exports.GravityNonces.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.GravityNonces",
            value: exports.GravityNonces.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map