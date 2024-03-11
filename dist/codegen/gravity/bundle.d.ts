/// <reference types="long" />
import * as _56 from "./v1/attestation";
import * as _57 from "./v1/batch";
import * as _58 from "./v1/ethereum_signer";
import * as _59 from "./v1/genesis";
import * as _60 from "./v1/msgs";
import * as _61 from "./v1/pool";
import * as _62 from "./v1/query";
import * as _63 from "./v1/types";
import * as _144 from "./v1/query.rpc.Query";
import * as _145 from "./v1/msgs.rpc.msg";
export declare namespace gravity {
    const v1: {
        MsgClientImpl: typeof _145.MsgClientImpl;
        QueryClientImpl: typeof _144.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
            currentValset(request?: _62.QueryCurrentValsetRequest): Promise<_62.QueryCurrentValsetResponse>;
            valsetRequest(request: _62.QueryValsetRequestRequest): Promise<_62.QueryValsetRequestResponse>;
            valsetConfirm(request: _62.QueryValsetConfirmRequest): Promise<_62.QueryValsetConfirmResponse>;
            valsetConfirmsByNonce(request: _62.QueryValsetConfirmsByNonceRequest): Promise<_62.QueryValsetConfirmsByNonceResponse>;
            lastValsetRequests(request?: _62.QueryLastValsetRequestsRequest): Promise<_62.QueryLastValsetRequestsResponse>;
            lastPendingValsetRequestByAddr(request: _62.QueryLastPendingValsetRequestByAddrRequest): Promise<_62.QueryLastPendingValsetRequestByAddrResponse>;
            lastPendingBatchRequestByAddr(request: _62.QueryLastPendingBatchRequestByAddrRequest): Promise<_62.QueryLastPendingBatchRequestByAddrResponse>;
            lastPendingLogicCallByAddr(request: _62.QueryLastPendingLogicCallByAddrRequest): Promise<_62.QueryLastPendingLogicCallByAddrResponse>;
            lastEventNonceByAddr(request: _62.QueryLastEventNonceByAddrRequest): Promise<_62.QueryLastEventNonceByAddrResponse>;
            batchFees(request?: _62.QueryBatchFeeRequest): Promise<_62.QueryBatchFeeResponse>;
            outgoingTxBatches(request?: _62.QueryOutgoingTxBatchesRequest): Promise<_62.QueryOutgoingTxBatchesResponse>;
            outgoingLogicCalls(request?: _62.QueryOutgoingLogicCallsRequest): Promise<_62.QueryOutgoingLogicCallsResponse>;
            batchRequestByNonce(request: _62.QueryBatchRequestByNonceRequest): Promise<_62.QueryBatchRequestByNonceResponse>;
            batchConfirms(request: _62.QueryBatchConfirmsRequest): Promise<_62.QueryBatchConfirmsResponse>;
            logicConfirms(request: _62.QueryLogicConfirmsRequest): Promise<_62.QueryLogicConfirmsResponse>;
            eRC20ToDenom(request: _62.QueryERC20ToDenomRequest): Promise<_62.QueryERC20ToDenomResponse>;
            denomToERC20(request: _62.QueryDenomToERC20Request): Promise<_62.QueryDenomToERC20Response>;
            getAttestations(request: _62.QueryAttestationsRequest): Promise<_62.QueryAttestationsResponse>;
            getDelegateKeyByValidator(request: _62.QueryDelegateKeysByValidatorAddress): Promise<_62.QueryDelegateKeysByValidatorAddressResponse>;
            getDelegateKeyByEth(request: _62.QueryDelegateKeysByEthAddress): Promise<_62.QueryDelegateKeysByEthAddressResponse>;
            getDelegateKeyByOrchestrator(request: _62.QueryDelegateKeysByOrchestratorAddress): Promise<_62.QueryDelegateKeysByOrchestratorAddressResponse>;
            getPendingSendToEth(request: _62.QueryPendingSendToEth): Promise<_62.QueryPendingSendToEthResponse>;
        };
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                valsetConfirm(value: _60.MsgValsetConfirm): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToEth(value: _60.MsgSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                requestBatch(value: _60.MsgRequestBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmBatch(value: _60.MsgConfirmBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                confirmLogicCall(value: _60.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                sendToCosmosClaim(value: _60.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                batchSendToEthClaim(value: _60.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                valsetUpdateClaim(value: _60.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                eRC20DeployedClaim(value: _60.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                logicCallExecutedClaim(value: _60.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                setOrchestratorAddress(value: _60.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                cancelSendToEth(value: _60.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                submitBadSignatureEvidence(value: _60.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                valsetConfirm(value: _60.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _60.MsgValsetConfirm;
                };
                sendToEth(value: _60.MsgSendToEth): {
                    typeUrl: string;
                    value: _60.MsgSendToEth;
                };
                requestBatch(value: _60.MsgRequestBatch): {
                    typeUrl: string;
                    value: _60.MsgRequestBatch;
                };
                confirmBatch(value: _60.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _60.MsgConfirmBatch;
                };
                confirmLogicCall(value: _60.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _60.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _60.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _60.MsgSendToCosmosClaim;
                };
                batchSendToEthClaim(value: _60.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _60.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _60.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _60.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _60.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _60.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _60.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _60.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _60.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _60.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _60.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _60.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _60.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _60.MsgSubmitBadSignatureEvidence;
                };
            };
            fromPartial: {
                valsetConfirm(value: _60.MsgValsetConfirm): {
                    typeUrl: string;
                    value: _60.MsgValsetConfirm;
                };
                sendToEth(value: _60.MsgSendToEth): {
                    typeUrl: string;
                    value: _60.MsgSendToEth;
                };
                requestBatch(value: _60.MsgRequestBatch): {
                    typeUrl: string;
                    value: _60.MsgRequestBatch;
                };
                confirmBatch(value: _60.MsgConfirmBatch): {
                    typeUrl: string;
                    value: _60.MsgConfirmBatch;
                };
                confirmLogicCall(value: _60.MsgConfirmLogicCall): {
                    typeUrl: string;
                    value: _60.MsgConfirmLogicCall;
                };
                sendToCosmosClaim(value: _60.MsgSendToCosmosClaim): {
                    typeUrl: string;
                    value: _60.MsgSendToCosmosClaim;
                };
                batchSendToEthClaim(value: _60.MsgBatchSendToEthClaim): {
                    typeUrl: string;
                    value: _60.MsgBatchSendToEthClaim;
                };
                valsetUpdateClaim(value: _60.MsgValsetUpdatedClaim): {
                    typeUrl: string;
                    value: _60.MsgValsetUpdatedClaim;
                };
                eRC20DeployedClaim(value: _60.MsgERC20DeployedClaim): {
                    typeUrl: string;
                    value: _60.MsgERC20DeployedClaim;
                };
                logicCallExecutedClaim(value: _60.MsgLogicCallExecutedClaim): {
                    typeUrl: string;
                    value: _60.MsgLogicCallExecutedClaim;
                };
                setOrchestratorAddress(value: _60.MsgSetOrchestratorAddress): {
                    typeUrl: string;
                    value: _60.MsgSetOrchestratorAddress;
                };
                cancelSendToEth(value: _60.MsgCancelSendToEth): {
                    typeUrl: string;
                    value: _60.MsgCancelSendToEth;
                };
                submitBadSignatureEvidence(value: _60.MsgSubmitBadSignatureEvidence): {
                    typeUrl: string;
                    value: _60.MsgSubmitBadSignatureEvidence;
                };
            };
        };
        AminoConverter: {
            "/gravity.v1.MsgValsetConfirm": {
                aminoType: string;
                toAmino: (message: _60.MsgValsetConfirm) => _60.MsgValsetConfirmAmino;
                fromAmino: (object: _60.MsgValsetConfirmAmino) => _60.MsgValsetConfirm;
            };
            "/gravity.v1.MsgSendToEth": {
                aminoType: string;
                toAmino: (message: _60.MsgSendToEth) => _60.MsgSendToEthAmino;
                fromAmino: (object: _60.MsgSendToEthAmino) => _60.MsgSendToEth;
            };
            "/gravity.v1.MsgRequestBatch": {
                aminoType: string;
                toAmino: (message: _60.MsgRequestBatch) => _60.MsgRequestBatchAmino;
                fromAmino: (object: _60.MsgRequestBatchAmino) => _60.MsgRequestBatch;
            };
            "/gravity.v1.MsgConfirmBatch": {
                aminoType: string;
                toAmino: (message: _60.MsgConfirmBatch) => _60.MsgConfirmBatchAmino;
                fromAmino: (object: _60.MsgConfirmBatchAmino) => _60.MsgConfirmBatch;
            };
            "/gravity.v1.MsgConfirmLogicCall": {
                aminoType: string;
                toAmino: (message: _60.MsgConfirmLogicCall) => _60.MsgConfirmLogicCallAmino;
                fromAmino: (object: _60.MsgConfirmLogicCallAmino) => _60.MsgConfirmLogicCall;
            };
            "/gravity.v1.MsgSendToCosmosClaim": {
                aminoType: string;
                toAmino: (message: _60.MsgSendToCosmosClaim) => _60.MsgSendToCosmosClaimAmino;
                fromAmino: (object: _60.MsgSendToCosmosClaimAmino) => _60.MsgSendToCosmosClaim;
            };
            "/gravity.v1.MsgBatchSendToEthClaim": {
                aminoType: string;
                toAmino: (message: _60.MsgBatchSendToEthClaim) => _60.MsgBatchSendToEthClaimAmino;
                fromAmino: (object: _60.MsgBatchSendToEthClaimAmino) => _60.MsgBatchSendToEthClaim;
            };
            "/gravity.v1.MsgValsetUpdatedClaim": {
                aminoType: string;
                toAmino: (message: _60.MsgValsetUpdatedClaim) => _60.MsgValsetUpdatedClaimAmino;
                fromAmino: (object: _60.MsgValsetUpdatedClaimAmino) => _60.MsgValsetUpdatedClaim;
            };
            "/gravity.v1.MsgERC20DeployedClaim": {
                aminoType: string;
                toAmino: (message: _60.MsgERC20DeployedClaim) => _60.MsgERC20DeployedClaimAmino;
                fromAmino: (object: _60.MsgERC20DeployedClaimAmino) => _60.MsgERC20DeployedClaim;
            };
            "/gravity.v1.MsgLogicCallExecutedClaim": {
                aminoType: string;
                toAmino: (message: _60.MsgLogicCallExecutedClaim) => _60.MsgLogicCallExecutedClaimAmino;
                fromAmino: (object: _60.MsgLogicCallExecutedClaimAmino) => _60.MsgLogicCallExecutedClaim;
            };
            "/gravity.v1.MsgSetOrchestratorAddress": {
                aminoType: string;
                toAmino: (message: _60.MsgSetOrchestratorAddress) => _60.MsgSetOrchestratorAddressAmino;
                fromAmino: (object: _60.MsgSetOrchestratorAddressAmino) => _60.MsgSetOrchestratorAddress;
            };
            "/gravity.v1.MsgCancelSendToEth": {
                aminoType: string;
                toAmino: (message: _60.MsgCancelSendToEth) => _60.MsgCancelSendToEthAmino;
                fromAmino: (object: _60.MsgCancelSendToEthAmino) => _60.MsgCancelSendToEth;
            };
            "/gravity.v1.MsgSubmitBadSignatureEvidence": {
                aminoType: string;
                toAmino: (message: _60.MsgSubmitBadSignatureEvidence) => _60.MsgSubmitBadSignatureEvidenceAmino;
                fromAmino: (object: _60.MsgSubmitBadSignatureEvidenceAmino) => _60.MsgSubmitBadSignatureEvidence;
            };
        };
        BridgeValidator: {
            encode(message: _63.BridgeValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.BridgeValidator;
            fromPartial(object: {
                power?: string | number | import("long").Long;
                ethereumAddress?: string;
            }): _63.BridgeValidator;
            fromAmino(object: _63.BridgeValidatorAmino): _63.BridgeValidator;
            toAmino(message: _63.BridgeValidator): _63.BridgeValidatorAmino;
            fromAminoMsg(object: _63.BridgeValidatorAminoMsg): _63.BridgeValidator;
            fromProtoMsg(message: _63.BridgeValidatorProtoMsg): _63.BridgeValidator;
            toProto(message: _63.BridgeValidator): Uint8Array;
            toProtoMsg(message: _63.BridgeValidator): _63.BridgeValidatorProtoMsg;
        };
        Valset: {
            encode(message: _63.Valset, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Valset;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                members?: {
                    power?: string | number | import("long").Long;
                    ethereumAddress?: string;
                }[];
                height?: string | number | import("long").Long;
                rewardAmount?: string;
                rewardToken?: string;
            }): _63.Valset;
            fromAmino(object: _63.ValsetAmino): _63.Valset;
            toAmino(message: _63.Valset): _63.ValsetAmino;
            fromAminoMsg(object: _63.ValsetAminoMsg): _63.Valset;
            fromProtoMsg(message: _63.ValsetProtoMsg): _63.Valset;
            toProto(message: _63.Valset): Uint8Array;
            toProtoMsg(message: _63.Valset): _63.ValsetProtoMsg;
        };
        LastObservedEthereumBlockHeight: {
            encode(message: _63.LastObservedEthereumBlockHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.LastObservedEthereumBlockHeight;
            fromPartial(object: {
                cosmosBlockHeight?: string | number | import("long").Long;
                ethereumBlockHeight?: string | number | import("long").Long;
            }): _63.LastObservedEthereumBlockHeight;
            fromAmino(object: _63.LastObservedEthereumBlockHeightAmino): _63.LastObservedEthereumBlockHeight;
            toAmino(message: _63.LastObservedEthereumBlockHeight): _63.LastObservedEthereumBlockHeightAmino;
            fromAminoMsg(object: _63.LastObservedEthereumBlockHeightAminoMsg): _63.LastObservedEthereumBlockHeight;
            fromProtoMsg(message: _63.LastObservedEthereumBlockHeightProtoMsg): _63.LastObservedEthereumBlockHeight;
            toProto(message: _63.LastObservedEthereumBlockHeight): Uint8Array;
            toProtoMsg(message: _63.LastObservedEthereumBlockHeight): _63.LastObservedEthereumBlockHeightProtoMsg;
        };
        ERC20ToDenom: {
            encode(message: _63.ERC20ToDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ERC20ToDenom;
            fromPartial(object: {
                erc20?: string;
                denom?: string;
            }): _63.ERC20ToDenom;
            fromAmino(object: _63.ERC20ToDenomAmino): _63.ERC20ToDenom;
            toAmino(message: _63.ERC20ToDenom): _63.ERC20ToDenomAmino;
            fromAminoMsg(object: _63.ERC20ToDenomAminoMsg): _63.ERC20ToDenom;
            fromProtoMsg(message: _63.ERC20ToDenomProtoMsg): _63.ERC20ToDenom;
            toProto(message: _63.ERC20ToDenom): Uint8Array;
            toProtoMsg(message: _63.ERC20ToDenom): _63.ERC20ToDenomProtoMsg;
        };
        UnhaltBridgeProposal: {
            encode(message: _63.UnhaltBridgeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.UnhaltBridgeProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                targetNonce?: string | number | import("long").Long;
            }): _63.UnhaltBridgeProposal;
            fromAmino(object: _63.UnhaltBridgeProposalAmino): _63.UnhaltBridgeProposal;
            toAmino(message: _63.UnhaltBridgeProposal): _63.UnhaltBridgeProposalAmino;
            fromAminoMsg(object: _63.UnhaltBridgeProposalAminoMsg): _63.UnhaltBridgeProposal;
            fromProtoMsg(message: _63.UnhaltBridgeProposalProtoMsg): _63.UnhaltBridgeProposal;
            toProto(message: _63.UnhaltBridgeProposal): Uint8Array;
            toProtoMsg(message: _63.UnhaltBridgeProposal): _63.UnhaltBridgeProposalProtoMsg;
        };
        AirdropProposal: {
            encode(message: _63.AirdropProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.AirdropProposal;
            fromPartial(object: {
                title?: string;
                description?: string;
                denom?: string;
                recipients?: Uint8Array;
                amounts?: (string | number | import("long").Long)[];
            }): _63.AirdropProposal;
            fromAmino(object: _63.AirdropProposalAmino): _63.AirdropProposal;
            toAmino(message: _63.AirdropProposal): _63.AirdropProposalAmino;
            fromAminoMsg(object: _63.AirdropProposalAminoMsg): _63.AirdropProposal;
            fromProtoMsg(message: _63.AirdropProposalProtoMsg): _63.AirdropProposal;
            toProto(message: _63.AirdropProposal): Uint8Array;
            toProtoMsg(message: _63.AirdropProposal): _63.AirdropProposalProtoMsg;
        };
        IBCMetadataProposal: {
            encode(message: _63.IBCMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.IBCMetadataProposal;
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
            }): _63.IBCMetadataProposal;
            fromAmino(object: _63.IBCMetadataProposalAmino): _63.IBCMetadataProposal;
            toAmino(message: _63.IBCMetadataProposal): _63.IBCMetadataProposalAmino;
            fromAminoMsg(object: _63.IBCMetadataProposalAminoMsg): _63.IBCMetadataProposal;
            fromProtoMsg(message: _63.IBCMetadataProposalProtoMsg): _63.IBCMetadataProposal;
            toProto(message: _63.IBCMetadataProposal): Uint8Array;
            toProtoMsg(message: _63.IBCMetadataProposal): _63.IBCMetadataProposalProtoMsg;
        };
        QueryParamsRequest: {
            encode(_: _62.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryParamsRequest;
            fromPartial(_: {}): _62.QueryParamsRequest;
            fromAmino(_: _62.QueryParamsRequestAmino): _62.QueryParamsRequest;
            toAmino(_: _62.QueryParamsRequest): _62.QueryParamsRequestAmino;
            fromAminoMsg(object: _62.QueryParamsRequestAminoMsg): _62.QueryParamsRequest;
            fromProtoMsg(message: _62.QueryParamsRequestProtoMsg): _62.QueryParamsRequest;
            toProto(message: _62.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _62.QueryParamsRequest): _62.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            encode(message: _62.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryParamsResponse;
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
            }): _62.QueryParamsResponse;
            fromAmino(object: _62.QueryParamsResponseAmino): _62.QueryParamsResponse;
            toAmino(message: _62.QueryParamsResponse): _62.QueryParamsResponseAmino;
            fromAminoMsg(object: _62.QueryParamsResponseAminoMsg): _62.QueryParamsResponse;
            fromProtoMsg(message: _62.QueryParamsResponseProtoMsg): _62.QueryParamsResponse;
            toProto(message: _62.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _62.QueryParamsResponse): _62.QueryParamsResponseProtoMsg;
        };
        QueryCurrentValsetRequest: {
            encode(_: _62.QueryCurrentValsetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryCurrentValsetRequest;
            fromPartial(_: {}): _62.QueryCurrentValsetRequest;
            fromAmino(_: _62.QueryCurrentValsetRequestAmino): _62.QueryCurrentValsetRequest;
            toAmino(_: _62.QueryCurrentValsetRequest): _62.QueryCurrentValsetRequestAmino;
            fromAminoMsg(object: _62.QueryCurrentValsetRequestAminoMsg): _62.QueryCurrentValsetRequest;
            fromProtoMsg(message: _62.QueryCurrentValsetRequestProtoMsg): _62.QueryCurrentValsetRequest;
            toProto(message: _62.QueryCurrentValsetRequest): Uint8Array;
            toProtoMsg(message: _62.QueryCurrentValsetRequest): _62.QueryCurrentValsetRequestProtoMsg;
        };
        QueryCurrentValsetResponse: {
            encode(message: _62.QueryCurrentValsetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryCurrentValsetResponse;
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
            }): _62.QueryCurrentValsetResponse;
            fromAmino(object: _62.QueryCurrentValsetResponseAmino): _62.QueryCurrentValsetResponse;
            toAmino(message: _62.QueryCurrentValsetResponse): _62.QueryCurrentValsetResponseAmino;
            fromAminoMsg(object: _62.QueryCurrentValsetResponseAminoMsg): _62.QueryCurrentValsetResponse;
            fromProtoMsg(message: _62.QueryCurrentValsetResponseProtoMsg): _62.QueryCurrentValsetResponse;
            toProto(message: _62.QueryCurrentValsetResponse): Uint8Array;
            toProtoMsg(message: _62.QueryCurrentValsetResponse): _62.QueryCurrentValsetResponseProtoMsg;
        };
        QueryValsetRequestRequest: {
            encode(message: _62.QueryValsetRequestRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValsetRequestRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
            }): _62.QueryValsetRequestRequest;
            fromAmino(object: _62.QueryValsetRequestRequestAmino): _62.QueryValsetRequestRequest;
            toAmino(message: _62.QueryValsetRequestRequest): _62.QueryValsetRequestRequestAmino;
            fromAminoMsg(object: _62.QueryValsetRequestRequestAminoMsg): _62.QueryValsetRequestRequest;
            fromProtoMsg(message: _62.QueryValsetRequestRequestProtoMsg): _62.QueryValsetRequestRequest;
            toProto(message: _62.QueryValsetRequestRequest): Uint8Array;
            toProtoMsg(message: _62.QueryValsetRequestRequest): _62.QueryValsetRequestRequestProtoMsg;
        };
        QueryValsetRequestResponse: {
            encode(message: _62.QueryValsetRequestResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValsetRequestResponse;
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
            }): _62.QueryValsetRequestResponse;
            fromAmino(object: _62.QueryValsetRequestResponseAmino): _62.QueryValsetRequestResponse;
            toAmino(message: _62.QueryValsetRequestResponse): _62.QueryValsetRequestResponseAmino;
            fromAminoMsg(object: _62.QueryValsetRequestResponseAminoMsg): _62.QueryValsetRequestResponse;
            fromProtoMsg(message: _62.QueryValsetRequestResponseProtoMsg): _62.QueryValsetRequestResponse;
            toProto(message: _62.QueryValsetRequestResponse): Uint8Array;
            toProtoMsg(message: _62.QueryValsetRequestResponse): _62.QueryValsetRequestResponseProtoMsg;
        };
        QueryValsetConfirmRequest: {
            encode(message: _62.QueryValsetConfirmRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValsetConfirmRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                address?: string;
            }): _62.QueryValsetConfirmRequest;
            fromAmino(object: _62.QueryValsetConfirmRequestAmino): _62.QueryValsetConfirmRequest;
            toAmino(message: _62.QueryValsetConfirmRequest): _62.QueryValsetConfirmRequestAmino;
            fromAminoMsg(object: _62.QueryValsetConfirmRequestAminoMsg): _62.QueryValsetConfirmRequest;
            fromProtoMsg(message: _62.QueryValsetConfirmRequestProtoMsg): _62.QueryValsetConfirmRequest;
            toProto(message: _62.QueryValsetConfirmRequest): Uint8Array;
            toProtoMsg(message: _62.QueryValsetConfirmRequest): _62.QueryValsetConfirmRequestProtoMsg;
        };
        QueryValsetConfirmResponse: {
            encode(message: _62.QueryValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValsetConfirmResponse;
            fromPartial(object: {
                confirm?: {
                    nonce?: string | number | import("long").Long;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                };
            }): _62.QueryValsetConfirmResponse;
            fromAmino(object: _62.QueryValsetConfirmResponseAmino): _62.QueryValsetConfirmResponse;
            toAmino(message: _62.QueryValsetConfirmResponse): _62.QueryValsetConfirmResponseAmino;
            fromAminoMsg(object: _62.QueryValsetConfirmResponseAminoMsg): _62.QueryValsetConfirmResponse;
            fromProtoMsg(message: _62.QueryValsetConfirmResponseProtoMsg): _62.QueryValsetConfirmResponse;
            toProto(message: _62.QueryValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _62.QueryValsetConfirmResponse): _62.QueryValsetConfirmResponseProtoMsg;
        };
        QueryValsetConfirmsByNonceRequest: {
            encode(message: _62.QueryValsetConfirmsByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValsetConfirmsByNonceRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
            }): _62.QueryValsetConfirmsByNonceRequest;
            fromAmino(object: _62.QueryValsetConfirmsByNonceRequestAmino): _62.QueryValsetConfirmsByNonceRequest;
            toAmino(message: _62.QueryValsetConfirmsByNonceRequest): _62.QueryValsetConfirmsByNonceRequestAmino;
            fromAminoMsg(object: _62.QueryValsetConfirmsByNonceRequestAminoMsg): _62.QueryValsetConfirmsByNonceRequest;
            fromProtoMsg(message: _62.QueryValsetConfirmsByNonceRequestProtoMsg): _62.QueryValsetConfirmsByNonceRequest;
            toProto(message: _62.QueryValsetConfirmsByNonceRequest): Uint8Array;
            toProtoMsg(message: _62.QueryValsetConfirmsByNonceRequest): _62.QueryValsetConfirmsByNonceRequestProtoMsg;
        };
        QueryValsetConfirmsByNonceResponse: {
            encode(message: _62.QueryValsetConfirmsByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryValsetConfirmsByNonceResponse;
            fromPartial(object: {
                confirms?: {
                    nonce?: string | number | import("long").Long;
                    orchestrator?: string;
                    ethAddress?: string;
                    signature?: string;
                }[];
            }): _62.QueryValsetConfirmsByNonceResponse;
            fromAmino(object: _62.QueryValsetConfirmsByNonceResponseAmino): _62.QueryValsetConfirmsByNonceResponse;
            toAmino(message: _62.QueryValsetConfirmsByNonceResponse): _62.QueryValsetConfirmsByNonceResponseAmino;
            fromAminoMsg(object: _62.QueryValsetConfirmsByNonceResponseAminoMsg): _62.QueryValsetConfirmsByNonceResponse;
            fromProtoMsg(message: _62.QueryValsetConfirmsByNonceResponseProtoMsg): _62.QueryValsetConfirmsByNonceResponse;
            toProto(message: _62.QueryValsetConfirmsByNonceResponse): Uint8Array;
            toProtoMsg(message: _62.QueryValsetConfirmsByNonceResponse): _62.QueryValsetConfirmsByNonceResponseProtoMsg;
        };
        QueryLastValsetRequestsRequest: {
            encode(_: _62.QueryLastValsetRequestsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastValsetRequestsRequest;
            fromPartial(_: {}): _62.QueryLastValsetRequestsRequest;
            fromAmino(_: _62.QueryLastValsetRequestsRequestAmino): _62.QueryLastValsetRequestsRequest;
            toAmino(_: _62.QueryLastValsetRequestsRequest): _62.QueryLastValsetRequestsRequestAmino;
            fromAminoMsg(object: _62.QueryLastValsetRequestsRequestAminoMsg): _62.QueryLastValsetRequestsRequest;
            fromProtoMsg(message: _62.QueryLastValsetRequestsRequestProtoMsg): _62.QueryLastValsetRequestsRequest;
            toProto(message: _62.QueryLastValsetRequestsRequest): Uint8Array;
            toProtoMsg(message: _62.QueryLastValsetRequestsRequest): _62.QueryLastValsetRequestsRequestProtoMsg;
        };
        QueryLastValsetRequestsResponse: {
            encode(message: _62.QueryLastValsetRequestsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastValsetRequestsResponse;
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
            }): _62.QueryLastValsetRequestsResponse;
            fromAmino(object: _62.QueryLastValsetRequestsResponseAmino): _62.QueryLastValsetRequestsResponse;
            toAmino(message: _62.QueryLastValsetRequestsResponse): _62.QueryLastValsetRequestsResponseAmino;
            fromAminoMsg(object: _62.QueryLastValsetRequestsResponseAminoMsg): _62.QueryLastValsetRequestsResponse;
            fromProtoMsg(message: _62.QueryLastValsetRequestsResponseProtoMsg): _62.QueryLastValsetRequestsResponse;
            toProto(message: _62.QueryLastValsetRequestsResponse): Uint8Array;
            toProtoMsg(message: _62.QueryLastValsetRequestsResponse): _62.QueryLastValsetRequestsResponseProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrRequest: {
            encode(message: _62.QueryLastPendingValsetRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastPendingValsetRequestByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _62.QueryLastPendingValsetRequestByAddrRequest;
            fromAmino(object: _62.QueryLastPendingValsetRequestByAddrRequestAmino): _62.QueryLastPendingValsetRequestByAddrRequest;
            toAmino(message: _62.QueryLastPendingValsetRequestByAddrRequest): _62.QueryLastPendingValsetRequestByAddrRequestAmino;
            fromAminoMsg(object: _62.QueryLastPendingValsetRequestByAddrRequestAminoMsg): _62.QueryLastPendingValsetRequestByAddrRequest;
            fromProtoMsg(message: _62.QueryLastPendingValsetRequestByAddrRequestProtoMsg): _62.QueryLastPendingValsetRequestByAddrRequest;
            toProto(message: _62.QueryLastPendingValsetRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _62.QueryLastPendingValsetRequestByAddrRequest): _62.QueryLastPendingValsetRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingValsetRequestByAddrResponse: {
            encode(message: _62.QueryLastPendingValsetRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastPendingValsetRequestByAddrResponse;
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
            }): _62.QueryLastPendingValsetRequestByAddrResponse;
            fromAmino(object: _62.QueryLastPendingValsetRequestByAddrResponseAmino): _62.QueryLastPendingValsetRequestByAddrResponse;
            toAmino(message: _62.QueryLastPendingValsetRequestByAddrResponse): _62.QueryLastPendingValsetRequestByAddrResponseAmino;
            fromAminoMsg(object: _62.QueryLastPendingValsetRequestByAddrResponseAminoMsg): _62.QueryLastPendingValsetRequestByAddrResponse;
            fromProtoMsg(message: _62.QueryLastPendingValsetRequestByAddrResponseProtoMsg): _62.QueryLastPendingValsetRequestByAddrResponse;
            toProto(message: _62.QueryLastPendingValsetRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _62.QueryLastPendingValsetRequestByAddrResponse): _62.QueryLastPendingValsetRequestByAddrResponseProtoMsg;
        };
        QueryBatchFeeRequest: {
            encode(_: _62.QueryBatchFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBatchFeeRequest;
            fromPartial(_: {}): _62.QueryBatchFeeRequest;
            fromAmino(_: _62.QueryBatchFeeRequestAmino): _62.QueryBatchFeeRequest;
            toAmino(_: _62.QueryBatchFeeRequest): _62.QueryBatchFeeRequestAmino;
            fromAminoMsg(object: _62.QueryBatchFeeRequestAminoMsg): _62.QueryBatchFeeRequest;
            fromProtoMsg(message: _62.QueryBatchFeeRequestProtoMsg): _62.QueryBatchFeeRequest;
            toProto(message: _62.QueryBatchFeeRequest): Uint8Array;
            toProtoMsg(message: _62.QueryBatchFeeRequest): _62.QueryBatchFeeRequestProtoMsg;
        };
        QueryBatchFeeResponse: {
            encode(message: _62.QueryBatchFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBatchFeeResponse;
            fromPartial(object: {
                batchFees?: {
                    token?: string;
                    totalFees?: string;
                    txCount?: string | number | import("long").Long;
                }[];
            }): _62.QueryBatchFeeResponse;
            fromAmino(object: _62.QueryBatchFeeResponseAmino): _62.QueryBatchFeeResponse;
            toAmino(message: _62.QueryBatchFeeResponse): _62.QueryBatchFeeResponseAmino;
            fromAminoMsg(object: _62.QueryBatchFeeResponseAminoMsg): _62.QueryBatchFeeResponse;
            fromProtoMsg(message: _62.QueryBatchFeeResponseProtoMsg): _62.QueryBatchFeeResponse;
            toProto(message: _62.QueryBatchFeeResponse): Uint8Array;
            toProtoMsg(message: _62.QueryBatchFeeResponse): _62.QueryBatchFeeResponseProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrRequest: {
            encode(message: _62.QueryLastPendingBatchRequestByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastPendingBatchRequestByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _62.QueryLastPendingBatchRequestByAddrRequest;
            fromAmino(object: _62.QueryLastPendingBatchRequestByAddrRequestAmino): _62.QueryLastPendingBatchRequestByAddrRequest;
            toAmino(message: _62.QueryLastPendingBatchRequestByAddrRequest): _62.QueryLastPendingBatchRequestByAddrRequestAmino;
            fromAminoMsg(object: _62.QueryLastPendingBatchRequestByAddrRequestAminoMsg): _62.QueryLastPendingBatchRequestByAddrRequest;
            fromProtoMsg(message: _62.QueryLastPendingBatchRequestByAddrRequestProtoMsg): _62.QueryLastPendingBatchRequestByAddrRequest;
            toProto(message: _62.QueryLastPendingBatchRequestByAddrRequest): Uint8Array;
            toProtoMsg(message: _62.QueryLastPendingBatchRequestByAddrRequest): _62.QueryLastPendingBatchRequestByAddrRequestProtoMsg;
        };
        QueryLastPendingBatchRequestByAddrResponse: {
            encode(message: _62.QueryLastPendingBatchRequestByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastPendingBatchRequestByAddrResponse;
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
            }): _62.QueryLastPendingBatchRequestByAddrResponse;
            fromAmino(object: _62.QueryLastPendingBatchRequestByAddrResponseAmino): _62.QueryLastPendingBatchRequestByAddrResponse;
            toAmino(message: _62.QueryLastPendingBatchRequestByAddrResponse): _62.QueryLastPendingBatchRequestByAddrResponseAmino;
            fromAminoMsg(object: _62.QueryLastPendingBatchRequestByAddrResponseAminoMsg): _62.QueryLastPendingBatchRequestByAddrResponse;
            fromProtoMsg(message: _62.QueryLastPendingBatchRequestByAddrResponseProtoMsg): _62.QueryLastPendingBatchRequestByAddrResponse;
            toProto(message: _62.QueryLastPendingBatchRequestByAddrResponse): Uint8Array;
            toProtoMsg(message: _62.QueryLastPendingBatchRequestByAddrResponse): _62.QueryLastPendingBatchRequestByAddrResponseProtoMsg;
        };
        QueryLastPendingLogicCallByAddrRequest: {
            encode(message: _62.QueryLastPendingLogicCallByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastPendingLogicCallByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _62.QueryLastPendingLogicCallByAddrRequest;
            fromAmino(object: _62.QueryLastPendingLogicCallByAddrRequestAmino): _62.QueryLastPendingLogicCallByAddrRequest;
            toAmino(message: _62.QueryLastPendingLogicCallByAddrRequest): _62.QueryLastPendingLogicCallByAddrRequestAmino;
            fromAminoMsg(object: _62.QueryLastPendingLogicCallByAddrRequestAminoMsg): _62.QueryLastPendingLogicCallByAddrRequest;
            fromProtoMsg(message: _62.QueryLastPendingLogicCallByAddrRequestProtoMsg): _62.QueryLastPendingLogicCallByAddrRequest;
            toProto(message: _62.QueryLastPendingLogicCallByAddrRequest): Uint8Array;
            toProtoMsg(message: _62.QueryLastPendingLogicCallByAddrRequest): _62.QueryLastPendingLogicCallByAddrRequestProtoMsg;
        };
        QueryLastPendingLogicCallByAddrResponse: {
            encode(message: _62.QueryLastPendingLogicCallByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastPendingLogicCallByAddrResponse;
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
            }): _62.QueryLastPendingLogicCallByAddrResponse;
            fromAmino(object: _62.QueryLastPendingLogicCallByAddrResponseAmino): _62.QueryLastPendingLogicCallByAddrResponse;
            toAmino(message: _62.QueryLastPendingLogicCallByAddrResponse): _62.QueryLastPendingLogicCallByAddrResponseAmino;
            fromAminoMsg(object: _62.QueryLastPendingLogicCallByAddrResponseAminoMsg): _62.QueryLastPendingLogicCallByAddrResponse;
            fromProtoMsg(message: _62.QueryLastPendingLogicCallByAddrResponseProtoMsg): _62.QueryLastPendingLogicCallByAddrResponse;
            toProto(message: _62.QueryLastPendingLogicCallByAddrResponse): Uint8Array;
            toProtoMsg(message: _62.QueryLastPendingLogicCallByAddrResponse): _62.QueryLastPendingLogicCallByAddrResponseProtoMsg;
        };
        QueryOutgoingTxBatchesRequest: {
            encode(_: _62.QueryOutgoingTxBatchesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryOutgoingTxBatchesRequest;
            fromPartial(_: {}): _62.QueryOutgoingTxBatchesRequest;
            fromAmino(_: _62.QueryOutgoingTxBatchesRequestAmino): _62.QueryOutgoingTxBatchesRequest;
            toAmino(_: _62.QueryOutgoingTxBatchesRequest): _62.QueryOutgoingTxBatchesRequestAmino;
            fromAminoMsg(object: _62.QueryOutgoingTxBatchesRequestAminoMsg): _62.QueryOutgoingTxBatchesRequest;
            fromProtoMsg(message: _62.QueryOutgoingTxBatchesRequestProtoMsg): _62.QueryOutgoingTxBatchesRequest;
            toProto(message: _62.QueryOutgoingTxBatchesRequest): Uint8Array;
            toProtoMsg(message: _62.QueryOutgoingTxBatchesRequest): _62.QueryOutgoingTxBatchesRequestProtoMsg;
        };
        QueryOutgoingTxBatchesResponse: {
            encode(message: _62.QueryOutgoingTxBatchesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryOutgoingTxBatchesResponse;
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
            }): _62.QueryOutgoingTxBatchesResponse;
            fromAmino(object: _62.QueryOutgoingTxBatchesResponseAmino): _62.QueryOutgoingTxBatchesResponse;
            toAmino(message: _62.QueryOutgoingTxBatchesResponse): _62.QueryOutgoingTxBatchesResponseAmino;
            fromAminoMsg(object: _62.QueryOutgoingTxBatchesResponseAminoMsg): _62.QueryOutgoingTxBatchesResponse;
            fromProtoMsg(message: _62.QueryOutgoingTxBatchesResponseProtoMsg): _62.QueryOutgoingTxBatchesResponse;
            toProto(message: _62.QueryOutgoingTxBatchesResponse): Uint8Array;
            toProtoMsg(message: _62.QueryOutgoingTxBatchesResponse): _62.QueryOutgoingTxBatchesResponseProtoMsg;
        };
        QueryOutgoingLogicCallsRequest: {
            encode(_: _62.QueryOutgoingLogicCallsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryOutgoingLogicCallsRequest;
            fromPartial(_: {}): _62.QueryOutgoingLogicCallsRequest;
            fromAmino(_: _62.QueryOutgoingLogicCallsRequestAmino): _62.QueryOutgoingLogicCallsRequest;
            toAmino(_: _62.QueryOutgoingLogicCallsRequest): _62.QueryOutgoingLogicCallsRequestAmino;
            fromAminoMsg(object: _62.QueryOutgoingLogicCallsRequestAminoMsg): _62.QueryOutgoingLogicCallsRequest;
            fromProtoMsg(message: _62.QueryOutgoingLogicCallsRequestProtoMsg): _62.QueryOutgoingLogicCallsRequest;
            toProto(message: _62.QueryOutgoingLogicCallsRequest): Uint8Array;
            toProtoMsg(message: _62.QueryOutgoingLogicCallsRequest): _62.QueryOutgoingLogicCallsRequestProtoMsg;
        };
        QueryOutgoingLogicCallsResponse: {
            encode(message: _62.QueryOutgoingLogicCallsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryOutgoingLogicCallsResponse;
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
            }): _62.QueryOutgoingLogicCallsResponse;
            fromAmino(object: _62.QueryOutgoingLogicCallsResponseAmino): _62.QueryOutgoingLogicCallsResponse;
            toAmino(message: _62.QueryOutgoingLogicCallsResponse): _62.QueryOutgoingLogicCallsResponseAmino;
            fromAminoMsg(object: _62.QueryOutgoingLogicCallsResponseAminoMsg): _62.QueryOutgoingLogicCallsResponse;
            fromProtoMsg(message: _62.QueryOutgoingLogicCallsResponseProtoMsg): _62.QueryOutgoingLogicCallsResponse;
            toProto(message: _62.QueryOutgoingLogicCallsResponse): Uint8Array;
            toProtoMsg(message: _62.QueryOutgoingLogicCallsResponse): _62.QueryOutgoingLogicCallsResponseProtoMsg;
        };
        QueryBatchRequestByNonceRequest: {
            encode(message: _62.QueryBatchRequestByNonceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBatchRequestByNonceRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                contractAddress?: string;
            }): _62.QueryBatchRequestByNonceRequest;
            fromAmino(object: _62.QueryBatchRequestByNonceRequestAmino): _62.QueryBatchRequestByNonceRequest;
            toAmino(message: _62.QueryBatchRequestByNonceRequest): _62.QueryBatchRequestByNonceRequestAmino;
            fromAminoMsg(object: _62.QueryBatchRequestByNonceRequestAminoMsg): _62.QueryBatchRequestByNonceRequest;
            fromProtoMsg(message: _62.QueryBatchRequestByNonceRequestProtoMsg): _62.QueryBatchRequestByNonceRequest;
            toProto(message: _62.QueryBatchRequestByNonceRequest): Uint8Array;
            toProtoMsg(message: _62.QueryBatchRequestByNonceRequest): _62.QueryBatchRequestByNonceRequestProtoMsg;
        };
        QueryBatchRequestByNonceResponse: {
            encode(message: _62.QueryBatchRequestByNonceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBatchRequestByNonceResponse;
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
            }): _62.QueryBatchRequestByNonceResponse;
            fromAmino(object: _62.QueryBatchRequestByNonceResponseAmino): _62.QueryBatchRequestByNonceResponse;
            toAmino(message: _62.QueryBatchRequestByNonceResponse): _62.QueryBatchRequestByNonceResponseAmino;
            fromAminoMsg(object: _62.QueryBatchRequestByNonceResponseAminoMsg): _62.QueryBatchRequestByNonceResponse;
            fromProtoMsg(message: _62.QueryBatchRequestByNonceResponseProtoMsg): _62.QueryBatchRequestByNonceResponse;
            toProto(message: _62.QueryBatchRequestByNonceResponse): Uint8Array;
            toProtoMsg(message: _62.QueryBatchRequestByNonceResponse): _62.QueryBatchRequestByNonceResponseProtoMsg;
        };
        QueryBatchConfirmsRequest: {
            encode(message: _62.QueryBatchConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBatchConfirmsRequest;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                contractAddress?: string;
            }): _62.QueryBatchConfirmsRequest;
            fromAmino(object: _62.QueryBatchConfirmsRequestAmino): _62.QueryBatchConfirmsRequest;
            toAmino(message: _62.QueryBatchConfirmsRequest): _62.QueryBatchConfirmsRequestAmino;
            fromAminoMsg(object: _62.QueryBatchConfirmsRequestAminoMsg): _62.QueryBatchConfirmsRequest;
            fromProtoMsg(message: _62.QueryBatchConfirmsRequestProtoMsg): _62.QueryBatchConfirmsRequest;
            toProto(message: _62.QueryBatchConfirmsRequest): Uint8Array;
            toProtoMsg(message: _62.QueryBatchConfirmsRequest): _62.QueryBatchConfirmsRequestProtoMsg;
        };
        QueryBatchConfirmsResponse: {
            encode(message: _62.QueryBatchConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryBatchConfirmsResponse;
            fromPartial(object: {
                confirms?: {
                    nonce?: string | number | import("long").Long;
                    tokenContract?: string;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _62.QueryBatchConfirmsResponse;
            fromAmino(object: _62.QueryBatchConfirmsResponseAmino): _62.QueryBatchConfirmsResponse;
            toAmino(message: _62.QueryBatchConfirmsResponse): _62.QueryBatchConfirmsResponseAmino;
            fromAminoMsg(object: _62.QueryBatchConfirmsResponseAminoMsg): _62.QueryBatchConfirmsResponse;
            fromProtoMsg(message: _62.QueryBatchConfirmsResponseProtoMsg): _62.QueryBatchConfirmsResponse;
            toProto(message: _62.QueryBatchConfirmsResponse): Uint8Array;
            toProtoMsg(message: _62.QueryBatchConfirmsResponse): _62.QueryBatchConfirmsResponseProtoMsg;
        };
        QueryLogicConfirmsRequest: {
            encode(message: _62.QueryLogicConfirmsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLogicConfirmsRequest;
            fromPartial(object: {
                invalidationId?: Uint8Array;
                invalidationNonce?: string | number | import("long").Long;
            }): _62.QueryLogicConfirmsRequest;
            fromAmino(object: _62.QueryLogicConfirmsRequestAmino): _62.QueryLogicConfirmsRequest;
            toAmino(message: _62.QueryLogicConfirmsRequest): _62.QueryLogicConfirmsRequestAmino;
            fromAminoMsg(object: _62.QueryLogicConfirmsRequestAminoMsg): _62.QueryLogicConfirmsRequest;
            fromProtoMsg(message: _62.QueryLogicConfirmsRequestProtoMsg): _62.QueryLogicConfirmsRequest;
            toProto(message: _62.QueryLogicConfirmsRequest): Uint8Array;
            toProtoMsg(message: _62.QueryLogicConfirmsRequest): _62.QueryLogicConfirmsRequestProtoMsg;
        };
        QueryLogicConfirmsResponse: {
            encode(message: _62.QueryLogicConfirmsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLogicConfirmsResponse;
            fromPartial(object: {
                confirms?: {
                    invalidationId?: string;
                    invalidationNonce?: string | number | import("long").Long;
                    ethSigner?: string;
                    orchestrator?: string;
                    signature?: string;
                }[];
            }): _62.QueryLogicConfirmsResponse;
            fromAmino(object: _62.QueryLogicConfirmsResponseAmino): _62.QueryLogicConfirmsResponse;
            toAmino(message: _62.QueryLogicConfirmsResponse): _62.QueryLogicConfirmsResponseAmino;
            fromAminoMsg(object: _62.QueryLogicConfirmsResponseAminoMsg): _62.QueryLogicConfirmsResponse;
            fromProtoMsg(message: _62.QueryLogicConfirmsResponseProtoMsg): _62.QueryLogicConfirmsResponse;
            toProto(message: _62.QueryLogicConfirmsResponse): Uint8Array;
            toProtoMsg(message: _62.QueryLogicConfirmsResponse): _62.QueryLogicConfirmsResponseProtoMsg;
        };
        QueryLastEventNonceByAddrRequest: {
            encode(message: _62.QueryLastEventNonceByAddrRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastEventNonceByAddrRequest;
            fromPartial(object: {
                address?: string;
            }): _62.QueryLastEventNonceByAddrRequest;
            fromAmino(object: _62.QueryLastEventNonceByAddrRequestAmino): _62.QueryLastEventNonceByAddrRequest;
            toAmino(message: _62.QueryLastEventNonceByAddrRequest): _62.QueryLastEventNonceByAddrRequestAmino;
            fromAminoMsg(object: _62.QueryLastEventNonceByAddrRequestAminoMsg): _62.QueryLastEventNonceByAddrRequest;
            fromProtoMsg(message: _62.QueryLastEventNonceByAddrRequestProtoMsg): _62.QueryLastEventNonceByAddrRequest;
            toProto(message: _62.QueryLastEventNonceByAddrRequest): Uint8Array;
            toProtoMsg(message: _62.QueryLastEventNonceByAddrRequest): _62.QueryLastEventNonceByAddrRequestProtoMsg;
        };
        QueryLastEventNonceByAddrResponse: {
            encode(message: _62.QueryLastEventNonceByAddrResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryLastEventNonceByAddrResponse;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
            }): _62.QueryLastEventNonceByAddrResponse;
            fromAmino(object: _62.QueryLastEventNonceByAddrResponseAmino): _62.QueryLastEventNonceByAddrResponse;
            toAmino(message: _62.QueryLastEventNonceByAddrResponse): _62.QueryLastEventNonceByAddrResponseAmino;
            fromAminoMsg(object: _62.QueryLastEventNonceByAddrResponseAminoMsg): _62.QueryLastEventNonceByAddrResponse;
            fromProtoMsg(message: _62.QueryLastEventNonceByAddrResponseProtoMsg): _62.QueryLastEventNonceByAddrResponse;
            toProto(message: _62.QueryLastEventNonceByAddrResponse): Uint8Array;
            toProtoMsg(message: _62.QueryLastEventNonceByAddrResponse): _62.QueryLastEventNonceByAddrResponseProtoMsg;
        };
        QueryERC20ToDenomRequest: {
            encode(message: _62.QueryERC20ToDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryERC20ToDenomRequest;
            fromPartial(object: {
                erc20?: string;
            }): _62.QueryERC20ToDenomRequest;
            fromAmino(object: _62.QueryERC20ToDenomRequestAmino): _62.QueryERC20ToDenomRequest;
            toAmino(message: _62.QueryERC20ToDenomRequest): _62.QueryERC20ToDenomRequestAmino;
            fromAminoMsg(object: _62.QueryERC20ToDenomRequestAminoMsg): _62.QueryERC20ToDenomRequest;
            fromProtoMsg(message: _62.QueryERC20ToDenomRequestProtoMsg): _62.QueryERC20ToDenomRequest;
            toProto(message: _62.QueryERC20ToDenomRequest): Uint8Array;
            toProtoMsg(message: _62.QueryERC20ToDenomRequest): _62.QueryERC20ToDenomRequestProtoMsg;
        };
        QueryERC20ToDenomResponse: {
            encode(message: _62.QueryERC20ToDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryERC20ToDenomResponse;
            fromPartial(object: {
                denom?: string;
                cosmosOriginated?: boolean;
            }): _62.QueryERC20ToDenomResponse;
            fromAmino(object: _62.QueryERC20ToDenomResponseAmino): _62.QueryERC20ToDenomResponse;
            toAmino(message: _62.QueryERC20ToDenomResponse): _62.QueryERC20ToDenomResponseAmino;
            fromAminoMsg(object: _62.QueryERC20ToDenomResponseAminoMsg): _62.QueryERC20ToDenomResponse;
            fromProtoMsg(message: _62.QueryERC20ToDenomResponseProtoMsg): _62.QueryERC20ToDenomResponse;
            toProto(message: _62.QueryERC20ToDenomResponse): Uint8Array;
            toProtoMsg(message: _62.QueryERC20ToDenomResponse): _62.QueryERC20ToDenomResponseProtoMsg;
        };
        QueryDenomToERC20Request: {
            encode(message: _62.QueryDenomToERC20Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDenomToERC20Request;
            fromPartial(object: {
                denom?: string;
            }): _62.QueryDenomToERC20Request;
            fromAmino(object: _62.QueryDenomToERC20RequestAmino): _62.QueryDenomToERC20Request;
            toAmino(message: _62.QueryDenomToERC20Request): _62.QueryDenomToERC20RequestAmino;
            fromAminoMsg(object: _62.QueryDenomToERC20RequestAminoMsg): _62.QueryDenomToERC20Request;
            fromProtoMsg(message: _62.QueryDenomToERC20RequestProtoMsg): _62.QueryDenomToERC20Request;
            toProto(message: _62.QueryDenomToERC20Request): Uint8Array;
            toProtoMsg(message: _62.QueryDenomToERC20Request): _62.QueryDenomToERC20RequestProtoMsg;
        };
        QueryDenomToERC20Response: {
            encode(message: _62.QueryDenomToERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDenomToERC20Response;
            fromPartial(object: {
                erc20?: string;
                cosmosOriginated?: boolean;
            }): _62.QueryDenomToERC20Response;
            fromAmino(object: _62.QueryDenomToERC20ResponseAmino): _62.QueryDenomToERC20Response;
            toAmino(message: _62.QueryDenomToERC20Response): _62.QueryDenomToERC20ResponseAmino;
            fromAminoMsg(object: _62.QueryDenomToERC20ResponseAminoMsg): _62.QueryDenomToERC20Response;
            fromProtoMsg(message: _62.QueryDenomToERC20ResponseProtoMsg): _62.QueryDenomToERC20Response;
            toProto(message: _62.QueryDenomToERC20Response): Uint8Array;
            toProtoMsg(message: _62.QueryDenomToERC20Response): _62.QueryDenomToERC20ResponseProtoMsg;
        };
        QueryAttestationsRequest: {
            encode(message: _62.QueryAttestationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAttestationsRequest;
            fromPartial(object: {
                limit?: string | number | import("long").Long;
            }): _62.QueryAttestationsRequest;
            fromAmino(object: _62.QueryAttestationsRequestAmino): _62.QueryAttestationsRequest;
            toAmino(message: _62.QueryAttestationsRequest): _62.QueryAttestationsRequestAmino;
            fromAminoMsg(object: _62.QueryAttestationsRequestAminoMsg): _62.QueryAttestationsRequest;
            fromProtoMsg(message: _62.QueryAttestationsRequestProtoMsg): _62.QueryAttestationsRequest;
            toProto(message: _62.QueryAttestationsRequest): Uint8Array;
            toProtoMsg(message: _62.QueryAttestationsRequest): _62.QueryAttestationsRequestProtoMsg;
        };
        QueryAttestationsResponse: {
            encode(message: _62.QueryAttestationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAttestationsResponse;
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
            }): _62.QueryAttestationsResponse;
            fromAmino(object: _62.QueryAttestationsResponseAmino): _62.QueryAttestationsResponse;
            toAmino(message: _62.QueryAttestationsResponse): _62.QueryAttestationsResponseAmino;
            fromAminoMsg(object: _62.QueryAttestationsResponseAminoMsg): _62.QueryAttestationsResponse;
            fromProtoMsg(message: _62.QueryAttestationsResponseProtoMsg): _62.QueryAttestationsResponse;
            toProto(message: _62.QueryAttestationsResponse): Uint8Array;
            toProtoMsg(message: _62.QueryAttestationsResponse): _62.QueryAttestationsResponseProtoMsg;
        };
        QueryDelegateKeysByValidatorAddress: {
            encode(message: _62.QueryDelegateKeysByValidatorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegateKeysByValidatorAddress;
            fromPartial(object: {
                validatorAddress?: string;
            }): _62.QueryDelegateKeysByValidatorAddress;
            fromAmino(object: _62.QueryDelegateKeysByValidatorAddressAmino): _62.QueryDelegateKeysByValidatorAddress;
            toAmino(message: _62.QueryDelegateKeysByValidatorAddress): _62.QueryDelegateKeysByValidatorAddressAmino;
            fromAminoMsg(object: _62.QueryDelegateKeysByValidatorAddressAminoMsg): _62.QueryDelegateKeysByValidatorAddress;
            fromProtoMsg(message: _62.QueryDelegateKeysByValidatorAddressProtoMsg): _62.QueryDelegateKeysByValidatorAddress;
            toProto(message: _62.QueryDelegateKeysByValidatorAddress): Uint8Array;
            toProtoMsg(message: _62.QueryDelegateKeysByValidatorAddress): _62.QueryDelegateKeysByValidatorAddressProtoMsg;
        };
        QueryDelegateKeysByValidatorAddressResponse: {
            encode(message: _62.QueryDelegateKeysByValidatorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegateKeysByValidatorAddressResponse;
            fromPartial(object: {
                ethAddress?: string;
                orchestratorAddress?: string;
            }): _62.QueryDelegateKeysByValidatorAddressResponse;
            fromAmino(object: _62.QueryDelegateKeysByValidatorAddressResponseAmino): _62.QueryDelegateKeysByValidatorAddressResponse;
            toAmino(message: _62.QueryDelegateKeysByValidatorAddressResponse): _62.QueryDelegateKeysByValidatorAddressResponseAmino;
            fromAminoMsg(object: _62.QueryDelegateKeysByValidatorAddressResponseAminoMsg): _62.QueryDelegateKeysByValidatorAddressResponse;
            fromProtoMsg(message: _62.QueryDelegateKeysByValidatorAddressResponseProtoMsg): _62.QueryDelegateKeysByValidatorAddressResponse;
            toProto(message: _62.QueryDelegateKeysByValidatorAddressResponse): Uint8Array;
            toProtoMsg(message: _62.QueryDelegateKeysByValidatorAddressResponse): _62.QueryDelegateKeysByValidatorAddressResponseProtoMsg;
        };
        QueryDelegateKeysByEthAddress: {
            encode(message: _62.QueryDelegateKeysByEthAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegateKeysByEthAddress;
            fromPartial(object: {
                ethAddress?: string;
            }): _62.QueryDelegateKeysByEthAddress;
            fromAmino(object: _62.QueryDelegateKeysByEthAddressAmino): _62.QueryDelegateKeysByEthAddress;
            toAmino(message: _62.QueryDelegateKeysByEthAddress): _62.QueryDelegateKeysByEthAddressAmino;
            fromAminoMsg(object: _62.QueryDelegateKeysByEthAddressAminoMsg): _62.QueryDelegateKeysByEthAddress;
            fromProtoMsg(message: _62.QueryDelegateKeysByEthAddressProtoMsg): _62.QueryDelegateKeysByEthAddress;
            toProto(message: _62.QueryDelegateKeysByEthAddress): Uint8Array;
            toProtoMsg(message: _62.QueryDelegateKeysByEthAddress): _62.QueryDelegateKeysByEthAddressProtoMsg;
        };
        QueryDelegateKeysByEthAddressResponse: {
            encode(message: _62.QueryDelegateKeysByEthAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegateKeysByEthAddressResponse;
            fromPartial(object: {
                validatorAddress?: string;
                orchestratorAddress?: string;
            }): _62.QueryDelegateKeysByEthAddressResponse;
            fromAmino(object: _62.QueryDelegateKeysByEthAddressResponseAmino): _62.QueryDelegateKeysByEthAddressResponse;
            toAmino(message: _62.QueryDelegateKeysByEthAddressResponse): _62.QueryDelegateKeysByEthAddressResponseAmino;
            fromAminoMsg(object: _62.QueryDelegateKeysByEthAddressResponseAminoMsg): _62.QueryDelegateKeysByEthAddressResponse;
            fromProtoMsg(message: _62.QueryDelegateKeysByEthAddressResponseProtoMsg): _62.QueryDelegateKeysByEthAddressResponse;
            toProto(message: _62.QueryDelegateKeysByEthAddressResponse): Uint8Array;
            toProtoMsg(message: _62.QueryDelegateKeysByEthAddressResponse): _62.QueryDelegateKeysByEthAddressResponseProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddress: {
            encode(message: _62.QueryDelegateKeysByOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegateKeysByOrchestratorAddress;
            fromPartial(object: {
                orchestratorAddress?: string;
            }): _62.QueryDelegateKeysByOrchestratorAddress;
            fromAmino(object: _62.QueryDelegateKeysByOrchestratorAddressAmino): _62.QueryDelegateKeysByOrchestratorAddress;
            toAmino(message: _62.QueryDelegateKeysByOrchestratorAddress): _62.QueryDelegateKeysByOrchestratorAddressAmino;
            fromAminoMsg(object: _62.QueryDelegateKeysByOrchestratorAddressAminoMsg): _62.QueryDelegateKeysByOrchestratorAddress;
            fromProtoMsg(message: _62.QueryDelegateKeysByOrchestratorAddressProtoMsg): _62.QueryDelegateKeysByOrchestratorAddress;
            toProto(message: _62.QueryDelegateKeysByOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _62.QueryDelegateKeysByOrchestratorAddress): _62.QueryDelegateKeysByOrchestratorAddressProtoMsg;
        };
        QueryDelegateKeysByOrchestratorAddressResponse: {
            encode(message: _62.QueryDelegateKeysByOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryDelegateKeysByOrchestratorAddressResponse;
            fromPartial(object: {
                validatorAddress?: string;
                ethAddress?: string;
            }): _62.QueryDelegateKeysByOrchestratorAddressResponse;
            fromAmino(object: _62.QueryDelegateKeysByOrchestratorAddressResponseAmino): _62.QueryDelegateKeysByOrchestratorAddressResponse;
            toAmino(message: _62.QueryDelegateKeysByOrchestratorAddressResponse): _62.QueryDelegateKeysByOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _62.QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): _62.QueryDelegateKeysByOrchestratorAddressResponse;
            fromProtoMsg(message: _62.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): _62.QueryDelegateKeysByOrchestratorAddressResponse;
            toProto(message: _62.QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _62.QueryDelegateKeysByOrchestratorAddressResponse): _62.QueryDelegateKeysByOrchestratorAddressResponseProtoMsg;
        };
        QueryPendingSendToEth: {
            encode(message: _62.QueryPendingSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryPendingSendToEth;
            fromPartial(object: {
                senderAddress?: string;
            }): _62.QueryPendingSendToEth;
            fromAmino(object: _62.QueryPendingSendToEthAmino): _62.QueryPendingSendToEth;
            toAmino(message: _62.QueryPendingSendToEth): _62.QueryPendingSendToEthAmino;
            fromAminoMsg(object: _62.QueryPendingSendToEthAminoMsg): _62.QueryPendingSendToEth;
            fromProtoMsg(message: _62.QueryPendingSendToEthProtoMsg): _62.QueryPendingSendToEth;
            toProto(message: _62.QueryPendingSendToEth): Uint8Array;
            toProtoMsg(message: _62.QueryPendingSendToEth): _62.QueryPendingSendToEthProtoMsg;
        };
        QueryPendingSendToEthResponse: {
            encode(message: _62.QueryPendingSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryPendingSendToEthResponse;
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
            }): _62.QueryPendingSendToEthResponse;
            fromAmino(object: _62.QueryPendingSendToEthResponseAmino): _62.QueryPendingSendToEthResponse;
            toAmino(message: _62.QueryPendingSendToEthResponse): _62.QueryPendingSendToEthResponseAmino;
            fromAminoMsg(object: _62.QueryPendingSendToEthResponseAminoMsg): _62.QueryPendingSendToEthResponse;
            fromProtoMsg(message: _62.QueryPendingSendToEthResponseProtoMsg): _62.QueryPendingSendToEthResponse;
            toProto(message: _62.QueryPendingSendToEthResponse): Uint8Array;
            toProtoMsg(message: _62.QueryPendingSendToEthResponse): _62.QueryPendingSendToEthResponseProtoMsg;
        };
        IDSet: {
            encode(message: _61.IDSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.IDSet;
            fromPartial(object: {
                ids?: (string | number | import("long").Long)[];
            }): _61.IDSet;
            fromAmino(object: _61.IDSetAmino): _61.IDSet;
            toAmino(message: _61.IDSet): _61.IDSetAmino;
            fromAminoMsg(object: _61.IDSetAminoMsg): _61.IDSet;
            fromProtoMsg(message: _61.IDSetProtoMsg): _61.IDSet;
            toProto(message: _61.IDSet): Uint8Array;
            toProtoMsg(message: _61.IDSet): _61.IDSetProtoMsg;
        };
        BatchFees: {
            encode(message: _61.BatchFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.BatchFees;
            fromPartial(object: {
                token?: string;
                totalFees?: string;
                txCount?: string | number | import("long").Long;
            }): _61.BatchFees;
            fromAmino(object: _61.BatchFeesAmino): _61.BatchFees;
            toAmino(message: _61.BatchFees): _61.BatchFeesAmino;
            fromAminoMsg(object: _61.BatchFeesAminoMsg): _61.BatchFees;
            fromProtoMsg(message: _61.BatchFeesProtoMsg): _61.BatchFees;
            toProto(message: _61.BatchFees): Uint8Array;
            toProtoMsg(message: _61.BatchFees): _61.BatchFeesProtoMsg;
        };
        MsgSetOrchestratorAddress: {
            encode(message: _60.MsgSetOrchestratorAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSetOrchestratorAddress;
            fromPartial(object: {
                validator?: string;
                orchestrator?: string;
                ethAddress?: string;
            }): _60.MsgSetOrchestratorAddress;
            fromAmino(object: _60.MsgSetOrchestratorAddressAmino): _60.MsgSetOrchestratorAddress;
            toAmino(message: _60.MsgSetOrchestratorAddress): _60.MsgSetOrchestratorAddressAmino;
            fromAminoMsg(object: _60.MsgSetOrchestratorAddressAminoMsg): _60.MsgSetOrchestratorAddress;
            fromProtoMsg(message: _60.MsgSetOrchestratorAddressProtoMsg): _60.MsgSetOrchestratorAddress;
            toProto(message: _60.MsgSetOrchestratorAddress): Uint8Array;
            toProtoMsg(message: _60.MsgSetOrchestratorAddress): _60.MsgSetOrchestratorAddressProtoMsg;
        };
        MsgSetOrchestratorAddressResponse: {
            encode(_: _60.MsgSetOrchestratorAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSetOrchestratorAddressResponse;
            fromPartial(_: {}): _60.MsgSetOrchestratorAddressResponse;
            fromAmino(_: _60.MsgSetOrchestratorAddressResponseAmino): _60.MsgSetOrchestratorAddressResponse;
            toAmino(_: _60.MsgSetOrchestratorAddressResponse): _60.MsgSetOrchestratorAddressResponseAmino;
            fromAminoMsg(object: _60.MsgSetOrchestratorAddressResponseAminoMsg): _60.MsgSetOrchestratorAddressResponse;
            fromProtoMsg(message: _60.MsgSetOrchestratorAddressResponseProtoMsg): _60.MsgSetOrchestratorAddressResponse;
            toProto(message: _60.MsgSetOrchestratorAddressResponse): Uint8Array;
            toProtoMsg(message: _60.MsgSetOrchestratorAddressResponse): _60.MsgSetOrchestratorAddressResponseProtoMsg;
        };
        MsgValsetConfirm: {
            encode(message: _60.MsgValsetConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgValsetConfirm;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                orchestrator?: string;
                ethAddress?: string;
                signature?: string;
            }): _60.MsgValsetConfirm;
            fromAmino(object: _60.MsgValsetConfirmAmino): _60.MsgValsetConfirm;
            toAmino(message: _60.MsgValsetConfirm): _60.MsgValsetConfirmAmino;
            fromAminoMsg(object: _60.MsgValsetConfirmAminoMsg): _60.MsgValsetConfirm;
            fromProtoMsg(message: _60.MsgValsetConfirmProtoMsg): _60.MsgValsetConfirm;
            toProto(message: _60.MsgValsetConfirm): Uint8Array;
            toProtoMsg(message: _60.MsgValsetConfirm): _60.MsgValsetConfirmProtoMsg;
        };
        MsgValsetConfirmResponse: {
            encode(_: _60.MsgValsetConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgValsetConfirmResponse;
            fromPartial(_: {}): _60.MsgValsetConfirmResponse;
            fromAmino(_: _60.MsgValsetConfirmResponseAmino): _60.MsgValsetConfirmResponse;
            toAmino(_: _60.MsgValsetConfirmResponse): _60.MsgValsetConfirmResponseAmino;
            fromAminoMsg(object: _60.MsgValsetConfirmResponseAminoMsg): _60.MsgValsetConfirmResponse;
            fromProtoMsg(message: _60.MsgValsetConfirmResponseProtoMsg): _60.MsgValsetConfirmResponse;
            toProto(message: _60.MsgValsetConfirmResponse): Uint8Array;
            toProtoMsg(message: _60.MsgValsetConfirmResponse): _60.MsgValsetConfirmResponseProtoMsg;
        };
        MsgSendToEth: {
            encode(message: _60.MsgSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSendToEth;
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
            }): _60.MsgSendToEth;
            fromAmino(object: _60.MsgSendToEthAmino): _60.MsgSendToEth;
            toAmino(message: _60.MsgSendToEth): _60.MsgSendToEthAmino;
            fromAminoMsg(object: _60.MsgSendToEthAminoMsg): _60.MsgSendToEth;
            fromProtoMsg(message: _60.MsgSendToEthProtoMsg): _60.MsgSendToEth;
            toProto(message: _60.MsgSendToEth): Uint8Array;
            toProtoMsg(message: _60.MsgSendToEth): _60.MsgSendToEthProtoMsg;
        };
        MsgSendToEthResponse: {
            encode(_: _60.MsgSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSendToEthResponse;
            fromPartial(_: {}): _60.MsgSendToEthResponse;
            fromAmino(_: _60.MsgSendToEthResponseAmino): _60.MsgSendToEthResponse;
            toAmino(_: _60.MsgSendToEthResponse): _60.MsgSendToEthResponseAmino;
            fromAminoMsg(object: _60.MsgSendToEthResponseAminoMsg): _60.MsgSendToEthResponse;
            fromProtoMsg(message: _60.MsgSendToEthResponseProtoMsg): _60.MsgSendToEthResponse;
            toProto(message: _60.MsgSendToEthResponse): Uint8Array;
            toProtoMsg(message: _60.MsgSendToEthResponse): _60.MsgSendToEthResponseProtoMsg;
        };
        MsgRequestBatch: {
            encode(message: _60.MsgRequestBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgRequestBatch;
            fromPartial(object: {
                sender?: string;
                denom?: string;
            }): _60.MsgRequestBatch;
            fromAmino(object: _60.MsgRequestBatchAmino): _60.MsgRequestBatch;
            toAmino(message: _60.MsgRequestBatch): _60.MsgRequestBatchAmino;
            fromAminoMsg(object: _60.MsgRequestBatchAminoMsg): _60.MsgRequestBatch;
            fromProtoMsg(message: _60.MsgRequestBatchProtoMsg): _60.MsgRequestBatch;
            toProto(message: _60.MsgRequestBatch): Uint8Array;
            toProtoMsg(message: _60.MsgRequestBatch): _60.MsgRequestBatchProtoMsg;
        };
        MsgRequestBatchResponse: {
            encode(_: _60.MsgRequestBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgRequestBatchResponse;
            fromPartial(_: {}): _60.MsgRequestBatchResponse;
            fromAmino(_: _60.MsgRequestBatchResponseAmino): _60.MsgRequestBatchResponse;
            toAmino(_: _60.MsgRequestBatchResponse): _60.MsgRequestBatchResponseAmino;
            fromAminoMsg(object: _60.MsgRequestBatchResponseAminoMsg): _60.MsgRequestBatchResponse;
            fromProtoMsg(message: _60.MsgRequestBatchResponseProtoMsg): _60.MsgRequestBatchResponse;
            toProto(message: _60.MsgRequestBatchResponse): Uint8Array;
            toProtoMsg(message: _60.MsgRequestBatchResponse): _60.MsgRequestBatchResponseProtoMsg;
        };
        MsgConfirmBatch: {
            encode(message: _60.MsgConfirmBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgConfirmBatch;
            fromPartial(object: {
                nonce?: string | number | import("long").Long;
                tokenContract?: string;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _60.MsgConfirmBatch;
            fromAmino(object: _60.MsgConfirmBatchAmino): _60.MsgConfirmBatch;
            toAmino(message: _60.MsgConfirmBatch): _60.MsgConfirmBatchAmino;
            fromAminoMsg(object: _60.MsgConfirmBatchAminoMsg): _60.MsgConfirmBatch;
            fromProtoMsg(message: _60.MsgConfirmBatchProtoMsg): _60.MsgConfirmBatch;
            toProto(message: _60.MsgConfirmBatch): Uint8Array;
            toProtoMsg(message: _60.MsgConfirmBatch): _60.MsgConfirmBatchProtoMsg;
        };
        MsgConfirmBatchResponse: {
            encode(_: _60.MsgConfirmBatchResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgConfirmBatchResponse;
            fromPartial(_: {}): _60.MsgConfirmBatchResponse;
            fromAmino(_: _60.MsgConfirmBatchResponseAmino): _60.MsgConfirmBatchResponse;
            toAmino(_: _60.MsgConfirmBatchResponse): _60.MsgConfirmBatchResponseAmino;
            fromAminoMsg(object: _60.MsgConfirmBatchResponseAminoMsg): _60.MsgConfirmBatchResponse;
            fromProtoMsg(message: _60.MsgConfirmBatchResponseProtoMsg): _60.MsgConfirmBatchResponse;
            toProto(message: _60.MsgConfirmBatchResponse): Uint8Array;
            toProtoMsg(message: _60.MsgConfirmBatchResponse): _60.MsgConfirmBatchResponseProtoMsg;
        };
        MsgConfirmLogicCall: {
            encode(message: _60.MsgConfirmLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgConfirmLogicCall;
            fromPartial(object: {
                invalidationId?: string;
                invalidationNonce?: string | number | import("long").Long;
                ethSigner?: string;
                orchestrator?: string;
                signature?: string;
            }): _60.MsgConfirmLogicCall;
            fromAmino(object: _60.MsgConfirmLogicCallAmino): _60.MsgConfirmLogicCall;
            toAmino(message: _60.MsgConfirmLogicCall): _60.MsgConfirmLogicCallAmino;
            fromAminoMsg(object: _60.MsgConfirmLogicCallAminoMsg): _60.MsgConfirmLogicCall;
            fromProtoMsg(message: _60.MsgConfirmLogicCallProtoMsg): _60.MsgConfirmLogicCall;
            toProto(message: _60.MsgConfirmLogicCall): Uint8Array;
            toProtoMsg(message: _60.MsgConfirmLogicCall): _60.MsgConfirmLogicCallProtoMsg;
        };
        MsgConfirmLogicCallResponse: {
            encode(_: _60.MsgConfirmLogicCallResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgConfirmLogicCallResponse;
            fromPartial(_: {}): _60.MsgConfirmLogicCallResponse;
            fromAmino(_: _60.MsgConfirmLogicCallResponseAmino): _60.MsgConfirmLogicCallResponse;
            toAmino(_: _60.MsgConfirmLogicCallResponse): _60.MsgConfirmLogicCallResponseAmino;
            fromAminoMsg(object: _60.MsgConfirmLogicCallResponseAminoMsg): _60.MsgConfirmLogicCallResponse;
            fromProtoMsg(message: _60.MsgConfirmLogicCallResponseProtoMsg): _60.MsgConfirmLogicCallResponse;
            toProto(message: _60.MsgConfirmLogicCallResponse): Uint8Array;
            toProtoMsg(message: _60.MsgConfirmLogicCallResponse): _60.MsgConfirmLogicCallResponseProtoMsg;
        };
        MsgSendToCosmosClaim: {
            encode(message: _60.MsgSendToCosmosClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSendToCosmosClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                tokenContract?: string;
                amount?: string;
                ethereumSender?: string;
                cosmosReceiver?: string;
                orchestrator?: string;
            }): _60.MsgSendToCosmosClaim;
            fromAmino(object: _60.MsgSendToCosmosClaimAmino): _60.MsgSendToCosmosClaim;
            toAmino(message: _60.MsgSendToCosmosClaim): _60.MsgSendToCosmosClaimAmino;
            fromAminoMsg(object: _60.MsgSendToCosmosClaimAminoMsg): _60.MsgSendToCosmosClaim;
            fromProtoMsg(message: _60.MsgSendToCosmosClaimProtoMsg): _60.MsgSendToCosmosClaim;
            toProto(message: _60.MsgSendToCosmosClaim): Uint8Array;
            toProtoMsg(message: _60.MsgSendToCosmosClaim): _60.MsgSendToCosmosClaimProtoMsg;
        };
        MsgSendToCosmosClaimResponse: {
            encode(_: _60.MsgSendToCosmosClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSendToCosmosClaimResponse;
            fromPartial(_: {}): _60.MsgSendToCosmosClaimResponse;
            fromAmino(_: _60.MsgSendToCosmosClaimResponseAmino): _60.MsgSendToCosmosClaimResponse;
            toAmino(_: _60.MsgSendToCosmosClaimResponse): _60.MsgSendToCosmosClaimResponseAmino;
            fromAminoMsg(object: _60.MsgSendToCosmosClaimResponseAminoMsg): _60.MsgSendToCosmosClaimResponse;
            fromProtoMsg(message: _60.MsgSendToCosmosClaimResponseProtoMsg): _60.MsgSendToCosmosClaimResponse;
            toProto(message: _60.MsgSendToCosmosClaimResponse): Uint8Array;
            toProtoMsg(message: _60.MsgSendToCosmosClaimResponse): _60.MsgSendToCosmosClaimResponseProtoMsg;
        };
        MsgBatchSendToEthClaim: {
            encode(message: _60.MsgBatchSendToEthClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgBatchSendToEthClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                batchNonce?: string | number | import("long").Long;
                tokenContract?: string;
                orchestrator?: string;
            }): _60.MsgBatchSendToEthClaim;
            fromAmino(object: _60.MsgBatchSendToEthClaimAmino): _60.MsgBatchSendToEthClaim;
            toAmino(message: _60.MsgBatchSendToEthClaim): _60.MsgBatchSendToEthClaimAmino;
            fromAminoMsg(object: _60.MsgBatchSendToEthClaimAminoMsg): _60.MsgBatchSendToEthClaim;
            fromProtoMsg(message: _60.MsgBatchSendToEthClaimProtoMsg): _60.MsgBatchSendToEthClaim;
            toProto(message: _60.MsgBatchSendToEthClaim): Uint8Array;
            toProtoMsg(message: _60.MsgBatchSendToEthClaim): _60.MsgBatchSendToEthClaimProtoMsg;
        };
        MsgBatchSendToEthClaimResponse: {
            encode(_: _60.MsgBatchSendToEthClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgBatchSendToEthClaimResponse;
            fromPartial(_: {}): _60.MsgBatchSendToEthClaimResponse;
            fromAmino(_: _60.MsgBatchSendToEthClaimResponseAmino): _60.MsgBatchSendToEthClaimResponse;
            toAmino(_: _60.MsgBatchSendToEthClaimResponse): _60.MsgBatchSendToEthClaimResponseAmino;
            fromAminoMsg(object: _60.MsgBatchSendToEthClaimResponseAminoMsg): _60.MsgBatchSendToEthClaimResponse;
            fromProtoMsg(message: _60.MsgBatchSendToEthClaimResponseProtoMsg): _60.MsgBatchSendToEthClaimResponse;
            toProto(message: _60.MsgBatchSendToEthClaimResponse): Uint8Array;
            toProtoMsg(message: _60.MsgBatchSendToEthClaimResponse): _60.MsgBatchSendToEthClaimResponseProtoMsg;
        };
        MsgERC20DeployedClaim: {
            encode(message: _60.MsgERC20DeployedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgERC20DeployedClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                cosmosDenom?: string;
                tokenContract?: string;
                name?: string;
                symbol?: string;
                decimals?: string | number | import("long").Long;
                orchestrator?: string;
            }): _60.MsgERC20DeployedClaim;
            fromAmino(object: _60.MsgERC20DeployedClaimAmino): _60.MsgERC20DeployedClaim;
            toAmino(message: _60.MsgERC20DeployedClaim): _60.MsgERC20DeployedClaimAmino;
            fromAminoMsg(object: _60.MsgERC20DeployedClaimAminoMsg): _60.MsgERC20DeployedClaim;
            fromProtoMsg(message: _60.MsgERC20DeployedClaimProtoMsg): _60.MsgERC20DeployedClaim;
            toProto(message: _60.MsgERC20DeployedClaim): Uint8Array;
            toProtoMsg(message: _60.MsgERC20DeployedClaim): _60.MsgERC20DeployedClaimProtoMsg;
        };
        MsgERC20DeployedClaimResponse: {
            encode(_: _60.MsgERC20DeployedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgERC20DeployedClaimResponse;
            fromPartial(_: {}): _60.MsgERC20DeployedClaimResponse;
            fromAmino(_: _60.MsgERC20DeployedClaimResponseAmino): _60.MsgERC20DeployedClaimResponse;
            toAmino(_: _60.MsgERC20DeployedClaimResponse): _60.MsgERC20DeployedClaimResponseAmino;
            fromAminoMsg(object: _60.MsgERC20DeployedClaimResponseAminoMsg): _60.MsgERC20DeployedClaimResponse;
            fromProtoMsg(message: _60.MsgERC20DeployedClaimResponseProtoMsg): _60.MsgERC20DeployedClaimResponse;
            toProto(message: _60.MsgERC20DeployedClaimResponse): Uint8Array;
            toProtoMsg(message: _60.MsgERC20DeployedClaimResponse): _60.MsgERC20DeployedClaimResponseProtoMsg;
        };
        MsgLogicCallExecutedClaim: {
            encode(message: _60.MsgLogicCallExecutedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgLogicCallExecutedClaim;
            fromPartial(object: {
                eventNonce?: string | number | import("long").Long;
                blockHeight?: string | number | import("long").Long;
                invalidationId?: Uint8Array;
                invalidationNonce?: string | number | import("long").Long;
                orchestrator?: string;
            }): _60.MsgLogicCallExecutedClaim;
            fromAmino(object: _60.MsgLogicCallExecutedClaimAmino): _60.MsgLogicCallExecutedClaim;
            toAmino(message: _60.MsgLogicCallExecutedClaim): _60.MsgLogicCallExecutedClaimAmino;
            fromAminoMsg(object: _60.MsgLogicCallExecutedClaimAminoMsg): _60.MsgLogicCallExecutedClaim;
            fromProtoMsg(message: _60.MsgLogicCallExecutedClaimProtoMsg): _60.MsgLogicCallExecutedClaim;
            toProto(message: _60.MsgLogicCallExecutedClaim): Uint8Array;
            toProtoMsg(message: _60.MsgLogicCallExecutedClaim): _60.MsgLogicCallExecutedClaimProtoMsg;
        };
        MsgLogicCallExecutedClaimResponse: {
            encode(_: _60.MsgLogicCallExecutedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgLogicCallExecutedClaimResponse;
            fromPartial(_: {}): _60.MsgLogicCallExecutedClaimResponse;
            fromAmino(_: _60.MsgLogicCallExecutedClaimResponseAmino): _60.MsgLogicCallExecutedClaimResponse;
            toAmino(_: _60.MsgLogicCallExecutedClaimResponse): _60.MsgLogicCallExecutedClaimResponseAmino;
            fromAminoMsg(object: _60.MsgLogicCallExecutedClaimResponseAminoMsg): _60.MsgLogicCallExecutedClaimResponse;
            fromProtoMsg(message: _60.MsgLogicCallExecutedClaimResponseProtoMsg): _60.MsgLogicCallExecutedClaimResponse;
            toProto(message: _60.MsgLogicCallExecutedClaimResponse): Uint8Array;
            toProtoMsg(message: _60.MsgLogicCallExecutedClaimResponse): _60.MsgLogicCallExecutedClaimResponseProtoMsg;
        };
        MsgValsetUpdatedClaim: {
            encode(message: _60.MsgValsetUpdatedClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgValsetUpdatedClaim;
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
            }): _60.MsgValsetUpdatedClaim;
            fromAmino(object: _60.MsgValsetUpdatedClaimAmino): _60.MsgValsetUpdatedClaim;
            toAmino(message: _60.MsgValsetUpdatedClaim): _60.MsgValsetUpdatedClaimAmino;
            fromAminoMsg(object: _60.MsgValsetUpdatedClaimAminoMsg): _60.MsgValsetUpdatedClaim;
            fromProtoMsg(message: _60.MsgValsetUpdatedClaimProtoMsg): _60.MsgValsetUpdatedClaim;
            toProto(message: _60.MsgValsetUpdatedClaim): Uint8Array;
            toProtoMsg(message: _60.MsgValsetUpdatedClaim): _60.MsgValsetUpdatedClaimProtoMsg;
        };
        MsgValsetUpdatedClaimResponse: {
            encode(_: _60.MsgValsetUpdatedClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgValsetUpdatedClaimResponse;
            fromPartial(_: {}): _60.MsgValsetUpdatedClaimResponse;
            fromAmino(_: _60.MsgValsetUpdatedClaimResponseAmino): _60.MsgValsetUpdatedClaimResponse;
            toAmino(_: _60.MsgValsetUpdatedClaimResponse): _60.MsgValsetUpdatedClaimResponseAmino;
            fromAminoMsg(object: _60.MsgValsetUpdatedClaimResponseAminoMsg): _60.MsgValsetUpdatedClaimResponse;
            fromProtoMsg(message: _60.MsgValsetUpdatedClaimResponseProtoMsg): _60.MsgValsetUpdatedClaimResponse;
            toProto(message: _60.MsgValsetUpdatedClaimResponse): Uint8Array;
            toProtoMsg(message: _60.MsgValsetUpdatedClaimResponse): _60.MsgValsetUpdatedClaimResponseProtoMsg;
        };
        MsgCancelSendToEth: {
            encode(message: _60.MsgCancelSendToEth, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgCancelSendToEth;
            fromPartial(object: {
                transactionId?: string | number | import("long").Long;
                sender?: string;
            }): _60.MsgCancelSendToEth;
            fromAmino(object: _60.MsgCancelSendToEthAmino): _60.MsgCancelSendToEth;
            toAmino(message: _60.MsgCancelSendToEth): _60.MsgCancelSendToEthAmino;
            fromAminoMsg(object: _60.MsgCancelSendToEthAminoMsg): _60.MsgCancelSendToEth;
            fromProtoMsg(message: _60.MsgCancelSendToEthProtoMsg): _60.MsgCancelSendToEth;
            toProto(message: _60.MsgCancelSendToEth): Uint8Array;
            toProtoMsg(message: _60.MsgCancelSendToEth): _60.MsgCancelSendToEthProtoMsg;
        };
        MsgCancelSendToEthResponse: {
            encode(_: _60.MsgCancelSendToEthResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgCancelSendToEthResponse;
            fromPartial(_: {}): _60.MsgCancelSendToEthResponse;
            fromAmino(_: _60.MsgCancelSendToEthResponseAmino): _60.MsgCancelSendToEthResponse;
            toAmino(_: _60.MsgCancelSendToEthResponse): _60.MsgCancelSendToEthResponseAmino;
            fromAminoMsg(object: _60.MsgCancelSendToEthResponseAminoMsg): _60.MsgCancelSendToEthResponse;
            fromProtoMsg(message: _60.MsgCancelSendToEthResponseProtoMsg): _60.MsgCancelSendToEthResponse;
            toProto(message: _60.MsgCancelSendToEthResponse): Uint8Array;
            toProtoMsg(message: _60.MsgCancelSendToEthResponse): _60.MsgCancelSendToEthResponseProtoMsg;
        };
        MsgSubmitBadSignatureEvidence: {
            encode(message: _60.MsgSubmitBadSignatureEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSubmitBadSignatureEvidence;
            fromPartial(object: {
                subject?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
                signature?: string;
                sender?: string;
            }): _60.MsgSubmitBadSignatureEvidence;
            fromAmino(object: _60.MsgSubmitBadSignatureEvidenceAmino): _60.MsgSubmitBadSignatureEvidence;
            toAmino(message: _60.MsgSubmitBadSignatureEvidence): _60.MsgSubmitBadSignatureEvidenceAmino;
            fromAminoMsg(object: _60.MsgSubmitBadSignatureEvidenceAminoMsg): _60.MsgSubmitBadSignatureEvidence;
            fromProtoMsg(message: _60.MsgSubmitBadSignatureEvidenceProtoMsg): _60.MsgSubmitBadSignatureEvidence;
            toProto(message: _60.MsgSubmitBadSignatureEvidence): Uint8Array;
            toProtoMsg(message: _60.MsgSubmitBadSignatureEvidence): _60.MsgSubmitBadSignatureEvidenceProtoMsg;
        };
        MsgSubmitBadSignatureEvidenceResponse: {
            encode(_: _60.MsgSubmitBadSignatureEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSubmitBadSignatureEvidenceResponse;
            fromPartial(_: {}): _60.MsgSubmitBadSignatureEvidenceResponse;
            fromAmino(_: _60.MsgSubmitBadSignatureEvidenceResponseAmino): _60.MsgSubmitBadSignatureEvidenceResponse;
            toAmino(_: _60.MsgSubmitBadSignatureEvidenceResponse): _60.MsgSubmitBadSignatureEvidenceResponseAmino;
            fromAminoMsg(object: _60.MsgSubmitBadSignatureEvidenceResponseAminoMsg): _60.MsgSubmitBadSignatureEvidenceResponse;
            fromProtoMsg(message: _60.MsgSubmitBadSignatureEvidenceResponseProtoMsg): _60.MsgSubmitBadSignatureEvidenceResponse;
            toProto(message: _60.MsgSubmitBadSignatureEvidenceResponse): Uint8Array;
            toProtoMsg(message: _60.MsgSubmitBadSignatureEvidenceResponse): _60.MsgSubmitBadSignatureEvidenceResponseProtoMsg;
        };
        Params: {
            encode(message: _59.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Params;
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
            }): _59.Params;
            fromAmino(object: _59.ParamsAmino): _59.Params;
            toAmino(message: _59.Params): _59.ParamsAmino;
            fromAminoMsg(object: _59.ParamsAminoMsg): _59.Params;
            fromProtoMsg(message: _59.ParamsProtoMsg): _59.Params;
            toProto(message: _59.Params): Uint8Array;
            toProtoMsg(message: _59.Params): _59.ParamsProtoMsg;
        };
        GenesisState: {
            encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
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
            }): _59.GenesisState;
            fromAmino(object: _59.GenesisStateAmino): _59.GenesisState;
            toAmino(message: _59.GenesisState): _59.GenesisStateAmino;
            fromAminoMsg(object: _59.GenesisStateAminoMsg): _59.GenesisState;
            fromProtoMsg(message: _59.GenesisStateProtoMsg): _59.GenesisState;
            toProto(message: _59.GenesisState): Uint8Array;
            toProtoMsg(message: _59.GenesisState): _59.GenesisStateProtoMsg;
        };
        GravityNonces: {
            encode(message: _59.GravityNonces, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GravityNonces;
            fromPartial(object: {
                latestValsetNonce?: string | number | import("long").Long;
                lastObservedNonce?: string | number | import("long").Long;
                lastSlashedValsetNonce?: string | number | import("long").Long;
                lastSlashedBatchBlock?: string | number | import("long").Long;
                lastSlashedLogicCallBlock?: string | number | import("long").Long;
                lastTxPoolId?: string | number | import("long").Long;
                lastBatchId?: string | number | import("long").Long;
            }): _59.GravityNonces;
            fromAmino(object: _59.GravityNoncesAmino): _59.GravityNonces;
            toAmino(message: _59.GravityNonces): _59.GravityNoncesAmino;
            fromAminoMsg(object: _59.GravityNoncesAminoMsg): _59.GravityNonces;
            fromProtoMsg(message: _59.GravityNoncesProtoMsg): _59.GravityNonces;
            toProto(message: _59.GravityNonces): Uint8Array;
            toProtoMsg(message: _59.GravityNonces): _59.GravityNoncesProtoMsg;
        };
        signTypeFromJSON(object: any): _58.SignType;
        signTypeToJSON(object: _58.SignType): string;
        SignType: typeof _58.SignType;
        SignTypeSDKType: typeof _58.SignType;
        SignTypeAmino: typeof _58.SignType;
        OutgoingTxBatch: {
            encode(message: _57.OutgoingTxBatch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.OutgoingTxBatch;
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
            }): _57.OutgoingTxBatch;
            fromAmino(object: _57.OutgoingTxBatchAmino): _57.OutgoingTxBatch;
            toAmino(message: _57.OutgoingTxBatch): _57.OutgoingTxBatchAmino;
            fromAminoMsg(object: _57.OutgoingTxBatchAminoMsg): _57.OutgoingTxBatch;
            fromProtoMsg(message: _57.OutgoingTxBatchProtoMsg): _57.OutgoingTxBatch;
            toProto(message: _57.OutgoingTxBatch): Uint8Array;
            toProtoMsg(message: _57.OutgoingTxBatch): _57.OutgoingTxBatchProtoMsg;
        };
        OutgoingTransferTx: {
            encode(message: _57.OutgoingTransferTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.OutgoingTransferTx;
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
            }): _57.OutgoingTransferTx;
            fromAmino(object: _57.OutgoingTransferTxAmino): _57.OutgoingTransferTx;
            toAmino(message: _57.OutgoingTransferTx): _57.OutgoingTransferTxAmino;
            fromAminoMsg(object: _57.OutgoingTransferTxAminoMsg): _57.OutgoingTransferTx;
            fromProtoMsg(message: _57.OutgoingTransferTxProtoMsg): _57.OutgoingTransferTx;
            toProto(message: _57.OutgoingTransferTx): Uint8Array;
            toProtoMsg(message: _57.OutgoingTransferTx): _57.OutgoingTransferTxProtoMsg;
        };
        OutgoingLogicCall: {
            encode(message: _57.OutgoingLogicCall, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.OutgoingLogicCall;
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
            }): _57.OutgoingLogicCall;
            fromAmino(object: _57.OutgoingLogicCallAmino): _57.OutgoingLogicCall;
            toAmino(message: _57.OutgoingLogicCall): _57.OutgoingLogicCallAmino;
            fromAminoMsg(object: _57.OutgoingLogicCallAminoMsg): _57.OutgoingLogicCall;
            fromProtoMsg(message: _57.OutgoingLogicCallProtoMsg): _57.OutgoingLogicCall;
            toProto(message: _57.OutgoingLogicCall): Uint8Array;
            toProtoMsg(message: _57.OutgoingLogicCall): _57.OutgoingLogicCallProtoMsg;
        };
        claimTypeFromJSON(object: any): _56.ClaimType;
        claimTypeToJSON(object: _56.ClaimType): string;
        ClaimType: typeof _56.ClaimType;
        ClaimTypeSDKType: typeof _56.ClaimType;
        ClaimTypeAmino: typeof _56.ClaimType;
        Attestation: {
            encode(message: _56.Attestation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Attestation;
            fromPartial(object: {
                observed?: boolean;
                votes?: string[];
                height?: string | number | import("long").Long;
                claim?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }): _56.Attestation;
            fromAmino(object: _56.AttestationAmino): _56.Attestation;
            toAmino(message: _56.Attestation): _56.AttestationAmino;
            fromAminoMsg(object: _56.AttestationAminoMsg): _56.Attestation;
            fromProtoMsg(message: _56.AttestationProtoMsg): _56.Attestation;
            toProto(message: _56.Attestation): Uint8Array;
            toProtoMsg(message: _56.Attestation): _56.AttestationProtoMsg;
        };
        ERC20Token: {
            encode(message: _56.ERC20Token, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.ERC20Token;
            fromPartial(object: {
                contract?: string;
                amount?: string;
            }): _56.ERC20Token;
            fromAmino(object: _56.ERC20TokenAmino): _56.ERC20Token;
            toAmino(message: _56.ERC20Token): _56.ERC20TokenAmino;
            fromAminoMsg(object: _56.ERC20TokenAminoMsg): _56.ERC20Token;
            fromProtoMsg(message: _56.ERC20TokenProtoMsg): _56.ERC20Token;
            toProto(message: _56.ERC20Token): Uint8Array;
            toProtoMsg(message: _56.ERC20Token): _56.ERC20TokenProtoMsg;
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
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            gravity: {
                v1: _145.MsgClientImpl;
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
                    params(request?: _62.QueryParamsRequest): Promise<_62.QueryParamsResponse>;
                    currentValset(request?: _62.QueryCurrentValsetRequest): Promise<_62.QueryCurrentValsetResponse>;
                    valsetRequest(request: _62.QueryValsetRequestRequest): Promise<_62.QueryValsetRequestResponse>;
                    valsetConfirm(request: _62.QueryValsetConfirmRequest): Promise<_62.QueryValsetConfirmResponse>;
                    valsetConfirmsByNonce(request: _62.QueryValsetConfirmsByNonceRequest): Promise<_62.QueryValsetConfirmsByNonceResponse>;
                    lastValsetRequests(request?: _62.QueryLastValsetRequestsRequest): Promise<_62.QueryLastValsetRequestsResponse>;
                    lastPendingValsetRequestByAddr(request: _62.QueryLastPendingValsetRequestByAddrRequest): Promise<_62.QueryLastPendingValsetRequestByAddrResponse>;
                    lastPendingBatchRequestByAddr(request: _62.QueryLastPendingBatchRequestByAddrRequest): Promise<_62.QueryLastPendingBatchRequestByAddrResponse>;
                    lastPendingLogicCallByAddr(request: _62.QueryLastPendingLogicCallByAddrRequest): Promise<_62.QueryLastPendingLogicCallByAddrResponse>;
                    lastEventNonceByAddr(request: _62.QueryLastEventNonceByAddrRequest): Promise<_62.QueryLastEventNonceByAddrResponse>;
                    batchFees(request?: _62.QueryBatchFeeRequest): Promise<_62.QueryBatchFeeResponse>;
                    outgoingTxBatches(request?: _62.QueryOutgoingTxBatchesRequest): Promise<_62.QueryOutgoingTxBatchesResponse>;
                    outgoingLogicCalls(request?: _62.QueryOutgoingLogicCallsRequest): Promise<_62.QueryOutgoingLogicCallsResponse>;
                    batchRequestByNonce(request: _62.QueryBatchRequestByNonceRequest): Promise<_62.QueryBatchRequestByNonceResponse>;
                    batchConfirms(request: _62.QueryBatchConfirmsRequest): Promise<_62.QueryBatchConfirmsResponse>;
                    logicConfirms(request: _62.QueryLogicConfirmsRequest): Promise<_62.QueryLogicConfirmsResponse>;
                    eRC20ToDenom(request: _62.QueryERC20ToDenomRequest): Promise<_62.QueryERC20ToDenomResponse>;
                    denomToERC20(request: _62.QueryDenomToERC20Request): Promise<_62.QueryDenomToERC20Response>;
                    getAttestations(request: _62.QueryAttestationsRequest): Promise<_62.QueryAttestationsResponse>;
                    getDelegateKeyByValidator(request: _62.QueryDelegateKeysByValidatorAddress): Promise<_62.QueryDelegateKeysByValidatorAddressResponse>;
                    getDelegateKeyByEth(request: _62.QueryDelegateKeysByEthAddress): Promise<_62.QueryDelegateKeysByEthAddressResponse>;
                    getDelegateKeyByOrchestrator(request: _62.QueryDelegateKeysByOrchestratorAddress): Promise<_62.QueryDelegateKeysByOrchestratorAddressResponse>;
                    getPendingSendToEth(request: _62.QueryPendingSendToEth): Promise<_62.QueryPendingSendToEthResponse>;
                };
            };
        }>;
    };
}
