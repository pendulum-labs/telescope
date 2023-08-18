import { Rpc } from "../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryDropRequest, QueryDropResponse, QueryDropAmountsRequest, QueryDropAmountsResponse, QueryDropCoinRequest, QueryDropCoinResponse, QueryDropPairsRequest, QueryDropPairsResponse, QueryDropOwnerPairRequest, QueryDropsResponse, QueryAllDropRequest, QueryGetMemberRequest, QueryGetMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetBurningsRequest, QueryGetBurningsResponse, QueryAllBurningsRequest, QueryAllBurningsResponse, QueryOrderRequest, QueryOrderResponse, QueryAllOrderRequest, QueryOrdersResponse, QueryOrderOwnerRequest, QueryOrderOwnerUidsResponse, QueryBookRequest, QueryBookResponse, QueryBookendsRequest, QueryBookendsResponse, QueryHistoryRequest, QueryHistoryResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Pool by index. */
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
  /** Queries a list of Pool items. */
  poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse>;
  /** Queries a Drop by index. */
  drop(request: QueryDropRequest): Promise<QueryDropResponse>;
  /** Queries a Drop by index. */
  dropAmounts(request: QueryDropAmountsRequest): Promise<QueryDropAmountsResponse>;
  /** Queries a Drop by index. */
  dropCoin(request: QueryDropCoinRequest): Promise<QueryDropCoinResponse>;
  /** Queries a Drop by index. */
  dropPairs(request: QueryDropPairsRequest): Promise<QueryDropPairsResponse>;
  /** Queries a Drop by index. */
  dropOwnerPair(request: QueryDropOwnerPairRequest): Promise<QueryDropsResponse>;
  /** Queries a list of Drop items. */
  dropAll(request?: QueryAllDropRequest): Promise<QueryDropsResponse>;
  /** Queries a Member by index. */
  member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse>;
  /** Queries a list of Member items. */
  memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
  /** Queries a Burnings by index. */
  burnings(request: QueryGetBurningsRequest): Promise<QueryGetBurningsResponse>;
  /** Queries a list of Burnings items. */
  burningsAll(request?: QueryAllBurningsRequest): Promise<QueryAllBurningsResponse>;
  /** Queries a Order by index. */
  order(request: QueryOrderRequest): Promise<QueryOrderResponse>;
  /** Queries a list of Order items. */
  orderAll(request?: QueryAllOrderRequest): Promise<QueryOrdersResponse>;
  /** Queries a list of Order items. */
  orderOwner(request: QueryOrderOwnerRequest): Promise<QueryOrdersResponse>;
  /** Queries a list of Order items. */
  orderOwnerUids(request: QueryOrderOwnerRequest): Promise<QueryOrderOwnerUidsResponse>;
  /** Queries a list of Book items. */
  book(request: QueryBookRequest): Promise<QueryBookResponse>;
  /** Queries a list of Bookends items. */
  bookends(request: QueryBookendsRequest): Promise<QueryBookendsResponse>;
  /** Queries pool trade history. */
  history(request: QueryHistoryRequest): Promise<QueryHistoryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.pool = this.pool.bind(this);
    this.poolAll = this.poolAll.bind(this);
    this.drop = this.drop.bind(this);
    this.dropAmounts = this.dropAmounts.bind(this);
    this.dropCoin = this.dropCoin.bind(this);
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
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "Pool", data);
    return promise.then(data => QueryGetPoolResponse.decode(new _m0.Reader(data)));
  }
  poolAll(request: QueryAllPoolRequest = {
    pagination: undefined
  }): Promise<QueryAllPoolResponse> {
    const data = QueryAllPoolRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "PoolAll", data);
    return promise.then(data => QueryAllPoolResponse.decode(new _m0.Reader(data)));
  }
  drop(request: QueryDropRequest): Promise<QueryDropResponse> {
    const data = QueryDropRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "Drop", data);
    return promise.then(data => QueryDropResponse.decode(new _m0.Reader(data)));
  }
  dropAmounts(request: QueryDropAmountsRequest): Promise<QueryDropAmountsResponse> {
    const data = QueryDropAmountsRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropAmounts", data);
    return promise.then(data => QueryDropAmountsResponse.decode(new _m0.Reader(data)));
  }
  dropCoin(request: QueryDropCoinRequest): Promise<QueryDropCoinResponse> {
    const data = QueryDropCoinRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropCoin", data);
    return promise.then(data => QueryDropCoinResponse.decode(new _m0.Reader(data)));
  }
  dropPairs(request: QueryDropPairsRequest): Promise<QueryDropPairsResponse> {
    const data = QueryDropPairsRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropPairs", data);
    return promise.then(data => QueryDropPairsResponse.decode(new _m0.Reader(data)));
  }
  dropOwnerPair(request: QueryDropOwnerPairRequest): Promise<QueryDropsResponse> {
    const data = QueryDropOwnerPairRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropOwnerPair", data);
    return promise.then(data => QueryDropsResponse.decode(new _m0.Reader(data)));
  }
  dropAll(request: QueryAllDropRequest = {
    pagination: undefined
  }): Promise<QueryDropsResponse> {
    const data = QueryAllDropRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "DropAll", data);
    return promise.then(data => QueryDropsResponse.decode(new _m0.Reader(data)));
  }
  member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse> {
    const data = QueryGetMemberRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "Member", data);
    return promise.then(data => QueryGetMemberResponse.decode(new _m0.Reader(data)));
  }
  memberAll(request: QueryAllMemberRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberResponse> {
    const data = QueryAllMemberRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "MemberAll", data);
    return promise.then(data => QueryAllMemberResponse.decode(new _m0.Reader(data)));
  }
  burnings(request: QueryGetBurningsRequest): Promise<QueryGetBurningsResponse> {
    const data = QueryGetBurningsRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "Burnings", data);
    return promise.then(data => QueryGetBurningsResponse.decode(new _m0.Reader(data)));
  }
  burningsAll(request: QueryAllBurningsRequest = {
    pagination: undefined
  }): Promise<QueryAllBurningsResponse> {
    const data = QueryAllBurningsRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "BurningsAll", data);
    return promise.then(data => QueryAllBurningsResponse.decode(new _m0.Reader(data)));
  }
  order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
    const data = QueryOrderRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "Order", data);
    return promise.then(data => QueryOrderResponse.decode(new _m0.Reader(data)));
  }
  orderAll(request: QueryAllOrderRequest = {
    pagination: undefined
  }): Promise<QueryOrdersResponse> {
    const data = QueryAllOrderRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderAll", data);
    return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
  }
  orderOwner(request: QueryOrderOwnerRequest): Promise<QueryOrdersResponse> {
    const data = QueryOrderOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderOwner", data);
    return promise.then(data => QueryOrdersResponse.decode(new _m0.Reader(data)));
  }
  orderOwnerUids(request: QueryOrderOwnerRequest): Promise<QueryOrderOwnerUidsResponse> {
    const data = QueryOrderOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "OrderOwnerUids", data);
    return promise.then(data => QueryOrderOwnerUidsResponse.decode(new _m0.Reader(data)));
  }
  book(request: QueryBookRequest): Promise<QueryBookResponse> {
    const data = QueryBookRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "Book", data);
    return promise.then(data => QueryBookResponse.decode(new _m0.Reader(data)));
  }
  bookends(request: QueryBookendsRequest): Promise<QueryBookendsResponse> {
    const data = QueryBookendsRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "Bookends", data);
    return promise.then(data => QueryBookendsResponse.decode(new _m0.Reader(data)));
  }
  history(request: QueryHistoryRequest): Promise<QueryHistoryResponse> {
    const data = QueryHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("pendulumlabs.market.market.Query", "History", data);
    return promise.then(data => QueryHistoryResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
      return queryService.pool(request);
    },
    poolAll(request?: QueryAllPoolRequest): Promise<QueryAllPoolResponse> {
      return queryService.poolAll(request);
    },
    drop(request: QueryDropRequest): Promise<QueryDropResponse> {
      return queryService.drop(request);
    },
    dropAmounts(request: QueryDropAmountsRequest): Promise<QueryDropAmountsResponse> {
      return queryService.dropAmounts(request);
    },
    dropCoin(request: QueryDropCoinRequest): Promise<QueryDropCoinResponse> {
      return queryService.dropCoin(request);
    },
    dropPairs(request: QueryDropPairsRequest): Promise<QueryDropPairsResponse> {
      return queryService.dropPairs(request);
    },
    dropOwnerPair(request: QueryDropOwnerPairRequest): Promise<QueryDropsResponse> {
      return queryService.dropOwnerPair(request);
    },
    dropAll(request?: QueryAllDropRequest): Promise<QueryDropsResponse> {
      return queryService.dropAll(request);
    },
    member(request: QueryGetMemberRequest): Promise<QueryGetMemberResponse> {
      return queryService.member(request);
    },
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse> {
      return queryService.memberAll(request);
    },
    burnings(request: QueryGetBurningsRequest): Promise<QueryGetBurningsResponse> {
      return queryService.burnings(request);
    },
    burningsAll(request?: QueryAllBurningsRequest): Promise<QueryAllBurningsResponse> {
      return queryService.burningsAll(request);
    },
    order(request: QueryOrderRequest): Promise<QueryOrderResponse> {
      return queryService.order(request);
    },
    orderAll(request?: QueryAllOrderRequest): Promise<QueryOrdersResponse> {
      return queryService.orderAll(request);
    },
    orderOwner(request: QueryOrderOwnerRequest): Promise<QueryOrdersResponse> {
      return queryService.orderOwner(request);
    },
    orderOwnerUids(request: QueryOrderOwnerRequest): Promise<QueryOrderOwnerUidsResponse> {
      return queryService.orderOwnerUids(request);
    },
    book(request: QueryBookRequest): Promise<QueryBookResponse> {
      return queryService.book(request);
    },
    bookends(request: QueryBookendsRequest): Promise<QueryBookendsResponse> {
      return queryService.bookends(request);
    },
    history(request: QueryHistoryRequest): Promise<QueryHistoryResponse> {
      return queryService.history(request);
    }
  };
};