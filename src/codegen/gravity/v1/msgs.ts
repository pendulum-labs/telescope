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
export interface MsgSetOrchestratorAddressResponse {}
export interface MsgSetOrchestratorAddressResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse";
  value: Uint8Array;
}
export interface MsgSetOrchestratorAddressResponseAmino {}
export interface MsgSetOrchestratorAddressResponseAminoMsg {
  type: "/gravity.v1.MsgSetOrchestratorAddressResponse";
  value: MsgSetOrchestratorAddressResponseAmino;
}
export interface MsgSetOrchestratorAddressResponseSDKType {}
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
export interface MsgValsetConfirmResponse {}
export interface MsgValsetConfirmResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgValsetConfirmResponse";
  value: Uint8Array;
}
export interface MsgValsetConfirmResponseAmino {}
export interface MsgValsetConfirmResponseAminoMsg {
  type: "/gravity.v1.MsgValsetConfirmResponse";
  value: MsgValsetConfirmResponseAmino;
}
export interface MsgValsetConfirmResponseSDKType {}
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
export interface MsgSendToEthResponse {}
export interface MsgSendToEthResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgSendToEthResponse";
  value: Uint8Array;
}
export interface MsgSendToEthResponseAmino {}
export interface MsgSendToEthResponseAminoMsg {
  type: "/gravity.v1.MsgSendToEthResponse";
  value: MsgSendToEthResponseAmino;
}
export interface MsgSendToEthResponseSDKType {}
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
export interface MsgRequestBatchResponse {}
export interface MsgRequestBatchResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgRequestBatchResponse";
  value: Uint8Array;
}
export interface MsgRequestBatchResponseAmino {}
export interface MsgRequestBatchResponseAminoMsg {
  type: "/gravity.v1.MsgRequestBatchResponse";
  value: MsgRequestBatchResponseAmino;
}
export interface MsgRequestBatchResponseSDKType {}
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
export interface MsgConfirmBatchResponse {}
export interface MsgConfirmBatchResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgConfirmBatchResponse";
  value: Uint8Array;
}
export interface MsgConfirmBatchResponseAmino {}
export interface MsgConfirmBatchResponseAminoMsg {
  type: "/gravity.v1.MsgConfirmBatchResponse";
  value: MsgConfirmBatchResponseAmino;
}
export interface MsgConfirmBatchResponseSDKType {}
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
export interface MsgConfirmLogicCallResponse {}
export interface MsgConfirmLogicCallResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse";
  value: Uint8Array;
}
export interface MsgConfirmLogicCallResponseAmino {}
export interface MsgConfirmLogicCallResponseAminoMsg {
  type: "/gravity.v1.MsgConfirmLogicCallResponse";
  value: MsgConfirmLogicCallResponseAmino;
}
export interface MsgConfirmLogicCallResponseSDKType {}
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
export interface MsgSendToCosmosClaimResponse {}
export interface MsgSendToCosmosClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse";
  value: Uint8Array;
}
export interface MsgSendToCosmosClaimResponseAmino {}
export interface MsgSendToCosmosClaimResponseAminoMsg {
  type: "/gravity.v1.MsgSendToCosmosClaimResponse";
  value: MsgSendToCosmosClaimResponseAmino;
}
export interface MsgSendToCosmosClaimResponseSDKType {}
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
export interface MsgBatchSendToEthClaimResponse {}
export interface MsgBatchSendToEthClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse";
  value: Uint8Array;
}
export interface MsgBatchSendToEthClaimResponseAmino {}
export interface MsgBatchSendToEthClaimResponseAminoMsg {
  type: "/gravity.v1.MsgBatchSendToEthClaimResponse";
  value: MsgBatchSendToEthClaimResponseAmino;
}
export interface MsgBatchSendToEthClaimResponseSDKType {}
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
export interface MsgERC20DeployedClaimResponse {}
export interface MsgERC20DeployedClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse";
  value: Uint8Array;
}
export interface MsgERC20DeployedClaimResponseAmino {}
export interface MsgERC20DeployedClaimResponseAminoMsg {
  type: "/gravity.v1.MsgERC20DeployedClaimResponse";
  value: MsgERC20DeployedClaimResponseAmino;
}
export interface MsgERC20DeployedClaimResponseSDKType {}
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
export interface MsgLogicCallExecutedClaimResponse {}
export interface MsgLogicCallExecutedClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse";
  value: Uint8Array;
}
export interface MsgLogicCallExecutedClaimResponseAmino {}
export interface MsgLogicCallExecutedClaimResponseAminoMsg {
  type: "/gravity.v1.MsgLogicCallExecutedClaimResponse";
  value: MsgLogicCallExecutedClaimResponseAmino;
}
export interface MsgLogicCallExecutedClaimResponseSDKType {}
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
export interface MsgValsetUpdatedClaimResponse {}
export interface MsgValsetUpdatedClaimResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse";
  value: Uint8Array;
}
export interface MsgValsetUpdatedClaimResponseAmino {}
export interface MsgValsetUpdatedClaimResponseAminoMsg {
  type: "/gravity.v1.MsgValsetUpdatedClaimResponse";
  value: MsgValsetUpdatedClaimResponseAmino;
}
export interface MsgValsetUpdatedClaimResponseSDKType {}
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
export interface MsgCancelSendToEthResponse {}
export interface MsgCancelSendToEthResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgCancelSendToEthResponse";
  value: Uint8Array;
}
export interface MsgCancelSendToEthResponseAmino {}
export interface MsgCancelSendToEthResponseAminoMsg {
  type: "/gravity.v1.MsgCancelSendToEthResponse";
  value: MsgCancelSendToEthResponseAmino;
}
export interface MsgCancelSendToEthResponseSDKType {}
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
export interface MsgSubmitBadSignatureEvidenceResponse {}
export interface MsgSubmitBadSignatureEvidenceResponseProtoMsg {
  typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse";
  value: Uint8Array;
}
export interface MsgSubmitBadSignatureEvidenceResponseAmino {}
export interface MsgSubmitBadSignatureEvidenceResponseAminoMsg {
  type: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse";
  value: MsgSubmitBadSignatureEvidenceResponseAmino;
}
export interface MsgSubmitBadSignatureEvidenceResponseSDKType {}
function createBaseMsgSetOrchestratorAddress(): MsgSetOrchestratorAddress {
  return {
    validator: "",
    orchestrator: "",
    ethAddress: ""
  };
}
export const MsgSetOrchestratorAddress = {
  encode(message: MsgSetOrchestratorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddress {
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
  fromPartial(object: DeepPartial<MsgSetOrchestratorAddress>): MsgSetOrchestratorAddress {
    const message = createBaseMsgSetOrchestratorAddress();
    message.validator = object.validator ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSetOrchestratorAddressAmino): MsgSetOrchestratorAddress {
    return {
      validator: object.validator,
      orchestrator: object.orchestrator,
      ethAddress: object.eth_address
    };
  },
  toAmino(message: MsgSetOrchestratorAddress): MsgSetOrchestratorAddressAmino {
    const obj: any = {};
    obj.validator = message.validator;
    obj.orchestrator = message.orchestrator;
    obj.eth_address = message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetOrchestratorAddressAminoMsg): MsgSetOrchestratorAddress {
    return MsgSetOrchestratorAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrchestratorAddressProtoMsg): MsgSetOrchestratorAddress {
    return MsgSetOrchestratorAddress.decode(message.value);
  },
  toProto(message: MsgSetOrchestratorAddress): Uint8Array {
    return MsgSetOrchestratorAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrchestratorAddress): MsgSetOrchestratorAddressProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
      value: MsgSetOrchestratorAddress.encode(message).finish()
    };
  }
};
function createBaseMsgSetOrchestratorAddressResponse(): MsgSetOrchestratorAddressResponse {
  return {};
}
export const MsgSetOrchestratorAddressResponse = {
  encode(_: MsgSetOrchestratorAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOrchestratorAddressResponse {
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
  fromPartial(_: DeepPartial<MsgSetOrchestratorAddressResponse>): MsgSetOrchestratorAddressResponse {
    const message = createBaseMsgSetOrchestratorAddressResponse();
    return message;
  },
  fromAmino(_: MsgSetOrchestratorAddressResponseAmino): MsgSetOrchestratorAddressResponse {
    return {};
  },
  toAmino(_: MsgSetOrchestratorAddressResponse): MsgSetOrchestratorAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetOrchestratorAddressResponseAminoMsg): MsgSetOrchestratorAddressResponse {
    return MsgSetOrchestratorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetOrchestratorAddressResponseProtoMsg): MsgSetOrchestratorAddressResponse {
    return MsgSetOrchestratorAddressResponse.decode(message.value);
  },
  toProto(message: MsgSetOrchestratorAddressResponse): Uint8Array {
    return MsgSetOrchestratorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetOrchestratorAddressResponse): MsgSetOrchestratorAddressResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse",
      value: MsgSetOrchestratorAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValsetConfirm(): MsgValsetConfirm {
  return {
    nonce: Long.UZERO,
    orchestrator: "",
    ethAddress: "",
    signature: ""
  };
}
export const MsgValsetConfirm = {
  encode(message: MsgValsetConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<MsgValsetConfirm>): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgValsetConfirmAmino): MsgValsetConfirm {
    return {
      nonce: Long.fromString(object.nonce),
      orchestrator: object.orchestrator,
      ethAddress: object.eth_address,
      signature: object.signature
    };
  },
  toAmino(message: MsgValsetConfirm): MsgValsetConfirmAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.orchestrator = message.orchestrator;
    obj.eth_address = message.ethAddress;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgValsetConfirmAminoMsg): MsgValsetConfirm {
    return MsgValsetConfirm.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetConfirmProtoMsg): MsgValsetConfirm {
    return MsgValsetConfirm.decode(message.value);
  },
  toProto(message: MsgValsetConfirm): Uint8Array {
    return MsgValsetConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetConfirm): MsgValsetConfirmProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgValsetConfirm",
      value: MsgValsetConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgValsetConfirmResponse(): MsgValsetConfirmResponse {
  return {};
}
export const MsgValsetConfirmResponse = {
  encode(_: MsgValsetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirmResponse {
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
  fromPartial(_: DeepPartial<MsgValsetConfirmResponse>): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  },
  fromAmino(_: MsgValsetConfirmResponseAmino): MsgValsetConfirmResponse {
    return {};
  },
  toAmino(_: MsgValsetConfirmResponse): MsgValsetConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValsetConfirmResponseAminoMsg): MsgValsetConfirmResponse {
    return MsgValsetConfirmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetConfirmResponseProtoMsg): MsgValsetConfirmResponse {
    return MsgValsetConfirmResponse.decode(message.value);
  },
  toProto(message: MsgValsetConfirmResponse): Uint8Array {
    return MsgValsetConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetConfirmResponse): MsgValsetConfirmResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgValsetConfirmResponse",
      value: MsgValsetConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSendToEth(): MsgSendToEth {
  return {
    sender: "",
    ethDest: "",
    amount: Coin.fromPartial({}),
    bridgeFee: Coin.fromPartial({})
  };
}
export const MsgSendToEth = {
  encode(message: MsgSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEth {
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
  fromPartial(object: DeepPartial<MsgSendToEth>): MsgSendToEth {
    const message = createBaseMsgSendToEth();
    message.sender = object.sender ?? "";
    message.ethDest = object.ethDest ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bridgeFee = object.bridgeFee !== undefined && object.bridgeFee !== null ? Coin.fromPartial(object.bridgeFee) : undefined;
    return message;
  },
  fromAmino(object: MsgSendToEthAmino): MsgSendToEth {
    return {
      sender: object.sender,
      ethDest: object.eth_dest,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      bridgeFee: object?.bridge_fee ? Coin.fromAmino(object.bridge_fee) : undefined
    };
  },
  toAmino(message: MsgSendToEth): MsgSendToEthAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.eth_dest = message.ethDest;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.bridge_fee = message.bridgeFee ? Coin.toAmino(message.bridgeFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendToEthAminoMsg): MsgSendToEth {
    return MsgSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToEthProtoMsg): MsgSendToEth {
    return MsgSendToEth.decode(message.value);
  },
  toProto(message: MsgSendToEth): Uint8Array {
    return MsgSendToEth.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToEth): MsgSendToEthProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSendToEth",
      value: MsgSendToEth.encode(message).finish()
    };
  }
};
function createBaseMsgSendToEthResponse(): MsgSendToEthResponse {
  return {};
}
export const MsgSendToEthResponse = {
  encode(_: MsgSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEthResponse {
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
  fromPartial(_: DeepPartial<MsgSendToEthResponse>): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  },
  fromAmino(_: MsgSendToEthResponseAmino): MsgSendToEthResponse {
    return {};
  },
  toAmino(_: MsgSendToEthResponse): MsgSendToEthResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendToEthResponseAminoMsg): MsgSendToEthResponse {
    return MsgSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToEthResponseProtoMsg): MsgSendToEthResponse {
    return MsgSendToEthResponse.decode(message.value);
  },
  toProto(message: MsgSendToEthResponse): Uint8Array {
    return MsgSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToEthResponse): MsgSendToEthResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSendToEthResponse",
      value: MsgSendToEthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestBatch(): MsgRequestBatch {
  return {
    sender: "",
    denom: ""
  };
}
export const MsgRequestBatch = {
  encode(message: MsgRequestBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatch {
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
  fromPartial(object: DeepPartial<MsgRequestBatch>): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgRequestBatchAmino): MsgRequestBatch {
    return {
      sender: object.sender,
      denom: object.denom
    };
  },
  toAmino(message: MsgRequestBatch): MsgRequestBatchAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgRequestBatchAminoMsg): MsgRequestBatch {
    return MsgRequestBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBatchProtoMsg): MsgRequestBatch {
    return MsgRequestBatch.decode(message.value);
  },
  toProto(message: MsgRequestBatch): Uint8Array {
    return MsgRequestBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBatch): MsgRequestBatchProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgRequestBatch",
      value: MsgRequestBatch.encode(message).finish()
    };
  }
};
function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return {};
}
export const MsgRequestBatchResponse = {
  encode(_: MsgRequestBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatchResponse {
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
  fromPartial(_: DeepPartial<MsgRequestBatchResponse>): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  },
  fromAmino(_: MsgRequestBatchResponseAmino): MsgRequestBatchResponse {
    return {};
  },
  toAmino(_: MsgRequestBatchResponse): MsgRequestBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestBatchResponseAminoMsg): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBatchResponseProtoMsg): MsgRequestBatchResponse {
    return MsgRequestBatchResponse.decode(message.value);
  },
  toProto(message: MsgRequestBatchResponse): Uint8Array {
    return MsgRequestBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBatchResponse): MsgRequestBatchResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgRequestBatchResponse",
      value: MsgRequestBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return {
    nonce: Long.UZERO,
    tokenContract: "",
    ethSigner: "",
    orchestrator: "",
    signature: ""
  };
}
export const MsgConfirmBatch = {
  encode(message: MsgConfirmBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<MsgConfirmBatch>): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmBatchAmino): MsgConfirmBatch {
    return {
      nonce: Long.fromString(object.nonce),
      tokenContract: object.token_contract,
      ethSigner: object.eth_signer,
      orchestrator: object.orchestrator,
      signature: object.signature
    };
  },
  toAmino(message: MsgConfirmBatch): MsgConfirmBatchAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.eth_signer = message.ethSigner;
    obj.orchestrator = message.orchestrator;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBatchAminoMsg): MsgConfirmBatch {
    return MsgConfirmBatch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBatchProtoMsg): MsgConfirmBatch {
    return MsgConfirmBatch.decode(message.value);
  },
  toProto(message: MsgConfirmBatch): Uint8Array {
    return MsgConfirmBatch.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBatch): MsgConfirmBatchProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgConfirmBatch",
      value: MsgConfirmBatch.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmBatchResponse(): MsgConfirmBatchResponse {
  return {};
}
export const MsgConfirmBatchResponse = {
  encode(_: MsgConfirmBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatchResponse {
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
  fromPartial(_: DeepPartial<MsgConfirmBatchResponse>): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  },
  fromAmino(_: MsgConfirmBatchResponseAmino): MsgConfirmBatchResponse {
    return {};
  },
  toAmino(_: MsgConfirmBatchResponse): MsgConfirmBatchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmBatchResponseAminoMsg): MsgConfirmBatchResponse {
    return MsgConfirmBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmBatchResponseProtoMsg): MsgConfirmBatchResponse {
    return MsgConfirmBatchResponse.decode(message.value);
  },
  toProto(message: MsgConfirmBatchResponse): Uint8Array {
    return MsgConfirmBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmBatchResponse): MsgConfirmBatchResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgConfirmBatchResponse",
      value: MsgConfirmBatchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmLogicCall(): MsgConfirmLogicCall {
  return {
    invalidationId: "",
    invalidationNonce: Long.UZERO,
    ethSigner: "",
    orchestrator: "",
    signature: ""
  };
}
export const MsgConfirmLogicCall = {
  encode(message: MsgConfirmLogicCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmLogicCall {
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
          message.invalidationNonce = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<MsgConfirmLogicCall>): MsgConfirmLogicCall {
    const message = createBaseMsgConfirmLogicCall();
    message.invalidationId = object.invalidationId ?? "";
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
  fromAmino(object: MsgConfirmLogicCallAmino): MsgConfirmLogicCall {
    return {
      invalidationId: object.invalidation_id,
      invalidationNonce: Long.fromString(object.invalidation_nonce),
      ethSigner: object.eth_signer,
      orchestrator: object.orchestrator,
      signature: object.signature
    };
  },
  toAmino(message: MsgConfirmLogicCall): MsgConfirmLogicCallAmino {
    const obj: any = {};
    obj.invalidation_id = message.invalidationId;
    obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
    obj.eth_signer = message.ethSigner;
    obj.orchestrator = message.orchestrator;
    obj.signature = message.signature;
    return obj;
  },
  fromAminoMsg(object: MsgConfirmLogicCallAminoMsg): MsgConfirmLogicCall {
    return MsgConfirmLogicCall.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmLogicCallProtoMsg): MsgConfirmLogicCall {
    return MsgConfirmLogicCall.decode(message.value);
  },
  toProto(message: MsgConfirmLogicCall): Uint8Array {
    return MsgConfirmLogicCall.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmLogicCall): MsgConfirmLogicCallProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgConfirmLogicCall",
      value: MsgConfirmLogicCall.encode(message).finish()
    };
  }
};
function createBaseMsgConfirmLogicCallResponse(): MsgConfirmLogicCallResponse {
  return {};
}
export const MsgConfirmLogicCallResponse = {
  encode(_: MsgConfirmLogicCallResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmLogicCallResponse {
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
  fromPartial(_: DeepPartial<MsgConfirmLogicCallResponse>): MsgConfirmLogicCallResponse {
    const message = createBaseMsgConfirmLogicCallResponse();
    return message;
  },
  fromAmino(_: MsgConfirmLogicCallResponseAmino): MsgConfirmLogicCallResponse {
    return {};
  },
  toAmino(_: MsgConfirmLogicCallResponse): MsgConfirmLogicCallResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConfirmLogicCallResponseAminoMsg): MsgConfirmLogicCallResponse {
    return MsgConfirmLogicCallResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgConfirmLogicCallResponseProtoMsg): MsgConfirmLogicCallResponse {
    return MsgConfirmLogicCallResponse.decode(message.value);
  },
  toProto(message: MsgConfirmLogicCallResponse): Uint8Array {
    return MsgConfirmLogicCallResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConfirmLogicCallResponse): MsgConfirmLogicCallResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse",
      value: MsgConfirmLogicCallResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSendToCosmosClaim(): MsgSendToCosmosClaim {
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
  encode(message: MsgSendToCosmosClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToCosmosClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToCosmosClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<MsgSendToCosmosClaim>): MsgSendToCosmosClaim {
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
  fromAmino(object: MsgSendToCosmosClaimAmino): MsgSendToCosmosClaim {
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
  toAmino(message: MsgSendToCosmosClaim): MsgSendToCosmosClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.amount = message.amount;
    obj.ethereum_sender = message.ethereumSender;
    obj.cosmos_receiver = message.cosmosReceiver;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgSendToCosmosClaimAminoMsg): MsgSendToCosmosClaim {
    return MsgSendToCosmosClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToCosmosClaimProtoMsg): MsgSendToCosmosClaim {
    return MsgSendToCosmosClaim.decode(message.value);
  },
  toProto(message: MsgSendToCosmosClaim): Uint8Array {
    return MsgSendToCosmosClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToCosmosClaim): MsgSendToCosmosClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
      value: MsgSendToCosmosClaim.encode(message).finish()
    };
  }
};
function createBaseMsgSendToCosmosClaimResponse(): MsgSendToCosmosClaimResponse {
  return {};
}
export const MsgSendToCosmosClaimResponse = {
  encode(_: MsgSendToCosmosClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToCosmosClaimResponse {
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
  fromPartial(_: DeepPartial<MsgSendToCosmosClaimResponse>): MsgSendToCosmosClaimResponse {
    const message = createBaseMsgSendToCosmosClaimResponse();
    return message;
  },
  fromAmino(_: MsgSendToCosmosClaimResponseAmino): MsgSendToCosmosClaimResponse {
    return {};
  },
  toAmino(_: MsgSendToCosmosClaimResponse): MsgSendToCosmosClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendToCosmosClaimResponseAminoMsg): MsgSendToCosmosClaimResponse {
    return MsgSendToCosmosClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendToCosmosClaimResponseProtoMsg): MsgSendToCosmosClaimResponse {
    return MsgSendToCosmosClaimResponse.decode(message.value);
  },
  toProto(message: MsgSendToCosmosClaimResponse): Uint8Array {
    return MsgSendToCosmosClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendToCosmosClaimResponse): MsgSendToCosmosClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse",
      value: MsgSendToCosmosClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBatchSendToEthClaim(): MsgBatchSendToEthClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    batchNonce: Long.UZERO,
    tokenContract: "",
    orchestrator: ""
  };
}
export const MsgBatchSendToEthClaim = {
  encode(message: MsgBatchSendToEthClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSendToEthClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSendToEthClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = (reader.uint64() as Long);
          break;
        case 3:
          message.batchNonce = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<MsgBatchSendToEthClaim>): MsgBatchSendToEthClaim {
    const message = createBaseMsgBatchSendToEthClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
    message.tokenContract = object.tokenContract ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgBatchSendToEthClaimAmino): MsgBatchSendToEthClaim {
    return {
      eventNonce: Long.fromString(object.event_nonce),
      blockHeight: Long.fromString(object.block_height),
      batchNonce: Long.fromString(object.batch_nonce),
      tokenContract: object.token_contract,
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgBatchSendToEthClaim): MsgBatchSendToEthClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.batch_nonce = message.batchNonce ? message.batchNonce.toString() : undefined;
    obj.token_contract = message.tokenContract;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgBatchSendToEthClaimAminoMsg): MsgBatchSendToEthClaim {
    return MsgBatchSendToEthClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchSendToEthClaimProtoMsg): MsgBatchSendToEthClaim {
    return MsgBatchSendToEthClaim.decode(message.value);
  },
  toProto(message: MsgBatchSendToEthClaim): Uint8Array {
    return MsgBatchSendToEthClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchSendToEthClaim): MsgBatchSendToEthClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
      value: MsgBatchSendToEthClaim.encode(message).finish()
    };
  }
};
function createBaseMsgBatchSendToEthClaimResponse(): MsgBatchSendToEthClaimResponse {
  return {};
}
export const MsgBatchSendToEthClaimResponse = {
  encode(_: MsgBatchSendToEthClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSendToEthClaimResponse {
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
  fromPartial(_: DeepPartial<MsgBatchSendToEthClaimResponse>): MsgBatchSendToEthClaimResponse {
    const message = createBaseMsgBatchSendToEthClaimResponse();
    return message;
  },
  fromAmino(_: MsgBatchSendToEthClaimResponseAmino): MsgBatchSendToEthClaimResponse {
    return {};
  },
  toAmino(_: MsgBatchSendToEthClaimResponse): MsgBatchSendToEthClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBatchSendToEthClaimResponseAminoMsg): MsgBatchSendToEthClaimResponse {
    return MsgBatchSendToEthClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBatchSendToEthClaimResponseProtoMsg): MsgBatchSendToEthClaimResponse {
    return MsgBatchSendToEthClaimResponse.decode(message.value);
  },
  toProto(message: MsgBatchSendToEthClaimResponse): Uint8Array {
    return MsgBatchSendToEthClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBatchSendToEthClaimResponse): MsgBatchSendToEthClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse",
      value: MsgBatchSendToEthClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgERC20DeployedClaim(): MsgERC20DeployedClaim {
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
  encode(message: MsgERC20DeployedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = (reader.uint64() as Long);
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
          message.decimals = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<MsgERC20DeployedClaim>): MsgERC20DeployedClaim {
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
  fromAmino(object: MsgERC20DeployedClaimAmino): MsgERC20DeployedClaim {
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
  toAmino(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimAmino {
    const obj: any = {};
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
  fromAminoMsg(object: MsgERC20DeployedClaimAminoMsg): MsgERC20DeployedClaim {
    return MsgERC20DeployedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgERC20DeployedClaimProtoMsg): MsgERC20DeployedClaim {
    return MsgERC20DeployedClaim.decode(message.value);
  },
  toProto(message: MsgERC20DeployedClaim): Uint8Array {
    return MsgERC20DeployedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgERC20DeployedClaim): MsgERC20DeployedClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
      value: MsgERC20DeployedClaim.encode(message).finish()
    };
  }
};
function createBaseMsgERC20DeployedClaimResponse(): MsgERC20DeployedClaimResponse {
  return {};
}
export const MsgERC20DeployedClaimResponse = {
  encode(_: MsgERC20DeployedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaimResponse {
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
  fromPartial(_: DeepPartial<MsgERC20DeployedClaimResponse>): MsgERC20DeployedClaimResponse {
    const message = createBaseMsgERC20DeployedClaimResponse();
    return message;
  },
  fromAmino(_: MsgERC20DeployedClaimResponseAmino): MsgERC20DeployedClaimResponse {
    return {};
  },
  toAmino(_: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgERC20DeployedClaimResponseAminoMsg): MsgERC20DeployedClaimResponse {
    return MsgERC20DeployedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgERC20DeployedClaimResponseProtoMsg): MsgERC20DeployedClaimResponse {
    return MsgERC20DeployedClaimResponse.decode(message.value);
  },
  toProto(message: MsgERC20DeployedClaimResponse): Uint8Array {
    return MsgERC20DeployedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgERC20DeployedClaimResponse): MsgERC20DeployedClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse",
      value: MsgERC20DeployedClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLogicCallExecutedClaim(): MsgLogicCallExecutedClaim {
  return {
    eventNonce: Long.UZERO,
    blockHeight: Long.UZERO,
    invalidationId: new Uint8Array(),
    invalidationNonce: Long.UZERO,
    orchestrator: ""
  };
}
export const MsgLogicCallExecutedClaim = {
  encode(message: MsgLogicCallExecutedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLogicCallExecutedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = (reader.uint64() as Long);
          break;
        case 3:
          message.invalidationId = reader.bytes();
          break;
        case 4:
          message.invalidationNonce = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<MsgLogicCallExecutedClaim>): MsgLogicCallExecutedClaim {
    const message = createBaseMsgLogicCallExecutedClaim();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
  fromAmino(object: MsgLogicCallExecutedClaimAmino): MsgLogicCallExecutedClaim {
    return {
      eventNonce: Long.fromString(object.event_nonce),
      blockHeight: Long.fromString(object.block_height),
      invalidationId: object.invalidation_id,
      invalidationNonce: Long.fromString(object.invalidation_nonce),
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgLogicCallExecutedClaim): MsgLogicCallExecutedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.invalidation_id = message.invalidationId;
    obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgLogicCallExecutedClaimAminoMsg): MsgLogicCallExecutedClaim {
    return MsgLogicCallExecutedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLogicCallExecutedClaimProtoMsg): MsgLogicCallExecutedClaim {
    return MsgLogicCallExecutedClaim.decode(message.value);
  },
  toProto(message: MsgLogicCallExecutedClaim): Uint8Array {
    return MsgLogicCallExecutedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgLogicCallExecutedClaim): MsgLogicCallExecutedClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
      value: MsgLogicCallExecutedClaim.encode(message).finish()
    };
  }
};
function createBaseMsgLogicCallExecutedClaimResponse(): MsgLogicCallExecutedClaimResponse {
  return {};
}
export const MsgLogicCallExecutedClaimResponse = {
  encode(_: MsgLogicCallExecutedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaimResponse {
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
  fromPartial(_: DeepPartial<MsgLogicCallExecutedClaimResponse>): MsgLogicCallExecutedClaimResponse {
    const message = createBaseMsgLogicCallExecutedClaimResponse();
    return message;
  },
  fromAmino(_: MsgLogicCallExecutedClaimResponseAmino): MsgLogicCallExecutedClaimResponse {
    return {};
  },
  toAmino(_: MsgLogicCallExecutedClaimResponse): MsgLogicCallExecutedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLogicCallExecutedClaimResponseAminoMsg): MsgLogicCallExecutedClaimResponse {
    return MsgLogicCallExecutedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLogicCallExecutedClaimResponseProtoMsg): MsgLogicCallExecutedClaimResponse {
    return MsgLogicCallExecutedClaimResponse.decode(message.value);
  },
  toProto(message: MsgLogicCallExecutedClaimResponse): Uint8Array {
    return MsgLogicCallExecutedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLogicCallExecutedClaimResponse): MsgLogicCallExecutedClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse",
      value: MsgLogicCallExecutedClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValsetUpdatedClaim(): MsgValsetUpdatedClaim {
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
  encode(message: MsgValsetUpdatedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;
        case 2:
          message.valsetNonce = (reader.uint64() as Long);
          break;
        case 3:
          message.blockHeight = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<MsgValsetUpdatedClaim>): MsgValsetUpdatedClaim {
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
  fromAmino(object: MsgValsetUpdatedClaimAmino): MsgValsetUpdatedClaim {
    return {
      eventNonce: Long.fromString(object.event_nonce),
      valsetNonce: Long.fromString(object.valset_nonce),
      blockHeight: Long.fromString(object.block_height),
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromAmino(e)) : [],
      rewardAmount: object.reward_amount,
      rewardToken: object.reward_token,
      orchestrator: object.orchestrator
    };
  },
  toAmino(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    obj.valset_nonce = message.valsetNonce ? message.valsetNonce.toString() : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    if (message.members) {
      obj.members = message.members.map(e => e ? BridgeValidator.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.reward_amount = message.rewardAmount;
    obj.reward_token = message.rewardToken;
    obj.orchestrator = message.orchestrator;
    return obj;
  },
  fromAminoMsg(object: MsgValsetUpdatedClaimAminoMsg): MsgValsetUpdatedClaim {
    return MsgValsetUpdatedClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetUpdatedClaimProtoMsg): MsgValsetUpdatedClaim {
    return MsgValsetUpdatedClaim.decode(message.value);
  },
  toProto(message: MsgValsetUpdatedClaim): Uint8Array {
    return MsgValsetUpdatedClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetUpdatedClaim): MsgValsetUpdatedClaimProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
      value: MsgValsetUpdatedClaim.encode(message).finish()
    };
  }
};
function createBaseMsgValsetUpdatedClaimResponse(): MsgValsetUpdatedClaimResponse {
  return {};
}
export const MsgValsetUpdatedClaimResponse = {
  encode(_: MsgValsetUpdatedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse {
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
  fromPartial(_: DeepPartial<MsgValsetUpdatedClaimResponse>): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  },
  fromAmino(_: MsgValsetUpdatedClaimResponseAmino): MsgValsetUpdatedClaimResponse {
    return {};
  },
  toAmino(_: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValsetUpdatedClaimResponseAminoMsg): MsgValsetUpdatedClaimResponse {
    return MsgValsetUpdatedClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgValsetUpdatedClaimResponseProtoMsg): MsgValsetUpdatedClaimResponse {
    return MsgValsetUpdatedClaimResponse.decode(message.value);
  },
  toProto(message: MsgValsetUpdatedClaimResponse): Uint8Array {
    return MsgValsetUpdatedClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValsetUpdatedClaimResponse): MsgValsetUpdatedClaimResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse",
      value: MsgValsetUpdatedClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSendToEth(): MsgCancelSendToEth {
  return {
    transactionId: Long.UZERO,
    sender: ""
  };
}
export const MsgCancelSendToEth = {
  encode(message: MsgCancelSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.transactionId.isZero()) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId = (reader.uint64() as Long);
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
  fromPartial(object: DeepPartial<MsgCancelSendToEth>): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    message.transactionId = object.transactionId !== undefined && object.transactionId !== null ? Long.fromValue(object.transactionId) : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgCancelSendToEthAmino): MsgCancelSendToEth {
    return {
      transactionId: Long.fromString(object.transaction_id),
      sender: object.sender
    };
  },
  toAmino(message: MsgCancelSendToEth): MsgCancelSendToEthAmino {
    const obj: any = {};
    obj.transaction_id = message.transactionId ? message.transactionId.toString() : undefined;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgCancelSendToEthAminoMsg): MsgCancelSendToEth {
    return MsgCancelSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSendToEthProtoMsg): MsgCancelSendToEth {
    return MsgCancelSendToEth.decode(message.value);
  },
  toProto(message: MsgCancelSendToEth): Uint8Array {
    return MsgCancelSendToEth.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSendToEth): MsgCancelSendToEthProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgCancelSendToEth",
      value: MsgCancelSendToEth.encode(message).finish()
    };
  }
};
function createBaseMsgCancelSendToEthResponse(): MsgCancelSendToEthResponse {
  return {};
}
export const MsgCancelSendToEthResponse = {
  encode(_: MsgCancelSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEthResponse {
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
  fromPartial(_: DeepPartial<MsgCancelSendToEthResponse>): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  },
  fromAmino(_: MsgCancelSendToEthResponseAmino): MsgCancelSendToEthResponse {
    return {};
  },
  toAmino(_: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelSendToEthResponseAminoMsg): MsgCancelSendToEthResponse {
    return MsgCancelSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelSendToEthResponseProtoMsg): MsgCancelSendToEthResponse {
    return MsgCancelSendToEthResponse.decode(message.value);
  },
  toProto(message: MsgCancelSendToEthResponse): Uint8Array {
    return MsgCancelSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelSendToEthResponse): MsgCancelSendToEthResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgCancelSendToEthResponse",
      value: MsgCancelSendToEthResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitBadSignatureEvidence(): MsgSubmitBadSignatureEvidence {
  return {
    subject: Any.fromPartial({}),
    signature: "",
    sender: ""
  };
}
export const MsgSubmitBadSignatureEvidence = {
  encode(message: MsgSubmitBadSignatureEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidence {
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
  fromPartial(object: DeepPartial<MsgSubmitBadSignatureEvidence>): MsgSubmitBadSignatureEvidence {
    const message = createBaseMsgSubmitBadSignatureEvidence();
    message.subject = object.subject !== undefined && object.subject !== null ? Any.fromPartial(object.subject) : undefined;
    message.signature = object.signature ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitBadSignatureEvidenceAmino): MsgSubmitBadSignatureEvidence {
    return {
      subject: object?.subject ? Any.fromAmino(object.subject) : undefined,
      signature: object.signature,
      sender: object.sender
    };
  },
  toAmino(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceAmino {
    const obj: any = {};
    obj.subject = message.subject ? Any.toAmino(message.subject) : undefined;
    obj.signature = message.signature;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBadSignatureEvidenceAminoMsg): MsgSubmitBadSignatureEvidence {
    return MsgSubmitBadSignatureEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBadSignatureEvidenceProtoMsg): MsgSubmitBadSignatureEvidence {
    return MsgSubmitBadSignatureEvidence.decode(message.value);
  },
  toProto(message: MsgSubmitBadSignatureEvidence): Uint8Array {
    return MsgSubmitBadSignatureEvidence.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBadSignatureEvidence): MsgSubmitBadSignatureEvidenceProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
      value: MsgSubmitBadSignatureEvidence.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitBadSignatureEvidenceResponse(): MsgSubmitBadSignatureEvidenceResponse {
  return {};
}
export const MsgSubmitBadSignatureEvidenceResponse = {
  encode(_: MsgSubmitBadSignatureEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidenceResponse {
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
  fromPartial(_: DeepPartial<MsgSubmitBadSignatureEvidenceResponse>): MsgSubmitBadSignatureEvidenceResponse {
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return message;
  },
  fromAmino(_: MsgSubmitBadSignatureEvidenceResponseAmino): MsgSubmitBadSignatureEvidenceResponse {
    return {};
  },
  toAmino(_: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitBadSignatureEvidenceResponseAminoMsg): MsgSubmitBadSignatureEvidenceResponse {
    return MsgSubmitBadSignatureEvidenceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitBadSignatureEvidenceResponseProtoMsg): MsgSubmitBadSignatureEvidenceResponse {
    return MsgSubmitBadSignatureEvidenceResponse.decode(message.value);
  },
  toProto(message: MsgSubmitBadSignatureEvidenceResponse): Uint8Array {
    return MsgSubmitBadSignatureEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitBadSignatureEvidenceResponse): MsgSubmitBadSignatureEvidenceResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
      value: MsgSubmitBadSignatureEvidenceResponse.encode(message).finish()
    };
  }
};