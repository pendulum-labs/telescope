/// <reference types="long" />
import * as _54 from "./v1/attestation";
import * as _55 from "./v1/batch";
import * as _56 from "./v1/ethereum_signer";
import * as _57 from "./v1/genesis";
import * as _58 from "./v1/msgs";
import * as _59 from "./v1/pool";
import * as _60 from "./v1/query";
import * as _61 from "./v1/types";
import * as _113 from "./v1/query.rpc.Query";
import * as _114 from "./v1/msgs.rpc.msg";
export declare namespace gravity {
    const v1: {
        MsgClientImpl: typeof _114.MsgClientImpl;
        QueryClientImpl: typeof _113.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
            currentValset(request?: _60.QueryCurrentValsetRequest): Promise<_60.QueryCurrentValsetResponse>;
            valsetRequest(request: _60.QueryValsetRequestRequest): Promise<_60.QueryValsetRequestResponse>;
            valsetConfirm(request: _60.QueryValsetConfirmRequest): Promise<_60.QueryValsetConfirmResponse>;
            valsetConfirmsByNonce(request: _60.QueryValsetConfirmsByNonceRequest): Promise<_60.QueryValsetConfirmsByNonceResponse>;
            lastValsetRequests(request?: _60.QueryLastValsetRequestsRequest): Promise<_60.QueryLastValsetRequestsResponse>;
            lastPendingValsetRequestByAddr(request: _60.QueryLastPendingValsetRequestByAddrRequest): Promise<_60.QueryLastPendingValsetRequestByAddrResponse>;
            lastPendingBatchRequestByAddr(request: _60.QueryLastPendingBatchRequestByAddrRequest): Promise<_60.QueryLastPendingBatchRequestByAddrResponse>;
            lastPendingLogicCallByAddr(request: _60.QueryLastPendingLogicCallByAddrRequest): Promise<_60.QueryLastPendingLogicCallByAddrResponse>;
            lastEventNonceByAddr(request: _60.QueryLastEventNonceByAddrRequest): Promise<_60.QueryLastEventNonceByAddrResponse>;
            batchFees(request?: _60.QueryBatchFeeRequest): Promise<_60.QueryBatchFeeResponse>;
            outgoingTxBatches(request?: _60.QueryOutgoingTxBatchesRequest): Promise<_60.QueryOutgoingTxBatchesResponse>;
            outgoingLogicCalls(request?: _60.QueryOutgoingLogicCallsRequest): Promise<_60.QueryOutgoingLogicCallsResponse>;
            batchRequestByNonce(request: _60.QueryBatchRequestByNonceRequest): Promise<_60.QueryBatchRequestByNonceResponse>;
            batchConfirms(request: _60.QueryBatchConfirmsRequest): Promise<_60.QueryBatchConfirmsResponse>;
            logicConfirms(request: _60.QueryLogicConfirmsRequest): Promise<_60.QueryLogicConfirmsResponse>;
            eRC20ToDenom(request: _60.QueryERC20ToDenomRequest): Promise<_60.QueryERC20ToDenomResponse>;
            denomToERC20(request: _60.QueryDenomToERC20Request): Promise<_60.QueryDenomToERC20Response>;
            getAttestations(request: _60.QueryAttestationsRequest): Promise<_60.QueryAttestationsResponse>;
            getDelegateKeyByValidator(request: _60.QueryDelegateKeysByValidatorAddress): Promise<_60.QueryDelegateKeysByValidatorAddressResponse>;
            getDelegateKeyByEth(request: _60.QueryDelegateKeysByEthAddress): Promise<_60.QueryDelegateKeysByEthAddressResponse>;
            getDelegateKeyByOrchestrator(request: _60.QueryDelegateKeysByOrchestratorAddress): Promise<_60.QueryDelegateKeysByOrchestratorAddressResponse>;
            getPendingSendToEth(request: _60.QueryPendingSendToEth): Promise<_60.QueryPendingSendToEthResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                valsetConfirm(value: _58.MsgValsetConfirm): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToEth(value: _58.MsgSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                requestBatch(value: _58.MsgRequestBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmBatch(value: _58.MsgConfirmBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmLogicCall(value: _58.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToCosmosClaim(value: _58.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                batchSendToEthClaim(value: _58.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                valsetUpdateClaim(value: _58.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                eRC20DeployedClaim(value: _58.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                logicCallExecutedClaim(value: _58.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOrchestratorAddress(value: _58.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelSendToEth(value: _58.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitBadSignatureEvidence(value: _58.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                valsetConfirm(value: _58.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _58.MsgValsetConfirm;
                };
                sendToEth(value: _58.MsgSendToEth): {
                    typeUrl: string;
                    value: _58.MsgSendToEth;
                };
                requestBatch(value: _58.MsgRequestBatch): {
                    typeUrl: string;
                    value: _58.MsgRequestBatch;
                };
                confirmBatch(value: _58.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _58.MsgConfirmBatch;
                };
                confirmLogicCall(value: _58.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _58.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _58.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _58.MsgSendToCosmosClaim;
                };
                batchSendToEthClaim(value: _58.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _58.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _58.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _58.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _58.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _58.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _58.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _58.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _58.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _58.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _58.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _58.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _58.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _58.MsgSubmitBadSignatureEvidence;
                };
            };
            fromPartial: {
                valsetConfirm(value: _58.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _58.MsgValsetConfirm;
                };
                sendToEth(value: _58.MsgSendToEth): {
                    typeUrl: string;
                    value: _58.MsgSendToEth;
                };
                requestBatch(value: _58.MsgRequestBatch): {
                    typeUrl: string;
                    value: _58.MsgRequestBatch;
                };
                confirmBatch(value: _58.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _58.MsgConfirmBatch;
                };
                confirmLogicCall(value: _58.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _58.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _58.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _58.MsgSendToCosmosClaim;
                };
                batchSendToEthClaim(value: _58.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _58.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _58.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _58.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _58.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _58.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _58.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _58.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _58.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _58.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _58.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _58.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _58.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _58.MsgSubmitBadSignatureEvidence;
                };
            };
        };
        AminoConverter: {
            "/gravity.v1.MsgValsetConfirm": {
                aminoType: string;
                toAmino: (message: _58.MsgValsetConfirm) => _58.MsgValsetConfirmAmino;
                fromAmino: (object: _58.MsgValsetConfirmAmino) => _58.MsgValsetConfirm;
            };
            "/gravity.v1.MsgSendToEth": {
                aminoType: string;
                toAmino: (message: _58.MsgSendToEth) => _58.MsgSendToEthAmino;
                fromAmino: (object: _58.MsgSendToEthAmino) => _58.MsgSendToEth;
            };
            "/gravity.v1.MsgRequestBatch": {
                aminoType: string;
                toAmino: (message: _58.MsgRequestBatch) => _58.MsgRequestBatchAmino;
                fromAmino: (object: _58.MsgRequestBatchAmino) => _58.MsgRequestBatch;
            };
            "/gravity.v1.MsgConfirmBatch": {
                aminoType: string;
                toAmino: (message: _58.MsgConfirmBatch) => _58.MsgConfirmBatchAmino;
                fromAmino: (object: _58.MsgConfirmBatchAmino) => _58.MsgConfirmBatch;
            };
            "/gravity.v1.MsgConfirmLogicCall": {
                aminoType: string;
                toAmino: (message: _58.MsgConfirmLogicCall) => _58.MsgConfirmLogicCallAmino;
                fromAmino: (object: _58.MsgConfirmLogicCallAmino) => _58.MsgConfirmLogicCall;
            };
            "/gravity.v1.MsgSendToCosmosClaim": {
                aminoType: string;
                toAmino: (message: _58.MsgSendToCosmosClaim) => _58.MsgSendToCosmosClaimAmino;
                fromAmino: (object: _58.MsgSendToCosmosClaimAmino) => _58.MsgSendToCosmosClaim;
            };
            "/gravity.v1.MsgBatchSendToEthClaim": {
                aminoType: string;
                toAmino: (message: _58.MsgBatchSendToEthClaim) => _58.MsgBatchSendToEthClaimAmino;
                fromAmino: (object: _58.MsgBatchSendToEthClaimAmino) => _58.MsgBatchSendToEthClaim;
            };
            "/gravity.v1.MsgValsetUpdatedClaim": {
                aminoType: string;
                toAmino: (message: _58.MsgValsetUpdatedClaim) => _58.MsgValsetUpdatedClaimAmino;
                fromAmino: (object: _58.MsgValsetUpdatedClaimAmino) => _58.MsgValsetUpdatedClaim;
            };
            "/gravity.v1.MsgERC20DeployedClaim": {
                aminoType: string;
                toAmino: (message: _58.MsgERC20DeployedClaim) => _58.MsgERC20DeployedClaimAmino;
                fromAmino: (object: _58.MsgERC20DeployedClaimAmino) => _58.MsgERC20DeployedClaim;
            };
            "/gravity.v1.MsgLogicCallExecutedClaim": {
                aminoType: string;
                toAmino: (message: _58.MsgLogicCallExecutedClaim) => _58.MsgLogicCallExecutedClaimAmino;
                fromAmino: (object: _58.MsgLogicCallExecutedClaimAmino) => _58.MsgLogicCallExecutedClaim;
            };
            "/gravity.v1.MsgSetOrchestratorAddress": {
                aminoType: string;
                toAmino: (message: _58.MsgSetOrchestratorAddress) => _58.MsgSetOrchestratorAddressAmino;
                fromAmino: (object: _58.MsgSetOrchestratorAddressAmino) => _58.MsgSetOrchestratorAddress;
            };
            "/gravity.v1.MsgCancelSendToEth": {
                aminoType: string;
                toAmino: (message: _58.MsgCancelSendToEth) => _58.MsgCancelSendToEthAmino;
                fromAmino: (object: _58.MsgCancelSendToEthAmino) => _58.MsgCancelSendToEth;
            };
            "/gravity.v1.MsgSubmitBadSignatureEvidence": {
                aminoType: string;
                toAmino: (message: _58.MsgSubmitBadSignatureEvidence) => _58.MsgSubmitBadSignatureEvidenceAmino;
                fromAmino: (object: _58.MsgSubmitBadSignatureEvidenceAmino) => _58.MsgSubmitBadSignatureEvidence;
            };
        };
        BridgeValidator: {
            encode(message: _61.BridgeValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.BridgeValidator;
            fromPartial(object: {
                power?: string | number | import("long").Long;
                ethereumAddress?: string;
            }): _61.BridgeValidator;
            fromAmino(object: _61.BridgeValidatorAmino): _61.BridgeValidator;
            toAmino(message: _61.BridgeValidator): _61.BridgeValidatorAmino;
            fromAminoMsg(object: _61.BridgeValidatorAminoMsg): _61.BridgeValidator;
            fromProtoMsg(message: _61.BridgeValidatorProtoMsg): _61.BridgeValidator;
            toProto(message: _61.BridgeValidator): Uint8Array;
            toProtoMsg(message: _61.BridgeValidator): _61.BridgeValidatorProtoMsg;
        };
        Valset: {
            encode(message: _61.Valset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Valset;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                members?: {
                    power?: string | number | import("long").Long;
                    ethereumAddress?: string;
                }[];
                height?: string | number | import("long").Long;
                rewardAmount?: string;
                rewardToken?: string;
            }): _61.Valset;
            fromAmino(object: _61.ValsetAmino): _61.Valset;
            toAmino(message: _61.Valset): _61.ValsetAmino;
            fromAminoMsg(object: _61.ValsetAminoMsg): _61.Valset;
            fromProtoMsg(message: _61.ValsetProtoMsg): _61.Valset;
            toProto(message: _61.Valset): Uint8Array;
            toProtoMsg(message: _61.Valset): _61.ValsetProtoMsg;
        };
        LastObservedEthereumBlockHeight: {
            encode(message: _61.LastObservedEthereumBlockHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.LastObservedEthereumBlockHeight;
            fromPartial(object: {
                cosmosBlockHeight?: string | number | import("long").Long;
                ethereumBlockHeight?: string | number | import("long").Long;
            }): _61.LastObservedEthereumBlockHeight;
            fromAmino(object: _61.LastObservedEthereumBlockHeightAmino): _61.LastObservedEthereumBlockHeight;
            toAmino(message: _61.LastObservedEthereumBlockHeight): _61.LastObservedEthereumBlockHeightAmino;
            fromAminoMsg(object: _61.LastObservedEthereumBlockHeightAminoMsg): _61.LastObservedEthereumBlockHeight;
            fromProtoMsg(message: _61.LastObservedEthereumBlockHeightProtoMsg): _61.LastObservedEthereumBlockHeight;
            toProto(message: _61.LastObservedEthereumBlockHeight): Uint8Array;
            toProtoMsg(message: _61.LastObservedEthereumBlockHeight): _61.LastObservedEthereumBlockHeightProtoMsg;
        };
        ERC20ToDenom: {
            encode(message: _61.ERC20ToDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ERC20ToDenom;
            fromPartial(object: {
                erc20?: string;
                denom?: string;
            }): _61.ERC20ToDenom;
            fromAmino(object: _61.ERC20ToDenomAmino): _61.ERC20ToDenom;
            toAmino(message: _61.ERC20ToDenom): _61.ERC20ToDenomAmino;
            fromAminoMsg(object: _61.ERC20ToDenomAminoMsg): _61.ERC20ToDenom;
            fromProtoMsg(message: _61.ERC20ToDenomProtoMsg): _61.ERC20ToDenom;
            toProto(message: _61.ERC20ToDenom): Uint8Array;
            toProtoMsg(message: _61.ERC20ToDenom): _61.ERC20ToDenomProtoMsg;
        };
        UnhaltBridgeProposal: {
            encode(message: _61.UnhaltBridgeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.UnhaltBridgeProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                targetNonce?: string | number | import("long").Long;
            }): _61.UnhaltBridgeProposal;
            fromAmino(object: _61.UnhaltBridgeProposalAmino): _61.UnhaltBridgeProposal;
            toAmino(message: _61.UnhaltBridgeProposal): _61.UnhaltBridgeProposalAmino;
            fromAminoMsg(object: _61.UnhaltBridgeProposalAminoMsg): _61.UnhaltBridgeProposal;
            fromProtoMsg(message: _61.UnhaltBridgeProposalProtoMsg): _61.UnhaltBridgeProposal;
            toProto(message: _61.UnhaltBridgeProposal): Uint8Array;
            toProtoMsg(message: _61.UnhaltBridgeProposal): _61.UnhaltBridgeProposalProtoMsg;
        };
        AirdropProposal: {
            encode(message: _61.AirdropProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.AirdropProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                denom?: string;
                recipients?: Uint8Array;
                amounts?: (string | number | import("long").Long)[];
            }): _61.AirdropProposal;
            fromAmino(object: _61.AirdropProposalAmino): _61.AirdropProposal;
            toAmino(message: _61.AirdropProposal): _61.AirdropProposalAmino;
            fromAminoMsg(object: _61.AirdropProposalAminoMsg): _61.AirdropProposal;
            fromProtoMsg(message: _61.AirdropProposalProtoMsg): _61.AirdropProposal;
            toProto(message: _61.AirdropProposal): Uint8Array;
            toProtoMsg(message: _61.AirdropProposal): _61.AirdropProposalProtoMsg;
        };
        IBCMetadataProposal: {
            encode(message: _61.IBCMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.IBCMetadataProposal;
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
            }): _61.IBCMetadataProposal;
            fromAmino(object: _61.IBCMetadataProposalAmino): _61.IBCMetadataProposal;
            toAmino(message: _61.IBCMetadataProposal): _61.IBCMetadataProposalAmino;
            fromAminoMsg(object: _61.IBCMetadataProposalAminoMsg): _61.IBCMetadataProposal;
            fromProtoMsg(message: _61.IBCMetadataProposalProtoMsg): _61.IBCMetadataProposal;
            toProto(message: _61.IBCMetadataProposal): Uint8Array;
            toProtoMsg(message: _61.IBCMetadataProposal): _61.IBCMetadataProposalProtoMsg;
        };
        QueryParamsRequest: {
            encode(_: _60.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryParamsRequest;
            fromPartial(_: {}): _60.QueryParamsRequest;
            fromAmino(_: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
            toAmino(_: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
            fromAminoMsg(object: _60.QueryParamsRequestAminoMsg): _60.QueryParamsRequest;
            fromProtoMsg(message: _60.QueryParamsRequestProtoMsg): _60.QueryParamsRequest;
            toProto(message: _60.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            encode(message: _60.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryParamsResponse;
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
            }): _60.QueryParamsResponse;
            fromAmino(object: _60.QueryParamsResponseAmino): _60.QueryParamsResponse;
            toAmino(message: _60.QueryParamsResponse): _60.QueryParamsResponseAmino;
            fromAminoMsg(object: _60.QueryParamsResponseAminoMsg): _60.QueryParamsResponse;
            fromProtoMsg(message: _60.QueryParamsResponseProtoMsg): _60.QueryParamsResponse;
            toProto(message: _60.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseProtoMsg;
        };
        QueryCurrentValsetRequest: {
            encode(_: _60.QueryCurrentValsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryCurrentValsetRequest;
            fromPartial(_: {}): _60.QueryCurrentValsetRequest;
            fromAmino(_: _60.QueryCurrentValsetRequestAmino): _60.QueryCurrentValsetRequest;
            toAmino(_: _60.QueryCurrentValsetRequest): _60.QueryCurrentValsetRequestAmino;
            fromAminoMsg(object: _60.QueryCurrentValsetRequestAminoMsg): _60.QueryCurrentValsetRequest;
            fromProtoMsg(message: _60.QueryCurrentValsetRequestProtoMsg): _60.QueryCurrentValsetRequest;
            toProto(message: _60.QueryCurrentValsetRequest): Uint8Array;
            toProtoMsg(message: _60.QueryCurrentValsetRequest): _60.QueryCurrentValsetRequestProtoMsg;
        };
        QueryCurrentValsetResponse: {
            encode(message: _60.QueryCurrentValsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryCurrentValsetResponse;
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
            }): _60.QueryCurrentValsetResponse;
            fromAmino(object: _60.QueryCurrentValsetResponseAmino): _60.QueryCurrentValsetResponse;
            toAmino(message: _60.QueryCurrentValsetResponse): _60.QueryCurrentValsetResponseAmino;
            fromAminoMsg(object: _60.QueryCurrentValsetResponseAminoMsg): _60.QueryCurrentValsetResponse;
            fromProtoMsg(message: _60.QueryCurrentValsetResponseProtoMsg): _60.QueryCurrentValsetResponse;
            toProto(message: _60.QueryCurrentValsetResponse): Uint8Array;
            toProtoMsg(message: _60.QueryCurrentValsetResponse): _60.QueryCurrentValsetResponseProtoMsg;
        };
        QueryValsetRequestRequest: {
            encode(message: _60.QueryValsetRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryValsetRequestRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
            }): _60.QueryValsetRequestRequest;
            fromAmino(object: _60.QueryValsetRequestRequestAmino): _60.QueryValsetRequestRequest;
            toAmino(message: _60.QueryValsetRequestRequest): _60.QueryValsetRequestRequestAmino;
            fromAminoMsg(object: _60.QueryValsetRequestRequestAminoMsg): _60.QueryValsetRequestRequest;
            fromProtoMsg(message: _60.QueryValsetRequestRequestProtoMsg): _60.QueryValsetRequestRequest;
            toProto(message: _60.QueryValsetRequestRequest): Uint8Array;
            toProtoMsg(message: _60.QueryValsetRequestRequest): _60.QueryValsetRequestRequestProtoMsg;
        };
        QueryValsetRequestResponse: {
            encode(message: _60.QueryValsetRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryValsetRequestResponse;
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
            }): _60.QueryValsetRequestResponse;
            fromAmino(object: _60.QueryValsetRequestResponseAmino): _60.QueryValsetRequestResponse;
            toAmino(message: _60.QueryValsetRequestResponse): _60.QueryValsetRequestResponseAmino;
            fromAminoMsg(object: _60.QueryValsetRequestResponseAminoMsg): _60.QueryValsetRequestResponse;
            fromProtoMsg(message: _60.QueryValsetRequestResponseProtoMsg): _60.QueryValsetRequestResponse;
            toProto(message: _60.QueryValsetRequestResponse): Uint8Array;
            toProtoMsg(message: _60.QueryValsetRequestResponse): _60.QueryValsetRequestResponseProtoMsg;
        };
        QueryValsetConfirmRequest: {
            encode(message: _60.QueryValsetConfirmRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryValsetConfirmRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                address?: string;
            }): _60.QueryValsetConfirmRequest;
            fromAmino(object: _60.QueryValsetConfirmRequestAmino): _60.QueryValsetConfirmRequest;
            toAmino(message: _60.QueryValsetConfirmRequest): _60.QueryValsetConfirmRequestAmino;
            fromAminoMsg(object: _60.QueryValsetConfirmRequestAminoMsg): _60.QueryValsetConfirmRequest;
            fromProtoMsg(message: _60.QueryValsetConfirmRequestProtoMsg): _60.QueryValsetConfirmRequest;
            toProto(message: _60.QueryValsetConfirmRequest): Uint8Array;
            toProtoMsg(message: _60.QueryValsetConfirmRequest): _60.QueryValsetConfirmRequestProtoMsg;
        };
        QueryValsetConfirmResponse: {
            encode(message: _60.QueryValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryValsetConfirmResponse;
            fromPartial(object: {
                confirm?: {
                    nonce?: string | number | import("long").Long;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                };
            }): _60.QueryValsetConfirmResponse;
            fromAmino(object: _60.QueryValsetConfirmResponseAmino): _60.QueryValsetConfirmResponse;
            toAmino(message: _60.QueryValsetConfirmResponse): _60.QueryValsetConfirmResponseAmino;
            fromAminoMsg(object: _60.QueryValsetConfirmResponseAminoMsg): _60.QueryValsetConfirmResponse;
            fromProtoMsg(message: _60.QueryValsetConfirmResponseProtoMsg): _60.QueryValsetConfirmResponse;
            toProto(message: _60.QueryValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _60.QueryValsetConfirmResponse): _60.QueryValsetConfirmResponseProtoMsg;
        };
        QueryValsetConfirmsByNonceRequest: {
            encode(message: _60.QueryValsetConfirmsByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryValsetConfirmsByNonceRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
            }): _60.QueryValsetConfirmsByNonceRequest;
            fromAmino(object: _60.QueryValsetConfirmsByNonceRequestAmino): _60.QueryValsetConfirmsByNonceRequest;
            toAmino(message: _60.QueryValsetConfirmsByNonceRequest): _60.QueryValsetConfirmsByNonceRequestAmino;
            fromAminoMsg(object: _60.QueryValsetConfirmsByNonceRequestAminoMsg): _60.QueryValsetConfirmsByNonceRequest;
            fromProtoMsg(message: _60.QueryValsetConfirmsByNonceRequestProtoMsg): _60.QueryValsetConfirmsByNonceRequest;
            toProto(message: _60.QueryValsetConfirmsByNonceRequest): Uint8Array;
            toProtoMsg(message: _60.QueryValsetConfirmsByNonceRequest): _60.QueryValsetConfirmsByNonceRequestProtoMsg;
        };
        QueryValsetConfirmsByNonceResponse: {
            encode(message: _60.QueryValsetConfirmsByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryValsetConfirmsByNonceResponse;
            fromPartial(object: {
                confirms?: {
                    nonce?: string | number | import("long").Long;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                }[];
            }): _60.QueryValsetConfirmsByNonceResponse;
            fromAmino(object: _60.QueryValsetConfirmsByNonceResponseAmino): _60.QueryValsetConfirmsByNonceResponse;
            toAmino(message: _60.QueryValsetConfirmsByNonceResponse): _60.QueryValsetConfirmsByNonceResponseAmino;
            fromAminoMsg(object: _60.QueryValsetConfirmsByNonceResponseAminoMsg): _60.QueryValsetConfirmsByNonceResponse;
            fromProtoMsg(message: _60.QueryValsetConfirmsByNonceResponseProtoMsg): _60.QueryValsetConfirmsByNonceResponse;
            toProto(message: _60.QueryValsetConfirmsByNonceResponse): Uint8Array;
            toProtoMsg(message: _60.QueryValsetConfirmsByNonceResponse): _60.QueryValsetConfirmsByNonceResponseProtoMsg;
        };
        QueryLastValsetRequestsRequest: {
            encode(_: _60.QueryLastValsetRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastValsetRequestsRequest;
            fromPartial(_: {}): _60.QueryLastValsetRequestsRequest;
            fromAmino(_: _60.QueryLastValsetRequestsRequestAmino): _60.QueryLastValsetRequestsRequest;
            toAmino(_: _60.QueryLastValsetRequestsRequest): _60.QueryLastValsetRequestsRequestAmino;
            fromAminoMsg(object: _60.QueryLastValsetRequestsRequestAminoMsg): _60.QueryLastValsetRequestsRequest;
            fromProtoMsg(message: _60.QueryLastValsetRequestsRequestProtoMsg): _60.QueryLastValsetRequestsRequest;
            toProto(message: _60.QueryLastValsetRequestsRequest): Uint8Array;
            toProtoMsg(message: _60.QueryLastValsetRequestsRequest): _60.QueryLastValsetRequestsRequestProtoMsg;
        };
        QueryLastValsetRequestsResponse: {
            encode(message: _60.QueryLastValsetRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastValsetRequestsResponse;
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
            }): _60.QueryLastValsetRequestsResponse;
            fromAmino(object: _60.QueryLastValsetRequestsResponseAmino): _60.QueryLastValsetRequestsResponse;
            toAmino(message: _60.QueryLastValsetRequestsResponse): _60.QueryLastValsetRequestsResponseAmino;
            fromAminoMsg(object: _60.QueryLastValsetRequestsResponseAminoMsg): _60.QueryLastValsetRequestsResponse;
            fromProtoMsg(message: _60.QueryLastValsetRequestsResponseProtoMsg): _60.QueryLastValsetRequestsResponse;
            toProto(message: _60.QueryLastValsetRequestsResponse): Uint8Array;
            toProtoMsg(message: _60.QueryLastValsetRequestsResponse): _60.QueryLastValsetRequestsResponseProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrRequest: {
            encode(message: _60.QueryLastPendingValsetRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastPendingValsetRequestByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _60.QueryLastPendingValsetRequestByAddrRequest;
            fromAmino(object: _60.QueryLastPendingValsetRequestByAddrRequestAmino): _60.QueryLastPendingValsetRequestByAddrRequest;
            toAmino(message: _60.QueryLastPendingValsetRequestByAddrRequest): _60.QueryLastPendingValsetRequestByAddrRequestAmino;
            fromAminoMsg(object: _60.QueryLastPendingValsetRequestByAddrRequestAminoMsg): _60.QueryLastPendingValsetRequestByAddrRequest;
            fromProtoMsg(message: _60.QueryLastPendingValsetRequestByAddrRequestProtoMsg): _60.QueryLastPendingValsetRequestByAddrRequest;
            toProto(message: _60.QueryLastPendingValsetRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _60.QueryLastPendingValsetRequestByAddrRequest): _60.QueryLastPendingValsetRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrResponse: {
            encode(message: _60.QueryLastPendingValsetRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastPendingValsetRequestByAddrResponse;
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
            }): _60.QueryLastPendingValsetRequestByAddrResponse;
            fromAmino(object: _60.QueryLastPendingValsetRequestByAddrResponseAmino): _60.QueryLastPendingValsetRequestByAddrResponse;
            toAmino(message: _60.QueryLastPendingValsetRequestByAddrResponse): _60.QueryLastPendingValsetRequestByAddrResponseAmino;
            fromAminoMsg(object: _60.QueryLastPendingValsetRequestByAddrResponseAminoMsg): _60.QueryLastPendingValsetRequestByAddrResponse;
            fromProtoMsg(message: _60.QueryLastPendingValsetRequestByAddrResponseProtoMsg): _60.QueryLastPendingValsetRequestByAddrResponse;
            toProto(message: _60.QueryLastPendingValsetRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _60.QueryLastPendingValsetRequestByAddrResponse): _60.QueryLastPendingValsetRequestByAddrResponseProtoMsg;
        };
        QueryBatchFeeRequest: {
            encode(_: _60.QueryBatchFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryBatchFeeRequest;
            fromPartial(_: {}): _60.QueryBatchFeeRequest;
            fromAmino(_: _60.QueryBatchFeeRequestAmino): _60.QueryBatchFeeRequest;
            toAmino(_: _60.QueryBatchFeeRequest): _60.QueryBatchFeeRequestAmino;
            fromAminoMsg(object: _60.QueryBatchFeeRequestAminoMsg): _60.QueryBatchFeeRequest;
            fromProtoMsg(message: _60.QueryBatchFeeRequestProtoMsg): _60.QueryBatchFeeRequest;
            toProto(message: _60.QueryBatchFeeRequest): Uint8Array;
            toProtoMsg(message: _60.QueryBatchFeeRequest): _60.QueryBatchFeeRequestProtoMsg;
        };
        QueryBatchFeeResponse: {
            encode(message: _60.QueryBatchFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryBatchFeeResponse;
            fromPartial(object: {
                batchFees?: {
                    token?: string;
                    totalFees?: string;
                    txCount?: string | number | import("long").Long;
                }[];
            }): _60.QueryBatchFeeResponse;
            fromAmino(object: _60.QueryBatchFeeResponseAmino): _60.QueryBatchFeeResponse;
            toAmino(message: _60.QueryBatchFeeResponse): _60.QueryBatchFeeResponseAmino;
            fromAminoMsg(object: _60.QueryBatchFeeResponseAminoMsg): _60.QueryBatchFeeResponse;
            fromProtoMsg(message: _60.QueryBatchFeeResponseProtoMsg): _60.QueryBatchFeeResponse;
            toProto(message: _60.QueryBatchFeeResponse): Uint8Array;
            toProtoMsg(message: _60.QueryBatchFeeResponse): _60.QueryBatchFeeResponseProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrRequest: {
            encode(message: _60.QueryLastPendingBatchRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastPendingBatchRequestByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _60.QueryLastPendingBatchRequestByAddrRequest;
            fromAmino(object: _60.QueryLastPendingBatchRequestByAddrRequestAmino): _60.QueryLastPendingBatchRequestByAddrRequest;
            toAmino(message: _60.QueryLastPendingBatchRequestByAddrRequest): _60.QueryLastPendingBatchRequestByAddrRequestAmino;
            fromAminoMsg(object: _60.QueryLastPendingBatchRequestByAddrRequestAminoMsg): _60.QueryLastPendingBatchRequestByAddrRequest;
            fromProtoMsg(message: _60.QueryLastPendingBatchRequestByAddrRequestProtoMsg): _60.QueryLastPendingBatchRequestByAddrRequest;
            toProto(message: _60.QueryLastPendingBatchRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _60.QueryLastPendingBatchRequestByAddrRequest): _60.QueryLastPendingBatchRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrResponse: {
            encode(message: _60.QueryLastPendingBatchRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastPendingBatchRequestByAddrResponse;
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
            }): _60.QueryLastPendingBatchRequestByAddrResponse;
            fromAmino(object: _60.QueryLastPendingBatchRequestByAddrResponseAmino): _60.QueryLastPendingBatchRequestByAddrResponse;
            toAmino(message: _60.QueryLastPendingBatchRequestByAddrResponse): _60.QueryLastPendingBatchRequestByAddrResponseAmino;
            fromAminoMsg(object: _60.QueryLastPendingBatchRequestByAddrResponseAminoMsg): _60.QueryLastPendingBatchRequestByAddrResponse;
            fromProtoMsg(message: _60.QueryLastPendingBatchRequestByAddrResponseProtoMsg): _60.QueryLastPendingBatchRequestByAddrResponse;
            toProto(message: _60.QueryLastPendingBatchRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _60.QueryLastPendingBatchRequestByAddrResponse): _60.QueryLastPendingBatchRequestByAddrResponseProtoMsg;
        };
        QueryLastPendingLogicCallByAddrRequest: {
            encode(message: _60.QueryLastPendingLogicCallByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastPendingLogicCallByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _60.QueryLastPendingLogicCallByAddrRequest;
            fromAmino(object: _60.QueryLastPendingLogicCallByAddrRequestAmino): _60.QueryLastPendingLogicCallByAddrRequest;
            toAmino(message: _60.QueryLastPendingLogicCallByAddrRequest): _60.QueryLastPendingLogicCallByAddrRequestAmino;
            fromAminoMsg(object: _60.QueryLastPendingLogicCallByAddrRequestAminoMsg): _60.QueryLastPendingLogicCallByAddrRequest;
            fromProtoMsg(message: _60.QueryLastPendingLogicCallByAddrRequestProtoMsg): _60.QueryLastPendingLogicCallByAddrRequest;
            toProto(message: _60.QueryLastPendingLogicCallByAddrRequest): Uint8Array;
            toProtoMsg(message: _60.QueryLastPendingLogicCallByAddrRequest): _60.QueryLastPendingLogicCallByAddrRequestProtoMsg;
        };
        QueryLastPendingLogicCallByAddrResponse: {
            encode(message: _60.QueryLastPendingLogicCallByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastPendingLogicCallByAddrResponse;
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
            }): _60.QueryLastPendingLogicCallByAddrResponse;
            fromAmino(object: _60.QueryLastPendingLogicCallByAddrResponseAmino): _60.QueryLastPendingLogicCallByAddrResponse;
            toAmino(message: _60.QueryLastPendingLogicCallByAddrResponse): _60.QueryLastPendingLogicCallByAddrResponseAmino;
            fromAminoMsg(object: _60.QueryLastPendingLogicCallByAddrResponseAminoMsg): _60.QueryLastPendingLogicCallByAddrResponse;
            fromProtoMsg(message: _60.QueryLastPendingLogicCallByAddrResponseProtoMsg): _60.QueryLastPendingLogicCallByAddrResponse;
            toProto(message: _60.QueryLastPendingLogicCallByAddrResponse): Uint8Array;
            toProtoMsg(message: _60.QueryLastPendingLogicCallByAddrResponse): _60.QueryLastPendingLogicCallByAddrResponseProtoMsg;
        };
        QueryOutgoingTxBatchesRequest: {
            encode(_: _60.QueryOutgoingTxBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryOutgoingTxBatchesRequest;
            fromPartial(_: {}): _60.QueryOutgoingTxBatchesRequest;
            fromAmino(_: _60.QueryOutgoingTxBatchesRequestAmino): _60.QueryOutgoingTxBatchesRequest;
            toAmino(_: _60.QueryOutgoingTxBatchesRequest): _60.QueryOutgoingTxBatchesRequestAmino;
            fromAminoMsg(object: _60.QueryOutgoingTxBatchesRequestAminoMsg): _60.QueryOutgoingTxBatchesRequest;
            fromProtoMsg(message: _60.QueryOutgoingTxBatchesRequestProtoMsg): _60.QueryOutgoingTxBatchesRequest;
            toProto(message: _60.QueryOutgoingTxBatchesRequest): Uint8Array;
            toProtoMsg(message: _60.QueryOutgoingTxBatchesRequest): _60.QueryOutgoingTxBatchesRequestProtoMsg;
        };
        QueryOutgoingTxBatchesResponse: {
            encode(message: _60.QueryOutgoingTxBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryOutgoingTxBatchesResponse;
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
            }): _60.QueryOutgoingTxBatchesResponse;
            fromAmino(object: _60.QueryOutgoingTxBatchesResponseAmino): _60.QueryOutgoingTxBatchesResponse;
            toAmino(message: _60.QueryOutgoingTxBatchesResponse): _60.QueryOutgoingTxBatchesResponseAmino;
            fromAminoMsg(object: _60.QueryOutgoingTxBatchesResponseAminoMsg): _60.QueryOutgoingTxBatchesResponse;
            fromProtoMsg(message: _60.QueryOutgoingTxBatchesResponseProtoMsg): _60.QueryOutgoingTxBatchesResponse;
            toProto(message: _60.QueryOutgoingTxBatchesResponse): Uint8Array;
            toProtoMsg(message: _60.QueryOutgoingTxBatchesResponse): _60.QueryOutgoingTxBatchesResponseProtoMsg;
        };
        QueryOutgoingLogicCallsRequest: {
            encode(_: _60.QueryOutgoingLogicCallsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryOutgoingLogicCallsRequest;
            fromPartial(_: {}): _60.QueryOutgoingLogicCallsRequest;
            fromAmino(_: _60.QueryOutgoingLogicCallsRequestAmino): _60.QueryOutgoingLogicCallsRequest;
            toAmino(_: _60.QueryOutgoingLogicCallsRequest): _60.QueryOutgoingLogicCallsRequestAmino;
            fromAminoMsg(object: _60.QueryOutgoingLogicCallsRequestAminoMsg): _60.QueryOutgoingLogicCallsRequest;
            fromProtoMsg(message: _60.QueryOutgoingLogicCallsRequestProtoMsg): _60.QueryOutgoingLogicCallsRequest;
            toProto(message: _60.QueryOutgoingLogicCallsRequest): Uint8Array;
            toProtoMsg(message: _60.QueryOutgoingLogicCallsRequest): _60.QueryOutgoingLogicCallsRequestProtoMsg;
        };
        QueryOutgoingLogicCallsResponse: {
            encode(message: _60.QueryOutgoingLogicCallsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryOutgoingLogicCallsResponse;
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
            }): _60.QueryOutgoingLogicCallsResponse;
            fromAmino(object: _60.QueryOutgoingLogicCallsResponseAmino): _60.QueryOutgoingLogicCallsResponse;
            toAmino(message: _60.QueryOutgoingLogicCallsResponse): _60.QueryOutgoingLogicCallsResponseAmino;
            fromAminoMsg(object: _60.QueryOutgoingLogicCallsResponseAminoMsg): _60.QueryOutgoingLogicCallsResponse;
            fromProtoMsg(message: _60.QueryOutgoingLogicCallsResponseProtoMsg): _60.QueryOutgoingLogicCallsResponse;
            toProto(message: _60.QueryOutgoingLogicCallsResponse): Uint8Array;
            toProtoMsg(message: _60.QueryOutgoingLogicCallsResponse): _60.QueryOutgoingLogicCallsResponseProtoMsg;
        };
        QueryBatchRequestByNonceRequest: {
            encode(message: _60.QueryBatchRequestByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryBatchRequestByNonceRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                contractAddress?: string;
            }): _60.QueryBatchRequestByNonceRequest;
            fromAmino(object: _60.QueryBatchRequestByNonceRequestAmino): _60.QueryBatchRequestByNonceRequest;
            toAmino(message: _60.QueryBatchRequestByNonceRequest): _60.QueryBatchRequestByNonceRequestAmino;
            fromAminoMsg(object: _60.QueryBatchRequestByNonceRequestAminoMsg): _60.QueryBatchRequestByNonceRequest;
            fromProtoMsg(message: _60.QueryBatchRequestByNonceRequestProtoMsg): _60.QueryBatchRequestByNonceRequest;
            toProto(message: _60.QueryBatchRequestByNonceRequest): Uint8Array;
            toProtoMsg(message: _60.QueryBatchRequestByNonceRequest): _60.QueryBatchRequestByNonceRequestProtoMsg;
        };
        QueryBatchRequestByNonceResponse: {
            encode(message: _60.QueryBatchRequestByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryBatchRequestByNonceResponse;
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
            }): _60.QueryBatchRequestByNonceResponse;
            fromAmino(object: _60.QueryBatchRequestByNonceResponseAmino): _60.QueryBatchRequestByNonceResponse;
            toAmino(message: _60.QueryBatchRequestByNonceResponse): _60.QueryBatchRequestByNonceResponseAmino;
            fromAminoMsg(object: _60.QueryBatchRequestByNonceResponseAminoMsg): _60.QueryBatchRequestByNonceResponse;
            fromProtoMsg(message: _60.QueryBatchRequestByNonceResponseProtoMsg): _60.QueryBatchRequestByNonceResponse;
            toProto(message: _60.QueryBatchRequestByNonceResponse): Uint8Array;
            toProtoMsg(message: _60.QueryBatchRequestByNonceResponse): _60.QueryBatchRequestByNonceResponseProtoMsg;
        };
        QueryBatchConfirmsRequest: {
            encode(message: _60.QueryBatchConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryBatchConfirmsRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                contractAddress?: string;
            }): _60.QueryBatchConfirmsRequest;
            fromAmino(object: _60.QueryBatchConfirmsRequestAmino): _60.QueryBatchConfirmsRequest;
            toAmino(message: _60.QueryBatchConfirmsRequest): _60.QueryBatchConfirmsRequestAmino;
            fromAminoMsg(object: _60.QueryBatchConfirmsRequestAminoMsg): _60.QueryBatchConfirmsRequest;
            fromProtoMsg(message: _60.QueryBatchConfirmsRequestProtoMsg): _60.QueryBatchConfirmsRequest;
            toProto(message: _60.QueryBatchConfirmsRequest): Uint8Array;
            toProtoMsg(message: _60.QueryBatchConfirmsRequest): _60.QueryBatchConfirmsRequestProtoMsg;
        };
        QueryBatchConfirmsResponse: {
            encode(message: _60.QueryBatchConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryBatchConfirmsResponse;
            fromPartial(object: {
                confirms?: {
                    nonce?: string | number | import("long").Long;
                    tokenContract?: string;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _60.QueryBatchConfirmsResponse;
            fromAmino(object: _60.QueryBatchConfirmsResponseAmino): _60.QueryBatchConfirmsResponse;
            toAmino(message: _60.QueryBatchConfirmsResponse): _60.QueryBatchConfirmsResponseAmino;
            fromAminoMsg(object: _60.QueryBatchConfirmsResponseAminoMsg): _60.QueryBatchConfirmsResponse;
            fromProtoMsg(message: _60.QueryBatchConfirmsResponseProtoMsg): _60.QueryBatchConfirmsResponse;
            toProto(message: _60.QueryBatchConfirmsResponse): Uint8Array;
            toProtoMsg(message: _60.QueryBatchConfirmsResponse): _60.QueryBatchConfirmsResponseProtoMsg;
        };
        QueryLogicConfirmsRequest: {
            encode(message: _60.QueryLogicConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLogicConfirmsRequest;
            fromPartial(object: {
                invalidationId?: Uint8Array;
                invalidationNonce?: string | number | import("long").Long;
            }): _60.QueryLogicConfirmsRequest;
            fromAmino(object: _60.QueryLogicConfirmsRequestAmino): _60.QueryLogicConfirmsRequest;
            toAmino(message: _60.QueryLogicConfirmsRequest): _60.QueryLogicConfirmsRequestAmino;
            fromAminoMsg(object: _60.QueryLogicConfirmsRequestAminoMsg): _60.QueryLogicConfirmsRequest;
            fromProtoMsg(message: _60.QueryLogicConfirmsRequestProtoMsg): _60.QueryLogicConfirmsRequest;
            toProto(message: _60.QueryLogicConfirmsRequest): Uint8Array;
            toProtoMsg(message: _60.QueryLogicConfirmsRequest): _60.QueryLogicConfirmsRequestProtoMsg;
        };
        QueryLogicConfirmsResponse: {
            encode(message: _60.QueryLogicConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLogicConfirmsResponse;
            fromPartial(object: {
                confirms?: {
                    invalidationId?: string;
                    invalidationNonce?: string | number | import("long").Long;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _60.QueryLogicConfirmsResponse;
            fromAmino(object: _60.QueryLogicConfirmsResponseAmino): _60.QueryLogicConfirmsResponse;
            toAmino(message: _60.QueryLogicConfirmsResponse): _60.QueryLogicConfirmsResponseAmino;
            fromAminoMsg(object: _60.QueryLogicConfirmsResponseAminoMsg): _60.QueryLogicConfirmsResponse;
            fromProtoMsg(message: _60.QueryLogicConfirmsResponseProtoMsg): _60.QueryLogicConfirmsResponse;
            toProto(message: _60.QueryLogicConfirmsResponse): Uint8Array;
            toProtoMsg(message: _60.QueryLogicConfirmsResponse): _60.QueryLogicConfirmsResponseProtoMsg;
        };
        QueryLastEventNonceByAddrRequest: {
            encode(message: _60.QueryLastEventNonceByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastEventNonceByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _60.QueryLastEventNonceByAddrRequest;
            fromAmino(object: _60.QueryLastEventNonceByAddrRequestAmino): _60.QueryLastEventNonceByAddrRequest;
            toAmino(message: _60.QueryLastEventNonceByAddrRequest): _60.QueryLastEventNonceByAddrRequestAmino;
            fromAminoMsg(object: _60.QueryLastEventNonceByAddrRequestAminoMsg): _60.QueryLastEventNonceByAddrRequest;
            fromProtoMsg(message: _60.QueryLastEventNonceByAddrRequestProtoMsg): _60.QueryLastEventNonceByAddrRequest;
            toProto(message: _60.QueryLastEventNonceByAddrRequest): Uint8Array;
            toProtoMsg(message: _60.QueryLastEventNonceByAddrRequest): _60.QueryLastEventNonceByAddrRequestProtoMsg;
        };
        QueryLastEventNonceByAddrResponse: {
            encode(message: _60.QueryLastEventNonceByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryLastEventNonceByAddrResponse;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
            }): _60.QueryLastEventNonceByAddrResponse;
            fromAmino(object: _60.QueryLastEventNonceByAddrResponseAmino): _60.QueryLastEventNonceByAddrResponse;
            toAmino(message: _60.QueryLastEventNonceByAddrResponse): _60.QueryLastEventNonceByAddrResponseAmino;
            fromAminoMsg(object: _60.QueryLastEventNonceByAddrResponseAminoMsg): _60.QueryLastEventNonceByAddrResponse;
            fromProtoMsg(message: _60.QueryLastEventNonceByAddrResponseProtoMsg): _60.QueryLastEventNonceByAddrResponse;
            toProto(message: _60.QueryLastEventNonceByAddrResponse): Uint8Array;
            toProtoMsg(message: _60.QueryLastEventNonceByAddrResponse): _60.QueryLastEventNonceByAddrResponseProtoMsg;
        };
        QueryERC20ToDenomRequest: {
            encode(message: _60.QueryERC20ToDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryERC20ToDenomRequest;
            fromPartial(object: {
                erc20?: string;
            }): _60.QueryERC20ToDenomRequest;
            fromAmino(object: _60.QueryERC20ToDenomRequestAmino): _60.QueryERC20ToDenomRequest;
            toAmino(message: _60.QueryERC20ToDenomRequest): _60.QueryERC20ToDenomRequestAmino;
            fromAminoMsg(object: _60.QueryERC20ToDenomRequestAminoMsg): _60.QueryERC20ToDenomRequest;
            fromProtoMsg(message: _60.QueryERC20ToDenomRequestProtoMsg): _60.QueryERC20ToDenomRequest;
            toProto(message: _60.QueryERC20ToDenomRequest): Uint8Array;
            toProtoMsg(message: _60.QueryERC20ToDenomRequest): _60.QueryERC20ToDenomRequestProtoMsg;
        };
        QueryERC20ToDenomResponse: {
            encode(message: _60.QueryERC20ToDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryERC20ToDenomResponse;
            fromPartial(object: {
                denom?: string;
                cosmosOriginated?: boolean;
            }): _60.QueryERC20ToDenomResponse;
            fromAmino(object: _60.QueryERC20ToDenomResponseAmino): _60.QueryERC20ToDenomResponse;
            toAmino(message: _60.QueryERC20ToDenomResponse): _60.QueryERC20ToDenomResponseAmino;
            fromAminoMsg(object: _60.QueryERC20ToDenomResponseAminoMsg): _60.QueryERC20ToDenomResponse;
            fromProtoMsg(message: _60.QueryERC20ToDenomResponseProtoMsg): _60.QueryERC20ToDenomResponse;
            toProto(message: _60.QueryERC20ToDenomResponse): Uint8Array;
            toProtoMsg(message: _60.QueryERC20ToDenomResponse): _60.QueryERC20ToDenomResponseProtoMsg;
        };
        QueryDenomToERC20Request: {
            encode(message: _60.QueryDenomToERC20Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDenomToERC20Request;
            fromPartial(object: {
                denom?: string;
            }): _60.QueryDenomToERC20Request;
            fromAmino(object: _60.QueryDenomToERC20RequestAmino): _60.QueryDenomToERC20Request;
            toAmino(message: _60.QueryDenomToERC20Request): _60.QueryDenomToERC20RequestAmino;
            fromAminoMsg(object: _60.QueryDenomToERC20RequestAminoMsg): _60.QueryDenomToERC20Request;
            fromProtoMsg(message: _60.QueryDenomToERC20RequestProtoMsg): _60.QueryDenomToERC20Request;
            toProto(message: _60.QueryDenomToERC20Request): Uint8Array;
            toProtoMsg(message: _60.QueryDenomToERC20Request): _60.QueryDenomToERC20RequestProtoMsg;
        };
        QueryDenomToERC20Response: {
            encode(message: _60.QueryDenomToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDenomToERC20Response;
            fromPartial(object: {
                erc20?: string;
                cosmosOriginated?: boolean;
            }): _60.QueryDenomToERC20Response;
            fromAmino(object: _60.QueryDenomToERC20ResponseAmino): _60.QueryDenomToERC20Response;
            toAmino(message: _60.QueryDenomToERC20Response): _60.QueryDenomToERC20ResponseAmino;
            fromAminoMsg(object: _60.QueryDenomToERC20ResponseAminoMsg): _60.QueryDenomToERC20Response;
            fromProtoMsg(message: _60.QueryDenomToERC20ResponseProtoMsg): _60.QueryDenomToERC20Response;
            toProto(message: _60.QueryDenomToERC20Response): Uint8Array;
            toProtoMsg(message: _60.QueryDenomToERC20Response): _60.QueryDenomToERC20ResponseProtoMsg;
        };
        QueryAttestationsRequest: {
            encode(message: _60.QueryAttestationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryAttestationsRequest;
            fromPartial(object: {
                limit?: string | number | import("long").Long;
            }): _60.QueryAttestationsRequest;
            fromAmino(object: _60.QueryAttestationsRequestAmino): _60.QueryAttestationsRequest;
            toAmino(message: _60.QueryAttestationsRequest): _60.QueryAttestationsRequestAmino;
            fromAminoMsg(object: _60.QueryAttestationsRequestAminoMsg): _60.QueryAttestationsRequest;
            fromProtoMsg(message: _60.QueryAttestationsRequestProtoMsg): _60.QueryAttestationsRequest;
            toProto(message: _60.QueryAttestationsRequest): Uint8Array;
            toProtoMsg(message: _60.QueryAttestationsRequest): _60.QueryAttestationsRequestProtoMsg;
        };
        QueryAttestationsResponse: {
            encode(message: _60.QueryAttestationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryAttestationsResponse;
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
            }): _60.QueryAttestationsResponse;
            fromAmino(object: _60.QueryAttestationsResponseAmino): _60.QueryAttestationsResponse;
            toAmino(message: _60.QueryAttestationsResponse): _60.QueryAttestationsResponseAmino;
            fromAminoMsg(object: _60.QueryAttestationsResponseAminoMsg): _60.QueryAttestationsResponse;
            fromProtoMsg(message: _60.QueryAttestationsResponseProtoMsg): _60.QueryAttestationsResponse;
            toProto(message: _60.QueryAttestationsResponse): Uint8Array;
            toProtoMsg(message: _60.QueryAttestationsResponse): _60.QueryAttestationsResponseProtoMsg;
        };
        QueryDelegateKeysByValidatorAddress: {
            encode(message: _60.QueryDelegateKeysByValidatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDelegateKeysByValidatorAddress;
            fromPartial(object: {
                validatorAddress?: string;
            }): _60.QueryDelegateKeysByValidatorAddress;
            fromAmino(object: _60.QueryDelegateKeysByValidatorAddressAmino): _60.QueryDelegateKeysByValidatorAddress;
            toAmino(message: _60.QueryDelegateKeysByValidatorAddress): _60.QueryDelegateKeysByValidatorAddressAmino;
            fromAminoMsg(object: _60.QueryDelegateKeysByValidatorAddressAminoMsg): _60.QueryDelegateKeysByValidatorAddress;
            fromProtoMsg(message: _60.QueryDelegateKeysByValidatorAddressProtoMsg): _60.QueryDelegateKeysByValidatorAddress;
            toProto(message: _60.QueryDelegateKeysByValidatorAddress): Uint8Array;
            toProtoMsg(message: _60.QueryDelegateKeysByValidatorAddress): _60.QueryDelegateKeysByValidatorAddressProtoMsg;
        };
        QueryDelegateKeysByValidatorAddressResponse: {
            encode(message: _60.QueryDelegateKeysByValidatorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDelegateKeysByValidatorAddressResponse;
            fromPartial(object: {
                ethAddress?: string;
                orchestratorAddress?: string;
            }): _60.QueryDelegateKeysByValidatorAddressResponse;
            fromAmino(object: _60.QueryDelegateKeysByValidatorAddressResponseAmino): _60.QueryDelegateKeysByValidatorAddressResponse;
            toAmino(message: _60.QueryDelegateKeysByValidatorAddressResponse): _60.QueryDelegateKeysByValidatorAddressResponseAmino;
            fromAminoMsg(object: _60.QueryDelegateKeysByValidatorAddressResponseAminoMsg): _60.QueryDelegateKeysByValidatorAddressResponse;
            fromProtoMsg(message: _60.QueryDelegateKeysByValidatorAddressResponseProtoMsg): _60.QueryDelegateKeysByValidatorAddressResponse;
            toProto(message: _60.QueryDelegateKeysByValidatorAddressResponse): Uint8Array;
            toProtoMsg(message: _60.QueryDelegateKeysByValidatorAddressResponse): _60.QueryDelegateKeysByValidatorAddressResponseProtoMsg;
        };
        QueryDelegateKeysByEthAddress: {
            encode(message: _60.QueryDelegateKeysByEthAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDelegateKeysByEthAddress;
            fromPartial(object: {
                ethAddress?: string;
            }): _60.QueryDelegateKeysByEthAddress;
            fromAmino(object: _60.QueryDelegateKeysByEthAddressAmino): _60.QueryDelegateKeysByEthAddress;
            toAmino(message: _60.QueryDelegateKeysByEthAddress): _60.QueryDelegateKeysByEthAddressAmino;
            fromAminoMsg(object: _60.QueryDelegateKeysByEthAddressAminoMsg): _60.QueryDelegateKeysByEthAddress;
            fromProtoMsg(message: _60.QueryDelegateKeysByEthAddressProtoMsg): _60.QueryDelegateKeysByEthAddress;
            toProto(message: _60.QueryDelegateKeysByEthAddress): Uint8Array;
            toProtoMsg(message: _60.QueryDelegateKeysByEthAddress): _60.QueryDelegateKeysByEthAddressProtoMsg;
        };
        QueryDelegateKeysByEthAddressResponse: {
            encode(message: _60.QueryDelegateKeysByEthAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDelegateKeysByEthAddressResponse;
            fromPartial(object: {
                validatorAddress?: string;
                orchestratorAddress?: string;
            }): _60.QueryDelegateKeysByEthAddressResponse;
            fromAmino(object: _60.QueryDelegateKeysByEthAddressResponseAmino): _60.QueryDelegateKeysByEthAddressResponse;
            toAmino(message: _60.QueryDelegateKeysByEthAddressResponse): _60.QueryDelegateKeysByEthAddressResponseAmino;
            fromAminoMsg(object: _60.QueryDelegateKeysByEthAddressResponseAminoMsg): _60.QueryDelegateKeysByEthAddressResponse;
            fromProtoMsg(message: _60.QueryDelegateKeysByEthAddressResponseProtoMsg): _60.QueryDelegateKeysByEthAddressResponse;
            toProto(message: _60.QueryDelegateKeysByEthAddressResponse): Uint8Array;
            toProtoMsg(message: _60.QueryDelegateKeysByEthAddressResponse): _60.QueryDelegateKeysByEthAddressResponseProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddress: {
            encode(message: _60.QueryDelegateKeysByOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDelegateKeysByOrchestratorAddress;
            fromPartial(object: {
                orchestratorAddress?: string;
            }): _60.QueryDelegateKeysByOrchestratorAddress;
            fromAmino(object: _60.QueryDelegateKeysByOrchestratorAddressAmino): _60.QueryDelegateKeysByOrchestratorAddress;
            toAmino(message: _60.QueryDelegateKeysByOrchestratorAddress): _60.QueryDelegateKeysByOrchestratorAddressAmino;
            fromAminoMsg(object: _60.QueryDelegateKeysByOrchestratorAddressAminoMsg): _60.QueryDelegateKeysByOrchestratorAddress;
            fromProtoMsg(message: _60.QueryDelegateKeysByOrchestratorAddressProtoMsg): _60.QueryDelegateKeysByOrchestratorAddress;
            toProto(message: _60.QueryDelegateKeysByOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _60.QueryDelegateKeysByOrchestratorAddress): _60.QueryDelegateKeysByOrchestratorAddressProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddressResponse: {
            encode(message: _60.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryDelegateKeysByOrchestratorAddressResponse;
            fromPartial(object: {
                validatorAddress?: string;
                ethAddress?: string;
            }): _60.QueryDelegateKeysByOrchestratorAddressResponse;
            fromAmino(object: _60.QueryDelegateKeysByOrchestratorAddressResponseAmino): _60.QueryDelegateKeysByOrchestratorAddressResponse;
            toAmino(message: _60.QueryDelegateKeysByOrchestratorAddressResponse): _60.QueryDelegateKeysByOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _60.QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): _60.QueryDelegateKeysByOrchestratorAddressResponse;
            fromProtoMsg(message: _60.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): _60.QueryDelegateKeysByOrchestratorAddressResponse;
            toProto(message: _60.QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _60.QueryDelegateKeysByOrchestratorAddressResponse): _60.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg;
        };
        QueryPendingSendToEth: {
            encode(message: _60.QueryPendingSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPendingSendToEth;
            fromPartial(object: {
                senderAddress?: string;
            }): _60.QueryPendingSendToEth;
            fromAmino(object: _60.QueryPendingSendToEthAmino): _60.QueryPendingSendToEth;
            toAmino(message: _60.QueryPendingSendToEth): _60.QueryPendingSendToEthAmino;
            fromAminoMsg(object: _60.QueryPendingSendToEthAminoMsg): _60.QueryPendingSendToEth;
            fromProtoMsg(message: _60.QueryPendingSendToEthProtoMsg): _60.QueryPendingSendToEth;
            toProto(message: _60.QueryPendingSendToEth): Uint8Array;
            toProtoMsg(message: _60.QueryPendingSendToEth): _60.QueryPendingSendToEthProtoMsg;
        };
        QueryPendingSendToEthResponse: {
            encode(message: _60.QueryPendingSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.QueryPendingSendToEthResponse;
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
            }): _60.QueryPendingSendToEthResponse;
            fromAmino(object: _60.QueryPendingSendToEthResponseAmino): _60.QueryPendingSendToEthResponse;
            toAmino(message: _60.QueryPendingSendToEthResponse): _60.QueryPendingSendToEthResponseAmino;
            fromAminoMsg(object: _60.QueryPendingSendToEthResponseAminoMsg): _60.QueryPendingSendToEthResponse;
            fromProtoMsg(message: _60.QueryPendingSendToEthResponseProtoMsg): _60.QueryPendingSendToEthResponse;
            toProto(message: _60.QueryPendingSendToEthResponse): Uint8Array;
            toProtoMsg(message: _60.QueryPendingSendToEthResponse): _60.QueryPendingSendToEthResponseProtoMsg;
        };
        IDSet: {
            encode(message: _59.IDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.IDSet;
            fromPartial(object: {
                ids?: (string | number | import("long").Long)[];
            }): _59.IDSet;
            fromAmino(object: _59.IDSetAmino): _59.IDSet;
            toAmino(message: _59.IDSet): _59.IDSetAmino;
            fromAminoMsg(object: _59.IDSetAminoMsg): _59.IDSet;
            fromProtoMsg(message: _59.IDSetProtoMsg): _59.IDSet;
            toProto(message: _59.IDSet): Uint8Array;
            toProtoMsg(message: _59.IDSet): _59.IDSetProtoMsg;
        };
        BatchFees: {
            encode(message: _59.BatchFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.BatchFees;
            fromPartial(object: {
                token?: string;
                totalFees?: string;
                txCount?: string | number | import("long").Long;
            }): _59.BatchFees;
            fromAmino(object: _59.BatchFeesAmino): _59.BatchFees;
            toAmino(message: _59.BatchFees): _59.BatchFeesAmino;
            fromAminoMsg(object: _59.BatchFeesAminoMsg): _59.BatchFees;
            fromProtoMsg(message: _59.BatchFeesProtoMsg): _59.BatchFees;
            toProto(message: _59.BatchFees): Uint8Array;
            toProtoMsg(message: _59.BatchFees): _59.BatchFeesProtoMsg;
        };
        MsgSetOrchestratorAddress: {
            encode(message: _58.MsgSetOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSetOrchestratorAddress;
            fromPartial(object: {
                validator?: string;
                orchestrator?: string;
                ethAddress?: string;
            }): _58.MsgSetOrchestratorAddress;
            fromAmino(object: _58.MsgSetOrchestratorAddressAmino): _58.MsgSetOrchestratorAddress;
            toAmino(message: _58.MsgSetOrchestratorAddress): _58.MsgSetOrchestratorAddressAmino;
            fromAminoMsg(object: _58.MsgSetOrchestratorAddressAminoMsg): _58.MsgSetOrchestratorAddress;
            fromProtoMsg(message: _58.MsgSetOrchestratorAddressProtoMsg): _58.MsgSetOrchestratorAddress;
            toProto(message: _58.MsgSetOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _58.MsgSetOrchestratorAddress): _58.MsgSetOrchestratorAddressProtoMsg;
        };
        MsgSetOrchestratorAddressResponse: {
            encode(_: _58.MsgSetOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSetOrchestratorAddressResponse;
            fromPartial(_: {}): _58.MsgSetOrchestratorAddressResponse;
            fromAmino(_: _58.MsgSetOrchestratorAddressResponseAmino): _58.MsgSetOrchestratorAddressResponse;
            toAmino(_: _58.MsgSetOrchestratorAddressResponse): _58.MsgSetOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _58.MsgSetOrchestratorAddressResponseAminoMsg): _58.MsgSetOrchestratorAddressResponse;
            fromProtoMsg(message: _58.MsgSetOrchestratorAddressResponseProtoMsg): _58.MsgSetOrchestratorAddressResponse;
            toProto(message: _58.MsgSetOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _58.MsgSetOrchestratorAddressResponse): _58.MsgSetOrchestratorAddressResponseProtoMsg;
        };
        MsgValsetConfirm: {
            encode(message: _58.MsgValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgValsetConfirm;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                orchestrator?: string;
                ethAddress?: string;
                signature?: string;
            }): _58.MsgValsetConfirm;
            fromAmino(object: _58.MsgValsetConfirmAmino): _58.MsgValsetConfirm;
            toAmino(message: _58.MsgValsetConfirm): _58.MsgValsetConfirmAmino;
            fromAminoMsg(object: _58.MsgValsetConfirmAminoMsg): _58.MsgValsetConfirm;
            fromProtoMsg(message: _58.MsgValsetConfirmProtoMsg): _58.MsgValsetConfirm;
            toProto(message: _58.MsgValsetConfirm): Uint8Array;
            toProtoMsg(message: _58.MsgValsetConfirm): _58.MsgValsetConfirmProtoMsg;
        };
        MsgValsetConfirmResponse: {
            encode(_: _58.MsgValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgValsetConfirmResponse;
            fromPartial(_: {}): _58.MsgValsetConfirmResponse;
            fromAmino(_: _58.MsgValsetConfirmResponseAmino): _58.MsgValsetConfirmResponse;
            toAmino(_: _58.MsgValsetConfirmResponse): _58.MsgValsetConfirmResponseAmino;
            fromAminoMsg(object: _58.MsgValsetConfirmResponseAminoMsg): _58.MsgValsetConfirmResponse;
            fromProtoMsg(message: _58.MsgValsetConfirmResponseProtoMsg): _58.MsgValsetConfirmResponse;
            toProto(message: _58.MsgValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _58.MsgValsetConfirmResponse): _58.MsgValsetConfirmResponseProtoMsg;
        };
        MsgSendToEth: {
            encode(message: _58.MsgSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSendToEth;
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
            }): _58.MsgSendToEth;
            fromAmino(object: _58.MsgSendToEthAmino): _58.MsgSendToEth;
            toAmino(message: _58.MsgSendToEth): _58.MsgSendToEthAmino;
            fromAminoMsg(object: _58.MsgSendToEthAminoMsg): _58.MsgSendToEth;
            fromProtoMsg(message: _58.MsgSendToEthProtoMsg): _58.MsgSendToEth;
            toProto(message: _58.MsgSendToEth): Uint8Array;
            toProtoMsg(message: _58.MsgSendToEth): _58.MsgSendToEthProtoMsg;
        };
        MsgSendToEthResponse: {
            encode(_: _58.MsgSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSendToEthResponse;
            fromPartial(_: {}): _58.MsgSendToEthResponse;
            fromAmino(_: _58.MsgSendToEthResponseAmino): _58.MsgSendToEthResponse;
            toAmino(_: _58.MsgSendToEthResponse): _58.MsgSendToEthResponseAmino;
            fromAminoMsg(object: _58.MsgSendToEthResponseAminoMsg): _58.MsgSendToEthResponse;
            fromProtoMsg(message: _58.MsgSendToEthResponseProtoMsg): _58.MsgSendToEthResponse;
            toProto(message: _58.MsgSendToEthResponse): Uint8Array;
            toProtoMsg(message: _58.MsgSendToEthResponse): _58.MsgSendToEthResponseProtoMsg;
        };
        MsgRequestBatch: {
            encode(message: _58.MsgRequestBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgRequestBatch;
            fromPartial(object: {
                sender?: string;
                denom?: string;
            }): _58.MsgRequestBatch;
            fromAmino(object: _58.MsgRequestBatchAmino): _58.MsgRequestBatch;
            toAmino(message: _58.MsgRequestBatch): _58.MsgRequestBatchAmino;
            fromAminoMsg(object: _58.MsgRequestBatchAminoMsg): _58.MsgRequestBatch;
            fromProtoMsg(message: _58.MsgRequestBatchProtoMsg): _58.MsgRequestBatch;
            toProto(message: _58.MsgRequestBatch): Uint8Array;
            toProtoMsg(message: _58.MsgRequestBatch): _58.MsgRequestBatchProtoMsg;
        };
        MsgRequestBatchResponse: {
            encode(_: _58.MsgRequestBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgRequestBatchResponse;
            fromPartial(_: {}): _58.MsgRequestBatchResponse;
            fromAmino(_: _58.MsgRequestBatchResponseAmino): _58.MsgRequestBatchResponse;
            toAmino(_: _58.MsgRequestBatchResponse): _58.MsgRequestBatchResponseAmino;
            fromAminoMsg(object: _58.MsgRequestBatchResponseAminoMsg): _58.MsgRequestBatchResponse;
            fromProtoMsg(message: _58.MsgRequestBatchResponseProtoMsg): _58.MsgRequestBatchResponse;
            toProto(message: _58.MsgRequestBatchResponse): Uint8Array;
            toProtoMsg(message: _58.MsgRequestBatchResponse): _58.MsgRequestBatchResponseProtoMsg;
        };
        MsgConfirmBatch: {
            encode(message: _58.MsgConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgConfirmBatch;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                tokenContract?: string;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _58.MsgConfirmBatch;
            fromAmino(object: _58.MsgConfirmBatchAmino): _58.MsgConfirmBatch;
            toAmino(message: _58.MsgConfirmBatch): _58.MsgConfirmBatchAmino;
            fromAminoMsg(object: _58.MsgConfirmBatchAminoMsg): _58.MsgConfirmBatch;
            fromProtoMsg(message: _58.MsgConfirmBatchProtoMsg): _58.MsgConfirmBatch;
            toProto(message: _58.MsgConfirmBatch): Uint8Array;
            toProtoMsg(message: _58.MsgConfirmBatch): _58.MsgConfirmBatchProtoMsg;
        };
        MsgConfirmBatchResponse: {
            encode(_: _58.MsgConfirmBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgConfirmBatchResponse;
            fromPartial(_: {}): _58.MsgConfirmBatchResponse;
            fromAmino(_: _58.MsgConfirmBatchResponseAmino): _58.MsgConfirmBatchResponse;
            toAmino(_: _58.MsgConfirmBatchResponse): _58.MsgConfirmBatchResponseAmino;
            fromAminoMsg(object: _58.MsgConfirmBatchResponseAminoMsg): _58.MsgConfirmBatchResponse;
            fromProtoMsg(message: _58.MsgConfirmBatchResponseProtoMsg): _58.MsgConfirmBatchResponse;
            toProto(message: _58.MsgConfirmBatchResponse): Uint8Array;
            toProtoMsg(message: _58.MsgConfirmBatchResponse): _58.MsgConfirmBatchResponseProtoMsg;
        };
        MsgConfirmLogicCall: {
            encode(message: _58.MsgConfirmLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgConfirmLogicCall;
            fromPartial(object: {
                invalidationId?: string;
                invalidationNonce?: string | number | import("long").Long;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _58.MsgConfirmLogicCall;
            fromAmino(object: _58.MsgConfirmLogicCallAmino): _58.MsgConfirmLogicCall;
            toAmino(message: _58.MsgConfirmLogicCall): _58.MsgConfirmLogicCallAmino;
            fromAminoMsg(object: _58.MsgConfirmLogicCallAminoMsg): _58.MsgConfirmLogicCall;
            fromProtoMsg(message: _58.MsgConfirmLogicCallProtoMsg): _58.MsgConfirmLogicCall;
            toProto(message: _58.MsgConfirmLogicCall): Uint8Array;
            toProtoMsg(message: _58.MsgConfirmLogicCall): _58.MsgConfirmLogicCallProtoMsg;
        };
        MsgConfirmLogicCallResponse: {
            encode(_: _58.MsgConfirmLogicCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgConfirmLogicCallResponse;
            fromPartial(_: {}): _58.MsgConfirmLogicCallResponse;
            fromAmino(_: _58.MsgConfirmLogicCallResponseAmino): _58.MsgConfirmLogicCallResponse;
            toAmino(_: _58.MsgConfirmLogicCallResponse): _58.MsgConfirmLogicCallResponseAmino;
            fromAminoMsg(object: _58.MsgConfirmLogicCallResponseAminoMsg): _58.MsgConfirmLogicCallResponse;
            fromProtoMsg(message: _58.MsgConfirmLogicCallResponseProtoMsg): _58.MsgConfirmLogicCallResponse;
            toProto(message: _58.MsgConfirmLogicCallResponse): Uint8Array;
            toProtoMsg(message: _58.MsgConfirmLogicCallResponse): _58.MsgConfirmLogicCallResponseProtoMsg;
        };
        MsgSendToCosmosClaim: {
            encode(message: _58.MsgSendToCosmosClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSendToCosmosClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                tokenContract?: string;
                amount?: string;
                ethereumSender?: string;
                cosmosReceiver?: string;
                orchestrator?: string;
            }): _58.MsgSendToCosmosClaim;
            fromAmino(object: _58.MsgSendToCosmosClaimAmino): _58.MsgSendToCosmosClaim;
            toAmino(message: _58.MsgSendToCosmosClaim): _58.MsgSendToCosmosClaimAmino;
            fromAminoMsg(object: _58.MsgSendToCosmosClaimAminoMsg): _58.MsgSendToCosmosClaim;
            fromProtoMsg(message: _58.MsgSendToCosmosClaimProtoMsg): _58.MsgSendToCosmosClaim;
            toProto(message: _58.MsgSendToCosmosClaim): Uint8Array;
            toProtoMsg(message: _58.MsgSendToCosmosClaim): _58.MsgSendToCosmosClaimProtoMsg;
        };
        MsgSendToCosmosClaimResponse: {
            encode(_: _58.MsgSendToCosmosClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSendToCosmosClaimResponse;
            fromPartial(_: {}): _58.MsgSendToCosmosClaimResponse;
            fromAmino(_: _58.MsgSendToCosmosClaimResponseAmino): _58.MsgSendToCosmosClaimResponse;
            toAmino(_: _58.MsgSendToCosmosClaimResponse): _58.MsgSendToCosmosClaimResponseAmino;
            fromAminoMsg(object: _58.MsgSendToCosmosClaimResponseAminoMsg): _58.MsgSendToCosmosClaimResponse;
            fromProtoMsg(message: _58.MsgSendToCosmosClaimResponseProtoMsg): _58.MsgSendToCosmosClaimResponse;
            toProto(message: _58.MsgSendToCosmosClaimResponse): Uint8Array;
            toProtoMsg(message: _58.MsgSendToCosmosClaimResponse): _58.MsgSendToCosmosClaimResponseProtoMsg;
        };
        MsgBatchSendToEthClaim: {
            encode(message: _58.MsgBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgBatchSendToEthClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                batchNonce?: string | number | import("long").Long;
                tokenContract?: string;
                orchestrator?: string;
            }): _58.MsgBatchSendToEthClaim;
            fromAmino(object: _58.MsgBatchSendToEthClaimAmino): _58.MsgBatchSendToEthClaim;
            toAmino(message: _58.MsgBatchSendToEthClaim): _58.MsgBatchSendToEthClaimAmino;
            fromAminoMsg(object: _58.MsgBatchSendToEthClaimAminoMsg): _58.MsgBatchSendToEthClaim;
            fromProtoMsg(message: _58.MsgBatchSendToEthClaimProtoMsg): _58.MsgBatchSendToEthClaim;
            toProto(message: _58.MsgBatchSendToEthClaim): Uint8Array;
            toProtoMsg(message: _58.MsgBatchSendToEthClaim): _58.MsgBatchSendToEthClaimProtoMsg;
        };
        MsgBatchSendToEthClaimResponse: {
            encode(_: _58.MsgBatchSendToEthClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgBatchSendToEthClaimResponse;
            fromPartial(_: {}): _58.MsgBatchSendToEthClaimResponse;
            fromAmino(_: _58.MsgBatchSendToEthClaimResponseAmino): _58.MsgBatchSendToEthClaimResponse;
            toAmino(_: _58.MsgBatchSendToEthClaimResponse): _58.MsgBatchSendToEthClaimResponseAmino;
            fromAminoMsg(object: _58.MsgBatchSendToEthClaimResponseAminoMsg): _58.MsgBatchSendToEthClaimResponse;
            fromProtoMsg(message: _58.MsgBatchSendToEthClaimResponseProtoMsg): _58.MsgBatchSendToEthClaimResponse;
            toProto(message: _58.MsgBatchSendToEthClaimResponse): Uint8Array;
            toProtoMsg(message: _58.MsgBatchSendToEthClaimResponse): _58.MsgBatchSendToEthClaimResponseProtoMsg;
        };
        MsgERC20DeployedClaim: {
            encode(message: _58.MsgERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgERC20DeployedClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                cosmosDenom?: string;
                tokenContract?: string;
                name?: string;
                symbol?: string;
                decimals?: string | number | import("long").Long;
                orchestrator?: string;
            }): _58.MsgERC20DeployedClaim;
            fromAmino(object: _58.MsgERC20DeployedClaimAmino): _58.MsgERC20DeployedClaim;
            toAmino(message: _58.MsgERC20DeployedClaim): _58.MsgERC20DeployedClaimAmino;
            fromAminoMsg(object: _58.MsgERC20DeployedClaimAminoMsg): _58.MsgERC20DeployedClaim;
            fromProtoMsg(message: _58.MsgERC20DeployedClaimProtoMsg): _58.MsgERC20DeployedClaim;
            toProto(message: _58.MsgERC20DeployedClaim): Uint8Array;
            toProtoMsg(message: _58.MsgERC20DeployedClaim): _58.MsgERC20DeployedClaimProtoMsg;
        };
        MsgERC20DeployedClaimResponse: {
            encode(_: _58.MsgERC20DeployedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgERC20DeployedClaimResponse;
            fromPartial(_: {}): _58.MsgERC20DeployedClaimResponse;
            fromAmino(_: _58.MsgERC20DeployedClaimResponseAmino): _58.MsgERC20DeployedClaimResponse;
            toAmino(_: _58.MsgERC20DeployedClaimResponse): _58.MsgERC20DeployedClaimResponseAmino;
            fromAminoMsg(object: _58.MsgERC20DeployedClaimResponseAminoMsg): _58.MsgERC20DeployedClaimResponse;
            fromProtoMsg(message: _58.MsgERC20DeployedClaimResponseProtoMsg): _58.MsgERC20DeployedClaimResponse;
            toProto(message: _58.MsgERC20DeployedClaimResponse): Uint8Array;
            toProtoMsg(message: _58.MsgERC20DeployedClaimResponse): _58.MsgERC20DeployedClaimResponseProtoMsg;
        };
        MsgLogicCallExecutedClaim: {
            encode(message: _58.MsgLogicCallExecutedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgLogicCallExecutedClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                invalidationId?: Uint8Array;
                invalidationNonce?: string | number | import("long").Long;
                orchestrator?: string;
            }): _58.MsgLogicCallExecutedClaim;
            fromAmino(object: _58.MsgLogicCallExecutedClaimAmino): _58.MsgLogicCallExecutedClaim;
            toAmino(message: _58.MsgLogicCallExecutedClaim): _58.MsgLogicCallExecutedClaimAmino;
            fromAminoMsg(object: _58.MsgLogicCallExecutedClaimAminoMsg): _58.MsgLogicCallExecutedClaim;
            fromProtoMsg(message: _58.MsgLogicCallExecutedClaimProtoMsg): _58.MsgLogicCallExecutedClaim;
            toProto(message: _58.MsgLogicCallExecutedClaim): Uint8Array;
            toProtoMsg(message: _58.MsgLogicCallExecutedClaim): _58.MsgLogicCallExecutedClaimProtoMsg;
        };
        MsgLogicCallExecutedClaimResponse: {
            encode(_: _58.MsgLogicCallExecutedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgLogicCallExecutedClaimResponse;
            fromPartial(_: {}): _58.MsgLogicCallExecutedClaimResponse;
            fromAmino(_: _58.MsgLogicCallExecutedClaimResponseAmino): _58.MsgLogicCallExecutedClaimResponse;
            toAmino(_: _58.MsgLogicCallExecutedClaimResponse): _58.MsgLogicCallExecutedClaimResponseAmino;
            fromAminoMsg(object: _58.MsgLogicCallExecutedClaimResponseAminoMsg): _58.MsgLogicCallExecutedClaimResponse;
            fromProtoMsg(message: _58.MsgLogicCallExecutedClaimResponseProtoMsg): _58.MsgLogicCallExecutedClaimResponse;
            toProto(message: _58.MsgLogicCallExecutedClaimResponse): Uint8Array;
            toProtoMsg(message: _58.MsgLogicCallExecutedClaimResponse): _58.MsgLogicCallExecutedClaimResponseProtoMsg;
        };
        MsgValsetUpdatedClaim: {
            encode(message: _58.MsgValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgValsetUpdatedClaim;
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
            }): _58.MsgValsetUpdatedClaim;
            fromAmino(object: _58.MsgValsetUpdatedClaimAmino): _58.MsgValsetUpdatedClaim;
            toAmino(message: _58.MsgValsetUpdatedClaim): _58.MsgValsetUpdatedClaimAmino;
            fromAminoMsg(object: _58.MsgValsetUpdatedClaimAminoMsg): _58.MsgValsetUpdatedClaim;
            fromProtoMsg(message: _58.MsgValsetUpdatedClaimProtoMsg): _58.MsgValsetUpdatedClaim;
            toProto(message: _58.MsgValsetUpdatedClaim): Uint8Array;
            toProtoMsg(message: _58.MsgValsetUpdatedClaim): _58.MsgValsetUpdatedClaimProtoMsg;
        };
        MsgValsetUpdatedClaimResponse: {
            encode(_: _58.MsgValsetUpdatedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgValsetUpdatedClaimResponse;
            fromPartial(_: {}): _58.MsgValsetUpdatedClaimResponse;
            fromAmino(_: _58.MsgValsetUpdatedClaimResponseAmino): _58.MsgValsetUpdatedClaimResponse;
            toAmino(_: _58.MsgValsetUpdatedClaimResponse): _58.MsgValsetUpdatedClaimResponseAmino;
            fromAminoMsg(object: _58.MsgValsetUpdatedClaimResponseAminoMsg): _58.MsgValsetUpdatedClaimResponse;
            fromProtoMsg(message: _58.MsgValsetUpdatedClaimResponseProtoMsg): _58.MsgValsetUpdatedClaimResponse;
            toProto(message: _58.MsgValsetUpdatedClaimResponse): Uint8Array;
            toProtoMsg(message: _58.MsgValsetUpdatedClaimResponse): _58.MsgValsetUpdatedClaimResponseProtoMsg;
        };
        MsgCancelSendToEth: {
            encode(message: _58.MsgCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgCancelSendToEth;
            fromPartial(object: {
                transactionId?: string | number | import("long").Long;
                sender?: string;
            }): _58.MsgCancelSendToEth;
            fromAmino(object: _58.MsgCancelSendToEthAmino): _58.MsgCancelSendToEth;
            toAmino(message: _58.MsgCancelSendToEth): _58.MsgCancelSendToEthAmino;
            fromAminoMsg(object: _58.MsgCancelSendToEthAminoMsg): _58.MsgCancelSendToEth;
            fromProtoMsg(message: _58.MsgCancelSendToEthProtoMsg): _58.MsgCancelSendToEth;
            toProto(message: _58.MsgCancelSendToEth): Uint8Array;
            toProtoMsg(message: _58.MsgCancelSendToEth): _58.MsgCancelSendToEthProtoMsg;
        };
        MsgCancelSendToEthResponse: {
            encode(_: _58.MsgCancelSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgCancelSendToEthResponse;
            fromPartial(_: {}): _58.MsgCancelSendToEthResponse;
            fromAmino(_: _58.MsgCancelSendToEthResponseAmino): _58.MsgCancelSendToEthResponse;
            toAmino(_: _58.MsgCancelSendToEthResponse): _58.MsgCancelSendToEthResponseAmino;
            fromAminoMsg(object: _58.MsgCancelSendToEthResponseAminoMsg): _58.MsgCancelSendToEthResponse;
            fromProtoMsg(message: _58.MsgCancelSendToEthResponseProtoMsg): _58.MsgCancelSendToEthResponse;
            toProto(message: _58.MsgCancelSendToEthResponse): Uint8Array;
            toProtoMsg(message: _58.MsgCancelSendToEthResponse): _58.MsgCancelSendToEthResponseProtoMsg;
        };
        MsgSubmitBadSignatureEvidence: {
            encode(message: _58.MsgSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitBadSignatureEvidence;
            fromPartial(object: {
                subject?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                signature?: string;
                sender?: string;
            }): _58.MsgSubmitBadSignatureEvidence;
            fromAmino(object: _58.MsgSubmitBadSignatureEvidenceAmino): _58.MsgSubmitBadSignatureEvidence;
            toAmino(message: _58.MsgSubmitBadSignatureEvidence): _58.MsgSubmitBadSignatureEvidenceAmino;
            fromAminoMsg(object: _58.MsgSubmitBadSignatureEvidenceAminoMsg): _58.MsgSubmitBadSignatureEvidence;
            fromProtoMsg(message: _58.MsgSubmitBadSignatureEvidenceProtoMsg): _58.MsgSubmitBadSignatureEvidence;
            toProto(message: _58.MsgSubmitBadSignatureEvidence): Uint8Array;
            toProtoMsg(message: _58.MsgSubmitBadSignatureEvidence): _58.MsgSubmitBadSignatureEvidenceProtoMsg;
        };
        MsgSubmitBadSignatureEvidenceResponse: {
            encode(_: _58.MsgSubmitBadSignatureEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgSubmitBadSignatureEvidenceResponse;
            fromPartial(_: {}): _58.MsgSubmitBadSignatureEvidenceResponse;
            fromAmino(_: _58.MsgSubmitBadSignatureEvidenceResponseAmino): _58.MsgSubmitBadSignatureEvidenceResponse;
            toAmino(_: _58.MsgSubmitBadSignatureEvidenceResponse): _58.MsgSubmitBadSignatureEvidenceResponseAmino;
            fromAminoMsg(object: _58.MsgSubmitBadSignatureEvidenceResponseAminoMsg): _58.MsgSubmitBadSignatureEvidenceResponse;
            fromProtoMsg(message: _58.MsgSubmitBadSignatureEvidenceResponseProtoMsg): _58.MsgSubmitBadSignatureEvidenceResponse;
            toProto(message: _58.MsgSubmitBadSignatureEvidenceResponse): Uint8Array;
            toProtoMsg(message: _58.MsgSubmitBadSignatureEvidenceResponse): _58.MsgSubmitBadSignatureEvidenceResponseProtoMsg;
        };
        Params: {
            encode(message: _57.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Params;
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
            }): _57.Params;
            fromAmino(object: _57.ParamsAmino): _57.Params;
            toAmino(message: _57.Params): _57.ParamsAmino;
            fromAminoMsg(object: _57.ParamsAminoMsg): _57.Params;
            fromProtoMsg(message: _57.ParamsProtoMsg): _57.Params;
            toProto(message: _57.Params): Uint8Array;
            toProtoMsg(message: _57.Params): _57.ParamsProtoMsg;
        };
        GenesisState: {
            encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GenesisState;
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
            }): _57.GenesisState;
            fromAmino(object: _57.GenesisStateAmino): _57.GenesisState;
            toAmino(message: _57.GenesisState): _57.GenesisStateAmino;
            fromAminoMsg(object: _57.GenesisStateAminoMsg): _57.GenesisState;
            fromProtoMsg(message: _57.GenesisStateProtoMsg): _57.GenesisState;
            toProto(message: _57.GenesisState): Uint8Array;
            toProtoMsg(message: _57.GenesisState): _57.GenesisStateProtoMsg;
        };
        GravityNonces: {
            encode(message: _57.GravityNonces, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GravityNonces;
            fromPartial(object: {
                latestValsetNonce?: string | number | import("long").Long;
                lastObservedNonce?: string | number | import("long").Long;
                lastSlashedValsetNonce?: string | number | import("long").Long;
                lastSlashedBatchBlock?: string | number | import("long").Long;
                lastSlashedLogicCallBlock?: string | number | import("long").Long;
                lastTxPoolId?: string | number | import("long").Long;
                lastBatchId?: string | number | import("long").Long;
            }): _57.GravityNonces;
            fromAmino(object: _57.GravityNoncesAmino): _57.GravityNonces;
            toAmino(message: _57.GravityNonces): _57.GravityNoncesAmino;
            fromAminoMsg(object: _57.GravityNoncesAminoMsg): _57.GravityNonces;
            fromProtoMsg(message: _57.GravityNoncesProtoMsg): _57.GravityNonces;
            toProto(message: _57.GravityNonces): Uint8Array;
            toProtoMsg(message: _57.GravityNonces): _57.GravityNoncesProtoMsg;
        };
        signTypeFromJSON(object: any): _56.SignType;
        signTypeToJSON(object: _56.SignType): string;
        SignType: typeof _56.SignType;
        SignTypeSDKType: typeof _56.SignType;
        SignTypeAmino: typeof _56.SignType;
        OutgoingTxBatch: {
            encode(message: _55.OutgoingTxBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.OutgoingTxBatch;
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
            }): _55.OutgoingTxBatch;
            fromAmino(object: _55.OutgoingTxBatchAmino): _55.OutgoingTxBatch;
            toAmino(message: _55.OutgoingTxBatch): _55.OutgoingTxBatchAmino;
            fromAminoMsg(object: _55.OutgoingTxBatchAminoMsg): _55.OutgoingTxBatch;
            fromProtoMsg(message: _55.OutgoingTxBatchProtoMsg): _55.OutgoingTxBatch;
            toProto(message: _55.OutgoingTxBatch): Uint8Array;
            toProtoMsg(message: _55.OutgoingTxBatch): _55.OutgoingTxBatchProtoMsg;
        };
        OutgoingTransferTx: {
            encode(message: _55.OutgoingTransferTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.OutgoingTransferTx;
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
            }): _55.OutgoingTransferTx;
            fromAmino(object: _55.OutgoingTransferTxAmino): _55.OutgoingTransferTx;
            toAmino(message: _55.OutgoingTransferTx): _55.OutgoingTransferTxAmino;
            fromAminoMsg(object: _55.OutgoingTransferTxAminoMsg): _55.OutgoingTransferTx;
            fromProtoMsg(message: _55.OutgoingTransferTxProtoMsg): _55.OutgoingTransferTx;
            toProto(message: _55.OutgoingTransferTx): Uint8Array;
            toProtoMsg(message: _55.OutgoingTransferTx): _55.OutgoingTransferTxProtoMsg;
        };
        OutgoingLogicCall: {
            encode(message: _55.OutgoingLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.OutgoingLogicCall;
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
            }): _55.OutgoingLogicCall;
            fromAmino(object: _55.OutgoingLogicCallAmino): _55.OutgoingLogicCall;
            toAmino(message: _55.OutgoingLogicCall): _55.OutgoingLogicCallAmino;
            fromAminoMsg(object: _55.OutgoingLogicCallAminoMsg): _55.OutgoingLogicCall;
            fromProtoMsg(message: _55.OutgoingLogicCallProtoMsg): _55.OutgoingLogicCall;
            toProto(message: _55.OutgoingLogicCall): Uint8Array;
            toProtoMsg(message: _55.OutgoingLogicCall): _55.OutgoingLogicCallProtoMsg;
        };
        claimTypeFromJSON(object: any): _54.ClaimType;
        claimTypeToJSON(object: _54.ClaimType): string;
        ClaimType: typeof _54.ClaimType;
        ClaimTypeSDKType: typeof _54.ClaimType;
        ClaimTypeAmino: typeof _54.ClaimType;
        Attestation: {
            encode(message: _54.Attestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Attestation;
            fromPartial(object: {
                observed?: boolean;
                votes?: string[];
                height?: string | number | import("long").Long;
                claim?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }): _54.Attestation;
            fromAmino(object: _54.AttestationAmino): _54.Attestation;
            toAmino(message: _54.Attestation): _54.AttestationAmino;
            fromAminoMsg(object: _54.AttestationAminoMsg): _54.Attestation;
            fromProtoMsg(message: _54.AttestationProtoMsg): _54.Attestation;
            toProto(message: _54.Attestation): Uint8Array;
            toProtoMsg(message: _54.Attestation): _54.AttestationProtoMsg;
        };
        ERC20Token: {
            encode(message: _54.ERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ERC20Token;
            fromPartial(object: {
                contract?: string;
                amount?: string;
            }): _54.ERC20Token;
            fromAmino(object: _54.ERC20TokenAmino): _54.ERC20Token;
            toAmino(message: _54.ERC20Token): _54.ERC20TokenAmino;
            fromAminoMsg(object: _54.ERC20TokenAminoMsg): _54.ERC20Token;
            fromProtoMsg(message: _54.ERC20TokenProtoMsg): _54.ERC20Token;
            toProto(message: _54.ERC20Token): Uint8Array;
            toProtoMsg(message: _54.ERC20Token): _54.ERC20TokenProtoMsg;
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
                v1: _114.MsgClientImpl;
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
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
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
                    params(request?: _60.QueryParamsRequest): Promise<_60.QueryParamsResponse>;
                    currentValset(request?: _60.QueryCurrentValsetRequest): Promise<_60.QueryCurrentValsetResponse>;
                    valsetRequest(request: _60.QueryValsetRequestRequest): Promise<_60.QueryValsetRequestResponse>;
                    valsetConfirm(request: _60.QueryValsetConfirmRequest): Promise<_60.QueryValsetConfirmResponse>;
                    valsetConfirmsByNonce(request: _60.QueryValsetConfirmsByNonceRequest): Promise<_60.QueryValsetConfirmsByNonceResponse>;
                    lastValsetRequests(request?: _60.QueryLastValsetRequestsRequest): Promise<_60.QueryLastValsetRequestsResponse>;
                    lastPendingValsetRequestByAddr(request: _60.QueryLastPendingValsetRequestByAddrRequest): Promise<_60.QueryLastPendingValsetRequestByAddrResponse>;
                    lastPendingBatchRequestByAddr(request: _60.QueryLastPendingBatchRequestByAddrRequest): Promise<_60.QueryLastPendingBatchRequestByAddrResponse>;
                    lastPendingLogicCallByAddr(request: _60.QueryLastPendingLogicCallByAddrRequest): Promise<_60.QueryLastPendingLogicCallByAddrResponse>;
                    lastEventNonceByAddr(request: _60.QueryLastEventNonceByAddrRequest): Promise<_60.QueryLastEventNonceByAddrResponse>;
                    batchFees(request?: _60.QueryBatchFeeRequest): Promise<_60.QueryBatchFeeResponse>;
                    outgoingTxBatches(request?: _60.QueryOutgoingTxBatchesRequest): Promise<_60.QueryOutgoingTxBatchesResponse>;
                    outgoingLogicCalls(request?: _60.QueryOutgoingLogicCallsRequest): Promise<_60.QueryOutgoingLogicCallsResponse>;
                    batchRequestByNonce(request: _60.QueryBatchRequestByNonceRequest): Promise<_60.QueryBatchRequestByNonceResponse>;
                    batchConfirms(request: _60.QueryBatchConfirmsRequest): Promise<_60.QueryBatchConfirmsResponse>;
                    logicConfirms(request: _60.QueryLogicConfirmsRequest): Promise<_60.QueryLogicConfirmsResponse>;
                    eRC20ToDenom(request: _60.QueryERC20ToDenomRequest): Promise<_60.QueryERC20ToDenomResponse>;
                    denomToERC20(request: _60.QueryDenomToERC20Request): Promise<_60.QueryDenomToERC20Response>;
                    getAttestations(request: _60.QueryAttestationsRequest): Promise<_60.QueryAttestationsResponse>;
                    getDelegateKeyByValidator(request: _60.QueryDelegateKeysByValidatorAddress): Promise<_60.QueryDelegateKeysByValidatorAddressResponse>;
                    getDelegateKeyByEth(request: _60.QueryDelegateKeysByEthAddress): Promise<_60.QueryDelegateKeysByEthAddressResponse>;
                    getDelegateKeyByOrchestrator(request: _60.QueryDelegateKeysByOrchestratorAddress): Promise<_60.QueryDelegateKeysByOrchestratorAddressResponse>;
                    getPendingSendToEth(request: _60.QueryPendingSendToEth): Promise<_60.QueryPendingSendToEthResponse>;
                };
            };
        }>;
    };
}
