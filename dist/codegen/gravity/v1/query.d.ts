/// <reference types="long" />
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Valset, ValsetAmino, ValsetSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType, MsgConfirmLogicCall, MsgConfirmLogicCallAmino, MsgConfirmLogicCallSDKType } from "./msgs";
import { BatchFees, BatchFeesAmino, BatchFeesSDKType } from "./pool";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingLogicCall, OutgoingLogicCallAmino, OutgoingLogicCallSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationAmino, AttestationSDKType } from "./attestation";
import { Long, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/gravity.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/gravity.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryCurrentValsetRequest {
}
export interface QueryCurrentValsetRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryCurrentValsetRequest";
    value: Uint8Array;
}
export interface QueryCurrentValsetRequestAmino {
}
export interface QueryCurrentValsetRequestAminoMsg {
    type: "/gravity.v1.QueryCurrentValsetRequest";
    value: QueryCurrentValsetRequestAmino;
}
export interface QueryCurrentValsetRequestSDKType {
}
export interface QueryCurrentValsetResponse {
    valset: Valset;
}
export interface QueryCurrentValsetResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryCurrentValsetResponse";
    value: Uint8Array;
}
export interface QueryCurrentValsetResponseAmino {
    valset?: ValsetAmino;
}
export interface QueryCurrentValsetResponseAminoMsg {
    type: "/gravity.v1.QueryCurrentValsetResponse";
    value: QueryCurrentValsetResponseAmino;
}
export interface QueryCurrentValsetResponseSDKType {
    valset: ValsetSDKType;
}
export interface QueryValsetRequestRequest {
    nonce: Long;
}
export interface QueryValsetRequestRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetRequestRequest";
    value: Uint8Array;
}
export interface QueryValsetRequestRequestAmino {
    nonce: string;
}
export interface QueryValsetRequestRequestAminoMsg {
    type: "/gravity.v1.QueryValsetRequestRequest";
    value: QueryValsetRequestRequestAmino;
}
export interface QueryValsetRequestRequestSDKType {
    nonce: Long;
}
export interface QueryValsetRequestResponse {
    valset: Valset;
}
export interface QueryValsetRequestResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetRequestResponse";
    value: Uint8Array;
}
export interface QueryValsetRequestResponseAmino {
    valset?: ValsetAmino;
}
export interface QueryValsetRequestResponseAminoMsg {
    type: "/gravity.v1.QueryValsetRequestResponse";
    value: QueryValsetRequestResponseAmino;
}
export interface QueryValsetRequestResponseSDKType {
    valset: ValsetSDKType;
}
export interface QueryValsetConfirmRequest {
    nonce: Long;
    address: string;
}
export interface QueryValsetConfirmRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetConfirmRequest";
    value: Uint8Array;
}
export interface QueryValsetConfirmRequestAmino {
    nonce: string;
    address: string;
}
export interface QueryValsetConfirmRequestAminoMsg {
    type: "/gravity.v1.QueryValsetConfirmRequest";
    value: QueryValsetConfirmRequestAmino;
}
export interface QueryValsetConfirmRequestSDKType {
    nonce: Long;
    address: string;
}
export interface QueryValsetConfirmResponse {
    confirm: MsgValsetConfirm;
}
export interface QueryValsetConfirmResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetConfirmResponse";
    value: Uint8Array;
}
export interface QueryValsetConfirmResponseAmino {
    confirm?: MsgValsetConfirmAmino;
}
export interface QueryValsetConfirmResponseAminoMsg {
    type: "/gravity.v1.QueryValsetConfirmResponse";
    value: QueryValsetConfirmResponseAmino;
}
export interface QueryValsetConfirmResponseSDKType {
    confirm: MsgValsetConfirmSDKType;
}
export interface QueryValsetConfirmsByNonceRequest {
    nonce: Long;
}
export interface QueryValsetConfirmsByNonceRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceRequest";
    value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceRequestAmino {
    nonce: string;
}
export interface QueryValsetConfirmsByNonceRequestAminoMsg {
    type: "/gravity.v1.QueryValsetConfirmsByNonceRequest";
    value: QueryValsetConfirmsByNonceRequestAmino;
}
export interface QueryValsetConfirmsByNonceRequestSDKType {
    nonce: Long;
}
export interface QueryValsetConfirmsByNonceResponse {
    confirms: MsgValsetConfirm[];
}
export interface QueryValsetConfirmsByNonceResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceResponse";
    value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceResponseAmino {
    confirms: MsgValsetConfirmAmino[];
}
export interface QueryValsetConfirmsByNonceResponseAminoMsg {
    type: "/gravity.v1.QueryValsetConfirmsByNonceResponse";
    value: QueryValsetConfirmsByNonceResponseAmino;
}
export interface QueryValsetConfirmsByNonceResponseSDKType {
    confirms: MsgValsetConfirmSDKType[];
}
export interface QueryLastValsetRequestsRequest {
}
export interface QueryLastValsetRequestsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastValsetRequestsRequest";
    value: Uint8Array;
}
export interface QueryLastValsetRequestsRequestAmino {
}
export interface QueryLastValsetRequestsRequestAminoMsg {
    type: "/gravity.v1.QueryLastValsetRequestsRequest";
    value: QueryLastValsetRequestsRequestAmino;
}
export interface QueryLastValsetRequestsRequestSDKType {
}
export interface QueryLastValsetRequestsResponse {
    valsets: Valset[];
}
export interface QueryLastValsetRequestsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastValsetRequestsResponse";
    value: Uint8Array;
}
export interface QueryLastValsetRequestsResponseAmino {
    valsets: ValsetAmino[];
}
export interface QueryLastValsetRequestsResponseAminoMsg {
    type: "/gravity.v1.QueryLastValsetRequestsResponse";
    value: QueryLastValsetRequestsResponseAmino;
}
export interface QueryLastValsetRequestsResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrRequestAmino {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestAminoMsg {
    type: "/gravity.v1.QueryLastPendingValsetRequestByAddrRequest";
    value: QueryLastPendingValsetRequestByAddrRequestAmino;
}
export interface QueryLastPendingValsetRequestByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
    valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrResponseAmino {
    valsets: ValsetAmino[];
}
export interface QueryLastPendingValsetRequestByAddrResponseAminoMsg {
    type: "/gravity.v1.QueryLastPendingValsetRequestByAddrResponse";
    value: QueryLastPendingValsetRequestByAddrResponseAmino;
}
export interface QueryLastPendingValsetRequestByAddrResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryBatchFeeRequest {
}
export interface QueryBatchFeeRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchFeeRequest";
    value: Uint8Array;
}
export interface QueryBatchFeeRequestAmino {
}
export interface QueryBatchFeeRequestAminoMsg {
    type: "/gravity.v1.QueryBatchFeeRequest";
    value: QueryBatchFeeRequestAmino;
}
export interface QueryBatchFeeRequestSDKType {
}
export interface QueryBatchFeeResponse {
    batchFees: BatchFees[];
}
export interface QueryBatchFeeResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchFeeResponse";
    value: Uint8Array;
}
export interface QueryBatchFeeResponseAmino {
    batch_fees: BatchFeesAmino[];
}
export interface QueryBatchFeeResponseAminoMsg {
    type: "/gravity.v1.QueryBatchFeeResponse";
    value: QueryBatchFeeResponseAmino;
}
export interface QueryBatchFeeResponseSDKType {
    batch_fees: BatchFeesSDKType[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrRequestAmino {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestAminoMsg {
    type: "/gravity.v1.QueryLastPendingBatchRequestByAddrRequest";
    value: QueryLastPendingBatchRequestByAddrRequestAmino;
}
export interface QueryLastPendingBatchRequestByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
    batch: OutgoingTxBatch[];
}
export interface QueryLastPendingBatchRequestByAddrResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrResponseAmino {
    batch: OutgoingTxBatchAmino[];
}
export interface QueryLastPendingBatchRequestByAddrResponseAminoMsg {
    type: "/gravity.v1.QueryLastPendingBatchRequestByAddrResponse";
    value: QueryLastPendingBatchRequestByAddrResponseAmino;
}
export interface QueryLastPendingBatchRequestByAddrResponseSDKType {
    batch: OutgoingTxBatchSDKType[];
}
export interface QueryLastPendingLogicCallByAddrRequest {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastPendingLogicCallByAddrRequestAmino {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrRequestAminoMsg {
    type: "/gravity.v1.QueryLastPendingLogicCallByAddrRequest";
    value: QueryLastPendingLogicCallByAddrRequestAmino;
}
export interface QueryLastPendingLogicCallByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrResponse {
    call: OutgoingLogicCall[];
}
export interface QueryLastPendingLogicCallByAddrResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastPendingLogicCallByAddrResponseAmino {
    call: OutgoingLogicCallAmino[];
}
export interface QueryLastPendingLogicCallByAddrResponseAminoMsg {
    type: "/gravity.v1.QueryLastPendingLogicCallByAddrResponse";
    value: QueryLastPendingLogicCallByAddrResponseAmino;
}
export interface QueryLastPendingLogicCallByAddrResponseSDKType {
    call: OutgoingLogicCallSDKType[];
}
export interface QueryOutgoingTxBatchesRequest {
}
export interface QueryOutgoingTxBatchesRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryOutgoingTxBatchesRequest";
    value: Uint8Array;
}
export interface QueryOutgoingTxBatchesRequestAmino {
}
export interface QueryOutgoingTxBatchesRequestAminoMsg {
    type: "/gravity.v1.QueryOutgoingTxBatchesRequest";
    value: QueryOutgoingTxBatchesRequestAmino;
}
export interface QueryOutgoingTxBatchesRequestSDKType {
}
export interface QueryOutgoingTxBatchesResponse {
    batches: OutgoingTxBatch[];
}
export interface QueryOutgoingTxBatchesResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryOutgoingTxBatchesResponse";
    value: Uint8Array;
}
export interface QueryOutgoingTxBatchesResponseAmino {
    batches: OutgoingTxBatchAmino[];
}
export interface QueryOutgoingTxBatchesResponseAminoMsg {
    type: "/gravity.v1.QueryOutgoingTxBatchesResponse";
    value: QueryOutgoingTxBatchesResponseAmino;
}
export interface QueryOutgoingTxBatchesResponseSDKType {
    batches: OutgoingTxBatchSDKType[];
}
export interface QueryOutgoingLogicCallsRequest {
}
export interface QueryOutgoingLogicCallsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryOutgoingLogicCallsRequest";
    value: Uint8Array;
}
export interface QueryOutgoingLogicCallsRequestAmino {
}
export interface QueryOutgoingLogicCallsRequestAminoMsg {
    type: "/gravity.v1.QueryOutgoingLogicCallsRequest";
    value: QueryOutgoingLogicCallsRequestAmino;
}
export interface QueryOutgoingLogicCallsRequestSDKType {
}
export interface QueryOutgoingLogicCallsResponse {
    calls: OutgoingLogicCall[];
}
export interface QueryOutgoingLogicCallsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryOutgoingLogicCallsResponse";
    value: Uint8Array;
}
export interface QueryOutgoingLogicCallsResponseAmino {
    calls: OutgoingLogicCallAmino[];
}
export interface QueryOutgoingLogicCallsResponseAminoMsg {
    type: "/gravity.v1.QueryOutgoingLogicCallsResponse";
    value: QueryOutgoingLogicCallsResponseAmino;
}
export interface QueryOutgoingLogicCallsResponseSDKType {
    calls: OutgoingLogicCallSDKType[];
}
export interface QueryBatchRequestByNonceRequest {
    nonce: Long;
    contractAddress: string;
}
export interface QueryBatchRequestByNonceRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchRequestByNonceRequest";
    value: Uint8Array;
}
export interface QueryBatchRequestByNonceRequestAmino {
    nonce: string;
    contract_address: string;
}
export interface QueryBatchRequestByNonceRequestAminoMsg {
    type: "/gravity.v1.QueryBatchRequestByNonceRequest";
    value: QueryBatchRequestByNonceRequestAmino;
}
export interface QueryBatchRequestByNonceRequestSDKType {
    nonce: Long;
    contract_address: string;
}
export interface QueryBatchRequestByNonceResponse {
    batch: OutgoingTxBatch;
}
export interface QueryBatchRequestByNonceResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchRequestByNonceResponse";
    value: Uint8Array;
}
export interface QueryBatchRequestByNonceResponseAmino {
    batch?: OutgoingTxBatchAmino;
}
export interface QueryBatchRequestByNonceResponseAminoMsg {
    type: "/gravity.v1.QueryBatchRequestByNonceResponse";
    value: QueryBatchRequestByNonceResponseAmino;
}
export interface QueryBatchRequestByNonceResponseSDKType {
    batch: OutgoingTxBatchSDKType;
}
export interface QueryBatchConfirmsRequest {
    nonce: Long;
    contractAddress: string;
}
export interface QueryBatchConfirmsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchConfirmsRequest";
    value: Uint8Array;
}
export interface QueryBatchConfirmsRequestAmino {
    nonce: string;
    contract_address: string;
}
export interface QueryBatchConfirmsRequestAminoMsg {
    type: "/gravity.v1.QueryBatchConfirmsRequest";
    value: QueryBatchConfirmsRequestAmino;
}
export interface QueryBatchConfirmsRequestSDKType {
    nonce: Long;
    contract_address: string;
}
export interface QueryBatchConfirmsResponse {
    confirms: MsgConfirmBatch[];
}
export interface QueryBatchConfirmsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchConfirmsResponse";
    value: Uint8Array;
}
export interface QueryBatchConfirmsResponseAmino {
    confirms: MsgConfirmBatchAmino[];
}
export interface QueryBatchConfirmsResponseAminoMsg {
    type: "/gravity.v1.QueryBatchConfirmsResponse";
    value: QueryBatchConfirmsResponseAmino;
}
export interface QueryBatchConfirmsResponseSDKType {
    confirms: MsgConfirmBatchSDKType[];
}
export interface QueryLogicConfirmsRequest {
    invalidationId: Uint8Array;
    invalidationNonce: Long;
}
export interface QueryLogicConfirmsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLogicConfirmsRequest";
    value: Uint8Array;
}
export interface QueryLogicConfirmsRequestAmino {
    invalidation_id: Uint8Array;
    invalidation_nonce: string;
}
export interface QueryLogicConfirmsRequestAminoMsg {
    type: "/gravity.v1.QueryLogicConfirmsRequest";
    value: QueryLogicConfirmsRequestAmino;
}
export interface QueryLogicConfirmsRequestSDKType {
    invalidation_id: Uint8Array;
    invalidation_nonce: Long;
}
export interface QueryLogicConfirmsResponse {
    confirms: MsgConfirmLogicCall[];
}
export interface QueryLogicConfirmsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLogicConfirmsResponse";
    value: Uint8Array;
}
export interface QueryLogicConfirmsResponseAmino {
    confirms: MsgConfirmLogicCallAmino[];
}
export interface QueryLogicConfirmsResponseAminoMsg {
    type: "/gravity.v1.QueryLogicConfirmsResponse";
    value: QueryLogicConfirmsResponseAmino;
}
export interface QueryLogicConfirmsResponseSDKType {
    confirms: MsgConfirmLogicCallSDKType[];
}
export interface QueryLastEventNonceByAddrRequest {
    address: string;
}
export interface QueryLastEventNonceByAddrRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastEventNonceByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastEventNonceByAddrRequestAmino {
    address: string;
}
export interface QueryLastEventNonceByAddrRequestAminoMsg {
    type: "/gravity.v1.QueryLastEventNonceByAddrRequest";
    value: QueryLastEventNonceByAddrRequestAmino;
}
export interface QueryLastEventNonceByAddrRequestSDKType {
    address: string;
}
export interface QueryLastEventNonceByAddrResponse {
    eventNonce: Long;
}
export interface QueryLastEventNonceByAddrResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastEventNonceByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastEventNonceByAddrResponseAmino {
    event_nonce: string;
}
export interface QueryLastEventNonceByAddrResponseAminoMsg {
    type: "/gravity.v1.QueryLastEventNonceByAddrResponse";
    value: QueryLastEventNonceByAddrResponseAmino;
}
export interface QueryLastEventNonceByAddrResponseSDKType {
    event_nonce: Long;
}
export interface QueryERC20ToDenomRequest {
    erc20: string;
}
export interface QueryERC20ToDenomRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryERC20ToDenomRequest";
    value: Uint8Array;
}
export interface QueryERC20ToDenomRequestAmino {
    erc20: string;
}
export interface QueryERC20ToDenomRequestAminoMsg {
    type: "/gravity.v1.QueryERC20ToDenomRequest";
    value: QueryERC20ToDenomRequestAmino;
}
export interface QueryERC20ToDenomRequestSDKType {
    erc20: string;
}
export interface QueryERC20ToDenomResponse {
    denom: string;
    cosmosOriginated: boolean;
}
export interface QueryERC20ToDenomResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryERC20ToDenomResponse";
    value: Uint8Array;
}
export interface QueryERC20ToDenomResponseAmino {
    denom: string;
    cosmos_originated: boolean;
}
export interface QueryERC20ToDenomResponseAminoMsg {
    type: "/gravity.v1.QueryERC20ToDenomResponse";
    value: QueryERC20ToDenomResponseAmino;
}
export interface QueryERC20ToDenomResponseSDKType {
    denom: string;
    cosmos_originated: boolean;
}
export interface QueryDenomToERC20Request {
    denom: string;
}
export interface QueryDenomToERC20RequestProtoMsg {
    typeUrl: "/gravity.v1.QueryDenomToERC20Request";
    value: Uint8Array;
}
export interface QueryDenomToERC20RequestAmino {
    denom: string;
}
export interface QueryDenomToERC20RequestAminoMsg {
    type: "/gravity.v1.QueryDenomToERC20Request";
    value: QueryDenomToERC20RequestAmino;
}
export interface QueryDenomToERC20RequestSDKType {
    denom: string;
}
export interface QueryDenomToERC20Response {
    erc20: string;
    cosmosOriginated: boolean;
}
export interface QueryDenomToERC20ResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryDenomToERC20Response";
    value: Uint8Array;
}
export interface QueryDenomToERC20ResponseAmino {
    erc20: string;
    cosmos_originated: boolean;
}
export interface QueryDenomToERC20ResponseAminoMsg {
    type: "/gravity.v1.QueryDenomToERC20Response";
    value: QueryDenomToERC20ResponseAmino;
}
export interface QueryDenomToERC20ResponseSDKType {
    erc20: string;
    cosmos_originated: boolean;
}
export interface QueryAttestationsRequest {
    limit: Long;
}
export interface QueryAttestationsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryAttestationsRequest";
    value: Uint8Array;
}
export interface QueryAttestationsRequestAmino {
    limit: string;
}
export interface QueryAttestationsRequestAminoMsg {
    type: "/gravity.v1.QueryAttestationsRequest";
    value: QueryAttestationsRequestAmino;
}
export interface QueryAttestationsRequestSDKType {
    limit: Long;
}
export interface QueryAttestationsResponse {
    attestations: Attestation[];
}
export interface QueryAttestationsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryAttestationsResponse";
    value: Uint8Array;
}
export interface QueryAttestationsResponseAmino {
    attestations: AttestationAmino[];
}
export interface QueryAttestationsResponseAminoMsg {
    type: "/gravity.v1.QueryAttestationsResponse";
    value: QueryAttestationsResponseAmino;
}
export interface QueryAttestationsResponseSDKType {
    attestations: AttestationSDKType[];
}
export interface QueryDelegateKeysByValidatorAddress {
    validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddress";
    value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressAmino {
    validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByValidatorAddress";
    value: QueryDelegateKeysByValidatorAddressAmino;
}
export interface QueryDelegateKeysByValidatorAddressSDKType {
    validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
    ethAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddressResponse";
    value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressResponseAmino {
    eth_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByValidatorAddressResponse";
    value: QueryDelegateKeysByValidatorAddressResponseAmino;
}
export interface QueryDelegateKeysByValidatorAddressResponseSDKType {
    eth_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddress {
    ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddress";
    value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressAmino {
    eth_address: string;
}
export interface QueryDelegateKeysByEthAddressAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByEthAddress";
    value: QueryDelegateKeysByEthAddressAmino;
}
export interface QueryDelegateKeysByEthAddressSDKType {
    eth_address: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
    validatorAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddressResponse";
    value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressResponseAmino {
    validator_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddressResponseAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByEthAddressResponse";
    value: QueryDelegateKeysByEthAddressResponseAmino;
}
export interface QueryDelegateKeysByEthAddressResponseSDKType {
    validator_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddress";
    value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressAmino {
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByOrchestratorAddress";
    value: QueryDelegateKeysByOrchestratorAddressAmino;
}
export interface QueryDelegateKeysByOrchestratorAddressSDKType {
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
    validatorAddress: string;
    ethAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse";
    value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAmino {
    validator_address: string;
    eth_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse";
    value: QueryDelegateKeysByOrchestratorAddressResponseAmino;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseSDKType {
    validator_address: string;
    eth_address: string;
}
export interface QueryPendingSendToEth {
    senderAddress: string;
}
export interface QueryPendingSendToEthProtoMsg {
    typeUrl: "/gravity.v1.QueryPendingSendToEth";
    value: Uint8Array;
}
export interface QueryPendingSendToEthAmino {
    sender_address: string;
}
export interface QueryPendingSendToEthAminoMsg {
    type: "/gravity.v1.QueryPendingSendToEth";
    value: QueryPendingSendToEthAmino;
}
export interface QueryPendingSendToEthSDKType {
    sender_address: string;
}
export interface QueryPendingSendToEthResponse {
    transfersInBatches: OutgoingTransferTx[];
    unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingSendToEthResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryPendingSendToEthResponse";
    value: Uint8Array;
}
export interface QueryPendingSendToEthResponseAmino {
    transfers_in_batches: OutgoingTransferTxAmino[];
    unbatched_transfers: OutgoingTransferTxAmino[];
}
export interface QueryPendingSendToEthResponseAminoMsg {
    type: "/gravity.v1.QueryPendingSendToEthResponse";
    value: QueryPendingSendToEthResponseAmino;
}
export interface QueryPendingSendToEthResponseSDKType {
    transfers_in_batches: OutgoingTransferTxSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryCurrentValsetRequest: {
    encode(_: QueryCurrentValsetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetRequest;
    fromPartial(_: DeepPartial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest;
    fromAmino(_: QueryCurrentValsetRequestAmino): QueryCurrentValsetRequest;
    toAmino(_: QueryCurrentValsetRequest): QueryCurrentValsetRequestAmino;
    fromAminoMsg(object: QueryCurrentValsetRequestAminoMsg): QueryCurrentValsetRequest;
    fromProtoMsg(message: QueryCurrentValsetRequestProtoMsg): QueryCurrentValsetRequest;
    toProto(message: QueryCurrentValsetRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentValsetRequest): QueryCurrentValsetRequestProtoMsg;
};
export declare const QueryCurrentValsetResponse: {
    encode(message: QueryCurrentValsetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetResponse;
    fromPartial(object: DeepPartial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse;
    fromAmino(object: QueryCurrentValsetResponseAmino): QueryCurrentValsetResponse;
    toAmino(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseAmino;
    fromAminoMsg(object: QueryCurrentValsetResponseAminoMsg): QueryCurrentValsetResponse;
    fromProtoMsg(message: QueryCurrentValsetResponseProtoMsg): QueryCurrentValsetResponse;
    toProto(message: QueryCurrentValsetResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseProtoMsg;
};
export declare const QueryValsetRequestRequest: {
    encode(message: QueryValsetRequestRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestRequest;
    fromPartial(object: DeepPartial<QueryValsetRequestRequest>): QueryValsetRequestRequest;
    fromAmino(object: QueryValsetRequestRequestAmino): QueryValsetRequestRequest;
    toAmino(message: QueryValsetRequestRequest): QueryValsetRequestRequestAmino;
    fromAminoMsg(object: QueryValsetRequestRequestAminoMsg): QueryValsetRequestRequest;
    fromProtoMsg(message: QueryValsetRequestRequestProtoMsg): QueryValsetRequestRequest;
    toProto(message: QueryValsetRequestRequest): Uint8Array;
    toProtoMsg(message: QueryValsetRequestRequest): QueryValsetRequestRequestProtoMsg;
};
export declare const QueryValsetRequestResponse: {
    encode(message: QueryValsetRequestResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestResponse;
    fromPartial(object: DeepPartial<QueryValsetRequestResponse>): QueryValsetRequestResponse;
    fromAmino(object: QueryValsetRequestResponseAmino): QueryValsetRequestResponse;
    toAmino(message: QueryValsetRequestResponse): QueryValsetRequestResponseAmino;
    fromAminoMsg(object: QueryValsetRequestResponseAminoMsg): QueryValsetRequestResponse;
    fromProtoMsg(message: QueryValsetRequestResponseProtoMsg): QueryValsetRequestResponse;
    toProto(message: QueryValsetRequestResponse): Uint8Array;
    toProtoMsg(message: QueryValsetRequestResponse): QueryValsetRequestResponseProtoMsg;
};
export declare const QueryValsetConfirmRequest: {
    encode(message: QueryValsetConfirmRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmRequest;
    fromPartial(object: DeepPartial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest;
    fromAmino(object: QueryValsetConfirmRequestAmino): QueryValsetConfirmRequest;
    toAmino(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestAmino;
    fromAminoMsg(object: QueryValsetConfirmRequestAminoMsg): QueryValsetConfirmRequest;
    fromProtoMsg(message: QueryValsetConfirmRequestProtoMsg): QueryValsetConfirmRequest;
    toProto(message: QueryValsetConfirmRequest): Uint8Array;
    toProtoMsg(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestProtoMsg;
};
export declare const QueryValsetConfirmResponse: {
    encode(message: QueryValsetConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmResponse;
    fromPartial(object: DeepPartial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse;
    fromAmino(object: QueryValsetConfirmResponseAmino): QueryValsetConfirmResponse;
    toAmino(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseAmino;
    fromAminoMsg(object: QueryValsetConfirmResponseAminoMsg): QueryValsetConfirmResponse;
    fromProtoMsg(message: QueryValsetConfirmResponseProtoMsg): QueryValsetConfirmResponse;
    toProto(message: QueryValsetConfirmResponse): Uint8Array;
    toProtoMsg(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseProtoMsg;
};
export declare const QueryValsetConfirmsByNonceRequest: {
    encode(message: QueryValsetConfirmsByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest;
    fromAmino(object: QueryValsetConfirmsByNonceRequestAmino): QueryValsetConfirmsByNonceRequest;
    toAmino(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestAmino;
    fromAminoMsg(object: QueryValsetConfirmsByNonceRequestAminoMsg): QueryValsetConfirmsByNonceRequest;
    fromProtoMsg(message: QueryValsetConfirmsByNonceRequestProtoMsg): QueryValsetConfirmsByNonceRequest;
    toProto(message: QueryValsetConfirmsByNonceRequest): Uint8Array;
    toProtoMsg(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestProtoMsg;
};
export declare const QueryValsetConfirmsByNonceResponse: {
    encode(message: QueryValsetConfirmsByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse;
    fromPartial(object: DeepPartial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse;
    fromAmino(object: QueryValsetConfirmsByNonceResponseAmino): QueryValsetConfirmsByNonceResponse;
    toAmino(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseAmino;
    fromAminoMsg(object: QueryValsetConfirmsByNonceResponseAminoMsg): QueryValsetConfirmsByNonceResponse;
    fromProtoMsg(message: QueryValsetConfirmsByNonceResponseProtoMsg): QueryValsetConfirmsByNonceResponse;
    toProto(message: QueryValsetConfirmsByNonceResponse): Uint8Array;
    toProtoMsg(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseProtoMsg;
};
export declare const QueryLastValsetRequestsRequest: {
    encode(_: QueryLastValsetRequestsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsRequest;
    fromPartial(_: DeepPartial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest;
    fromAmino(_: QueryLastValsetRequestsRequestAmino): QueryLastValsetRequestsRequest;
    toAmino(_: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestAmino;
    fromAminoMsg(object: QueryLastValsetRequestsRequestAminoMsg): QueryLastValsetRequestsRequest;
    fromProtoMsg(message: QueryLastValsetRequestsRequestProtoMsg): QueryLastValsetRequestsRequest;
    toProto(message: QueryLastValsetRequestsRequest): Uint8Array;
    toProtoMsg(message: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestProtoMsg;
};
export declare const QueryLastValsetRequestsResponse: {
    encode(message: QueryLastValsetRequestsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsResponse;
    fromPartial(object: DeepPartial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse;
    fromAmino(object: QueryLastValsetRequestsResponseAmino): QueryLastValsetRequestsResponse;
    toAmino(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseAmino;
    fromAminoMsg(object: QueryLastValsetRequestsResponseAminoMsg): QueryLastValsetRequestsResponse;
    fromProtoMsg(message: QueryLastValsetRequestsResponseProtoMsg): QueryLastValsetRequestsResponse;
    toProto(message: QueryLastValsetRequestsResponse): Uint8Array;
    toProtoMsg(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseProtoMsg;
};
export declare const QueryLastPendingValsetRequestByAddrRequest: {
    encode(message: QueryLastPendingValsetRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest;
    fromAmino(object: QueryLastPendingValsetRequestByAddrRequestAmino): QueryLastPendingValsetRequestByAddrRequest;
    toAmino(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestAmino;
    fromAminoMsg(object: QueryLastPendingValsetRequestByAddrRequestAminoMsg): QueryLastPendingValsetRequestByAddrRequest;
    fromProtoMsg(message: QueryLastPendingValsetRequestByAddrRequestProtoMsg): QueryLastPendingValsetRequestByAddrRequest;
    toProto(message: QueryLastPendingValsetRequestByAddrRequest): Uint8Array;
    toProtoMsg(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestProtoMsg;
};
export declare const QueryLastPendingValsetRequestByAddrResponse: {
    encode(message: QueryLastPendingValsetRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse;
    fromAmino(object: QueryLastPendingValsetRequestByAddrResponseAmino): QueryLastPendingValsetRequestByAddrResponse;
    toAmino(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseAmino;
    fromAminoMsg(object: QueryLastPendingValsetRequestByAddrResponseAminoMsg): QueryLastPendingValsetRequestByAddrResponse;
    fromProtoMsg(message: QueryLastPendingValsetRequestByAddrResponseProtoMsg): QueryLastPendingValsetRequestByAddrResponse;
    toProto(message: QueryLastPendingValsetRequestByAddrResponse): Uint8Array;
    toProtoMsg(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseProtoMsg;
};
export declare const QueryBatchFeeRequest: {
    encode(_: QueryBatchFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeRequest;
    fromPartial(_: DeepPartial<QueryBatchFeeRequest>): QueryBatchFeeRequest;
    fromAmino(_: QueryBatchFeeRequestAmino): QueryBatchFeeRequest;
    toAmino(_: QueryBatchFeeRequest): QueryBatchFeeRequestAmino;
    fromAminoMsg(object: QueryBatchFeeRequestAminoMsg): QueryBatchFeeRequest;
    fromProtoMsg(message: QueryBatchFeeRequestProtoMsg): QueryBatchFeeRequest;
    toProto(message: QueryBatchFeeRequest): Uint8Array;
    toProtoMsg(message: QueryBatchFeeRequest): QueryBatchFeeRequestProtoMsg;
};
export declare const QueryBatchFeeResponse: {
    encode(message: QueryBatchFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeResponse;
    fromPartial(object: DeepPartial<QueryBatchFeeResponse>): QueryBatchFeeResponse;
    fromAmino(object: QueryBatchFeeResponseAmino): QueryBatchFeeResponse;
    toAmino(message: QueryBatchFeeResponse): QueryBatchFeeResponseAmino;
    fromAminoMsg(object: QueryBatchFeeResponseAminoMsg): QueryBatchFeeResponse;
    fromProtoMsg(message: QueryBatchFeeResponseProtoMsg): QueryBatchFeeResponse;
    toProto(message: QueryBatchFeeResponse): Uint8Array;
    toProtoMsg(message: QueryBatchFeeResponse): QueryBatchFeeResponseProtoMsg;
};
export declare const QueryLastPendingBatchRequestByAddrRequest: {
    encode(message: QueryLastPendingBatchRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest;
    fromAmino(object: QueryLastPendingBatchRequestByAddrRequestAmino): QueryLastPendingBatchRequestByAddrRequest;
    toAmino(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestAmino;
    fromAminoMsg(object: QueryLastPendingBatchRequestByAddrRequestAminoMsg): QueryLastPendingBatchRequestByAddrRequest;
    fromProtoMsg(message: QueryLastPendingBatchRequestByAddrRequestProtoMsg): QueryLastPendingBatchRequestByAddrRequest;
    toProto(message: QueryLastPendingBatchRequestByAddrRequest): Uint8Array;
    toProtoMsg(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestProtoMsg;
};
export declare const QueryLastPendingBatchRequestByAddrResponse: {
    encode(message: QueryLastPendingBatchRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse;
    fromAmino(object: QueryLastPendingBatchRequestByAddrResponseAmino): QueryLastPendingBatchRequestByAddrResponse;
    toAmino(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseAmino;
    fromAminoMsg(object: QueryLastPendingBatchRequestByAddrResponseAminoMsg): QueryLastPendingBatchRequestByAddrResponse;
    fromProtoMsg(message: QueryLastPendingBatchRequestByAddrResponseProtoMsg): QueryLastPendingBatchRequestByAddrResponse;
    toProto(message: QueryLastPendingBatchRequestByAddrResponse): Uint8Array;
    toProtoMsg(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseProtoMsg;
};
export declare const QueryLastPendingLogicCallByAddrRequest: {
    encode(message: QueryLastPendingLogicCallByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastPendingLogicCallByAddrRequest>): QueryLastPendingLogicCallByAddrRequest;
    fromAmino(object: QueryLastPendingLogicCallByAddrRequestAmino): QueryLastPendingLogicCallByAddrRequest;
    toAmino(message: QueryLastPendingLogicCallByAddrRequest): QueryLastPendingLogicCallByAddrRequestAmino;
    fromAminoMsg(object: QueryLastPendingLogicCallByAddrRequestAminoMsg): QueryLastPendingLogicCallByAddrRequest;
    fromProtoMsg(message: QueryLastPendingLogicCallByAddrRequestProtoMsg): QueryLastPendingLogicCallByAddrRequest;
    toProto(message: QueryLastPendingLogicCallByAddrRequest): Uint8Array;
    toProtoMsg(message: QueryLastPendingLogicCallByAddrRequest): QueryLastPendingLogicCallByAddrRequestProtoMsg;
};
export declare const QueryLastPendingLogicCallByAddrResponse: {
    encode(message: QueryLastPendingLogicCallByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastPendingLogicCallByAddrResponse>): QueryLastPendingLogicCallByAddrResponse;
    fromAmino(object: QueryLastPendingLogicCallByAddrResponseAmino): QueryLastPendingLogicCallByAddrResponse;
    toAmino(message: QueryLastPendingLogicCallByAddrResponse): QueryLastPendingLogicCallByAddrResponseAmino;
    fromAminoMsg(object: QueryLastPendingLogicCallByAddrResponseAminoMsg): QueryLastPendingLogicCallByAddrResponse;
    fromProtoMsg(message: QueryLastPendingLogicCallByAddrResponseProtoMsg): QueryLastPendingLogicCallByAddrResponse;
    toProto(message: QueryLastPendingLogicCallByAddrResponse): Uint8Array;
    toProtoMsg(message: QueryLastPendingLogicCallByAddrResponse): QueryLastPendingLogicCallByAddrResponseProtoMsg;
};
export declare const QueryOutgoingTxBatchesRequest: {
    encode(_: QueryOutgoingTxBatchesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest;
    fromPartial(_: DeepPartial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest;
    fromAmino(_: QueryOutgoingTxBatchesRequestAmino): QueryOutgoingTxBatchesRequest;
    toAmino(_: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestAmino;
    fromAminoMsg(object: QueryOutgoingTxBatchesRequestAminoMsg): QueryOutgoingTxBatchesRequest;
    fromProtoMsg(message: QueryOutgoingTxBatchesRequestProtoMsg): QueryOutgoingTxBatchesRequest;
    toProto(message: QueryOutgoingTxBatchesRequest): Uint8Array;
    toProtoMsg(message: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestProtoMsg;
};
export declare const QueryOutgoingTxBatchesResponse: {
    encode(message: QueryOutgoingTxBatchesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse;
    fromPartial(object: DeepPartial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse;
    fromAmino(object: QueryOutgoingTxBatchesResponseAmino): QueryOutgoingTxBatchesResponse;
    toAmino(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseAmino;
    fromAminoMsg(object: QueryOutgoingTxBatchesResponseAminoMsg): QueryOutgoingTxBatchesResponse;
    fromProtoMsg(message: QueryOutgoingTxBatchesResponseProtoMsg): QueryOutgoingTxBatchesResponse;
    toProto(message: QueryOutgoingTxBatchesResponse): Uint8Array;
    toProtoMsg(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseProtoMsg;
};
export declare const QueryOutgoingLogicCallsRequest: {
    encode(_: QueryOutgoingLogicCallsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsRequest;
    fromPartial(_: DeepPartial<QueryOutgoingLogicCallsRequest>): QueryOutgoingLogicCallsRequest;
    fromAmino(_: QueryOutgoingLogicCallsRequestAmino): QueryOutgoingLogicCallsRequest;
    toAmino(_: QueryOutgoingLogicCallsRequest): QueryOutgoingLogicCallsRequestAmino;
    fromAminoMsg(object: QueryOutgoingLogicCallsRequestAminoMsg): QueryOutgoingLogicCallsRequest;
    fromProtoMsg(message: QueryOutgoingLogicCallsRequestProtoMsg): QueryOutgoingLogicCallsRequest;
    toProto(message: QueryOutgoingLogicCallsRequest): Uint8Array;
    toProtoMsg(message: QueryOutgoingLogicCallsRequest): QueryOutgoingLogicCallsRequestProtoMsg;
};
export declare const QueryOutgoingLogicCallsResponse: {
    encode(message: QueryOutgoingLogicCallsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsResponse;
    fromPartial(object: DeepPartial<QueryOutgoingLogicCallsResponse>): QueryOutgoingLogicCallsResponse;
    fromAmino(object: QueryOutgoingLogicCallsResponseAmino): QueryOutgoingLogicCallsResponse;
    toAmino(message: QueryOutgoingLogicCallsResponse): QueryOutgoingLogicCallsResponseAmino;
    fromAminoMsg(object: QueryOutgoingLogicCallsResponseAminoMsg): QueryOutgoingLogicCallsResponse;
    fromProtoMsg(message: QueryOutgoingLogicCallsResponseProtoMsg): QueryOutgoingLogicCallsResponse;
    toProto(message: QueryOutgoingLogicCallsResponse): Uint8Array;
    toProtoMsg(message: QueryOutgoingLogicCallsResponse): QueryOutgoingLogicCallsResponseProtoMsg;
};
export declare const QueryBatchRequestByNonceRequest: {
    encode(message: QueryBatchRequestByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest;
    fromAmino(object: QueryBatchRequestByNonceRequestAmino): QueryBatchRequestByNonceRequest;
    toAmino(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestAmino;
    fromAminoMsg(object: QueryBatchRequestByNonceRequestAminoMsg): QueryBatchRequestByNonceRequest;
    fromProtoMsg(message: QueryBatchRequestByNonceRequestProtoMsg): QueryBatchRequestByNonceRequest;
    toProto(message: QueryBatchRequestByNonceRequest): Uint8Array;
    toProtoMsg(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestProtoMsg;
};
export declare const QueryBatchRequestByNonceResponse: {
    encode(message: QueryBatchRequestByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse;
    fromPartial(object: DeepPartial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse;
    fromAmino(object: QueryBatchRequestByNonceResponseAmino): QueryBatchRequestByNonceResponse;
    toAmino(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseAmino;
    fromAminoMsg(object: QueryBatchRequestByNonceResponseAminoMsg): QueryBatchRequestByNonceResponse;
    fromProtoMsg(message: QueryBatchRequestByNonceResponseProtoMsg): QueryBatchRequestByNonceResponse;
    toProto(message: QueryBatchRequestByNonceResponse): Uint8Array;
    toProtoMsg(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseProtoMsg;
};
export declare const QueryBatchConfirmsRequest: {
    encode(message: QueryBatchConfirmsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsRequest;
    fromPartial(object: DeepPartial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest;
    fromAmino(object: QueryBatchConfirmsRequestAmino): QueryBatchConfirmsRequest;
    toAmino(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestAmino;
    fromAminoMsg(object: QueryBatchConfirmsRequestAminoMsg): QueryBatchConfirmsRequest;
    fromProtoMsg(message: QueryBatchConfirmsRequestProtoMsg): QueryBatchConfirmsRequest;
    toProto(message: QueryBatchConfirmsRequest): Uint8Array;
    toProtoMsg(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestProtoMsg;
};
export declare const QueryBatchConfirmsResponse: {
    encode(message: QueryBatchConfirmsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsResponse;
    fromPartial(object: DeepPartial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse;
    fromAmino(object: QueryBatchConfirmsResponseAmino): QueryBatchConfirmsResponse;
    toAmino(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseAmino;
    fromAminoMsg(object: QueryBatchConfirmsResponseAminoMsg): QueryBatchConfirmsResponse;
    fromProtoMsg(message: QueryBatchConfirmsResponseProtoMsg): QueryBatchConfirmsResponse;
    toProto(message: QueryBatchConfirmsResponse): Uint8Array;
    toProtoMsg(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseProtoMsg;
};
export declare const QueryLogicConfirmsRequest: {
    encode(message: QueryLogicConfirmsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLogicConfirmsRequest;
    fromPartial(object: DeepPartial<QueryLogicConfirmsRequest>): QueryLogicConfirmsRequest;
    fromAmino(object: QueryLogicConfirmsRequestAmino): QueryLogicConfirmsRequest;
    toAmino(message: QueryLogicConfirmsRequest): QueryLogicConfirmsRequestAmino;
    fromAminoMsg(object: QueryLogicConfirmsRequestAminoMsg): QueryLogicConfirmsRequest;
    fromProtoMsg(message: QueryLogicConfirmsRequestProtoMsg): QueryLogicConfirmsRequest;
    toProto(message: QueryLogicConfirmsRequest): Uint8Array;
    toProtoMsg(message: QueryLogicConfirmsRequest): QueryLogicConfirmsRequestProtoMsg;
};
export declare const QueryLogicConfirmsResponse: {
    encode(message: QueryLogicConfirmsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLogicConfirmsResponse;
    fromPartial(object: DeepPartial<QueryLogicConfirmsResponse>): QueryLogicConfirmsResponse;
    fromAmino(object: QueryLogicConfirmsResponseAmino): QueryLogicConfirmsResponse;
    toAmino(message: QueryLogicConfirmsResponse): QueryLogicConfirmsResponseAmino;
    fromAminoMsg(object: QueryLogicConfirmsResponseAminoMsg): QueryLogicConfirmsResponse;
    fromProtoMsg(message: QueryLogicConfirmsResponseProtoMsg): QueryLogicConfirmsResponse;
    toProto(message: QueryLogicConfirmsResponse): Uint8Array;
    toProtoMsg(message: QueryLogicConfirmsResponse): QueryLogicConfirmsResponseProtoMsg;
};
export declare const QueryLastEventNonceByAddrRequest: {
    encode(message: QueryLastEventNonceByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrRequest;
    fromPartial(object: DeepPartial<QueryLastEventNonceByAddrRequest>): QueryLastEventNonceByAddrRequest;
    fromAmino(object: QueryLastEventNonceByAddrRequestAmino): QueryLastEventNonceByAddrRequest;
    toAmino(message: QueryLastEventNonceByAddrRequest): QueryLastEventNonceByAddrRequestAmino;
    fromAminoMsg(object: QueryLastEventNonceByAddrRequestAminoMsg): QueryLastEventNonceByAddrRequest;
    fromProtoMsg(message: QueryLastEventNonceByAddrRequestProtoMsg): QueryLastEventNonceByAddrRequest;
    toProto(message: QueryLastEventNonceByAddrRequest): Uint8Array;
    toProtoMsg(message: QueryLastEventNonceByAddrRequest): QueryLastEventNonceByAddrRequestProtoMsg;
};
export declare const QueryLastEventNonceByAddrResponse: {
    encode(message: QueryLastEventNonceByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrResponse;
    fromPartial(object: DeepPartial<QueryLastEventNonceByAddrResponse>): QueryLastEventNonceByAddrResponse;
    fromAmino(object: QueryLastEventNonceByAddrResponseAmino): QueryLastEventNonceByAddrResponse;
    toAmino(message: QueryLastEventNonceByAddrResponse): QueryLastEventNonceByAddrResponseAmino;
    fromAminoMsg(object: QueryLastEventNonceByAddrResponseAminoMsg): QueryLastEventNonceByAddrResponse;
    fromProtoMsg(message: QueryLastEventNonceByAddrResponseProtoMsg): QueryLastEventNonceByAddrResponse;
    toProto(message: QueryLastEventNonceByAddrResponse): Uint8Array;
    toProtoMsg(message: QueryLastEventNonceByAddrResponse): QueryLastEventNonceByAddrResponseProtoMsg;
};
export declare const QueryERC20ToDenomRequest: {
    encode(message: QueryERC20ToDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomRequest;
    fromPartial(object: DeepPartial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest;
    fromAmino(object: QueryERC20ToDenomRequestAmino): QueryERC20ToDenomRequest;
    toAmino(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestAmino;
    fromAminoMsg(object: QueryERC20ToDenomRequestAminoMsg): QueryERC20ToDenomRequest;
    fromProtoMsg(message: QueryERC20ToDenomRequestProtoMsg): QueryERC20ToDenomRequest;
    toProto(message: QueryERC20ToDenomRequest): Uint8Array;
    toProtoMsg(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestProtoMsg;
};
export declare const QueryERC20ToDenomResponse: {
    encode(message: QueryERC20ToDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomResponse;
    fromPartial(object: DeepPartial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse;
    fromAmino(object: QueryERC20ToDenomResponseAmino): QueryERC20ToDenomResponse;
    toAmino(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseAmino;
    fromAminoMsg(object: QueryERC20ToDenomResponseAminoMsg): QueryERC20ToDenomResponse;
    fromProtoMsg(message: QueryERC20ToDenomResponseProtoMsg): QueryERC20ToDenomResponse;
    toProto(message: QueryERC20ToDenomResponse): Uint8Array;
    toProtoMsg(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseProtoMsg;
};
export declare const QueryDenomToERC20Request: {
    encode(message: QueryDenomToERC20Request, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Request;
    fromPartial(object: DeepPartial<QueryDenomToERC20Request>): QueryDenomToERC20Request;
    fromAmino(object: QueryDenomToERC20RequestAmino): QueryDenomToERC20Request;
    toAmino(message: QueryDenomToERC20Request): QueryDenomToERC20RequestAmino;
    fromAminoMsg(object: QueryDenomToERC20RequestAminoMsg): QueryDenomToERC20Request;
    fromProtoMsg(message: QueryDenomToERC20RequestProtoMsg): QueryDenomToERC20Request;
    toProto(message: QueryDenomToERC20Request): Uint8Array;
    toProtoMsg(message: QueryDenomToERC20Request): QueryDenomToERC20RequestProtoMsg;
};
export declare const QueryDenomToERC20Response: {
    encode(message: QueryDenomToERC20Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Response;
    fromPartial(object: DeepPartial<QueryDenomToERC20Response>): QueryDenomToERC20Response;
    fromAmino(object: QueryDenomToERC20ResponseAmino): QueryDenomToERC20Response;
    toAmino(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseAmino;
    fromAminoMsg(object: QueryDenomToERC20ResponseAminoMsg): QueryDenomToERC20Response;
    fromProtoMsg(message: QueryDenomToERC20ResponseProtoMsg): QueryDenomToERC20Response;
    toProto(message: QueryDenomToERC20Response): Uint8Array;
    toProtoMsg(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseProtoMsg;
};
export declare const QueryAttestationsRequest: {
    encode(message: QueryAttestationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsRequest;
    fromPartial(object: DeepPartial<QueryAttestationsRequest>): QueryAttestationsRequest;
    fromAmino(object: QueryAttestationsRequestAmino): QueryAttestationsRequest;
    toAmino(message: QueryAttestationsRequest): QueryAttestationsRequestAmino;
    fromAminoMsg(object: QueryAttestationsRequestAminoMsg): QueryAttestationsRequest;
    fromProtoMsg(message: QueryAttestationsRequestProtoMsg): QueryAttestationsRequest;
    toProto(message: QueryAttestationsRequest): Uint8Array;
    toProtoMsg(message: QueryAttestationsRequest): QueryAttestationsRequestProtoMsg;
};
export declare const QueryAttestationsResponse: {
    encode(message: QueryAttestationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsResponse;
    fromPartial(object: DeepPartial<QueryAttestationsResponse>): QueryAttestationsResponse;
    fromAmino(object: QueryAttestationsResponseAmino): QueryAttestationsResponse;
    toAmino(message: QueryAttestationsResponse): QueryAttestationsResponseAmino;
    fromAminoMsg(object: QueryAttestationsResponseAminoMsg): QueryAttestationsResponse;
    fromProtoMsg(message: QueryAttestationsResponseProtoMsg): QueryAttestationsResponse;
    toProto(message: QueryAttestationsResponse): Uint8Array;
    toProtoMsg(message: QueryAttestationsResponse): QueryAttestationsResponseProtoMsg;
};
export declare const QueryDelegateKeysByValidatorAddress: {
    encode(message: QueryDelegateKeysByValidatorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddress;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress;
    fromAmino(object: QueryDelegateKeysByValidatorAddressAmino): QueryDelegateKeysByValidatorAddress;
    toAmino(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressAmino;
    fromAminoMsg(object: QueryDelegateKeysByValidatorAddressAminoMsg): QueryDelegateKeysByValidatorAddress;
    fromProtoMsg(message: QueryDelegateKeysByValidatorAddressProtoMsg): QueryDelegateKeysByValidatorAddress;
    toProto(message: QueryDelegateKeysByValidatorAddress): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressProtoMsg;
};
export declare const QueryDelegateKeysByValidatorAddressResponse: {
    encode(message: QueryDelegateKeysByValidatorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddressResponse;
    fromPartial(object: DeepPartial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse;
    fromAmino(object: QueryDelegateKeysByValidatorAddressResponseAmino): QueryDelegateKeysByValidatorAddressResponse;
    toAmino(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseAmino;
    fromAminoMsg(object: QueryDelegateKeysByValidatorAddressResponseAminoMsg): QueryDelegateKeysByValidatorAddressResponse;
    fromProtoMsg(message: QueryDelegateKeysByValidatorAddressResponseProtoMsg): QueryDelegateKeysByValidatorAddressResponse;
    toProto(message: QueryDelegateKeysByValidatorAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseProtoMsg;
};
export declare const QueryDelegateKeysByEthAddress: {
    encode(message: QueryDelegateKeysByEthAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddress;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress;
    fromAmino(object: QueryDelegateKeysByEthAddressAmino): QueryDelegateKeysByEthAddress;
    toAmino(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressAmino;
    fromAminoMsg(object: QueryDelegateKeysByEthAddressAminoMsg): QueryDelegateKeysByEthAddress;
    fromProtoMsg(message: QueryDelegateKeysByEthAddressProtoMsg): QueryDelegateKeysByEthAddress;
    toProto(message: QueryDelegateKeysByEthAddress): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressProtoMsg;
};
export declare const QueryDelegateKeysByEthAddressResponse: {
    encode(message: QueryDelegateKeysByEthAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddressResponse;
    fromPartial(object: DeepPartial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse;
    fromAmino(object: QueryDelegateKeysByEthAddressResponseAmino): QueryDelegateKeysByEthAddressResponse;
    toAmino(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseAmino;
    fromAminoMsg(object: QueryDelegateKeysByEthAddressResponseAminoMsg): QueryDelegateKeysByEthAddressResponse;
    fromProtoMsg(message: QueryDelegateKeysByEthAddressResponseProtoMsg): QueryDelegateKeysByEthAddressResponse;
    toProto(message: QueryDelegateKeysByEthAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseProtoMsg;
};
export declare const QueryDelegateKeysByOrchestratorAddress: {
    encode(message: QueryDelegateKeysByOrchestratorAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddress;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress;
    fromAmino(object: QueryDelegateKeysByOrchestratorAddressAmino): QueryDelegateKeysByOrchestratorAddress;
    toAmino(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressAmino;
    fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressAminoMsg): QueryDelegateKeysByOrchestratorAddress;
    fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressProtoMsg): QueryDelegateKeysByOrchestratorAddress;
    toProto(message: QueryDelegateKeysByOrchestratorAddress): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressProtoMsg;
};
export declare const QueryDelegateKeysByOrchestratorAddressResponse: {
    encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddressResponse;
    fromPartial(object: DeepPartial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse;
    fromAmino(object: QueryDelegateKeysByOrchestratorAddressResponseAmino): QueryDelegateKeysByOrchestratorAddressResponse;
    toAmino(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseAmino;
    fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): QueryDelegateKeysByOrchestratorAddressResponse;
    fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): QueryDelegateKeysByOrchestratorAddressResponse;
    toProto(message: QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseProtoMsg;
};
export declare const QueryPendingSendToEth: {
    encode(message: QueryPendingSendToEth, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEth;
    fromPartial(object: DeepPartial<QueryPendingSendToEth>): QueryPendingSendToEth;
    fromAmino(object: QueryPendingSendToEthAmino): QueryPendingSendToEth;
    toAmino(message: QueryPendingSendToEth): QueryPendingSendToEthAmino;
    fromAminoMsg(object: QueryPendingSendToEthAminoMsg): QueryPendingSendToEth;
    fromProtoMsg(message: QueryPendingSendToEthProtoMsg): QueryPendingSendToEth;
    toProto(message: QueryPendingSendToEth): Uint8Array;
    toProtoMsg(message: QueryPendingSendToEth): QueryPendingSendToEthProtoMsg;
};
export declare const QueryPendingSendToEthResponse: {
    encode(message: QueryPendingSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEthResponse;
    fromPartial(object: DeepPartial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse;
    fromAmino(object: QueryPendingSendToEthResponseAmino): QueryPendingSendToEthResponse;
    toAmino(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseAmino;
    fromAminoMsg(object: QueryPendingSendToEthResponseAminoMsg): QueryPendingSendToEthResponse;
    fromProtoMsg(message: QueryPendingSendToEthResponseProtoMsg): QueryPendingSendToEthResponse;
    toProto(message: QueryPendingSendToEthResponse): Uint8Array;
    toProtoMsg(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseProtoMsg;
};
