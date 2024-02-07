import * as _m0 from "protobufjs/minimal";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryBurnedRequest, QueryBurnedResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryVolumeRequest, QueryVolumeResponse, QueryAllVolumeRequest, QueryAllVolumeResponse, QueryDropRequest, QueryDropResponse, QueryDropAmountsRequest, QueryDropAmountsResponse, QueryDropCoinRequest, QueryDropCoinResponse, QueryDropsToCoinsRequest, QueryDropsToCoinsResponse, QueryDropPairsRequest, QueryDropPairsResponse, QueryDropOwnerPairRequest, QueryDropsResponse, QueryAllDropRequest, QueryGetMemberRequest, QueryGetMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetBurningsRequest, QueryGetBurningsResponse, QueryAllBurningsRequest, QueryAllBurningsResponse, QueryOrderRequest, QueryOrderResponse, QueryAllOrderRequest, QueryOrdersResponse, QueryOrderOwnerRequest, QueryOrderOwnerUidsResponse, QueryBookRequest, QueryBookResponse, QueryBookendsRequest, QueryBookendsResponse, QueryHistoryRequest, QueryHistoryResponse, QueryQuoteRequest, QueryQuoteResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.burned = this.burned.bind(this);
        this.pool = this.pool.bind(this);
        this.poolAll = this.poolAll.bind(this);
        this.volume = this.volume.bind(this);
        this.volumeAll = this.volumeAll.bind(this);
        this.drop = this.drop.bind(this);
        this.dropAmounts = this.dropAmounts.bind(this);
        this.dropCoin = this.dropCoin.bind(this);
        this.dropsToCoins = this.dropsToCoins.bind(this);
        this.dropPairs = this.dropPairs.bind(this);
        this.dropOwnerPair = this.dropOwnerPair.bind(this);
        this.dropAll = this.dropAll.bind(this);
        this.member = this.member.bind(this);
        this.memberAll = this.memberAll.bind(this);
        this.burnings = this.burnings.bind(this);
        this.burningsAll = this.burningsAll.bind(this);
        this.order = this.order.bind(this);
        this.orderAll = this.orderAll.bind(this);
        this.orderOwner = this.orderOwner.bind(this);
        this.orderOwnerUids = this.orderOwnerUids.bind(this);
        this.book = this.book.bind(this);
        this.bookends = this.bookends.bind(this);
        this.history = this.history.bind(this);
        this.quote = this.quote.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    burned(request = {}) {
        const data = QueryBurnedRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Burned", data);
        return promise.then(data => QueryBurnedResponse.decode(new _m0.Reader(data)));
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
    volume(request) {
        const data = QueryVolumeRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Volume", data);
        return promise.then(data => QueryVolumeResponse.decode(new _m0.Reader(data)));
    }
    volumeAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllVolumeRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "VolumeAll", data);
        return promise.then(data => QueryAllVolumeResponse.decode(new _m0.Reader(data)));
    }
    drop(request) {
        const data = QueryDropRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Drop", data);
        return promise.then(data => QueryDropResponse.decode(new _m0.Reader(data)));
    }
    dropAmounts(request) {
        const data = QueryDropAmountsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropAmounts", data);
        return promise.then(data => QueryDropAmountsResponse.decode(new _m0.Reader(data)));
    }
    dropCoin(request) {
        const data = QueryDropCoinRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropCoin", data);
        return promise.then(data => QueryDropCoinResponse.decode(new _m0.Reader(data)));
    }
    dropsToCoins(request) {
        const data = QueryDropsToCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropsToCoins", data);
        return promise.then(data => QueryDropsToCoinsResponse.decode(new _m0.Reader(data)));
    }
    dropPairs(request) {
        const data = QueryDropPairsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropPairs", data);
        return promise.then(data => QueryDropPairsResponse.decode(new _m0.Reader(data)));
    }
    dropOwnerPair(request) {
        const data = QueryDropOwnerPairRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropOwnerPair", data);
        return promise.then(data => QueryDropsResponse.decode(new _m0.Reader(data)));
    }
    dropAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllDropRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropAll", data);
        return promise.then(data => QueryDropsResponse.decode(new _m0.Reader(data)));
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
        const data = QueryOrderRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Order", data);
        return promise.then(data => QueryOrderResponse.decode(new _m0.Reader(data)));
    }
    orderAll(request = {
        pagination: undefined
    }) {
        const data = QueryAllOrderRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderAll", data);
        return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
    }
    orderOwner(request) {
        const data = QueryOrderOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderOwner", data);
        return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
    }
    orderOwnerUids(request) {
        const data = QueryOrderOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderOwnerUids", data);
        return promise.then(data => QueryOrderOwnerUidsResponse.decode(new _m0.Reader(data)));
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
    quote(request) {
        const data = QueryQuoteRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Quote", data);
        return promise.then(data => QueryQuoteResponse.decode(new _m0.Reader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        burned(request) {
            return queryService.burned(request);
        },
        pool(request) {
            return queryService.pool(request);
        },
        poolAll(request) {
            return queryService.poolAll(request);
        },
        volume(request) {
            return queryService.volume(request);
        },
        volumeAll(request) {
            return queryService.volumeAll(request);
        },
        drop(request) {
            return queryService.drop(request);
        },
        dropAmounts(request) {
            return queryService.dropAmounts(request);
        },
        dropCoin(request) {
            return queryService.dropCoin(request);
        },
        dropsToCoins(request) {
            return queryService.dropsToCoins(request);
        },
        dropPairs(request) {
            return queryService.dropPairs(request);
        },
        dropOwnerPair(request) {
            return queryService.dropOwnerPair(request);
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
        orderOwner(request) {
            return queryService.orderOwner(request);
        },
        orderOwnerUids(request) {
            return queryService.orderOwnerUids(request);
        },
        book(request) {
            return queryService.book(request);
        },
        bookends(request) {
            return queryService.bookends(request);
        },
        history(request) {
            return queryService.history(request);
        },
        quote(request) {
            return queryService.quote(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map