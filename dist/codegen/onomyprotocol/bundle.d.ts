/// <reference types="long" />
import * as _68 from "./dao/v1/dao";
import * as _69 from "./dao/v1/genesis";
import * as _70 from "./dao/v1/params";
import * as _71 from "./dao/v1/query";
import * as _108 from "./dao/v1/query.rpc.Query";
export declare namespace onomyprotocol {
    namespace dao {
        const v1: {
            QueryClientImpl: typeof _108.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                treasury(request?: _71.QueryTreasuryRequest): Promise<_71.QueryTreasuryResponse>;
            };
            QueryParamsRequest: {
                encode(_: _71.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryParamsRequest;
                fromPartial(_: {}): _71.QueryParamsRequest;
                fromAmino(_: _71.QueryParamsRequestAmino): _71.QueryParamsRequest;
                toAmino(_: _71.QueryParamsRequest): _71.QueryParamsRequestAmino;
                fromAminoMsg(object: _71.QueryParamsRequestAminoMsg): _71.QueryParamsRequest;
                fromProtoMsg(message: _71.QueryParamsRequestProtoMsg): _71.QueryParamsRequest;
                toProto(message: _71.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _71.QueryParamsRequest): _71.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _71.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        withdrawRewardPeriod?: string | number | import("long").Long;
                        poolRate?: Uint8Array;
                        maxProposalRate?: Uint8Array;
                        maxValCommission?: Uint8Array;
                    };
                }): _71.QueryParamsResponse;
                fromAmino(object: _71.QueryParamsResponseAmino): _71.QueryParamsResponse;
                toAmino(message: _71.QueryParamsResponse): _71.QueryParamsResponseAmino;
                fromAminoMsg(object: _71.QueryParamsResponseAminoMsg): _71.QueryParamsResponse;
                fromProtoMsg(message: _71.QueryParamsResponseProtoMsg): _71.QueryParamsResponse;
                toProto(message: _71.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _71.QueryParamsResponse): _71.QueryParamsResponseProtoMsg;
            };
            QueryTreasuryRequest: {
                encode(_: _71.QueryTreasuryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryTreasuryRequest;
                fromPartial(_: {}): _71.QueryTreasuryRequest;
                fromAmino(_: _71.QueryTreasuryRequestAmino): _71.QueryTreasuryRequest;
                toAmino(_: _71.QueryTreasuryRequest): _71.QueryTreasuryRequestAmino;
                fromAminoMsg(object: _71.QueryTreasuryRequestAminoMsg): _71.QueryTreasuryRequest;
                fromProtoMsg(message: _71.QueryTreasuryRequestProtoMsg): _71.QueryTreasuryRequest;
                toProto(message: _71.QueryTreasuryRequest): Uint8Array;
                toProtoMsg(message: _71.QueryTreasuryRequest): _71.QueryTreasuryRequestProtoMsg;
            };
            QueryTreasuryResponse: {
                encode(message: _71.QueryTreasuryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryTreasuryResponse;
                fromPartial(object: {
                    treasuryBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _71.QueryTreasuryResponse;
                fromAmino(object: _71.QueryTreasuryResponseAmino): _71.QueryTreasuryResponse;
                toAmino(message: _71.QueryTreasuryResponse): _71.QueryTreasuryResponseAmino;
                fromAminoMsg(object: _71.QueryTreasuryResponseAminoMsg): _71.QueryTreasuryResponse;
                fromProtoMsg(message: _71.QueryTreasuryResponseProtoMsg): _71.QueryTreasuryResponse;
                toProto(message: _71.QueryTreasuryResponse): Uint8Array;
                toProtoMsg(message: _71.QueryTreasuryResponse): _71.QueryTreasuryResponseProtoMsg;
            };
            Params: {
                encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Params;
                fromPartial(object: {
                    withdrawRewardPeriod?: string | number | import("long").Long;
                    poolRate?: Uint8Array;
                    maxProposalRate?: Uint8Array;
                    maxValCommission?: Uint8Array;
                }): _70.Params;
                fromAmino(object: _70.ParamsAmino): _70.Params;
                toAmino(message: _70.Params): _70.ParamsAmino;
                fromAminoMsg(object: _70.ParamsAminoMsg): _70.Params;
                fromProtoMsg(message: _70.ParamsProtoMsg): _70.Params;
                toProto(message: _70.Params): Uint8Array;
                toProtoMsg(message: _70.Params): _70.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
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
                }): _69.GenesisState;
                fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                toProto(message: _69.GenesisState): Uint8Array;
                toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
            };
            FundTreasuryProposal: {
                encode(message: _68.FundTreasuryProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.FundTreasuryProposal;
                fromPartial(object: {
                    sender?: string;
                    title?: string;
                    description?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _68.FundTreasuryProposal;
                fromAmino(object: _68.FundTreasuryProposalAmino): _68.FundTreasuryProposal;
                toAmino(message: _68.FundTreasuryProposal): _68.FundTreasuryProposalAmino;
                fromAminoMsg(object: _68.FundTreasuryProposalAminoMsg): _68.FundTreasuryProposal;
                fromProtoMsg(message: _68.FundTreasuryProposalProtoMsg): _68.FundTreasuryProposal;
                toProto(message: _68.FundTreasuryProposal): Uint8Array;
                toProtoMsg(message: _68.FundTreasuryProposal): _68.FundTreasuryProposalProtoMsg;
            };
            ExchangeWithTreasuryProposal: {
                encode(message: _68.ExchangeWithTreasuryProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ExchangeWithTreasuryProposal;
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
                }): _68.ExchangeWithTreasuryProposal;
                fromAmino(object: _68.ExchangeWithTreasuryProposalAmino): _68.ExchangeWithTreasuryProposal;
                toAmino(message: _68.ExchangeWithTreasuryProposal): _68.ExchangeWithTreasuryProposalAmino;
                fromAminoMsg(object: _68.ExchangeWithTreasuryProposalAminoMsg): _68.ExchangeWithTreasuryProposal;
                fromProtoMsg(message: _68.ExchangeWithTreasuryProposalProtoMsg): _68.ExchangeWithTreasuryProposal;
                toProto(message: _68.ExchangeWithTreasuryProposal): Uint8Array;
                toProtoMsg(message: _68.ExchangeWithTreasuryProposal): _68.ExchangeWithTreasuryProposalProtoMsg;
            };
            CoinsExchangePair: {
                encode(message: _68.CoinsExchangePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.CoinsExchangePair;
                fromPartial(object: {
                    coinAsk?: {
                        denom?: string;
                        amount?: string;
                    };
                    coinBid?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _68.CoinsExchangePair;
                fromAmino(object: _68.CoinsExchangePairAmino): _68.CoinsExchangePair;
                toAmino(message: _68.CoinsExchangePair): _68.CoinsExchangePairAmino;
                fromAminoMsg(object: _68.CoinsExchangePairAminoMsg): _68.CoinsExchangePair;
                fromProtoMsg(message: _68.CoinsExchangePairProtoMsg): _68.CoinsExchangePair;
                toProto(message: _68.CoinsExchangePair): Uint8Array;
                toProtoMsg(message: _68.CoinsExchangePair): _68.CoinsExchangePairProtoMsg;
            };
            FundAccountProposal: {
                encode(message: _68.FundAccountProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.FundAccountProposal;
                fromPartial(object: {
                    recipient?: string;
                    title?: string;
                    description?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _68.FundAccountProposal;
                fromAmino(object: _68.FundAccountProposalAmino): _68.FundAccountProposal;
                toAmino(message: _68.FundAccountProposal): _68.FundAccountProposalAmino;
                fromAminoMsg(object: _68.FundAccountProposalAminoMsg): _68.FundAccountProposal;
                fromProtoMsg(message: _68.FundAccountProposalProtoMsg): _68.FundAccountProposal;
                toProto(message: _68.FundAccountProposal): Uint8Array;
                toProtoMsg(message: _68.FundAccountProposal): _68.FundAccountProposalProtoMsg;
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
                        params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        treasury(request?: _71.QueryTreasuryRequest): Promise<_71.QueryTreasuryResponse>;
                    };
                };
            };
        }>;
    };
}
