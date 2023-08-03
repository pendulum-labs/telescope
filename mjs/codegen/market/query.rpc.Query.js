import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryGetDropRequest, QueryGetDropResponse, QueryAllDropRequest, QueryAllDropResponse, QueryGetMemberRequest, QueryGetMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetBurningsRequest, QueryGetBurningsResponse, QueryAllBurningsRequest, QueryAllBurningsResponse, QueryGetOrderRequest, QueryGetOrderResponse, QueryAllOrderRequest, QueryAllOrderResponse, QueryBookRequest, QueryBookResponse, QueryBookendsRequest, QueryBookendsResponse, QueryHistoryRequest, QueryHistoryResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.pool = this.pool.bind(this);
        this.poolAll = this.poolAll.bind(this);
        this.drop = this.drop.bind(this);
        this.dropAll = this.dropAll.bind(this);
        this.member = this.member.bind(this);
        this.memberAll = this.memberAll.bind(this);
        this.burnings = this.burnings.bind(this);
        this.burningsAll = this.burningsAll.bind(this);
        this.order = this.order.bind(this);
        this.orderAll = this.orderAll.bind(this);
        this.book = this.book.bind(this);
        this.bookends = this.bookends.bind(this);
        this.history = this.history.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    pool(request) {
        const data = QueryGetPoolRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Pool", data);
        return promise.then(data => QueryGetPoolResponse.decode(new _m0.Reader(data)));
    }
    poolAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllPoolRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "PoolAll", data);
        return promise.then(data => QueryAllPoolResponse.decode(new _m0.Reader(data)));
    }
    drop(request) {
        const data = QueryGetDropRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Drop", data);
        return promise.then(data => QueryGetDropResponse.decode(new _m0.Reader(data)));
    }
    dropAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllDropRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropAll", data);
        return promise.then(data => QueryAllDropResponse.decode(new _m0.Reader(data)));
    }
    member(request) {
        const data = QueryGetMemberRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Member", data);
        return promise.then(data => QueryGetMemberResponse.decode(new _m0.Reader(data)));
    }
    memberAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllMemberRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "MemberAll", data);
        return promise.then(data => QueryAllMemberResponse.decode(new _m0.Reader(data)));
    }
    burnings(request) {
        const data = QueryGetBurningsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Burnings", data);
        return promise.then(data => QueryGetBurningsResponse.decode(new _m0.Reader(data)));
    }
    burningsAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllBurningsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "BurningsAll", data);
        return promise.then(data => QueryAllBurningsResponse.decode(new _m0.Reader(data)));
    }
    order(request) {
        const data = QueryGetOrderRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Order", data);
        return promise.then(data => QueryGetOrderResponse.decode(new _m0.Reader(data)));
    }
    orderAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllOrderRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderAll", data);
        return promise.then(data => QueryAllOrderResponse.decode(new _m0.Reader(data)));
    }
    book(request) {
        const data = QueryBookRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Book", data);
        return promise.then(data => QueryBookResponse.decode(new _m0.Reader(data)));
    }
    bookends(request) {
        const data = QueryBookendsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Bookends", data);
        return promise.then(data => QueryBookendsResponse.decode(new _m0.Reader(data)));
    }
    history(request) {
        const data = QueryHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "History", data);
        return promise.then(data => QueryHistoryResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        pool(request) {
            return queryService.pool(request);
        },
        poolAll(request) {
            return queryService.poolAll(request);
        },
        drop(request) {
            return queryService.drop(request);
        },
        dropAll(request) {
            return queryService.dropAll(request);
        },
        member(request) {
            return queryService.member(request);
        },
        memberAll(request) {
            return queryService.memberAll(request);
        },
        burnings(request) {
            return queryService.burnings(request);
        },
        burningsAll(request) {
            return queryService.burningsAll(request);
        },
        order(request) {
            return queryService.order(request);
        },
        orderAll(request) {
            return queryService.orderAll(request);
        },
        book(request) {
            return queryService.book(request);
        },
        bookends(request) {
            return queryService.bookends(request);
        },
        history(request) {
            return queryService.history(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map