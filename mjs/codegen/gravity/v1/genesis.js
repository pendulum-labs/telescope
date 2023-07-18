import { Coin } from "../../cosmos/base/v1beta1/coin";
import { ERC20ToDenom, Valset } from "./types";
import { MsgValsetConfirm, MsgConfirmBatch, MsgConfirmLogicCall, MsgSetOrchestratorAddress } from "./msgs";
import { OutgoingTxBatch, OutgoingLogicCall, OutgoingTransferTx } from "./batch";
import { Attestation } from "./attestation";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
    return {
        gravityId: "",
        contractSourceHash: "",
        bridgeEthereumAddress: "",
        bridgeChainId: Long.UZERO,
        signedValsetsWindow: Long.UZERO,
        signedBatchesWindow: Long.UZERO,
        signedLogicCallsWindow: Long.UZERO,
        targetBatchTimeout: Long.UZERO,
        averageBlockTime: Long.UZERO,
        averageEthereumBlockTime: Long.UZERO,
        slashFractionValset: new Uint8Array(),
        slashFractionBatch: new Uint8Array(),
        slashFractionLogicCall: new Uint8Array(),
        unbondSlashingValsetsWindow: Long.UZERO,
        slashFractionBadEthSignature: new Uint8Array(),
        valsetReward: undefined,
        bridgeActive: false,
        ethereumBlacklist: [],
        erc20ToDenomPermanentSwap: ERC20ToDenom.fromPartial({})
    };
}
export const Params = {
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
            Coin.encode(message.valsetReward, writer.uint32(138).fork()).ldelim();
        }
        if (message.bridgeActive === true) {
            writer.uint32(144).bool(message.bridgeActive);
        }
        for (const v of message.ethereumBlacklist) {
            writer.uint32(154).string(v);
        }
        if (message.erc20ToDenomPermanentSwap !== undefined) {
            ERC20ToDenom.encode(message.erc20ToDenomPermanentSwap, writer.uint32(402).fork()).ldelim();
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
                    message.valsetReward = Coin.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.bridgeActive = reader.bool();
                    break;
                case 19:
                    message.ethereumBlacklist.push(reader.string());
                    break;
                case 50:
                    message.erc20ToDenomPermanentSwap = ERC20ToDenom.decode(reader, reader.uint32());
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
        message.bridgeChainId = object.bridgeChainId !== undefined && object.bridgeChainId !== null ? Long.fromValue(object.bridgeChainId) : Long.UZERO;
        message.signedValsetsWindow = object.signedValsetsWindow !== undefined && object.signedValsetsWindow !== null ? Long.fromValue(object.signedValsetsWindow) : Long.UZERO;
        message.signedBatchesWindow = object.signedBatchesWindow !== undefined && object.signedBatchesWindow !== null ? Long.fromValue(object.signedBatchesWindow) : Long.UZERO;
        message.signedLogicCallsWindow = object.signedLogicCallsWindow !== undefined && object.signedLogicCallsWindow !== null ? Long.fromValue(object.signedLogicCallsWindow) : Long.UZERO;
        message.targetBatchTimeout = object.targetBatchTimeout !== undefined && object.targetBatchTimeout !== null ? Long.fromValue(object.targetBatchTimeout) : Long.UZERO;
        message.averageBlockTime = object.averageBlockTime !== undefined && object.averageBlockTime !== null ? Long.fromValue(object.averageBlockTime) : Long.UZERO;
        message.averageEthereumBlockTime = object.averageEthereumBlockTime !== undefined && object.averageEthereumBlockTime !== null ? Long.fromValue(object.averageEthereumBlockTime) : Long.UZERO;
        message.slashFractionValset = object.slashFractionValset ?? new Uint8Array();
        message.slashFractionBatch = object.slashFractionBatch ?? new Uint8Array();
        message.slashFractionLogicCall = object.slashFractionLogicCall ?? new Uint8Array();
        message.unbondSlashingValsetsWindow = object.unbondSlashingValsetsWindow !== undefined && object.unbondSlashingValsetsWindow !== null ? Long.fromValue(object.unbondSlashingValsetsWindow) : Long.UZERO;
        message.slashFractionBadEthSignature = object.slashFractionBadEthSignature ?? new Uint8Array();
        message.valsetReward = object.valsetReward !== undefined && object.valsetReward !== null ? Coin.fromPartial(object.valsetReward) : undefined;
        message.bridgeActive = object.bridgeActive ?? false;
        message.ethereumBlacklist = object.ethereumBlacklist?.map(e => e) || [];
        message.erc20ToDenomPermanentSwap = object.erc20ToDenomPermanentSwap !== undefined && object.erc20ToDenomPermanentSwap !== null ? ERC20ToDenom.fromPartial(object.erc20ToDenomPermanentSwap) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            gravityId: object.gravity_id,
            contractSourceHash: object.contract_source_hash,
            bridgeEthereumAddress: object.bridge_ethereum_address,
            bridgeChainId: Long.fromString(object.bridge_chain_id),
            signedValsetsWindow: Long.fromString(object.signed_valsets_window),
            signedBatchesWindow: Long.fromString(object.signed_batches_window),
            signedLogicCallsWindow: Long.fromString(object.signed_logic_calls_window),
            targetBatchTimeout: Long.fromString(object.target_batch_timeout),
            averageBlockTime: Long.fromString(object.average_block_time),
            averageEthereumBlockTime: Long.fromString(object.average_ethereum_block_time),
            slashFractionValset: object.slash_fraction_valset,
            slashFractionBatch: object.slash_fraction_batch,
            slashFractionLogicCall: object.slash_fraction_logic_call,
            unbondSlashingValsetsWindow: Long.fromString(object.unbond_slashing_valsets_window),
            slashFractionBadEthSignature: object.slash_fraction_bad_eth_signature,
            valsetReward: object?.valset_reward ? Coin.fromAmino(object.valset_reward) : undefined,
            bridgeActive: object.bridge_active,
            ethereumBlacklist: Array.isArray(object?.ethereum_blacklist) ? object.ethereum_blacklist.map((e) => e) : [],
            erc20ToDenomPermanentSwap: object?.erc20_to_denom_permanent_swap ? ERC20ToDenom.fromAmino(object.erc20_to_denom_permanent_swap) : undefined
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
        obj.valset_reward = message.valsetReward ? Coin.toAmino(message.valsetReward) : undefined;
        obj.bridge_active = message.bridgeActive;
        if (message.ethereumBlacklist) {
            obj.ethereum_blacklist = message.ethereumBlacklist.map(e => e);
        }
        else {
            obj.ethereum_blacklist = [];
        }
        obj.erc20_to_denom_permanent_swap = message.erc20ToDenomPermanentSwap ? ERC20ToDenom.toAmino(message.erc20ToDenomPermanentSwap) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        gravityNonces: GravityNonces.fromPartial({}),
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
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.gravityNonces !== undefined) {
            GravityNonces.encode(message.gravityNonces, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.valsets) {
            Valset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.valsetConfirms) {
            MsgValsetConfirm.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.batches) {
            OutgoingTxBatch.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.batchConfirms) {
            MsgConfirmBatch.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.logicCalls) {
            OutgoingLogicCall.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.logicCallConfirms) {
            MsgConfirmLogicCall.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.attestations) {
            Attestation.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.delegateKeys) {
            MsgSetOrchestratorAddress.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.erc20ToDenoms) {
            ERC20ToDenom.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.unbatchedTransfers) {
            OutgoingTransferTx.encode(v, writer.uint32(98).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gravityNonces = GravityNonces.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.valsets.push(Valset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.valsetConfirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.batchConfirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.logicCalls.push(OutgoingLogicCall.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.logicCallConfirms.push(MsgConfirmLogicCall.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.attestations.push(Attestation.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.delegateKeys.push(MsgSetOrchestratorAddress.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.erc20ToDenoms.push(ERC20ToDenom.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
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
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.gravityNonces = object.gravityNonces !== undefined && object.gravityNonces !== null ? GravityNonces.fromPartial(object.gravityNonces) : undefined;
        message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
        message.valsetConfirms = object.valsetConfirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
        message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
        message.batchConfirms = object.batchConfirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
        message.logicCalls = object.logicCalls?.map(e => OutgoingLogicCall.fromPartial(e)) || [];
        message.logicCallConfirms = object.logicCallConfirms?.map(e => MsgConfirmLogicCall.fromPartial(e)) || [];
        message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
        message.delegateKeys = object.delegateKeys?.map(e => MsgSetOrchestratorAddress.fromPartial(e)) || [];
        message.erc20ToDenoms = object.erc20ToDenoms?.map(e => ERC20ToDenom.fromPartial(e)) || [];
        message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            gravityNonces: object?.gravity_nonces ? GravityNonces.fromAmino(object.gravity_nonces) : undefined,
            valsets: Array.isArray(object?.valsets) ? object.valsets.map((e) => Valset.fromAmino(e)) : [],
            valsetConfirms: Array.isArray(object?.valset_confirms) ? object.valset_confirms.map((e) => MsgValsetConfirm.fromAmino(e)) : [],
            batches: Array.isArray(object?.batches) ? object.batches.map((e) => OutgoingTxBatch.fromAmino(e)) : [],
            batchConfirms: Array.isArray(object?.batch_confirms) ? object.batch_confirms.map((e) => MsgConfirmBatch.fromAmino(e)) : [],
            logicCalls: Array.isArray(object?.logic_calls) ? object.logic_calls.map((e) => OutgoingLogicCall.fromAmino(e)) : [],
            logicCallConfirms: Array.isArray(object?.logic_call_confirms) ? object.logic_call_confirms.map((e) => MsgConfirmLogicCall.fromAmino(e)) : [],
            attestations: Array.isArray(object?.attestations) ? object.attestations.map((e) => Attestation.fromAmino(e)) : [],
            delegateKeys: Array.isArray(object?.delegate_keys) ? object.delegate_keys.map((e) => MsgSetOrchestratorAddress.fromAmino(e)) : [],
            erc20ToDenoms: Array.isArray(object?.erc20_to_denoms) ? object.erc20_to_denoms.map((e) => ERC20ToDenom.fromAmino(e)) : [],
            unbatchedTransfers: Array.isArray(object?.unbatched_transfers) ? object.unbatched_transfers.map((e) => OutgoingTransferTx.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.gravity_nonces = message.gravityNonces ? GravityNonces.toAmino(message.gravityNonces) : undefined;
        if (message.valsets) {
            obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
        }
        else {
            obj.valsets = [];
        }
        if (message.valsetConfirms) {
            obj.valset_confirms = message.valsetConfirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
        }
        else {
            obj.valset_confirms = [];
        }
        if (message.batches) {
            obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
        }
        else {
            obj.batches = [];
        }
        if (message.batchConfirms) {
            obj.batch_confirms = message.batchConfirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
        }
        else {
            obj.batch_confirms = [];
        }
        if (message.logicCalls) {
            obj.logic_calls = message.logicCalls.map(e => e ? OutgoingLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.logic_calls = [];
        }
        if (message.logicCallConfirms) {
            obj.logic_call_confirms = message.logicCallConfirms.map(e => e ? MsgConfirmLogicCall.toAmino(e) : undefined);
        }
        else {
            obj.logic_call_confirms = [];
        }
        if (message.attestations) {
            obj.attestations = message.attestations.map(e => e ? Attestation.toAmino(e) : undefined);
        }
        else {
            obj.attestations = [];
        }
        if (message.delegateKeys) {
            obj.delegate_keys = message.delegateKeys.map(e => e ? MsgSetOrchestratorAddress.toAmino(e) : undefined);
        }
        else {
            obj.delegate_keys = [];
        }
        if (message.erc20ToDenoms) {
            obj.erc20_to_denoms = message.erc20ToDenoms.map(e => e ? ERC20ToDenom.toAmino(e) : undefined);
        }
        else {
            obj.erc20_to_denoms = [];
        }
        if (message.unbatchedTransfers) {
            obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
        }
        else {
            obj.unbatched_transfers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseGravityNonces() {
    return {
        latestValsetNonce: Long.UZERO,
        lastObservedNonce: Long.UZERO,
        lastSlashedValsetNonce: Long.UZERO,
        lastSlashedBatchBlock: Long.UZERO,
        lastSlashedLogicCallBlock: Long.UZERO,
        lastTxPoolId: Long.UZERO,
        lastBatchId: Long.UZERO
    };
}
export const GravityNonces = {
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
        message.latestValsetNonce = object.latestValsetNonce !== undefined && object.latestValsetNonce !== null ? Long.fromValue(object.latestValsetNonce) : Long.UZERO;
        message.lastObservedNonce = object.lastObservedNonce !== undefined && object.lastObservedNonce !== null ? Long.fromValue(object.lastObservedNonce) : Long.UZERO;
        message.lastSlashedValsetNonce = object.lastSlashedValsetNonce !== undefined && object.lastSlashedValsetNonce !== null ? Long.fromValue(object.lastSlashedValsetNonce) : Long.UZERO;
        message.lastSlashedBatchBlock = object.lastSlashedBatchBlock !== undefined && object.lastSlashedBatchBlock !== null ? Long.fromValue(object.lastSlashedBatchBlock) : Long.UZERO;
        message.lastSlashedLogicCallBlock = object.lastSlashedLogicCallBlock !== undefined && object.lastSlashedLogicCallBlock !== null ? Long.fromValue(object.lastSlashedLogicCallBlock) : Long.UZERO;
        message.lastTxPoolId = object.lastTxPoolId !== undefined && object.lastTxPoolId !== null ? Long.fromValue(object.lastTxPoolId) : Long.UZERO;
        message.lastBatchId = object.lastBatchId !== undefined && object.lastBatchId !== null ? Long.fromValue(object.lastBatchId) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            latestValsetNonce: Long.fromString(object.latest_valset_nonce),
            lastObservedNonce: Long.fromString(object.last_observed_nonce),
            lastSlashedValsetNonce: Long.fromString(object.last_slashed_valset_nonce),
            lastSlashedBatchBlock: Long.fromString(object.last_slashed_batch_block),
            lastSlashedLogicCallBlock: Long.fromString(object.last_slashed_logic_call_block),
            lastTxPoolId: Long.fromString(object.last_tx_pool_id),
            lastBatchId: Long.fromString(object.last_batch_id)
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
        return GravityNonces.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GravityNonces.decode(message.value);
    },
    toProto(message) {
        return GravityNonces.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/gravity.v1.GravityNonces",
            value: GravityNonces.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map