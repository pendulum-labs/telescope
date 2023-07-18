/// <reference types="long" />
import * as _49 from "./v1/attestation";
import * as _50 from "./v1/batch";
import * as _51 from "./v1/ethereum_signer";
import * as _52 from "./v1/genesis";
import * as _53 from "./v1/msgs";
import * as _54 from "./v1/pool";
import * as _55 from "./v1/query";
import * as _56 from "./v1/types";
import * as _106 from "./v1/query.rpc.Query";
import * as _107 from "./v1/msgs.rpc.msg";
export declare namespace gravity {
    const v1: {
        MsgClientImpl: typeof _107.MsgClientImpl;
        QueryClientImpl: typeof _106.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
            currentValset(request?: _55.QueryCurrentValsetRequest): Promise<_55.QueryCurrentValsetResponse>;
            valsetRequest(request: _55.QueryValsetRequestRequest): Promise<_55.QueryValsetRequestResponse>;
            valsetConfirm(request: _55.QueryValsetConfirmRequest): Promise<_55.QueryValsetConfirmResponse>;
            valsetConfirmsByNonce(request: _55.QueryValsetConfirmsByNonceRequest): Promise<_55.QueryValsetConfirmsByNonceResponse>;
            lastValsetRequests(request?: _55.QueryLastValsetRequestsRequest): Promise<_55.QueryLastValsetRequestsResponse>;
            lastPendingValsetRequestByAddr(request: _55.QueryLastPendingValsetRequestByAddrRequest): Promise<_55.QueryLastPendingValsetRequestByAddrResponse>;
            lastPendingBatchRequestByAddr(request: _55.QueryLastPendingBatchRequestByAddrRequest): Promise<_55.QueryLastPendingBatchRequestByAddrResponse>;
            lastPendingLogicCallByAddr(request: _55.QueryLastPendingLogicCallByAddrRequest): Promise<_55.QueryLastPendingLogicCallByAddrResponse>;
            lastEventNonceByAddr(request: _55.QueryLastEventNonceByAddrRequest): Promise<_55.QueryLastEventNonceByAddrResponse>;
            batchFees(request?: _55.QueryBatchFeeRequest): Promise<_55.QueryBatchFeeResponse>;
            outgoingTxBatches(request?: _55.QueryOutgoingTxBatchesRequest): Promise<_55.QueryOutgoingTxBatchesResponse>;
            outgoingLogicCalls(request?: _55.QueryOutgoingLogicCallsRequest): Promise<_55.QueryOutgoingLogicCallsResponse>;
            batchRequestByNonce(request: _55.QueryBatchRequestByNonceRequest): Promise<_55.QueryBatchRequestByNonceResponse>;
            batchConfirms(request: _55.QueryBatchConfirmsRequest): Promise<_55.QueryBatchConfirmsResponse>;
            logicConfirms(request: _55.QueryLogicConfirmsRequest): Promise<_55.QueryLogicConfirmsResponse>;
            eRC20ToDenom(request: _55.QueryERC20ToDenomRequest): Promise<_55.QueryERC20ToDenomResponse>;
            denomToERC20(request: _55.QueryDenomToERC20Request): Promise<_55.QueryDenomToERC20Response>;
            getAttestations(request: _55.QueryAttestationsRequest): Promise<_55.QueryAttestationsResponse>;
            getDelegateKeyByValidator(request: _55.QueryDelegateKeysByValidatorAddress): Promise<_55.QueryDelegateKeysByValidatorAddressResponse>;
            getDelegateKeyByEth(request: _55.QueryDelegateKeysByEthAddress): Promise<_55.QueryDelegateKeysByEthAddressResponse>;
            getDelegateKeyByOrchestrator(request: _55.QueryDelegateKeysByOrchestratorAddress): Promise<_55.QueryDelegateKeysByOrchestratorAddressResponse>;
            getPendingSendToEth(request: _55.QueryPendingSendToEth): Promise<_55.QueryPendingSendToEthResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                valsetConfirm(value: _53.MsgValsetConfirm): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToEth(value: _53.MsgSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                requestBatch(value: _53.MsgRequestBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmBatch(value: _53.MsgConfirmBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmLogicCall(value: _53.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToCosmosClaim(value: _53.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                batchSendToEthClaim(value: _53.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                valsetUpdateClaim(value: _53.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                eRC20DeployedClaim(value: _53.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                logicCallExecutedClaim(value: _53.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOrchestratorAddress(value: _53.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelSendToEth(value: _53.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitBadSignatureEvidence(value: _53.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                valsetConfirm(value: _53.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _53.MsgValsetConfirm;
                };
                sendToEth(value: _53.MsgSendToEth): {
                    typeUrl: string;
                    value: _53.MsgSendToEth;
                };
                requestBatch(value: _53.MsgRequestBatch): {
                    typeUrl: string;
                    value: _53.MsgRequestBatch;
                };
                confirmBatch(value: _53.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _53.MsgConfirmBatch;
                };
                confirmLogicCall(value: _53.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _53.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _53.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _53.MsgSendToCosmosClaim;
                };
                batchSendToEthClaim(value: _53.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _53.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _53.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _53.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _53.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _53.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _53.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _53.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _53.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _53.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _53.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _53.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _53.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _53.MsgSubmitBadSignatureEvidence;
                };
            };
            fromPartial: {
                valsetConfirm(value: _53.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _53.MsgValsetConfirm;
                };
                sendToEth(value: _53.MsgSendToEth): {
                    typeUrl: string;
                    value: _53.MsgSendToEth;
                };
                requestBatch(value: _53.MsgRequestBatch): {
                    typeUrl: string;
                    value: _53.MsgRequestBatch;
                };
                confirmBatch(value: _53.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _53.MsgConfirmBatch;
                };
                confirmLogicCall(value: _53.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _53.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _53.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _53.MsgSendToCosmosClaim;
                };
                batchSendToEthClaim(value: _53.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _53.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _53.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _53.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _53.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _53.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _53.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _53.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _53.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _53.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _53.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _53.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _53.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _53.MsgSubmitBadSignatureEvidence;
                };
            };
        };
        AminoConverter: {
            "/gravity.v1.MsgValsetConfirm": {
                aminoType: string;
                toAmino: (message: _53.MsgValsetConfirm) => _53.MsgValsetConfirmAmino;
                fromAmino: (object: _53.MsgValsetConfirmAmino) => _53.MsgValsetConfirm;
            };
            "/gravity.v1.MsgSendToEth": {
                aminoType: string;
                toAmino: (message: _53.MsgSendToEth) => _53.MsgSendToEthAmino;
                fromAmino: (object: _53.MsgSendToEthAmino) => _53.MsgSendToEth;
            };
            "/gravity.v1.MsgRequestBatch": {
                aminoType: string;
                toAmino: (message: _53.MsgRequestBatch) => _53.MsgRequestBatchAmino;
                fromAmino: (object: _53.MsgRequestBatchAmino) => _53.MsgRequestBatch;
            };
            "/gravity.v1.MsgConfirmBatch": {
                aminoType: string;
                toAmino: (message: _53.MsgConfirmBatch) => _53.MsgConfirmBatchAmino;
                fromAmino: (object: _53.MsgConfirmBatchAmino) => _53.MsgConfirmBatch;
            };
            "/gravity.v1.MsgConfirmLogicCall": {
                aminoType: string;
                toAmino: (message: _53.MsgConfirmLogicCall) => _53.MsgConfirmLogicCallAmino;
                fromAmino: (object: _53.MsgConfirmLogicCallAmino) => _53.MsgConfirmLogicCall;
            };
            "/gravity.v1.MsgSendToCosmosClaim": {
                aminoType: string;
                toAmino: (message: _53.MsgSendToCosmosClaim) => _53.MsgSendToCosmosClaimAmino;
                fromAmino: (object: _53.MsgSendToCosmosClaimAmino) => _53.MsgSendToCosmosClaim;
            };
            "/gravity.v1.MsgBatchSendToEthClaim": {
                aminoType: string;
                toAmino: (message: _53.MsgBatchSendToEthClaim) => _53.MsgBatchSendToEthClaimAmino;
                fromAmino: (object: _53.MsgBatchSendToEthClaimAmino) => _53.MsgBatchSendToEthClaim;
            };
            "/gravity.v1.MsgValsetUpdatedClaim": {
                aminoType: string;
                toAmino: (message: _53.MsgValsetUpdatedClaim) => _53.MsgValsetUpdatedClaimAmino;
                fromAmino: (object: _53.MsgValsetUpdatedClaimAmino) => _53.MsgValsetUpdatedClaim;
            };
            "/gravity.v1.MsgERC20DeployedClaim": {
                aminoType: string;
                toAmino: (message: _53.MsgERC20DeployedClaim) => _53.MsgERC20DeployedClaimAmino;
                fromAmino: (object: _53.MsgERC20DeployedClaimAmino) => _53.MsgERC20DeployedClaim;
            };
            "/gravity.v1.MsgLogicCallExecutedClaim": {
                aminoType: string;
                toAmino: (message: _53.MsgLogicCallExecutedClaim) => _53.MsgLogicCallExecutedClaimAmino;
                fromAmino: (object: _53.MsgLogicCallExecutedClaimAmino) => _53.MsgLogicCallExecutedClaim;
            };
            "/gravity.v1.MsgSetOrchestratorAddress": {
                aminoType: string;
                toAmino: (message: _53.MsgSetOrchestratorAddress) => _53.MsgSetOrchestratorAddressAmino;
                fromAmino: (object: _53.MsgSetOrchestratorAddressAmino) => _53.MsgSetOrchestratorAddress;
            };
            "/gravity.v1.MsgCancelSendToEth": {
                aminoType: string;
                toAmino: (message: _53.MsgCancelSendToEth) => _53.MsgCancelSendToEthAmino;
                fromAmino: (object: _53.MsgCancelSendToEthAmino) => _53.MsgCancelSendToEth;
            };
            "/gravity.v1.MsgSubmitBadSignatureEvidence": {
                aminoType: string;
                toAmino: (message: _53.MsgSubmitBadSignatureEvidence) => _53.MsgSubmitBadSignatureEvidenceAmino;
                fromAmino: (object: _53.MsgSubmitBadSignatureEvidenceAmino) => _53.MsgSubmitBadSignatureEvidence;
            };
        };
        BridgeValidator: {
            encode(message: _56.BridgeValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.BridgeValidator;
            fromPartial(object: {
                power?: string | number | import("long").Long;
                ethereumAddress?: string;
            }): _56.BridgeValidator;
            fromAmino(object: _56.BridgeValidatorAmino): _56.BridgeValidator;
            toAmino(message: _56.BridgeValidator): _56.BridgeValidatorAmino;
            fromAminoMsg(object: _56.BridgeValidatorAminoMsg): _56.BridgeValidator;
            fromProtoMsg(message: _56.BridgeValidatorProtoMsg): _56.BridgeValidator;
            toProto(message: _56.BridgeValidator): Uint8Array;
            toProtoMsg(message: _56.BridgeValidator): _56.BridgeValidatorProtoMsg;
        };
        Valset: {
            encode(message: _56.Valset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Valset;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                members?: {
                    power?: string | number | import("long").Long;
                    ethereumAddress?: string;
                }[];
                height?: string | number | import("long").Long;
                rewardAmount?: string;
                rewardToken?: string;
            }): _56.Valset;
            fromAmino(object: _56.ValsetAmino): _56.Valset;
            toAmino(message: _56.Valset): _56.ValsetAmino;
            fromAminoMsg(object: _56.ValsetAminoMsg): _56.Valset;
            fromProtoMsg(message: _56.ValsetProtoMsg): _56.Valset;
            toProto(message: _56.Valset): Uint8Array;
            toProtoMsg(message: _56.Valset): _56.ValsetProtoMsg;
        };
        LastObservedEthereumBlockHeight: {
            encode(message: _56.LastObservedEthereumBlockHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.LastObservedEthereumBlockHeight;
            fromPartial(object: {
                cosmosBlockHeight?: string | number | import("long").Long;
                ethereumBlockHeight?: string | number | import("long").Long;
            }): _56.LastObservedEthereumBlockHeight;
            fromAmino(object: _56.LastObservedEthereumBlockHeightAmino): _56.LastObservedEthereumBlockHeight;
            toAmino(message: _56.LastObservedEthereumBlockHeight): _56.LastObservedEthereumBlockHeightAmino;
            fromAminoMsg(object: _56.LastObservedEthereumBlockHeightAminoMsg): _56.LastObservedEthereumBlockHeight;
            fromProtoMsg(message: _56.LastObservedEthereumBlockHeightProtoMsg): _56.LastObservedEthereumBlockHeight;
            toProto(message: _56.LastObservedEthereumBlockHeight): Uint8Array;
            toProtoMsg(message: _56.LastObservedEthereumBlockHeight): _56.LastObservedEthereumBlockHeightProtoMsg;
        };
        ERC20ToDenom: {
            encode(message: _56.ERC20ToDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ERC20ToDenom;
            fromPartial(object: {
                erc20?: string;
                denom?: string;
            }): _56.ERC20ToDenom;
            fromAmino(object: _56.ERC20ToDenomAmino): _56.ERC20ToDenom;
            toAmino(message: _56.ERC20ToDenom): _56.ERC20ToDenomAmino;
            fromAminoMsg(object: _56.ERC20ToDenomAminoMsg): _56.ERC20ToDenom;
            fromProtoMsg(message: _56.ERC20ToDenomProtoMsg): _56.ERC20ToDenom;
            toProto(message: _56.ERC20ToDenom): Uint8Array;
            toProtoMsg(message: _56.ERC20ToDenom): _56.ERC20ToDenomProtoMsg;
        };
        UnhaltBridgeProposal: {
            encode(message: _56.UnhaltBridgeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.UnhaltBridgeProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                targetNonce?: string | number | import("long").Long;
            }): _56.UnhaltBridgeProposal;
            fromAmino(object: _56.UnhaltBridgeProposalAmino): _56.UnhaltBridgeProposal;
            toAmino(message: _56.UnhaltBridgeProposal): _56.UnhaltBridgeProposalAmino;
            fromAminoMsg(object: _56.UnhaltBridgeProposalAminoMsg): _56.UnhaltBridgeProposal;
            fromProtoMsg(message: _56.UnhaltBridgeProposalProtoMsg): _56.UnhaltBridgeProposal;
            toProto(message: _56.UnhaltBridgeProposal): Uint8Array;
            toProtoMsg(message: _56.UnhaltBridgeProposal): _56.UnhaltBridgeProposalProtoMsg;
        };
        AirdropProposal: {
            encode(message: _56.AirdropProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.AirdropProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                denom?: string;
                recipients?: Uint8Array;
                amounts?: (string | number | import("long").Long)[];
            }): _56.AirdropProposal;
            fromAmino(object: _56.AirdropProposalAmino): _56.AirdropProposal;
            toAmino(message: _56.AirdropProposal): _56.AirdropProposalAmino;
            fromAminoMsg(object: _56.AirdropProposalAminoMsg): _56.AirdropProposal;
            fromProtoMsg(message: _56.AirdropProposalProtoMsg): _56.AirdropProposal;
            toProto(message: _56.AirdropProposal): Uint8Array;
            toProtoMsg(message: _56.AirdropProposal): _56.AirdropProposalProtoMsg;
        };
        IBCMetadataProposal: {
            encode(message: _56.IBCMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.IBCMetadataProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                metadata?: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                };
                ibcDenom?: string;
            }): _56.IBCMetadataProposal;
            fromAmino(object: _56.IBCMetadataProposalAmino): _56.IBCMetadataProposal;
            toAmino(message: _56.IBCMetadataProposal): _56.IBCMetadataProposalAmino;
            fromAminoMsg(object: _56.IBCMetadataProposalAminoMsg): _56.IBCMetadataProposal;
            fromProtoMsg(message: _56.IBCMetadataProposalProtoMsg): _56.IBCMetadataProposal;
            toProto(message: _56.IBCMetadataProposal): Uint8Array;
            toProtoMsg(message: _56.IBCMetadataProposal): _56.IBCMetadataProposalProtoMsg;
        };
        QueryParamsRequest: {
            encode(_: _55.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsRequest;
            fromPartial(_: {}): _55.QueryParamsRequest;
            fromAmino(_: _55.QueryParamsRequestAmino): _55.QueryParamsRequest;
            toAmino(_: _55.QueryParamsRequest): _55.QueryParamsRequestAmino;
            fromAminoMsg(object: _55.QueryParamsRequestAminoMsg): _55.QueryParamsRequest;
            fromProtoMsg(message: _55.QueryParamsRequestProtoMsg): _55.QueryParamsRequest;
            toProto(message: _55.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            encode(message: _55.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsResponse;
            fromPartial(object: {
                params?: {
                    gravityId?: string;
                    contractSourceHash?: string;
                    bridgeEthereumAddress?: string;
                    bridgeChainId?: string | number | import("long").Long;
                    signedValsetsWindow?: string | number | import("long").Long;
                    signedBatchesWindow?: string | number | import("long").Long;
                    signedLogicCallsWindow?: string | number | import("long").Long;
                    targetBatchTimeout?: string | number | import("long").Long;
                    averageBlockTime?: string | number | import("long").Long;
                    averageEthereumBlockTime?: string | number | import("long").Long;
                    slashFractionValset?: Uint8Array;
                    slashFractionBatch?: Uint8Array;
                    slashFractionLogicCall?: Uint8Array;
                    unbondSlashingValsetsWindow?: string | number | import("long").Long;
                    slashFractionBadEthSignature?: Uint8Array;
                    valsetReward?: {
                        denom?: string;
                        amount?: string;
                    };
                    bridgeActive?: boolean;
                    ethereumBlacklist?: string[];
                    erc20ToDenomPermanentSwap?: {
                        erc20?: string;
                        denom?: string;
                    };
                };
            }): _55.QueryParamsResponse;
            fromAmino(object: _55.QueryParamsResponseAmino): _55.QueryParamsResponse;
            toAmino(message: _55.QueryParamsResponse): _55.QueryParamsResponseAmino;
            fromAminoMsg(object: _55.QueryParamsResponseAminoMsg): _55.QueryParamsResponse;
            fromProtoMsg(message: _55.QueryParamsResponseProtoMsg): _55.QueryParamsResponse;
            toProto(message: _55.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseProtoMsg;
        };
        QueryCurrentValsetRequest: {
            encode(_: _55.QueryCurrentValsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryCurrentValsetRequest;
            fromPartial(_: {}): _55.QueryCurrentValsetRequest;
            fromAmino(_: _55.QueryCurrentValsetRequestAmino): _55.QueryCurrentValsetRequest;
            toAmino(_: _55.QueryCurrentValsetRequest): _55.QueryCurrentValsetRequestAmino;
            fromAminoMsg(object: _55.QueryCurrentValsetRequestAminoMsg): _55.QueryCurrentValsetRequest;
            fromProtoMsg(message: _55.QueryCurrentValsetRequestProtoMsg): _55.QueryCurrentValsetRequest;
            toProto(message: _55.QueryCurrentValsetRequest): Uint8Array;
            toProtoMsg(message: _55.QueryCurrentValsetRequest): _55.QueryCurrentValsetRequestProtoMsg;
        };
        QueryCurrentValsetResponse: {
            encode(message: _55.QueryCurrentValsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryCurrentValsetResponse;
            fromPartial(object: {
                valset?: {
                    nonce?: string | number | import("long").Long;
                    members?: {
                        power?: string | number | import("long").Long;
                        ethereumAddress?: string;
                    }[];
                    height?: string | number | import("long").Long;
                    rewardAmount?: string;
                    rewardToken?: string;
                };
            }): _55.QueryCurrentValsetResponse;
            fromAmino(object: _55.QueryCurrentValsetResponseAmino): _55.QueryCurrentValsetResponse;
            toAmino(message: _55.QueryCurrentValsetResponse): _55.QueryCurrentValsetResponseAmino;
            fromAminoMsg(object: _55.QueryCurrentValsetResponseAminoMsg): _55.QueryCurrentValsetResponse;
            fromProtoMsg(message: _55.QueryCurrentValsetResponseProtoMsg): _55.QueryCurrentValsetResponse;
            toProto(message: _55.QueryCurrentValsetResponse): Uint8Array;
            toProtoMsg(message: _55.QueryCurrentValsetResponse): _55.QueryCurrentValsetResponseProtoMsg;
        };
        QueryValsetRequestRequest: {
            encode(message: _55.QueryValsetRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryValsetRequestRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
            }): _55.QueryValsetRequestRequest;
            fromAmino(object: _55.QueryValsetRequestRequestAmino): _55.QueryValsetRequestRequest;
            toAmino(message: _55.QueryValsetRequestRequest): _55.QueryValsetRequestRequestAmino;
            fromAminoMsg(object: _55.QueryValsetRequestRequestAminoMsg): _55.QueryValsetRequestRequest;
            fromProtoMsg(message: _55.QueryValsetRequestRequestProtoMsg): _55.QueryValsetRequestRequest;
            toProto(message: _55.QueryValsetRequestRequest): Uint8Array;
            toProtoMsg(message: _55.QueryValsetRequestRequest): _55.QueryValsetRequestRequestProtoMsg;
        };
        QueryValsetRequestResponse: {
            encode(message: _55.QueryValsetRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryValsetRequestResponse;
            fromPartial(object: {
                valset?: {
                    nonce?: string | number | import("long").Long;
                    members?: {
                        power?: string | number | import("long").Long;
                        ethereumAddress?: string;
                    }[];
                    height?: string | number | import("long").Long;
                    rewardAmount?: string;
                    rewardToken?: string;
                };
            }): _55.QueryValsetRequestResponse;
            fromAmino(object: _55.QueryValsetRequestResponseAmino): _55.QueryValsetRequestResponse;
            toAmino(message: _55.QueryValsetRequestResponse): _55.QueryValsetRequestResponseAmino;
            fromAminoMsg(object: _55.QueryValsetRequestResponseAminoMsg): _55.QueryValsetRequestResponse;
            fromProtoMsg(message: _55.QueryValsetRequestResponseProtoMsg): _55.QueryValsetRequestResponse;
            toProto(message: _55.QueryValsetRequestResponse): Uint8Array;
            toProtoMsg(message: _55.QueryValsetRequestResponse): _55.QueryValsetRequestResponseProtoMsg;
        };
        QueryValsetConfirmRequest: {
            encode(message: _55.QueryValsetConfirmRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryValsetConfirmRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                address?: string;
            }): _55.QueryValsetConfirmRequest;
            fromAmino(object: _55.QueryValsetConfirmRequestAmino): _55.QueryValsetConfirmRequest;
            toAmino(message: _55.QueryValsetConfirmRequest): _55.QueryValsetConfirmRequestAmino;
            fromAminoMsg(object: _55.QueryValsetConfirmRequestAminoMsg): _55.QueryValsetConfirmRequest;
            fromProtoMsg(message: _55.QueryValsetConfirmRequestProtoMsg): _55.QueryValsetConfirmRequest;
            toProto(message: _55.QueryValsetConfirmRequest): Uint8Array;
            toProtoMsg(message: _55.QueryValsetConfirmRequest): _55.QueryValsetConfirmRequestProtoMsg;
        };
        QueryValsetConfirmResponse: {
            encode(message: _55.QueryValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryValsetConfirmResponse;
            fromPartial(object: {
                confirm?: {
                    nonce?: string | number | import("long").Long;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                };
            }): _55.QueryValsetConfirmResponse;
            fromAmino(object: _55.QueryValsetConfirmResponseAmino): _55.QueryValsetConfirmResponse;
            toAmino(message: _55.QueryValsetConfirmResponse): _55.QueryValsetConfirmResponseAmino;
            fromAminoMsg(object: _55.QueryValsetConfirmResponseAminoMsg): _55.QueryValsetConfirmResponse;
            fromProtoMsg(message: _55.QueryValsetConfirmResponseProtoMsg): _55.QueryValsetConfirmResponse;
            toProto(message: _55.QueryValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _55.QueryValsetConfirmResponse): _55.QueryValsetConfirmResponseProtoMsg;
        };
        QueryValsetConfirmsByNonceRequest: {
            encode(message: _55.QueryValsetConfirmsByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryValsetConfirmsByNonceRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
            }): _55.QueryValsetConfirmsByNonceRequest;
            fromAmino(object: _55.QueryValsetConfirmsByNonceRequestAmino): _55.QueryValsetConfirmsByNonceRequest;
            toAmino(message: _55.QueryValsetConfirmsByNonceRequest): _55.QueryValsetConfirmsByNonceRequestAmino;
            fromAminoMsg(object: _55.QueryValsetConfirmsByNonceRequestAminoMsg): _55.QueryValsetConfirmsByNonceRequest;
            fromProtoMsg(message: _55.QueryValsetConfirmsByNonceRequestProtoMsg): _55.QueryValsetConfirmsByNonceRequest;
            toProto(message: _55.QueryValsetConfirmsByNonceRequest): Uint8Array;
            toProtoMsg(message: _55.QueryValsetConfirmsByNonceRequest): _55.QueryValsetConfirmsByNonceRequestProtoMsg;
        };
        QueryValsetConfirmsByNonceResponse: {
            encode(message: _55.QueryValsetConfirmsByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryValsetConfirmsByNonceResponse;
            fromPartial(object: {
                confirms?: {
                    nonce?: string | number | import("long").Long;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                }[];
            }): _55.QueryValsetConfirmsByNonceResponse;
            fromAmino(object: _55.QueryValsetConfirmsByNonceResponseAmino): _55.QueryValsetConfirmsByNonceResponse;
            toAmino(message: _55.QueryValsetConfirmsByNonceResponse): _55.QueryValsetConfirmsByNonceResponseAmino;
            fromAminoMsg(object: _55.QueryValsetConfirmsByNonceResponseAminoMsg): _55.QueryValsetConfirmsByNonceResponse;
            fromProtoMsg(message: _55.QueryValsetConfirmsByNonceResponseProtoMsg): _55.QueryValsetConfirmsByNonceResponse;
            toProto(message: _55.QueryValsetConfirmsByNonceResponse): Uint8Array;
            toProtoMsg(message: _55.QueryValsetConfirmsByNonceResponse): _55.QueryValsetConfirmsByNonceResponseProtoMsg;
        };
        QueryLastValsetRequestsRequest: {
            encode(_: _55.QueryLastValsetRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastValsetRequestsRequest;
            fromPartial(_: {}): _55.QueryLastValsetRequestsRequest;
            fromAmino(_: _55.QueryLastValsetRequestsRequestAmino): _55.QueryLastValsetRequestsRequest;
            toAmino(_: _55.QueryLastValsetRequestsRequest): _55.QueryLastValsetRequestsRequestAmino;
            fromAminoMsg(object: _55.QueryLastValsetRequestsRequestAminoMsg): _55.QueryLastValsetRequestsRequest;
            fromProtoMsg(message: _55.QueryLastValsetRequestsRequestProtoMsg): _55.QueryLastValsetRequestsRequest;
            toProto(message: _55.QueryLastValsetRequestsRequest): Uint8Array;
            toProtoMsg(message: _55.QueryLastValsetRequestsRequest): _55.QueryLastValsetRequestsRequestProtoMsg;
        };
        QueryLastValsetRequestsResponse: {
            encode(message: _55.QueryLastValsetRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastValsetRequestsResponse;
            fromPartial(object: {
                valsets?: {
                    nonce?: string | number | import("long").Long;
                    members?: {
                        power?: string | number | import("long").Long;
                        ethereumAddress?: string;
                    }[];
                    height?: string | number | import("long").Long;
                    rewardAmount?: string;
                    rewardToken?: string;
                }[];
            }): _55.QueryLastValsetRequestsResponse;
            fromAmino(object: _55.QueryLastValsetRequestsResponseAmino): _55.QueryLastValsetRequestsResponse;
            toAmino(message: _55.QueryLastValsetRequestsResponse): _55.QueryLastValsetRequestsResponseAmino;
            fromAminoMsg(object: _55.QueryLastValsetRequestsResponseAminoMsg): _55.QueryLastValsetRequestsResponse;
            fromProtoMsg(message: _55.QueryLastValsetRequestsResponseProtoMsg): _55.QueryLastValsetRequestsResponse;
            toProto(message: _55.QueryLastValsetRequestsResponse): Uint8Array;
            toProtoMsg(message: _55.QueryLastValsetRequestsResponse): _55.QueryLastValsetRequestsResponseProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrRequest: {
            encode(message: _55.QueryLastPendingValsetRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastPendingValsetRequestByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _55.QueryLastPendingValsetRequestByAddrRequest;
            fromAmino(object: _55.QueryLastPendingValsetRequestByAddrRequestAmino): _55.QueryLastPendingValsetRequestByAddrRequest;
            toAmino(message: _55.QueryLastPendingValsetRequestByAddrRequest): _55.QueryLastPendingValsetRequestByAddrRequestAmino;
            fromAminoMsg(object: _55.QueryLastPendingValsetRequestByAddrRequestAminoMsg): _55.QueryLastPendingValsetRequestByAddrRequest;
            fromProtoMsg(message: _55.QueryLastPendingValsetRequestByAddrRequestProtoMsg): _55.QueryLastPendingValsetRequestByAddrRequest;
            toProto(message: _55.QueryLastPendingValsetRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _55.QueryLastPendingValsetRequestByAddrRequest): _55.QueryLastPendingValsetRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrResponse: {
            encode(message: _55.QueryLastPendingValsetRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastPendingValsetRequestByAddrResponse;
            fromPartial(object: {
                valsets?: {
                    nonce?: string | number | import("long").Long;
                    members?: {
                        power?: string | number | import("long").Long;
                        ethereumAddress?: string;
                    }[];
                    height?: string | number | import("long").Long;
                    rewardAmount?: string;
                    rewardToken?: string;
                }[];
            }): _55.QueryLastPendingValsetRequestByAddrResponse;
            fromAmino(object: _55.QueryLastPendingValsetRequestByAddrResponseAmino): _55.QueryLastPendingValsetRequestByAddrResponse;
            toAmino(message: _55.QueryLastPendingValsetRequestByAddrResponse): _55.QueryLastPendingValsetRequestByAddrResponseAmino;
            fromAminoMsg(object: _55.QueryLastPendingValsetRequestByAddrResponseAminoMsg): _55.QueryLastPendingValsetRequestByAddrResponse;
            fromProtoMsg(message: _55.QueryLastPendingValsetRequestByAddrResponseProtoMsg): _55.QueryLastPendingValsetRequestByAddrResponse;
            toProto(message: _55.QueryLastPendingValsetRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _55.QueryLastPendingValsetRequestByAddrResponse): _55.QueryLastPendingValsetRequestByAddrResponseProtoMsg;
        };
        QueryBatchFeeRequest: {
            encode(_: _55.QueryBatchFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryBatchFeeRequest;
            fromPartial(_: {}): _55.QueryBatchFeeRequest;
            fromAmino(_: _55.QueryBatchFeeRequestAmino): _55.QueryBatchFeeRequest;
            toAmino(_: _55.QueryBatchFeeRequest): _55.QueryBatchFeeRequestAmino;
            fromAminoMsg(object: _55.QueryBatchFeeRequestAminoMsg): _55.QueryBatchFeeRequest;
            fromProtoMsg(message: _55.QueryBatchFeeRequestProtoMsg): _55.QueryBatchFeeRequest;
            toProto(message: _55.QueryBatchFeeRequest): Uint8Array;
            toProtoMsg(message: _55.QueryBatchFeeRequest): _55.QueryBatchFeeRequestProtoMsg;
        };
        QueryBatchFeeResponse: {
            encode(message: _55.QueryBatchFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryBatchFeeResponse;
            fromPartial(object: {
                batchFees?: {
                    token?: string;
                    totalFees?: string;
                    txCount?: string | number | import("long").Long;
                }[];
            }): _55.QueryBatchFeeResponse;
            fromAmino(object: _55.QueryBatchFeeResponseAmino): _55.QueryBatchFeeResponse;
            toAmino(message: _55.QueryBatchFeeResponse): _55.QueryBatchFeeResponseAmino;
            fromAminoMsg(object: _55.QueryBatchFeeResponseAminoMsg): _55.QueryBatchFeeResponse;
            fromProtoMsg(message: _55.QueryBatchFeeResponseProtoMsg): _55.QueryBatchFeeResponse;
            toProto(message: _55.QueryBatchFeeResponse): Uint8Array;
            toProtoMsg(message: _55.QueryBatchFeeResponse): _55.QueryBatchFeeResponseProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrRequest: {
            encode(message: _55.QueryLastPendingBatchRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastPendingBatchRequestByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _55.QueryLastPendingBatchRequestByAddrRequest;
            fromAmino(object: _55.QueryLastPendingBatchRequestByAddrRequestAmino): _55.QueryLastPendingBatchRequestByAddrRequest;
            toAmino(message: _55.QueryLastPendingBatchRequestByAddrRequest): _55.QueryLastPendingBatchRequestByAddrRequestAmino;
            fromAminoMsg(object: _55.QueryLastPendingBatchRequestByAddrRequestAminoMsg): _55.QueryLastPendingBatchRequestByAddrRequest;
            fromProtoMsg(message: _55.QueryLastPendingBatchRequestByAddrRequestProtoMsg): _55.QueryLastPendingBatchRequestByAddrRequest;
            toProto(message: _55.QueryLastPendingBatchRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _55.QueryLastPendingBatchRequestByAddrRequest): _55.QueryLastPendingBatchRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrResponse: {
            encode(message: _55.QueryLastPendingBatchRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastPendingBatchRequestByAddrResponse;
            fromPartial(object: {
                batch?: {
                    batchNonce?: string | number | import("long").Long;
                    batchTimeout?: string | number | import("long").Long;
                    transactions?: {
                        id?: string | number | import("long").Long;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    tokenContract?: string;
                    block?: string | number | import("long").Long;
                }[];
            }): _55.QueryLastPendingBatchRequestByAddrResponse;
            fromAmino(object: _55.QueryLastPendingBatchRequestByAddrResponseAmino): _55.QueryLastPendingBatchRequestByAddrResponse;
            toAmino(message: _55.QueryLastPendingBatchRequestByAddrResponse): _55.QueryLastPendingBatchRequestByAddrResponseAmino;
            fromAminoMsg(object: _55.QueryLastPendingBatchRequestByAddrResponseAminoMsg): _55.QueryLastPendingBatchRequestByAddrResponse;
            fromProtoMsg(message: _55.QueryLastPendingBatchRequestByAddrResponseProtoMsg): _55.QueryLastPendingBatchRequestByAddrResponse;
            toProto(message: _55.QueryLastPendingBatchRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _55.QueryLastPendingBatchRequestByAddrResponse): _55.QueryLastPendingBatchRequestByAddrResponseProtoMsg;
        };
        QueryLastPendingLogicCallByAddrRequest: {
            encode(message: _55.QueryLastPendingLogicCallByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastPendingLogicCallByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _55.QueryLastPendingLogicCallByAddrRequest;
            fromAmino(object: _55.QueryLastPendingLogicCallByAddrRequestAmino): _55.QueryLastPendingLogicCallByAddrRequest;
            toAmino(message: _55.QueryLastPendingLogicCallByAddrRequest): _55.QueryLastPendingLogicCallByAddrRequestAmino;
            fromAminoMsg(object: _55.QueryLastPendingLogicCallByAddrRequestAminoMsg): _55.QueryLastPendingLogicCallByAddrRequest;
            fromProtoMsg(message: _55.QueryLastPendingLogicCallByAddrRequestProtoMsg): _55.QueryLastPendingLogicCallByAddrRequest;
            toProto(message: _55.QueryLastPendingLogicCallByAddrRequest): Uint8Array;
            toProtoMsg(message: _55.QueryLastPendingLogicCallByAddrRequest): _55.QueryLastPendingLogicCallByAddrRequestProtoMsg;
        };
        QueryLastPendingLogicCallByAddrResponse: {
            encode(message: _55.QueryLastPendingLogicCallByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastPendingLogicCallByAddrResponse;
            fromPartial(object: {
                call?: {
                    transfers?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    fees?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    logicContractAddress?: string;
                    payload?: Uint8Array;
                    timeout?: string | number | import("long").Long;
                    invalidationId?: Uint8Array;
                    invalidationNonce?: string | number | import("long").Long;
                    block?: string | number | import("long").Long;
                }[];
            }): _55.QueryLastPendingLogicCallByAddrResponse;
            fromAmino(object: _55.QueryLastPendingLogicCallByAddrResponseAmino): _55.QueryLastPendingLogicCallByAddrResponse;
            toAmino(message: _55.QueryLastPendingLogicCallByAddrResponse): _55.QueryLastPendingLogicCallByAddrResponseAmino;
            fromAminoMsg(object: _55.QueryLastPendingLogicCallByAddrResponseAminoMsg): _55.QueryLastPendingLogicCallByAddrResponse;
            fromProtoMsg(message: _55.QueryLastPendingLogicCallByAddrResponseProtoMsg): _55.QueryLastPendingLogicCallByAddrResponse;
            toProto(message: _55.QueryLastPendingLogicCallByAddrResponse): Uint8Array;
            toProtoMsg(message: _55.QueryLastPendingLogicCallByAddrResponse): _55.QueryLastPendingLogicCallByAddrResponseProtoMsg;
        };
        QueryOutgoingTxBatchesRequest: {
            encode(_: _55.QueryOutgoingTxBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryOutgoingTxBatchesRequest;
            fromPartial(_: {}): _55.QueryOutgoingTxBatchesRequest;
            fromAmino(_: _55.QueryOutgoingTxBatchesRequestAmino): _55.QueryOutgoingTxBatchesRequest;
            toAmino(_: _55.QueryOutgoingTxBatchesRequest): _55.QueryOutgoingTxBatchesRequestAmino;
            fromAminoMsg(object: _55.QueryOutgoingTxBatchesRequestAminoMsg): _55.QueryOutgoingTxBatchesRequest;
            fromProtoMsg(message: _55.QueryOutgoingTxBatchesRequestProtoMsg): _55.QueryOutgoingTxBatchesRequest;
            toProto(message: _55.QueryOutgoingTxBatchesRequest): Uint8Array;
            toProtoMsg(message: _55.QueryOutgoingTxBatchesRequest): _55.QueryOutgoingTxBatchesRequestProtoMsg;
        };
        QueryOutgoingTxBatchesResponse: {
            encode(message: _55.QueryOutgoingTxBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryOutgoingTxBatchesResponse;
            fromPartial(object: {
                batches?: {
                    batchNonce?: string | number | import("long").Long;
                    batchTimeout?: string | number | import("long").Long;
                    transactions?: {
                        id?: string | number | import("long").Long;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    tokenContract?: string;
                    block?: string | number | import("long").Long;
                }[];
            }): _55.QueryOutgoingTxBatchesResponse;
            fromAmino(object: _55.QueryOutgoingTxBatchesResponseAmino): _55.QueryOutgoingTxBatchesResponse;
            toAmino(message: _55.QueryOutgoingTxBatchesResponse): _55.QueryOutgoingTxBatchesResponseAmino;
            fromAminoMsg(object: _55.QueryOutgoingTxBatchesResponseAminoMsg): _55.QueryOutgoingTxBatchesResponse;
            fromProtoMsg(message: _55.QueryOutgoingTxBatchesResponseProtoMsg): _55.QueryOutgoingTxBatchesResponse;
            toProto(message: _55.QueryOutgoingTxBatchesResponse): Uint8Array;
            toProtoMsg(message: _55.QueryOutgoingTxBatchesResponse): _55.QueryOutgoingTxBatchesResponseProtoMsg;
        };
        QueryOutgoingLogicCallsRequest: {
            encode(_: _55.QueryOutgoingLogicCallsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryOutgoingLogicCallsRequest;
            fromPartial(_: {}): _55.QueryOutgoingLogicCallsRequest;
            fromAmino(_: _55.QueryOutgoingLogicCallsRequestAmino): _55.QueryOutgoingLogicCallsRequest;
            toAmino(_: _55.QueryOutgoingLogicCallsRequest): _55.QueryOutgoingLogicCallsRequestAmino;
            fromAminoMsg(object: _55.QueryOutgoingLogicCallsRequestAminoMsg): _55.QueryOutgoingLogicCallsRequest;
            fromProtoMsg(message: _55.QueryOutgoingLogicCallsRequestProtoMsg): _55.QueryOutgoingLogicCallsRequest;
            toProto(message: _55.QueryOutgoingLogicCallsRequest): Uint8Array;
            toProtoMsg(message: _55.QueryOutgoingLogicCallsRequest): _55.QueryOutgoingLogicCallsRequestProtoMsg;
        };
        QueryOutgoingLogicCallsResponse: {
            encode(message: _55.QueryOutgoingLogicCallsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryOutgoingLogicCallsResponse;
            fromPartial(object: {
                calls?: {
                    transfers?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    fees?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    logicContractAddress?: string;
                    payload?: Uint8Array;
                    timeout?: string | number | import("long").Long;
                    invalidationId?: Uint8Array;
                    invalidationNonce?: string | number | import("long").Long;
                    block?: string | number | import("long").Long;
                }[];
            }): _55.QueryOutgoingLogicCallsResponse;
            fromAmino(object: _55.QueryOutgoingLogicCallsResponseAmino): _55.QueryOutgoingLogicCallsResponse;
            toAmino(message: _55.QueryOutgoingLogicCallsResponse): _55.QueryOutgoingLogicCallsResponseAmino;
            fromAminoMsg(object: _55.QueryOutgoingLogicCallsResponseAminoMsg): _55.QueryOutgoingLogicCallsResponse;
            fromProtoMsg(message: _55.QueryOutgoingLogicCallsResponseProtoMsg): _55.QueryOutgoingLogicCallsResponse;
            toProto(message: _55.QueryOutgoingLogicCallsResponse): Uint8Array;
            toProtoMsg(message: _55.QueryOutgoingLogicCallsResponse): _55.QueryOutgoingLogicCallsResponseProtoMsg;
        };
        QueryBatchRequestByNonceRequest: {
            encode(message: _55.QueryBatchRequestByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryBatchRequestByNonceRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                contractAddress?: string;
            }): _55.QueryBatchRequestByNonceRequest;
            fromAmino(object: _55.QueryBatchRequestByNonceRequestAmino): _55.QueryBatchRequestByNonceRequest;
            toAmino(message: _55.QueryBatchRequestByNonceRequest): _55.QueryBatchRequestByNonceRequestAmino;
            fromAminoMsg(object: _55.QueryBatchRequestByNonceRequestAminoMsg): _55.QueryBatchRequestByNonceRequest;
            fromProtoMsg(message: _55.QueryBatchRequestByNonceRequestProtoMsg): _55.QueryBatchRequestByNonceRequest;
            toProto(message: _55.QueryBatchRequestByNonceRequest): Uint8Array;
            toProtoMsg(message: _55.QueryBatchRequestByNonceRequest): _55.QueryBatchRequestByNonceRequestProtoMsg;
        };
        QueryBatchRequestByNonceResponse: {
            encode(message: _55.QueryBatchRequestByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryBatchRequestByNonceResponse;
            fromPartial(object: {
                batch?: {
                    batchNonce?: string | number | import("long").Long;
                    batchTimeout?: string | number | import("long").Long;
                    transactions?: {
                        id?: string | number | import("long").Long;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    tokenContract?: string;
                    block?: string | number | import("long").Long;
                };
            }): _55.QueryBatchRequestByNonceResponse;
            fromAmino(object: _55.QueryBatchRequestByNonceResponseAmino): _55.QueryBatchRequestByNonceResponse;
            toAmino(message: _55.QueryBatchRequestByNonceResponse): _55.QueryBatchRequestByNonceResponseAmino;
            fromAminoMsg(object: _55.QueryBatchRequestByNonceResponseAminoMsg): _55.QueryBatchRequestByNonceResponse;
            fromProtoMsg(message: _55.QueryBatchRequestByNonceResponseProtoMsg): _55.QueryBatchRequestByNonceResponse;
            toProto(message: _55.QueryBatchRequestByNonceResponse): Uint8Array;
            toProtoMsg(message: _55.QueryBatchRequestByNonceResponse): _55.QueryBatchRequestByNonceResponseProtoMsg;
        };
        QueryBatchConfirmsRequest: {
            encode(message: _55.QueryBatchConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryBatchConfirmsRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                contractAddress?: string;
            }): _55.QueryBatchConfirmsRequest;
            fromAmino(object: _55.QueryBatchConfirmsRequestAmino): _55.QueryBatchConfirmsRequest;
            toAmino(message: _55.QueryBatchConfirmsRequest): _55.QueryBatchConfirmsRequestAmino;
            fromAminoMsg(object: _55.QueryBatchConfirmsRequestAminoMsg): _55.QueryBatchConfirmsRequest;
            fromProtoMsg(message: _55.QueryBatchConfirmsRequestProtoMsg): _55.QueryBatchConfirmsRequest;
            toProto(message: _55.QueryBatchConfirmsRequest): Uint8Array;
            toProtoMsg(message: _55.QueryBatchConfirmsRequest): _55.QueryBatchConfirmsRequestProtoMsg;
        };
        QueryBatchConfirmsResponse: {
            encode(message: _55.QueryBatchConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryBatchConfirmsResponse;
            fromPartial(object: {
                confirms?: {
                    nonce?: string | number | import("long").Long;
                    tokenContract?: string;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _55.QueryBatchConfirmsResponse;
            fromAmino(object: _55.QueryBatchConfirmsResponseAmino): _55.QueryBatchConfirmsResponse;
            toAmino(message: _55.QueryBatchConfirmsResponse): _55.QueryBatchConfirmsResponseAmino;
            fromAminoMsg(object: _55.QueryBatchConfirmsResponseAminoMsg): _55.QueryBatchConfirmsResponse;
            fromProtoMsg(message: _55.QueryBatchConfirmsResponseProtoMsg): _55.QueryBatchConfirmsResponse;
            toProto(message: _55.QueryBatchConfirmsResponse): Uint8Array;
            toProtoMsg(message: _55.QueryBatchConfirmsResponse): _55.QueryBatchConfirmsResponseProtoMsg;
        };
        QueryLogicConfirmsRequest: {
            encode(message: _55.QueryLogicConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLogicConfirmsRequest;
            fromPartial(object: {
                invalidationId?: Uint8Array;
                invalidationNonce?: string | number | import("long").Long;
            }): _55.QueryLogicConfirmsRequest;
            fromAmino(object: _55.QueryLogicConfirmsRequestAmino): _55.QueryLogicConfirmsRequest;
            toAmino(message: _55.QueryLogicConfirmsRequest): _55.QueryLogicConfirmsRequestAmino;
            fromAminoMsg(object: _55.QueryLogicConfirmsRequestAminoMsg): _55.QueryLogicConfirmsRequest;
            fromProtoMsg(message: _55.QueryLogicConfirmsRequestProtoMsg): _55.QueryLogicConfirmsRequest;
            toProto(message: _55.QueryLogicConfirmsRequest): Uint8Array;
            toProtoMsg(message: _55.QueryLogicConfirmsRequest): _55.QueryLogicConfirmsRequestProtoMsg;
        };
        QueryLogicConfirmsResponse: {
            encode(message: _55.QueryLogicConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLogicConfirmsResponse;
            fromPartial(object: {
                confirms?: {
                    invalidationId?: string;
                    invalidationNonce?: string | number | import("long").Long;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _55.QueryLogicConfirmsResponse;
            fromAmino(object: _55.QueryLogicConfirmsResponseAmino): _55.QueryLogicConfirmsResponse;
            toAmino(message: _55.QueryLogicConfirmsResponse): _55.QueryLogicConfirmsResponseAmino;
            fromAminoMsg(object: _55.QueryLogicConfirmsResponseAminoMsg): _55.QueryLogicConfirmsResponse;
            fromProtoMsg(message: _55.QueryLogicConfirmsResponseProtoMsg): _55.QueryLogicConfirmsResponse;
            toProto(message: _55.QueryLogicConfirmsResponse): Uint8Array;
            toProtoMsg(message: _55.QueryLogicConfirmsResponse): _55.QueryLogicConfirmsResponseProtoMsg;
        };
        QueryLastEventNonceByAddrRequest: {
            encode(message: _55.QueryLastEventNonceByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastEventNonceByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _55.QueryLastEventNonceByAddrRequest;
            fromAmino(object: _55.QueryLastEventNonceByAddrRequestAmino): _55.QueryLastEventNonceByAddrRequest;
            toAmino(message: _55.QueryLastEventNonceByAddrRequest): _55.QueryLastEventNonceByAddrRequestAmino;
            fromAminoMsg(object: _55.QueryLastEventNonceByAddrRequestAminoMsg): _55.QueryLastEventNonceByAddrRequest;
            fromProtoMsg(message: _55.QueryLastEventNonceByAddrRequestProtoMsg): _55.QueryLastEventNonceByAddrRequest;
            toProto(message: _55.QueryLastEventNonceByAddrRequest): Uint8Array;
            toProtoMsg(message: _55.QueryLastEventNonceByAddrRequest): _55.QueryLastEventNonceByAddrRequestProtoMsg;
        };
        QueryLastEventNonceByAddrResponse: {
            encode(message: _55.QueryLastEventNonceByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryLastEventNonceByAddrResponse;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
            }): _55.QueryLastEventNonceByAddrResponse;
            fromAmino(object: _55.QueryLastEventNonceByAddrResponseAmino): _55.QueryLastEventNonceByAddrResponse;
            toAmino(message: _55.QueryLastEventNonceByAddrResponse): _55.QueryLastEventNonceByAddrResponseAmino;
            fromAminoMsg(object: _55.QueryLastEventNonceByAddrResponseAminoMsg): _55.QueryLastEventNonceByAddrResponse;
            fromProtoMsg(message: _55.QueryLastEventNonceByAddrResponseProtoMsg): _55.QueryLastEventNonceByAddrResponse;
            toProto(message: _55.QueryLastEventNonceByAddrResponse): Uint8Array;
            toProtoMsg(message: _55.QueryLastEventNonceByAddrResponse): _55.QueryLastEventNonceByAddrResponseProtoMsg;
        };
        QueryERC20ToDenomRequest: {
            encode(message: _55.QueryERC20ToDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryERC20ToDenomRequest;
            fromPartial(object: {
                erc20?: string;
            }): _55.QueryERC20ToDenomRequest;
            fromAmino(object: _55.QueryERC20ToDenomRequestAmino): _55.QueryERC20ToDenomRequest;
            toAmino(message: _55.QueryERC20ToDenomRequest): _55.QueryERC20ToDenomRequestAmino;
            fromAminoMsg(object: _55.QueryERC20ToDenomRequestAminoMsg): _55.QueryERC20ToDenomRequest;
            fromProtoMsg(message: _55.QueryERC20ToDenomRequestProtoMsg): _55.QueryERC20ToDenomRequest;
            toProto(message: _55.QueryERC20ToDenomRequest): Uint8Array;
            toProtoMsg(message: _55.QueryERC20ToDenomRequest): _55.QueryERC20ToDenomRequestProtoMsg;
        };
        QueryERC20ToDenomResponse: {
            encode(message: _55.QueryERC20ToDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryERC20ToDenomResponse;
            fromPartial(object: {
                denom?: string;
                cosmosOriginated?: boolean;
            }): _55.QueryERC20ToDenomResponse;
            fromAmino(object: _55.QueryERC20ToDenomResponseAmino): _55.QueryERC20ToDenomResponse;
            toAmino(message: _55.QueryERC20ToDenomResponse): _55.QueryERC20ToDenomResponseAmino;
            fromAminoMsg(object: _55.QueryERC20ToDenomResponseAminoMsg): _55.QueryERC20ToDenomResponse;
            fromProtoMsg(message: _55.QueryERC20ToDenomResponseProtoMsg): _55.QueryERC20ToDenomResponse;
            toProto(message: _55.QueryERC20ToDenomResponse): Uint8Array;
            toProtoMsg(message: _55.QueryERC20ToDenomResponse): _55.QueryERC20ToDenomResponseProtoMsg;
        };
        QueryDenomToERC20Request: {
            encode(message: _55.QueryDenomToERC20Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDenomToERC20Request;
            fromPartial(object: {
                denom?: string;
            }): _55.QueryDenomToERC20Request;
            fromAmino(object: _55.QueryDenomToERC20RequestAmino): _55.QueryDenomToERC20Request;
            toAmino(message: _55.QueryDenomToERC20Request): _55.QueryDenomToERC20RequestAmino;
            fromAminoMsg(object: _55.QueryDenomToERC20RequestAminoMsg): _55.QueryDenomToERC20Request;
            fromProtoMsg(message: _55.QueryDenomToERC20RequestProtoMsg): _55.QueryDenomToERC20Request;
            toProto(message: _55.QueryDenomToERC20Request): Uint8Array;
            toProtoMsg(message: _55.QueryDenomToERC20Request): _55.QueryDenomToERC20RequestProtoMsg;
        };
        QueryDenomToERC20Response: {
            encode(message: _55.QueryDenomToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDenomToERC20Response;
            fromPartial(object: {
                erc20?: string;
                cosmosOriginated?: boolean;
            }): _55.QueryDenomToERC20Response;
            fromAmino(object: _55.QueryDenomToERC20ResponseAmino): _55.QueryDenomToERC20Response;
            toAmino(message: _55.QueryDenomToERC20Response): _55.QueryDenomToERC20ResponseAmino;
            fromAminoMsg(object: _55.QueryDenomToERC20ResponseAminoMsg): _55.QueryDenomToERC20Response;
            fromProtoMsg(message: _55.QueryDenomToERC20ResponseProtoMsg): _55.QueryDenomToERC20Response;
            toProto(message: _55.QueryDenomToERC20Response): Uint8Array;
            toProtoMsg(message: _55.QueryDenomToERC20Response): _55.QueryDenomToERC20ResponseProtoMsg;
        };
        QueryAttestationsRequest: {
            encode(message: _55.QueryAttestationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAttestationsRequest;
            fromPartial(object: {
                limit?: string | number | import("long").Long;
            }): _55.QueryAttestationsRequest;
            fromAmino(object: _55.QueryAttestationsRequestAmino): _55.QueryAttestationsRequest;
            toAmino(message: _55.QueryAttestationsRequest): _55.QueryAttestationsRequestAmino;
            fromAminoMsg(object: _55.QueryAttestationsRequestAminoMsg): _55.QueryAttestationsRequest;
            fromProtoMsg(message: _55.QueryAttestationsRequestProtoMsg): _55.QueryAttestationsRequest;
            toProto(message: _55.QueryAttestationsRequest): Uint8Array;
            toProtoMsg(message: _55.QueryAttestationsRequest): _55.QueryAttestationsRequestProtoMsg;
        };
        QueryAttestationsResponse: {
            encode(message: _55.QueryAttestationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAttestationsResponse;
            fromPartial(object: {
                attestations?: {
                    observed?: boolean;
                    votes?: string[];
                    height?: string | number | import("long").Long;
                    claim?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
            }): _55.QueryAttestationsResponse;
            fromAmino(object: _55.QueryAttestationsResponseAmino): _55.QueryAttestationsResponse;
            toAmino(message: _55.QueryAttestationsResponse): _55.QueryAttestationsResponseAmino;
            fromAminoMsg(object: _55.QueryAttestationsResponseAminoMsg): _55.QueryAttestationsResponse;
            fromProtoMsg(message: _55.QueryAttestationsResponseProtoMsg): _55.QueryAttestationsResponse;
            toProto(message: _55.QueryAttestationsResponse): Uint8Array;
            toProtoMsg(message: _55.QueryAttestationsResponse): _55.QueryAttestationsResponseProtoMsg;
        };
        QueryDelegateKeysByValidatorAddress: {
            encode(message: _55.QueryDelegateKeysByValidatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDelegateKeysByValidatorAddress;
            fromPartial(object: {
                validatorAddress?: string;
            }): _55.QueryDelegateKeysByValidatorAddress;
            fromAmino(object: _55.QueryDelegateKeysByValidatorAddressAmino): _55.QueryDelegateKeysByValidatorAddress;
            toAmino(message: _55.QueryDelegateKeysByValidatorAddress): _55.QueryDelegateKeysByValidatorAddressAmino;
            fromAminoMsg(object: _55.QueryDelegateKeysByValidatorAddressAminoMsg): _55.QueryDelegateKeysByValidatorAddress;
            fromProtoMsg(message: _55.QueryDelegateKeysByValidatorAddressProtoMsg): _55.QueryDelegateKeysByValidatorAddress;
            toProto(message: _55.QueryDelegateKeysByValidatorAddress): Uint8Array;
            toProtoMsg(message: _55.QueryDelegateKeysByValidatorAddress): _55.QueryDelegateKeysByValidatorAddressProtoMsg;
        };
        QueryDelegateKeysByValidatorAddressResponse: {
            encode(message: _55.QueryDelegateKeysByValidatorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDelegateKeysByValidatorAddressResponse;
            fromPartial(object: {
                ethAddress?: string;
                orchestratorAddress?: string;
            }): _55.QueryDelegateKeysByValidatorAddressResponse;
            fromAmino(object: _55.QueryDelegateKeysByValidatorAddressResponseAmino): _55.QueryDelegateKeysByValidatorAddressResponse;
            toAmino(message: _55.QueryDelegateKeysByValidatorAddressResponse): _55.QueryDelegateKeysByValidatorAddressResponseAmino;
            fromAminoMsg(object: _55.QueryDelegateKeysByValidatorAddressResponseAminoMsg): _55.QueryDelegateKeysByValidatorAddressResponse;
            fromProtoMsg(message: _55.QueryDelegateKeysByValidatorAddressResponseProtoMsg): _55.QueryDelegateKeysByValidatorAddressResponse;
            toProto(message: _55.QueryDelegateKeysByValidatorAddressResponse): Uint8Array;
            toProtoMsg(message: _55.QueryDelegateKeysByValidatorAddressResponse): _55.QueryDelegateKeysByValidatorAddressResponseProtoMsg;
        };
        QueryDelegateKeysByEthAddress: {
            encode(message: _55.QueryDelegateKeysByEthAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDelegateKeysByEthAddress;
            fromPartial(object: {
                ethAddress?: string;
            }): _55.QueryDelegateKeysByEthAddress;
            fromAmino(object: _55.QueryDelegateKeysByEthAddressAmino): _55.QueryDelegateKeysByEthAddress;
            toAmino(message: _55.QueryDelegateKeysByEthAddress): _55.QueryDelegateKeysByEthAddressAmino;
            fromAminoMsg(object: _55.QueryDelegateKeysByEthAddressAminoMsg): _55.QueryDelegateKeysByEthAddress;
            fromProtoMsg(message: _55.QueryDelegateKeysByEthAddressProtoMsg): _55.QueryDelegateKeysByEthAddress;
            toProto(message: _55.QueryDelegateKeysByEthAddress): Uint8Array;
            toProtoMsg(message: _55.QueryDelegateKeysByEthAddress): _55.QueryDelegateKeysByEthAddressProtoMsg;
        };
        QueryDelegateKeysByEthAddressResponse: {
            encode(message: _55.QueryDelegateKeysByEthAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDelegateKeysByEthAddressResponse;
            fromPartial(object: {
                validatorAddress?: string;
                orchestratorAddress?: string;
            }): _55.QueryDelegateKeysByEthAddressResponse;
            fromAmino(object: _55.QueryDelegateKeysByEthAddressResponseAmino): _55.QueryDelegateKeysByEthAddressResponse;
            toAmino(message: _55.QueryDelegateKeysByEthAddressResponse): _55.QueryDelegateKeysByEthAddressResponseAmino;
            fromAminoMsg(object: _55.QueryDelegateKeysByEthAddressResponseAminoMsg): _55.QueryDelegateKeysByEthAddressResponse;
            fromProtoMsg(message: _55.QueryDelegateKeysByEthAddressResponseProtoMsg): _55.QueryDelegateKeysByEthAddressResponse;
            toProto(message: _55.QueryDelegateKeysByEthAddressResponse): Uint8Array;
            toProtoMsg(message: _55.QueryDelegateKeysByEthAddressResponse): _55.QueryDelegateKeysByEthAddressResponseProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddress: {
            encode(message: _55.QueryDelegateKeysByOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDelegateKeysByOrchestratorAddress;
            fromPartial(object: {
                orchestratorAddress?: string;
            }): _55.QueryDelegateKeysByOrchestratorAddress;
            fromAmino(object: _55.QueryDelegateKeysByOrchestratorAddressAmino): _55.QueryDelegateKeysByOrchestratorAddress;
            toAmino(message: _55.QueryDelegateKeysByOrchestratorAddress): _55.QueryDelegateKeysByOrchestratorAddressAmino;
            fromAminoMsg(object: _55.QueryDelegateKeysByOrchestratorAddressAminoMsg): _55.QueryDelegateKeysByOrchestratorAddress;
            fromProtoMsg(message: _55.QueryDelegateKeysByOrchestratorAddressProtoMsg): _55.QueryDelegateKeysByOrchestratorAddress;
            toProto(message: _55.QueryDelegateKeysByOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _55.QueryDelegateKeysByOrchestratorAddress): _55.QueryDelegateKeysByOrchestratorAddressProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddressResponse: {
            encode(message: _55.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDelegateKeysByOrchestratorAddressResponse;
            fromPartial(object: {
                validatorAddress?: string;
                ethAddress?: string;
            }): _55.QueryDelegateKeysByOrchestratorAddressResponse;
            fromAmino(object: _55.QueryDelegateKeysByOrchestratorAddressResponseAmino): _55.QueryDelegateKeysByOrchestratorAddressResponse;
            toAmino(message: _55.QueryDelegateKeysByOrchestratorAddressResponse): _55.QueryDelegateKeysByOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _55.QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): _55.QueryDelegateKeysByOrchestratorAddressResponse;
            fromProtoMsg(message: _55.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): _55.QueryDelegateKeysByOrchestratorAddressResponse;
            toProto(message: _55.QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _55.QueryDelegateKeysByOrchestratorAddressResponse): _55.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg;
        };
        QueryPendingSendToEth: {
            encode(message: _55.QueryPendingSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryPendingSendToEth;
            fromPartial(object: {
                senderAddress?: string;
            }): _55.QueryPendingSendToEth;
            fromAmino(object: _55.QueryPendingSendToEthAmino): _55.QueryPendingSendToEth;
            toAmino(message: _55.QueryPendingSendToEth): _55.QueryPendingSendToEthAmino;
            fromAminoMsg(object: _55.QueryPendingSendToEthAminoMsg): _55.QueryPendingSendToEth;
            fromProtoMsg(message: _55.QueryPendingSendToEthProtoMsg): _55.QueryPendingSendToEth;
            toProto(message: _55.QueryPendingSendToEth): Uint8Array;
            toProtoMsg(message: _55.QueryPendingSendToEth): _55.QueryPendingSendToEthProtoMsg;
        };
        QueryPendingSendToEthResponse: {
            encode(message: _55.QueryPendingSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryPendingSendToEthResponse;
            fromPartial(object: {
                transfersInBatches?: {
                    id?: string | number | import("long").Long;
                    sender?: string;
                    destAddress?: string;
                    erc20Token?: {
                        contract?: string;
                        amount?: string;
                    };
                    erc20Fee?: {
                        contract?: string;
                        amount?: string;
                    };
                }[];
                unbatchedTransfers?: {
                    id?: string | number | import("long").Long;
                    sender?: string;
                    destAddress?: string;
                    erc20Token?: {
                        contract?: string;
                        amount?: string;
                    };
                    erc20Fee?: {
                        contract?: string;
                        amount?: string;
                    };
                }[];
            }): _55.QueryPendingSendToEthResponse;
            fromAmino(object: _55.QueryPendingSendToEthResponseAmino): _55.QueryPendingSendToEthResponse;
            toAmino(message: _55.QueryPendingSendToEthResponse): _55.QueryPendingSendToEthResponseAmino;
            fromAminoMsg(object: _55.QueryPendingSendToEthResponseAminoMsg): _55.QueryPendingSendToEthResponse;
            fromProtoMsg(message: _55.QueryPendingSendToEthResponseProtoMsg): _55.QueryPendingSendToEthResponse;
            toProto(message: _55.QueryPendingSendToEthResponse): Uint8Array;
            toProtoMsg(message: _55.QueryPendingSendToEthResponse): _55.QueryPendingSendToEthResponseProtoMsg;
        };
        IDSet: {
            encode(message: _54.IDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.IDSet;
            fromPartial(object: {
                ids?: (string | number | import("long").Long)[];
            }): _54.IDSet;
            fromAmino(object: _54.IDSetAmino): _54.IDSet;
            toAmino(message: _54.IDSet): _54.IDSetAmino;
            fromAminoMsg(object: _54.IDSetAminoMsg): _54.IDSet;
            fromProtoMsg(message: _54.IDSetProtoMsg): _54.IDSet;
            toProto(message: _54.IDSet): Uint8Array;
            toProtoMsg(message: _54.IDSet): _54.IDSetProtoMsg;
        };
        BatchFees: {
            encode(message: _54.BatchFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.BatchFees;
            fromPartial(object: {
                token?: string;
                totalFees?: string;
                txCount?: string | number | import("long").Long;
            }): _54.BatchFees;
            fromAmino(object: _54.BatchFeesAmino): _54.BatchFees;
            toAmino(message: _54.BatchFees): _54.BatchFeesAmino;
            fromAminoMsg(object: _54.BatchFeesAminoMsg): _54.BatchFees;
            fromProtoMsg(message: _54.BatchFeesProtoMsg): _54.BatchFees;
            toProto(message: _54.BatchFees): Uint8Array;
            toProtoMsg(message: _54.BatchFees): _54.BatchFeesProtoMsg;
        };
        MsgSetOrchestratorAddress: {
            encode(message: _53.MsgSetOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSetOrchestratorAddress;
            fromPartial(object: {
                validator?: string;
                orchestrator?: string;
                ethAddress?: string;
            }): _53.MsgSetOrchestratorAddress;
            fromAmino(object: _53.MsgSetOrchestratorAddressAmino): _53.MsgSetOrchestratorAddress;
            toAmino(message: _53.MsgSetOrchestratorAddress): _53.MsgSetOrchestratorAddressAmino;
            fromAminoMsg(object: _53.MsgSetOrchestratorAddressAminoMsg): _53.MsgSetOrchestratorAddress;
            fromProtoMsg(message: _53.MsgSetOrchestratorAddressProtoMsg): _53.MsgSetOrchestratorAddress;
            toProto(message: _53.MsgSetOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _53.MsgSetOrchestratorAddress): _53.MsgSetOrchestratorAddressProtoMsg;
        };
        MsgSetOrchestratorAddressResponse: {
            encode(_: _53.MsgSetOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSetOrchestratorAddressResponse;
            fromPartial(_: {}): _53.MsgSetOrchestratorAddressResponse;
            fromAmino(_: _53.MsgSetOrchestratorAddressResponseAmino): _53.MsgSetOrchestratorAddressResponse;
            toAmino(_: _53.MsgSetOrchestratorAddressResponse): _53.MsgSetOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _53.MsgSetOrchestratorAddressResponseAminoMsg): _53.MsgSetOrchestratorAddressResponse;
            fromProtoMsg(message: _53.MsgSetOrchestratorAddressResponseProtoMsg): _53.MsgSetOrchestratorAddressResponse;
            toProto(message: _53.MsgSetOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _53.MsgSetOrchestratorAddressResponse): _53.MsgSetOrchestratorAddressResponseProtoMsg;
        };
        MsgValsetConfirm: {
            encode(message: _53.MsgValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgValsetConfirm;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                orchestrator?: string;
                ethAddress?: string;
                signature?: string;
            }): _53.MsgValsetConfirm;
            fromAmino(object: _53.MsgValsetConfirmAmino): _53.MsgValsetConfirm;
            toAmino(message: _53.MsgValsetConfirm): _53.MsgValsetConfirmAmino;
            fromAminoMsg(object: _53.MsgValsetConfirmAminoMsg): _53.MsgValsetConfirm;
            fromProtoMsg(message: _53.MsgValsetConfirmProtoMsg): _53.MsgValsetConfirm;
            toProto(message: _53.MsgValsetConfirm): Uint8Array;
            toProtoMsg(message: _53.MsgValsetConfirm): _53.MsgValsetConfirmProtoMsg;
        };
        MsgValsetConfirmResponse: {
            encode(_: _53.MsgValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgValsetConfirmResponse;
            fromPartial(_: {}): _53.MsgValsetConfirmResponse;
            fromAmino(_: _53.MsgValsetConfirmResponseAmino): _53.MsgValsetConfirmResponse;
            toAmino(_: _53.MsgValsetConfirmResponse): _53.MsgValsetConfirmResponseAmino;
            fromAminoMsg(object: _53.MsgValsetConfirmResponseAminoMsg): _53.MsgValsetConfirmResponse;
            fromProtoMsg(message: _53.MsgValsetConfirmResponseProtoMsg): _53.MsgValsetConfirmResponse;
            toProto(message: _53.MsgValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _53.MsgValsetConfirmResponse): _53.MsgValsetConfirmResponseProtoMsg;
        };
        MsgSendToEth: {
            encode(message: _53.MsgSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSendToEth;
            fromPartial(object: {
                sender?: string;
                ethDest?: string;
                amount?: {
                    denom?: string;
                    amount?: string;
                };
                bridgeFee?: {
                    denom?: string;
                    amount?: string;
                };
            }): _53.MsgSendToEth;
            fromAmino(object: _53.MsgSendToEthAmino): _53.MsgSendToEth;
            toAmino(message: _53.MsgSendToEth): _53.MsgSendToEthAmino;
            fromAminoMsg(object: _53.MsgSendToEthAminoMsg): _53.MsgSendToEth;
            fromProtoMsg(message: _53.MsgSendToEthProtoMsg): _53.MsgSendToEth;
            toProto(message: _53.MsgSendToEth): Uint8Array;
            toProtoMsg(message: _53.MsgSendToEth): _53.MsgSendToEthProtoMsg;
        };
        MsgSendToEthResponse: {
            encode(_: _53.MsgSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSendToEthResponse;
            fromPartial(_: {}): _53.MsgSendToEthResponse;
            fromAmino(_: _53.MsgSendToEthResponseAmino): _53.MsgSendToEthResponse;
            toAmino(_: _53.MsgSendToEthResponse): _53.MsgSendToEthResponseAmino;
            fromAminoMsg(object: _53.MsgSendToEthResponseAminoMsg): _53.MsgSendToEthResponse;
            fromProtoMsg(message: _53.MsgSendToEthResponseProtoMsg): _53.MsgSendToEthResponse;
            toProto(message: _53.MsgSendToEthResponse): Uint8Array;
            toProtoMsg(message: _53.MsgSendToEthResponse): _53.MsgSendToEthResponseProtoMsg;
        };
        MsgRequestBatch: {
            encode(message: _53.MsgRequestBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgRequestBatch;
            fromPartial(object: {
                sender?: string;
                denom?: string;
            }): _53.MsgRequestBatch;
            fromAmino(object: _53.MsgRequestBatchAmino): _53.MsgRequestBatch;
            toAmino(message: _53.MsgRequestBatch): _53.MsgRequestBatchAmino;
            fromAminoMsg(object: _53.MsgRequestBatchAminoMsg): _53.MsgRequestBatch;
            fromProtoMsg(message: _53.MsgRequestBatchProtoMsg): _53.MsgRequestBatch;
            toProto(message: _53.MsgRequestBatch): Uint8Array;
            toProtoMsg(message: _53.MsgRequestBatch): _53.MsgRequestBatchProtoMsg;
        };
        MsgRequestBatchResponse: {
            encode(_: _53.MsgRequestBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgRequestBatchResponse;
            fromPartial(_: {}): _53.MsgRequestBatchResponse;
            fromAmino(_: _53.MsgRequestBatchResponseAmino): _53.MsgRequestBatchResponse;
            toAmino(_: _53.MsgRequestBatchResponse): _53.MsgRequestBatchResponseAmino;
            fromAminoMsg(object: _53.MsgRequestBatchResponseAminoMsg): _53.MsgRequestBatchResponse;
            fromProtoMsg(message: _53.MsgRequestBatchResponseProtoMsg): _53.MsgRequestBatchResponse;
            toProto(message: _53.MsgRequestBatchResponse): Uint8Array;
            toProtoMsg(message: _53.MsgRequestBatchResponse): _53.MsgRequestBatchResponseProtoMsg;
        };
        MsgConfirmBatch: {
            encode(message: _53.MsgConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgConfirmBatch;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                tokenContract?: string;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _53.MsgConfirmBatch;
            fromAmino(object: _53.MsgConfirmBatchAmino): _53.MsgConfirmBatch;
            toAmino(message: _53.MsgConfirmBatch): _53.MsgConfirmBatchAmino;
            fromAminoMsg(object: _53.MsgConfirmBatchAminoMsg): _53.MsgConfirmBatch;
            fromProtoMsg(message: _53.MsgConfirmBatchProtoMsg): _53.MsgConfirmBatch;
            toProto(message: _53.MsgConfirmBatch): Uint8Array;
            toProtoMsg(message: _53.MsgConfirmBatch): _53.MsgConfirmBatchProtoMsg;
        };
        MsgConfirmBatchResponse: {
            encode(_: _53.MsgConfirmBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgConfirmBatchResponse;
            fromPartial(_: {}): _53.MsgConfirmBatchResponse;
            fromAmino(_: _53.MsgConfirmBatchResponseAmino): _53.MsgConfirmBatchResponse;
            toAmino(_: _53.MsgConfirmBatchResponse): _53.MsgConfirmBatchResponseAmino;
            fromAminoMsg(object: _53.MsgConfirmBatchResponseAminoMsg): _53.MsgConfirmBatchResponse;
            fromProtoMsg(message: _53.MsgConfirmBatchResponseProtoMsg): _53.MsgConfirmBatchResponse;
            toProto(message: _53.MsgConfirmBatchResponse): Uint8Array;
            toProtoMsg(message: _53.MsgConfirmBatchResponse): _53.MsgConfirmBatchResponseProtoMsg;
        };
        MsgConfirmLogicCall: {
            encode(message: _53.MsgConfirmLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgConfirmLogicCall;
            fromPartial(object: {
                invalidationId?: string;
                invalidationNonce?: string | number | import("long").Long;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _53.MsgConfirmLogicCall;
            fromAmino(object: _53.MsgConfirmLogicCallAmino): _53.MsgConfirmLogicCall;
            toAmino(message: _53.MsgConfirmLogicCall): _53.MsgConfirmLogicCallAmino;
            fromAminoMsg(object: _53.MsgConfirmLogicCallAminoMsg): _53.MsgConfirmLogicCall;
            fromProtoMsg(message: _53.MsgConfirmLogicCallProtoMsg): _53.MsgConfirmLogicCall;
            toProto(message: _53.MsgConfirmLogicCall): Uint8Array;
            toProtoMsg(message: _53.MsgConfirmLogicCall): _53.MsgConfirmLogicCallProtoMsg;
        };
        MsgConfirmLogicCallResponse: {
            encode(_: _53.MsgConfirmLogicCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgConfirmLogicCallResponse;
            fromPartial(_: {}): _53.MsgConfirmLogicCallResponse;
            fromAmino(_: _53.MsgConfirmLogicCallResponseAmino): _53.MsgConfirmLogicCallResponse;
            toAmino(_: _53.MsgConfirmLogicCallResponse): _53.MsgConfirmLogicCallResponseAmino;
            fromAminoMsg(object: _53.MsgConfirmLogicCallResponseAminoMsg): _53.MsgConfirmLogicCallResponse;
            fromProtoMsg(message: _53.MsgConfirmLogicCallResponseProtoMsg): _53.MsgConfirmLogicCallResponse;
            toProto(message: _53.MsgConfirmLogicCallResponse): Uint8Array;
            toProtoMsg(message: _53.MsgConfirmLogicCallResponse): _53.MsgConfirmLogicCallResponseProtoMsg;
        };
        MsgSendToCosmosClaim: {
            encode(message: _53.MsgSendToCosmosClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSendToCosmosClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                tokenContract?: string;
                amount?: string;
                ethereumSender?: string;
                cosmosReceiver?: string;
                orchestrator?: string;
            }): _53.MsgSendToCosmosClaim;
            fromAmino(object: _53.MsgSendToCosmosClaimAmino): _53.MsgSendToCosmosClaim;
            toAmino(message: _53.MsgSendToCosmosClaim): _53.MsgSendToCosmosClaimAmino;
            fromAminoMsg(object: _53.MsgSendToCosmosClaimAminoMsg): _53.MsgSendToCosmosClaim;
            fromProtoMsg(message: _53.MsgSendToCosmosClaimProtoMsg): _53.MsgSendToCosmosClaim;
            toProto(message: _53.MsgSendToCosmosClaim): Uint8Array;
            toProtoMsg(message: _53.MsgSendToCosmosClaim): _53.MsgSendToCosmosClaimProtoMsg;
        };
        MsgSendToCosmosClaimResponse: {
            encode(_: _53.MsgSendToCosmosClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSendToCosmosClaimResponse;
            fromPartial(_: {}): _53.MsgSendToCosmosClaimResponse;
            fromAmino(_: _53.MsgSendToCosmosClaimResponseAmino): _53.MsgSendToCosmosClaimResponse;
            toAmino(_: _53.MsgSendToCosmosClaimResponse): _53.MsgSendToCosmosClaimResponseAmino;
            fromAminoMsg(object: _53.MsgSendToCosmosClaimResponseAminoMsg): _53.MsgSendToCosmosClaimResponse;
            fromProtoMsg(message: _53.MsgSendToCosmosClaimResponseProtoMsg): _53.MsgSendToCosmosClaimResponse;
            toProto(message: _53.MsgSendToCosmosClaimResponse): Uint8Array;
            toProtoMsg(message: _53.MsgSendToCosmosClaimResponse): _53.MsgSendToCosmosClaimResponseProtoMsg;
        };
        MsgBatchSendToEthClaim: {
            encode(message: _53.MsgBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgBatchSendToEthClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                batchNonce?: string | number | import("long").Long;
                tokenContract?: string;
                orchestrator?: string;
            }): _53.MsgBatchSendToEthClaim;
            fromAmino(object: _53.MsgBatchSendToEthClaimAmino): _53.MsgBatchSendToEthClaim;
            toAmino(message: _53.MsgBatchSendToEthClaim): _53.MsgBatchSendToEthClaimAmino;
            fromAminoMsg(object: _53.MsgBatchSendToEthClaimAminoMsg): _53.MsgBatchSendToEthClaim;
            fromProtoMsg(message: _53.MsgBatchSendToEthClaimProtoMsg): _53.MsgBatchSendToEthClaim;
            toProto(message: _53.MsgBatchSendToEthClaim): Uint8Array;
            toProtoMsg(message: _53.MsgBatchSendToEthClaim): _53.MsgBatchSendToEthClaimProtoMsg;
        };
        MsgBatchSendToEthClaimResponse: {
            encode(_: _53.MsgBatchSendToEthClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgBatchSendToEthClaimResponse;
            fromPartial(_: {}): _53.MsgBatchSendToEthClaimResponse;
            fromAmino(_: _53.MsgBatchSendToEthClaimResponseAmino): _53.MsgBatchSendToEthClaimResponse;
            toAmino(_: _53.MsgBatchSendToEthClaimResponse): _53.MsgBatchSendToEthClaimResponseAmino;
            fromAminoMsg(object: _53.MsgBatchSendToEthClaimResponseAminoMsg): _53.MsgBatchSendToEthClaimResponse;
            fromProtoMsg(message: _53.MsgBatchSendToEthClaimResponseProtoMsg): _53.MsgBatchSendToEthClaimResponse;
            toProto(message: _53.MsgBatchSendToEthClaimResponse): Uint8Array;
            toProtoMsg(message: _53.MsgBatchSendToEthClaimResponse): _53.MsgBatchSendToEthClaimResponseProtoMsg;
        };
        MsgERC20DeployedClaim: {
            encode(message: _53.MsgERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgERC20DeployedClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                cosmosDenom?: string;
                tokenContract?: string;
                name?: string;
                symbol?: string;
                decimals?: string | number | import("long").Long;
                orchestrator?: string;
            }): _53.MsgERC20DeployedClaim;
            fromAmino(object: _53.MsgERC20DeployedClaimAmino): _53.MsgERC20DeployedClaim;
            toAmino(message: _53.MsgERC20DeployedClaim): _53.MsgERC20DeployedClaimAmino;
            fromAminoMsg(object: _53.MsgERC20DeployedClaimAminoMsg): _53.MsgERC20DeployedClaim;
            fromProtoMsg(message: _53.MsgERC20DeployedClaimProtoMsg): _53.MsgERC20DeployedClaim;
            toProto(message: _53.MsgERC20DeployedClaim): Uint8Array;
            toProtoMsg(message: _53.MsgERC20DeployedClaim): _53.MsgERC20DeployedClaimProtoMsg;
        };
        MsgERC20DeployedClaimResponse: {
            encode(_: _53.MsgERC20DeployedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgERC20DeployedClaimResponse;
            fromPartial(_: {}): _53.MsgERC20DeployedClaimResponse;
            fromAmino(_: _53.MsgERC20DeployedClaimResponseAmino): _53.MsgERC20DeployedClaimResponse;
            toAmino(_: _53.MsgERC20DeployedClaimResponse): _53.MsgERC20DeployedClaimResponseAmino;
            fromAminoMsg(object: _53.MsgERC20DeployedClaimResponseAminoMsg): _53.MsgERC20DeployedClaimResponse;
            fromProtoMsg(message: _53.MsgERC20DeployedClaimResponseProtoMsg): _53.MsgERC20DeployedClaimResponse;
            toProto(message: _53.MsgERC20DeployedClaimResponse): Uint8Array;
            toProtoMsg(message: _53.MsgERC20DeployedClaimResponse): _53.MsgERC20DeployedClaimResponseProtoMsg;
        };
        MsgLogicCallExecutedClaim: {
            encode(message: _53.MsgLogicCallExecutedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgLogicCallExecutedClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                invalidationId?: Uint8Array;
                invalidationNonce?: string | number | import("long").Long;
                orchestrator?: string;
            }): _53.MsgLogicCallExecutedClaim;
            fromAmino(object: _53.MsgLogicCallExecutedClaimAmino): _53.MsgLogicCallExecutedClaim;
            toAmino(message: _53.MsgLogicCallExecutedClaim): _53.MsgLogicCallExecutedClaimAmino;
            fromAminoMsg(object: _53.MsgLogicCallExecutedClaimAminoMsg): _53.MsgLogicCallExecutedClaim;
            fromProtoMsg(message: _53.MsgLogicCallExecutedClaimProtoMsg): _53.MsgLogicCallExecutedClaim;
            toProto(message: _53.MsgLogicCallExecutedClaim): Uint8Array;
            toProtoMsg(message: _53.MsgLogicCallExecutedClaim): _53.MsgLogicCallExecutedClaimProtoMsg;
        };
        MsgLogicCallExecutedClaimResponse: {
            encode(_: _53.MsgLogicCallExecutedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgLogicCallExecutedClaimResponse;
            fromPartial(_: {}): _53.MsgLogicCallExecutedClaimResponse;
            fromAmino(_: _53.MsgLogicCallExecutedClaimResponseAmino): _53.MsgLogicCallExecutedClaimResponse;
            toAmino(_: _53.MsgLogicCallExecutedClaimResponse): _53.MsgLogicCallExecutedClaimResponseAmino;
            fromAminoMsg(object: _53.MsgLogicCallExecutedClaimResponseAminoMsg): _53.MsgLogicCallExecutedClaimResponse;
            fromProtoMsg(message: _53.MsgLogicCallExecutedClaimResponseProtoMsg): _53.MsgLogicCallExecutedClaimResponse;
            toProto(message: _53.MsgLogicCallExecutedClaimResponse): Uint8Array;
            toProtoMsg(message: _53.MsgLogicCallExecutedClaimResponse): _53.MsgLogicCallExecutedClaimResponseProtoMsg;
        };
        MsgValsetUpdatedClaim: {
            encode(message: _53.MsgValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgValsetUpdatedClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                valsetNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                members?: {
                    power?: string | number | import("long").Long;
                    ethereumAddress?: string;
                }[];
                rewardAmount?: string;
                rewardToken?: string;
                orchestrator?: string;
            }): _53.MsgValsetUpdatedClaim;
            fromAmino(object: _53.MsgValsetUpdatedClaimAmino): _53.MsgValsetUpdatedClaim;
            toAmino(message: _53.MsgValsetUpdatedClaim): _53.MsgValsetUpdatedClaimAmino;
            fromAminoMsg(object: _53.MsgValsetUpdatedClaimAminoMsg): _53.MsgValsetUpdatedClaim;
            fromProtoMsg(message: _53.MsgValsetUpdatedClaimProtoMsg): _53.MsgValsetUpdatedClaim;
            toProto(message: _53.MsgValsetUpdatedClaim): Uint8Array;
            toProtoMsg(message: _53.MsgValsetUpdatedClaim): _53.MsgValsetUpdatedClaimProtoMsg;
        };
        MsgValsetUpdatedClaimResponse: {
            encode(_: _53.MsgValsetUpdatedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgValsetUpdatedClaimResponse;
            fromPartial(_: {}): _53.MsgValsetUpdatedClaimResponse;
            fromAmino(_: _53.MsgValsetUpdatedClaimResponseAmino): _53.MsgValsetUpdatedClaimResponse;
            toAmino(_: _53.MsgValsetUpdatedClaimResponse): _53.MsgValsetUpdatedClaimResponseAmino;
            fromAminoMsg(object: _53.MsgValsetUpdatedClaimResponseAminoMsg): _53.MsgValsetUpdatedClaimResponse;
            fromProtoMsg(message: _53.MsgValsetUpdatedClaimResponseProtoMsg): _53.MsgValsetUpdatedClaimResponse;
            toProto(message: _53.MsgValsetUpdatedClaimResponse): Uint8Array;
            toProtoMsg(message: _53.MsgValsetUpdatedClaimResponse): _53.MsgValsetUpdatedClaimResponseProtoMsg;
        };
        MsgCancelSendToEth: {
            encode(message: _53.MsgCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgCancelSendToEth;
            fromPartial(object: {
                transactionId?: string | number | import("long").Long;
                sender?: string;
            }): _53.MsgCancelSendToEth;
            fromAmino(object: _53.MsgCancelSendToEthAmino): _53.MsgCancelSendToEth;
            toAmino(message: _53.MsgCancelSendToEth): _53.MsgCancelSendToEthAmino;
            fromAminoMsg(object: _53.MsgCancelSendToEthAminoMsg): _53.MsgCancelSendToEth;
            fromProtoMsg(message: _53.MsgCancelSendToEthProtoMsg): _53.MsgCancelSendToEth;
            toProto(message: _53.MsgCancelSendToEth): Uint8Array;
            toProtoMsg(message: _53.MsgCancelSendToEth): _53.MsgCancelSendToEthProtoMsg;
        };
        MsgCancelSendToEthResponse: {
            encode(_: _53.MsgCancelSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgCancelSendToEthResponse;
            fromPartial(_: {}): _53.MsgCancelSendToEthResponse;
            fromAmino(_: _53.MsgCancelSendToEthResponseAmino): _53.MsgCancelSendToEthResponse;
            toAmino(_: _53.MsgCancelSendToEthResponse): _53.MsgCancelSendToEthResponseAmino;
            fromAminoMsg(object: _53.MsgCancelSendToEthResponseAminoMsg): _53.MsgCancelSendToEthResponse;
            fromProtoMsg(message: _53.MsgCancelSendToEthResponseProtoMsg): _53.MsgCancelSendToEthResponse;
            toProto(message: _53.MsgCancelSendToEthResponse): Uint8Array;
            toProtoMsg(message: _53.MsgCancelSendToEthResponse): _53.MsgCancelSendToEthResponseProtoMsg;
        };
        MsgSubmitBadSignatureEvidence: {
            encode(message: _53.MsgSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitBadSignatureEvidence;
            fromPartial(object: {
                subject?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                signature?: string;
                sender?: string;
            }): _53.MsgSubmitBadSignatureEvidence;
            fromAmino(object: _53.MsgSubmitBadSignatureEvidenceAmino): _53.MsgSubmitBadSignatureEvidence;
            toAmino(message: _53.MsgSubmitBadSignatureEvidence): _53.MsgSubmitBadSignatureEvidenceAmino;
            fromAminoMsg(object: _53.MsgSubmitBadSignatureEvidenceAminoMsg): _53.MsgSubmitBadSignatureEvidence;
            fromProtoMsg(message: _53.MsgSubmitBadSignatureEvidenceProtoMsg): _53.MsgSubmitBadSignatureEvidence;
            toProto(message: _53.MsgSubmitBadSignatureEvidence): Uint8Array;
            toProtoMsg(message: _53.MsgSubmitBadSignatureEvidence): _53.MsgSubmitBadSignatureEvidenceProtoMsg;
        };
        MsgSubmitBadSignatureEvidenceResponse: {
            encode(_: _53.MsgSubmitBadSignatureEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgSubmitBadSignatureEvidenceResponse;
            fromPartial(_: {}): _53.MsgSubmitBadSignatureEvidenceResponse;
            fromAmino(_: _53.MsgSubmitBadSignatureEvidenceResponseAmino): _53.MsgSubmitBadSignatureEvidenceResponse;
            toAmino(_: _53.MsgSubmitBadSignatureEvidenceResponse): _53.MsgSubmitBadSignatureEvidenceResponseAmino;
            fromAminoMsg(object: _53.MsgSubmitBadSignatureEvidenceResponseAminoMsg): _53.MsgSubmitBadSignatureEvidenceResponse;
            fromProtoMsg(message: _53.MsgSubmitBadSignatureEvidenceResponseProtoMsg): _53.MsgSubmitBadSignatureEvidenceResponse;
            toProto(message: _53.MsgSubmitBadSignatureEvidenceResponse): Uint8Array;
            toProtoMsg(message: _53.MsgSubmitBadSignatureEvidenceResponse): _53.MsgSubmitBadSignatureEvidenceResponseProtoMsg;
        };
        Params: {
            encode(message: _52.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Params;
            fromPartial(object: {
                gravityId?: string;
                contractSourceHash?: string;
                bridgeEthereumAddress?: string;
                bridgeChainId?: string | number | import("long").Long;
                signedValsetsWindow?: string | number | import("long").Long;
                signedBatchesWindow?: string | number | import("long").Long;
                signedLogicCallsWindow?: string | number | import("long").Long;
                targetBatchTimeout?: string | number | import("long").Long;
                averageBlockTime?: string | number | import("long").Long;
                averageEthereumBlockTime?: string | number | import("long").Long;
                slashFractionValset?: Uint8Array;
                slashFractionBatch?: Uint8Array;
                slashFractionLogicCall?: Uint8Array;
                unbondSlashingValsetsWindow?: string | number | import("long").Long;
                slashFractionBadEthSignature?: Uint8Array;
                valsetReward?: {
                    denom?: string;
                    amount?: string;
                };
                bridgeActive?: boolean;
                ethereumBlacklist?: string[];
                erc20ToDenomPermanentSwap?: {
                    erc20?: string;
                    denom?: string;
                };
            }): _52.Params;
            fromAmino(object: _52.ParamsAmino): _52.Params;
            toAmino(message: _52.Params): _52.ParamsAmino;
            fromAminoMsg(object: _52.ParamsAminoMsg): _52.Params;
            fromProtoMsg(message: _52.ParamsProtoMsg): _52.Params;
            toProto(message: _52.Params): Uint8Array;
            toProtoMsg(message: _52.Params): _52.ParamsProtoMsg;
        };
        GenesisState: {
            encode(message: _52.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GenesisState;
            fromPartial(object: {
                params?: {
                    gravityId?: string;
                    contractSourceHash?: string;
                    bridgeEthereumAddress?: string;
                    bridgeChainId?: string | number | import("long").Long;
                    signedValsetsWindow?: string | number | import("long").Long;
                    signedBatchesWindow?: string | number | import("long").Long;
                    signedLogicCallsWindow?: string | number | import("long").Long;
                    targetBatchTimeout?: string | number | import("long").Long;
                    averageBlockTime?: string | number | import("long").Long;
                    averageEthereumBlockTime?: string | number | import("long").Long;
                    slashFractionValset?: Uint8Array;
                    slashFractionBatch?: Uint8Array;
                    slashFractionLogicCall?: Uint8Array;
                    unbondSlashingValsetsWindow?: string | number | import("long").Long;
                    slashFractionBadEthSignature?: Uint8Array;
                    valsetReward?: {
                        denom?: string;
                        amount?: string;
                    };
                    bridgeActive?: boolean;
                    ethereumBlacklist?: string[];
                    erc20ToDenomPermanentSwap?: {
                        erc20?: string;
                        denom?: string;
                    };
                };
                gravityNonces?: {
                    latestValsetNonce?: string | number | import("long").Long;
                    lastObservedNonce?: string | number | import("long").Long;
                    lastSlashedValsetNonce?: string | number | import("long").Long;
                    lastSlashedBatchBlock?: string | number | import("long").Long;
                    lastSlashedLogicCallBlock?: string | number | import("long").Long;
                    lastTxPoolId?: string | number | import("long").Long;
                    lastBatchId?: string | number | import("long").Long;
                };
                valsets?: {
                    nonce?: string | number | import("long").Long;
                    members?: {
                        power?: string | number | import("long").Long;
                        ethereumAddress?: string;
                    }[];
                    height?: string | number | import("long").Long;
                    rewardAmount?: string;
                    rewardToken?: string;
                }[];
                valsetConfirms?: {
                    nonce?: string | number | import("long").Long;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                }[];
                batches?: {
                    batchNonce?: string | number | import("long").Long;
                    batchTimeout?: string | number | import("long").Long;
                    transactions?: {
                        id?: string | number | import("long").Long;
                        sender?: string;
                        destAddress?: string;
                        erc20Token?: {
                            contract?: string;
                            amount?: string;
                        };
                        erc20Fee?: {
                            contract?: string;
                            amount?: string;
                        };
                    }[];
                    tokenContract?: string;
                    block?: string | number | import("long").Long;
                }[];
                batchConfirms?: {
                    nonce?: string | number | import("long").Long;
                    tokenContract?: string;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
                logicCalls?: {
                    transfers?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    fees?: {
                        contract?: string;
                        amount?: string;
                    }[];
                    logicContractAddress?: string;
                    payload?: Uint8Array;
                    timeout?: string | number | import("long").Long;
                    invalidationId?: Uint8Array;
                    invalidationNonce?: string | number | import("long").Long;
                    block?: string | number | import("long").Long;
                }[];
                logicCallConfirms?: {
                    invalidationId?: string;
                    invalidationNonce?: string | number | import("long").Long;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
                attestations?: {
                    observed?: boolean;
                    votes?: string[];
                    height?: string | number | import("long").Long;
                    claim?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }[];
                delegateKeys?: {
                    validator?: string;
                    orchestrator?: string;
                    ethAddress?: string;
                }[];
                erc20ToDenoms?: {
                    erc20?: string;
                    denom?: string;
                }[];
                unbatchedTransfers?: {
                    id?: string | number | import("long").Long;
                    sender?: string;
                    destAddress?: string;
                    erc20Token?: {
                        contract?: string;
                        amount?: string;
                    };
                    erc20Fee?: {
                        contract?: string;
                        amount?: string;
                    };
                }[];
            }): _52.GenesisState;
            fromAmino(object: _52.GenesisStateAmino): _52.GenesisState;
            toAmino(message: _52.GenesisState): _52.GenesisStateAmino;
            fromAminoMsg(object: _52.GenesisStateAminoMsg): _52.GenesisState;
            fromProtoMsg(message: _52.GenesisStateProtoMsg): _52.GenesisState;
            toProto(message: _52.GenesisState): Uint8Array;
            toProtoMsg(message: _52.GenesisState): _52.GenesisStateProtoMsg;
        };
        GravityNonces: {
            encode(message: _52.GravityNonces, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GravityNonces;
            fromPartial(object: {
                latestValsetNonce?: string | number | import("long").Long;
                lastObservedNonce?: string | number | import("long").Long;
                lastSlashedValsetNonce?: string | number | import("long").Long;
                lastSlashedBatchBlock?: string | number | import("long").Long;
                lastSlashedLogicCallBlock?: string | number | import("long").Long;
                lastTxPoolId?: string | number | import("long").Long;
                lastBatchId?: string | number | import("long").Long;
            }): _52.GravityNonces;
            fromAmino(object: _52.GravityNoncesAmino): _52.GravityNonces;
            toAmino(message: _52.GravityNonces): _52.GravityNoncesAmino;
            fromAminoMsg(object: _52.GravityNoncesAminoMsg): _52.GravityNonces;
            fromProtoMsg(message: _52.GravityNoncesProtoMsg): _52.GravityNonces;
            toProto(message: _52.GravityNonces): Uint8Array;
            toProtoMsg(message: _52.GravityNonces): _52.GravityNoncesProtoMsg;
        };
        signTypeFromJSON(object: any): _51.SignType;
        signTypeToJSON(object: _51.SignType): string;
        SignType: typeof _51.SignType;
        SignTypeSDKType: typeof _51.SignType;
        SignTypeAmino: typeof _51.SignType;
        OutgoingTxBatch: {
            encode(message: _50.OutgoingTxBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.OutgoingTxBatch;
            fromPartial(object: {
                batchNonce?: string | number | import("long").Long;
                batchTimeout?: string | number | import("long").Long;
                transactions?: {
                    id?: string | number | import("long").Long;
                    sender?: string;
                    destAddress?: string;
                    erc20Token?: {
                        contract?: string;
                        amount?: string;
                    };
                    erc20Fee?: {
                        contract?: string;
                        amount?: string;
                    };
                }[];
                tokenContract?: string;
                block?: string | number | import("long").Long;
            }): _50.OutgoingTxBatch;
            fromAmino(object: _50.OutgoingTxBatchAmino): _50.OutgoingTxBatch;
            toAmino(message: _50.OutgoingTxBatch): _50.OutgoingTxBatchAmino;
            fromAminoMsg(object: _50.OutgoingTxBatchAminoMsg): _50.OutgoingTxBatch;
            fromProtoMsg(message: _50.OutgoingTxBatchProtoMsg): _50.OutgoingTxBatch;
            toProto(message: _50.OutgoingTxBatch): Uint8Array;
            toProtoMsg(message: _50.OutgoingTxBatch): _50.OutgoingTxBatchProtoMsg;
        };
        OutgoingTransferTx: {
            encode(message: _50.OutgoingTransferTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.OutgoingTransferTx;
            fromPartial(object: {
                id?: string | number | import("long").Long;
                sender?: string;
                destAddress?: string;
                erc20Token?: {
                    contract?: string;
                    amount?: string;
                };
                erc20Fee?: {
                    contract?: string;
                    amount?: string;
                };
            }): _50.OutgoingTransferTx;
            fromAmino(object: _50.OutgoingTransferTxAmino): _50.OutgoingTransferTx;
            toAmino(message: _50.OutgoingTransferTx): _50.OutgoingTransferTxAmino;
            fromAminoMsg(object: _50.OutgoingTransferTxAminoMsg): _50.OutgoingTransferTx;
            fromProtoMsg(message: _50.OutgoingTransferTxProtoMsg): _50.OutgoingTransferTx;
            toProto(message: _50.OutgoingTransferTx): Uint8Array;
            toProtoMsg(message: _50.OutgoingTransferTx): _50.OutgoingTransferTxProtoMsg;
        };
        OutgoingLogicCall: {
            encode(message: _50.OutgoingLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.OutgoingLogicCall;
            fromPartial(object: {
                transfers?: {
                    contract?: string;
                    amount?: string;
                }[];
                fees?: {
                    contract?: string;
                    amount?: string;
                }[];
                logicContractAddress?: string;
                payload?: Uint8Array;
                timeout?: string | number | import("long").Long;
                invalidationId?: Uint8Array;
                invalidationNonce?: string | number | import("long").Long;
                block?: string | number | import("long").Long;
            }): _50.OutgoingLogicCall;
            fromAmino(object: _50.OutgoingLogicCallAmino): _50.OutgoingLogicCall;
            toAmino(message: _50.OutgoingLogicCall): _50.OutgoingLogicCallAmino;
            fromAminoMsg(object: _50.OutgoingLogicCallAminoMsg): _50.OutgoingLogicCall;
            fromProtoMsg(message: _50.OutgoingLogicCallProtoMsg): _50.OutgoingLogicCall;
            toProto(message: _50.OutgoingLogicCall): Uint8Array;
            toProtoMsg(message: _50.OutgoingLogicCall): _50.OutgoingLogicCallProtoMsg;
        };
        claimTypeFromJSON(object: any): _49.ClaimType;
        claimTypeToJSON(object: _49.ClaimType): string;
        ClaimType: typeof _49.ClaimType;
        ClaimTypeSDKType: typeof _49.ClaimType;
        ClaimTypeAmino: typeof _49.ClaimType;
        Attestation: {
            encode(message: _49.Attestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Attestation;
            fromPartial(object: {
                observed?: boolean;
                votes?: string[];
                height?: string | number | import("long").Long;
                claim?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }): _49.Attestation;
            fromAmino(object: _49.AttestationAmino): _49.Attestation;
            toAmino(message: _49.Attestation): _49.AttestationAmino;
            fromAminoMsg(object: _49.AttestationAminoMsg): _49.Attestation;
            fromProtoMsg(message: _49.AttestationProtoMsg): _49.Attestation;
            toProto(message: _49.Attestation): Uint8Array;
            toProtoMsg(message: _49.Attestation): _49.AttestationProtoMsg;
        };
        ERC20Token: {
            encode(message: _49.ERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ERC20Token;
            fromPartial(object: {
                contract?: string;
                amount?: string;
            }): _49.ERC20Token;
            fromAmino(object: _49.ERC20TokenAmino): _49.ERC20Token;
            toAmino(message: _49.ERC20Token): _49.ERC20TokenAmino;
            fromAminoMsg(object: _49.ERC20TokenAminoMsg): _49.ERC20Token;
            fromProtoMsg(message: _49.ERC20TokenProtoMsg): _49.ERC20Token;
            toProto(message: _49.ERC20Token): Uint8Array;
            toProtoMsg(message: _49.ERC20Token): _49.ERC20TokenProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            gravity: {
                v1: _107.MsgClientImpl;
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            gravity: {
                v1: {
                    params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                    currentValset(request?: _55.QueryCurrentValsetRequest): Promise<_55.QueryCurrentValsetResponse>;
                    valsetRequest(request: _55.QueryValsetRequestRequest): Promise<_55.QueryValsetRequestResponse>;
                    valsetConfirm(request: _55.QueryValsetConfirmRequest): Promise<_55.QueryValsetConfirmResponse>;
                    valsetConfirmsByNonce(request: _55.QueryValsetConfirmsByNonceRequest): Promise<_55.QueryValsetConfirmsByNonceResponse>;
                    lastValsetRequests(request?: _55.QueryLastValsetRequestsRequest): Promise<_55.QueryLastValsetRequestsResponse>;
                    lastPendingValsetRequestByAddr(request: _55.QueryLastPendingValsetRequestByAddrRequest): Promise<_55.QueryLastPendingValsetRequestByAddrResponse>;
                    lastPendingBatchRequestByAddr(request: _55.QueryLastPendingBatchRequestByAddrRequest): Promise<_55.QueryLastPendingBatchRequestByAddrResponse>;
                    lastPendingLogicCallByAddr(request: _55.QueryLastPendingLogicCallByAddrRequest): Promise<_55.QueryLastPendingLogicCallByAddrResponse>;
                    lastEventNonceByAddr(request: _55.QueryLastEventNonceByAddrRequest): Promise<_55.QueryLastEventNonceByAddrResponse>;
                    batchFees(request?: _55.QueryBatchFeeRequest): Promise<_55.QueryBatchFeeResponse>;
                    outgoingTxBatches(request?: _55.QueryOutgoingTxBatchesRequest): Promise<_55.QueryOutgoingTxBatchesResponse>;
                    outgoingLogicCalls(request?: _55.QueryOutgoingLogicCallsRequest): Promise<_55.QueryOutgoingLogicCallsResponse>;
                    batchRequestByNonce(request: _55.QueryBatchRequestByNonceRequest): Promise<_55.QueryBatchRequestByNonceResponse>;
                    batchConfirms(request: _55.QueryBatchConfirmsRequest): Promise<_55.QueryBatchConfirmsResponse>;
                    logicConfirms(request: _55.QueryLogicConfirmsRequest): Promise<_55.QueryLogicConfirmsResponse>;
                    eRC20ToDenom(request: _55.QueryERC20ToDenomRequest): Promise<_55.QueryERC20ToDenomResponse>;
                    denomToERC20(request: _55.QueryDenomToERC20Request): Promise<_55.QueryDenomToERC20Response>;
                    getAttestations(request: _55.QueryAttestationsRequest): Promise<_55.QueryAttestationsResponse>;
                    getDelegateKeyByValidator(request: _55.QueryDelegateKeysByValidatorAddress): Promise<_55.QueryDelegateKeysByValidatorAddressResponse>;
                    getDelegateKeyByEth(request: _55.QueryDelegateKeysByEthAddress): Promise<_55.QueryDelegateKeysByEthAddressResponse>;
                    getDelegateKeyByOrchestrator(request: _55.QueryDelegateKeysByOrchestratorAddress): Promise<_55.QueryDelegateKeysByOrchestratorAddressResponse>;
                    getPendingSendToEth(request: _55.QueryPendingSendToEth): Promise<_55.QueryPendingSendToEthResponse>;
                };
            };
        }>;
    };
}
