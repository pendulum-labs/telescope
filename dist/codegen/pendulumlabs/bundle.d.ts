/// <reference types="long" />
import * as _74 from "../market/burnings";
import * as _75 from "../market/drop";
import * as _76 from "../market/genesis";
import * as _77 from "../market/member";
import * as _78 from "../market/order";
import * as _79 from "../market/params";
import * as _80 from "../market/pool";
import * as _81 from "../market/query";
import * as _82 from "../market/tx";
import * as _114 from "../market/query.rpc.Query";
import * as _115 from "../market/tx.rpc.msg";
export declare namespace pendulumlabs {
    namespace market {
        const market: {
            MsgClientImpl: typeof _115.MsgClientImpl;
            QueryClientImpl: typeof _114.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                pool(request: _81.QueryGetPoolRequest): Promise<_81.QueryGetPoolResponse>;
                poolAll(request?: _81.QueryAllPoolRequest): Promise<_81.QueryAllPoolResponse>;
                drop(request: _81.QueryDropRequest): Promise<_81.QueryDropResponse>;
                dropAmounts(request: _81.QueryDropAmountsRequest): Promise<_81.QueryDropAmountsResponse>;
                dropPairs(request: _81.QueryDropPairsRequest): Promise<_81.QueryDropPairsResponse>;
                dropOwnerPair(request: _81.QueryDropOwnerPairRequest): Promise<_81.QueryDropsResponse>;
                dropAll(request?: _81.QueryAllDropRequest): Promise<_81.QueryDropsResponse>;
                member(request: _81.QueryGetMemberRequest): Promise<_81.QueryGetMemberResponse>;
                memberAll(request?: _81.QueryAllMemberRequest): Promise<_81.QueryAllMemberResponse>;
                burnings(request: _81.QueryGetBurningsRequest): Promise<_81.QueryGetBurningsResponse>;
                burningsAll(request?: _81.QueryAllBurningsRequest): Promise<_81.QueryAllBurningsResponse>;
                order(request: _81.QueryOrderRequest): Promise<_81.QueryOrderResponse>;
                orderAll(request?: _81.QueryAllOrderRequest): Promise<_81.QueryOrdersResponse>;
                orderOwner(request: _81.QueryOrderOwnerRequest): Promise<_81.QueryOrdersResponse>;
                orderOwnerUids(request: _81.QueryOrderOwnerRequest): Promise<_81.QueryOrderOwnerUidsResponse>;
                book(request: _81.QueryBookRequest): Promise<_81.QueryBookResponse>;
                bookends(request: _81.QueryBookendsRequest): Promise<_81.QueryBookendsResponse>;
                history(request: _81.QueryHistoryRequest): Promise<_81.QueryHistoryResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPool(value: _82.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDrop(value: _82.MsgCreateDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemDrop(value: _82.MsgRedeemDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createOrder(value: _82.MsgCreateOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _82.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    marketOrder(value: _82.MsgMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPool(value: _82.MsgCreatePool): {
                        typeUrl: string;
                        value: _82.MsgCreatePool;
                    };
                    createDrop(value: _82.MsgCreateDrop): {
                        typeUrl: string;
                        value: _82.MsgCreateDrop;
                    };
                    redeemDrop(value: _82.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _82.MsgRedeemDrop;
                    };
                    createOrder(value: _82.MsgCreateOrder): {
                        typeUrl: string;
                        value: _82.MsgCreateOrder;
                    };
                    cancelOrder(value: _82.MsgCancelOrder): {
                        typeUrl: string;
                        value: _82.MsgCancelOrder;
                    };
                    marketOrder(value: _82.MsgMarketOrder): {
                        typeUrl: string;
                        value: _82.MsgMarketOrder;
                    };
                };
                fromPartial: {
                    createPool(value: _82.MsgCreatePool): {
                        typeUrl: string;
                        value: _82.MsgCreatePool;
                    };
                    createDrop(value: _82.MsgCreateDrop): {
                        typeUrl: string;
                        value: _82.MsgCreateDrop;
                    };
                    redeemDrop(value: _82.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _82.MsgRedeemDrop;
                    };
                    createOrder(value: _82.MsgCreateOrder): {
                        typeUrl: string;
                        value: _82.MsgCreateOrder;
                    };
                    cancelOrder(value: _82.MsgCancelOrder): {
                        typeUrl: string;
                        value: _82.MsgCancelOrder;
                    };
                    marketOrder(value: _82.MsgMarketOrder): {
                        typeUrl: string;
                        value: _82.MsgMarketOrder;
                    };
                };
            };
            AminoConverter: {
                "/pendulumlabs.market.market.MsgCreatePool": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreatePool) => _82.MsgCreatePoolAmino;
                    fromAmino: (object: _82.MsgCreatePoolAmino) => _82.MsgCreatePool;
                };
                "/pendulumlabs.market.market.MsgCreateDrop": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateDrop) => _82.MsgCreateDropAmino;
                    fromAmino: (object: _82.MsgCreateDropAmino) => _82.MsgCreateDrop;
                };
                "/pendulumlabs.market.market.MsgRedeemDrop": {
                    aminoType: string;
                    toAmino: (message: _82.MsgRedeemDrop) => _82.MsgRedeemDropAmino;
                    fromAmino: (object: _82.MsgRedeemDropAmino) => _82.MsgRedeemDrop;
                };
                "/pendulumlabs.market.market.MsgCreateOrder": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateOrder) => _82.MsgCreateOrderAmino;
                    fromAmino: (object: _82.MsgCreateOrderAmino) => _82.MsgCreateOrder;
                };
                "/pendulumlabs.market.market.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCancelOrder) => _82.MsgCancelOrderAmino;
                    fromAmino: (object: _82.MsgCancelOrderAmino) => _82.MsgCancelOrder;
                };
                "/pendulumlabs.market.market.MsgMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _82.MsgMarketOrder) => _82.MsgMarketOrderAmino;
                    fromAmino: (object: _82.MsgMarketOrderAmino) => _82.MsgMarketOrder;
                };
            };
            MsgCreatePool: {
                encode(message: _82.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreatePool;
                fromPartial(object: {
                    creator?: string;
                    coinA?: string;
                    coinB?: string;
                }): _82.MsgCreatePool;
                fromAmino(object: _82.MsgCreatePoolAmino): _82.MsgCreatePool;
                toAmino(message: _82.MsgCreatePool): _82.MsgCreatePoolAmino;
                fromAminoMsg(object: _82.MsgCreatePoolAminoMsg): _82.MsgCreatePool;
                fromProtoMsg(message: _82.MsgCreatePoolProtoMsg): _82.MsgCreatePool;
                toProto(message: _82.MsgCreatePool): Uint8Array;
                toProtoMsg(message: _82.MsgCreatePool): _82.MsgCreatePoolProtoMsg;
            };
            MsgCreatePoolResponse: {
                encode(_: _82.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreatePoolResponse;
                fromPartial(_: {}): _82.MsgCreatePoolResponse;
                fromAmino(_: _82.MsgCreatePoolResponseAmino): _82.MsgCreatePoolResponse;
                toAmino(_: _82.MsgCreatePoolResponse): _82.MsgCreatePoolResponseAmino;
                fromAminoMsg(object: _82.MsgCreatePoolResponseAminoMsg): _82.MsgCreatePoolResponse;
                fromProtoMsg(message: _82.MsgCreatePoolResponseProtoMsg): _82.MsgCreatePoolResponse;
                toProto(message: _82.MsgCreatePoolResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreatePoolResponse): _82.MsgCreatePoolResponseProtoMsg;
            };
            MsgCreateDrop: {
                encode(message: _82.MsgCreateDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreateDrop;
                fromPartial(object: {
                    creator?: string;
                    pair?: string;
                    drops?: string;
                }): _82.MsgCreateDrop;
                fromAmino(object: _82.MsgCreateDropAmino): _82.MsgCreateDrop;
                toAmino(message: _82.MsgCreateDrop): _82.MsgCreateDropAmino;
                fromAminoMsg(object: _82.MsgCreateDropAminoMsg): _82.MsgCreateDrop;
                fromProtoMsg(message: _82.MsgCreateDropProtoMsg): _82.MsgCreateDrop;
                toProto(message: _82.MsgCreateDrop): Uint8Array;
                toProtoMsg(message: _82.MsgCreateDrop): _82.MsgCreateDropProtoMsg;
            };
            MsgCreateDropResponse: {
                encode(_: _82.MsgCreateDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreateDropResponse;
                fromPartial(_: {}): _82.MsgCreateDropResponse;
                fromAmino(_: _82.MsgCreateDropResponseAmino): _82.MsgCreateDropResponse;
                toAmino(_: _82.MsgCreateDropResponse): _82.MsgCreateDropResponseAmino;
                fromAminoMsg(object: _82.MsgCreateDropResponseAminoMsg): _82.MsgCreateDropResponse;
                fromProtoMsg(message: _82.MsgCreateDropResponseProtoMsg): _82.MsgCreateDropResponse;
                toProto(message: _82.MsgCreateDropResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateDropResponse): _82.MsgCreateDropResponseProtoMsg;
            };
            MsgRedeemDrop: {
                encode(message: _82.MsgRedeemDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgRedeemDrop;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _82.MsgRedeemDrop;
                fromAmino(object: _82.MsgRedeemDropAmino): _82.MsgRedeemDrop;
                toAmino(message: _82.MsgRedeemDrop): _82.MsgRedeemDropAmino;
                fromAminoMsg(object: _82.MsgRedeemDropAminoMsg): _82.MsgRedeemDrop;
                fromProtoMsg(message: _82.MsgRedeemDropProtoMsg): _82.MsgRedeemDrop;
                toProto(message: _82.MsgRedeemDrop): Uint8Array;
                toProtoMsg(message: _82.MsgRedeemDrop): _82.MsgRedeemDropProtoMsg;
            };
            MsgRedeemDropResponse: {
                encode(_: _82.MsgRedeemDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgRedeemDropResponse;
                fromPartial(_: {}): _82.MsgRedeemDropResponse;
                fromAmino(_: _82.MsgRedeemDropResponseAmino): _82.MsgRedeemDropResponse;
                toAmino(_: _82.MsgRedeemDropResponse): _82.MsgRedeemDropResponseAmino;
                fromAminoMsg(object: _82.MsgRedeemDropResponseAminoMsg): _82.MsgRedeemDropResponse;
                fromProtoMsg(message: _82.MsgRedeemDropResponseProtoMsg): _82.MsgRedeemDropResponse;
                toProto(message: _82.MsgRedeemDropResponse): Uint8Array;
                toProtoMsg(message: _82.MsgRedeemDropResponse): _82.MsgRedeemDropResponseProtoMsg;
            };
            MsgCreateOrder: {
                encode(message: _82.MsgCreateOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreateOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    orderType?: string;
                    amount?: string;
                    rate?: string[];
                    prev?: string;
                    next?: string;
                }): _82.MsgCreateOrder;
                fromAmino(object: _82.MsgCreateOrderAmino): _82.MsgCreateOrder;
                toAmino(message: _82.MsgCreateOrder): _82.MsgCreateOrderAmino;
                fromAminoMsg(object: _82.MsgCreateOrderAminoMsg): _82.MsgCreateOrder;
                fromProtoMsg(message: _82.MsgCreateOrderProtoMsg): _82.MsgCreateOrder;
                toProto(message: _82.MsgCreateOrder): Uint8Array;
                toProtoMsg(message: _82.MsgCreateOrder): _82.MsgCreateOrderProtoMsg;
            };
            MsgCreateOrderResponse: {
                encode(message: _82.MsgCreateOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreateOrderResponse;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _82.MsgCreateOrderResponse;
                fromAmino(object: _82.MsgCreateOrderResponseAmino): _82.MsgCreateOrderResponse;
                toAmino(message: _82.MsgCreateOrderResponse): _82.MsgCreateOrderResponseAmino;
                fromAminoMsg(object: _82.MsgCreateOrderResponseAminoMsg): _82.MsgCreateOrderResponse;
                fromProtoMsg(message: _82.MsgCreateOrderResponseProtoMsg): _82.MsgCreateOrderResponse;
                toProto(message: _82.MsgCreateOrderResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateOrderResponse): _82.MsgCreateOrderResponseProtoMsg;
            };
            MsgCancelOrder: {
                encode(message: _82.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCancelOrder;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _82.MsgCancelOrder;
                fromAmino(object: _82.MsgCancelOrderAmino): _82.MsgCancelOrder;
                toAmino(message: _82.MsgCancelOrder): _82.MsgCancelOrderAmino;
                fromAminoMsg(object: _82.MsgCancelOrderAminoMsg): _82.MsgCancelOrder;
                fromProtoMsg(message: _82.MsgCancelOrderProtoMsg): _82.MsgCancelOrder;
                toProto(message: _82.MsgCancelOrder): Uint8Array;
                toProtoMsg(message: _82.MsgCancelOrder): _82.MsgCancelOrderProtoMsg;
            };
            MsgCancelOrderResponse: {
                encode(_: _82.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCancelOrderResponse;
                fromPartial(_: {}): _82.MsgCancelOrderResponse;
                fromAmino(_: _82.MsgCancelOrderResponseAmino): _82.MsgCancelOrderResponse;
                toAmino(_: _82.MsgCancelOrderResponse): _82.MsgCancelOrderResponseAmino;
                fromAminoMsg(object: _82.MsgCancelOrderResponseAminoMsg): _82.MsgCancelOrderResponse;
                fromProtoMsg(message: _82.MsgCancelOrderResponseProtoMsg): _82.MsgCancelOrderResponse;
                toProto(message: _82.MsgCancelOrderResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCancelOrderResponse): _82.MsgCancelOrderResponseProtoMsg;
            };
            MsgMarketOrder: {
                encode(message: _82.MsgMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgMarketOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    amountBid?: string;
                    slippage?: string;
                }): _82.MsgMarketOrder;
                fromAmino(object: _82.MsgMarketOrderAmino): _82.MsgMarketOrder;
                toAmino(message: _82.MsgMarketOrder): _82.MsgMarketOrderAmino;
                fromAminoMsg(object: _82.MsgMarketOrderAminoMsg): _82.MsgMarketOrder;
                fromProtoMsg(message: _82.MsgMarketOrderProtoMsg): _82.MsgMarketOrder;
                toProto(message: _82.MsgMarketOrder): Uint8Array;
                toProtoMsg(message: _82.MsgMarketOrder): _82.MsgMarketOrderProtoMsg;
            };
            MsgMarketOrderResponse: {
                encode(_: _82.MsgMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgMarketOrderResponse;
                fromPartial(_: {}): _82.MsgMarketOrderResponse;
                fromAmino(_: _82.MsgMarketOrderResponseAmino): _82.MsgMarketOrderResponse;
                toAmino(_: _82.MsgMarketOrderResponse): _82.MsgMarketOrderResponseAmino;
                fromAminoMsg(object: _82.MsgMarketOrderResponseAminoMsg): _82.MsgMarketOrderResponse;
                fromProtoMsg(message: _82.MsgMarketOrderResponseProtoMsg): _82.MsgMarketOrderResponse;
                toProto(message: _82.MsgMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _82.MsgMarketOrderResponse): _82.MsgMarketOrderResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _81.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsRequest;
                fromPartial(_: {}): _81.QueryParamsRequest;
                fromAmino(_: _81.QueryParamsRequestAmino): _81.QueryParamsRequest;
                toAmino(_: _81.QueryParamsRequest): _81.QueryParamsRequestAmino;
                fromAminoMsg(object: _81.QueryParamsRequestAminoMsg): _81.QueryParamsRequest;
                fromProtoMsg(message: _81.QueryParamsRequestProtoMsg): _81.QueryParamsRequest;
                toProto(message: _81.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryParamsRequest): _81.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _81.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        earnRates?: string;
                        burnRate?: string;
                        burnCoin?: string;
                        marketFee?: string;
                    };
                }): _81.QueryParamsResponse;
                fromAmino(object: _81.QueryParamsResponseAmino): _81.QueryParamsResponse;
                toAmino(message: _81.QueryParamsResponse): _81.QueryParamsResponseAmino;
                fromAminoMsg(object: _81.QueryParamsResponseAminoMsg): _81.QueryParamsResponse;
                fromProtoMsg(message: _81.QueryParamsResponseProtoMsg): _81.QueryParamsResponse;
                toProto(message: _81.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryParamsResponse): _81.QueryParamsResponseProtoMsg;
            };
            QueryGetPoolRequest: {
                encode(message: _81.QueryGetPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryGetPoolRequest;
                fromPartial(object: {
                    pair?: string;
                }): _81.QueryGetPoolRequest;
                fromAmino(object: _81.QueryGetPoolRequestAmino): _81.QueryGetPoolRequest;
                toAmino(message: _81.QueryGetPoolRequest): _81.QueryGetPoolRequestAmino;
                fromAminoMsg(object: _81.QueryGetPoolRequestAminoMsg): _81.QueryGetPoolRequest;
                fromProtoMsg(message: _81.QueryGetPoolRequestProtoMsg): _81.QueryGetPoolRequest;
                toProto(message: _81.QueryGetPoolRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGetPoolRequest): _81.QueryGetPoolRequestProtoMsg;
            };
            QueryGetPoolResponse: {
                encode(message: _81.QueryGetPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryGetPoolResponse;
                fromPartial(object: {
                    pool?: {
                        pair?: string;
                        denom1?: string;
                        denom2?: string;
                        leaders?: {
                            address?: string;
                            drops?: string;
                        }[];
                        drops?: string;
                        history?: string | number | import("long").Long;
                    };
                }): _81.QueryGetPoolResponse;
                fromAmino(object: _81.QueryGetPoolResponseAmino): _81.QueryGetPoolResponse;
                toAmino(message: _81.QueryGetPoolResponse): _81.QueryGetPoolResponseAmino;
                fromAminoMsg(object: _81.QueryGetPoolResponseAminoMsg): _81.QueryGetPoolResponse;
                fromProtoMsg(message: _81.QueryGetPoolResponseProtoMsg): _81.QueryGetPoolResponse;
                toProto(message: _81.QueryGetPoolResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGetPoolResponse): _81.QueryGetPoolResponseProtoMsg;
            };
            QueryAllPoolRequest: {
                encode(message: _81.QueryAllPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllPoolRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryAllPoolRequest;
                fromAmino(object: _81.QueryAllPoolRequestAmino): _81.QueryAllPoolRequest;
                toAmino(message: _81.QueryAllPoolRequest): _81.QueryAllPoolRequestAmino;
                fromAminoMsg(object: _81.QueryAllPoolRequestAminoMsg): _81.QueryAllPoolRequest;
                fromProtoMsg(message: _81.QueryAllPoolRequestProtoMsg): _81.QueryAllPoolRequest;
                toProto(message: _81.QueryAllPoolRequest): Uint8Array;
                toProtoMsg(message: _81.QueryAllPoolRequest): _81.QueryAllPoolRequestProtoMsg;
            };
            QueryAllPoolResponse: {
                encode(message: _81.QueryAllPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllPoolResponse;
                fromPartial(object: {
                    pool?: {
                        pair?: string;
                        denom1?: string;
                        denom2?: string;
                        leaders?: {
                            address?: string;
                            drops?: string;
                        }[];
                        drops?: string;
                        history?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryAllPoolResponse;
                fromAmino(object: _81.QueryAllPoolResponseAmino): _81.QueryAllPoolResponse;
                toAmino(message: _81.QueryAllPoolResponse): _81.QueryAllPoolResponseAmino;
                fromAminoMsg(object: _81.QueryAllPoolResponseAminoMsg): _81.QueryAllPoolResponse;
                fromProtoMsg(message: _81.QueryAllPoolResponseProtoMsg): _81.QueryAllPoolResponse;
                toProto(message: _81.QueryAllPoolResponse): Uint8Array;
                toProtoMsg(message: _81.QueryAllPoolResponse): _81.QueryAllPoolResponseProtoMsg;
            };
            QueryDropRequest: {
                encode(message: _81.QueryDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _81.QueryDropRequest;
                fromAmino(object: _81.QueryDropRequestAmino): _81.QueryDropRequest;
                toAmino(message: _81.QueryDropRequest): _81.QueryDropRequestAmino;
                fromAminoMsg(object: _81.QueryDropRequestAminoMsg): _81.QueryDropRequest;
                fromProtoMsg(message: _81.QueryDropRequestProtoMsg): _81.QueryDropRequest;
                toProto(message: _81.QueryDropRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDropRequest): _81.QueryDropRequestProtoMsg;
            };
            QueryDropResponse: {
                encode(message: _81.QueryDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropResponse;
                fromPartial(object: {
                    drop?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        pair?: string;
                        drops?: string;
                        product?: string;
                        active?: boolean;
                    };
                }): _81.QueryDropResponse;
                fromAmino(object: _81.QueryDropResponseAmino): _81.QueryDropResponse;
                toAmino(message: _81.QueryDropResponse): _81.QueryDropResponseAmino;
                fromAminoMsg(object: _81.QueryDropResponseAminoMsg): _81.QueryDropResponse;
                fromProtoMsg(message: _81.QueryDropResponseProtoMsg): _81.QueryDropResponse;
                toProto(message: _81.QueryDropResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDropResponse): _81.QueryDropResponseProtoMsg;
            };
            QueryDropAmountsRequest: {
                encode(message: _81.QueryDropAmountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropAmountsRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _81.QueryDropAmountsRequest;
                fromAmino(object: _81.QueryDropAmountsRequestAmino): _81.QueryDropAmountsRequest;
                toAmino(message: _81.QueryDropAmountsRequest): _81.QueryDropAmountsRequestAmino;
                fromAminoMsg(object: _81.QueryDropAmountsRequestAminoMsg): _81.QueryDropAmountsRequest;
                fromProtoMsg(message: _81.QueryDropAmountsRequestProtoMsg): _81.QueryDropAmountsRequest;
                toProto(message: _81.QueryDropAmountsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDropAmountsRequest): _81.QueryDropAmountsRequestProtoMsg;
            };
            QueryDropAmountsResponse: {
                encode(message: _81.QueryDropAmountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropAmountsResponse;
                fromPartial(object: {
                    denom1?: string;
                    denom2?: string;
                    amount1?: string;
                    amount2?: string;
                }): _81.QueryDropAmountsResponse;
                fromAmino(object: _81.QueryDropAmountsResponseAmino): _81.QueryDropAmountsResponse;
                toAmino(message: _81.QueryDropAmountsResponse): _81.QueryDropAmountsResponseAmino;
                fromAminoMsg(object: _81.QueryDropAmountsResponseAminoMsg): _81.QueryDropAmountsResponse;
                fromProtoMsg(message: _81.QueryDropAmountsResponseProtoMsg): _81.QueryDropAmountsResponse;
                toProto(message: _81.QueryDropAmountsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDropAmountsResponse): _81.QueryDropAmountsResponseProtoMsg;
            };
            QueryDropPairsRequest: {
                encode(message: _81.QueryDropPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropPairsRequest;
                fromPartial(object: {
                    address?: string;
                }): _81.QueryDropPairsRequest;
                fromAmino(object: _81.QueryDropPairsRequestAmino): _81.QueryDropPairsRequest;
                toAmino(message: _81.QueryDropPairsRequest): _81.QueryDropPairsRequestAmino;
                fromAminoMsg(object: _81.QueryDropPairsRequestAminoMsg): _81.QueryDropPairsRequest;
                fromProtoMsg(message: _81.QueryDropPairsRequestProtoMsg): _81.QueryDropPairsRequest;
                toProto(message: _81.QueryDropPairsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDropPairsRequest): _81.QueryDropPairsRequestProtoMsg;
            };
            QueryDropPairsResponse: {
                encode(message: _81.QueryDropPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropPairsResponse;
                fromPartial(object: {
                    pairs?: string[];
                }): _81.QueryDropPairsResponse;
                fromAmino(object: _81.QueryDropPairsResponseAmino): _81.QueryDropPairsResponse;
                toAmino(message: _81.QueryDropPairsResponse): _81.QueryDropPairsResponseAmino;
                fromAminoMsg(object: _81.QueryDropPairsResponseAminoMsg): _81.QueryDropPairsResponse;
                fromProtoMsg(message: _81.QueryDropPairsResponseProtoMsg): _81.QueryDropPairsResponse;
                toProto(message: _81.QueryDropPairsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDropPairsResponse): _81.QueryDropPairsResponseProtoMsg;
            };
            QueryDropOwnerPairRequest: {
                encode(message: _81.QueryDropOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropOwnerPairRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryDropOwnerPairRequest;
                fromAmino(object: _81.QueryDropOwnerPairRequestAmino): _81.QueryDropOwnerPairRequest;
                toAmino(message: _81.QueryDropOwnerPairRequest): _81.QueryDropOwnerPairRequestAmino;
                fromAminoMsg(object: _81.QueryDropOwnerPairRequestAminoMsg): _81.QueryDropOwnerPairRequest;
                fromProtoMsg(message: _81.QueryDropOwnerPairRequestProtoMsg): _81.QueryDropOwnerPairRequest;
                toProto(message: _81.QueryDropOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDropOwnerPairRequest): _81.QueryDropOwnerPairRequestProtoMsg;
            };
            QueryDropOwnerPairSumRequest: {
                encode(message: _81.QueryDropOwnerPairSumRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropOwnerPairSumRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                }): _81.QueryDropOwnerPairSumRequest;
                fromAmino(object: _81.QueryDropOwnerPairSumRequestAmino): _81.QueryDropOwnerPairSumRequest;
                toAmino(message: _81.QueryDropOwnerPairSumRequest): _81.QueryDropOwnerPairSumRequestAmino;
                fromAminoMsg(object: _81.QueryDropOwnerPairSumRequestAminoMsg): _81.QueryDropOwnerPairSumRequest;
                fromProtoMsg(message: _81.QueryDropOwnerPairSumRequestProtoMsg): _81.QueryDropOwnerPairSumRequest;
                toProto(message: _81.QueryDropOwnerPairSumRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDropOwnerPairSumRequest): _81.QueryDropOwnerPairSumRequestProtoMsg;
            };
            QueryDropOwnerPairSumResponse: {
                encode(message: _81.QueryDropOwnerPairSumResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropOwnerPairSumResponse;
                fromPartial(object: {
                    sum?: string;
                }): _81.QueryDropOwnerPairSumResponse;
                fromAmino(object: _81.QueryDropOwnerPairSumResponseAmino): _81.QueryDropOwnerPairSumResponse;
                toAmino(message: _81.QueryDropOwnerPairSumResponse): _81.QueryDropOwnerPairSumResponseAmino;
                fromAminoMsg(object: _81.QueryDropOwnerPairSumResponseAminoMsg): _81.QueryDropOwnerPairSumResponse;
                fromProtoMsg(message: _81.QueryDropOwnerPairSumResponseProtoMsg): _81.QueryDropOwnerPairSumResponse;
                toProto(message: _81.QueryDropOwnerPairSumResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDropOwnerPairSumResponse): _81.QueryDropOwnerPairSumResponseProtoMsg;
            };
            QueryDropOwnerPairUidsRequest: {
                encode(message: _81.QueryDropOwnerPairUidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropOwnerPairUidsRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryDropOwnerPairUidsRequest;
                fromAmino(object: _81.QueryDropOwnerPairUidsRequestAmino): _81.QueryDropOwnerPairUidsRequest;
                toAmino(message: _81.QueryDropOwnerPairUidsRequest): _81.QueryDropOwnerPairUidsRequestAmino;
                fromAminoMsg(object: _81.QueryDropOwnerPairUidsRequestAminoMsg): _81.QueryDropOwnerPairUidsRequest;
                fromProtoMsg(message: _81.QueryDropOwnerPairUidsRequestProtoMsg): _81.QueryDropOwnerPairUidsRequest;
                toProto(message: _81.QueryDropOwnerPairUidsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDropOwnerPairUidsRequest): _81.QueryDropOwnerPairUidsRequestProtoMsg;
            };
            QueryUidsResponse: {
                encode(message: _81.QueryUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryUidsResponse;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryUidsResponse;
                fromAmino(object: _81.QueryUidsResponseAmino): _81.QueryUidsResponse;
                toAmino(message: _81.QueryUidsResponse): _81.QueryUidsResponseAmino;
                fromAminoMsg(object: _81.QueryUidsResponseAminoMsg): _81.QueryUidsResponse;
                fromProtoMsg(message: _81.QueryUidsResponseProtoMsg): _81.QueryUidsResponse;
                toProto(message: _81.QueryUidsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryUidsResponse): _81.QueryUidsResponseProtoMsg;
            };
            QueryDropOwnerPairDetailRequest: {
                encode(message: _81.QueryDropOwnerPairDetailRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropOwnerPairDetailRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryDropOwnerPairDetailRequest;
                fromAmino(object: _81.QueryDropOwnerPairDetailRequestAmino): _81.QueryDropOwnerPairDetailRequest;
                toAmino(message: _81.QueryDropOwnerPairDetailRequest): _81.QueryDropOwnerPairDetailRequestAmino;
                fromAminoMsg(object: _81.QueryDropOwnerPairDetailRequestAminoMsg): _81.QueryDropOwnerPairDetailRequest;
                fromProtoMsg(message: _81.QueryDropOwnerPairDetailRequestProtoMsg): _81.QueryDropOwnerPairDetailRequest;
                toProto(message: _81.QueryDropOwnerPairDetailRequest): Uint8Array;
                toProtoMsg(message: _81.QueryDropOwnerPairDetailRequest): _81.QueryDropOwnerPairDetailRequestProtoMsg;
            };
            QueryAllDropRequest: {
                encode(message: _81.QueryAllDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllDropRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryAllDropRequest;
                fromAmino(object: _81.QueryAllDropRequestAmino): _81.QueryAllDropRequest;
                toAmino(message: _81.QueryAllDropRequest): _81.QueryAllDropRequestAmino;
                fromAminoMsg(object: _81.QueryAllDropRequestAminoMsg): _81.QueryAllDropRequest;
                fromProtoMsg(message: _81.QueryAllDropRequestProtoMsg): _81.QueryAllDropRequest;
                toProto(message: _81.QueryAllDropRequest): Uint8Array;
                toProtoMsg(message: _81.QueryAllDropRequest): _81.QueryAllDropRequestProtoMsg;
            };
            QueryDropsResponse: {
                encode(message: _81.QueryDropsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryDropsResponse;
                fromPartial(object: {
                    drops?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        pair?: string;
                        drops?: string;
                        product?: string;
                        active?: boolean;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryDropsResponse;
                fromAmino(object: _81.QueryDropsResponseAmino): _81.QueryDropsResponse;
                toAmino(message: _81.QueryDropsResponse): _81.QueryDropsResponseAmino;
                fromAminoMsg(object: _81.QueryDropsResponseAminoMsg): _81.QueryDropsResponse;
                fromProtoMsg(message: _81.QueryDropsResponseProtoMsg): _81.QueryDropsResponse;
                toProto(message: _81.QueryDropsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryDropsResponse): _81.QueryDropsResponseProtoMsg;
            };
            QueryGetMemberRequest: {
                encode(message: _81.QueryGetMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryGetMemberRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                }): _81.QueryGetMemberRequest;
                fromAmino(object: _81.QueryGetMemberRequestAmino): _81.QueryGetMemberRequest;
                toAmino(message: _81.QueryGetMemberRequest): _81.QueryGetMemberRequestAmino;
                fromAminoMsg(object: _81.QueryGetMemberRequestAminoMsg): _81.QueryGetMemberRequest;
                fromProtoMsg(message: _81.QueryGetMemberRequestProtoMsg): _81.QueryGetMemberRequest;
                toProto(message: _81.QueryGetMemberRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGetMemberRequest): _81.QueryGetMemberRequestProtoMsg;
            };
            QueryGetMemberResponse: {
                encode(message: _81.QueryGetMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryGetMemberResponse;
                fromPartial(object: {
                    member?: {
                        pair?: string;
                        denomA?: string;
                        denomB?: string;
                        balance?: string;
                        previous?: string;
                        limit?: string | number | import("long").Long;
                        stop?: string | number | import("long").Long;
                    };
                }): _81.QueryGetMemberResponse;
                fromAmino(object: _81.QueryGetMemberResponseAmino): _81.QueryGetMemberResponse;
                toAmino(message: _81.QueryGetMemberResponse): _81.QueryGetMemberResponseAmino;
                fromAminoMsg(object: _81.QueryGetMemberResponseAminoMsg): _81.QueryGetMemberResponse;
                fromProtoMsg(message: _81.QueryGetMemberResponseProtoMsg): _81.QueryGetMemberResponse;
                toProto(message: _81.QueryGetMemberResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGetMemberResponse): _81.QueryGetMemberResponseProtoMsg;
            };
            QueryAllMemberRequest: {
                encode(message: _81.QueryAllMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllMemberRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryAllMemberRequest;
                fromAmino(object: _81.QueryAllMemberRequestAmino): _81.QueryAllMemberRequest;
                toAmino(message: _81.QueryAllMemberRequest): _81.QueryAllMemberRequestAmino;
                fromAminoMsg(object: _81.QueryAllMemberRequestAminoMsg): _81.QueryAllMemberRequest;
                fromProtoMsg(message: _81.QueryAllMemberRequestProtoMsg): _81.QueryAllMemberRequest;
                toProto(message: _81.QueryAllMemberRequest): Uint8Array;
                toProtoMsg(message: _81.QueryAllMemberRequest): _81.QueryAllMemberRequestProtoMsg;
            };
            QueryAllMemberResponse: {
                encode(message: _81.QueryAllMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllMemberResponse;
                fromPartial(object: {
                    member?: {
                        pair?: string;
                        denomA?: string;
                        denomB?: string;
                        balance?: string;
                        previous?: string;
                        limit?: string | number | import("long").Long;
                        stop?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryAllMemberResponse;
                fromAmino(object: _81.QueryAllMemberResponseAmino): _81.QueryAllMemberResponse;
                toAmino(message: _81.QueryAllMemberResponse): _81.QueryAllMemberResponseAmino;
                fromAminoMsg(object: _81.QueryAllMemberResponseAminoMsg): _81.QueryAllMemberResponse;
                fromProtoMsg(message: _81.QueryAllMemberResponseProtoMsg): _81.QueryAllMemberResponse;
                toProto(message: _81.QueryAllMemberResponse): Uint8Array;
                toProtoMsg(message: _81.QueryAllMemberResponse): _81.QueryAllMemberResponseProtoMsg;
            };
            QueryGetBurningsRequest: {
                encode(message: _81.QueryGetBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryGetBurningsRequest;
                fromPartial(object: {
                    denom?: string;
                }): _81.QueryGetBurningsRequest;
                fromAmino(object: _81.QueryGetBurningsRequestAmino): _81.QueryGetBurningsRequest;
                toAmino(message: _81.QueryGetBurningsRequest): _81.QueryGetBurningsRequestAmino;
                fromAminoMsg(object: _81.QueryGetBurningsRequestAminoMsg): _81.QueryGetBurningsRequest;
                fromProtoMsg(message: _81.QueryGetBurningsRequestProtoMsg): _81.QueryGetBurningsRequest;
                toProto(message: _81.QueryGetBurningsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGetBurningsRequest): _81.QueryGetBurningsRequestProtoMsg;
            };
            QueryGetBurningsResponse: {
                encode(message: _81.QueryGetBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryGetBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _81.QueryGetBurningsResponse;
                fromAmino(object: _81.QueryGetBurningsResponseAmino): _81.QueryGetBurningsResponse;
                toAmino(message: _81.QueryGetBurningsResponse): _81.QueryGetBurningsResponseAmino;
                fromAminoMsg(object: _81.QueryGetBurningsResponseAminoMsg): _81.QueryGetBurningsResponse;
                fromProtoMsg(message: _81.QueryGetBurningsResponseProtoMsg): _81.QueryGetBurningsResponse;
                toProto(message: _81.QueryGetBurningsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGetBurningsResponse): _81.QueryGetBurningsResponseProtoMsg;
            };
            QueryAllBurningsRequest: {
                encode(message: _81.QueryAllBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllBurningsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryAllBurningsRequest;
                fromAmino(object: _81.QueryAllBurningsRequestAmino): _81.QueryAllBurningsRequest;
                toAmino(message: _81.QueryAllBurningsRequest): _81.QueryAllBurningsRequestAmino;
                fromAminoMsg(object: _81.QueryAllBurningsRequestAminoMsg): _81.QueryAllBurningsRequest;
                fromProtoMsg(message: _81.QueryAllBurningsRequestProtoMsg): _81.QueryAllBurningsRequest;
                toProto(message: _81.QueryAllBurningsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryAllBurningsRequest): _81.QueryAllBurningsRequestProtoMsg;
            };
            QueryAllBurningsResponse: {
                encode(message: _81.QueryAllBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryAllBurningsResponse;
                fromAmino(object: _81.QueryAllBurningsResponseAmino): _81.QueryAllBurningsResponse;
                toAmino(message: _81.QueryAllBurningsResponse): _81.QueryAllBurningsResponseAmino;
                fromAminoMsg(object: _81.QueryAllBurningsResponseAminoMsg): _81.QueryAllBurningsResponse;
                fromProtoMsg(message: _81.QueryAllBurningsResponseProtoMsg): _81.QueryAllBurningsResponse;
                toProto(message: _81.QueryAllBurningsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryAllBurningsResponse): _81.QueryAllBurningsResponseProtoMsg;
            };
            QueryOrderRequest: {
                encode(message: _81.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryOrderRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _81.QueryOrderRequest;
                fromAmino(object: _81.QueryOrderRequestAmino): _81.QueryOrderRequest;
                toAmino(message: _81.QueryOrderRequest): _81.QueryOrderRequestAmino;
                fromAminoMsg(object: _81.QueryOrderRequestAminoMsg): _81.QueryOrderRequest;
                fromProtoMsg(message: _81.QueryOrderRequestProtoMsg): _81.QueryOrderRequest;
                toProto(message: _81.QueryOrderRequest): Uint8Array;
                toProtoMsg(message: _81.QueryOrderRequest): _81.QueryOrderRequestProtoMsg;
            };
            QueryOrderResponse: {
                encode(message: _81.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryOrderResponse;
                fromPartial(object: {
                    order?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        endTime?: string | number | import("long").Long;
                    };
                }): _81.QueryOrderResponse;
                fromAmino(object: _81.QueryOrderResponseAmino): _81.QueryOrderResponse;
                toAmino(message: _81.QueryOrderResponse): _81.QueryOrderResponseAmino;
                fromAminoMsg(object: _81.QueryOrderResponseAminoMsg): _81.QueryOrderResponse;
                fromProtoMsg(message: _81.QueryOrderResponseProtoMsg): _81.QueryOrderResponse;
                toProto(message: _81.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _81.QueryOrderResponse): _81.QueryOrderResponseProtoMsg;
            };
            QueryOrdersResponse: {
                encode(message: _81.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        endTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryOrdersResponse;
                fromAmino(object: _81.QueryOrdersResponseAmino): _81.QueryOrdersResponse;
                toAmino(message: _81.QueryOrdersResponse): _81.QueryOrdersResponseAmino;
                fromAminoMsg(object: _81.QueryOrdersResponseAminoMsg): _81.QueryOrdersResponse;
                fromProtoMsg(message: _81.QueryOrdersResponseProtoMsg): _81.QueryOrdersResponse;
                toProto(message: _81.QueryOrdersResponse): Uint8Array;
                toProtoMsg(message: _81.QueryOrdersResponse): _81.QueryOrdersResponseProtoMsg;
            };
            QueryAllOrderRequest: {
                encode(message: _81.QueryAllOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryAllOrderRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryAllOrderRequest;
                fromAmino(object: _81.QueryAllOrderRequestAmino): _81.QueryAllOrderRequest;
                toAmino(message: _81.QueryAllOrderRequest): _81.QueryAllOrderRequestAmino;
                fromAminoMsg(object: _81.QueryAllOrderRequestAminoMsg): _81.QueryAllOrderRequest;
                fromProtoMsg(message: _81.QueryAllOrderRequestProtoMsg): _81.QueryAllOrderRequest;
                toProto(message: _81.QueryAllOrderRequest): Uint8Array;
                toProtoMsg(message: _81.QueryAllOrderRequest): _81.QueryAllOrderRequestProtoMsg;
            };
            QueryOrderOwnerRequest: {
                encode(message: _81.QueryOrderOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryOrderOwnerRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryOrderOwnerRequest;
                fromAmino(object: _81.QueryOrderOwnerRequestAmino): _81.QueryOrderOwnerRequest;
                toAmino(message: _81.QueryOrderOwnerRequest): _81.QueryOrderOwnerRequestAmino;
                fromAminoMsg(object: _81.QueryOrderOwnerRequestAminoMsg): _81.QueryOrderOwnerRequest;
                fromProtoMsg(message: _81.QueryOrderOwnerRequestProtoMsg): _81.QueryOrderOwnerRequest;
                toProto(message: _81.QueryOrderOwnerRequest): Uint8Array;
                toProtoMsg(message: _81.QueryOrderOwnerRequest): _81.QueryOrderOwnerRequestProtoMsg;
            };
            QueryOrderOwnerUidsResponse: {
                encode(message: _81.QueryOrderOwnerUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryOrderOwnerUidsResponse;
                fromPartial(object: {
                    orders?: {
                        uids?: (string | number | import("long").Long)[];
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryOrderOwnerUidsResponse;
                fromAmino(object: _81.QueryOrderOwnerUidsResponseAmino): _81.QueryOrderOwnerUidsResponse;
                toAmino(message: _81.QueryOrderOwnerUidsResponse): _81.QueryOrderOwnerUidsResponseAmino;
                fromAminoMsg(object: _81.QueryOrderOwnerUidsResponseAminoMsg): _81.QueryOrderOwnerUidsResponse;
                fromProtoMsg(message: _81.QueryOrderOwnerUidsResponseProtoMsg): _81.QueryOrderOwnerUidsResponse;
                toProto(message: _81.QueryOrderOwnerUidsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryOrderOwnerUidsResponse): _81.QueryOrderOwnerUidsResponseProtoMsg;
            };
            QueryOrderOwnerPairRequest: {
                encode(message: _81.QueryOrderOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryOrderOwnerPairRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryOrderOwnerPairRequest;
                fromAmino(object: _81.QueryOrderOwnerPairRequestAmino): _81.QueryOrderOwnerPairRequest;
                toAmino(message: _81.QueryOrderOwnerPairRequest): _81.QueryOrderOwnerPairRequestAmino;
                fromAminoMsg(object: _81.QueryOrderOwnerPairRequestAminoMsg): _81.QueryOrderOwnerPairRequest;
                fromProtoMsg(message: _81.QueryOrderOwnerPairRequestProtoMsg): _81.QueryOrderOwnerPairRequest;
                toProto(message: _81.QueryOrderOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _81.QueryOrderOwnerPairRequest): _81.QueryOrderOwnerPairRequestProtoMsg;
            };
            QueryOrderOwnerPairResponse: {
                encode(message: _81.QueryOrderOwnerPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryOrderOwnerPairResponse;
                fromPartial(object: {
                    order?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        endTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryOrderOwnerPairResponse;
                fromAmino(object: _81.QueryOrderOwnerPairResponseAmino): _81.QueryOrderOwnerPairResponse;
                toAmino(message: _81.QueryOrderOwnerPairResponse): _81.QueryOrderOwnerPairResponseAmino;
                fromAminoMsg(object: _81.QueryOrderOwnerPairResponseAminoMsg): _81.QueryOrderOwnerPairResponse;
                fromProtoMsg(message: _81.QueryOrderOwnerPairResponseProtoMsg): _81.QueryOrderOwnerPairResponse;
                toProto(message: _81.QueryOrderOwnerPairResponse): Uint8Array;
                toProtoMsg(message: _81.QueryOrderOwnerPairResponse): _81.QueryOrderOwnerPairResponseProtoMsg;
            };
            QueryBookRequest: {
                encode(message: _81.QueryBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryBookRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                    orderType?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryBookRequest;
                fromAmino(object: _81.QueryBookRequestAmino): _81.QueryBookRequest;
                toAmino(message: _81.QueryBookRequest): _81.QueryBookRequestAmino;
                fromAminoMsg(object: _81.QueryBookRequestAminoMsg): _81.QueryBookRequest;
                fromProtoMsg(message: _81.QueryBookRequestProtoMsg): _81.QueryBookRequest;
                toProto(message: _81.QueryBookRequest): Uint8Array;
                toProtoMsg(message: _81.QueryBookRequest): _81.QueryBookRequestProtoMsg;
            };
            QueryBookResponse: {
                encode(message: _81.QueryBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryBookResponse;
                fromPartial(object: {
                    book?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        endTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryBookResponse;
                fromAmino(object: _81.QueryBookResponseAmino): _81.QueryBookResponse;
                toAmino(message: _81.QueryBookResponse): _81.QueryBookResponseAmino;
                fromAminoMsg(object: _81.QueryBookResponseAminoMsg): _81.QueryBookResponse;
                fromProtoMsg(message: _81.QueryBookResponseProtoMsg): _81.QueryBookResponse;
                toProto(message: _81.QueryBookResponse): Uint8Array;
                toProtoMsg(message: _81.QueryBookResponse): _81.QueryBookResponseProtoMsg;
            };
            QueryBookendsRequest: {
                encode(message: _81.QueryBookendsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryBookendsRequest;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                }): _81.QueryBookendsRequest;
                fromAmino(object: _81.QueryBookendsRequestAmino): _81.QueryBookendsRequest;
                toAmino(message: _81.QueryBookendsRequest): _81.QueryBookendsRequestAmino;
                fromAminoMsg(object: _81.QueryBookendsRequestAminoMsg): _81.QueryBookendsRequest;
                fromProtoMsg(message: _81.QueryBookendsRequestProtoMsg): _81.QueryBookendsRequest;
                toProto(message: _81.QueryBookendsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryBookendsRequest): _81.QueryBookendsRequestProtoMsg;
            };
            QueryBookendsResponse: {
                encode(message: _81.QueryBookendsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryBookendsResponse;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                    prev?: string | number | import("long").Long;
                    next?: string | number | import("long").Long;
                }): _81.QueryBookendsResponse;
                fromAmino(object: _81.QueryBookendsResponseAmino): _81.QueryBookendsResponse;
                toAmino(message: _81.QueryBookendsResponse): _81.QueryBookendsResponseAmino;
                fromAminoMsg(object: _81.QueryBookendsResponseAminoMsg): _81.QueryBookendsResponse;
                fromProtoMsg(message: _81.QueryBookendsResponseProtoMsg): _81.QueryBookendsResponse;
                toProto(message: _81.QueryBookendsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryBookendsResponse): _81.QueryBookendsResponseProtoMsg;
            };
            QueryHistoryRequest: {
                encode(message: _81.QueryHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryHistoryRequest;
                fromPartial(object: {
                    pair?: string;
                    length?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _81.QueryHistoryRequest;
                fromAmino(object: _81.QueryHistoryRequestAmino): _81.QueryHistoryRequest;
                toAmino(message: _81.QueryHistoryRequest): _81.QueryHistoryRequestAmino;
                fromAminoMsg(object: _81.QueryHistoryRequestAminoMsg): _81.QueryHistoryRequest;
                fromProtoMsg(message: _81.QueryHistoryRequestProtoMsg): _81.QueryHistoryRequest;
                toProto(message: _81.QueryHistoryRequest): Uint8Array;
                toProtoMsg(message: _81.QueryHistoryRequest): _81.QueryHistoryRequestProtoMsg;
            };
            QueryHistoryResponse: {
                encode(message: _81.QueryHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryHistoryResponse;
                fromPartial(object: {
                    history?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        endTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _81.QueryHistoryResponse;
                fromAmino(object: _81.QueryHistoryResponseAmino): _81.QueryHistoryResponse;
                toAmino(message: _81.QueryHistoryResponse): _81.QueryHistoryResponseAmino;
                fromAminoMsg(object: _81.QueryHistoryResponseAminoMsg): _81.QueryHistoryResponse;
                fromProtoMsg(message: _81.QueryHistoryResponseProtoMsg): _81.QueryHistoryResponse;
                toProto(message: _81.QueryHistoryResponse): Uint8Array;
                toProtoMsg(message: _81.QueryHistoryResponse): _81.QueryHistoryResponseProtoMsg;
            };
            Pool: {
                encode(message: _80.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Pool;
                fromPartial(object: {
                    pair?: string;
                    denom1?: string;
                    denom2?: string;
                    leaders?: {
                        address?: string;
                        drops?: string;
                    }[];
                    drops?: string;
                    history?: string | number | import("long").Long;
                }): _80.Pool;
                fromAmino(object: _80.PoolAmino): _80.Pool;
                toAmino(message: _80.Pool): _80.PoolAmino;
                fromAminoMsg(object: _80.PoolAminoMsg): _80.Pool;
                fromProtoMsg(message: _80.PoolProtoMsg): _80.Pool;
                toProto(message: _80.Pool): Uint8Array;
                toProtoMsg(message: _80.Pool): _80.PoolProtoMsg;
            };
            Leader: {
                encode(message: _80.Leader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Leader;
                fromPartial(object: {
                    address?: string;
                    drops?: string;
                }): _80.Leader;
                fromAmino(object: _80.LeaderAmino): _80.Leader;
                toAmino(message: _80.Leader): _80.LeaderAmino;
                fromAminoMsg(object: _80.LeaderAminoMsg): _80.Leader;
                fromProtoMsg(message: _80.LeaderProtoMsg): _80.Leader;
                toProto(message: _80.Leader): Uint8Array;
                toProtoMsg(message: _80.Leader): _80.LeaderProtoMsg;
            };
            Params: {
                encode(message: _79.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Params;
                fromPartial(object: {
                    earnRates?: string;
                    burnRate?: string;
                    burnCoin?: string;
                    marketFee?: string;
                }): _79.Params;
                fromAmino(object: _79.ParamsAmino): _79.Params;
                toAmino(message: _79.Params): _79.ParamsAmino;
                fromAminoMsg(object: _79.ParamsAminoMsg): _79.Params;
                fromProtoMsg(message: _79.ParamsProtoMsg): _79.Params;
                toProto(message: _79.Params): Uint8Array;
                toProtoMsg(message: _79.Params): _79.ParamsProtoMsg;
            };
            Order: {
                encode(message: _78.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Order;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                    owner?: string;
                    status?: string;
                    orderType?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    amount?: string;
                    rate?: string[];
                    prev?: string | number | import("long").Long;
                    next?: string | number | import("long").Long;
                    begTime?: string | number | import("long").Long;
                    endTime?: string | number | import("long").Long;
                }): _78.Order;
                fromAmino(object: _78.OrderAmino): _78.Order;
                toAmino(message: _78.Order): _78.OrderAmino;
                fromAminoMsg(object: _78.OrderAminoMsg): _78.Order;
                fromProtoMsg(message: _78.OrderProtoMsg): _78.Order;
                toProto(message: _78.Order): Uint8Array;
                toProtoMsg(message: _78.Order): _78.OrderProtoMsg;
            };
            Orders: {
                encode(message: _78.Orders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Orders;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                }): _78.Orders;
                fromAmino(object: _78.OrdersAmino): _78.Orders;
                toAmino(message: _78.Orders): _78.OrdersAmino;
                fromAminoMsg(object: _78.OrdersAminoMsg): _78.Orders;
                fromProtoMsg(message: _78.OrdersProtoMsg): _78.Orders;
                toProto(message: _78.Orders): Uint8Array;
                toProtoMsg(message: _78.Orders): _78.OrdersProtoMsg;
            };
            OrderResponse: {
                encode(message: _78.OrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.OrderResponse;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                    owner?: string;
                    status?: string;
                    orderType?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    amount?: string;
                    rate?: string[];
                    prev?: string | number | import("long").Long;
                    next?: string | number | import("long").Long;
                    begTime?: string | number | import("long").Long;
                    endTime?: string | number | import("long").Long;
                }): _78.OrderResponse;
                fromAmino(object: _78.OrderResponseAmino): _78.OrderResponse;
                toAmino(message: _78.OrderResponse): _78.OrderResponseAmino;
                fromAminoMsg(object: _78.OrderResponseAminoMsg): _78.OrderResponse;
                fromProtoMsg(message: _78.OrderResponseProtoMsg): _78.OrderResponse;
                toProto(message: _78.OrderResponse): Uint8Array;
                toProtoMsg(message: _78.OrderResponse): _78.OrderResponseProtoMsg;
            };
            Member: {
                encode(message: _77.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Member;
                fromPartial(object: {
                    pair?: string;
                    denomA?: string;
                    denomB?: string;
                    balance?: string;
                    previous?: string;
                    limit?: string | number | import("long").Long;
                    stop?: string | number | import("long").Long;
                }): _77.Member;
                fromAmino(object: _77.MemberAmino): _77.Member;
                toAmino(message: _77.Member): _77.MemberAmino;
                fromAminoMsg(object: _77.MemberAminoMsg): _77.Member;
                fromProtoMsg(message: _77.MemberProtoMsg): _77.Member;
                toProto(message: _77.Member): Uint8Array;
                toProtoMsg(message: _77.Member): _77.MemberProtoMsg;
            };
            GenesisState: {
                encode(message: _76.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.GenesisState;
                fromPartial(object: {
                    params?: {
                        earnRates?: string;
                        burnRate?: string;
                        burnCoin?: string;
                        marketFee?: string;
                    };
                    poolList?: {
                        pair?: string;
                        denom1?: string;
                        denom2?: string;
                        leaders?: {
                            address?: string;
                            drops?: string;
                        }[];
                        drops?: string;
                        history?: string | number | import("long").Long;
                    }[];
                    dropList?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        pair?: string;
                        drops?: string;
                        product?: string;
                        active?: boolean;
                    }[];
                    memberList?: {
                        pair?: string;
                        denomA?: string;
                        denomB?: string;
                        balance?: string;
                        previous?: string;
                        limit?: string | number | import("long").Long;
                        stop?: string | number | import("long").Long;
                    }[];
                    burningsList?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    orderList?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        status?: string;
                        orderType?: string;
                        denomAsk?: string;
                        denomBid?: string;
                        amount?: string;
                        rate?: string[];
                        prev?: string | number | import("long").Long;
                        next?: string | number | import("long").Long;
                        begTime?: string | number | import("long").Long;
                        endTime?: string | number | import("long").Long;
                    }[];
                }): _76.GenesisState;
                fromAmino(object: _76.GenesisStateAmino): _76.GenesisState;
                toAmino(message: _76.GenesisState): _76.GenesisStateAmino;
                fromAminoMsg(object: _76.GenesisStateAminoMsg): _76.GenesisState;
                fromProtoMsg(message: _76.GenesisStateProtoMsg): _76.GenesisState;
                toProto(message: _76.GenesisState): Uint8Array;
                toProtoMsg(message: _76.GenesisState): _76.GenesisStateProtoMsg;
            };
            Drop: {
                encode(message: _75.Drop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Drop;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                    owner?: string;
                    pair?: string;
                    drops?: string;
                    product?: string;
                    active?: boolean;
                }): _75.Drop;
                fromAmino(object: _75.DropAmino): _75.Drop;
                toAmino(message: _75.Drop): _75.DropAmino;
                fromAminoMsg(object: _75.DropAminoMsg): _75.Drop;
                fromProtoMsg(message: _75.DropProtoMsg): _75.Drop;
                toProto(message: _75.Drop): Uint8Array;
                toProtoMsg(message: _75.Drop): _75.DropProtoMsg;
            };
            Drops: {
                encode(message: _75.Drops, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Drops;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    sum?: string;
                }): _75.Drops;
                fromAmino(object: _75.DropsAmino): _75.Drops;
                toAmino(message: _75.Drops): _75.DropsAmino;
                fromAminoMsg(object: _75.DropsAminoMsg): _75.Drops;
                fromProtoMsg(message: _75.DropsProtoMsg): _75.Drops;
                toProto(message: _75.Drops): Uint8Array;
                toProtoMsg(message: _75.Drops): _75.DropsProtoMsg;
            };
            DropPairs: {
                encode(message: _75.DropPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.DropPairs;
                fromPartial(object: {
                    pairs?: string[];
                }): _75.DropPairs;
                fromAmino(object: _75.DropPairsAmino): _75.DropPairs;
                toAmino(message: _75.DropPairs): _75.DropPairsAmino;
                fromAminoMsg(object: _75.DropPairsAminoMsg): _75.DropPairs;
                fromProtoMsg(message: _75.DropPairsProtoMsg): _75.DropPairs;
                toProto(message: _75.DropPairs): Uint8Array;
                toProtoMsg(message: _75.DropPairs): _75.DropPairsProtoMsg;
            };
            Burnings: {
                encode(message: _74.Burnings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Burnings;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _74.Burnings;
                fromAmino(object: _74.BurningsAmino): _74.Burnings;
                toAmino(message: _74.Burnings): _74.BurningsAmino;
                fromAminoMsg(object: _74.BurningsAminoMsg): _74.Burnings;
                fromProtoMsg(message: _74.BurningsProtoMsg): _74.Burnings;
                toProto(message: _74.Burnings): Uint8Array;
                toProtoMsg(message: _74.Burnings): _74.BurningsProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            pendulumlabs: {
                market: {
                    market: _115.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
            pendulumlabs: {
                market: {
                    market: {
                        params(request?: _81.QueryParamsRequest): Promise<_81.QueryParamsResponse>;
                        pool(request: _81.QueryGetPoolRequest): Promise<_81.QueryGetPoolResponse>;
                        poolAll(request?: _81.QueryAllPoolRequest): Promise<_81.QueryAllPoolResponse>;
                        drop(request: _81.QueryDropRequest): Promise<_81.QueryDropResponse>;
                        dropAmounts(request: _81.QueryDropAmountsRequest): Promise<_81.QueryDropAmountsResponse>;
                        dropPairs(request: _81.QueryDropPairsRequest): Promise<_81.QueryDropPairsResponse>;
                        dropOwnerPair(request: _81.QueryDropOwnerPairRequest): Promise<_81.QueryDropsResponse>;
                        dropAll(request?: _81.QueryAllDropRequest): Promise<_81.QueryDropsResponse>;
                        member(request: _81.QueryGetMemberRequest): Promise<_81.QueryGetMemberResponse>;
                        memberAll(request?: _81.QueryAllMemberRequest): Promise<_81.QueryAllMemberResponse>;
                        burnings(request: _81.QueryGetBurningsRequest): Promise<_81.QueryGetBurningsResponse>;
                        burningsAll(request?: _81.QueryAllBurningsRequest): Promise<_81.QueryAllBurningsResponse>;
                        order(request: _81.QueryOrderRequest): Promise<_81.QueryOrderResponse>;
                        orderAll(request?: _81.QueryAllOrderRequest): Promise<_81.QueryOrdersResponse>;
                        orderOwner(request: _81.QueryOrderOwnerRequest): Promise<_81.QueryOrdersResponse>;
                        orderOwnerUids(request: _81.QueryOrderOwnerRequest): Promise<_81.QueryOrderOwnerUidsResponse>;
                        book(request: _81.QueryBookRequest): Promise<_81.QueryBookResponse>;
                        bookends(request: _81.QueryBookendsRequest): Promise<_81.QueryBookendsResponse>;
                        history(request: _81.QueryHistoryRequest): Promise<_81.QueryHistoryResponse>;
                    };
                };
            };
        }>;
    };
}
