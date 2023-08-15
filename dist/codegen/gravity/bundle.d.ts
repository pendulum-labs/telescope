/// <reference types="long" />
import * as _51 from "./v1/attestation";
import * as _52 from "./v1/batch";
import * as _53 from "./v1/ethereum_signer";
import * as _54 from "./v1/genesis";
import * as _55 from "./v1/msgs";
import * as _56 from "./v1/pool";
import * as _57 from "./v1/query";
import * as _58 from "./v1/types";
import * as _109 from "./v1/query.rpc.Query";
import * as _110 from "./v1/msgs.rpc.msg";
export declare namespace gravity {
    const v1: {
        MsgClientImpl: typeof _110.MsgClientImpl;
        QueryClientImpl: typeof _109.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
            currentValset(request?: _57.QueryCurrentValsetRequest): Promise<_57.QueryCurrentValsetResponse>;
            valsetRequest(request: _57.QueryValsetRequestRequest): Promise<_57.QueryValsetRequestResponse>;
            valsetConfirm(request: _57.QueryValsetConfirmRequest): Promise<_57.QueryValsetConfirmResponse>;
            valsetConfirmsByNonce(request: _57.QueryValsetConfirmsByNonceRequest): Promise<_57.QueryValsetConfirmsByNonceResponse>;
            lastValsetRequests(request?: _57.QueryLastValsetRequestsRequest): Promise<_57.QueryLastValsetRequestsResponse>;
            lastPendingValsetRequestByAddr(request: _57.QueryLastPendingValsetRequestByAddrRequest): Promise<_57.QueryLastPendingValsetRequestByAddrResponse>;
            lastPendingBatchRequestByAddr(request: _57.QueryLastPendingBatchRequestByAddrRequest): Promise<_57.QueryLastPendingBatchRequestByAddrResponse>;
            lastPendingLogicCallByAddr(request: _57.QueryLastPendingLogicCallByAddrRequest): Promise<_57.QueryLastPendingLogicCallByAddrResponse>;
            lastEventNonceByAddr(request: _57.QueryLastEventNonceByAddrRequest): Promise<_57.QueryLastEventNonceByAddrResponse>;
            batchFees(request?: _57.QueryBatchFeeRequest): Promise<_57.QueryBatchFeeResponse>;
            outgoingTxBatches(request?: _57.QueryOutgoingTxBatchesRequest): Promise<_57.QueryOutgoingTxBatchesResponse>;
            outgoingLogicCalls(request?: _57.QueryOutgoingLogicCallsRequest): Promise<_57.QueryOutgoingLogicCallsResponse>;
            batchRequestByNonce(request: _57.QueryBatchRequestByNonceRequest): Promise<_57.QueryBatchRequestByNonceResponse>;
            batchConfirms(request: _57.QueryBatchConfirmsRequest): Promise<_57.QueryBatchConfirmsResponse>;
            logicConfirms(request: _57.QueryLogicConfirmsRequest): Promise<_57.QueryLogicConfirmsResponse>;
            eRC20ToDenom(request: _57.QueryERC20ToDenomRequest): Promise<_57.QueryERC20ToDenomResponse>;
            denomToERC20(request: _57.QueryDenomToERC20Request): Promise<_57.QueryDenomToERC20Response>;
            getAttestations(request: _57.QueryAttestationsRequest): Promise<_57.QueryAttestationsResponse>;
            getDelegateKeyByValidator(request: _57.QueryDelegateKeysByValidatorAddress): Promise<_57.QueryDelegateKeysByValidatorAddressResponse>;
            getDelegateKeyByEth(request: _57.QueryDelegateKeysByEthAddress): Promise<_57.QueryDelegateKeysByEthAddressResponse>;
            getDelegateKeyByOrchestrator(request: _57.QueryDelegateKeysByOrchestratorAddress): Promise<_57.QueryDelegateKeysByOrchestratorAddressResponse>;
            getPendingSendToEth(request: _57.QueryPendingSendToEth): Promise<_57.QueryPendingSendToEthResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                valsetConfirm(value: _55.MsgValsetConfirm): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToEth(value: _55.MsgSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                requestBatch(value: _55.MsgRequestBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmBatch(value: _55.MsgConfirmBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmLogicCall(value: _55.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToCosmosClaim(value: _55.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                batchSendToEthClaim(value: _55.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                valsetUpdateClaim(value: _55.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                eRC20DeployedClaim(value: _55.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                logicCallExecutedClaim(value: _55.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOrchestratorAddress(value: _55.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelSendToEth(value: _55.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitBadSignatureEvidence(value: _55.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                valsetConfirm(value: _55.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _55.MsgValsetConfirm;
                };
                sendToEth(value: _55.MsgSendToEth): {
                    typeUrl: string;
                    value: _55.MsgSendToEth;
                };
                requestBatch(value: _55.MsgRequestBatch): {
                    typeUrl: string;
                    value: _55.MsgRequestBatch;
                };
                confirmBatch(value: _55.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _55.MsgConfirmBatch;
                };
                confirmLogicCall(value: _55.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _55.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _55.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _55.MsgSendToCosmosClaim;
                };
                batchSendToEthClaim(value: _55.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _55.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _55.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _55.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _55.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _55.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _55.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _55.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _55.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _55.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _55.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _55.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _55.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _55.MsgSubmitBadSignatureEvidence;
                };
            };
            fromPartial: {
                valsetConfirm(value: _55.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _55.MsgValsetConfirm;
                };
                sendToEth(value: _55.MsgSendToEth): {
                    typeUrl: string;
                    value: _55.MsgSendToEth;
                };
                requestBatch(value: _55.MsgRequestBatch): {
                    typeUrl: string;
                    value: _55.MsgRequestBatch;
                };
                confirmBatch(value: _55.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _55.MsgConfirmBatch;
                };
                confirmLogicCall(value: _55.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _55.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _55.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _55.MsgSendToCosmosClaim;
                };
                batchSendToEthClaim(value: _55.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _55.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _55.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _55.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _55.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _55.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _55.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _55.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _55.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _55.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _55.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _55.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _55.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _55.MsgSubmitBadSignatureEvidence;
                };
            };
        };
        AminoConverter: {
            "/gravity.v1.MsgValsetConfirm": {
                aminoType: string;
                toAmino: (message: _55.MsgValsetConfirm) => _55.MsgValsetConfirmAmino;
                fromAmino: (object: _55.MsgValsetConfirmAmino) => _55.MsgValsetConfirm;
            };
            "/gravity.v1.MsgSendToEth": {
                aminoType: string;
                toAmino: (message: _55.MsgSendToEth) => _55.MsgSendToEthAmino;
                fromAmino: (object: _55.MsgSendToEthAmino) => _55.MsgSendToEth;
            };
            "/gravity.v1.MsgRequestBatch": {
                aminoType: string;
                toAmino: (message: _55.MsgRequestBatch) => _55.MsgRequestBatchAmino;
                fromAmino: (object: _55.MsgRequestBatchAmino) => _55.MsgRequestBatch;
            };
            "/gravity.v1.MsgConfirmBatch": {
                aminoType: string;
                toAmino: (message: _55.MsgConfirmBatch) => _55.MsgConfirmBatchAmino;
                fromAmino: (object: _55.MsgConfirmBatchAmino) => _55.MsgConfirmBatch;
            };
            "/gravity.v1.MsgConfirmLogicCall": {
                aminoType: string;
                toAmino: (message: _55.MsgConfirmLogicCall) => _55.MsgConfirmLogicCallAmino;
                fromAmino: (object: _55.MsgConfirmLogicCallAmino) => _55.MsgConfirmLogicCall;
            };
            "/gravity.v1.MsgSendToCosmosClaim": {
                aminoType: string;
                toAmino: (message: _55.MsgSendToCosmosClaim) => _55.MsgSendToCosmosClaimAmino;
                fromAmino: (object: _55.MsgSendToCosmosClaimAmino) => _55.MsgSendToCosmosClaim;
            };
            "/gravity.v1.MsgBatchSendToEthClaim": {
                aminoType: string;
                toAmino: (message: _55.MsgBatchSendToEthClaim) => _55.MsgBatchSendToEthClaimAmino;
                fromAmino: (object: _55.MsgBatchSendToEthClaimAmino) => _55.MsgBatchSendToEthClaim;
            };
            "/gravity.v1.MsgValsetUpdatedClaim": {
                aminoType: string;
                toAmino: (message: _55.MsgValsetUpdatedClaim) => _55.MsgValsetUpdatedClaimAmino;
                fromAmino: (object: _55.MsgValsetUpdatedClaimAmino) => _55.MsgValsetUpdatedClaim;
            };
            "/gravity.v1.MsgERC20DeployedClaim": {
                aminoType: string;
                toAmino: (message: _55.MsgERC20DeployedClaim) => _55.MsgERC20DeployedClaimAmino;
                fromAmino: (object: _55.MsgERC20DeployedClaimAmino) => _55.MsgERC20DeployedClaim;
            };
            "/gravity.v1.MsgLogicCallExecutedClaim": {
                aminoType: string;
                toAmino: (message: _55.MsgLogicCallExecutedClaim) => _55.MsgLogicCallExecutedClaimAmino;
                fromAmino: (object: _55.MsgLogicCallExecutedClaimAmino) => _55.MsgLogicCallExecutedClaim;
            };
            "/gravity.v1.MsgSetOrchestratorAddress": {
                aminoType: string;
                toAmino: (message: _55.MsgSetOrchestratorAddress) => _55.MsgSetOrchestratorAddressAmino;
                fromAmino: (object: _55.MsgSetOrchestratorAddressAmino) => _55.MsgSetOrchestratorAddress;
            };
            "/gravity.v1.MsgCancelSendToEth": {
                aminoType: string;
                toAmino: (message: _55.MsgCancelSendToEth) => _55.MsgCancelSendToEthAmino;
                fromAmino: (object: _55.MsgCancelSendToEthAmino) => _55.MsgCancelSendToEth;
            };
            "/gravity.v1.MsgSubmitBadSignatureEvidence": {
                aminoType: string;
                toAmino: (message: _55.MsgSubmitBadSignatureEvidence) => _55.MsgSubmitBadSignatureEvidenceAmino;
                fromAmino: (object: _55.MsgSubmitBadSignatureEvidenceAmino) => _55.MsgSubmitBadSignatureEvidence;
            };
        };
        BridgeValidator: {
            encode(message: _58.BridgeValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.BridgeValidator;
            fromPartial(object: {
                power?: string | number | import("long").Long;
                ethereumAddress?: string;
            }): _58.BridgeValidator;
            fromAmino(object: _58.BridgeValidatorAmino): _58.BridgeValidator;
            toAmino(message: _58.BridgeValidator): _58.BridgeValidatorAmino;
            fromAminoMsg(object: _58.BridgeValidatorAminoMsg): _58.BridgeValidator;
            fromProtoMsg(message: _58.BridgeValidatorProtoMsg): _58.BridgeValidator;
            toProto(message: _58.BridgeValidator): Uint8Array;
            toProtoMsg(message: _58.BridgeValidator): _58.BridgeValidatorProtoMsg;
        };
        Valset: {
            encode(message: _58.Valset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Valset;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                members?: {
                    power?: string | number | import("long").Long;
                    ethereumAddress?: string;
                }[];
                height?: string | number | import("long").Long;
                rewardAmount?: string;
                rewardToken?: string;
            }): _58.Valset;
            fromAmino(object: _58.ValsetAmino): _58.Valset;
            toAmino(message: _58.Valset): _58.ValsetAmino;
            fromAminoMsg(object: _58.ValsetAminoMsg): _58.Valset;
            fromProtoMsg(message: _58.ValsetProtoMsg): _58.Valset;
            toProto(message: _58.Valset): Uint8Array;
            toProtoMsg(message: _58.Valset): _58.ValsetProtoMsg;
        };
        LastObservedEthereumBlockHeight: {
            encode(message: _58.LastObservedEthereumBlockHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.LastObservedEthereumBlockHeight;
            fromPartial(object: {
                cosmosBlockHeight?: string | number | import("long").Long;
                ethereumBlockHeight?: string | number | import("long").Long;
            }): _58.LastObservedEthereumBlockHeight;
            fromAmino(object: _58.LastObservedEthereumBlockHeightAmino): _58.LastObservedEthereumBlockHeight;
            toAmino(message: _58.LastObservedEthereumBlockHeight): _58.LastObservedEthereumBlockHeightAmino;
            fromAminoMsg(object: _58.LastObservedEthereumBlockHeightAminoMsg): _58.LastObservedEthereumBlockHeight;
            fromProtoMsg(message: _58.LastObservedEthereumBlockHeightProtoMsg): _58.LastObservedEthereumBlockHeight;
            toProto(message: _58.LastObservedEthereumBlockHeight): Uint8Array;
            toProtoMsg(message: _58.LastObservedEthereumBlockHeight): _58.LastObservedEthereumBlockHeightProtoMsg;
        };
        ERC20ToDenom: {
            encode(message: _58.ERC20ToDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ERC20ToDenom;
            fromPartial(object: {
                erc20?: string;
                denom?: string;
            }): _58.ERC20ToDenom;
            fromAmino(object: _58.ERC20ToDenomAmino): _58.ERC20ToDenom;
            toAmino(message: _58.ERC20ToDenom): _58.ERC20ToDenomAmino;
            fromAminoMsg(object: _58.ERC20ToDenomAminoMsg): _58.ERC20ToDenom;
            fromProtoMsg(message: _58.ERC20ToDenomProtoMsg): _58.ERC20ToDenom;
            toProto(message: _58.ERC20ToDenom): Uint8Array;
            toProtoMsg(message: _58.ERC20ToDenom): _58.ERC20ToDenomProtoMsg;
        };
        UnhaltBridgeProposal: {
            encode(message: _58.UnhaltBridgeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.UnhaltBridgeProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                targetNonce?: string | number | import("long").Long;
            }): _58.UnhaltBridgeProposal;
            fromAmino(object: _58.UnhaltBridgeProposalAmino): _58.UnhaltBridgeProposal;
            toAmino(message: _58.UnhaltBridgeProposal): _58.UnhaltBridgeProposalAmino;
            fromAminoMsg(object: _58.UnhaltBridgeProposalAminoMsg): _58.UnhaltBridgeProposal;
            fromProtoMsg(message: _58.UnhaltBridgeProposalProtoMsg): _58.UnhaltBridgeProposal;
            toProto(message: _58.UnhaltBridgeProposal): Uint8Array;
            toProtoMsg(message: _58.UnhaltBridgeProposal): _58.UnhaltBridgeProposalProtoMsg;
        };
        AirdropProposal: {
            encode(message: _58.AirdropProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.AirdropProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                denom?: string;
                recipients?: Uint8Array;
                amounts?: (string | number | import("long").Long)[];
            }): _58.AirdropProposal;
            fromAmino(object: _58.AirdropProposalAmino): _58.AirdropProposal;
            toAmino(message: _58.AirdropProposal): _58.AirdropProposalAmino;
            fromAminoMsg(object: _58.AirdropProposalAminoMsg): _58.AirdropProposal;
            fromProtoMsg(message: _58.AirdropProposalProtoMsg): _58.AirdropProposal;
            toProto(message: _58.AirdropProposal): Uint8Array;
            toProtoMsg(message: _58.AirdropProposal): _58.AirdropProposalProtoMsg;
        };
        IBCMetadataProposal: {
            encode(message: _58.IBCMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.IBCMetadataProposal;
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
            }): _58.IBCMetadataProposal;
            fromAmino(object: _58.IBCMetadataProposalAmino): _58.IBCMetadataProposal;
            toAmino(message: _58.IBCMetadataProposal): _58.IBCMetadataProposalAmino;
            fromAminoMsg(object: _58.IBCMetadataProposalAminoMsg): _58.IBCMetadataProposal;
            fromProtoMsg(message: _58.IBCMetadataProposalProtoMsg): _58.IBCMetadataProposal;
            toProto(message: _58.IBCMetadataProposal): Uint8Array;
            toProtoMsg(message: _58.IBCMetadataProposal): _58.IBCMetadataProposalProtoMsg;
        };
        QueryParamsRequest: {
            encode(_: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
            fromPartial(_: {}): _57.QueryParamsRequest;
            fromAmino(_: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
            toAmino(_: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
            fromAminoMsg(object: _57.QueryParamsRequestAminoMsg): _57.QueryParamsRequest;
            fromProtoMsg(message: _57.QueryParamsRequestProtoMsg): _57.QueryParamsRequest;
            toProto(message: _57.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
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
            }): _57.QueryParamsResponse;
            fromAmino(object: _57.QueryParamsResponseAmino): _57.QueryParamsResponse;
            toAmino(message: _57.QueryParamsResponse): _57.QueryParamsResponseAmino;
            fromAminoMsg(object: _57.QueryParamsResponseAminoMsg): _57.QueryParamsResponse;
            fromProtoMsg(message: _57.QueryParamsResponseProtoMsg): _57.QueryParamsResponse;
            toProto(message: _57.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseProtoMsg;
        };
        QueryCurrentValsetRequest: {
            encode(_: _57.QueryCurrentValsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryCurrentValsetRequest;
            fromPartial(_: {}): _57.QueryCurrentValsetRequest;
            fromAmino(_: _57.QueryCurrentValsetRequestAmino): _57.QueryCurrentValsetRequest;
            toAmino(_: _57.QueryCurrentValsetRequest): _57.QueryCurrentValsetRequestAmino;
            fromAminoMsg(object: _57.QueryCurrentValsetRequestAminoMsg): _57.QueryCurrentValsetRequest;
            fromProtoMsg(message: _57.QueryCurrentValsetRequestProtoMsg): _57.QueryCurrentValsetRequest;
            toProto(message: _57.QueryCurrentValsetRequest): Uint8Array;
            toProtoMsg(message: _57.QueryCurrentValsetRequest): _57.QueryCurrentValsetRequestProtoMsg;
        };
        QueryCurrentValsetResponse: {
            encode(message: _57.QueryCurrentValsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryCurrentValsetResponse;
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
            }): _57.QueryCurrentValsetResponse;
            fromAmino(object: _57.QueryCurrentValsetResponseAmino): _57.QueryCurrentValsetResponse;
            toAmino(message: _57.QueryCurrentValsetResponse): _57.QueryCurrentValsetResponseAmino;
            fromAminoMsg(object: _57.QueryCurrentValsetResponseAminoMsg): _57.QueryCurrentValsetResponse;
            fromProtoMsg(message: _57.QueryCurrentValsetResponseProtoMsg): _57.QueryCurrentValsetResponse;
            toProto(message: _57.QueryCurrentValsetResponse): Uint8Array;
            toProtoMsg(message: _57.QueryCurrentValsetResponse): _57.QueryCurrentValsetResponseProtoMsg;
        };
        QueryValsetRequestRequest: {
            encode(message: _57.QueryValsetRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValsetRequestRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
            }): _57.QueryValsetRequestRequest;
            fromAmino(object: _57.QueryValsetRequestRequestAmino): _57.QueryValsetRequestRequest;
            toAmino(message: _57.QueryValsetRequestRequest): _57.QueryValsetRequestRequestAmino;
            fromAminoMsg(object: _57.QueryValsetRequestRequestAminoMsg): _57.QueryValsetRequestRequest;
            fromProtoMsg(message: _57.QueryValsetRequestRequestProtoMsg): _57.QueryValsetRequestRequest;
            toProto(message: _57.QueryValsetRequestRequest): Uint8Array;
            toProtoMsg(message: _57.QueryValsetRequestRequest): _57.QueryValsetRequestRequestProtoMsg;
        };
        QueryValsetRequestResponse: {
            encode(message: _57.QueryValsetRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValsetRequestResponse;
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
            }): _57.QueryValsetRequestResponse;
            fromAmino(object: _57.QueryValsetRequestResponseAmino): _57.QueryValsetRequestResponse;
            toAmino(message: _57.QueryValsetRequestResponse): _57.QueryValsetRequestResponseAmino;
            fromAminoMsg(object: _57.QueryValsetRequestResponseAminoMsg): _57.QueryValsetRequestResponse;
            fromProtoMsg(message: _57.QueryValsetRequestResponseProtoMsg): _57.QueryValsetRequestResponse;
            toProto(message: _57.QueryValsetRequestResponse): Uint8Array;
            toProtoMsg(message: _57.QueryValsetRequestResponse): _57.QueryValsetRequestResponseProtoMsg;
        };
        QueryValsetConfirmRequest: {
            encode(message: _57.QueryValsetConfirmRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValsetConfirmRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                address?: string;
            }): _57.QueryValsetConfirmRequest;
            fromAmino(object: _57.QueryValsetConfirmRequestAmino): _57.QueryValsetConfirmRequest;
            toAmino(message: _57.QueryValsetConfirmRequest): _57.QueryValsetConfirmRequestAmino;
            fromAminoMsg(object: _57.QueryValsetConfirmRequestAminoMsg): _57.QueryValsetConfirmRequest;
            fromProtoMsg(message: _57.QueryValsetConfirmRequestProtoMsg): _57.QueryValsetConfirmRequest;
            toProto(message: _57.QueryValsetConfirmRequest): Uint8Array;
            toProtoMsg(message: _57.QueryValsetConfirmRequest): _57.QueryValsetConfirmRequestProtoMsg;
        };
        QueryValsetConfirmResponse: {
            encode(message: _57.QueryValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValsetConfirmResponse;
            fromPartial(object: {
                confirm?: {
                    nonce?: string | number | import("long").Long;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                };
            }): _57.QueryValsetConfirmResponse;
            fromAmino(object: _57.QueryValsetConfirmResponseAmino): _57.QueryValsetConfirmResponse;
            toAmino(message: _57.QueryValsetConfirmResponse): _57.QueryValsetConfirmResponseAmino;
            fromAminoMsg(object: _57.QueryValsetConfirmResponseAminoMsg): _57.QueryValsetConfirmResponse;
            fromProtoMsg(message: _57.QueryValsetConfirmResponseProtoMsg): _57.QueryValsetConfirmResponse;
            toProto(message: _57.QueryValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _57.QueryValsetConfirmResponse): _57.QueryValsetConfirmResponseProtoMsg;
        };
        QueryValsetConfirmsByNonceRequest: {
            encode(message: _57.QueryValsetConfirmsByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValsetConfirmsByNonceRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
            }): _57.QueryValsetConfirmsByNonceRequest;
            fromAmino(object: _57.QueryValsetConfirmsByNonceRequestAmino): _57.QueryValsetConfirmsByNonceRequest;
            toAmino(message: _57.QueryValsetConfirmsByNonceRequest): _57.QueryValsetConfirmsByNonceRequestAmino;
            fromAminoMsg(object: _57.QueryValsetConfirmsByNonceRequestAminoMsg): _57.QueryValsetConfirmsByNonceRequest;
            fromProtoMsg(message: _57.QueryValsetConfirmsByNonceRequestProtoMsg): _57.QueryValsetConfirmsByNonceRequest;
            toProto(message: _57.QueryValsetConfirmsByNonceRequest): Uint8Array;
            toProtoMsg(message: _57.QueryValsetConfirmsByNonceRequest): _57.QueryValsetConfirmsByNonceRequestProtoMsg;
        };
        QueryValsetConfirmsByNonceResponse: {
            encode(message: _57.QueryValsetConfirmsByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryValsetConfirmsByNonceResponse;
            fromPartial(object: {
                confirms?: {
                    nonce?: string | number | import("long").Long;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                }[];
            }): _57.QueryValsetConfirmsByNonceResponse;
            fromAmino(object: _57.QueryValsetConfirmsByNonceResponseAmino): _57.QueryValsetConfirmsByNonceResponse;
            toAmino(message: _57.QueryValsetConfirmsByNonceResponse): _57.QueryValsetConfirmsByNonceResponseAmino;
            fromAminoMsg(object: _57.QueryValsetConfirmsByNonceResponseAminoMsg): _57.QueryValsetConfirmsByNonceResponse;
            fromProtoMsg(message: _57.QueryValsetConfirmsByNonceResponseProtoMsg): _57.QueryValsetConfirmsByNonceResponse;
            toProto(message: _57.QueryValsetConfirmsByNonceResponse): Uint8Array;
            toProtoMsg(message: _57.QueryValsetConfirmsByNonceResponse): _57.QueryValsetConfirmsByNonceResponseProtoMsg;
        };
        QueryLastValsetRequestsRequest: {
            encode(_: _57.QueryLastValsetRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastValsetRequestsRequest;
            fromPartial(_: {}): _57.QueryLastValsetRequestsRequest;
            fromAmino(_: _57.QueryLastValsetRequestsRequestAmino): _57.QueryLastValsetRequestsRequest;
            toAmino(_: _57.QueryLastValsetRequestsRequest): _57.QueryLastValsetRequestsRequestAmino;
            fromAminoMsg(object: _57.QueryLastValsetRequestsRequestAminoMsg): _57.QueryLastValsetRequestsRequest;
            fromProtoMsg(message: _57.QueryLastValsetRequestsRequestProtoMsg): _57.QueryLastValsetRequestsRequest;
            toProto(message: _57.QueryLastValsetRequestsRequest): Uint8Array;
            toProtoMsg(message: _57.QueryLastValsetRequestsRequest): _57.QueryLastValsetRequestsRequestProtoMsg;
        };
        QueryLastValsetRequestsResponse: {
            encode(message: _57.QueryLastValsetRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastValsetRequestsResponse;
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
            }): _57.QueryLastValsetRequestsResponse;
            fromAmino(object: _57.QueryLastValsetRequestsResponseAmino): _57.QueryLastValsetRequestsResponse;
            toAmino(message: _57.QueryLastValsetRequestsResponse): _57.QueryLastValsetRequestsResponseAmino;
            fromAminoMsg(object: _57.QueryLastValsetRequestsResponseAminoMsg): _57.QueryLastValsetRequestsResponse;
            fromProtoMsg(message: _57.QueryLastValsetRequestsResponseProtoMsg): _57.QueryLastValsetRequestsResponse;
            toProto(message: _57.QueryLastValsetRequestsResponse): Uint8Array;
            toProtoMsg(message: _57.QueryLastValsetRequestsResponse): _57.QueryLastValsetRequestsResponseProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrRequest: {
            encode(message: _57.QueryLastPendingValsetRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastPendingValsetRequestByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _57.QueryLastPendingValsetRequestByAddrRequest;
            fromAmino(object: _57.QueryLastPendingValsetRequestByAddrRequestAmino): _57.QueryLastPendingValsetRequestByAddrRequest;
            toAmino(message: _57.QueryLastPendingValsetRequestByAddrRequest): _57.QueryLastPendingValsetRequestByAddrRequestAmino;
            fromAminoMsg(object: _57.QueryLastPendingValsetRequestByAddrRequestAminoMsg): _57.QueryLastPendingValsetRequestByAddrRequest;
            fromProtoMsg(message: _57.QueryLastPendingValsetRequestByAddrRequestProtoMsg): _57.QueryLastPendingValsetRequestByAddrRequest;
            toProto(message: _57.QueryLastPendingValsetRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _57.QueryLastPendingValsetRequestByAddrRequest): _57.QueryLastPendingValsetRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrResponse: {
            encode(message: _57.QueryLastPendingValsetRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastPendingValsetRequestByAddrResponse;
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
            }): _57.QueryLastPendingValsetRequestByAddrResponse;
            fromAmino(object: _57.QueryLastPendingValsetRequestByAddrResponseAmino): _57.QueryLastPendingValsetRequestByAddrResponse;
            toAmino(message: _57.QueryLastPendingValsetRequestByAddrResponse): _57.QueryLastPendingValsetRequestByAddrResponseAmino;
            fromAminoMsg(object: _57.QueryLastPendingValsetRequestByAddrResponseAminoMsg): _57.QueryLastPendingValsetRequestByAddrResponse;
            fromProtoMsg(message: _57.QueryLastPendingValsetRequestByAddrResponseProtoMsg): _57.QueryLastPendingValsetRequestByAddrResponse;
            toProto(message: _57.QueryLastPendingValsetRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _57.QueryLastPendingValsetRequestByAddrResponse): _57.QueryLastPendingValsetRequestByAddrResponseProtoMsg;
        };
        QueryBatchFeeRequest: {
            encode(_: _57.QueryBatchFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryBatchFeeRequest;
            fromPartial(_: {}): _57.QueryBatchFeeRequest;
            fromAmino(_: _57.QueryBatchFeeRequestAmino): _57.QueryBatchFeeRequest;
            toAmino(_: _57.QueryBatchFeeRequest): _57.QueryBatchFeeRequestAmino;
            fromAminoMsg(object: _57.QueryBatchFeeRequestAminoMsg): _57.QueryBatchFeeRequest;
            fromProtoMsg(message: _57.QueryBatchFeeRequestProtoMsg): _57.QueryBatchFeeRequest;
            toProto(message: _57.QueryBatchFeeRequest): Uint8Array;
            toProtoMsg(message: _57.QueryBatchFeeRequest): _57.QueryBatchFeeRequestProtoMsg;
        };
        QueryBatchFeeResponse: {
            encode(message: _57.QueryBatchFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryBatchFeeResponse;
            fromPartial(object: {
                batchFees?: {
                    token?: string;
                    totalFees?: string;
                    txCount?: string | number | import("long").Long;
                }[];
            }): _57.QueryBatchFeeResponse;
            fromAmino(object: _57.QueryBatchFeeResponseAmino): _57.QueryBatchFeeResponse;
            toAmino(message: _57.QueryBatchFeeResponse): _57.QueryBatchFeeResponseAmino;
            fromAminoMsg(object: _57.QueryBatchFeeResponseAminoMsg): _57.QueryBatchFeeResponse;
            fromProtoMsg(message: _57.QueryBatchFeeResponseProtoMsg): _57.QueryBatchFeeResponse;
            toProto(message: _57.QueryBatchFeeResponse): Uint8Array;
            toProtoMsg(message: _57.QueryBatchFeeResponse): _57.QueryBatchFeeResponseProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrRequest: {
            encode(message: _57.QueryLastPendingBatchRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastPendingBatchRequestByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _57.QueryLastPendingBatchRequestByAddrRequest;
            fromAmino(object: _57.QueryLastPendingBatchRequestByAddrRequestAmino): _57.QueryLastPendingBatchRequestByAddrRequest;
            toAmino(message: _57.QueryLastPendingBatchRequestByAddrRequest): _57.QueryLastPendingBatchRequestByAddrRequestAmino;
            fromAminoMsg(object: _57.QueryLastPendingBatchRequestByAddrRequestAminoMsg): _57.QueryLastPendingBatchRequestByAddrRequest;
            fromProtoMsg(message: _57.QueryLastPendingBatchRequestByAddrRequestProtoMsg): _57.QueryLastPendingBatchRequestByAddrRequest;
            toProto(message: _57.QueryLastPendingBatchRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _57.QueryLastPendingBatchRequestByAddrRequest): _57.QueryLastPendingBatchRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrResponse: {
            encode(message: _57.QueryLastPendingBatchRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastPendingBatchRequestByAddrResponse;
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
            }): _57.QueryLastPendingBatchRequestByAddrResponse;
            fromAmino(object: _57.QueryLastPendingBatchRequestByAddrResponseAmino): _57.QueryLastPendingBatchRequestByAddrResponse;
            toAmino(message: _57.QueryLastPendingBatchRequestByAddrResponse): _57.QueryLastPendingBatchRequestByAddrResponseAmino;
            fromAminoMsg(object: _57.QueryLastPendingBatchRequestByAddrResponseAminoMsg): _57.QueryLastPendingBatchRequestByAddrResponse;
            fromProtoMsg(message: _57.QueryLastPendingBatchRequestByAddrResponseProtoMsg): _57.QueryLastPendingBatchRequestByAddrResponse;
            toProto(message: _57.QueryLastPendingBatchRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _57.QueryLastPendingBatchRequestByAddrResponse): _57.QueryLastPendingBatchRequestByAddrResponseProtoMsg;
        };
        QueryLastPendingLogicCallByAddrRequest: {
            encode(message: _57.QueryLastPendingLogicCallByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastPendingLogicCallByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _57.QueryLastPendingLogicCallByAddrRequest;
            fromAmino(object: _57.QueryLastPendingLogicCallByAddrRequestAmino): _57.QueryLastPendingLogicCallByAddrRequest;
            toAmino(message: _57.QueryLastPendingLogicCallByAddrRequest): _57.QueryLastPendingLogicCallByAddrRequestAmino;
            fromAminoMsg(object: _57.QueryLastPendingLogicCallByAddrRequestAminoMsg): _57.QueryLastPendingLogicCallByAddrRequest;
            fromProtoMsg(message: _57.QueryLastPendingLogicCallByAddrRequestProtoMsg): _57.QueryLastPendingLogicCallByAddrRequest;
            toProto(message: _57.QueryLastPendingLogicCallByAddrRequest): Uint8Array;
            toProtoMsg(message: _57.QueryLastPendingLogicCallByAddrRequest): _57.QueryLastPendingLogicCallByAddrRequestProtoMsg;
        };
        QueryLastPendingLogicCallByAddrResponse: {
            encode(message: _57.QueryLastPendingLogicCallByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastPendingLogicCallByAddrResponse;
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
            }): _57.QueryLastPendingLogicCallByAddrResponse;
            fromAmino(object: _57.QueryLastPendingLogicCallByAddrResponseAmino): _57.QueryLastPendingLogicCallByAddrResponse;
            toAmino(message: _57.QueryLastPendingLogicCallByAddrResponse): _57.QueryLastPendingLogicCallByAddrResponseAmino;
            fromAminoMsg(object: _57.QueryLastPendingLogicCallByAddrResponseAminoMsg): _57.QueryLastPendingLogicCallByAddrResponse;
            fromProtoMsg(message: _57.QueryLastPendingLogicCallByAddrResponseProtoMsg): _57.QueryLastPendingLogicCallByAddrResponse;
            toProto(message: _57.QueryLastPendingLogicCallByAddrResponse): Uint8Array;
            toProtoMsg(message: _57.QueryLastPendingLogicCallByAddrResponse): _57.QueryLastPendingLogicCallByAddrResponseProtoMsg;
        };
        QueryOutgoingTxBatchesRequest: {
            encode(_: _57.QueryOutgoingTxBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryOutgoingTxBatchesRequest;
            fromPartial(_: {}): _57.QueryOutgoingTxBatchesRequest;
            fromAmino(_: _57.QueryOutgoingTxBatchesRequestAmino): _57.QueryOutgoingTxBatchesRequest;
            toAmino(_: _57.QueryOutgoingTxBatchesRequest): _57.QueryOutgoingTxBatchesRequestAmino;
            fromAminoMsg(object: _57.QueryOutgoingTxBatchesRequestAminoMsg): _57.QueryOutgoingTxBatchesRequest;
            fromProtoMsg(message: _57.QueryOutgoingTxBatchesRequestProtoMsg): _57.QueryOutgoingTxBatchesRequest;
            toProto(message: _57.QueryOutgoingTxBatchesRequest): Uint8Array;
            toProtoMsg(message: _57.QueryOutgoingTxBatchesRequest): _57.QueryOutgoingTxBatchesRequestProtoMsg;
        };
        QueryOutgoingTxBatchesResponse: {
            encode(message: _57.QueryOutgoingTxBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryOutgoingTxBatchesResponse;
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
            }): _57.QueryOutgoingTxBatchesResponse;
            fromAmino(object: _57.QueryOutgoingTxBatchesResponseAmino): _57.QueryOutgoingTxBatchesResponse;
            toAmino(message: _57.QueryOutgoingTxBatchesResponse): _57.QueryOutgoingTxBatchesResponseAmino;
            fromAminoMsg(object: _57.QueryOutgoingTxBatchesResponseAminoMsg): _57.QueryOutgoingTxBatchesResponse;
            fromProtoMsg(message: _57.QueryOutgoingTxBatchesResponseProtoMsg): _57.QueryOutgoingTxBatchesResponse;
            toProto(message: _57.QueryOutgoingTxBatchesResponse): Uint8Array;
            toProtoMsg(message: _57.QueryOutgoingTxBatchesResponse): _57.QueryOutgoingTxBatchesResponseProtoMsg;
        };
        QueryOutgoingLogicCallsRequest: {
            encode(_: _57.QueryOutgoingLogicCallsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryOutgoingLogicCallsRequest;
            fromPartial(_: {}): _57.QueryOutgoingLogicCallsRequest;
            fromAmino(_: _57.QueryOutgoingLogicCallsRequestAmino): _57.QueryOutgoingLogicCallsRequest;
            toAmino(_: _57.QueryOutgoingLogicCallsRequest): _57.QueryOutgoingLogicCallsRequestAmino;
            fromAminoMsg(object: _57.QueryOutgoingLogicCallsRequestAminoMsg): _57.QueryOutgoingLogicCallsRequest;
            fromProtoMsg(message: _57.QueryOutgoingLogicCallsRequestProtoMsg): _57.QueryOutgoingLogicCallsRequest;
            toProto(message: _57.QueryOutgoingLogicCallsRequest): Uint8Array;
            toProtoMsg(message: _57.QueryOutgoingLogicCallsRequest): _57.QueryOutgoingLogicCallsRequestProtoMsg;
        };
        QueryOutgoingLogicCallsResponse: {
            encode(message: _57.QueryOutgoingLogicCallsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryOutgoingLogicCallsResponse;
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
            }): _57.QueryOutgoingLogicCallsResponse;
            fromAmino(object: _57.QueryOutgoingLogicCallsResponseAmino): _57.QueryOutgoingLogicCallsResponse;
            toAmino(message: _57.QueryOutgoingLogicCallsResponse): _57.QueryOutgoingLogicCallsResponseAmino;
            fromAminoMsg(object: _57.QueryOutgoingLogicCallsResponseAminoMsg): _57.QueryOutgoingLogicCallsResponse;
            fromProtoMsg(message: _57.QueryOutgoingLogicCallsResponseProtoMsg): _57.QueryOutgoingLogicCallsResponse;
            toProto(message: _57.QueryOutgoingLogicCallsResponse): Uint8Array;
            toProtoMsg(message: _57.QueryOutgoingLogicCallsResponse): _57.QueryOutgoingLogicCallsResponseProtoMsg;
        };
        QueryBatchRequestByNonceRequest: {
            encode(message: _57.QueryBatchRequestByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryBatchRequestByNonceRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                contractAddress?: string;
            }): _57.QueryBatchRequestByNonceRequest;
            fromAmino(object: _57.QueryBatchRequestByNonceRequestAmino): _57.QueryBatchRequestByNonceRequest;
            toAmino(message: _57.QueryBatchRequestByNonceRequest): _57.QueryBatchRequestByNonceRequestAmino;
            fromAminoMsg(object: _57.QueryBatchRequestByNonceRequestAminoMsg): _57.QueryBatchRequestByNonceRequest;
            fromProtoMsg(message: _57.QueryBatchRequestByNonceRequestProtoMsg): _57.QueryBatchRequestByNonceRequest;
            toProto(message: _57.QueryBatchRequestByNonceRequest): Uint8Array;
            toProtoMsg(message: _57.QueryBatchRequestByNonceRequest): _57.QueryBatchRequestByNonceRequestProtoMsg;
        };
        QueryBatchRequestByNonceResponse: {
            encode(message: _57.QueryBatchRequestByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryBatchRequestByNonceResponse;
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
            }): _57.QueryBatchRequestByNonceResponse;
            fromAmino(object: _57.QueryBatchRequestByNonceResponseAmino): _57.QueryBatchRequestByNonceResponse;
            toAmino(message: _57.QueryBatchRequestByNonceResponse): _57.QueryBatchRequestByNonceResponseAmino;
            fromAminoMsg(object: _57.QueryBatchRequestByNonceResponseAminoMsg): _57.QueryBatchRequestByNonceResponse;
            fromProtoMsg(message: _57.QueryBatchRequestByNonceResponseProtoMsg): _57.QueryBatchRequestByNonceResponse;
            toProto(message: _57.QueryBatchRequestByNonceResponse): Uint8Array;
            toProtoMsg(message: _57.QueryBatchRequestByNonceResponse): _57.QueryBatchRequestByNonceResponseProtoMsg;
        };
        QueryBatchConfirmsRequest: {
            encode(message: _57.QueryBatchConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryBatchConfirmsRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                contractAddress?: string;
            }): _57.QueryBatchConfirmsRequest;
            fromAmino(object: _57.QueryBatchConfirmsRequestAmino): _57.QueryBatchConfirmsRequest;
            toAmino(message: _57.QueryBatchConfirmsRequest): _57.QueryBatchConfirmsRequestAmino;
            fromAminoMsg(object: _57.QueryBatchConfirmsRequestAminoMsg): _57.QueryBatchConfirmsRequest;
            fromProtoMsg(message: _57.QueryBatchConfirmsRequestProtoMsg): _57.QueryBatchConfirmsRequest;
            toProto(message: _57.QueryBatchConfirmsRequest): Uint8Array;
            toProtoMsg(message: _57.QueryBatchConfirmsRequest): _57.QueryBatchConfirmsRequestProtoMsg;
        };
        QueryBatchConfirmsResponse: {
            encode(message: _57.QueryBatchConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryBatchConfirmsResponse;
            fromPartial(object: {
                confirms?: {
                    nonce?: string | number | import("long").Long;
                    tokenContract?: string;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _57.QueryBatchConfirmsResponse;
            fromAmino(object: _57.QueryBatchConfirmsResponseAmino): _57.QueryBatchConfirmsResponse;
            toAmino(message: _57.QueryBatchConfirmsResponse): _57.QueryBatchConfirmsResponseAmino;
            fromAminoMsg(object: _57.QueryBatchConfirmsResponseAminoMsg): _57.QueryBatchConfirmsResponse;
            fromProtoMsg(message: _57.QueryBatchConfirmsResponseProtoMsg): _57.QueryBatchConfirmsResponse;
            toProto(message: _57.QueryBatchConfirmsResponse): Uint8Array;
            toProtoMsg(message: _57.QueryBatchConfirmsResponse): _57.QueryBatchConfirmsResponseProtoMsg;
        };
        QueryLogicConfirmsRequest: {
            encode(message: _57.QueryLogicConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLogicConfirmsRequest;
            fromPartial(object: {
                invalidationId?: Uint8Array;
                invalidationNonce?: string | number | import("long").Long;
            }): _57.QueryLogicConfirmsRequest;
            fromAmino(object: _57.QueryLogicConfirmsRequestAmino): _57.QueryLogicConfirmsRequest;
            toAmino(message: _57.QueryLogicConfirmsRequest): _57.QueryLogicConfirmsRequestAmino;
            fromAminoMsg(object: _57.QueryLogicConfirmsRequestAminoMsg): _57.QueryLogicConfirmsRequest;
            fromProtoMsg(message: _57.QueryLogicConfirmsRequestProtoMsg): _57.QueryLogicConfirmsRequest;
            toProto(message: _57.QueryLogicConfirmsRequest): Uint8Array;
            toProtoMsg(message: _57.QueryLogicConfirmsRequest): _57.QueryLogicConfirmsRequestProtoMsg;
        };
        QueryLogicConfirmsResponse: {
            encode(message: _57.QueryLogicConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLogicConfirmsResponse;
            fromPartial(object: {
                confirms?: {
                    invalidationId?: string;
                    invalidationNonce?: string | number | import("long").Long;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _57.QueryLogicConfirmsResponse;
            fromAmino(object: _57.QueryLogicConfirmsResponseAmino): _57.QueryLogicConfirmsResponse;
            toAmino(message: _57.QueryLogicConfirmsResponse): _57.QueryLogicConfirmsResponseAmino;
            fromAminoMsg(object: _57.QueryLogicConfirmsResponseAminoMsg): _57.QueryLogicConfirmsResponse;
            fromProtoMsg(message: _57.QueryLogicConfirmsResponseProtoMsg): _57.QueryLogicConfirmsResponse;
            toProto(message: _57.QueryLogicConfirmsResponse): Uint8Array;
            toProtoMsg(message: _57.QueryLogicConfirmsResponse): _57.QueryLogicConfirmsResponseProtoMsg;
        };
        QueryLastEventNonceByAddrRequest: {
            encode(message: _57.QueryLastEventNonceByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastEventNonceByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _57.QueryLastEventNonceByAddrRequest;
            fromAmino(object: _57.QueryLastEventNonceByAddrRequestAmino): _57.QueryLastEventNonceByAddrRequest;
            toAmino(message: _57.QueryLastEventNonceByAddrRequest): _57.QueryLastEventNonceByAddrRequestAmino;
            fromAminoMsg(object: _57.QueryLastEventNonceByAddrRequestAminoMsg): _57.QueryLastEventNonceByAddrRequest;
            fromProtoMsg(message: _57.QueryLastEventNonceByAddrRequestProtoMsg): _57.QueryLastEventNonceByAddrRequest;
            toProto(message: _57.QueryLastEventNonceByAddrRequest): Uint8Array;
            toProtoMsg(message: _57.QueryLastEventNonceByAddrRequest): _57.QueryLastEventNonceByAddrRequestProtoMsg;
        };
        QueryLastEventNonceByAddrResponse: {
            encode(message: _57.QueryLastEventNonceByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryLastEventNonceByAddrResponse;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
            }): _57.QueryLastEventNonceByAddrResponse;
            fromAmino(object: _57.QueryLastEventNonceByAddrResponseAmino): _57.QueryLastEventNonceByAddrResponse;
            toAmino(message: _57.QueryLastEventNonceByAddrResponse): _57.QueryLastEventNonceByAddrResponseAmino;
            fromAminoMsg(object: _57.QueryLastEventNonceByAddrResponseAminoMsg): _57.QueryLastEventNonceByAddrResponse;
            fromProtoMsg(message: _57.QueryLastEventNonceByAddrResponseProtoMsg): _57.QueryLastEventNonceByAddrResponse;
            toProto(message: _57.QueryLastEventNonceByAddrResponse): Uint8Array;
            toProtoMsg(message: _57.QueryLastEventNonceByAddrResponse): _57.QueryLastEventNonceByAddrResponseProtoMsg;
        };
        QueryERC20ToDenomRequest: {
            encode(message: _57.QueryERC20ToDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryERC20ToDenomRequest;
            fromPartial(object: {
                erc20?: string;
            }): _57.QueryERC20ToDenomRequest;
            fromAmino(object: _57.QueryERC20ToDenomRequestAmino): _57.QueryERC20ToDenomRequest;
            toAmino(message: _57.QueryERC20ToDenomRequest): _57.QueryERC20ToDenomRequestAmino;
            fromAminoMsg(object: _57.QueryERC20ToDenomRequestAminoMsg): _57.QueryERC20ToDenomRequest;
            fromProtoMsg(message: _57.QueryERC20ToDenomRequestProtoMsg): _57.QueryERC20ToDenomRequest;
            toProto(message: _57.QueryERC20ToDenomRequest): Uint8Array;
            toProtoMsg(message: _57.QueryERC20ToDenomRequest): _57.QueryERC20ToDenomRequestProtoMsg;
        };
        QueryERC20ToDenomResponse: {
            encode(message: _57.QueryERC20ToDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryERC20ToDenomResponse;
            fromPartial(object: {
                denom?: string;
                cosmosOriginated?: boolean;
            }): _57.QueryERC20ToDenomResponse;
            fromAmino(object: _57.QueryERC20ToDenomResponseAmino): _57.QueryERC20ToDenomResponse;
            toAmino(message: _57.QueryERC20ToDenomResponse): _57.QueryERC20ToDenomResponseAmino;
            fromAminoMsg(object: _57.QueryERC20ToDenomResponseAminoMsg): _57.QueryERC20ToDenomResponse;
            fromProtoMsg(message: _57.QueryERC20ToDenomResponseProtoMsg): _57.QueryERC20ToDenomResponse;
            toProto(message: _57.QueryERC20ToDenomResponse): Uint8Array;
            toProtoMsg(message: _57.QueryERC20ToDenomResponse): _57.QueryERC20ToDenomResponseProtoMsg;
        };
        QueryDenomToERC20Request: {
            encode(message: _57.QueryDenomToERC20Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomToERC20Request;
            fromPartial(object: {
                denom?: string;
            }): _57.QueryDenomToERC20Request;
            fromAmino(object: _57.QueryDenomToERC20RequestAmino): _57.QueryDenomToERC20Request;
            toAmino(message: _57.QueryDenomToERC20Request): _57.QueryDenomToERC20RequestAmino;
            fromAminoMsg(object: _57.QueryDenomToERC20RequestAminoMsg): _57.QueryDenomToERC20Request;
            fromProtoMsg(message: _57.QueryDenomToERC20RequestProtoMsg): _57.QueryDenomToERC20Request;
            toProto(message: _57.QueryDenomToERC20Request): Uint8Array;
            toProtoMsg(message: _57.QueryDenomToERC20Request): _57.QueryDenomToERC20RequestProtoMsg;
        };
        QueryDenomToERC20Response: {
            encode(message: _57.QueryDenomToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDenomToERC20Response;
            fromPartial(object: {
                erc20?: string;
                cosmosOriginated?: boolean;
            }): _57.QueryDenomToERC20Response;
            fromAmino(object: _57.QueryDenomToERC20ResponseAmino): _57.QueryDenomToERC20Response;
            toAmino(message: _57.QueryDenomToERC20Response): _57.QueryDenomToERC20ResponseAmino;
            fromAminoMsg(object: _57.QueryDenomToERC20ResponseAminoMsg): _57.QueryDenomToERC20Response;
            fromProtoMsg(message: _57.QueryDenomToERC20ResponseProtoMsg): _57.QueryDenomToERC20Response;
            toProto(message: _57.QueryDenomToERC20Response): Uint8Array;
            toProtoMsg(message: _57.QueryDenomToERC20Response): _57.QueryDenomToERC20ResponseProtoMsg;
        };
        QueryAttestationsRequest: {
            encode(message: _57.QueryAttestationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAttestationsRequest;
            fromPartial(object: {
                limit?: string | number | import("long").Long;
            }): _57.QueryAttestationsRequest;
            fromAmino(object: _57.QueryAttestationsRequestAmino): _57.QueryAttestationsRequest;
            toAmino(message: _57.QueryAttestationsRequest): _57.QueryAttestationsRequestAmino;
            fromAminoMsg(object: _57.QueryAttestationsRequestAminoMsg): _57.QueryAttestationsRequest;
            fromProtoMsg(message: _57.QueryAttestationsRequestProtoMsg): _57.QueryAttestationsRequest;
            toProto(message: _57.QueryAttestationsRequest): Uint8Array;
            toProtoMsg(message: _57.QueryAttestationsRequest): _57.QueryAttestationsRequestProtoMsg;
        };
        QueryAttestationsResponse: {
            encode(message: _57.QueryAttestationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryAttestationsResponse;
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
            }): _57.QueryAttestationsResponse;
            fromAmino(object: _57.QueryAttestationsResponseAmino): _57.QueryAttestationsResponse;
            toAmino(message: _57.QueryAttestationsResponse): _57.QueryAttestationsResponseAmino;
            fromAminoMsg(object: _57.QueryAttestationsResponseAminoMsg): _57.QueryAttestationsResponse;
            fromProtoMsg(message: _57.QueryAttestationsResponseProtoMsg): _57.QueryAttestationsResponse;
            toProto(message: _57.QueryAttestationsResponse): Uint8Array;
            toProtoMsg(message: _57.QueryAttestationsResponse): _57.QueryAttestationsResponseProtoMsg;
        };
        QueryDelegateKeysByValidatorAddress: {
            encode(message: _57.QueryDelegateKeysByValidatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegateKeysByValidatorAddress;
            fromPartial(object: {
                validatorAddress?: string;
            }): _57.QueryDelegateKeysByValidatorAddress;
            fromAmino(object: _57.QueryDelegateKeysByValidatorAddressAmino): _57.QueryDelegateKeysByValidatorAddress;
            toAmino(message: _57.QueryDelegateKeysByValidatorAddress): _57.QueryDelegateKeysByValidatorAddressAmino;
            fromAminoMsg(object: _57.QueryDelegateKeysByValidatorAddressAminoMsg): _57.QueryDelegateKeysByValidatorAddress;
            fromProtoMsg(message: _57.QueryDelegateKeysByValidatorAddressProtoMsg): _57.QueryDelegateKeysByValidatorAddress;
            toProto(message: _57.QueryDelegateKeysByValidatorAddress): Uint8Array;
            toProtoMsg(message: _57.QueryDelegateKeysByValidatorAddress): _57.QueryDelegateKeysByValidatorAddressProtoMsg;
        };
        QueryDelegateKeysByValidatorAddressResponse: {
            encode(message: _57.QueryDelegateKeysByValidatorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegateKeysByValidatorAddressResponse;
            fromPartial(object: {
                ethAddress?: string;
                orchestratorAddress?: string;
            }): _57.QueryDelegateKeysByValidatorAddressResponse;
            fromAmino(object: _57.QueryDelegateKeysByValidatorAddressResponseAmino): _57.QueryDelegateKeysByValidatorAddressResponse;
            toAmino(message: _57.QueryDelegateKeysByValidatorAddressResponse): _57.QueryDelegateKeysByValidatorAddressResponseAmino;
            fromAminoMsg(object: _57.QueryDelegateKeysByValidatorAddressResponseAminoMsg): _57.QueryDelegateKeysByValidatorAddressResponse;
            fromProtoMsg(message: _57.QueryDelegateKeysByValidatorAddressResponseProtoMsg): _57.QueryDelegateKeysByValidatorAddressResponse;
            toProto(message: _57.QueryDelegateKeysByValidatorAddressResponse): Uint8Array;
            toProtoMsg(message: _57.QueryDelegateKeysByValidatorAddressResponse): _57.QueryDelegateKeysByValidatorAddressResponseProtoMsg;
        };
        QueryDelegateKeysByEthAddress: {
            encode(message: _57.QueryDelegateKeysByEthAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegateKeysByEthAddress;
            fromPartial(object: {
                ethAddress?: string;
            }): _57.QueryDelegateKeysByEthAddress;
            fromAmino(object: _57.QueryDelegateKeysByEthAddressAmino): _57.QueryDelegateKeysByEthAddress;
            toAmino(message: _57.QueryDelegateKeysByEthAddress): _57.QueryDelegateKeysByEthAddressAmino;
            fromAminoMsg(object: _57.QueryDelegateKeysByEthAddressAminoMsg): _57.QueryDelegateKeysByEthAddress;
            fromProtoMsg(message: _57.QueryDelegateKeysByEthAddressProtoMsg): _57.QueryDelegateKeysByEthAddress;
            toProto(message: _57.QueryDelegateKeysByEthAddress): Uint8Array;
            toProtoMsg(message: _57.QueryDelegateKeysByEthAddress): _57.QueryDelegateKeysByEthAddressProtoMsg;
        };
        QueryDelegateKeysByEthAddressResponse: {
            encode(message: _57.QueryDelegateKeysByEthAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegateKeysByEthAddressResponse;
            fromPartial(object: {
                validatorAddress?: string;
                orchestratorAddress?: string;
            }): _57.QueryDelegateKeysByEthAddressResponse;
            fromAmino(object: _57.QueryDelegateKeysByEthAddressResponseAmino): _57.QueryDelegateKeysByEthAddressResponse;
            toAmino(message: _57.QueryDelegateKeysByEthAddressResponse): _57.QueryDelegateKeysByEthAddressResponseAmino;
            fromAminoMsg(object: _57.QueryDelegateKeysByEthAddressResponseAminoMsg): _57.QueryDelegateKeysByEthAddressResponse;
            fromProtoMsg(message: _57.QueryDelegateKeysByEthAddressResponseProtoMsg): _57.QueryDelegateKeysByEthAddressResponse;
            toProto(message: _57.QueryDelegateKeysByEthAddressResponse): Uint8Array;
            toProtoMsg(message: _57.QueryDelegateKeysByEthAddressResponse): _57.QueryDelegateKeysByEthAddressResponseProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddress: {
            encode(message: _57.QueryDelegateKeysByOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegateKeysByOrchestratorAddress;
            fromPartial(object: {
                orchestratorAddress?: string;
            }): _57.QueryDelegateKeysByOrchestratorAddress;
            fromAmino(object: _57.QueryDelegateKeysByOrchestratorAddressAmino): _57.QueryDelegateKeysByOrchestratorAddress;
            toAmino(message: _57.QueryDelegateKeysByOrchestratorAddress): _57.QueryDelegateKeysByOrchestratorAddressAmino;
            fromAminoMsg(object: _57.QueryDelegateKeysByOrchestratorAddressAminoMsg): _57.QueryDelegateKeysByOrchestratorAddress;
            fromProtoMsg(message: _57.QueryDelegateKeysByOrchestratorAddressProtoMsg): _57.QueryDelegateKeysByOrchestratorAddress;
            toProto(message: _57.QueryDelegateKeysByOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _57.QueryDelegateKeysByOrchestratorAddress): _57.QueryDelegateKeysByOrchestratorAddressProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddressResponse: {
            encode(message: _57.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryDelegateKeysByOrchestratorAddressResponse;
            fromPartial(object: {
                validatorAddress?: string;
                ethAddress?: string;
            }): _57.QueryDelegateKeysByOrchestratorAddressResponse;
            fromAmino(object: _57.QueryDelegateKeysByOrchestratorAddressResponseAmino): _57.QueryDelegateKeysByOrchestratorAddressResponse;
            toAmino(message: _57.QueryDelegateKeysByOrchestratorAddressResponse): _57.QueryDelegateKeysByOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _57.QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): _57.QueryDelegateKeysByOrchestratorAddressResponse;
            fromProtoMsg(message: _57.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): _57.QueryDelegateKeysByOrchestratorAddressResponse;
            toProto(message: _57.QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _57.QueryDelegateKeysByOrchestratorAddressResponse): _57.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg;
        };
        QueryPendingSendToEth: {
            encode(message: _57.QueryPendingSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryPendingSendToEth;
            fromPartial(object: {
                senderAddress?: string;
            }): _57.QueryPendingSendToEth;
            fromAmino(object: _57.QueryPendingSendToEthAmino): _57.QueryPendingSendToEth;
            toAmino(message: _57.QueryPendingSendToEth): _57.QueryPendingSendToEthAmino;
            fromAminoMsg(object: _57.QueryPendingSendToEthAminoMsg): _57.QueryPendingSendToEth;
            fromProtoMsg(message: _57.QueryPendingSendToEthProtoMsg): _57.QueryPendingSendToEth;
            toProto(message: _57.QueryPendingSendToEth): Uint8Array;
            toProtoMsg(message: _57.QueryPendingSendToEth): _57.QueryPendingSendToEthProtoMsg;
        };
        QueryPendingSendToEthResponse: {
            encode(message: _57.QueryPendingSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryPendingSendToEthResponse;
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
            }): _57.QueryPendingSendToEthResponse;
            fromAmino(object: _57.QueryPendingSendToEthResponseAmino): _57.QueryPendingSendToEthResponse;
            toAmino(message: _57.QueryPendingSendToEthResponse): _57.QueryPendingSendToEthResponseAmino;
            fromAminoMsg(object: _57.QueryPendingSendToEthResponseAminoMsg): _57.QueryPendingSendToEthResponse;
            fromProtoMsg(message: _57.QueryPendingSendToEthResponseProtoMsg): _57.QueryPendingSendToEthResponse;
            toProto(message: _57.QueryPendingSendToEthResponse): Uint8Array;
            toProtoMsg(message: _57.QueryPendingSendToEthResponse): _57.QueryPendingSendToEthResponseProtoMsg;
        };
        IDSet: {
            encode(message: _56.IDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.IDSet;
            fromPartial(object: {
                ids?: (string | number | import("long").Long)[];
            }): _56.IDSet;
            fromAmino(object: _56.IDSetAmino): _56.IDSet;
            toAmino(message: _56.IDSet): _56.IDSetAmino;
            fromAminoMsg(object: _56.IDSetAminoMsg): _56.IDSet;
            fromProtoMsg(message: _56.IDSetProtoMsg): _56.IDSet;
            toProto(message: _56.IDSet): Uint8Array;
            toProtoMsg(message: _56.IDSet): _56.IDSetProtoMsg;
        };
        BatchFees: {
            encode(message: _56.BatchFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.BatchFees;
            fromPartial(object: {
                token?: string;
                totalFees?: string;
                txCount?: string | number | import("long").Long;
            }): _56.BatchFees;
            fromAmino(object: _56.BatchFeesAmino): _56.BatchFees;
            toAmino(message: _56.BatchFees): _56.BatchFeesAmino;
            fromAminoMsg(object: _56.BatchFeesAminoMsg): _56.BatchFees;
            fromProtoMsg(message: _56.BatchFeesProtoMsg): _56.BatchFees;
            toProto(message: _56.BatchFees): Uint8Array;
            toProtoMsg(message: _56.BatchFees): _56.BatchFeesProtoMsg;
        };
        MsgSetOrchestratorAddress: {
            encode(message: _55.MsgSetOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSetOrchestratorAddress;
            fromPartial(object: {
                validator?: string;
                orchestrator?: string;
                ethAddress?: string;
            }): _55.MsgSetOrchestratorAddress;
            fromAmino(object: _55.MsgSetOrchestratorAddressAmino): _55.MsgSetOrchestratorAddress;
            toAmino(message: _55.MsgSetOrchestratorAddress): _55.MsgSetOrchestratorAddressAmino;
            fromAminoMsg(object: _55.MsgSetOrchestratorAddressAminoMsg): _55.MsgSetOrchestratorAddress;
            fromProtoMsg(message: _55.MsgSetOrchestratorAddressProtoMsg): _55.MsgSetOrchestratorAddress;
            toProto(message: _55.MsgSetOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _55.MsgSetOrchestratorAddress): _55.MsgSetOrchestratorAddressProtoMsg;
        };
        MsgSetOrchestratorAddressResponse: {
            encode(_: _55.MsgSetOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSetOrchestratorAddressResponse;
            fromPartial(_: {}): _55.MsgSetOrchestratorAddressResponse;
            fromAmino(_: _55.MsgSetOrchestratorAddressResponseAmino): _55.MsgSetOrchestratorAddressResponse;
            toAmino(_: _55.MsgSetOrchestratorAddressResponse): _55.MsgSetOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _55.MsgSetOrchestratorAddressResponseAminoMsg): _55.MsgSetOrchestratorAddressResponse;
            fromProtoMsg(message: _55.MsgSetOrchestratorAddressResponseProtoMsg): _55.MsgSetOrchestratorAddressResponse;
            toProto(message: _55.MsgSetOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _55.MsgSetOrchestratorAddressResponse): _55.MsgSetOrchestratorAddressResponseProtoMsg;
        };
        MsgValsetConfirm: {
            encode(message: _55.MsgValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgValsetConfirm;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                orchestrator?: string;
                ethAddress?: string;
                signature?: string;
            }): _55.MsgValsetConfirm;
            fromAmino(object: _55.MsgValsetConfirmAmino): _55.MsgValsetConfirm;
            toAmino(message: _55.MsgValsetConfirm): _55.MsgValsetConfirmAmino;
            fromAminoMsg(object: _55.MsgValsetConfirmAminoMsg): _55.MsgValsetConfirm;
            fromProtoMsg(message: _55.MsgValsetConfirmProtoMsg): _55.MsgValsetConfirm;
            toProto(message: _55.MsgValsetConfirm): Uint8Array;
            toProtoMsg(message: _55.MsgValsetConfirm): _55.MsgValsetConfirmProtoMsg;
        };
        MsgValsetConfirmResponse: {
            encode(_: _55.MsgValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgValsetConfirmResponse;
            fromPartial(_: {}): _55.MsgValsetConfirmResponse;
            fromAmino(_: _55.MsgValsetConfirmResponseAmino): _55.MsgValsetConfirmResponse;
            toAmino(_: _55.MsgValsetConfirmResponse): _55.MsgValsetConfirmResponseAmino;
            fromAminoMsg(object: _55.MsgValsetConfirmResponseAminoMsg): _55.MsgValsetConfirmResponse;
            fromProtoMsg(message: _55.MsgValsetConfirmResponseProtoMsg): _55.MsgValsetConfirmResponse;
            toProto(message: _55.MsgValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _55.MsgValsetConfirmResponse): _55.MsgValsetConfirmResponseProtoMsg;
        };
        MsgSendToEth: {
            encode(message: _55.MsgSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSendToEth;
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
            }): _55.MsgSendToEth;
            fromAmino(object: _55.MsgSendToEthAmino): _55.MsgSendToEth;
            toAmino(message: _55.MsgSendToEth): _55.MsgSendToEthAmino;
            fromAminoMsg(object: _55.MsgSendToEthAminoMsg): _55.MsgSendToEth;
            fromProtoMsg(message: _55.MsgSendToEthProtoMsg): _55.MsgSendToEth;
            toProto(message: _55.MsgSendToEth): Uint8Array;
            toProtoMsg(message: _55.MsgSendToEth): _55.MsgSendToEthProtoMsg;
        };
        MsgSendToEthResponse: {
            encode(_: _55.MsgSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSendToEthResponse;
            fromPartial(_: {}): _55.MsgSendToEthResponse;
            fromAmino(_: _55.MsgSendToEthResponseAmino): _55.MsgSendToEthResponse;
            toAmino(_: _55.MsgSendToEthResponse): _55.MsgSendToEthResponseAmino;
            fromAminoMsg(object: _55.MsgSendToEthResponseAminoMsg): _55.MsgSendToEthResponse;
            fromProtoMsg(message: _55.MsgSendToEthResponseProtoMsg): _55.MsgSendToEthResponse;
            toProto(message: _55.MsgSendToEthResponse): Uint8Array;
            toProtoMsg(message: _55.MsgSendToEthResponse): _55.MsgSendToEthResponseProtoMsg;
        };
        MsgRequestBatch: {
            encode(message: _55.MsgRequestBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgRequestBatch;
            fromPartial(object: {
                sender?: string;
                denom?: string;
            }): _55.MsgRequestBatch;
            fromAmino(object: _55.MsgRequestBatchAmino): _55.MsgRequestBatch;
            toAmino(message: _55.MsgRequestBatch): _55.MsgRequestBatchAmino;
            fromAminoMsg(object: _55.MsgRequestBatchAminoMsg): _55.MsgRequestBatch;
            fromProtoMsg(message: _55.MsgRequestBatchProtoMsg): _55.MsgRequestBatch;
            toProto(message: _55.MsgRequestBatch): Uint8Array;
            toProtoMsg(message: _55.MsgRequestBatch): _55.MsgRequestBatchProtoMsg;
        };
        MsgRequestBatchResponse: {
            encode(_: _55.MsgRequestBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgRequestBatchResponse;
            fromPartial(_: {}): _55.MsgRequestBatchResponse;
            fromAmino(_: _55.MsgRequestBatchResponseAmino): _55.MsgRequestBatchResponse;
            toAmino(_: _55.MsgRequestBatchResponse): _55.MsgRequestBatchResponseAmino;
            fromAminoMsg(object: _55.MsgRequestBatchResponseAminoMsg): _55.MsgRequestBatchResponse;
            fromProtoMsg(message: _55.MsgRequestBatchResponseProtoMsg): _55.MsgRequestBatchResponse;
            toProto(message: _55.MsgRequestBatchResponse): Uint8Array;
            toProtoMsg(message: _55.MsgRequestBatchResponse): _55.MsgRequestBatchResponseProtoMsg;
        };
        MsgConfirmBatch: {
            encode(message: _55.MsgConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgConfirmBatch;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                tokenContract?: string;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _55.MsgConfirmBatch;
            fromAmino(object: _55.MsgConfirmBatchAmino): _55.MsgConfirmBatch;
            toAmino(message: _55.MsgConfirmBatch): _55.MsgConfirmBatchAmino;
            fromAminoMsg(object: _55.MsgConfirmBatchAminoMsg): _55.MsgConfirmBatch;
            fromProtoMsg(message: _55.MsgConfirmBatchProtoMsg): _55.MsgConfirmBatch;
            toProto(message: _55.MsgConfirmBatch): Uint8Array;
            toProtoMsg(message: _55.MsgConfirmBatch): _55.MsgConfirmBatchProtoMsg;
        };
        MsgConfirmBatchResponse: {
            encode(_: _55.MsgConfirmBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgConfirmBatchResponse;
            fromPartial(_: {}): _55.MsgConfirmBatchResponse;
            fromAmino(_: _55.MsgConfirmBatchResponseAmino): _55.MsgConfirmBatchResponse;
            toAmino(_: _55.MsgConfirmBatchResponse): _55.MsgConfirmBatchResponseAmino;
            fromAminoMsg(object: _55.MsgConfirmBatchResponseAminoMsg): _55.MsgConfirmBatchResponse;
            fromProtoMsg(message: _55.MsgConfirmBatchResponseProtoMsg): _55.MsgConfirmBatchResponse;
            toProto(message: _55.MsgConfirmBatchResponse): Uint8Array;
            toProtoMsg(message: _55.MsgConfirmBatchResponse): _55.MsgConfirmBatchResponseProtoMsg;
        };
        MsgConfirmLogicCall: {
            encode(message: _55.MsgConfirmLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgConfirmLogicCall;
            fromPartial(object: {
                invalidationId?: string;
                invalidationNonce?: string | number | import("long").Long;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _55.MsgConfirmLogicCall;
            fromAmino(object: _55.MsgConfirmLogicCallAmino): _55.MsgConfirmLogicCall;
            toAmino(message: _55.MsgConfirmLogicCall): _55.MsgConfirmLogicCallAmino;
            fromAminoMsg(object: _55.MsgConfirmLogicCallAminoMsg): _55.MsgConfirmLogicCall;
            fromProtoMsg(message: _55.MsgConfirmLogicCallProtoMsg): _55.MsgConfirmLogicCall;
            toProto(message: _55.MsgConfirmLogicCall): Uint8Array;
            toProtoMsg(message: _55.MsgConfirmLogicCall): _55.MsgConfirmLogicCallProtoMsg;
        };
        MsgConfirmLogicCallResponse: {
            encode(_: _55.MsgConfirmLogicCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgConfirmLogicCallResponse;
            fromPartial(_: {}): _55.MsgConfirmLogicCallResponse;
            fromAmino(_: _55.MsgConfirmLogicCallResponseAmino): _55.MsgConfirmLogicCallResponse;
            toAmino(_: _55.MsgConfirmLogicCallResponse): _55.MsgConfirmLogicCallResponseAmino;
            fromAminoMsg(object: _55.MsgConfirmLogicCallResponseAminoMsg): _55.MsgConfirmLogicCallResponse;
            fromProtoMsg(message: _55.MsgConfirmLogicCallResponseProtoMsg): _55.MsgConfirmLogicCallResponse;
            toProto(message: _55.MsgConfirmLogicCallResponse): Uint8Array;
            toProtoMsg(message: _55.MsgConfirmLogicCallResponse): _55.MsgConfirmLogicCallResponseProtoMsg;
        };
        MsgSendToCosmosClaim: {
            encode(message: _55.MsgSendToCosmosClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSendToCosmosClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                tokenContract?: string;
                amount?: string;
                ethereumSender?: string;
                cosmosReceiver?: string;
                orchestrator?: string;
            }): _55.MsgSendToCosmosClaim;
            fromAmino(object: _55.MsgSendToCosmosClaimAmino): _55.MsgSendToCosmosClaim;
            toAmino(message: _55.MsgSendToCosmosClaim): _55.MsgSendToCosmosClaimAmino;
            fromAminoMsg(object: _55.MsgSendToCosmosClaimAminoMsg): _55.MsgSendToCosmosClaim;
            fromProtoMsg(message: _55.MsgSendToCosmosClaimProtoMsg): _55.MsgSendToCosmosClaim;
            toProto(message: _55.MsgSendToCosmosClaim): Uint8Array;
            toProtoMsg(message: _55.MsgSendToCosmosClaim): _55.MsgSendToCosmosClaimProtoMsg;
        };
        MsgSendToCosmosClaimResponse: {
            encode(_: _55.MsgSendToCosmosClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSendToCosmosClaimResponse;
            fromPartial(_: {}): _55.MsgSendToCosmosClaimResponse;
            fromAmino(_: _55.MsgSendToCosmosClaimResponseAmino): _55.MsgSendToCosmosClaimResponse;
            toAmino(_: _55.MsgSendToCosmosClaimResponse): _55.MsgSendToCosmosClaimResponseAmino;
            fromAminoMsg(object: _55.MsgSendToCosmosClaimResponseAminoMsg): _55.MsgSendToCosmosClaimResponse;
            fromProtoMsg(message: _55.MsgSendToCosmosClaimResponseProtoMsg): _55.MsgSendToCosmosClaimResponse;
            toProto(message: _55.MsgSendToCosmosClaimResponse): Uint8Array;
            toProtoMsg(message: _55.MsgSendToCosmosClaimResponse): _55.MsgSendToCosmosClaimResponseProtoMsg;
        };
        MsgBatchSendToEthClaim: {
            encode(message: _55.MsgBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgBatchSendToEthClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                batchNonce?: string | number | import("long").Long;
                tokenContract?: string;
                orchestrator?: string;
            }): _55.MsgBatchSendToEthClaim;
            fromAmino(object: _55.MsgBatchSendToEthClaimAmino): _55.MsgBatchSendToEthClaim;
            toAmino(message: _55.MsgBatchSendToEthClaim): _55.MsgBatchSendToEthClaimAmino;
            fromAminoMsg(object: _55.MsgBatchSendToEthClaimAminoMsg): _55.MsgBatchSendToEthClaim;
            fromProtoMsg(message: _55.MsgBatchSendToEthClaimProtoMsg): _55.MsgBatchSendToEthClaim;
            toProto(message: _55.MsgBatchSendToEthClaim): Uint8Array;
            toProtoMsg(message: _55.MsgBatchSendToEthClaim): _55.MsgBatchSendToEthClaimProtoMsg;
        };
        MsgBatchSendToEthClaimResponse: {
            encode(_: _55.MsgBatchSendToEthClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgBatchSendToEthClaimResponse;
            fromPartial(_: {}): _55.MsgBatchSendToEthClaimResponse;
            fromAmino(_: _55.MsgBatchSendToEthClaimResponseAmino): _55.MsgBatchSendToEthClaimResponse;
            toAmino(_: _55.MsgBatchSendToEthClaimResponse): _55.MsgBatchSendToEthClaimResponseAmino;
            fromAminoMsg(object: _55.MsgBatchSendToEthClaimResponseAminoMsg): _55.MsgBatchSendToEthClaimResponse;
            fromProtoMsg(message: _55.MsgBatchSendToEthClaimResponseProtoMsg): _55.MsgBatchSendToEthClaimResponse;
            toProto(message: _55.MsgBatchSendToEthClaimResponse): Uint8Array;
            toProtoMsg(message: _55.MsgBatchSendToEthClaimResponse): _55.MsgBatchSendToEthClaimResponseProtoMsg;
        };
        MsgERC20DeployedClaim: {
            encode(message: _55.MsgERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgERC20DeployedClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                cosmosDenom?: string;
                tokenContract?: string;
                name?: string;
                symbol?: string;
                decimals?: string | number | import("long").Long;
                orchestrator?: string;
            }): _55.MsgERC20DeployedClaim;
            fromAmino(object: _55.MsgERC20DeployedClaimAmino): _55.MsgERC20DeployedClaim;
            toAmino(message: _55.MsgERC20DeployedClaim): _55.MsgERC20DeployedClaimAmino;
            fromAminoMsg(object: _55.MsgERC20DeployedClaimAminoMsg): _55.MsgERC20DeployedClaim;
            fromProtoMsg(message: _55.MsgERC20DeployedClaimProtoMsg): _55.MsgERC20DeployedClaim;
            toProto(message: _55.MsgERC20DeployedClaim): Uint8Array;
            toProtoMsg(message: _55.MsgERC20DeployedClaim): _55.MsgERC20DeployedClaimProtoMsg;
        };
        MsgERC20DeployedClaimResponse: {
            encode(_: _55.MsgERC20DeployedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgERC20DeployedClaimResponse;
            fromPartial(_: {}): _55.MsgERC20DeployedClaimResponse;
            fromAmino(_: _55.MsgERC20DeployedClaimResponseAmino): _55.MsgERC20DeployedClaimResponse;
            toAmino(_: _55.MsgERC20DeployedClaimResponse): _55.MsgERC20DeployedClaimResponseAmino;
            fromAminoMsg(object: _55.MsgERC20DeployedClaimResponseAminoMsg): _55.MsgERC20DeployedClaimResponse;
            fromProtoMsg(message: _55.MsgERC20DeployedClaimResponseProtoMsg): _55.MsgERC20DeployedClaimResponse;
            toProto(message: _55.MsgERC20DeployedClaimResponse): Uint8Array;
            toProtoMsg(message: _55.MsgERC20DeployedClaimResponse): _55.MsgERC20DeployedClaimResponseProtoMsg;
        };
        MsgLogicCallExecutedClaim: {
            encode(message: _55.MsgLogicCallExecutedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgLogicCallExecutedClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                invalidationId?: Uint8Array;
                invalidationNonce?: string | number | import("long").Long;
                orchestrator?: string;
            }): _55.MsgLogicCallExecutedClaim;
            fromAmino(object: _55.MsgLogicCallExecutedClaimAmino): _55.MsgLogicCallExecutedClaim;
            toAmino(message: _55.MsgLogicCallExecutedClaim): _55.MsgLogicCallExecutedClaimAmino;
            fromAminoMsg(object: _55.MsgLogicCallExecutedClaimAminoMsg): _55.MsgLogicCallExecutedClaim;
            fromProtoMsg(message: _55.MsgLogicCallExecutedClaimProtoMsg): _55.MsgLogicCallExecutedClaim;
            toProto(message: _55.MsgLogicCallExecutedClaim): Uint8Array;
            toProtoMsg(message: _55.MsgLogicCallExecutedClaim): _55.MsgLogicCallExecutedClaimProtoMsg;
        };
        MsgLogicCallExecutedClaimResponse: {
            encode(_: _55.MsgLogicCallExecutedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgLogicCallExecutedClaimResponse;
            fromPartial(_: {}): _55.MsgLogicCallExecutedClaimResponse;
            fromAmino(_: _55.MsgLogicCallExecutedClaimResponseAmino): _55.MsgLogicCallExecutedClaimResponse;
            toAmino(_: _55.MsgLogicCallExecutedClaimResponse): _55.MsgLogicCallExecutedClaimResponseAmino;
            fromAminoMsg(object: _55.MsgLogicCallExecutedClaimResponseAminoMsg): _55.MsgLogicCallExecutedClaimResponse;
            fromProtoMsg(message: _55.MsgLogicCallExecutedClaimResponseProtoMsg): _55.MsgLogicCallExecutedClaimResponse;
            toProto(message: _55.MsgLogicCallExecutedClaimResponse): Uint8Array;
            toProtoMsg(message: _55.MsgLogicCallExecutedClaimResponse): _55.MsgLogicCallExecutedClaimResponseProtoMsg;
        };
        MsgValsetUpdatedClaim: {
            encode(message: _55.MsgValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgValsetUpdatedClaim;
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
            }): _55.MsgValsetUpdatedClaim;
            fromAmino(object: _55.MsgValsetUpdatedClaimAmino): _55.MsgValsetUpdatedClaim;
            toAmino(message: _55.MsgValsetUpdatedClaim): _55.MsgValsetUpdatedClaimAmino;
            fromAminoMsg(object: _55.MsgValsetUpdatedClaimAminoMsg): _55.MsgValsetUpdatedClaim;
            fromProtoMsg(message: _55.MsgValsetUpdatedClaimProtoMsg): _55.MsgValsetUpdatedClaim;
            toProto(message: _55.MsgValsetUpdatedClaim): Uint8Array;
            toProtoMsg(message: _55.MsgValsetUpdatedClaim): _55.MsgValsetUpdatedClaimProtoMsg;
        };
        MsgValsetUpdatedClaimResponse: {
            encode(_: _55.MsgValsetUpdatedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgValsetUpdatedClaimResponse;
            fromPartial(_: {}): _55.MsgValsetUpdatedClaimResponse;
            fromAmino(_: _55.MsgValsetUpdatedClaimResponseAmino): _55.MsgValsetUpdatedClaimResponse;
            toAmino(_: _55.MsgValsetUpdatedClaimResponse): _55.MsgValsetUpdatedClaimResponseAmino;
            fromAminoMsg(object: _55.MsgValsetUpdatedClaimResponseAminoMsg): _55.MsgValsetUpdatedClaimResponse;
            fromProtoMsg(message: _55.MsgValsetUpdatedClaimResponseProtoMsg): _55.MsgValsetUpdatedClaimResponse;
            toProto(message: _55.MsgValsetUpdatedClaimResponse): Uint8Array;
            toProtoMsg(message: _55.MsgValsetUpdatedClaimResponse): _55.MsgValsetUpdatedClaimResponseProtoMsg;
        };
        MsgCancelSendToEth: {
            encode(message: _55.MsgCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgCancelSendToEth;
            fromPartial(object: {
                transactionId?: string | number | import("long").Long;
                sender?: string;
            }): _55.MsgCancelSendToEth;
            fromAmino(object: _55.MsgCancelSendToEthAmino): _55.MsgCancelSendToEth;
            toAmino(message: _55.MsgCancelSendToEth): _55.MsgCancelSendToEthAmino;
            fromAminoMsg(object: _55.MsgCancelSendToEthAminoMsg): _55.MsgCancelSendToEth;
            fromProtoMsg(message: _55.MsgCancelSendToEthProtoMsg): _55.MsgCancelSendToEth;
            toProto(message: _55.MsgCancelSendToEth): Uint8Array;
            toProtoMsg(message: _55.MsgCancelSendToEth): _55.MsgCancelSendToEthProtoMsg;
        };
        MsgCancelSendToEthResponse: {
            encode(_: _55.MsgCancelSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgCancelSendToEthResponse;
            fromPartial(_: {}): _55.MsgCancelSendToEthResponse;
            fromAmino(_: _55.MsgCancelSendToEthResponseAmino): _55.MsgCancelSendToEthResponse;
            toAmino(_: _55.MsgCancelSendToEthResponse): _55.MsgCancelSendToEthResponseAmino;
            fromAminoMsg(object: _55.MsgCancelSendToEthResponseAminoMsg): _55.MsgCancelSendToEthResponse;
            fromProtoMsg(message: _55.MsgCancelSendToEthResponseProtoMsg): _55.MsgCancelSendToEthResponse;
            toProto(message: _55.MsgCancelSendToEthResponse): Uint8Array;
            toProtoMsg(message: _55.MsgCancelSendToEthResponse): _55.MsgCancelSendToEthResponseProtoMsg;
        };
        MsgSubmitBadSignatureEvidence: {
            encode(message: _55.MsgSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSubmitBadSignatureEvidence;
            fromPartial(object: {
                subject?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                signature?: string;
                sender?: string;
            }): _55.MsgSubmitBadSignatureEvidence;
            fromAmino(object: _55.MsgSubmitBadSignatureEvidenceAmino): _55.MsgSubmitBadSignatureEvidence;
            toAmino(message: _55.MsgSubmitBadSignatureEvidence): _55.MsgSubmitBadSignatureEvidenceAmino;
            fromAminoMsg(object: _55.MsgSubmitBadSignatureEvidenceAminoMsg): _55.MsgSubmitBadSignatureEvidence;
            fromProtoMsg(message: _55.MsgSubmitBadSignatureEvidenceProtoMsg): _55.MsgSubmitBadSignatureEvidence;
            toProto(message: _55.MsgSubmitBadSignatureEvidence): Uint8Array;
            toProtoMsg(message: _55.MsgSubmitBadSignatureEvidence): _55.MsgSubmitBadSignatureEvidenceProtoMsg;
        };
        MsgSubmitBadSignatureEvidenceResponse: {
            encode(_: _55.MsgSubmitBadSignatureEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgSubmitBadSignatureEvidenceResponse;
            fromPartial(_: {}): _55.MsgSubmitBadSignatureEvidenceResponse;
            fromAmino(_: _55.MsgSubmitBadSignatureEvidenceResponseAmino): _55.MsgSubmitBadSignatureEvidenceResponse;
            toAmino(_: _55.MsgSubmitBadSignatureEvidenceResponse): _55.MsgSubmitBadSignatureEvidenceResponseAmino;
            fromAminoMsg(object: _55.MsgSubmitBadSignatureEvidenceResponseAminoMsg): _55.MsgSubmitBadSignatureEvidenceResponse;
            fromProtoMsg(message: _55.MsgSubmitBadSignatureEvidenceResponseProtoMsg): _55.MsgSubmitBadSignatureEvidenceResponse;
            toProto(message: _55.MsgSubmitBadSignatureEvidenceResponse): Uint8Array;
            toProtoMsg(message: _55.MsgSubmitBadSignatureEvidenceResponse): _55.MsgSubmitBadSignatureEvidenceResponseProtoMsg;
        };
        Params: {
            encode(message: _54.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Params;
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
            }): _54.Params;
            fromAmino(object: _54.ParamsAmino): _54.Params;
            toAmino(message: _54.Params): _54.ParamsAmino;
            fromAminoMsg(object: _54.ParamsAminoMsg): _54.Params;
            fromProtoMsg(message: _54.ParamsProtoMsg): _54.Params;
            toProto(message: _54.Params): Uint8Array;
            toProtoMsg(message: _54.Params): _54.ParamsProtoMsg;
        };
        GenesisState: {
            encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
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
            }): _54.GenesisState;
            fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
            toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
            fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
            fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
            toProto(message: _54.GenesisState): Uint8Array;
            toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
        };
        GravityNonces: {
            encode(message: _54.GravityNonces, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GravityNonces;
            fromPartial(object: {
                latestValsetNonce?: string | number | import("long").Long;
                lastObservedNonce?: string | number | import("long").Long;
                lastSlashedValsetNonce?: string | number | import("long").Long;
                lastSlashedBatchBlock?: string | number | import("long").Long;
                lastSlashedLogicCallBlock?: string | number | import("long").Long;
                lastTxPoolId?: string | number | import("long").Long;
                lastBatchId?: string | number | import("long").Long;
            }): _54.GravityNonces;
            fromAmino(object: _54.GravityNoncesAmino): _54.GravityNonces;
            toAmino(message: _54.GravityNonces): _54.GravityNoncesAmino;
            fromAminoMsg(object: _54.GravityNoncesAminoMsg): _54.GravityNonces;
            fromProtoMsg(message: _54.GravityNoncesProtoMsg): _54.GravityNonces;
            toProto(message: _54.GravityNonces): Uint8Array;
            toProtoMsg(message: _54.GravityNonces): _54.GravityNoncesProtoMsg;
        };
        signTypeFromJSON(object: any): _53.SignType;
        signTypeToJSON(object: _53.SignType): string;
        SignType: typeof _53.SignType;
        SignTypeSDKType: typeof _53.SignType;
        SignTypeAmino: typeof _53.SignType;
        OutgoingTxBatch: {
            encode(message: _52.OutgoingTxBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.OutgoingTxBatch;
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
            }): _52.OutgoingTxBatch;
            fromAmino(object: _52.OutgoingTxBatchAmino): _52.OutgoingTxBatch;
            toAmino(message: _52.OutgoingTxBatch): _52.OutgoingTxBatchAmino;
            fromAminoMsg(object: _52.OutgoingTxBatchAminoMsg): _52.OutgoingTxBatch;
            fromProtoMsg(message: _52.OutgoingTxBatchProtoMsg): _52.OutgoingTxBatch;
            toProto(message: _52.OutgoingTxBatch): Uint8Array;
            toProtoMsg(message: _52.OutgoingTxBatch): _52.OutgoingTxBatchProtoMsg;
        };
        OutgoingTransferTx: {
            encode(message: _52.OutgoingTransferTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.OutgoingTransferTx;
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
            }): _52.OutgoingTransferTx;
            fromAmino(object: _52.OutgoingTransferTxAmino): _52.OutgoingTransferTx;
            toAmino(message: _52.OutgoingTransferTx): _52.OutgoingTransferTxAmino;
            fromAminoMsg(object: _52.OutgoingTransferTxAminoMsg): _52.OutgoingTransferTx;
            fromProtoMsg(message: _52.OutgoingTransferTxProtoMsg): _52.OutgoingTransferTx;
            toProto(message: _52.OutgoingTransferTx): Uint8Array;
            toProtoMsg(message: _52.OutgoingTransferTx): _52.OutgoingTransferTxProtoMsg;
        };
        OutgoingLogicCall: {
            encode(message: _52.OutgoingLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.OutgoingLogicCall;
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
            }): _52.OutgoingLogicCall;
            fromAmino(object: _52.OutgoingLogicCallAmino): _52.OutgoingLogicCall;
            toAmino(message: _52.OutgoingLogicCall): _52.OutgoingLogicCallAmino;
            fromAminoMsg(object: _52.OutgoingLogicCallAminoMsg): _52.OutgoingLogicCall;
            fromProtoMsg(message: _52.OutgoingLogicCallProtoMsg): _52.OutgoingLogicCall;
            toProto(message: _52.OutgoingLogicCall): Uint8Array;
            toProtoMsg(message: _52.OutgoingLogicCall): _52.OutgoingLogicCallProtoMsg;
        };
        claimTypeFromJSON(object: any): _51.ClaimType;
        claimTypeToJSON(object: _51.ClaimType): string;
        ClaimType: typeof _51.ClaimType;
        ClaimTypeSDKType: typeof _51.ClaimType;
        ClaimTypeAmino: typeof _51.ClaimType;
        Attestation: {
            encode(message: _51.Attestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Attestation;
            fromPartial(object: {
                observed?: boolean;
                votes?: string[];
                height?: string | number | import("long").Long;
                claim?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }): _51.Attestation;
            fromAmino(object: _51.AttestationAmino): _51.Attestation;
            toAmino(message: _51.Attestation): _51.AttestationAmino;
            fromAminoMsg(object: _51.AttestationAminoMsg): _51.Attestation;
            fromProtoMsg(message: _51.AttestationProtoMsg): _51.Attestation;
            toProto(message: _51.Attestation): Uint8Array;
            toProtoMsg(message: _51.Attestation): _51.AttestationProtoMsg;
        };
        ERC20Token: {
            encode(message: _51.ERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ERC20Token;
            fromPartial(object: {
                contract?: string;
                amount?: string;
            }): _51.ERC20Token;
            fromAmino(object: _51.ERC20TokenAmino): _51.ERC20Token;
            toAmino(message: _51.ERC20Token): _51.ERC20TokenAmino;
            fromAminoMsg(object: _51.ERC20TokenAminoMsg): _51.ERC20Token;
            fromProtoMsg(message: _51.ERC20TokenProtoMsg): _51.ERC20Token;
            toProto(message: _51.ERC20Token): Uint8Array;
            toProtoMsg(message: _51.ERC20Token): _51.ERC20TokenProtoMsg;
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
                v1: _110.MsgClientImpl;
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
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
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
                    params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                    currentValset(request?: _57.QueryCurrentValsetRequest): Promise<_57.QueryCurrentValsetResponse>;
                    valsetRequest(request: _57.QueryValsetRequestRequest): Promise<_57.QueryValsetRequestResponse>;
                    valsetConfirm(request: _57.QueryValsetConfirmRequest): Promise<_57.QueryValsetConfirmResponse>;
                    valsetConfirmsByNonce(request: _57.QueryValsetConfirmsByNonceRequest): Promise<_57.QueryValsetConfirmsByNonceResponse>;
                    lastValsetRequests(request?: _57.QueryLastValsetRequestsRequest): Promise<_57.QueryLastValsetRequestsResponse>;
                    lastPendingValsetRequestByAddr(request: _57.QueryLastPendingValsetRequestByAddrRequest): Promise<_57.QueryLastPendingValsetRequestByAddrResponse>;
                    lastPendingBatchRequestByAddr(request: _57.QueryLastPendingBatchRequestByAddrRequest): Promise<_57.QueryLastPendingBatchRequestByAddrResponse>;
                    lastPendingLogicCallByAddr(request: _57.QueryLastPendingLogicCallByAddrRequest): Promise<_57.QueryLastPendingLogicCallByAddrResponse>;
                    lastEventNonceByAddr(request: _57.QueryLastEventNonceByAddrRequest): Promise<_57.QueryLastEventNonceByAddrResponse>;
                    batchFees(request?: _57.QueryBatchFeeRequest): Promise<_57.QueryBatchFeeResponse>;
                    outgoingTxBatches(request?: _57.QueryOutgoingTxBatchesRequest): Promise<_57.QueryOutgoingTxBatchesResponse>;
                    outgoingLogicCalls(request?: _57.QueryOutgoingLogicCallsRequest): Promise<_57.QueryOutgoingLogicCallsResponse>;
                    batchRequestByNonce(request: _57.QueryBatchRequestByNonceRequest): Promise<_57.QueryBatchRequestByNonceResponse>;
                    batchConfirms(request: _57.QueryBatchConfirmsRequest): Promise<_57.QueryBatchConfirmsResponse>;
                    logicConfirms(request: _57.QueryLogicConfirmsRequest): Promise<_57.QueryLogicConfirmsResponse>;
                    eRC20ToDenom(request: _57.QueryERC20ToDenomRequest): Promise<_57.QueryERC20ToDenomResponse>;
                    denomToERC20(request: _57.QueryDenomToERC20Request): Promise<_57.QueryDenomToERC20Response>;
                    getAttestations(request: _57.QueryAttestationsRequest): Promise<_57.QueryAttestationsResponse>;
                    getDelegateKeyByValidator(request: _57.QueryDelegateKeysByValidatorAddress): Promise<_57.QueryDelegateKeysByValidatorAddressResponse>;
                    getDelegateKeyByEth(request: _57.QueryDelegateKeysByEthAddress): Promise<_57.QueryDelegateKeysByEthAddressResponse>;
                    getDelegateKeyByOrchestrator(request: _57.QueryDelegateKeysByOrchestratorAddress): Promise<_57.QueryDelegateKeysByOrchestratorAddressResponse>;
                    getPendingSendToEth(request: _57.QueryPendingSendToEth): Promise<_57.QueryPendingSendToEthResponse>;
                };
            };
        }>;
    };
}
