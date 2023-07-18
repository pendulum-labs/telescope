import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryTreasuryRequest, QueryTreasuryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Treasury queries the dao treasury. */
  treasury(request?: QueryTreasuryRequest): Promise<QueryTreasuryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.treasury = this.treasury.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("onomyprotocol.dao.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  treasury(request: QueryTreasuryRequest = {}): Promise<QueryTreasuryResponse> {
    const data = QueryTreasuryRequest.encode(request).finish();
    const promise = this.rpc.request("onomyprotocol.dao.v1.Query", "Treasury", data);
    return promise.then(data => QueryTreasuryResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    treasury(request?: QueryTreasuryRequest): Promise<QueryTreasuryResponse> {
      return queryService.treasury(request);
    }
  };
};