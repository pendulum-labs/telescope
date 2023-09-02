"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.pool = this.pool.bind(this);
        this.poolAll = this.poolAll.bind(this);
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
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    pool(request) {
        const data = query_1.QueryGetPoolRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Pool", data);
        return promise.then(data => query_1.QueryGetPoolResponse.decode(new _m0.Reader(data)));
    }
    poolAll(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllPoolRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "PoolAll", data);
        return promise.then(data => query_1.QueryAllPoolResponse.decode(new _m0.Reader(data)));
    }
    drop(request) {
        const data = query_1.QueryDropRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Drop", data);
        return promise.then(data => query_1.QueryDropResponse.decode(new _m0.Reader(data)));
    }
    dropAmounts(request) {
        const data = query_1.QueryDropAmountsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropAmounts", data);
        return promise.then(data => query_1.QueryDropAmountsResponse.decode(new _m0.Reader(data)));
    }
    dropCoin(request) {
        const data = query_1.QueryDropCoinRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropCoin", data);
        return promise.then(data => query_1.QueryDropCoinResponse.decode(new _m0.Reader(data)));
    }
    dropsToCoins(request) {
        const data = query_1.QueryDropsToCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropsToCoins", data);
        return promise.then(data => query_1.QueryDropAmountsResponse.decode(new _m0.Reader(data)));
    }
    dropPairs(request) {
        const data = query_1.QueryDropPairsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropPairs", data);
        return promise.then(data => query_1.QueryDropPairsResponse.decode(new _m0.Reader(data)));
    }
    dropOwnerPair(request) {
        const data = query_1.QueryDropOwnerPairRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropOwnerPair", data);
        return promise.then(data => query_1.QueryDropsResponse.decode(new _m0.Reader(data)));
    }
    dropAll(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllDropRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropAll", data);
        return promise.then(data => query_1.QueryDropsResponse.decode(new _m0.Reader(data)));
    }
    member(request) {
        const data = query_1.QueryGetMemberRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Member", data);
        return promise.then(data => query_1.QueryGetMemberResponse.decode(new _m0.Reader(data)));
    }
    memberAll(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllMemberRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "MemberAll", data);
        return promise.then(data => query_1.QueryAllMemberResponse.decode(new _m0.Reader(data)));
    }
    burnings(request) {
        const data = query_1.QueryGetBurningsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Burnings", data);
        return promise.then(data => query_1.QueryGetBurningsResponse.decode(new _m0.Reader(data)));
    }
    burningsAll(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllBurningsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "BurningsAll", data);
        return promise.then(data => query_1.QueryAllBurningsResponse.decode(new _m0.Reader(data)));
    }
    order(request) {
        const data = query_1.QueryOrderRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Order", data);
        return promise.then(data => query_1.QueryOrderResponse.decode(new _m0.Reader(data)));
    }
    orderAll(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllOrderRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderAll", data);
        return promise.then(data => query_1.QueryOrdersResponse.decode(new _m0.Reader(data)));
    }
    orderOwner(request) {
        const data = query_1.QueryOrderOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderOwner", data);
        return promise.then(data => query_1.QueryOrdersResponse.decode(new _m0.Reader(data)));
    }
    orderOwnerUids(request) {
        const data = query_1.QueryOrderOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderOwnerUids", data);
        return promise.then(data => query_1.QueryOrderOwnerUidsResponse.decode(new _m0.Reader(data)));
    }
    book(request) {
        const data = query_1.QueryBookRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Book", data);
        return promise.then(data => query_1.QueryBookResponse.decode(new _m0.Reader(data)));
    }
    bookends(request) {
        const data = query_1.QueryBookendsRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "Bookends", data);
        return promise.then(data => query_1.QueryBookendsResponse.decode(new _m0.Reader(data)));
    }
    history(request) {
        const data = query_1.QueryHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("pendulumlabs.market.market.Query", "History", data);
        return promise.then(data => query_1.QueryHistoryResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map