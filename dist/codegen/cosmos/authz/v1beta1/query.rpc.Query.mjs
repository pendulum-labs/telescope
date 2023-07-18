import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGrantsRequest, QueryGrantsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.grants = this.grants.bind(this);
    }
    grants(request) {
        const data = QueryGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
        return promise.then(data => QueryGrantsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        grants(request) {
            return queryService.grants(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map