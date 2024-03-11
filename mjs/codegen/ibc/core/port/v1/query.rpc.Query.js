import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAppVersionRequest, QueryAppVersionResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.appVersion = this.appVersion.bind(this);
    }
    appVersion(request) {
        const data = QueryAppVersionRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.port.v1.Query", "AppVersion", data);
        return promise.then(data => QueryAppVersionResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        appVersion(request) {
            return queryService.appVersion(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map