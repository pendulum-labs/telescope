import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryTreasuryRequest, QueryTreasuryResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.treasury = this.treasury.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("onomyprotocol.dao.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    treasury(request = {}) {
        const data = QueryTreasuryRequest.encode(request).finish();
        const promise = this.rpc.request("onomyprotocol.dao.v1.Query", "Treasury", data);
        return promise.then(data => QueryTreasuryResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        treasury(request) {
            return queryService.treasury(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map