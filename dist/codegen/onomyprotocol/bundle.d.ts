/// <reference types="long" />
import * as _70 from "./dao/v1/dao";
import * as _71 from "./dao/v1/genesis";
import * as _72 from "./dao/v1/params";
import * as _73 from "./dao/v1/query";
import * as _111 from "./dao/v1/query.rpc.Query";
export declare namespace onomyprotocol {
    namespace dao {
        const v1: {
            QueryClientImpl: typeof _111.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                treasury(request?: _73.QueryTreasuryRequest): Promise<_73.QueryTreasuryResponse>;
            };
            QueryParamsRequest: {
                encode(_: _73.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsRequest;
                fromPartial(_: {}): _73.QueryParamsRequest;
                fromAmino(_: _73.QueryParamsRequestAmino): _73.QueryParamsRequest;
                toAmino(_: _73.QueryParamsRequest): _73.QueryParamsRequestAmino;
                fromAminoMsg(object: _73.QueryParamsRequestAminoMsg): _73.QueryParamsRequest;
                fromProtoMsg(message: _73.QueryParamsRequestProtoMsg): _73.QueryParamsRequest;
                toProto(message: _73.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _73.QueryParamsRequest): _73.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _73.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        withdrawRewardPeriod?: string | number | import("long").Long;
                        poolRate?: Uint8Array;
                        maxProposalRate?: Uint8Array;
                        maxValCommission?: Uint8Array;
                    };
                }): _73.QueryParamsResponse;
                fromAmino(object: _73.QueryParamsResponseAmino): _73.QueryParamsResponse;
                toAmino(message: _73.QueryParamsResponse): _73.QueryParamsResponseAmino;
                fromAminoMsg(object: _73.QueryParamsResponseAminoMsg): _73.QueryParamsResponse;
                fromProtoMsg(message: _73.QueryParamsResponseProtoMsg): _73.QueryParamsResponse;
                toProto(message: _73.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _73.QueryParamsResponse): _73.QueryParamsResponseProtoMsg;
            };
            QueryTreasuryRequest: {
                encode(_: _73.QueryTreasuryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryTreasuryRequest;
                fromPartial(_: {}): _73.QueryTreasuryRequest;
                fromAmino(_: _73.QueryTreasuryRequestAmino): _73.QueryTreasuryRequest;
                toAmino(_: _73.QueryTreasuryRequest): _73.QueryTreasuryRequestAmino;
                fromAminoMsg(object: _73.QueryTreasuryRequestAminoMsg): _73.QueryTreasuryRequest;
                fromProtoMsg(message: _73.QueryTreasuryRequestProtoMsg): _73.QueryTreasuryRequest;
                toProto(message: _73.QueryTreasuryRequest): Uint8Array;
                toProtoMsg(message: _73.QueryTreasuryRequest): _73.QueryTreasuryRequestProtoMsg;
            };
            QueryTreasuryResponse: {
                encode(message: _73.QueryTreasuryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryTreasuryResponse;
                fromPartial(object: {
                    treasuryBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _73.QueryTreasuryResponse;
                fromAmino(object: _73.QueryTreasuryResponseAmino): _73.QueryTreasuryResponse;
                toAmino(message: _73.QueryTreasuryResponse): _73.QueryTreasuryResponseAmino;
                fromAminoMsg(object: _73.QueryTreasuryResponseAminoMsg): _73.QueryTreasuryResponse;
                fromProtoMsg(message: _73.QueryTreasuryResponseProtoMsg): _73.QueryTreasuryResponse;
                toProto(message: _73.QueryTreasuryResponse): Uint8Array;
                toProtoMsg(message: _73.QueryTreasuryResponse): _73.QueryTreasuryResponseProtoMsg;
            };
            Params: {
                encode(message: _72.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Params;
                fromPartial(object: {
                    withdrawRewardPeriod?: string | number | import("long").Long;
                    poolRate?: Uint8Array;
                    maxProposalRate?: Uint8Array;
                    maxValCommission?: Uint8Array;
                }): _72.Params;
                fromAmino(object: _72.ParamsAmino): _72.Params;
                toAmino(message: _72.Params): _72.ParamsAmino;
                fromAminoMsg(object: _72.ParamsAminoMsg): _72.Params;
                fromProtoMsg(message: _72.ParamsProtoMsg): _72.Params;
                toProto(message: _72.Params): Uint8Array;
                toProtoMsg(message: _72.Params): _72.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                fromPartial(object: {
                    params?: {
                        withdrawRewardPeriod?: string | number | import("long").Long;
                        poolRate?: Uint8Array;
                        maxProposalRate?: Uint8Array;
                        maxValCommission?: Uint8Array;
                    };
                    treasuryBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _71.GenesisState;
                fromAmino(object: _71.GenesisStateAmino): _71.GenesisState;
                toAmino(message: _71.GenesisState): _71.GenesisStateAmino;
                fromAminoMsg(object: _71.GenesisStateAminoMsg): _71.GenesisState;
                fromProtoMsg(message: _71.GenesisStateProtoMsg): _71.GenesisState;
                toProto(message: _71.GenesisState): Uint8Array;
                toProtoMsg(message: _71.GenesisState): _71.GenesisStateProtoMsg;
            };
            FundTreasuryProposal: {
                encode(message: _70.FundTreasuryProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.FundTreasuryProposal;
                fromPartial(object: {
                    sender?: string;
                    title?: string;
                    description?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _70.FundTreasuryProposal;
                fromAmino(object: _70.FundTreasuryProposalAmino): _70.FundTreasuryProposal;
                toAmino(message: _70.FundTreasuryProposal): _70.FundTreasuryProposalAmino;
                fromAminoMsg(object: _70.FundTreasuryProposalAminoMsg): _70.FundTreasuryProposal;
                fromProtoMsg(message: _70.FundTreasuryProposalProtoMsg): _70.FundTreasuryProposal;
                toProto(message: _70.FundTreasuryProposal): Uint8Array;
                toProtoMsg(message: _70.FundTreasuryProposal): _70.FundTreasuryProposalProtoMsg;
            };
            ExchangeWithTreasuryProposal: {
                encode(message: _70.ExchangeWithTreasuryProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ExchangeWithTreasuryProposal;
                fromPartial(object: {
                    sender?: string;
                    title?: string;
                    description?: string;
                    coinsPairs?: {
                        coinAsk?: {
                            denom?: string;
                            amount?: string;
                        };
                        coinBid?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                }): _70.ExchangeWithTreasuryProposal;
                fromAmino(object: _70.ExchangeWithTreasuryProposalAmino): _70.ExchangeWithTreasuryProposal;
                toAmino(message: _70.ExchangeWithTreasuryProposal): _70.ExchangeWithTreasuryProposalAmino;
                fromAminoMsg(object: _70.ExchangeWithTreasuryProposalAminoMsg): _70.ExchangeWithTreasuryProposal;
                fromProtoMsg(message: _70.ExchangeWithTreasuryProposalProtoMsg): _70.ExchangeWithTreasuryProposal;
                toProto(message: _70.ExchangeWithTreasuryProposal): Uint8Array;
                toProtoMsg(message: _70.ExchangeWithTreasuryProposal): _70.ExchangeWithTreasuryProposalProtoMsg;
            };
            CoinsExchangePair: {
                encode(message: _70.CoinsExchangePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.CoinsExchangePair;
                fromPartial(object: {
                    coinAsk?: {
                        denom?: string;
                        amount?: string;
                    };
                    coinBid?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _70.CoinsExchangePair;
                fromAmino(object: _70.CoinsExchangePairAmino): _70.CoinsExchangePair;
                toAmino(message: _70.CoinsExchangePair): _70.CoinsExchangePairAmino;
                fromAminoMsg(object: _70.CoinsExchangePairAminoMsg): _70.CoinsExchangePair;
                fromProtoMsg(message: _70.CoinsExchangePairProtoMsg): _70.CoinsExchangePair;
                toProto(message: _70.CoinsExchangePair): Uint8Array;
                toProtoMsg(message: _70.CoinsExchangePair): _70.CoinsExchangePairProtoMsg;
            };
            FundAccountProposal: {
                encode(message: _70.FundAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.FundAccountProposal;
                fromPartial(object: {
                    recipient?: string;
                    title?: string;
                    description?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _70.FundAccountProposal;
                fromAmino(object: _70.FundAccountProposalAmino): _70.FundAccountProposal;
                toAmino(message: _70.FundAccountProposal): _70.FundAccountProposalAmino;
                fromAminoMsg(object: _70.FundAccountProposalAminoMsg): _70.FundAccountProposal;
                fromProtoMsg(message: _70.FundAccountProposalProtoMsg): _70.FundAccountProposal;
                toProto(message: _70.FundAccountProposal): Uint8Array;
                toProtoMsg(message: _70.FundAccountProposal): _70.FundAccountProposalProtoMsg;
            };
        };
    }
    const ClientFactory: {
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
            onomyprotocol: {
                dao: {
                    v1: {
                        params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                        treasury(request?: _73.QueryTreasuryRequest): Promise<_73.QueryTreasuryResponse>;
                    };
                };
            };
        }>;
    };
}
