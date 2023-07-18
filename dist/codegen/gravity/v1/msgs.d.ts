/// <reference types="long" />
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BridgeValidator, BridgeValidatorAmino, BridgeValidatorSDKType } from "./types";
import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddress {
    validator: string;
    orchestrator: string;
    ethAddress: string;
}
export interface MsgSetOrchestratorAddressProtoMsg {
    typeUrl: "/gravity.v1.MsgSetOrchestratorAddress";
    value: Uint8Array;
}
/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddressAmino {
    validator: string;
    orchestrator: string;
    eth_address: string;
}
export interface MsgSetOrchestratorAddressAminoMsg {
    type: "/gravity.v1.MsgSetOrchestratorAddress";
    value: MsgSetOrchestratorAddressAmino;
}
/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddressSDKType {
    validator: string;
    orchestrator: string;
    eth_address: string;
}
export interface MsgSetOrchestratorAddressResponse {
}
export interface MsgSetOrchestratorAddressResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse";
    value: Uint8Array;
}
export interface MsgSetOrchestratorAddressResponseAmino {
}
export interface MsgSetOrchestratorAddressResponseAminoMsg {
    type: "/gravity.v1.MsgSetOrchestratorAddressResponse";
    value: MsgSetOrchestratorAddressResponseAmino;
}
export interface MsgSetOrchestratorAddressResponseSDKType {
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
    nonce: Long;
    orchestrator: string;
    ethAddress: string;
    signature: string;
}
export interface MsgValsetConfirmProtoMsg {
    typeUrl: "/gravity.v1.MsgValsetConfirm";
    value: Uint8Array;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirmAmino {
    nonce: string;
    orchestrator: string;
    eth_address: string;
    signature: string;
}
export interface MsgValsetConfirmAminoMsg {
    type: "/gravity.v1.MsgValsetConfirm";
    value: MsgValsetConfirmAmino;
}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirmSDKType {
    nonce: Long;
    orchestrator: string;
    eth_address: string;
    signature: string;
}
export interface MsgValsetConfirmResponse {
}
export interface MsgValsetConfirmResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgValsetConfirmResponse";
    value: Uint8Array;
}
export interface MsgValsetConfirmResponseAmino {
}
export interface MsgValsetConfirmResponseAminoMsg {
    type: "/gravity.v1.MsgValsetConfirmResponse";
    value: MsgValsetConfirmResponseAmino;
}
export interface MsgValsetConfirmResponseSDKType {
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEth {
    sender: string;
    ethDest: string;
    amount: Coin;
    bridgeFee: Coin;
}
export interface MsgSendToEthProtoMsg {
    typeUrl: "/gravity.v1.MsgSendToEth";
    value: Uint8Array;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEthAmino {
    sender: string;
    eth_dest: string;
    amount?: CoinAmino;
    bridge_fee?: CoinAmino;
}
export interface MsgSendToEthAminoMsg {
    type: "/gravity.v1.MsgSendToEth";
    value: MsgSendToEthAmino;
}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEthSDKType {
    sender: string;
    eth_dest: string;
    amount: CoinSDKType;
    bridge_fee: CoinSDKType;
}
export interface MsgSendToEthResponse {
}
export interface MsgSendToEthResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgSendToEthResponse";
    value: Uint8Array;
}
export interface MsgSendToEthResponseAmino {
}
export interface MsgSendToEthResponseAminoMsg {
    type: "/gravity.v1.MsgSendToEthResponse";
    value: MsgSendToEthResponseAmino;
}
export interface MsgSendToEthResponseSDKType {
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
    sender: string;
    denom: string;
}
export interface MsgRequestBatchProtoMsg {
    typeUrl: "/gravity.v1.MsgRequestBatch";
    value: Uint8Array;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatchAmino {
    sender: string;
    denom: string;
}
export interface MsgRequestBatchAminoMsg {
    type: "/gravity.v1.MsgRequestBatch";
    value: MsgRequestBatchAmino;
}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatchSDKType {
    sender: string;
    denom: string;
}
export interface MsgRequestBatchResponse {
}
export interface MsgRequestBatchResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgRequestBatchResponse";
    value: Uint8Array;
}
export interface MsgRequestBatchResponseAmino {
}
export interface MsgRequestBatchResponseAminoMsg {
    type: "/gravity.v1.MsgRequestBatchResponse";
    value: MsgRequestBatchResponseAmino;
}
export interface MsgRequestBatchResponseSDKType {
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
    nonce: Long;
    tokenContract: string;
    ethSigner: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmBatchProtoMsg {
    typeUrl: "/gravity.v1.MsgConfirmBatch";
    value: Uint8Array;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatchAmino {
    nonce: string;
    token_contract: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmBatchAminoMsg {
    type: "/gravity.v1.MsgConfirmBatch";
    value: MsgConfirmBatchAmino;
}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatchSDKType {
    nonce: Long;
    token_contract: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmBatchResponse {
}
export interface MsgConfirmBatchResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgConfirmBatchResponse";
    value: Uint8Array;
}
export interface MsgConfirmBatchResponseAmino {
}
export interface MsgConfirmBatchResponseAminoMsg {
    type: "/gravity.v1.MsgConfirmBatchResponse";
    value: MsgConfirmBatchResponseAmino;
}
export interface MsgConfirmBatchResponseSDKType {
}
/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCall {
    invalidationId: string;
    invalidationNonce: Long;
    ethSigner: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmLogicCallProtoMsg {
    typeUrl: "/gravity.v1.MsgConfirmLogicCall";
    value: Uint8Array;
}
/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCallAmino {
    invalidation_id: string;
    invalidation_nonce: string;
    eth_signer: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmLogicCallAminoMsg {
    type: "/gravity.v1.MsgConfirmLogicCall";
    value: MsgConfirmLogicCallAmino;
}
/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCallSDKType {
    invalidation_id: string;
    invalidation_nonce: Long;
    eth_signer: string;
    orchestrator: string;
    signature: string;
}
export interface MsgConfirmLogicCallResponse {
}
export interface MsgConfirmLogicCallResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse";
    value: Uint8Array;
}
export interface MsgConfirmLogicCallResponseAmino {
}
export interface MsgConfirmLogicCallResponseAminoMsg {
    type: "/gravity.v1.MsgConfirmLogicCallResponse";
    value: MsgConfirmLogicCallResponseAmino;
}
export interface MsgConfirmLogicCallResponseSDKType {
}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaim {
    eventNonce: Long;
    blockHeight: Long;
    tokenContract: string;
    amount: string;
    ethereumSender: string;
    cosmosReceiver: string;
    orchestrator: string;
}
export interface MsgSendToCosmosClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgSendToCosmosClaim";
    value: Uint8Array;
}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaimAmino {
    event_nonce: string;
    block_height: string;
    token_contract: string;
    amount: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    orchestrator: string;
}
export interface MsgSendToCosmosClaimAminoMsg {
    type: "/gravity.v1.MsgSendToCosmosClaim";
    value: MsgSendToCosmosClaimAmino;
}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaimSDKType {
    event_nonce: Long;
    block_height: Long;
    token_contract: string;
    amount: string;
    ethereum_sender: string;
    cosmos_receiver: string;
    orchestrator: string;
}
export interface MsgSendToCosmosClaimResponse {
}
export interface MsgSendToCosmosClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse";
    value: Uint8Array;
}
export interface MsgSendToCosmosClaimResponseAmino {
}
export interface MsgSendToCosmosClaimResponseAminoMsg {
    type: "/gravity.v1.MsgSendToCosmosClaimResponse";
    value: MsgSendToCosmosClaimResponseAmino;
}
export interface MsgSendToCosmosClaimResponseSDKType {
}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaim {
    eventNonce: Long;
    blockHeight: Long;
    batchNonce: Long;
    tokenContract: string;
    orchestrator: string;
}
export interface MsgBatchSendToEthClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgBatchSendToEthClaim";
    value: Uint8Array;
}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaimAmino {
    event_nonce: string;
    block_height: string;
    batch_nonce: string;
    token_contract: string;
    orchestrator: string;
}
export interface MsgBatchSendToEthClaimAminoMsg {
    type: "/gravity.v1.MsgBatchSendToEthClaim";
    value: MsgBatchSendToEthClaimAmino;
}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaimSDKType {
    event_nonce: Long;
    block_height: Long;
    batch_nonce: Long;
    token_contract: string;
    orchestrator: string;
}
export interface MsgBatchSendToEthClaimResponse {
}
export interface MsgBatchSendToEthClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse";
    value: Uint8Array;
}
export interface MsgBatchSendToEthClaimResponseAmino {
}
export interface MsgBatchSendToEthClaimResponseAminoMsg {
    type: "/gravity.v1.MsgBatchSendToEthClaimResponse";
    value: MsgBatchSendToEthClaimResponseAmino;
}
export interface MsgBatchSendToEthClaimResponseSDKType {
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
    eventNonce: Long;
    blockHeight: Long;
    cosmosDenom: string;
    tokenContract: string;
    name: string;
    symbol: string;
    decimals: Long;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgERC20DeployedClaim";
    value: Uint8Array;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimAmino {
    event_nonce: string;
    block_height: string;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: string;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimAminoMsg {
    type: "/gravity.v1.MsgERC20DeployedClaim";
    value: MsgERC20DeployedClaimAmino;
}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaimSDKType {
    event_nonce: Long;
    block_height: Long;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: Long;
    orchestrator: string;
}
export interface MsgERC20DeployedClaimResponse {
}
export interface MsgERC20DeployedClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse";
    value: Uint8Array;
}
export interface MsgERC20DeployedClaimResponseAmino {
}
export interface MsgERC20DeployedClaimResponseAminoMsg {
    type: "/gravity.v1.MsgERC20DeployedClaimResponse";
    value: MsgERC20DeployedClaimResponseAmino;
}
export interface MsgERC20DeployedClaimResponseSDKType {
}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaim {
    eventNonce: Long;
    blockHeight: Long;
    invalidationId: Uint8Array;
    invalidationNonce: Long;
    orchestrator: string;
}
export interface MsgLogicCallExecutedClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim";
    value: Uint8Array;
}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaimAmino {
    event_nonce: string;
    block_height: string;
    invalidation_id: Uint8Array;
    invalidation_nonce: string;
    orchestrator: string;
}
export interface MsgLogicCallExecutedClaimAminoMsg {
    type: "/gravity.v1.MsgLogicCallExecutedClaim";
    value: MsgLogicCallExecutedClaimAmino;
}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaimSDKType {
    event_nonce: Long;
    block_height: Long;
    invalidation_id: Uint8Array;
    invalidation_nonce: Long;
    orchestrator: string;
}
export interface MsgLogicCallExecutedClaimResponse {
}
export interface MsgLogicCallExecutedClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse";
    value: Uint8Array;
}
export interface MsgLogicCallExecutedClaimResponseAmino {
}
export interface MsgLogicCallExecutedClaimResponseAminoMsg {
    type: "/gravity.v1.MsgLogicCallExecutedClaimResponse";
    value: MsgLogicCallExecutedClaimResponseAmino;
}
export interface MsgLogicCallExecutedClaimResponseSDKType {
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
    eventNonce: Long;
    valsetNonce: Long;
    blockHeight: Long;
    members: BridgeValidator[];
    rewardAmount: string;
    rewardToken: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimProtoMsg {
    typeUrl: "/gravity.v1.MsgValsetUpdatedClaim";
    value: Uint8Array;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimAmino {
    event_nonce: string;
    valset_nonce: string;
    block_height: string;
    members: BridgeValidatorAmino[];
    reward_amount: string;
    reward_token: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimAminoMsg {
    type: "/gravity.v1.MsgValsetUpdatedClaim";
    value: MsgValsetUpdatedClaimAmino;
}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaimSDKType {
    event_nonce: Long;
    valset_nonce: Long;
    block_height: Long;
    members: BridgeValidatorSDKType[];
    reward_amount: string;
    reward_token: string;
    orchestrator: string;
}
export interface MsgValsetUpdatedClaimResponse {
}
export interface MsgValsetUpdatedClaimResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse";
    value: Uint8Array;
}
export interface MsgValsetUpdatedClaimResponseAmino {
}
export interface MsgValsetUpdatedClaimResponseAminoMsg {
    type: "/gravity.v1.MsgValsetUpdatedClaimResponse";
    value: MsgValsetUpdatedClaimResponseAmino;
}
export interface MsgValsetUpdatedClaimResponseSDKType {
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
    transactionId: Long;
    sender: string;
}
export interface MsgCancelSendToEthProtoMsg {
    typeUrl: "/gravity.v1.MsgCancelSendToEth";
    value: Uint8Array;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEthAmino {
    transaction_id: string;
    sender: string;
}
export interface MsgCancelSendToEthAminoMsg {
    type: "/gravity.v1.MsgCancelSendToEth";
    value: MsgCancelSendToEthAmino;
}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEthSDKType {
    transaction_id: Long;
    sender: string;
}
export interface MsgCancelSendToEthResponse {
}
export interface MsgCancelSendToEthResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgCancelSendToEthResponse";
    value: Uint8Array;
}
export interface MsgCancelSendToEthResponseAmino {
}
export interface MsgCancelSendToEthResponseAminoMsg {
    type: "/gravity.v1.MsgCancelSendToEthResponse";
    value: MsgCancelSendToEthResponseAmino;
}
export interface MsgCancelSendToEthResponseSDKType {
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
    subject: Any;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceProtoMsg {
    typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence";
    value: Uint8Array;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceAmino {
    subject?: AnyAmino;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceAminoMsg {
    type: "/gravity.v1.MsgSubmitBadSignatureEvidence";
    value: MsgSubmitBadSignatureEvidenceAmino;
}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidenceSDKType {
    subject: AnySDKType;
    signature: string;
    sender: string;
}
export interface MsgSubmitBadSignatureEvidenceResponse {
}
export interface MsgSubmitBadSignatureEvidenceResponseProtoMsg {
    typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse";
    value: Uint8Array;
}
export interface MsgSubmitBadSignatureEvidenceResponseAmino {
}
export interface MsgSubmitBadSignatureEvidenceResponseAminoMsg {
    type: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse";
    value: MsgSubmitBadSignatureEvidenceResponseAmino;
}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {
}
export declare const MsgSetOrchestratorAddress: {
    encode(message: MsgSetOrchestratorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddress;
    fromPartial(object: DeepPartial<MsgSetOrchestratorAddress>): MsgSetOrchestratorAddress;
    fromAmino(object: MsgSetOrchestratorAddressAmino): MsgSetOrchestratorAddress;
    toAmino(message: MsgSetOrchestratorAddress): MsgSetOrchestratorAddressAmino;
    fromAminoMsg(object: MsgSetOrchestratorAddressAminoMsg): MsgSetOrchestratorAddress;
    fromProtoMsg(message: MsgSetOrchestratorAddressProtoMsg): MsgSetOrchestratorAddress;
    toProto(message: MsgSetOrchestratorAddress): Uint8Array;
    toProtoMsg(message: MsgSetOrchestratorAddress): MsgSetOrchestratorAddressProtoMsg;
};
export declare const MsgSetOrchestratorAddressResponse: {
    encode(_: MsgSetOrchestratorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddressResponse;
    fromPartial(_: DeepPartial<MsgSetOrchestratorAddressResponse>): MsgSetOrchestratorAddressResponse;
    fromAmino(_: MsgSetOrchestratorAddressResponseAmino): MsgSetOrchestratorAddressResponse;
    toAmino(_: MsgSetOrchestratorAddressResponse): MsgSetOrchestratorAddressResponseAmino;
    fromAminoMsg(object: MsgSetOrchestratorAddressResponseAminoMsg): MsgSetOrchestratorAddressResponse;
    fromProtoMsg(message: MsgSetOrchestratorAddressResponseProtoMsg): MsgSetOrchestratorAddressResponse;
    toProto(message: MsgSetOrchestratorAddressResponse): Uint8Array;
    toProtoMsg(message: MsgSetOrchestratorAddressResponse): MsgSetOrchestratorAddressResponseProtoMsg;
};
export declare const MsgValsetConfirm: {
    encode(message: MsgValsetConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirm;
    fromPartial(object: DeepPartial<MsgValsetConfirm>): MsgValsetConfirm;
    fromAmino(object: MsgValsetConfirmAmino): MsgValsetConfirm;
    toAmino(message: MsgValsetConfirm): MsgValsetConfirmAmino;
    fromAminoMsg(object: MsgValsetConfirmAminoMsg): MsgValsetConfirm;
    fromProtoMsg(message: MsgValsetConfirmProtoMsg): MsgValsetConfirm;
    toProto(message: MsgValsetConfirm): Uint8Array;
    toProtoMsg(message: MsgValsetConfirm): MsgValsetConfirmProtoMsg;
};
export declare const MsgValsetConfirmResponse: {
    encode(_: MsgValsetConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirmResponse;
    fromPartial(_: DeepPartial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse;
    fromAmino(_: MsgValsetConfirmResponseAmino): MsgValsetConfirmResponse;
    toAmino(_: MsgValsetConfirmResponse): MsgValsetConfirmResponseAmino;
    fromAminoMsg(object: MsgValsetConfirmResponseAminoMsg): MsgValsetConfirmResponse;
    fromProtoMsg(message: MsgValsetConfirmResponseProtoMsg): MsgValsetConfirmResponse;
    toProto(message: MsgValsetConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgValsetConfirmResponse): MsgValsetConfirmResponseProtoMsg;
};
export declare const MsgSendToEth: {
    encode(message: MsgSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEth;
    fromPartial(object: DeepPartial<MsgSendToEth>): MsgSendToEth;
    fromAmino(object: MsgSendToEthAmino): MsgSendToEth;
    toAmino(message: MsgSendToEth): MsgSendToEthAmino;
    fromAminoMsg(object: MsgSendToEthAminoMsg): MsgSendToEth;
    fromProtoMsg(message: MsgSendToEthProtoMsg): MsgSendToEth;
    toProto(message: MsgSendToEth): Uint8Array;
    toProtoMsg(message: MsgSendToEth): MsgSendToEthProtoMsg;
};
export declare const MsgSendToEthResponse: {
    encode(_: MsgSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEthResponse;
    fromPartial(_: DeepPartial<MsgSendToEthResponse>): MsgSendToEthResponse;
    fromAmino(_: MsgSendToEthResponseAmino): MsgSendToEthResponse;
    toAmino(_: MsgSendToEthResponse): MsgSendToEthResponseAmino;
    fromAminoMsg(object: MsgSendToEthResponseAminoMsg): MsgSendToEthResponse;
    fromProtoMsg(message: MsgSendToEthResponseProtoMsg): MsgSendToEthResponse;
    toProto(message: MsgSendToEthResponse): Uint8Array;
    toProtoMsg(message: MsgSendToEthResponse): MsgSendToEthResponseProtoMsg;
};
export declare const MsgRequestBatch: {
    encode(message: MsgRequestBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatch;
    fromPartial(object: DeepPartial<MsgRequestBatch>): MsgRequestBatch;
    fromAmino(object: MsgRequestBatchAmino): MsgRequestBatch;
    toAmino(message: MsgRequestBatch): MsgRequestBatchAmino;
    fromAminoMsg(object: MsgRequestBatchAminoMsg): MsgRequestBatch;
    fromProtoMsg(message: MsgRequestBatchProtoMsg): MsgRequestBatch;
    toProto(message: MsgRequestBatch): Uint8Array;
    toProtoMsg(message: MsgRequestBatch): MsgRequestBatchProtoMsg;
};
export declare const MsgRequestBatchResponse: {
    encode(_: MsgRequestBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatchResponse;
    fromPartial(_: DeepPartial<MsgRequestBatchResponse>): MsgRequestBatchResponse;
    fromAmino(_: MsgRequestBatchResponseAmino): MsgRequestBatchResponse;
    toAmino(_: MsgRequestBatchResponse): MsgRequestBatchResponseAmino;
    fromAminoMsg(object: MsgRequestBatchResponseAminoMsg): MsgRequestBatchResponse;
    fromProtoMsg(message: MsgRequestBatchResponseProtoMsg): MsgRequestBatchResponse;
    toProto(message: MsgRequestBatchResponse): Uint8Array;
    toProtoMsg(message: MsgRequestBatchResponse): MsgRequestBatchResponseProtoMsg;
};
export declare const MsgConfirmBatch: {
    encode(message: MsgConfirmBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatch;
    fromPartial(object: DeepPartial<MsgConfirmBatch>): MsgConfirmBatch;
    fromAmino(object: MsgConfirmBatchAmino): MsgConfirmBatch;
    toAmino(message: MsgConfirmBatch): MsgConfirmBatchAmino;
    fromAminoMsg(object: MsgConfirmBatchAminoMsg): MsgConfirmBatch;
    fromProtoMsg(message: MsgConfirmBatchProtoMsg): MsgConfirmBatch;
    toProto(message: MsgConfirmBatch): Uint8Array;
    toProtoMsg(message: MsgConfirmBatch): MsgConfirmBatchProtoMsg;
};
export declare const MsgConfirmBatchResponse: {
    encode(_: MsgConfirmBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatchResponse;
    fromPartial(_: DeepPartial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse;
    fromAmino(_: MsgConfirmBatchResponseAmino): MsgConfirmBatchResponse;
    toAmino(_: MsgConfirmBatchResponse): MsgConfirmBatchResponseAmino;
    fromAminoMsg(object: MsgConfirmBatchResponseAminoMsg): MsgConfirmBatchResponse;
    fromProtoMsg(message: MsgConfirmBatchResponseProtoMsg): MsgConfirmBatchResponse;
    toProto(message: MsgConfirmBatchResponse): Uint8Array;
    toProtoMsg(message: MsgConfirmBatchResponse): MsgConfirmBatchResponseProtoMsg;
};
export declare const MsgConfirmLogicCall: {
    encode(message: MsgConfirmLogicCall, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmLogicCall;
    fromPartial(object: DeepPartial<MsgConfirmLogicCall>): MsgConfirmLogicCall;
    fromAmino(object: MsgConfirmLogicCallAmino): MsgConfirmLogicCall;
    toAmino(message: MsgConfirmLogicCall): MsgConfirmLogicCallAmino;
    fromAminoMsg(object: MsgConfirmLogicCallAminoMsg): MsgConfirmLogicCall;
    fromProtoMsg(message: MsgConfirmLogicCallProtoMsg): MsgConfirmLogicCall;
    toProto(message: MsgConfirmLogicCall): Uint8Array;
    toProtoMsg(message: MsgConfirmLogicCall): MsgConfirmLogicCallProtoMsg;
};
export declare const MsgConfirmLogicCallResponse: {
    encode(_: MsgConfirmLogicCallResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmLogicCallResponse;
    fromPartial(_: DeepPartial<MsgConfirmLogicCallResponse>): MsgConfirmLogicCallResponse;
    fromAmino(_: MsgConfirmLogicCallResponseAmino): MsgConfirmLogicCallResponse;
    toAmino(_: MsgConfirmLogicCallResponse): MsgConfirmLogicCallResponseAmino;
    fromAminoMsg(object: MsgConfirmLogicCallResponseAminoMsg): MsgConfirmLogicCallResponse;
    fromProtoMsg(message: MsgConfirmLogicCallResponseProtoMsg): MsgConfirmLogicCallResponse;
    toProto(message: MsgConfirmLogicCallResponse): Uint8Array;
    toProtoMsg(message: MsgConfirmLogicCallResponse): MsgConfirmLogicCallResponseProtoMsg;
};
export declare const MsgSendToCosmosClaim: {
    encode(message: MsgSendToCosmosClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToCosmosClaim;
    fromPartial(object: DeepPartial<MsgSendToCosmosClaim>): MsgSendToCosmosClaim;
    fromAmino(object: MsgSendToCosmosClaimAmino): MsgSendToCosmosClaim;
    toAmino(message: MsgSendToCosmosClaim): MsgSendToCosmosClaimAmino;
    fromAminoMsg(object: MsgSendToCosmosClaimAminoMsg): MsgSendToCosmosClaim;
    fromProtoMsg(message: MsgSendToCosmosClaimProtoMsg): MsgSendToCosmosClaim;
    toProto(message: MsgSendToCosmosClaim): Uint8Array;
    toProtoMsg(message: MsgSendToCosmosClaim): MsgSendToCosmosClaimProtoMsg;
};
export declare const MsgSendToCosmosClaimResponse: {
    encode(_: MsgSendToCosmosClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToCosmosClaimResponse;
    fromPartial(_: DeepPartial<MsgSendToCosmosClaimResponse>): MsgSendToCosmosClaimResponse;
    fromAmino(_: MsgSendToCosmosClaimResponseAmino): MsgSendToCosmosClaimResponse;
    toAmino(_: MsgSendToCosmosClaimResponse): MsgSendToCosmosClaimResponseAmino;
    fromAminoMsg(object: MsgSendToCosmosClaimResponseAminoMsg): MsgSendToCosmosClaimResponse;
    fromProtoMsg(message: MsgSendToCosmosClaimResponseProtoMsg): MsgSendToCosmosClaimResponse;
    toProto(message: MsgSendToCosmosClaimResponse): Uint8Array;
    toProtoMsg(message: MsgSendToCosmosClaimResponse): MsgSendToCosmosClaimResponseProtoMsg;
};
export declare const MsgBatchSendToEthClaim: {
    encode(message: MsgBatchSendToEthClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSendToEthClaim;
    fromPartial(object: DeepPartial<MsgBatchSendToEthClaim>): MsgBatchSendToEthClaim;
    fromAmino(object: MsgBatchSendToEthClaimAmino): MsgBatchSendToEthClaim;
    toAmino(message: MsgBatchSendToEthClaim): MsgBatchSendToEthClaimAmino;
    fromAminoMsg(object: MsgBatchSendToEthClaimAminoMsg): MsgBatchSendToEthClaim;
    fromProtoMsg(message: MsgBatchSendToEthClaimProtoMsg): MsgBatchSendToEthClaim;
    toProto(message: MsgBatchSendToEthClaim): Uint8Array;
    toProtoMsg(message: MsgBatchSendToEthClaim): MsgBatchSendToEthClaimProtoMsg;
};
export declare const MsgBatchSendToEthClaimResponse: {
    encode(_: MsgBatchSendToEthClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSendToEthClaimResponse;
    fromPartial(_: DeepPartial<MsgBatchSendToEthClaimResponse>): MsgBatchSendToEthClaimResponse;
    fromAmino(_: MsgBatchSendToEthClaimResponseAmino): MsgBatchSendToEthClaimResponse;
    toAmino(_: MsgBatchSendToEthClaimResponse): MsgBatchSendToEthClaimResponseAmino;
    fromAminoMsg(object: MsgBatchSendToEthClaimResponseAminoMsg): MsgBatchSendToEthClaimResponse;
    fromProtoMsg(message: MsgBatchSendToEthClaimResponseProtoMsg): MsgBatchSendToEthClaimResponse;
    toProto(message: MsgBatchSendToEthClaimResponse): Uint8Array;
    toProtoMsg(message: MsgBatchSendToEthClaimResponse): MsgBatchSendToEthClaimResponseProtoMsg;
};
export declare const MsgERC20DeployedClaim: {
    encode(message: MsgERC20DeployedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaim;
    fromPartial(object: DeepPartial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim;
    fromAmino(object: MsgERC20DeployedClaimAmino): MsgERC20DeployedClaim;
    toAmino(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimAmino;
    fromAminoMsg(object: MsgERC20DeployedClaimAminoMsg): MsgERC20DeployedClaim;
    fromProtoMsg(message: MsgERC20DeployedClaimProtoMsg): MsgERC20DeployedClaim;
    toProto(message: MsgERC20DeployedClaim): Uint8Array;
    toProtoMsg(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimProtoMsg;
};
export declare const MsgERC20DeployedClaimResponse: {
    encode(_: MsgERC20DeployedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaimResponse;
    fromPartial(_: DeepPartial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse;
    fromAmino(_: MsgERC20DeployedClaimResponseAmino): MsgERC20DeployedClaimResponse;
    toAmino(_: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseAmino;
    fromAminoMsg(object: MsgERC20DeployedClaimResponseAminoMsg): MsgERC20DeployedClaimResponse;
    fromProtoMsg(message: MsgERC20DeployedClaimResponseProtoMsg): MsgERC20DeployedClaimResponse;
    toProto(message: MsgERC20DeployedClaimResponse): Uint8Array;
    toProtoMsg(message: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseProtoMsg;
};
export declare const MsgLogicCallExecutedClaim: {
    encode(message: MsgLogicCallExecutedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaim;
    fromPartial(object: DeepPartial<MsgLogicCallExecutedClaim>): MsgLogicCallExecutedClaim;
    fromAmino(object: MsgLogicCallExecutedClaimAmino): MsgLogicCallExecutedClaim;
    toAmino(message: MsgLogicCallExecutedClaim): MsgLogicCallExecutedClaimAmino;
    fromAminoMsg(object: MsgLogicCallExecutedClaimAminoMsg): MsgLogicCallExecutedClaim;
    fromProtoMsg(message: MsgLogicCallExecutedClaimProtoMsg): MsgLogicCallExecutedClaim;
    toProto(message: MsgLogicCallExecutedClaim): Uint8Array;
    toProtoMsg(message: MsgLogicCallExecutedClaim): MsgLogicCallExecutedClaimProtoMsg;
};
export declare const MsgLogicCallExecutedClaimResponse: {
    encode(_: MsgLogicCallExecutedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaimResponse;
    fromPartial(_: DeepPartial<MsgLogicCallExecutedClaimResponse>): MsgLogicCallExecutedClaimResponse;
    fromAmino(_: MsgLogicCallExecutedClaimResponseAmino): MsgLogicCallExecutedClaimResponse;
    toAmino(_: MsgLogicCallExecutedClaimResponse): MsgLogicCallExecutedClaimResponseAmino;
    fromAminoMsg(object: MsgLogicCallExecutedClaimResponseAminoMsg): MsgLogicCallExecutedClaimResponse;
    fromProtoMsg(message: MsgLogicCallExecutedClaimResponseProtoMsg): MsgLogicCallExecutedClaimResponse;
    toProto(message: MsgLogicCallExecutedClaimResponse): Uint8Array;
    toProtoMsg(message: MsgLogicCallExecutedClaimResponse): MsgLogicCallExecutedClaimResponseProtoMsg;
};
export declare const MsgValsetUpdatedClaim: {
    encode(message: MsgValsetUpdatedClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaim;
    fromPartial(object: DeepPartial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim;
    fromAmino(object: MsgValsetUpdatedClaimAmino): MsgValsetUpdatedClaim;
    toAmino(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimAmino;
    fromAminoMsg(object: MsgValsetUpdatedClaimAminoMsg): MsgValsetUpdatedClaim;
    fromProtoMsg(message: MsgValsetUpdatedClaimProtoMsg): MsgValsetUpdatedClaim;
    toProto(message: MsgValsetUpdatedClaim): Uint8Array;
    toProtoMsg(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimProtoMsg;
};
export declare const MsgValsetUpdatedClaimResponse: {
    encode(_: MsgValsetUpdatedClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse;
    fromPartial(_: DeepPartial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse;
    fromAmino(_: MsgValsetUpdatedClaimResponseAmino): MsgValsetUpdatedClaimResponse;
    toAmino(_: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseAmino;
    fromAminoMsg(object: MsgValsetUpdatedClaimResponseAminoMsg): MsgValsetUpdatedClaimResponse;
    fromProtoMsg(message: MsgValsetUpdatedClaimResponseProtoMsg): MsgValsetUpdatedClaimResponse;
    toProto(message: MsgValsetUpdatedClaimResponse): Uint8Array;
    toProtoMsg(message: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseProtoMsg;
};
export declare const MsgCancelSendToEth: {
    encode(message: MsgCancelSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEth;
    fromPartial(object: DeepPartial<MsgCancelSendToEth>): MsgCancelSendToEth;
    fromAmino(object: MsgCancelSendToEthAmino): MsgCancelSendToEth;
    toAmino(message: MsgCancelSendToEth): MsgCancelSendToEthAmino;
    fromAminoMsg(object: MsgCancelSendToEthAminoMsg): MsgCancelSendToEth;
    fromProtoMsg(message: MsgCancelSendToEthProtoMsg): MsgCancelSendToEth;
    toProto(message: MsgCancelSendToEth): Uint8Array;
    toProtoMsg(message: MsgCancelSendToEth): MsgCancelSendToEthProtoMsg;
};
export declare const MsgCancelSendToEthResponse: {
    encode(_: MsgCancelSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEthResponse;
    fromPartial(_: DeepPartial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse;
    fromAmino(_: MsgCancelSendToEthResponseAmino): MsgCancelSendToEthResponse;
    toAmino(_: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseAmino;
    fromAminoMsg(object: MsgCancelSendToEthResponseAminoMsg): MsgCancelSendToEthResponse;
    fromProtoMsg(message: MsgCancelSendToEthResponseProtoMsg): MsgCancelSendToEthResponse;
    toProto(message: MsgCancelSendToEthResponse): Uint8Array;
    toProtoMsg(message: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseProtoMsg;
};
export declare const MsgSubmitBadSignatureEvidence: {
    encode(message: MsgSubmitBadSignatureEvidence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidence;
    fromPartial(object: DeepPartial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence;
    fromAmino(object: MsgSubmitBadSignatureEvidenceAmino): MsgSubmitBadSignatureEvidence;
    toAmino(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceAmino;
    fromAminoMsg(object: MsgSubmitBadSignatureEvidenceAminoMsg): MsgSubmitBadSignatureEvidence;
    fromProtoMsg(message: MsgSubmitBadSignatureEvidenceProtoMsg): MsgSubmitBadSignatureEvidence;
    toProto(message: MsgSubmitBadSignatureEvidence): Uint8Array;
    toProtoMsg(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceProtoMsg;
};
export declare const MsgSubmitBadSignatureEvidenceResponse: {
    encode(_: MsgSubmitBadSignatureEvidenceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidenceResponse;
    fromPartial(_: DeepPartial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse;
    fromAmino(_: MsgSubmitBadSignatureEvidenceResponseAmino): MsgSubmitBadSignatureEvidenceResponse;
    toAmino(_: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseAmino;
    fromAminoMsg(object: MsgSubmitBadSignatureEvidenceResponseAminoMsg): MsgSubmitBadSignatureEvidenceResponse;
    fromProtoMsg(message: MsgSubmitBadSignatureEvidenceResponseProtoMsg): MsgSubmitBadSignatureEvidenceResponse;
    toProto(message: MsgSubmitBadSignatureEvidenceResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseProtoMsg;
};
