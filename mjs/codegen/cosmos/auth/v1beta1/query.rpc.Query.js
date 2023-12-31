import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.accounts = this.accounts.bind(this);
        this.account = this.account.bind(this);
        this.params = this.params.bind(this);
    }
    accounts(request = {
        pagination: undefined
    }) {
        const data = QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
        return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
    }
    account(request) {
        const data = QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
        return promise.then(data => QueryAccountResponse.decode(new _m0.Reader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        accounts(request) {
            return queryService.accounts(request);
        },
        account(request) {
            return queryService.account(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map