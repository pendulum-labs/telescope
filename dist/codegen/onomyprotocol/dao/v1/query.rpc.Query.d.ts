import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryTreasuryRequest, QueryTreasuryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Treasury queries the dao treasury. */
    treasury(request?: QueryTreasuryRequest): Promise<QueryTreasuryResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    treasury(request?: QueryTreasuryRequest): Promise<QueryTreasuryResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    treasury(request?: QueryTreasuryRequest): Promise<QueryTreasuryResponse>;
};
