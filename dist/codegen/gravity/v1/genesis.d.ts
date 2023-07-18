/// <reference types="long" />
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { ERC20ToDenom, ERC20ToDenomAmino, ERC20ToDenomSDKType, Valset, ValsetAmino, ValsetSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType, MsgConfirmLogicCall, MsgConfirmLogicCallAmino, MsgConfirmLogicCallSDKType, MsgSetOrchestratorAddress, MsgSetOrchestratorAddressAmino, MsgSetOrchestratorAddressSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingLogicCall, OutgoingLogicCallAmino, OutgoingLogicCallSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationAmino, AttestationSDKType } from "./attestation";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 *
 * unbond_slashing_valsets_window
 *
 * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
 * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
 * the set, if their leaving creates enough change in the validator set to justify an update they will sign
 * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
 * from the Ethereum bridge and replace them with the new set gracefully.
 *
 * valset_reward
 *
 * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
 * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
 * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 *
 * bridge_active
 *
 * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
 * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
 * the creation of new batches that may be relayed to Ethereum.
 * This does not prevent the creation of validator sets
 * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
 * set and steal funds on Ethereum without consequence.
 * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
 * Cosmos will not execute on Ethereum.
 */
export interface Params {
    gravityId: string;
    contractSourceHash: string;
    bridgeEthereumAddress: string;
    bridgeChainId: Long;
    signedValsetsWindow: Long;
    signedBatchesWindow: Long;
    signedLogicCallsWindow: Long;
    targetBatchTimeout: Long;
    averageBlockTime: Long;
    averageEthereumBlockTime: Long;
    slashFractionValset: Uint8Array;
    slashFractionBatch: Uint8Array;
    slashFractionLogicCall: Uint8Array;
    unbondSlashingValsetsWindow: Long;
    slashFractionBadEthSignature: Uint8Array;
    valsetReward: Coin;
    bridgeActive: boolean;
    /**
     * addresses on this blacklist are forbidden from depositing or withdrawing
     * from Ethereum to the bridge
     */
    ethereumBlacklist: string[];
    /** the pair of eth token and denom to automatically swap once the erc20 token is bridged. */
    erc20ToDenomPermanentSwap: ERC20ToDenom;
}
export interface ParamsProtoMsg {
    typeUrl: "/gravity.v1.Params";
    value: Uint8Array;
}
/**
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 *
 * unbond_slashing_valsets_window
 *
 * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
 * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
 * the set, if their leaving creates enough change in the validator set to justify an update they will sign
 * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
 * from the Ethereum bridge and replace them with the new set gracefully.
 *
 * valset_reward
 *
 * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
 * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
 * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 *
 * bridge_active
 *
 * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
 * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
 * the creation of new batches that may be relayed to Ethereum.
 * This does not prevent the creation of validator sets
 * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
 * set and steal funds on Ethereum without consequence.
 * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
 * Cosmos will not execute on Ethereum.
 */
export interface ParamsAmino {
    gravity_id: string;
    contract_source_hash: string;
    bridge_ethereum_address: string;
    bridge_chain_id: string;
    signed_valsets_window: string;
    signed_batches_window: string;
    signed_logic_calls_window: string;
    target_batch_timeout: string;
    average_block_time: string;
    average_ethereum_block_time: string;
    slash_fraction_valset: Uint8Array;
    slash_fraction_batch: Uint8Array;
    slash_fraction_logic_call: Uint8Array;
    unbond_slashing_valsets_window: string;
    slash_fraction_bad_eth_signature: Uint8Array;
    valset_reward?: CoinAmino;
    bridge_active: boolean;
    /**
     * addresses on this blacklist are forbidden from depositing or withdrawing
     * from Ethereum to the bridge
     */
    ethereum_blacklist: string[];
    /** the pair of eth token and denom to automatically swap once the erc20 token is bridged. */
    erc20_to_denom_permanent_swap?: ERC20ToDenomAmino;
}
export interface ParamsAminoMsg {
    type: "/gravity.v1.Params";
    value: ParamsAmino;
}
/**
 * The slashing fractions for the various gravity related slashing conditions. The first three
 * refer to not submitting a particular message, the third for submitting a different claim
 * for the same Ethereum event
 *
 * unbond_slashing_valsets_window
 *
 * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
 * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
 * the set, if their leaving creates enough change in the validator set to justify an update they will sign
 * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
 * from the Ethereum bridge and replace them with the new set gracefully.
 *
 * valset_reward
 *
 * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
 * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
 * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 *
 * bridge_active
 *
 * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
 * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
 * the creation of new batches that may be relayed to Ethereum.
 * This does not prevent the creation of validator sets
 * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
 * set and steal funds on Ethereum without consequence.
 * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
 * Cosmos will not execute on Ethereum.
 */
export interface ParamsSDKType {
    gravity_id: string;
    contract_source_hash: string;
    bridge_ethereum_address: string;
    bridge_chain_id: Long;
    signed_valsets_window: Long;
    signed_batches_window: Long;
    signed_logic_calls_window: Long;
    target_batch_timeout: Long;
    average_block_time: Long;
    average_ethereum_block_time: Long;
    slash_fraction_valset: Uint8Array;
    slash_fraction_batch: Uint8Array;
    slash_fraction_logic_call: Uint8Array;
    unbond_slashing_valsets_window: Long;
    slash_fraction_bad_eth_signature: Uint8Array;
    valset_reward: CoinSDKType;
    bridge_active: boolean;
    ethereum_blacklist: string[];
    erc20_to_denom_permanent_swap: ERC20ToDenomSDKType;
}
/** GenesisState struct, containing all persistant data required by the Gravity module */
export interface GenesisState {
    params: Params;
    gravityNonces: GravityNonces;
    valsets: Valset[];
    valsetConfirms: MsgValsetConfirm[];
    batches: OutgoingTxBatch[];
    batchConfirms: MsgConfirmBatch[];
    logicCalls: OutgoingLogicCall[];
    logicCallConfirms: MsgConfirmLogicCall[];
    attestations: Attestation[];
    delegateKeys: MsgSetOrchestratorAddress[];
    erc20ToDenoms: ERC20ToDenom[];
    unbatchedTransfers: OutgoingTransferTx[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/gravity.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState struct, containing all persistant data required by the Gravity module */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    gravity_nonces?: GravityNoncesAmino;
    valsets: ValsetAmino[];
    valset_confirms: MsgValsetConfirmAmino[];
    batches: OutgoingTxBatchAmino[];
    batch_confirms: MsgConfirmBatchAmino[];
    logic_calls: OutgoingLogicCallAmino[];
    logic_call_confirms: MsgConfirmLogicCallAmino[];
    attestations: AttestationAmino[];
    delegate_keys: MsgSetOrchestratorAddressAmino[];
    erc20_to_denoms: ERC20ToDenomAmino[];
    unbatched_transfers: OutgoingTransferTxAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/gravity.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState struct, containing all persistant data required by the Gravity module */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    gravity_nonces: GravityNoncesSDKType;
    valsets: ValsetSDKType[];
    valset_confirms: MsgValsetConfirmSDKType[];
    batches: OutgoingTxBatchSDKType[];
    batch_confirms: MsgConfirmBatchSDKType[];
    logic_calls: OutgoingLogicCallSDKType[];
    logic_call_confirms: MsgConfirmLogicCallSDKType[];
    attestations: AttestationSDKType[];
    delegate_keys: MsgSetOrchestratorAddressSDKType[];
    erc20_to_denoms: ERC20ToDenomSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
}
/** GravityCounters contains the many noces and counters required to maintain the bridge state in the genesis */
export interface GravityNonces {
    /** the nonce of the last generated validator set */
    latestValsetNonce: Long;
    /** the last observed Gravity.sol contract event nonce */
    lastObservedNonce: Long;
    /** the last valset nonce we have slashed, to prevent double slashing */
    lastSlashedValsetNonce: Long;
    /**
     * the last batch Cosmos chain block that batch slashing has completed for
     * there is an individual batch nonce for each token type so this removes
     * the need to store them all
     */
    lastSlashedBatchBlock: Long;
    /** the last cosmos block that logic call slashing has completed for */
    lastSlashedLogicCallBlock: Long;
    /**
     * the last transaction id from the Gravity TX pool, this prevents ID
     * duplication during chain upgrades
     */
    lastTxPoolId: Long;
    /**
     * the last batch id from the Gravity batch pool, this prevents ID duplication
     * during chain upgrades
     */
    lastBatchId: Long;
}
export interface GravityNoncesProtoMsg {
    typeUrl: "/gravity.v1.GravityNonces";
    value: Uint8Array;
}
/** GravityCounters contains the many noces and counters required to maintain the bridge state in the genesis */
export interface GravityNoncesAmino {
    /** the nonce of the last generated validator set */
    latest_valset_nonce: string;
    /** the last observed Gravity.sol contract event nonce */
    last_observed_nonce: string;
    /** the last valset nonce we have slashed, to prevent double slashing */
    last_slashed_valset_nonce: string;
    /**
     * the last batch Cosmos chain block that batch slashing has completed for
     * there is an individual batch nonce for each token type so this removes
     * the need to store them all
     */
    last_slashed_batch_block: string;
    /** the last cosmos block that logic call slashing has completed for */
    last_slashed_logic_call_block: string;
    /**
     * the last transaction id from the Gravity TX pool, this prevents ID
     * duplication during chain upgrades
     */
    last_tx_pool_id: string;
    /**
     * the last batch id from the Gravity batch pool, this prevents ID duplication
     * during chain upgrades
     */
    last_batch_id: string;
}
export interface GravityNoncesAminoMsg {
    type: "/gravity.v1.GravityNonces";
    value: GravityNoncesAmino;
}
/** GravityCounters contains the many noces and counters required to maintain the bridge state in the genesis */
export interface GravityNoncesSDKType {
    latest_valset_nonce: Long;
    last_observed_nonce: Long;
    last_slashed_valset_nonce: Long;
    last_slashed_batch_block: Long;
    last_slashed_logic_call_block: Long;
    last_tx_pool_id: Long;
    last_batch_id: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GravityNonces: {
    encode(message: GravityNonces, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GravityNonces;
    fromPartial(object: DeepPartial<GravityNonces>): GravityNonces;
    fromAmino(object: GravityNoncesAmino): GravityNonces;
    toAmino(message: GravityNonces): GravityNoncesAmino;
    fromAminoMsg(object: GravityNoncesAminoMsg): GravityNonces;
    fromProtoMsg(message: GravityNoncesProtoMsg): GravityNonces;
    toProto(message: GravityNonces): Uint8Array;
    toProtoMsg(message: GravityNonces): GravityNoncesProtoMsg;
};
