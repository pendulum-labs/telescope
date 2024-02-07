import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBurnedRequest, QueryBurnedResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryVolumeRequest, QueryVolumeResponse, QueryAllVolumeRequest, QueryAllVolumeResponse, QueryDropRequest, QueryDropResponse, QueryDropAmountsRequest, QueryDropAmountsResponse, QueryDropCoinRequest, QueryDropCoinResponse, QueryDropsToCoinsRequest, QueryDropsToCoinsResponse, QueryDropPairsRequest, QueryDropPairsResponse, QueryDropOwnerPairRequest, QueryDropsResponse, QueryAllDropRequest, QueryGetMemberRequest, QueryGetMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetBurningsRequest, QueryGetBurningsResponse, QueryAllBurningsRequest, QueryAllBurningsResponse, QueryOrderRequest, QueryOrderResponse, QueryAllOrderRequest, QueryOrdersResponse, QueryOrderOwnerRequest, QueryOrderOwnerUidsResponse, QueryBookRequest, QueryBookResponse, QueryBookendsRequest, QueryBookendsResponse, QueryHistoryRequest, QueryHistoryResponse, QueryQuoteRequest, QueryQuoteResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries total burned. */
    burned(request?: QueryBurnedRequest): Promise<QueryBurnedResponse>;
    /** Queries a Pool by index. */
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
    /** Queries a list of Pool items. */
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
    /** Queries a Volume by index. */
    volume(request: QueryVolumeRequest): Promise<QueryVolumeResponse>;
    /** Queries all Volumes. */
    volumeAll(request?: QueryAllVolumeRequest): Promise<QueryAllVolumeResponse>;
    /** Queries a Drop by index. */
    drop(request: QueryDropRequest): Promise<QueryDropResponse>;
    /** Queries a Drop by index. */
    dropAmounts(request: QueryDropAmountsRequest): Promise<QueryDropAmountsResponse>;
    /** Queries a Drop by index. */
    dropCoin(request: QueryDropCoinRequest): Promise<QueryDropCoinResponse>;
    /** Converts drops to coin amounts */
    dropsToCoins(request: QueryDropsToCoinsRequest): Promise<QueryDropsToCoinsResponse>;
    /** Queries a Drop by index. */
    dropPairs(request: QueryDropPairsRequest): Promise<QueryDropPairsResponse>;
    /** Queries a Drop by index. */
    dropOwnerPair(request: QueryDropOwnerPairRequest): Promise<QueryDropsResponse>;
    /** Queries a list of Drop items. */
    dropAll(request?: QueryAllDropRequest): Promise<QueryDropsResponse>;
    /** Queries a Member by index. */
    member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
    /** Queries a list of Member items. */
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
    /** Queries a Burnings by index. */
    burnings(request: QueryGetBurningsRequest): Promise<QueryGetBurningsResponse>;
    /** Queries a list of Burnings items. */
    burningsAll(request?: QueryAllBurningsRequest): Promise<QueryAllBurningsResponse>;
    /** Queries a Order by index. */
    order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    /** Queries a list of Order items. */
    orderAll(request?: QueryAllOrderRequest): Promise<QueryOrdersResponse>;
    /** Queries a list of Order items. */
    orderOwner(request: QueryOrderOwnerRequest): Promise<QueryOrdersResponse>;
    /** Queries a list of Order items. */
    orderOwnerUids(request: QueryOrderOwnerRequest): Promise<QueryOrderOwnerUidsResponse>;
    /** Queries a list of Book items. */
    book(request: QueryBookRequest): Promise<QueryBookResponse>;
    /** Queries a list of Bookends items. */
    bookends(request: QueryBookendsRequest): Promise<QueryBookendsResponse>;
    /** Queries pool trade history. */
    history(request: QueryHistoryRequest): Promise<QueryHistoryResponse>;
    /** Queries pool trade history. */
    quote(request: QueryQuoteRequest): Promise<QueryQuoteResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    burned(request?: QueryBurnedRequest): Promise<QueryBurnedResponse>;
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
    volume(request: QueryVolumeRequest): Promise<QueryVolumeResponse>;
    volumeAll(request?: QueryAllVolumeRequest): Promise<QueryAllVolumeResponse>;
    drop(request: QueryDropRequest): Promise<QueryDropResponse>;
    dropAmounts(request: QueryDropAmountsRequest): Promise<QueryDropAmountsResponse>;
    dropCoin(request: QueryDropCoinRequest): Promise<QueryDropCoinResponse>;
    dropsToCoins(request: QueryDropsToCoinsRequest): Promise<QueryDropsToCoinsResponse>;
    dropPairs(request: QueryDropPairsRequest): Promise<QueryDropPairsResponse>;
    dropOwnerPair(request: QueryDropOwnerPairRequest): Promise<QueryDropsResponse>;
    dropAll(request?: QueryAllDropRequest): Promise<QueryDropsResponse>;
    member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
    burnings(request: QueryGetBurningsRequest): Promise<QueryGetBurningsResponse>;
    burningsAll(request?: QueryAllBurningsRequest): Promise<QueryAllBurningsResponse>;
    order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    orderAll(request?: QueryAllOrderRequest): Promise<QueryOrdersResponse>;
    orderOwner(request: QueryOrderOwnerRequest): Promise<QueryOrdersResponse>;
    orderOwnerUids(request: QueryOrderOwnerRequest): Promise<QueryOrderOwnerUidsResponse>;
    book(request: QueryBookRequest): Promise<QueryBookResponse>;
    bookends(request: QueryBookendsRequest): Promise<QueryBookendsResponse>;
    history(request: QueryHistoryRequest): Promise<QueryHistoryResponse>;
    quote(request: QueryQuoteRequest): Promise<QueryQuoteResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    burned(request?: QueryBurnedRequest): Promise<QueryBurnedResponse>;
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
    volume(request: QueryVolumeRequest): Promise<QueryVolumeResponse>;
    volumeAll(request?: QueryAllVolumeRequest): Promise<QueryAllVolumeResponse>;
    drop(request: QueryDropRequest): Promise<QueryDropResponse>;
    dropAmounts(request: QueryDropAmountsRequest): Promise<QueryDropAmountsResponse>;
    dropCoin(request: QueryDropCoinRequest): Promise<QueryDropCoinResponse>;
    dropsToCoins(request: QueryDropsToCoinsRequest): Promise<QueryDropsToCoinsResponse>;
    dropPairs(request: QueryDropPairsRequest): Promise<QueryDropPairsResponse>;
    dropOwnerPair(request: QueryDropOwnerPairRequest): Promise<QueryDropsResponse>;
    dropAll(request?: QueryAllDropRequest): Promise<QueryDropsResponse>;
    member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
    burnings(request: QueryGetBurningsRequest): Promise<QueryGetBurningsResponse>;
    burningsAll(request?: QueryAllBurningsRequest): Promise<QueryAllBurningsResponse>;
    order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
    orderAll(request?: QueryAllOrderRequest): Promise<QueryOrdersResponse>;
    orderOwner(request: QueryOrderOwnerRequest): Promise<QueryOrdersResponse>;
    orderOwnerUids(request: QueryOrderOwnerRequest): Promise<QueryOrderOwnerUidsResponse>;
    book(request: QueryBookRequest): Promise<QueryBookResponse>;
    bookends(request: QueryBookendsRequest): Promise<QueryBookendsResponse>;
    history(request: QueryHistoryRequest): Promise<QueryHistoryResponse>;
    quote(request: QueryQuoteRequest): Promise<QueryQuoteResponse>;
};
