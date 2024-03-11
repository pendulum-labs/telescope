/// <reference types="long" />
import * as _75 from "./dao/v1/dao";
import * as _76 from "./dao/v1/genesis";
import * as _77 from "./dao/v1/params";
import * as _78 from "./dao/v1/query";
import * as _121 from "./dao/v1/query.rpc.Query";
export declare namespace onomyprotocol {
    namespace dao {
        const v1: {
            QueryClientImpl: typeof _121.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                treasury(request?: _78.QueryTreasuryRequest): Promise<_78.QueryTreasuryResponse>;
            };
            QueryParamsRequest: {
                encode(_: _78.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsRequest;
                fromPartial(_: {}): _78.QueryParamsRequest;
                fromAmino(_: _78.QueryParamsRequestAmino): _78.QueryParamsRequest;
                toAmino(_: _78.QueryParamsRequest): _78.QueryParamsRequestAmino;
                fromAminoMsg(object: _78.QueryParamsRequestAminoMsg): _78.QueryParamsRequest;
                fromProtoMsg(message: _78.QueryParamsRequestProtoMsg): _78.QueryParamsRequest;
                toProto(message: _78.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryParamsRequest): _78.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _78.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        withdrawRewardPeriod?: string | number | import("long").Long;
                        poolRate?: Uint8Array;
                        maxProposalRate?: Uint8Array;
                        maxValCommission?: Uint8Array;
                    };
                }): _78.QueryParamsResponse;
                fromAmino(object: _78.QueryParamsResponseAmino): _78.QueryParamsResponse;
                toAmino(message: _78.QueryParamsResponse): _78.QueryParamsResponseAmino;
                fromAminoMsg(object: _78.QueryParamsResponseAminoMsg): _78.QueryParamsResponse;
                fromProtoMsg(message: _78.QueryParamsResponseProtoMsg): _78.QueryParamsResponse;
                toProto(message: _78.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryParamsResponse): _78.QueryParamsResponseProtoMsg;
            };
            QueryTreasuryRequest: {
                encode(_: _78.QueryTreasuryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryTreasuryRequest;
                fromPartial(_: {}): _78.QueryTreasuryRequest;
                fromAmino(_: _78.QueryTreasuryRequestAmino): _78.QueryTreasuryRequest;
                toAmino(_: _78.QueryTreasuryRequest): _78.QueryTreasuryRequestAmino;
                fromAminoMsg(object: _78.QueryTreasuryRequestAminoMsg): _78.QueryTreasuryRequest;
                fromProtoMsg(message: _78.QueryTreasuryRequestProtoMsg): _78.QueryTreasuryRequest;
                toProto(message: _78.QueryTreasuryRequest): Uint8Array;
                toProtoMsg(message: _78.QueryTreasuryRequest): _78.QueryTreasuryRequestProtoMsg;
            };
            QueryTreasuryResponse: {
                encode(message: _78.QueryTreasuryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryTreasuryResponse;
                fromPartial(object: {
                    treasuryBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _78.QueryTreasuryResponse;
                fromAmino(object: _78.QueryTreasuryResponseAmino): _78.QueryTreasuryResponse;
                toAmino(message: _78.QueryTreasuryResponse): _78.QueryTreasuryResponseAmino;
                fromAminoMsg(object: _78.QueryTreasuryResponseAminoMsg): _78.QueryTreasuryResponse;
                fromProtoMsg(message: _78.QueryTreasuryResponseProtoMsg): _78.QueryTreasuryResponse;
                toProto(message: _78.QueryTreasuryResponse): Uint8Array;
                toProtoMsg(message: _78.QueryTreasuryResponse): _78.QueryTreasuryResponseProtoMsg;
            };
            Params: {
                encode(message: _77.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Params;
                fromPartial(object: {
                    withdrawRewardPeriod?: string | number | import("long").Long;
                    poolRate?: Uint8Array;
                    maxProposalRate?: Uint8Array;
                    maxValCommission?: Uint8Array;
                }): _77.Params;
                fromAmino(object: _77.ParamsAmino): _77.Params;
                toAmino(message: _77.Params): _77.ParamsAmino;
                fromAminoMsg(object: _77.ParamsAminoMsg): _77.Params;
                fromProtoMsg(message: _77.ParamsProtoMsg): _77.Params;
                toProto(message: _77.Params): Uint8Array;
                toProtoMsg(message: _77.Params): _77.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _76.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.GenesisState;
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
                }): _76.GenesisState;
                fromAmino(object: _76.GenesisStateAmino): _76.GenesisState;
                toAmino(message: _76.GenesisState): _76.GenesisStateAmino;
                fromAminoMsg(object: _76.GenesisStateAminoMsg): _76.GenesisState;
                fromProtoMsg(message: _76.GenesisStateProtoMsg): _76.GenesisState;
                toProto(message: _76.GenesisState): Uint8Array;
                toProtoMsg(message: _76.GenesisState): _76.GenesisStateProtoMsg;
            };
            FundTreasuryProposal: {
                encode(message: _75.FundTreasuryProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.FundTreasuryProposal;
                fromPartial(object: {
                    sender?: string;
                    title?: string;
                    description?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _75.FundTreasuryProposal;
                fromAmino(object: _75.FundTreasuryProposalAmino): _75.FundTreasuryProposal;
                toAmino(message: _75.FundTreasuryProposal): _75.FundTreasuryProposalAmino;
                fromAminoMsg(object: _75.FundTreasuryProposalAminoMsg): _75.FundTreasuryProposal;
                fromProtoMsg(message: _75.FundTreasuryProposalProtoMsg): _75.FundTreasuryProposal;
                toProto(message: _75.FundTreasuryProposal): Uint8Array;
                toProtoMsg(message: _75.FundTreasuryProposal): _75.FundTreasuryProposalProtoMsg;
            };
            ExchangeWithTreasuryProposal: {
                encode(message: _75.ExchangeWithTreasuryProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ExchangeWithTreasuryProposal;
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
                }): _75.ExchangeWithTreasuryProposal;
                fromAmino(object: _75.ExchangeWithTreasuryProposalAmino): _75.ExchangeWithTreasuryProposal;
                toAmino(message: _75.ExchangeWithTreasuryProposal): _75.ExchangeWithTreasuryProposalAmino;
                fromAminoMsg(object: _75.ExchangeWithTreasuryProposalAminoMsg): _75.ExchangeWithTreasuryProposal;
                fromProtoMsg(message: _75.ExchangeWithTreasuryProposalProtoMsg): _75.ExchangeWithTreasuryProposal;
                toProto(message: _75.ExchangeWithTreasuryProposal): Uint8Array;
                toProtoMsg(message: _75.ExchangeWithTreasuryProposal): _75.ExchangeWithTreasuryProposalProtoMsg;
            };
            CoinsExchangePair: {
                encode(message: _75.CoinsExchangePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.CoinsExchangePair;
                fromPartial(object: {
                    coinAsk?: {
                        denom?: string;
                        amount?: string;
                    };
                    coinBid?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _75.CoinsExchangePair;
                fromAmino(object: _75.CoinsExchangePairAmino): _75.CoinsExchangePair;
                toAmino(message: _75.CoinsExchangePair): _75.CoinsExchangePairAmino;
                fromAminoMsg(object: _75.CoinsExchangePairAminoMsg): _75.CoinsExchangePair;
                fromProtoMsg(message: _75.CoinsExchangePairProtoMsg): _75.CoinsExchangePair;
                toProto(message: _75.CoinsExchangePair): Uint8Array;
                toProtoMsg(message: _75.CoinsExchangePair): _75.CoinsExchangePairProtoMsg;
            };
            FundAccountProposal: {
                encode(message: _75.FundAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.FundAccountProposal;
                fromPartial(object: {
                    recipient?: string;
                    title?: string;
                    description?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _75.FundAccountProposal;
                fromAmino(object: _75.FundAccountProposalAmino): _75.FundAccountProposal;
                toAmino(message: _75.FundAccountProposal): _75.FundAccountProposalAmino;
                fromAminoMsg(object: _75.FundAccountProposalAminoMsg): _75.FundAccountProposal;
                fromProtoMsg(message: _75.FundAccountProposalProtoMsg): _75.FundAccountProposal;
                toProto(message: _75.FundAccountProposal): Uint8Array;
                toProtoMsg(message: _75.FundAccountProposal): _75.FundAccountProposalProtoMsg;
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
                        params(request?: _78.QueryParamsRequest): Promise<_78.QueryParamsResponse>;
                        treasury(request?: _78.QueryTreasuryRequest): Promise<_78.QueryTreasuryResponse>;
                    };
                };
            };
        }>;
    };
}
