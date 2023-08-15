/// <reference types="long" />
import * as _72 from "../market/burnings";
import * as _73 from "../market/drop";
import * as _74 from "../market/genesis";
import * as _75 from "../market/member";
import * as _76 from "../market/order";
import * as _77 from "../market/params";
import * as _78 from "../market/pool";
import * as _79 from "../market/query";
import * as _80 from "../market/tx";
import * as _111 from "../market/query.rpc.Query";
import * as _112 from "../market/tx.rpc.msg";
export declare namespace pendulumlabs {
    namespace market {
        const market: {
            MsgClientImpl: typeof _112.MsgClientImpl;
            QueryClientImpl: typeof _111.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                pool(request: _79.QueryGetPoolRequest): Promise<_79.QueryGetPoolResponse>;
                poolAll(request?: _79.QueryAllPoolRequest): Promise<_79.QueryAllPoolResponse>;
                drop(request: _79.QueryDropRequest): Promise<_79.QueryDropResponse>;
                dropAmounts(request: _79.QueryDropAmountsRequest): Promise<_79.QueryDropAmountsResponse>;
                dropPairs(request: _79.QueryDropPairsRequest): Promise<_79.QueryDropPairsResponse>;
                dropOwnerPair(request: _79.QueryDropOwnerPairRequest): Promise<_79.QueryDropsResponse>;
                dropAll(request?: _79.QueryAllDropRequest): Promise<_79.QueryDropsResponse>;
                member(request: _79.QueryGetMemberRequest): Promise<_79.QueryGetMemberResponse>;
                memberAll(request?: _79.QueryAllMemberRequest): Promise<_79.QueryAllMemberResponse>;
                burnings(request: _79.QueryGetBurningsRequest): Promise<_79.QueryGetBurningsResponse>;
                burningsAll(request?: _79.QueryAllBurningsRequest): Promise<_79.QueryAllBurningsResponse>;
                order(request: _79.QueryOrderRequest): Promise<_79.QueryOrderResponse>;
                orderAll(request?: _79.QueryAllOrderRequest): Promise<_79.QueryOrdersResponse>;
                orderOwner(request: _79.QueryOrderOwnerRequest): Promise<_79.QueryOrdersResponse>;
                orderOwnerUids(request: _79.QueryOrderOwnerRequest): Promise<_79.QueryOrderOwnerUidsResponse>;
                book(request: _79.QueryBookRequest): Promise<_79.QueryBookResponse>;
                bookends(request: _79.QueryBookendsRequest): Promise<_79.QueryBookendsResponse>;
                history(request: _79.QueryHistoryRequest): Promise<_79.QueryHistoryResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPool(value: _80.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDrop(value: _80.MsgCreateDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemDrop(value: _80.MsgRedeemDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createOrder(value: _80.MsgCreateOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _80.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    marketOrder(value: _80.MsgMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPool(value: _80.MsgCreatePool): {
                        typeUrl: string;
                        value: _80.MsgCreatePool;
                    };
                    createDrop(value: _80.MsgCreateDrop): {
                        typeUrl: string;
                        value: _80.MsgCreateDrop;
                    };
                    redeemDrop(value: _80.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _80.MsgRedeemDrop;
                    };
                    createOrder(value: _80.MsgCreateOrder): {
                        typeUrl: string;
                        value: _80.MsgCreateOrder;
                    };
                    cancelOrder(value: _80.MsgCancelOrder): {
                        typeUrl: string;
                        value: _80.MsgCancelOrder;
                    };
                    marketOrder(value: _80.MsgMarketOrder): {
                        typeUrl: string;
                        value: _80.MsgMarketOrder;
                    };
                };
                fromPartial: {
                    createPool(value: _80.MsgCreatePool): {
                        typeUrl: string;
                        value: _80.MsgCreatePool;
                    };
                    createDrop(value: _80.MsgCreateDrop): {
                        typeUrl: string;
                        value: _80.MsgCreateDrop;
                    };
                    redeemDrop(value: _80.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _80.MsgRedeemDrop;
                    };
                    createOrder(value: _80.MsgCreateOrder): {
                        typeUrl: string;
                        value: _80.MsgCreateOrder;
                    };
                    cancelOrder(value: _80.MsgCancelOrder): {
                        typeUrl: string;
                        value: _80.MsgCancelOrder;
                    };
                    marketOrder(value: _80.MsgMarketOrder): {
                        typeUrl: string;
                        value: _80.MsgMarketOrder;
                    };
                };
            };
            AminoConverter: {
                "/pendulumlabs.market.market.MsgCreatePool": {
                    aminoType: string;
                    toAmino: (message: _80.MsgCreatePool) => _80.MsgCreatePoolAmino;
                    fromAmino: (object: _80.MsgCreatePoolAmino) => _80.MsgCreatePool;
                };
                "/pendulumlabs.market.market.MsgCreateDrop": {
                    aminoType: string;
                    toAmino: (message: _80.MsgCreateDrop) => _80.MsgCreateDropAmino;
                    fromAmino: (object: _80.MsgCreateDropAmino) => _80.MsgCreateDrop;
                };
                "/pendulumlabs.market.market.MsgRedeemDrop": {
                    aminoType: string;
                    toAmino: (message: _80.MsgRedeemDrop) => _80.MsgRedeemDropAmino;
                    fromAmino: (object: _80.MsgRedeemDropAmino) => _80.MsgRedeemDrop;
                };
                "/pendulumlabs.market.market.MsgCreateOrder": {
                    aminoType: string;
                    toAmino: (message: _80.MsgCreateOrder) => _80.MsgCreateOrderAmino;
                    fromAmino: (object: _80.MsgCreateOrderAmino) => _80.MsgCreateOrder;
                };
                "/pendulumlabs.market.market.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: (message: _80.MsgCancelOrder) => _80.MsgCancelOrderAmino;
                    fromAmino: (object: _80.MsgCancelOrderAmino) => _80.MsgCancelOrder;
                };
                "/pendulumlabs.market.market.MsgMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _80.MsgMarketOrder) => _80.MsgMarketOrderAmino;
                    fromAmino: (object: _80.MsgMarketOrderAmino) => _80.MsgMarketOrder;
                };
            };
            MsgCreatePool: {
                encode(message: _80.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreatePool;
                fromPartial(object: {
                    creator?: string;
                    coinA?: string;
                    coinB?: string;
                }): _80.MsgCreatePool;
                fromAmino(object: _80.MsgCreatePoolAmino): _80.MsgCreatePool;
                toAmino(message: _80.MsgCreatePool): _80.MsgCreatePoolAmino;
                fromAminoMsg(object: _80.MsgCreatePoolAminoMsg): _80.MsgCreatePool;
                fromProtoMsg(message: _80.MsgCreatePoolProtoMsg): _80.MsgCreatePool;
                toProto(message: _80.MsgCreatePool): Uint8Array;
                toProtoMsg(message: _80.MsgCreatePool): _80.MsgCreatePoolProtoMsg;
            };
            MsgCreatePoolResponse: {
                encode(_: _80.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreatePoolResponse;
                fromPartial(_: {}): _80.MsgCreatePoolResponse;
                fromAmino(_: _80.MsgCreatePoolResponseAmino): _80.MsgCreatePoolResponse;
                toAmino(_: _80.MsgCreatePoolResponse): _80.MsgCreatePoolResponseAmino;
                fromAminoMsg(object: _80.MsgCreatePoolResponseAminoMsg): _80.MsgCreatePoolResponse;
                fromProtoMsg(message: _80.MsgCreatePoolResponseProtoMsg): _80.MsgCreatePoolResponse;
                toProto(message: _80.MsgCreatePoolResponse): Uint8Array;
                toProtoMsg(message: _80.MsgCreatePoolResponse): _80.MsgCreatePoolResponseProtoMsg;
            };
            MsgCreateDrop: {
                encode(message: _80.MsgCreateDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateDrop;
                fromPartial(object: {
                    creator?: string;
                    pair?: string;
                    drops?: string;
                }): _80.MsgCreateDrop;
                fromAmino(object: _80.MsgCreateDropAmino): _80.MsgCreateDrop;
                toAmino(message: _80.MsgCreateDrop): _80.MsgCreateDropAmino;
                fromAminoMsg(object: _80.MsgCreateDropAminoMsg): _80.MsgCreateDrop;
                fromProtoMsg(message: _80.MsgCreateDropProtoMsg): _80.MsgCreateDrop;
                toProto(message: _80.MsgCreateDrop): Uint8Array;
                toProtoMsg(message: _80.MsgCreateDrop): _80.MsgCreateDropProtoMsg;
            };
            MsgCreateDropResponse: {
                encode(_: _80.MsgCreateDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateDropResponse;
                fromPartial(_: {}): _80.MsgCreateDropResponse;
                fromAmino(_: _80.MsgCreateDropResponseAmino): _80.MsgCreateDropResponse;
                toAmino(_: _80.MsgCreateDropResponse): _80.MsgCreateDropResponseAmino;
                fromAminoMsg(object: _80.MsgCreateDropResponseAminoMsg): _80.MsgCreateDropResponse;
                fromProtoMsg(message: _80.MsgCreateDropResponseProtoMsg): _80.MsgCreateDropResponse;
                toProto(message: _80.MsgCreateDropResponse): Uint8Array;
                toProtoMsg(message: _80.MsgCreateDropResponse): _80.MsgCreateDropResponseProtoMsg;
            };
            MsgRedeemDrop: {
                encode(message: _80.MsgRedeemDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgRedeemDrop;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _80.MsgRedeemDrop;
                fromAmino(object: _80.MsgRedeemDropAmino): _80.MsgRedeemDrop;
                toAmino(message: _80.MsgRedeemDrop): _80.MsgRedeemDropAmino;
                fromAminoMsg(object: _80.MsgRedeemDropAminoMsg): _80.MsgRedeemDrop;
                fromProtoMsg(message: _80.MsgRedeemDropProtoMsg): _80.MsgRedeemDrop;
                toProto(message: _80.MsgRedeemDrop): Uint8Array;
                toProtoMsg(message: _80.MsgRedeemDrop): _80.MsgRedeemDropProtoMsg;
            };
            MsgRedeemDropResponse: {
                encode(_: _80.MsgRedeemDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgRedeemDropResponse;
                fromPartial(_: {}): _80.MsgRedeemDropResponse;
                fromAmino(_: _80.MsgRedeemDropResponseAmino): _80.MsgRedeemDropResponse;
                toAmino(_: _80.MsgRedeemDropResponse): _80.MsgRedeemDropResponseAmino;
                fromAminoMsg(object: _80.MsgRedeemDropResponseAminoMsg): _80.MsgRedeemDropResponse;
                fromProtoMsg(message: _80.MsgRedeemDropResponseProtoMsg): _80.MsgRedeemDropResponse;
                toProto(message: _80.MsgRedeemDropResponse): Uint8Array;
                toProtoMsg(message: _80.MsgRedeemDropResponse): _80.MsgRedeemDropResponseProtoMsg;
            };
            MsgCreateOrder: {
                encode(message: _80.MsgCreateOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    orderType?: string;
                    amount?: string;
                    rate?: string[];
                    prev?: string;
                    next?: string;
                }): _80.MsgCreateOrder;
                fromAmino(object: _80.MsgCreateOrderAmino): _80.MsgCreateOrder;
                toAmino(message: _80.MsgCreateOrder): _80.MsgCreateOrderAmino;
                fromAminoMsg(object: _80.MsgCreateOrderAminoMsg): _80.MsgCreateOrder;
                fromProtoMsg(message: _80.MsgCreateOrderProtoMsg): _80.MsgCreateOrder;
                toProto(message: _80.MsgCreateOrder): Uint8Array;
                toProtoMsg(message: _80.MsgCreateOrder): _80.MsgCreateOrderProtoMsg;
            };
            MsgCreateOrderResponse: {
                encode(message: _80.MsgCreateOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateOrderResponse;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _80.MsgCreateOrderResponse;
                fromAmino(object: _80.MsgCreateOrderResponseAmino): _80.MsgCreateOrderResponse;
                toAmino(message: _80.MsgCreateOrderResponse): _80.MsgCreateOrderResponseAmino;
                fromAminoMsg(object: _80.MsgCreateOrderResponseAminoMsg): _80.MsgCreateOrderResponse;
                fromProtoMsg(message: _80.MsgCreateOrderResponseProtoMsg): _80.MsgCreateOrderResponse;
                toProto(message: _80.MsgCreateOrderResponse): Uint8Array;
                toProtoMsg(message: _80.MsgCreateOrderResponse): _80.MsgCreateOrderResponseProtoMsg;
            };
            MsgCancelOrder: {
                encode(message: _80.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCancelOrder;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _80.MsgCancelOrder;
                fromAmino(object: _80.MsgCancelOrderAmino): _80.MsgCancelOrder;
                toAmino(message: _80.MsgCancelOrder): _80.MsgCancelOrderAmino;
                fromAminoMsg(object: _80.MsgCancelOrderAminoMsg): _80.MsgCancelOrder;
                fromProtoMsg(message: _80.MsgCancelOrderProtoMsg): _80.MsgCancelOrder;
                toProto(message: _80.MsgCancelOrder): Uint8Array;
                toProtoMsg(message: _80.MsgCancelOrder): _80.MsgCancelOrderProtoMsg;
            };
            MsgCancelOrderResponse: {
                encode(_: _80.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCancelOrderResponse;
                fromPartial(_: {}): _80.MsgCancelOrderResponse;
                fromAmino(_: _80.MsgCancelOrderResponseAmino): _80.MsgCancelOrderResponse;
                toAmino(_: _80.MsgCancelOrderResponse): _80.MsgCancelOrderResponseAmino;
                fromAminoMsg(object: _80.MsgCancelOrderResponseAminoMsg): _80.MsgCancelOrderResponse;
                fromProtoMsg(message: _80.MsgCancelOrderResponseProtoMsg): _80.MsgCancelOrderResponse;
                toProto(message: _80.MsgCancelOrderResponse): Uint8Array;
                toProtoMsg(message: _80.MsgCancelOrderResponse): _80.MsgCancelOrderResponseProtoMsg;
            };
            MsgMarketOrder: {
                encode(message: _80.MsgMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgMarketOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    amountBid?: string;
                    slippage?: string;
                }): _80.MsgMarketOrder;
                fromAmino(object: _80.MsgMarketOrderAmino): _80.MsgMarketOrder;
                toAmino(message: _80.MsgMarketOrder): _80.MsgMarketOrderAmino;
                fromAminoMsg(object: _80.MsgMarketOrderAminoMsg): _80.MsgMarketOrder;
                fromProtoMsg(message: _80.MsgMarketOrderProtoMsg): _80.MsgMarketOrder;
                toProto(message: _80.MsgMarketOrder): Uint8Array;
                toProtoMsg(message: _80.MsgMarketOrder): _80.MsgMarketOrderProtoMsg;
            };
            MsgMarketOrderResponse: {
                encode(_: _80.MsgMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgMarketOrderResponse;
                fromPartial(_: {}): _80.MsgMarketOrderResponse;
                fromAmino(_: _80.MsgMarketOrderResponseAmino): _80.MsgMarketOrderResponse;
                toAmino(_: _80.MsgMarketOrderResponse): _80.MsgMarketOrderResponseAmino;
                fromAminoMsg(object: _80.MsgMarketOrderResponseAminoMsg): _80.MsgMarketOrderResponse;
                fromProtoMsg(message: _80.MsgMarketOrderResponseProtoMsg): _80.MsgMarketOrderResponse;
                toProto(message: _80.MsgMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _80.MsgMarketOrderResponse): _80.MsgMarketOrderResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _79.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsRequest;
                fromPartial(_: {}): _79.QueryParamsRequest;
                fromAmino(_: _79.QueryParamsRequestAmino): _79.QueryParamsRequest;
                toAmino(_: _79.QueryParamsRequest): _79.QueryParamsRequestAmino;
                fromAminoMsg(object: _79.QueryParamsRequestAminoMsg): _79.QueryParamsRequest;
                fromProtoMsg(message: _79.QueryParamsRequestProtoMsg): _79.QueryParamsRequest;
                toProto(message: _79.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryParamsRequest): _79.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _79.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        earnRates?: string;
                        burnRate?: string;
                        burnCoin?: string;
                        marketFee?: string;
                    };
                }): _79.QueryParamsResponse;
                fromAmino(object: _79.QueryParamsResponseAmino): _79.QueryParamsResponse;
                toAmino(message: _79.QueryParamsResponse): _79.QueryParamsResponseAmino;
                fromAminoMsg(object: _79.QueryParamsResponseAminoMsg): _79.QueryParamsResponse;
                fromProtoMsg(message: _79.QueryParamsResponseProtoMsg): _79.QueryParamsResponse;
                toProto(message: _79.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryParamsResponse): _79.QueryParamsResponseProtoMsg;
            };
            QueryGetPoolRequest: {
                encode(message: _79.QueryGetPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGetPoolRequest;
                fromPartial(object: {
                    pair?: string;
                }): _79.QueryGetPoolRequest;
                fromAmino(object: _79.QueryGetPoolRequestAmino): _79.QueryGetPoolRequest;
                toAmino(message: _79.QueryGetPoolRequest): _79.QueryGetPoolRequestAmino;
                fromAminoMsg(object: _79.QueryGetPoolRequestAminoMsg): _79.QueryGetPoolRequest;
                fromProtoMsg(message: _79.QueryGetPoolRequestProtoMsg): _79.QueryGetPoolRequest;
                toProto(message: _79.QueryGetPoolRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGetPoolRequest): _79.QueryGetPoolRequestProtoMsg;
            };
            QueryGetPoolResponse: {
                encode(message: _79.QueryGetPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGetPoolResponse;
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
                }): _79.QueryGetPoolResponse;
                fromAmino(object: _79.QueryGetPoolResponseAmino): _79.QueryGetPoolResponse;
                toAmino(message: _79.QueryGetPoolResponse): _79.QueryGetPoolResponseAmino;
                fromAminoMsg(object: _79.QueryGetPoolResponseAminoMsg): _79.QueryGetPoolResponse;
                fromProtoMsg(message: _79.QueryGetPoolResponseProtoMsg): _79.QueryGetPoolResponse;
                toProto(message: _79.QueryGetPoolResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGetPoolResponse): _79.QueryGetPoolResponseProtoMsg;
            };
            QueryAllPoolRequest: {
                encode(message: _79.QueryAllPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryAllPoolRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _79.QueryAllPoolRequest;
                fromAmino(object: _79.QueryAllPoolRequestAmino): _79.QueryAllPoolRequest;
                toAmino(message: _79.QueryAllPoolRequest): _79.QueryAllPoolRequestAmino;
                fromAminoMsg(object: _79.QueryAllPoolRequestAminoMsg): _79.QueryAllPoolRequest;
                fromProtoMsg(message: _79.QueryAllPoolRequestProtoMsg): _79.QueryAllPoolRequest;
                toProto(message: _79.QueryAllPoolRequest): Uint8Array;
                toProtoMsg(message: _79.QueryAllPoolRequest): _79.QueryAllPoolRequestProtoMsg;
            };
            QueryAllPoolResponse: {
                encode(message: _79.QueryAllPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryAllPoolResponse;
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
                }): _79.QueryAllPoolResponse;
                fromAmino(object: _79.QueryAllPoolResponseAmino): _79.QueryAllPoolResponse;
                toAmino(message: _79.QueryAllPoolResponse): _79.QueryAllPoolResponseAmino;
                fromAminoMsg(object: _79.QueryAllPoolResponseAminoMsg): _79.QueryAllPoolResponse;
                fromProtoMsg(message: _79.QueryAllPoolResponseProtoMsg): _79.QueryAllPoolResponse;
                toProto(message: _79.QueryAllPoolResponse): Uint8Array;
                toProtoMsg(message: _79.QueryAllPoolResponse): _79.QueryAllPoolResponseProtoMsg;
            };
            QueryDropRequest: {
                encode(message: _79.QueryDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _79.QueryDropRequest;
                fromAmino(object: _79.QueryDropRequestAmino): _79.QueryDropRequest;
                toAmino(message: _79.QueryDropRequest): _79.QueryDropRequestAmino;
                fromAminoMsg(object: _79.QueryDropRequestAminoMsg): _79.QueryDropRequest;
                fromProtoMsg(message: _79.QueryDropRequestProtoMsg): _79.QueryDropRequest;
                toProto(message: _79.QueryDropRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDropRequest): _79.QueryDropRequestProtoMsg;
            };
            QueryDropResponse: {
                encode(message: _79.QueryDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropResponse;
                fromPartial(object: {
                    drop?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        pair?: string;
                        drops?: string;
                        product?: string;
                        active?: boolean;
                    };
                }): _79.QueryDropResponse;
                fromAmino(object: _79.QueryDropResponseAmino): _79.QueryDropResponse;
                toAmino(message: _79.QueryDropResponse): _79.QueryDropResponseAmino;
                fromAminoMsg(object: _79.QueryDropResponseAminoMsg): _79.QueryDropResponse;
                fromProtoMsg(message: _79.QueryDropResponseProtoMsg): _79.QueryDropResponse;
                toProto(message: _79.QueryDropResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDropResponse): _79.QueryDropResponseProtoMsg;
            };
            QueryDropAmountsRequest: {
                encode(message: _79.QueryDropAmountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropAmountsRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _79.QueryDropAmountsRequest;
                fromAmino(object: _79.QueryDropAmountsRequestAmino): _79.QueryDropAmountsRequest;
                toAmino(message: _79.QueryDropAmountsRequest): _79.QueryDropAmountsRequestAmino;
                fromAminoMsg(object: _79.QueryDropAmountsRequestAminoMsg): _79.QueryDropAmountsRequest;
                fromProtoMsg(message: _79.QueryDropAmountsRequestProtoMsg): _79.QueryDropAmountsRequest;
                toProto(message: _79.QueryDropAmountsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDropAmountsRequest): _79.QueryDropAmountsRequestProtoMsg;
            };
            QueryDropAmountsResponse: {
                encode(message: _79.QueryDropAmountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropAmountsResponse;
                fromPartial(object: {
                    denom1?: string;
                    denom2?: string;
                    amount1?: string;
                    amount2?: string;
                }): _79.QueryDropAmountsResponse;
                fromAmino(object: _79.QueryDropAmountsResponseAmino): _79.QueryDropAmountsResponse;
                toAmino(message: _79.QueryDropAmountsResponse): _79.QueryDropAmountsResponseAmino;
                fromAminoMsg(object: _79.QueryDropAmountsResponseAminoMsg): _79.QueryDropAmountsResponse;
                fromProtoMsg(message: _79.QueryDropAmountsResponseProtoMsg): _79.QueryDropAmountsResponse;
                toProto(message: _79.QueryDropAmountsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDropAmountsResponse): _79.QueryDropAmountsResponseProtoMsg;
            };
            QueryDropPairsRequest: {
                encode(message: _79.QueryDropPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropPairsRequest;
                fromPartial(object: {
                    address?: string;
                }): _79.QueryDropPairsRequest;
                fromAmino(object: _79.QueryDropPairsRequestAmino): _79.QueryDropPairsRequest;
                toAmino(message: _79.QueryDropPairsRequest): _79.QueryDropPairsRequestAmino;
                fromAminoMsg(object: _79.QueryDropPairsRequestAminoMsg): _79.QueryDropPairsRequest;
                fromProtoMsg(message: _79.QueryDropPairsRequestProtoMsg): _79.QueryDropPairsRequest;
                toProto(message: _79.QueryDropPairsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDropPairsRequest): _79.QueryDropPairsRequestProtoMsg;
            };
            QueryDropPairsResponse: {
                encode(message: _79.QueryDropPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropPairsResponse;
                fromPartial(object: {
                    pairs?: string[];
                }): _79.QueryDropPairsResponse;
                fromAmino(object: _79.QueryDropPairsResponseAmino): _79.QueryDropPairsResponse;
                toAmino(message: _79.QueryDropPairsResponse): _79.QueryDropPairsResponseAmino;
                fromAminoMsg(object: _79.QueryDropPairsResponseAminoMsg): _79.QueryDropPairsResponse;
                fromProtoMsg(message: _79.QueryDropPairsResponseProtoMsg): _79.QueryDropPairsResponse;
                toProto(message: _79.QueryDropPairsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDropPairsResponse): _79.QueryDropPairsResponseProtoMsg;
            };
            QueryDropOwnerPairRequest: {
                encode(message: _79.QueryDropOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropOwnerPairRequest;
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
                }): _79.QueryDropOwnerPairRequest;
                fromAmino(object: _79.QueryDropOwnerPairRequestAmino): _79.QueryDropOwnerPairRequest;
                toAmino(message: _79.QueryDropOwnerPairRequest): _79.QueryDropOwnerPairRequestAmino;
                fromAminoMsg(object: _79.QueryDropOwnerPairRequestAminoMsg): _79.QueryDropOwnerPairRequest;
                fromProtoMsg(message: _79.QueryDropOwnerPairRequestProtoMsg): _79.QueryDropOwnerPairRequest;
                toProto(message: _79.QueryDropOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDropOwnerPairRequest): _79.QueryDropOwnerPairRequestProtoMsg;
            };
            QueryDropOwnerPairSumRequest: {
                encode(message: _79.QueryDropOwnerPairSumRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropOwnerPairSumRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                }): _79.QueryDropOwnerPairSumRequest;
                fromAmino(object: _79.QueryDropOwnerPairSumRequestAmino): _79.QueryDropOwnerPairSumRequest;
                toAmino(message: _79.QueryDropOwnerPairSumRequest): _79.QueryDropOwnerPairSumRequestAmino;
                fromAminoMsg(object: _79.QueryDropOwnerPairSumRequestAminoMsg): _79.QueryDropOwnerPairSumRequest;
                fromProtoMsg(message: _79.QueryDropOwnerPairSumRequestProtoMsg): _79.QueryDropOwnerPairSumRequest;
                toProto(message: _79.QueryDropOwnerPairSumRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDropOwnerPairSumRequest): _79.QueryDropOwnerPairSumRequestProtoMsg;
            };
            QueryDropOwnerPairSumResponse: {
                encode(message: _79.QueryDropOwnerPairSumResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropOwnerPairSumResponse;
                fromPartial(object: {
                    sum?: string;
                }): _79.QueryDropOwnerPairSumResponse;
                fromAmino(object: _79.QueryDropOwnerPairSumResponseAmino): _79.QueryDropOwnerPairSumResponse;
                toAmino(message: _79.QueryDropOwnerPairSumResponse): _79.QueryDropOwnerPairSumResponseAmino;
                fromAminoMsg(object: _79.QueryDropOwnerPairSumResponseAminoMsg): _79.QueryDropOwnerPairSumResponse;
                fromProtoMsg(message: _79.QueryDropOwnerPairSumResponseProtoMsg): _79.QueryDropOwnerPairSumResponse;
                toProto(message: _79.QueryDropOwnerPairSumResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDropOwnerPairSumResponse): _79.QueryDropOwnerPairSumResponseProtoMsg;
            };
            QueryDropOwnerPairUidsRequest: {
                encode(message: _79.QueryDropOwnerPairUidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropOwnerPairUidsRequest;
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
                }): _79.QueryDropOwnerPairUidsRequest;
                fromAmino(object: _79.QueryDropOwnerPairUidsRequestAmino): _79.QueryDropOwnerPairUidsRequest;
                toAmino(message: _79.QueryDropOwnerPairUidsRequest): _79.QueryDropOwnerPairUidsRequestAmino;
                fromAminoMsg(object: _79.QueryDropOwnerPairUidsRequestAminoMsg): _79.QueryDropOwnerPairUidsRequest;
                fromProtoMsg(message: _79.QueryDropOwnerPairUidsRequestProtoMsg): _79.QueryDropOwnerPairUidsRequest;
                toProto(message: _79.QueryDropOwnerPairUidsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDropOwnerPairUidsRequest): _79.QueryDropOwnerPairUidsRequestProtoMsg;
            };
            QueryUidsResponse: {
                encode(message: _79.QueryUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryUidsResponse;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _79.QueryUidsResponse;
                fromAmino(object: _79.QueryUidsResponseAmino): _79.QueryUidsResponse;
                toAmino(message: _79.QueryUidsResponse): _79.QueryUidsResponseAmino;
                fromAminoMsg(object: _79.QueryUidsResponseAminoMsg): _79.QueryUidsResponse;
                fromProtoMsg(message: _79.QueryUidsResponseProtoMsg): _79.QueryUidsResponse;
                toProto(message: _79.QueryUidsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryUidsResponse): _79.QueryUidsResponseProtoMsg;
            };
            QueryDropOwnerPairDetailRequest: {
                encode(message: _79.QueryDropOwnerPairDetailRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropOwnerPairDetailRequest;
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
                }): _79.QueryDropOwnerPairDetailRequest;
                fromAmino(object: _79.QueryDropOwnerPairDetailRequestAmino): _79.QueryDropOwnerPairDetailRequest;
                toAmino(message: _79.QueryDropOwnerPairDetailRequest): _79.QueryDropOwnerPairDetailRequestAmino;
                fromAminoMsg(object: _79.QueryDropOwnerPairDetailRequestAminoMsg): _79.QueryDropOwnerPairDetailRequest;
                fromProtoMsg(message: _79.QueryDropOwnerPairDetailRequestProtoMsg): _79.QueryDropOwnerPairDetailRequest;
                toProto(message: _79.QueryDropOwnerPairDetailRequest): Uint8Array;
                toProtoMsg(message: _79.QueryDropOwnerPairDetailRequest): _79.QueryDropOwnerPairDetailRequestProtoMsg;
            };
            QueryAllDropRequest: {
                encode(message: _79.QueryAllDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryAllDropRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _79.QueryAllDropRequest;
                fromAmino(object: _79.QueryAllDropRequestAmino): _79.QueryAllDropRequest;
                toAmino(message: _79.QueryAllDropRequest): _79.QueryAllDropRequestAmino;
                fromAminoMsg(object: _79.QueryAllDropRequestAminoMsg): _79.QueryAllDropRequest;
                fromProtoMsg(message: _79.QueryAllDropRequestProtoMsg): _79.QueryAllDropRequest;
                toProto(message: _79.QueryAllDropRequest): Uint8Array;
                toProtoMsg(message: _79.QueryAllDropRequest): _79.QueryAllDropRequestProtoMsg;
            };
            QueryDropsResponse: {
                encode(message: _79.QueryDropsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryDropsResponse;
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
                }): _79.QueryDropsResponse;
                fromAmino(object: _79.QueryDropsResponseAmino): _79.QueryDropsResponse;
                toAmino(message: _79.QueryDropsResponse): _79.QueryDropsResponseAmino;
                fromAminoMsg(object: _79.QueryDropsResponseAminoMsg): _79.QueryDropsResponse;
                fromProtoMsg(message: _79.QueryDropsResponseProtoMsg): _79.QueryDropsResponse;
                toProto(message: _79.QueryDropsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryDropsResponse): _79.QueryDropsResponseProtoMsg;
            };
            QueryGetMemberRequest: {
                encode(message: _79.QueryGetMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGetMemberRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                }): _79.QueryGetMemberRequest;
                fromAmino(object: _79.QueryGetMemberRequestAmino): _79.QueryGetMemberRequest;
                toAmino(message: _79.QueryGetMemberRequest): _79.QueryGetMemberRequestAmino;
                fromAminoMsg(object: _79.QueryGetMemberRequestAminoMsg): _79.QueryGetMemberRequest;
                fromProtoMsg(message: _79.QueryGetMemberRequestProtoMsg): _79.QueryGetMemberRequest;
                toProto(message: _79.QueryGetMemberRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGetMemberRequest): _79.QueryGetMemberRequestProtoMsg;
            };
            QueryGetMemberResponse: {
                encode(message: _79.QueryGetMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGetMemberResponse;
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
                }): _79.QueryGetMemberResponse;
                fromAmino(object: _79.QueryGetMemberResponseAmino): _79.QueryGetMemberResponse;
                toAmino(message: _79.QueryGetMemberResponse): _79.QueryGetMemberResponseAmino;
                fromAminoMsg(object: _79.QueryGetMemberResponseAminoMsg): _79.QueryGetMemberResponse;
                fromProtoMsg(message: _79.QueryGetMemberResponseProtoMsg): _79.QueryGetMemberResponse;
                toProto(message: _79.QueryGetMemberResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGetMemberResponse): _79.QueryGetMemberResponseProtoMsg;
            };
            QueryAllMemberRequest: {
                encode(message: _79.QueryAllMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryAllMemberRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _79.QueryAllMemberRequest;
                fromAmino(object: _79.QueryAllMemberRequestAmino): _79.QueryAllMemberRequest;
                toAmino(message: _79.QueryAllMemberRequest): _79.QueryAllMemberRequestAmino;
                fromAminoMsg(object: _79.QueryAllMemberRequestAminoMsg): _79.QueryAllMemberRequest;
                fromProtoMsg(message: _79.QueryAllMemberRequestProtoMsg): _79.QueryAllMemberRequest;
                toProto(message: _79.QueryAllMemberRequest): Uint8Array;
                toProtoMsg(message: _79.QueryAllMemberRequest): _79.QueryAllMemberRequestProtoMsg;
            };
            QueryAllMemberResponse: {
                encode(message: _79.QueryAllMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryAllMemberResponse;
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
                }): _79.QueryAllMemberResponse;
                fromAmino(object: _79.QueryAllMemberResponseAmino): _79.QueryAllMemberResponse;
                toAmino(message: _79.QueryAllMemberResponse): _79.QueryAllMemberResponseAmino;
                fromAminoMsg(object: _79.QueryAllMemberResponseAminoMsg): _79.QueryAllMemberResponse;
                fromProtoMsg(message: _79.QueryAllMemberResponseProtoMsg): _79.QueryAllMemberResponse;
                toProto(message: _79.QueryAllMemberResponse): Uint8Array;
                toProtoMsg(message: _79.QueryAllMemberResponse): _79.QueryAllMemberResponseProtoMsg;
            };
            QueryGetBurningsRequest: {
                encode(message: _79.QueryGetBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGetBurningsRequest;
                fromPartial(object: {
                    denom?: string;
                }): _79.QueryGetBurningsRequest;
                fromAmino(object: _79.QueryGetBurningsRequestAmino): _79.QueryGetBurningsRequest;
                toAmino(message: _79.QueryGetBurningsRequest): _79.QueryGetBurningsRequestAmino;
                fromAminoMsg(object: _79.QueryGetBurningsRequestAminoMsg): _79.QueryGetBurningsRequest;
                fromProtoMsg(message: _79.QueryGetBurningsRequestProtoMsg): _79.QueryGetBurningsRequest;
                toProto(message: _79.QueryGetBurningsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryGetBurningsRequest): _79.QueryGetBurningsRequestProtoMsg;
            };
            QueryGetBurningsResponse: {
                encode(message: _79.QueryGetBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryGetBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _79.QueryGetBurningsResponse;
                fromAmino(object: _79.QueryGetBurningsResponseAmino): _79.QueryGetBurningsResponse;
                toAmino(message: _79.QueryGetBurningsResponse): _79.QueryGetBurningsResponseAmino;
                fromAminoMsg(object: _79.QueryGetBurningsResponseAminoMsg): _79.QueryGetBurningsResponse;
                fromProtoMsg(message: _79.QueryGetBurningsResponseProtoMsg): _79.QueryGetBurningsResponse;
                toProto(message: _79.QueryGetBurningsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryGetBurningsResponse): _79.QueryGetBurningsResponseProtoMsg;
            };
            QueryAllBurningsRequest: {
                encode(message: _79.QueryAllBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryAllBurningsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _79.QueryAllBurningsRequest;
                fromAmino(object: _79.QueryAllBurningsRequestAmino): _79.QueryAllBurningsRequest;
                toAmino(message: _79.QueryAllBurningsRequest): _79.QueryAllBurningsRequestAmino;
                fromAminoMsg(object: _79.QueryAllBurningsRequestAminoMsg): _79.QueryAllBurningsRequest;
                fromProtoMsg(message: _79.QueryAllBurningsRequestProtoMsg): _79.QueryAllBurningsRequest;
                toProto(message: _79.QueryAllBurningsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryAllBurningsRequest): _79.QueryAllBurningsRequestProtoMsg;
            };
            QueryAllBurningsResponse: {
                encode(message: _79.QueryAllBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryAllBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _79.QueryAllBurningsResponse;
                fromAmino(object: _79.QueryAllBurningsResponseAmino): _79.QueryAllBurningsResponse;
                toAmino(message: _79.QueryAllBurningsResponse): _79.QueryAllBurningsResponseAmino;
                fromAminoMsg(object: _79.QueryAllBurningsResponseAminoMsg): _79.QueryAllBurningsResponse;
                fromProtoMsg(message: _79.QueryAllBurningsResponseProtoMsg): _79.QueryAllBurningsResponse;
                toProto(message: _79.QueryAllBurningsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryAllBurningsResponse): _79.QueryAllBurningsResponseProtoMsg;
            };
            QueryOrderRequest: {
                encode(message: _79.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOrderRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _79.QueryOrderRequest;
                fromAmino(object: _79.QueryOrderRequestAmino): _79.QueryOrderRequest;
                toAmino(message: _79.QueryOrderRequest): _79.QueryOrderRequestAmino;
                fromAminoMsg(object: _79.QueryOrderRequestAminoMsg): _79.QueryOrderRequest;
                fromProtoMsg(message: _79.QueryOrderRequestProtoMsg): _79.QueryOrderRequest;
                toProto(message: _79.QueryOrderRequest): Uint8Array;
                toProtoMsg(message: _79.QueryOrderRequest): _79.QueryOrderRequestProtoMsg;
            };
            QueryOrderResponse: {
                encode(message: _79.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOrderResponse;
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
                }): _79.QueryOrderResponse;
                fromAmino(object: _79.QueryOrderResponseAmino): _79.QueryOrderResponse;
                toAmino(message: _79.QueryOrderResponse): _79.QueryOrderResponseAmino;
                fromAminoMsg(object: _79.QueryOrderResponseAminoMsg): _79.QueryOrderResponse;
                fromProtoMsg(message: _79.QueryOrderResponseProtoMsg): _79.QueryOrderResponse;
                toProto(message: _79.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _79.QueryOrderResponse): _79.QueryOrderResponseProtoMsg;
            };
            QueryOrdersResponse: {
                encode(message: _79.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOrdersResponse;
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
                }): _79.QueryOrdersResponse;
                fromAmino(object: _79.QueryOrdersResponseAmino): _79.QueryOrdersResponse;
                toAmino(message: _79.QueryOrdersResponse): _79.QueryOrdersResponseAmino;
                fromAminoMsg(object: _79.QueryOrdersResponseAminoMsg): _79.QueryOrdersResponse;
                fromProtoMsg(message: _79.QueryOrdersResponseProtoMsg): _79.QueryOrdersResponse;
                toProto(message: _79.QueryOrdersResponse): Uint8Array;
                toProtoMsg(message: _79.QueryOrdersResponse): _79.QueryOrdersResponseProtoMsg;
            };
            QueryAllOrderRequest: {
                encode(message: _79.QueryAllOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryAllOrderRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _79.QueryAllOrderRequest;
                fromAmino(object: _79.QueryAllOrderRequestAmino): _79.QueryAllOrderRequest;
                toAmino(message: _79.QueryAllOrderRequest): _79.QueryAllOrderRequestAmino;
                fromAminoMsg(object: _79.QueryAllOrderRequestAminoMsg): _79.QueryAllOrderRequest;
                fromProtoMsg(message: _79.QueryAllOrderRequestProtoMsg): _79.QueryAllOrderRequest;
                toProto(message: _79.QueryAllOrderRequest): Uint8Array;
                toProtoMsg(message: _79.QueryAllOrderRequest): _79.QueryAllOrderRequestProtoMsg;
            };
            QueryOrderOwnerRequest: {
                encode(message: _79.QueryOrderOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOrderOwnerRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _79.QueryOrderOwnerRequest;
                fromAmino(object: _79.QueryOrderOwnerRequestAmino): _79.QueryOrderOwnerRequest;
                toAmino(message: _79.QueryOrderOwnerRequest): _79.QueryOrderOwnerRequestAmino;
                fromAminoMsg(object: _79.QueryOrderOwnerRequestAminoMsg): _79.QueryOrderOwnerRequest;
                fromProtoMsg(message: _79.QueryOrderOwnerRequestProtoMsg): _79.QueryOrderOwnerRequest;
                toProto(message: _79.QueryOrderOwnerRequest): Uint8Array;
                toProtoMsg(message: _79.QueryOrderOwnerRequest): _79.QueryOrderOwnerRequestProtoMsg;
            };
            QueryOrderOwnerUidsResponse: {
                encode(message: _79.QueryOrderOwnerUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOrderOwnerUidsResponse;
                fromPartial(object: {
                    orders?: {
                        uids?: (string | number | import("long").Long)[];
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _79.QueryOrderOwnerUidsResponse;
                fromAmino(object: _79.QueryOrderOwnerUidsResponseAmino): _79.QueryOrderOwnerUidsResponse;
                toAmino(message: _79.QueryOrderOwnerUidsResponse): _79.QueryOrderOwnerUidsResponseAmino;
                fromAminoMsg(object: _79.QueryOrderOwnerUidsResponseAminoMsg): _79.QueryOrderOwnerUidsResponse;
                fromProtoMsg(message: _79.QueryOrderOwnerUidsResponseProtoMsg): _79.QueryOrderOwnerUidsResponse;
                toProto(message: _79.QueryOrderOwnerUidsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryOrderOwnerUidsResponse): _79.QueryOrderOwnerUidsResponseProtoMsg;
            };
            QueryOrderOwnerPairRequest: {
                encode(message: _79.QueryOrderOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOrderOwnerPairRequest;
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
                }): _79.QueryOrderOwnerPairRequest;
                fromAmino(object: _79.QueryOrderOwnerPairRequestAmino): _79.QueryOrderOwnerPairRequest;
                toAmino(message: _79.QueryOrderOwnerPairRequest): _79.QueryOrderOwnerPairRequestAmino;
                fromAminoMsg(object: _79.QueryOrderOwnerPairRequestAminoMsg): _79.QueryOrderOwnerPairRequest;
                fromProtoMsg(message: _79.QueryOrderOwnerPairRequestProtoMsg): _79.QueryOrderOwnerPairRequest;
                toProto(message: _79.QueryOrderOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _79.QueryOrderOwnerPairRequest): _79.QueryOrderOwnerPairRequestProtoMsg;
            };
            QueryOrderOwnerPairResponse: {
                encode(message: _79.QueryOrderOwnerPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryOrderOwnerPairResponse;
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
                }): _79.QueryOrderOwnerPairResponse;
                fromAmino(object: _79.QueryOrderOwnerPairResponseAmino): _79.QueryOrderOwnerPairResponse;
                toAmino(message: _79.QueryOrderOwnerPairResponse): _79.QueryOrderOwnerPairResponseAmino;
                fromAminoMsg(object: _79.QueryOrderOwnerPairResponseAminoMsg): _79.QueryOrderOwnerPairResponse;
                fromProtoMsg(message: _79.QueryOrderOwnerPairResponseProtoMsg): _79.QueryOrderOwnerPairResponse;
                toProto(message: _79.QueryOrderOwnerPairResponse): Uint8Array;
                toProtoMsg(message: _79.QueryOrderOwnerPairResponse): _79.QueryOrderOwnerPairResponseProtoMsg;
            };
            QueryBookRequest: {
                encode(message: _79.QueryBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBookRequest;
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
                }): _79.QueryBookRequest;
                fromAmino(object: _79.QueryBookRequestAmino): _79.QueryBookRequest;
                toAmino(message: _79.QueryBookRequest): _79.QueryBookRequestAmino;
                fromAminoMsg(object: _79.QueryBookRequestAminoMsg): _79.QueryBookRequest;
                fromProtoMsg(message: _79.QueryBookRequestProtoMsg): _79.QueryBookRequest;
                toProto(message: _79.QueryBookRequest): Uint8Array;
                toProtoMsg(message: _79.QueryBookRequest): _79.QueryBookRequestProtoMsg;
            };
            QueryBookResponse: {
                encode(message: _79.QueryBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBookResponse;
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
                }): _79.QueryBookResponse;
                fromAmino(object: _79.QueryBookResponseAmino): _79.QueryBookResponse;
                toAmino(message: _79.QueryBookResponse): _79.QueryBookResponseAmino;
                fromAminoMsg(object: _79.QueryBookResponseAminoMsg): _79.QueryBookResponse;
                fromProtoMsg(message: _79.QueryBookResponseProtoMsg): _79.QueryBookResponse;
                toProto(message: _79.QueryBookResponse): Uint8Array;
                toProtoMsg(message: _79.QueryBookResponse): _79.QueryBookResponseProtoMsg;
            };
            QueryBookendsRequest: {
                encode(message: _79.QueryBookendsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBookendsRequest;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                }): _79.QueryBookendsRequest;
                fromAmino(object: _79.QueryBookendsRequestAmino): _79.QueryBookendsRequest;
                toAmino(message: _79.QueryBookendsRequest): _79.QueryBookendsRequestAmino;
                fromAminoMsg(object: _79.QueryBookendsRequestAminoMsg): _79.QueryBookendsRequest;
                fromProtoMsg(message: _79.QueryBookendsRequestProtoMsg): _79.QueryBookendsRequest;
                toProto(message: _79.QueryBookendsRequest): Uint8Array;
                toProtoMsg(message: _79.QueryBookendsRequest): _79.QueryBookendsRequestProtoMsg;
            };
            QueryBookendsResponse: {
                encode(message: _79.QueryBookendsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryBookendsResponse;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                    prev?: string | number | import("long").Long;
                    next?: string | number | import("long").Long;
                }): _79.QueryBookendsResponse;
                fromAmino(object: _79.QueryBookendsResponseAmino): _79.QueryBookendsResponse;
                toAmino(message: _79.QueryBookendsResponse): _79.QueryBookendsResponseAmino;
                fromAminoMsg(object: _79.QueryBookendsResponseAminoMsg): _79.QueryBookendsResponse;
                fromProtoMsg(message: _79.QueryBookendsResponseProtoMsg): _79.QueryBookendsResponse;
                toProto(message: _79.QueryBookendsResponse): Uint8Array;
                toProtoMsg(message: _79.QueryBookendsResponse): _79.QueryBookendsResponseProtoMsg;
            };
            QueryHistoryRequest: {
                encode(message: _79.QueryHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryHistoryRequest;
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
                }): _79.QueryHistoryRequest;
                fromAmino(object: _79.QueryHistoryRequestAmino): _79.QueryHistoryRequest;
                toAmino(message: _79.QueryHistoryRequest): _79.QueryHistoryRequestAmino;
                fromAminoMsg(object: _79.QueryHistoryRequestAminoMsg): _79.QueryHistoryRequest;
                fromProtoMsg(message: _79.QueryHistoryRequestProtoMsg): _79.QueryHistoryRequest;
                toProto(message: _79.QueryHistoryRequest): Uint8Array;
                toProtoMsg(message: _79.QueryHistoryRequest): _79.QueryHistoryRequestProtoMsg;
            };
            QueryHistoryResponse: {
                encode(message: _79.QueryHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryHistoryResponse;
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
                }): _79.QueryHistoryResponse;
                fromAmino(object: _79.QueryHistoryResponseAmino): _79.QueryHistoryResponse;
                toAmino(message: _79.QueryHistoryResponse): _79.QueryHistoryResponseAmino;
                fromAminoMsg(object: _79.QueryHistoryResponseAminoMsg): _79.QueryHistoryResponse;
                fromProtoMsg(message: _79.QueryHistoryResponseProtoMsg): _79.QueryHistoryResponse;
                toProto(message: _79.QueryHistoryResponse): Uint8Array;
                toProtoMsg(message: _79.QueryHistoryResponse): _79.QueryHistoryResponseProtoMsg;
            };
            Pool: {
                encode(message: _78.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Pool;
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
                }): _78.Pool;
                fromAmino(object: _78.PoolAmino): _78.Pool;
                toAmino(message: _78.Pool): _78.PoolAmino;
                fromAminoMsg(object: _78.PoolAminoMsg): _78.Pool;
                fromProtoMsg(message: _78.PoolProtoMsg): _78.Pool;
                toProto(message: _78.Pool): Uint8Array;
                toProtoMsg(message: _78.Pool): _78.PoolProtoMsg;
            };
            Leader: {
                encode(message: _78.Leader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Leader;
                fromPartial(object: {
                    address?: string;
                    drops?: string;
                }): _78.Leader;
                fromAmino(object: _78.LeaderAmino): _78.Leader;
                toAmino(message: _78.Leader): _78.LeaderAmino;
                fromAminoMsg(object: _78.LeaderAminoMsg): _78.Leader;
                fromProtoMsg(message: _78.LeaderProtoMsg): _78.Leader;
                toProto(message: _78.Leader): Uint8Array;
                toProtoMsg(message: _78.Leader): _78.LeaderProtoMsg;
            };
            Params: {
                encode(message: _77.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Params;
                fromPartial(object: {
                    earnRates?: string;
                    burnRate?: string;
                    burnCoin?: string;
                    marketFee?: string;
                }): _77.Params;
                fromAmino(object: _77.ParamsAmino): _77.Params;
                toAmino(message: _77.Params): _77.ParamsAmino;
                fromAminoMsg(object: _77.ParamsAminoMsg): _77.Params;
                fromProtoMsg(message: _77.ParamsProtoMsg): _77.Params;
                toProto(message: _77.Params): Uint8Array;
                toProtoMsg(message: _77.Params): _77.ParamsProtoMsg;
            };
            Order: {
                encode(message: _76.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Order;
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
                }): _76.Order;
                fromAmino(object: _76.OrderAmino): _76.Order;
                toAmino(message: _76.Order): _76.OrderAmino;
                fromAminoMsg(object: _76.OrderAminoMsg): _76.Order;
                fromProtoMsg(message: _76.OrderProtoMsg): _76.Order;
                toProto(message: _76.Order): Uint8Array;
                toProtoMsg(message: _76.Order): _76.OrderProtoMsg;
            };
            Orders: {
                encode(message: _76.Orders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Orders;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                }): _76.Orders;
                fromAmino(object: _76.OrdersAmino): _76.Orders;
                toAmino(message: _76.Orders): _76.OrdersAmino;
                fromAminoMsg(object: _76.OrdersAminoMsg): _76.Orders;
                fromProtoMsg(message: _76.OrdersProtoMsg): _76.Orders;
                toProto(message: _76.Orders): Uint8Array;
                toProtoMsg(message: _76.Orders): _76.OrdersProtoMsg;
            };
            OrderResponse: {
                encode(message: _76.OrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.OrderResponse;
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
                }): _76.OrderResponse;
                fromAmino(object: _76.OrderResponseAmino): _76.OrderResponse;
                toAmino(message: _76.OrderResponse): _76.OrderResponseAmino;
                fromAminoMsg(object: _76.OrderResponseAminoMsg): _76.OrderResponse;
                fromProtoMsg(message: _76.OrderResponseProtoMsg): _76.OrderResponse;
                toProto(message: _76.OrderResponse): Uint8Array;
                toProtoMsg(message: _76.OrderResponse): _76.OrderResponseProtoMsg;
            };
            Member: {
                encode(message: _75.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Member;
                fromPartial(object: {
                    pair?: string;
                    denomA?: string;
                    denomB?: string;
                    balance?: string;
                    previous?: string;
                    limit?: string | number | import("long").Long;
                    stop?: string | number | import("long").Long;
                }): _75.Member;
                fromAmino(object: _75.MemberAmino): _75.Member;
                toAmino(message: _75.Member): _75.MemberAmino;
                fromAminoMsg(object: _75.MemberAminoMsg): _75.Member;
                fromProtoMsg(message: _75.MemberProtoMsg): _75.Member;
                toProto(message: _75.Member): Uint8Array;
                toProtoMsg(message: _75.Member): _75.MemberProtoMsg;
            };
            GenesisState: {
                encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GenesisState;
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
                }): _74.GenesisState;
                fromAmino(object: _74.GenesisStateAmino): _74.GenesisState;
                toAmino(message: _74.GenesisState): _74.GenesisStateAmino;
                fromAminoMsg(object: _74.GenesisStateAminoMsg): _74.GenesisState;
                fromProtoMsg(message: _74.GenesisStateProtoMsg): _74.GenesisState;
                toProto(message: _74.GenesisState): Uint8Array;
                toProtoMsg(message: _74.GenesisState): _74.GenesisStateProtoMsg;
            };
            Drop: {
                encode(message: _73.Drop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Drop;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                    owner?: string;
                    pair?: string;
                    drops?: string;
                    product?: string;
                    active?: boolean;
                }): _73.Drop;
                fromAmino(object: _73.DropAmino): _73.Drop;
                toAmino(message: _73.Drop): _73.DropAmino;
                fromAminoMsg(object: _73.DropAminoMsg): _73.Drop;
                fromProtoMsg(message: _73.DropProtoMsg): _73.Drop;
                toProto(message: _73.Drop): Uint8Array;
                toProtoMsg(message: _73.Drop): _73.DropProtoMsg;
            };
            Drops: {
                encode(message: _73.Drops, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Drops;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    sum?: string;
                }): _73.Drops;
                fromAmino(object: _73.DropsAmino): _73.Drops;
                toAmino(message: _73.Drops): _73.DropsAmino;
                fromAminoMsg(object: _73.DropsAminoMsg): _73.Drops;
                fromProtoMsg(message: _73.DropsProtoMsg): _73.Drops;
                toProto(message: _73.Drops): Uint8Array;
                toProtoMsg(message: _73.Drops): _73.DropsProtoMsg;
            };
            DropPairs: {
                encode(message: _73.DropPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.DropPairs;
                fromPartial(object: {
                    pairs?: string[];
                }): _73.DropPairs;
                fromAmino(object: _73.DropPairsAmino): _73.DropPairs;
                toAmino(message: _73.DropPairs): _73.DropPairsAmino;
                fromAminoMsg(object: _73.DropPairsAminoMsg): _73.DropPairs;
                fromProtoMsg(message: _73.DropPairsProtoMsg): _73.DropPairs;
                toProto(message: _73.DropPairs): Uint8Array;
                toProtoMsg(message: _73.DropPairs): _73.DropPairsProtoMsg;
            };
            Burnings: {
                encode(message: _72.Burnings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Burnings;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _72.Burnings;
                fromAmino(object: _72.BurningsAmino): _72.Burnings;
                toAmino(message: _72.Burnings): _72.BurningsAmino;
                fromAminoMsg(object: _72.BurningsAminoMsg): _72.Burnings;
                fromProtoMsg(message: _72.BurningsProtoMsg): _72.Burnings;
                toProto(message: _72.Burnings): Uint8Array;
                toProtoMsg(message: _72.Burnings): _72.BurningsProtoMsg;
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
                    market: _112.MsgClientImpl;
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
                        params(request?: _79.QueryParamsRequest): Promise<_79.QueryParamsResponse>;
                        pool(request: _79.QueryGetPoolRequest): Promise<_79.QueryGetPoolResponse>;
                        poolAll(request?: _79.QueryAllPoolRequest): Promise<_79.QueryAllPoolResponse>;
                        drop(request: _79.QueryDropRequest): Promise<_79.QueryDropResponse>;
                        dropAmounts(request: _79.QueryDropAmountsRequest): Promise<_79.QueryDropAmountsResponse>;
                        dropPairs(request: _79.QueryDropPairsRequest): Promise<_79.QueryDropPairsResponse>;
                        dropOwnerPair(request: _79.QueryDropOwnerPairRequest): Promise<_79.QueryDropsResponse>;
                        dropAll(request?: _79.QueryAllDropRequest): Promise<_79.QueryDropsResponse>;
                        member(request: _79.QueryGetMemberRequest): Promise<_79.QueryGetMemberResponse>;
                        memberAll(request?: _79.QueryAllMemberRequest): Promise<_79.QueryAllMemberResponse>;
                        burnings(request: _79.QueryGetBurningsRequest): Promise<_79.QueryGetBurningsResponse>;
                        burningsAll(request?: _79.QueryAllBurningsRequest): Promise<_79.QueryAllBurningsResponse>;
                        order(request: _79.QueryOrderRequest): Promise<_79.QueryOrderResponse>;
                        orderAll(request?: _79.QueryAllOrderRequest): Promise<_79.QueryOrdersResponse>;
                        orderOwner(request: _79.QueryOrderOwnerRequest): Promise<_79.QueryOrdersResponse>;
                        orderOwnerUids(request: _79.QueryOrderOwnerRequest): Promise<_79.QueryOrderOwnerUidsResponse>;
                        book(request: _79.QueryBookRequest): Promise<_79.QueryBookResponse>;
                        bookends(request: _79.QueryBookendsRequest): Promise<_79.QueryBookendsResponse>;
                        history(request: _79.QueryHistoryRequest): Promise<_79.QueryHistoryResponse>;
                    };
                };
            };
        }>;
    };
}
