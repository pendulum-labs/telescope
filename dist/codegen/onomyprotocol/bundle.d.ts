/// <reference types="long" />
import * as _73 from "./dao/v1/dao";
import * as _74 from "./dao/v1/genesis";
import * as _75 from "./dao/v1/params";
import * as _76 from "./dao/v1/query";
import * as _115 from "./dao/v1/query.rpc.Query";
export declare namespace onomyprotocol {
    namespace dao {
        const v1: {
            QueryClientImpl: typeof _115.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                treasury(request?: _76.QueryTreasuryRequest): Promise<_76.QueryTreasuryResponse>;
            };
            QueryParamsRequest: {
                encode(_: _76.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsRequest;
                fromPartial(_: {}): _76.QueryParamsRequest;
                fromAmino(_: _76.QueryParamsRequestAmino): _76.QueryParamsRequest;
                toAmino(_: _76.QueryParamsRequest): _76.QueryParamsRequestAmino;
                fromAminoMsg(object: _76.QueryParamsRequestAminoMsg): _76.QueryParamsRequest;
                fromProtoMsg(message: _76.QueryParamsRequestProtoMsg): _76.QueryParamsRequest;
                toProto(message: _76.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _76.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        withdrawRewardPeriod?: string | number | import("long").Long;
                        poolRate?: Uint8Array;
                        maxProposalRate?: Uint8Array;
                        maxValCommission?: Uint8Array;
                    };
                }): _76.QueryParamsResponse;
                fromAmino(object: _76.QueryParamsResponseAmino): _76.QueryParamsResponse;
                toAmino(message: _76.QueryParamsResponse): _76.QueryParamsResponseAmino;
                fromAminoMsg(object: _76.QueryParamsResponseAminoMsg): _76.QueryParamsResponse;
                fromProtoMsg(message: _76.QueryParamsResponseProtoMsg): _76.QueryParamsResponse;
                toProto(message: _76.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseProtoMsg;
            };
            QueryTreasuryRequest: {
                encode(_: _76.QueryTreasuryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryTreasuryRequest;
                fromPartial(_: {}): _76.QueryTreasuryRequest;
                fromAmino(_: _76.QueryTreasuryRequestAmino): _76.QueryTreasuryRequest;
                toAmino(_: _76.QueryTreasuryRequest): _76.QueryTreasuryRequestAmino;
                fromAminoMsg(object: _76.QueryTreasuryRequestAminoMsg): _76.QueryTreasuryRequest;
                fromProtoMsg(message: _76.QueryTreasuryRequestProtoMsg): _76.QueryTreasuryRequest;
                toProto(message: _76.QueryTreasuryRequest): Uint8Array;
                toProtoMsg(message: _76.QueryTreasuryRequest): _76.QueryTreasuryRequestProtoMsg;
            };
            QueryTreasuryResponse: {
                encode(message: _76.QueryTreasuryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryTreasuryResponse;
                fromPartial(object: {
                    treasuryBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _76.QueryTreasuryResponse;
                fromAmino(object: _76.QueryTreasuryResponseAmino): _76.QueryTreasuryResponse;
                toAmino(message: _76.QueryTreasuryResponse): _76.QueryTreasuryResponseAmino;
                fromAminoMsg(object: _76.QueryTreasuryResponseAminoMsg): _76.QueryTreasuryResponse;
                fromProtoMsg(message: _76.QueryTreasuryResponseProtoMsg): _76.QueryTreasuryResponse;
                toProto(message: _76.QueryTreasuryResponse): Uint8Array;
                toProtoMsg(message: _76.QueryTreasuryResponse): _76.QueryTreasuryResponseProtoMsg;
            };
            Params: {
                encode(message: _75.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Params;
                fromPartial(object: {
                    withdrawRewardPeriod?: string | number | import("long").Long;
                    poolRate?: Uint8Array;
                    maxProposalRate?: Uint8Array;
                    maxValCommission?: Uint8Array;
                }): _75.Params;
                fromAmino(object: _75.ParamsAmino): _75.Params;
                toAmino(message: _75.Params): _75.ParamsAmino;
                fromAminoMsg(object: _75.ParamsAminoMsg): _75.Params;
                fromProtoMsg(message: _75.ParamsProtoMsg): _75.Params;
                toProto(message: _75.Params): Uint8Array;
                toProtoMsg(message: _75.Params): _75.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GenesisState;
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
                }): _74.GenesisState;
                fromAmino(object: _74.GenesisStateAmino): _74.GenesisState;
                toAmino(message: _74.GenesisState): _74.GenesisStateAmino;
                fromAminoMsg(object: _74.GenesisStateAminoMsg): _74.GenesisState;
                fromProtoMsg(message: _74.GenesisStateProtoMsg): _74.GenesisState;
                toProto(message: _74.GenesisState): Uint8Array;
                toProtoMsg(message: _74.GenesisState): _74.GenesisStateProtoMsg;
            };
            FundTreasuryProposal: {
                encode(message: _73.FundTreasuryProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.FundTreasuryProposal;
                fromPartial(object: {
                    sender?: string;
                    title?: string;
                    description?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _73.FundTreasuryProposal;
                fromAmino(object: _73.FundTreasuryProposalAmino): _73.FundTreasuryProposal;
                toAmino(message: _73.FundTreasuryProposal): _73.FundTreasuryProposalAmino;
                fromAminoMsg(object: _73.FundTreasuryProposalAminoMsg): _73.FundTreasuryProposal;
                fromProtoMsg(message: _73.FundTreasuryProposalProtoMsg): _73.FundTreasuryProposal;
                toProto(message: _73.FundTreasuryProposal): Uint8Array;
                toProtoMsg(message: _73.FundTreasuryProposal): _73.FundTreasuryProposalProtoMsg;
            };
            ExchangeWithTreasuryProposal: {
                encode(message: _73.ExchangeWithTreasuryProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.ExchangeWithTreasuryProposal;
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
                }): _73.ExchangeWithTreasuryProposal;
                fromAmino(object: _73.ExchangeWithTreasuryProposalAmino): _73.ExchangeWithTreasuryProposal;
                toAmino(message: _73.ExchangeWithTreasuryProposal): _73.ExchangeWithTreasuryProposalAmino;
                fromAminoMsg(object: _73.ExchangeWithTreasuryProposalAminoMsg): _73.ExchangeWithTreasuryProposal;
                fromProtoMsg(message: _73.ExchangeWithTreasuryProposalProtoMsg): _73.ExchangeWithTreasuryProposal;
                toProto(message: _73.ExchangeWithTreasuryProposal): Uint8Array;
                toProtoMsg(message: _73.ExchangeWithTreasuryProposal): _73.ExchangeWithTreasuryProposalProtoMsg;
            };
            CoinsExchangePair: {
                encode(message: _73.CoinsExchangePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CoinsExchangePair;
                fromPartial(object: {
                    coinAsk?: {
                        denom?: string;
                        amount?: string;
                    };
                    coinBid?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _73.CoinsExchangePair;
                fromAmino(object: _73.CoinsExchangePairAmino): _73.CoinsExchangePair;
                toAmino(message: _73.CoinsExchangePair): _73.CoinsExchangePairAmino;
                fromAminoMsg(object: _73.CoinsExchangePairAminoMsg): _73.CoinsExchangePair;
                fromProtoMsg(message: _73.CoinsExchangePairProtoMsg): _73.CoinsExchangePair;
                toProto(message: _73.CoinsExchangePair): Uint8Array;
                toProtoMsg(message: _73.CoinsExchangePair): _73.CoinsExchangePairProtoMsg;
            };
            FundAccountProposal: {
                encode(message: _73.FundAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.FundAccountProposal;
                fromPartial(object: {
                    recipient?: string;
                    title?: string;
                    description?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _73.FundAccountProposal;
                fromAmino(object: _73.FundAccountProposalAmino): _73.FundAccountProposal;
                toAmino(message: _73.FundAccountProposal): _73.FundAccountProposalAmino;
                fromAminoMsg(object: _73.FundAccountProposalAminoMsg): _73.FundAccountProposal;
                fromProtoMsg(message: _73.FundAccountProposalProtoMsg): _73.FundAccountProposal;
                toProto(message: _73.FundAccountProposal): Uint8Array;
                toProtoMsg(message: _73.FundAccountProposal): _73.FundAccountProposalProtoMsg;
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
            onomyprotocol: {
                dao: {
                    v1: {
                        params(request?: _76.QueryParamsRequest): Promise<_76.QueryParamsResponse>;
                        treasury(request?: _76.QueryTreasuryRequest): Promise<_76.QueryTreasuryResponse>;
                    };
                };
            };
        }>;
    };
}
