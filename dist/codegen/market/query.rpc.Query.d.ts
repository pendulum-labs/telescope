import { Rpc } from "../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryGetDropRequest, QueryGetDropResponse, QueryAllDropRequest, QueryAllDropResponse, QueryGetMemberRequest, QueryGetMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetBurningsRequest, QueryGetBurningsResponse, QueryAllBurningsRequest, QueryAllBurningsResponse, QueryGetOrderRequest, QueryGetOrderResponse, QueryAllOrderRequest, QueryAllOrderResponse, QueryBookRequest, QueryBookResponse, QueryBookendsRequest, QueryBookendsResponse, QueryHistoryRequest, QueryHistoryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Pool by index. */
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
    /** Queries a list of Pool items. */
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
    /** Queries a Drop by index. */
    drop(request: QueryGetDropRequest): Promise<QueryGetDropResponse>;
    /** Queries a list of Drop items. */
    dropAll(request?: QueryAllDropRequest): Promise<QueryAllDropResponse>;
    /** Queries a Member by index. */
    member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
    /** Queries a list of Member items. */
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
    /** Queries a Burnings by index. */
    burnings(request: QueryGetBurningsRequest): Promise<QueryGetBurningsResponse>;
    /** Queries a list of Burnings items. */
    burningsAll(request?: QueryAllBurningsRequest): Promise<QueryAllBurningsResponse>;
    /** Queries a Order by index. */
    order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
    /** Queries a list of Order items. */
    orderAll(request?: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
    /** Queries a list of Book items. */
    book(request: QueryBookRequest): Promise<QueryBookResponse>;
    /** Queries a list of Bookends items. */
    bookends(request: QueryBookendsRequest): Promise<QueryBookendsResponse>;
    /** Queries pool trade history. */
    history(request: QueryHistoryRequest): Promise<QueryHistoryResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
    drop(request: QueryGetDropRequest): Promise<QueryGetDropResponse>;
    dropAll(request?: QueryAllDropRequest): Promise<QueryAllDropResponse>;
    member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
    burnings(request: QueryGetBurningsRequest): Promise<QueryGetBurningsResponse>;
    burningsAll(request?: QueryAllBurningsRequest): Promise<QueryAllBurningsResponse>;
    order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
    orderAll(request?: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
    book(request: QueryBookRequest): Promise<QueryBookResponse>;
    bookends(request: QueryBookendsRequest): Promise<QueryBookendsResponse>;
    history(request: QueryHistoryRequest): Promise<QueryHistoryResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
    drop(request: QueryGetDropRequest): Promise<QueryGetDropResponse>;
    dropAll(request?: QueryAllDropRequest): Promise<QueryAllDropResponse>;
    member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
    burnings(request: QueryGetBurningsRequest): Promise<QueryGetBurningsResponse>;
    burningsAll(request?: QueryAllBurningsRequest): Promise<QueryAllBurningsResponse>;
    order(request: QueryGetOrderRequest): Promise<QueryGetOrderResponse>;
    orderAll(request?: QueryAllOrderRequest): Promise<QueryAllOrderResponse>;
    book(request: QueryBookRequest): Promise<QueryBookResponse>;
    bookends(request: QueryBookendsRequest): Promise<QueryBookendsResponse>;
    history(request: QueryHistoryRequest): Promise<QueryHistoryResponse>;
};
