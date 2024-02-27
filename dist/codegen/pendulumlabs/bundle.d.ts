/// <reference types="long" />
import * as _79 from "../market/burnings";
import * as _80 from "../market/drop";
import * as _81 from "../market/genesis";
import * as _82 from "../market/member";
import * as _83 from "../market/order";
import * as _84 from "../market/params";
import * as _85 from "../market/pool";
import * as _86 from "../market/query";
import * as _87 from "../market/tx";
import * as _123 from "../market/query.rpc.Query";
import * as _124 from "../market/tx.rpc.msg";
export declare namespace pendulumlabs {
    namespace market {
        const market: {
            MsgClientImpl: typeof _124.MsgClientImpl;
            QueryClientImpl: typeof _123.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                burned(request?: _86.QueryBurnedRequest): Promise<_86.QueryBurnedResponse>;
                pool(request: _86.QueryGetPoolRequest): Promise<_86.QueryGetPoolResponse>;
                poolAll(request?: _86.QueryAllPoolRequest): Promise<_86.QueryAllPoolResponse>;
                volume(request: _86.QueryVolumeRequest): Promise<_86.QueryVolumeResponse>;
                volumeAll(request?: _86.QueryAllVolumeRequest): Promise<_86.QueryAllVolumeResponse>;
                drop(request: _86.QueryDropRequest): Promise<_86.QueryDropResponse>;
                dropAmounts(request: _86.QueryDropAmountsRequest): Promise<_86.QueryDropAmountsResponse>;
                dropCoin(request: _86.QueryDropCoinRequest): Promise<_86.QueryDropCoinResponse>;
                dropsToCoins(request: _86.QueryDropsToCoinsRequest): Promise<_86.QueryDropsToCoinsResponse>;
                dropPairs(request: _86.QueryDropPairsRequest): Promise<_86.QueryDropPairsResponse>;
                dropOwnerPair(request: _86.QueryDropOwnerPairRequest): Promise<_86.QueryDropsResponse>;
                dropAll(request?: _86.QueryAllDropRequest): Promise<_86.QueryDropsResponse>;
                member(request: _86.QueryGetMemberRequest): Promise<_86.QueryGetMemberResponse>;
                memberAll(request?: _86.QueryAllMemberRequest): Promise<_86.QueryAllMemberResponse>;
                burnings(request: _86.QueryGetBurningsRequest): Promise<_86.QueryGetBurningsResponse>;
                burningsAll(request?: _86.QueryAllBurningsRequest): Promise<_86.QueryAllBurningsResponse>;
                order(request: _86.QueryOrderRequest): Promise<_86.QueryOrderResponse>;
                orderAll(request?: _86.QueryAllOrderRequest): Promise<_86.QueryOrdersResponse>;
                orderOwner(request: _86.QueryOrderOwnerRequest): Promise<_86.QueryOrdersResponse>;
                orderOwnerUids(request: _86.QueryOrderOwnerRequest): Promise<_86.QueryOrderOwnerUidsResponse>;
                book(request: _86.QueryBookRequest): Promise<_86.QueryBookResponse>;
                bookends(request: _86.QueryBookendsRequest): Promise<_86.QueryBookendsResponse>;
                history(request: _86.QueryHistoryRequest): Promise<_86.QueryHistoryResponse>;
                quote(request: _86.QueryQuoteRequest): Promise<_86.QueryQuoteResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createPool(value: _87.MsgCreatePool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDrop(value: _87.MsgCreateDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redeemDrop(value: _87.MsgRedeemDrop): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createOrder(value: _87.MsgCreateOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrder(value: _87.MsgCancelOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    marketOrder(value: _87.MsgMarketOrder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createPool(value: _87.MsgCreatePool): {
                        typeUrl: string;
                        value: _87.MsgCreatePool;
                    };
                    createDrop(value: _87.MsgCreateDrop): {
                        typeUrl: string;
                        value: _87.MsgCreateDrop;
                    };
                    redeemDrop(value: _87.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _87.MsgRedeemDrop;
                    };
                    createOrder(value: _87.MsgCreateOrder): {
                        typeUrl: string;
                        value: _87.MsgCreateOrder;
                    };
                    cancelOrder(value: _87.MsgCancelOrder): {
                        typeUrl: string;
                        value: _87.MsgCancelOrder;
                    };
                    marketOrder(value: _87.MsgMarketOrder): {
                        typeUrl: string;
                        value: _87.MsgMarketOrder;
                    };
                };
                fromPartial: {
                    createPool(value: _87.MsgCreatePool): {
                        typeUrl: string;
                        value: _87.MsgCreatePool;
                    };
                    createDrop(value: _87.MsgCreateDrop): {
                        typeUrl: string;
                        value: _87.MsgCreateDrop;
                    };
                    redeemDrop(value: _87.MsgRedeemDrop): {
                        typeUrl: string;
                        value: _87.MsgRedeemDrop;
                    };
                    createOrder(value: _87.MsgCreateOrder): {
                        typeUrl: string;
                        value: _87.MsgCreateOrder;
                    };
                    cancelOrder(value: _87.MsgCancelOrder): {
                        typeUrl: string;
                        value: _87.MsgCancelOrder;
                    };
                    marketOrder(value: _87.MsgMarketOrder): {
                        typeUrl: string;
                        value: _87.MsgMarketOrder;
                    };
                };
            };
            AminoConverter: {
                "/pendulumlabs.market.market.MsgCreatePool": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCreatePool) => _87.MsgCreatePoolAmino;
                    fromAmino: (object: _87.MsgCreatePoolAmino) => _87.MsgCreatePool;
                };
                "/pendulumlabs.market.market.MsgCreateDrop": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCreateDrop) => _87.MsgCreateDropAmino;
                    fromAmino: (object: _87.MsgCreateDropAmino) => _87.MsgCreateDrop;
                };
                "/pendulumlabs.market.market.MsgRedeemDrop": {
                    aminoType: string;
                    toAmino: (message: _87.MsgRedeemDrop) => _87.MsgRedeemDropAmino;
                    fromAmino: (object: _87.MsgRedeemDropAmino) => _87.MsgRedeemDrop;
                };
                "/pendulumlabs.market.market.MsgCreateOrder": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCreateOrder) => _87.MsgCreateOrderAmino;
                    fromAmino: (object: _87.MsgCreateOrderAmino) => _87.MsgCreateOrder;
                };
                "/pendulumlabs.market.market.MsgCancelOrder": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCancelOrder) => _87.MsgCancelOrderAmino;
                    fromAmino: (object: _87.MsgCancelOrderAmino) => _87.MsgCancelOrder;
                };
                "/pendulumlabs.market.market.MsgMarketOrder": {
                    aminoType: string;
                    toAmino: (message: _87.MsgMarketOrder) => _87.MsgMarketOrderAmino;
                    fromAmino: (object: _87.MsgMarketOrderAmino) => _87.MsgMarketOrder;
                };
            };
            MsgCreatePool: {
                encode(message: _87.MsgCreatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreatePool;
                fromPartial(object: {
                    creator?: string;
                    coinA?: string;
                    coinB?: string;
                }): _87.MsgCreatePool;
                fromAmino(object: _87.MsgCreatePoolAmino): _87.MsgCreatePool;
                toAmino(message: _87.MsgCreatePool): _87.MsgCreatePoolAmino;
                fromAminoMsg(object: _87.MsgCreatePoolAminoMsg): _87.MsgCreatePool;
                fromProtoMsg(message: _87.MsgCreatePoolProtoMsg): _87.MsgCreatePool;
                toProto(message: _87.MsgCreatePool): Uint8Array;
                toProtoMsg(message: _87.MsgCreatePool): _87.MsgCreatePoolProtoMsg;
            };
            MsgCreatePoolResponse: {
                encode(_: _87.MsgCreatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreatePoolResponse;
                fromPartial(_: {}): _87.MsgCreatePoolResponse;
                fromAmino(_: _87.MsgCreatePoolResponseAmino): _87.MsgCreatePoolResponse;
                toAmino(_: _87.MsgCreatePoolResponse): _87.MsgCreatePoolResponseAmino;
                fromAminoMsg(object: _87.MsgCreatePoolResponseAminoMsg): _87.MsgCreatePoolResponse;
                fromProtoMsg(message: _87.MsgCreatePoolResponseProtoMsg): _87.MsgCreatePoolResponse;
                toProto(message: _87.MsgCreatePoolResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCreatePoolResponse): _87.MsgCreatePoolResponseProtoMsg;
            };
            MsgCreateDrop: {
                encode(message: _87.MsgCreateDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateDrop;
                fromPartial(object: {
                    creator?: string;
                    pair?: string;
                    drops?: string;
                }): _87.MsgCreateDrop;
                fromAmino(object: _87.MsgCreateDropAmino): _87.MsgCreateDrop;
                toAmino(message: _87.MsgCreateDrop): _87.MsgCreateDropAmino;
                fromAminoMsg(object: _87.MsgCreateDropAminoMsg): _87.MsgCreateDrop;
                fromProtoMsg(message: _87.MsgCreateDropProtoMsg): _87.MsgCreateDrop;
                toProto(message: _87.MsgCreateDrop): Uint8Array;
                toProtoMsg(message: _87.MsgCreateDrop): _87.MsgCreateDropProtoMsg;
            };
            MsgCreateDropResponse: {
                encode(_: _87.MsgCreateDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateDropResponse;
                fromPartial(_: {}): _87.MsgCreateDropResponse;
                fromAmino(_: _87.MsgCreateDropResponseAmino): _87.MsgCreateDropResponse;
                toAmino(_: _87.MsgCreateDropResponse): _87.MsgCreateDropResponseAmino;
                fromAminoMsg(object: _87.MsgCreateDropResponseAminoMsg): _87.MsgCreateDropResponse;
                fromProtoMsg(message: _87.MsgCreateDropResponseProtoMsg): _87.MsgCreateDropResponse;
                toProto(message: _87.MsgCreateDropResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCreateDropResponse): _87.MsgCreateDropResponseProtoMsg;
            };
            MsgRedeemDrop: {
                encode(message: _87.MsgRedeemDrop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgRedeemDrop;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _87.MsgRedeemDrop;
                fromAmino(object: _87.MsgRedeemDropAmino): _87.MsgRedeemDrop;
                toAmino(message: _87.MsgRedeemDrop): _87.MsgRedeemDropAmino;
                fromAminoMsg(object: _87.MsgRedeemDropAminoMsg): _87.MsgRedeemDrop;
                fromProtoMsg(message: _87.MsgRedeemDropProtoMsg): _87.MsgRedeemDrop;
                toProto(message: _87.MsgRedeemDrop): Uint8Array;
                toProtoMsg(message: _87.MsgRedeemDrop): _87.MsgRedeemDropProtoMsg;
            };
            MsgRedeemDropResponse: {
                encode(_: _87.MsgRedeemDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgRedeemDropResponse;
                fromPartial(_: {}): _87.MsgRedeemDropResponse;
                fromAmino(_: _87.MsgRedeemDropResponseAmino): _87.MsgRedeemDropResponse;
                toAmino(_: _87.MsgRedeemDropResponse): _87.MsgRedeemDropResponseAmino;
                fromAminoMsg(object: _87.MsgRedeemDropResponseAminoMsg): _87.MsgRedeemDropResponse;
                fromProtoMsg(message: _87.MsgRedeemDropResponseProtoMsg): _87.MsgRedeemDropResponse;
                toProto(message: _87.MsgRedeemDropResponse): Uint8Array;
                toProtoMsg(message: _87.MsgRedeemDropResponse): _87.MsgRedeemDropResponseProtoMsg;
            };
            MsgCreateOrder: {
                encode(message: _87.MsgCreateOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    denomBid?: string;
                    orderType?: string;
                    amount?: string;
                    rate?: string[];
                    prev?: string;
                    next?: string;
                }): _87.MsgCreateOrder;
                fromAmino(object: _87.MsgCreateOrderAmino): _87.MsgCreateOrder;
                toAmino(message: _87.MsgCreateOrder): _87.MsgCreateOrderAmino;
                fromAminoMsg(object: _87.MsgCreateOrderAminoMsg): _87.MsgCreateOrder;
                fromProtoMsg(message: _87.MsgCreateOrderProtoMsg): _87.MsgCreateOrder;
                toProto(message: _87.MsgCreateOrder): Uint8Array;
                toProtoMsg(message: _87.MsgCreateOrder): _87.MsgCreateOrderProtoMsg;
            };
            MsgCreateOrderResponse: {
                encode(message: _87.MsgCreateOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCreateOrderResponse;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _87.MsgCreateOrderResponse;
                fromAmino(object: _87.MsgCreateOrderResponseAmino): _87.MsgCreateOrderResponse;
                toAmino(message: _87.MsgCreateOrderResponse): _87.MsgCreateOrderResponseAmino;
                fromAminoMsg(object: _87.MsgCreateOrderResponseAminoMsg): _87.MsgCreateOrderResponse;
                fromProtoMsg(message: _87.MsgCreateOrderResponseProtoMsg): _87.MsgCreateOrderResponse;
                toProto(message: _87.MsgCreateOrderResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCreateOrderResponse): _87.MsgCreateOrderResponseProtoMsg;
            };
            MsgCancelOrder: {
                encode(message: _87.MsgCancelOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCancelOrder;
                fromPartial(object: {
                    creator?: string;
                    uid?: string;
                }): _87.MsgCancelOrder;
                fromAmino(object: _87.MsgCancelOrderAmino): _87.MsgCancelOrder;
                toAmino(message: _87.MsgCancelOrder): _87.MsgCancelOrderAmino;
                fromAminoMsg(object: _87.MsgCancelOrderAminoMsg): _87.MsgCancelOrder;
                fromProtoMsg(message: _87.MsgCancelOrderProtoMsg): _87.MsgCancelOrder;
                toProto(message: _87.MsgCancelOrder): Uint8Array;
                toProtoMsg(message: _87.MsgCancelOrder): _87.MsgCancelOrderProtoMsg;
            };
            MsgCancelOrderResponse: {
                encode(_: _87.MsgCancelOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgCancelOrderResponse;
                fromPartial(_: {}): _87.MsgCancelOrderResponse;
                fromAmino(_: _87.MsgCancelOrderResponseAmino): _87.MsgCancelOrderResponse;
                toAmino(_: _87.MsgCancelOrderResponse): _87.MsgCancelOrderResponseAmino;
                fromAminoMsg(object: _87.MsgCancelOrderResponseAminoMsg): _87.MsgCancelOrderResponse;
                fromProtoMsg(message: _87.MsgCancelOrderResponseProtoMsg): _87.MsgCancelOrderResponse;
                toProto(message: _87.MsgCancelOrderResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCancelOrderResponse): _87.MsgCancelOrderResponseProtoMsg;
            };
            MsgMarketOrder: {
                encode(message: _87.MsgMarketOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgMarketOrder;
                fromPartial(object: {
                    creator?: string;
                    denomAsk?: string;
                    amountAsk?: string;
                    denomBid?: string;
                    amountBid?: string;
                    slippage?: string;
                }): _87.MsgMarketOrder;
                fromAmino(object: _87.MsgMarketOrderAmino): _87.MsgMarketOrder;
                toAmino(message: _87.MsgMarketOrder): _87.MsgMarketOrderAmino;
                fromAminoMsg(object: _87.MsgMarketOrderAminoMsg): _87.MsgMarketOrder;
                fromProtoMsg(message: _87.MsgMarketOrderProtoMsg): _87.MsgMarketOrder;
                toProto(message: _87.MsgMarketOrder): Uint8Array;
                toProtoMsg(message: _87.MsgMarketOrder): _87.MsgMarketOrderProtoMsg;
            };
            MsgMarketOrderResponse: {
                encode(message: _87.MsgMarketOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgMarketOrderResponse;
                fromPartial(object: {
                    amountBid?: string;
                    amountAsk?: string;
                    slippage?: string;
                }): _87.MsgMarketOrderResponse;
                fromAmino(object: _87.MsgMarketOrderResponseAmino): _87.MsgMarketOrderResponse;
                toAmino(message: _87.MsgMarketOrderResponse): _87.MsgMarketOrderResponseAmino;
                fromAminoMsg(object: _87.MsgMarketOrderResponseAminoMsg): _87.MsgMarketOrderResponse;
                fromProtoMsg(message: _87.MsgMarketOrderResponseProtoMsg): _87.MsgMarketOrderResponse;
                toProto(message: _87.MsgMarketOrderResponse): Uint8Array;
                toProtoMsg(message: _87.MsgMarketOrderResponse): _87.MsgMarketOrderResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _86.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryParamsRequest;
                fromPartial(_: {}): _86.QueryParamsRequest;
                fromAmino(_: _86.QueryParamsRequestAmino): _86.QueryParamsRequest;
                toAmino(_: _86.QueryParamsRequest): _86.QueryParamsRequestAmino;
                fromAminoMsg(object: _86.QueryParamsRequestAminoMsg): _86.QueryParamsRequest;
                fromProtoMsg(message: _86.QueryParamsRequestProtoMsg): _86.QueryParamsRequest;
                toProto(message: _86.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _86.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        earnRates?: string;
                        burnRate?: string;
                        burnCoin?: string;
                        marketFee?: string;
                    };
                }): _86.QueryParamsResponse;
                fromAmino(object: _86.QueryParamsResponseAmino): _86.QueryParamsResponse;
                toAmino(message: _86.QueryParamsResponse): _86.QueryParamsResponseAmino;
                fromAminoMsg(object: _86.QueryParamsResponseAminoMsg): _86.QueryParamsResponse;
                fromProtoMsg(message: _86.QueryParamsResponseProtoMsg): _86.QueryParamsResponse;
                toProto(message: _86.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseProtoMsg;
            };
            QueryGetPoolRequest: {
                encode(message: _86.QueryGetPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryGetPoolRequest;
                fromPartial(object: {
                    pair?: string;
                }): _86.QueryGetPoolRequest;
                fromAmino(object: _86.QueryGetPoolRequestAmino): _86.QueryGetPoolRequest;
                toAmino(message: _86.QueryGetPoolRequest): _86.QueryGetPoolRequestAmino;
                fromAminoMsg(object: _86.QueryGetPoolRequestAminoMsg): _86.QueryGetPoolRequest;
                fromProtoMsg(message: _86.QueryGetPoolRequestProtoMsg): _86.QueryGetPoolRequest;
                toProto(message: _86.QueryGetPoolRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGetPoolRequest): _86.QueryGetPoolRequestProtoMsg;
            };
            QueryGetPoolResponse: {
                encode(message: _86.QueryGetPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryGetPoolResponse;
                fromPartial(object: {
                    pool?: {
                        pair?: string;
                        denom1?: string;
                        denom2?: string;
                        volume1?: {
                            denom?: string;
                            amount?: string;
                        };
                        volume2?: {
                            denom?: string;
                            amount?: string;
                        };
                        leaders?: {
                            address?: string;
                            drops?: string;
                        }[];
                        drops?: string;
                        history?: string | number | import("long").Long;
                    };
                }): _86.QueryGetPoolResponse;
                fromAmino(object: _86.QueryGetPoolResponseAmino): _86.QueryGetPoolResponse;
                toAmino(message: _86.QueryGetPoolResponse): _86.QueryGetPoolResponseAmino;
                fromAminoMsg(object: _86.QueryGetPoolResponseAminoMsg): _86.QueryGetPoolResponse;
                fromProtoMsg(message: _86.QueryGetPoolResponseProtoMsg): _86.QueryGetPoolResponse;
                toProto(message: _86.QueryGetPoolResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGetPoolResponse): _86.QueryGetPoolResponseProtoMsg;
            };
            QueryAllPoolRequest: {
                encode(message: _86.QueryAllPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllPoolRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _86.QueryAllPoolRequest;
                fromAmino(object: _86.QueryAllPoolRequestAmino): _86.QueryAllPoolRequest;
                toAmino(message: _86.QueryAllPoolRequest): _86.QueryAllPoolRequestAmino;
                fromAminoMsg(object: _86.QueryAllPoolRequestAminoMsg): _86.QueryAllPoolRequest;
                fromProtoMsg(message: _86.QueryAllPoolRequestProtoMsg): _86.QueryAllPoolRequest;
                toProto(message: _86.QueryAllPoolRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllPoolRequest): _86.QueryAllPoolRequestProtoMsg;
            };
            QueryAllPoolResponse: {
                encode(message: _86.QueryAllPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllPoolResponse;
                fromPartial(object: {
                    pool?: {
                        pair?: string;
                        denom1?: string;
                        denom2?: string;
                        volume1?: {
                            denom?: string;
                            amount?: string;
                        };
                        volume2?: {
                            denom?: string;
                            amount?: string;
                        };
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
                }): _86.QueryAllPoolResponse;
                fromAmino(object: _86.QueryAllPoolResponseAmino): _86.QueryAllPoolResponse;
                toAmino(message: _86.QueryAllPoolResponse): _86.QueryAllPoolResponseAmino;
                fromAminoMsg(object: _86.QueryAllPoolResponseAminoMsg): _86.QueryAllPoolResponse;
                fromProtoMsg(message: _86.QueryAllPoolResponseProtoMsg): _86.QueryAllPoolResponse;
                toProto(message: _86.QueryAllPoolResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAllPoolResponse): _86.QueryAllPoolResponseProtoMsg;
            };
            QueryVolumeRequest: {
                encode(message: _86.QueryVolumeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryVolumeRequest;
                fromPartial(object: {
                    denom?: string;
                }): _86.QueryVolumeRequest;
                fromAmino(object: _86.QueryVolumeRequestAmino): _86.QueryVolumeRequest;
                toAmino(message: _86.QueryVolumeRequest): _86.QueryVolumeRequestAmino;
                fromAminoMsg(object: _86.QueryVolumeRequestAminoMsg): _86.QueryVolumeRequest;
                fromProtoMsg(message: _86.QueryVolumeRequestProtoMsg): _86.QueryVolumeRequest;
                toProto(message: _86.QueryVolumeRequest): Uint8Array;
                toProtoMsg(message: _86.QueryVolumeRequest): _86.QueryVolumeRequestProtoMsg;
            };
            QueryVolumeResponse: {
                encode(message: _86.QueryVolumeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryVolumeResponse;
                fromPartial(object: {
                    amount?: string;
                }): _86.QueryVolumeResponse;
                fromAmino(object: _86.QueryVolumeResponseAmino): _86.QueryVolumeResponse;
                toAmino(message: _86.QueryVolumeResponse): _86.QueryVolumeResponseAmino;
                fromAminoMsg(object: _86.QueryVolumeResponseAminoMsg): _86.QueryVolumeResponse;
                fromProtoMsg(message: _86.QueryVolumeResponseProtoMsg): _86.QueryVolumeResponse;
                toProto(message: _86.QueryVolumeResponse): Uint8Array;
                toProtoMsg(message: _86.QueryVolumeResponse): _86.QueryVolumeResponseProtoMsg;
            };
            QueryAllVolumeRequest: {
                encode(message: _86.QueryAllVolumeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllVolumeRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _86.QueryAllVolumeRequest;
                fromAmino(object: _86.QueryAllVolumeRequestAmino): _86.QueryAllVolumeRequest;
                toAmino(message: _86.QueryAllVolumeRequest): _86.QueryAllVolumeRequestAmino;
                fromAminoMsg(object: _86.QueryAllVolumeRequestAminoMsg): _86.QueryAllVolumeRequest;
                fromProtoMsg(message: _86.QueryAllVolumeRequestProtoMsg): _86.QueryAllVolumeRequest;
                toProto(message: _86.QueryAllVolumeRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllVolumeRequest): _86.QueryAllVolumeRequestProtoMsg;
            };
            QueryAllVolumeResponse: {
                encode(message: _86.QueryAllVolumeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllVolumeResponse;
                fromPartial(object: {
                    volumes?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _86.QueryAllVolumeResponse;
                fromAmino(object: _86.QueryAllVolumeResponseAmino): _86.QueryAllVolumeResponse;
                toAmino(message: _86.QueryAllVolumeResponse): _86.QueryAllVolumeResponseAmino;
                fromAminoMsg(object: _86.QueryAllVolumeResponseAminoMsg): _86.QueryAllVolumeResponse;
                fromProtoMsg(message: _86.QueryAllVolumeResponseProtoMsg): _86.QueryAllVolumeResponse;
                toProto(message: _86.QueryAllVolumeResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAllVolumeResponse): _86.QueryAllVolumeResponseProtoMsg;
            };
            QueryBurnedRequest: {
                encode(_: _86.QueryBurnedRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryBurnedRequest;
                fromPartial(_: {}): _86.QueryBurnedRequest;
                fromAmino(_: _86.QueryBurnedRequestAmino): _86.QueryBurnedRequest;
                toAmino(_: _86.QueryBurnedRequest): _86.QueryBurnedRequestAmino;
                fromAminoMsg(object: _86.QueryBurnedRequestAminoMsg): _86.QueryBurnedRequest;
                fromProtoMsg(message: _86.QueryBurnedRequestProtoMsg): _86.QueryBurnedRequest;
                toProto(message: _86.QueryBurnedRequest): Uint8Array;
                toProtoMsg(message: _86.QueryBurnedRequest): _86.QueryBurnedRequestProtoMsg;
            };
            QueryBurnedResponse: {
                encode(message: _86.QueryBurnedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryBurnedResponse;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _86.QueryBurnedResponse;
                fromAmino(object: _86.QueryBurnedResponseAmino): _86.QueryBurnedResponse;
                toAmino(message: _86.QueryBurnedResponse): _86.QueryBurnedResponseAmino;
                fromAminoMsg(object: _86.QueryBurnedResponseAminoMsg): _86.QueryBurnedResponse;
                fromProtoMsg(message: _86.QueryBurnedResponseProtoMsg): _86.QueryBurnedResponse;
                toProto(message: _86.QueryBurnedResponse): Uint8Array;
                toProtoMsg(message: _86.QueryBurnedResponse): _86.QueryBurnedResponseProtoMsg;
            };
            QueryDropRequest: {
                encode(message: _86.QueryDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _86.QueryDropRequest;
                fromAmino(object: _86.QueryDropRequestAmino): _86.QueryDropRequest;
                toAmino(message: _86.QueryDropRequest): _86.QueryDropRequestAmino;
                fromAminoMsg(object: _86.QueryDropRequestAminoMsg): _86.QueryDropRequest;
                fromProtoMsg(message: _86.QueryDropRequestProtoMsg): _86.QueryDropRequest;
                toProto(message: _86.QueryDropRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDropRequest): _86.QueryDropRequestProtoMsg;
            };
            QueryDropCoinRequest: {
                encode(message: _86.QueryDropCoinRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropCoinRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                    amountA?: string;
                }): _86.QueryDropCoinRequest;
                fromAmino(object: _86.QueryDropCoinRequestAmino): _86.QueryDropCoinRequest;
                toAmino(message: _86.QueryDropCoinRequest): _86.QueryDropCoinRequestAmino;
                fromAminoMsg(object: _86.QueryDropCoinRequestAminoMsg): _86.QueryDropCoinRequest;
                fromProtoMsg(message: _86.QueryDropCoinRequestProtoMsg): _86.QueryDropCoinRequest;
                toProto(message: _86.QueryDropCoinRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDropCoinRequest): _86.QueryDropCoinRequestProtoMsg;
            };
            QueryDropCoinResponse: {
                encode(message: _86.QueryDropCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropCoinResponse;
                fromPartial(object: {
                    drops?: string;
                    amountB?: string;
                }): _86.QueryDropCoinResponse;
                fromAmino(object: _86.QueryDropCoinResponseAmino): _86.QueryDropCoinResponse;
                toAmino(message: _86.QueryDropCoinResponse): _86.QueryDropCoinResponseAmino;
                fromAminoMsg(object: _86.QueryDropCoinResponseAminoMsg): _86.QueryDropCoinResponse;
                fromProtoMsg(message: _86.QueryDropCoinResponseProtoMsg): _86.QueryDropCoinResponse;
                toProto(message: _86.QueryDropCoinResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDropCoinResponse): _86.QueryDropCoinResponseProtoMsg;
            };
            QueryDropResponse: {
                encode(message: _86.QueryDropResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropResponse;
                fromPartial(object: {
                    drop?: {
                        uid?: string | number | import("long").Long;
                        owner?: string;
                        pair?: string;
                        drops?: string;
                        product?: string;
                        active?: boolean;
                    };
                }): _86.QueryDropResponse;
                fromAmino(object: _86.QueryDropResponseAmino): _86.QueryDropResponse;
                toAmino(message: _86.QueryDropResponse): _86.QueryDropResponseAmino;
                fromAminoMsg(object: _86.QueryDropResponseAminoMsg): _86.QueryDropResponse;
                fromProtoMsg(message: _86.QueryDropResponseProtoMsg): _86.QueryDropResponse;
                toProto(message: _86.QueryDropResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDropResponse): _86.QueryDropResponseProtoMsg;
            };
            QueryDropAmountsRequest: {
                encode(message: _86.QueryDropAmountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropAmountsRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _86.QueryDropAmountsRequest;
                fromAmino(object: _86.QueryDropAmountsRequestAmino): _86.QueryDropAmountsRequest;
                toAmino(message: _86.QueryDropAmountsRequest): _86.QueryDropAmountsRequestAmino;
                fromAminoMsg(object: _86.QueryDropAmountsRequestAminoMsg): _86.QueryDropAmountsRequest;
                fromProtoMsg(message: _86.QueryDropAmountsRequestProtoMsg): _86.QueryDropAmountsRequest;
                toProto(message: _86.QueryDropAmountsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDropAmountsRequest): _86.QueryDropAmountsRequestProtoMsg;
            };
            QueryDropAmountsResponse: {
                encode(message: _86.QueryDropAmountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropAmountsResponse;
                fromPartial(object: {
                    denom1?: string;
                    denom2?: string;
                    amount1?: string;
                    amount2?: string;
                }): _86.QueryDropAmountsResponse;
                fromAmino(object: _86.QueryDropAmountsResponseAmino): _86.QueryDropAmountsResponse;
                toAmino(message: _86.QueryDropAmountsResponse): _86.QueryDropAmountsResponseAmino;
                fromAminoMsg(object: _86.QueryDropAmountsResponseAminoMsg): _86.QueryDropAmountsResponse;
                fromProtoMsg(message: _86.QueryDropAmountsResponseProtoMsg): _86.QueryDropAmountsResponse;
                toProto(message: _86.QueryDropAmountsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDropAmountsResponse): _86.QueryDropAmountsResponseProtoMsg;
            };
            QueryDropsToCoinsRequest: {
                encode(message: _86.QueryDropsToCoinsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropsToCoinsRequest;
                fromPartial(object: {
                    denom1?: string;
                    denom2?: string;
                    drops?: string;
                }): _86.QueryDropsToCoinsRequest;
                fromAmino(object: _86.QueryDropsToCoinsRequestAmino): _86.QueryDropsToCoinsRequest;
                toAmino(message: _86.QueryDropsToCoinsRequest): _86.QueryDropsToCoinsRequestAmino;
                fromAminoMsg(object: _86.QueryDropsToCoinsRequestAminoMsg): _86.QueryDropsToCoinsRequest;
                fromProtoMsg(message: _86.QueryDropsToCoinsRequestProtoMsg): _86.QueryDropsToCoinsRequest;
                toProto(message: _86.QueryDropsToCoinsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDropsToCoinsRequest): _86.QueryDropsToCoinsRequestProtoMsg;
            };
            QueryDropsToCoinsResponse: {
                encode(message: _86.QueryDropsToCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropsToCoinsResponse;
                fromPartial(object: {
                    denom1?: string;
                    amount1?: string;
                    denom2?: string;
                    amount2?: string;
                }): _86.QueryDropsToCoinsResponse;
                fromAmino(object: _86.QueryDropsToCoinsResponseAmino): _86.QueryDropsToCoinsResponse;
                toAmino(message: _86.QueryDropsToCoinsResponse): _86.QueryDropsToCoinsResponseAmino;
                fromAminoMsg(object: _86.QueryDropsToCoinsResponseAminoMsg): _86.QueryDropsToCoinsResponse;
                fromProtoMsg(message: _86.QueryDropsToCoinsResponseProtoMsg): _86.QueryDropsToCoinsResponse;
                toProto(message: _86.QueryDropsToCoinsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDropsToCoinsResponse): _86.QueryDropsToCoinsResponseProtoMsg;
            };
            QueryDropPairsRequest: {
                encode(message: _86.QueryDropPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropPairsRequest;
                fromPartial(object: {
                    address?: string;
                }): _86.QueryDropPairsRequest;
                fromAmino(object: _86.QueryDropPairsRequestAmino): _86.QueryDropPairsRequest;
                toAmino(message: _86.QueryDropPairsRequest): _86.QueryDropPairsRequestAmino;
                fromAminoMsg(object: _86.QueryDropPairsRequestAminoMsg): _86.QueryDropPairsRequest;
                fromProtoMsg(message: _86.QueryDropPairsRequestProtoMsg): _86.QueryDropPairsRequest;
                toProto(message: _86.QueryDropPairsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDropPairsRequest): _86.QueryDropPairsRequestProtoMsg;
            };
            QueryDropPairsResponse: {
                encode(message: _86.QueryDropPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropPairsResponse;
                fromPartial(object: {
                    pairs?: string[];
                }): _86.QueryDropPairsResponse;
                fromAmino(object: _86.QueryDropPairsResponseAmino): _86.QueryDropPairsResponse;
                toAmino(message: _86.QueryDropPairsResponse): _86.QueryDropPairsResponseAmino;
                fromAminoMsg(object: _86.QueryDropPairsResponseAminoMsg): _86.QueryDropPairsResponse;
                fromProtoMsg(message: _86.QueryDropPairsResponseProtoMsg): _86.QueryDropPairsResponse;
                toProto(message: _86.QueryDropPairsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDropPairsResponse): _86.QueryDropPairsResponseProtoMsg;
            };
            QueryDropOwnerPairRequest: {
                encode(message: _86.QueryDropOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropOwnerPairRequest;
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
                }): _86.QueryDropOwnerPairRequest;
                fromAmino(object: _86.QueryDropOwnerPairRequestAmino): _86.QueryDropOwnerPairRequest;
                toAmino(message: _86.QueryDropOwnerPairRequest): _86.QueryDropOwnerPairRequestAmino;
                fromAminoMsg(object: _86.QueryDropOwnerPairRequestAminoMsg): _86.QueryDropOwnerPairRequest;
                fromProtoMsg(message: _86.QueryDropOwnerPairRequestProtoMsg): _86.QueryDropOwnerPairRequest;
                toProto(message: _86.QueryDropOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDropOwnerPairRequest): _86.QueryDropOwnerPairRequestProtoMsg;
            };
            QueryDropOwnerPairSumRequest: {
                encode(message: _86.QueryDropOwnerPairSumRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropOwnerPairSumRequest;
                fromPartial(object: {
                    address?: string;
                    pair?: string;
                }): _86.QueryDropOwnerPairSumRequest;
                fromAmino(object: _86.QueryDropOwnerPairSumRequestAmino): _86.QueryDropOwnerPairSumRequest;
                toAmino(message: _86.QueryDropOwnerPairSumRequest): _86.QueryDropOwnerPairSumRequestAmino;
                fromAminoMsg(object: _86.QueryDropOwnerPairSumRequestAminoMsg): _86.QueryDropOwnerPairSumRequest;
                fromProtoMsg(message: _86.QueryDropOwnerPairSumRequestProtoMsg): _86.QueryDropOwnerPairSumRequest;
                toProto(message: _86.QueryDropOwnerPairSumRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDropOwnerPairSumRequest): _86.QueryDropOwnerPairSumRequestProtoMsg;
            };
            QueryDropOwnerPairSumResponse: {
                encode(message: _86.QueryDropOwnerPairSumResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropOwnerPairSumResponse;
                fromPartial(object: {
                    sum?: string;
                }): _86.QueryDropOwnerPairSumResponse;
                fromAmino(object: _86.QueryDropOwnerPairSumResponseAmino): _86.QueryDropOwnerPairSumResponse;
                toAmino(message: _86.QueryDropOwnerPairSumResponse): _86.QueryDropOwnerPairSumResponseAmino;
                fromAminoMsg(object: _86.QueryDropOwnerPairSumResponseAminoMsg): _86.QueryDropOwnerPairSumResponse;
                fromProtoMsg(message: _86.QueryDropOwnerPairSumResponseProtoMsg): _86.QueryDropOwnerPairSumResponse;
                toProto(message: _86.QueryDropOwnerPairSumResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDropOwnerPairSumResponse): _86.QueryDropOwnerPairSumResponseProtoMsg;
            };
            QueryDropOwnerPairUidsRequest: {
                encode(message: _86.QueryDropOwnerPairUidsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropOwnerPairUidsRequest;
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
                }): _86.QueryDropOwnerPairUidsRequest;
                fromAmino(object: _86.QueryDropOwnerPairUidsRequestAmino): _86.QueryDropOwnerPairUidsRequest;
                toAmino(message: _86.QueryDropOwnerPairUidsRequest): _86.QueryDropOwnerPairUidsRequestAmino;
                fromAminoMsg(object: _86.QueryDropOwnerPairUidsRequestAminoMsg): _86.QueryDropOwnerPairUidsRequest;
                fromProtoMsg(message: _86.QueryDropOwnerPairUidsRequestProtoMsg): _86.QueryDropOwnerPairUidsRequest;
                toProto(message: _86.QueryDropOwnerPairUidsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDropOwnerPairUidsRequest): _86.QueryDropOwnerPairUidsRequestProtoMsg;
            };
            QueryUidsResponse: {
                encode(message: _86.QueryUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryUidsResponse;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _86.QueryUidsResponse;
                fromAmino(object: _86.QueryUidsResponseAmino): _86.QueryUidsResponse;
                toAmino(message: _86.QueryUidsResponse): _86.QueryUidsResponseAmino;
                fromAminoMsg(object: _86.QueryUidsResponseAminoMsg): _86.QueryUidsResponse;
                fromProtoMsg(message: _86.QueryUidsResponseProtoMsg): _86.QueryUidsResponse;
                toProto(message: _86.QueryUidsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryUidsResponse): _86.QueryUidsResponseProtoMsg;
            };
            QueryDropOwnerPairDetailRequest: {
                encode(message: _86.QueryDropOwnerPairDetailRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropOwnerPairDetailRequest;
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
                }): _86.QueryDropOwnerPairDetailRequest;
                fromAmino(object: _86.QueryDropOwnerPairDetailRequestAmino): _86.QueryDropOwnerPairDetailRequest;
                toAmino(message: _86.QueryDropOwnerPairDetailRequest): _86.QueryDropOwnerPairDetailRequestAmino;
                fromAminoMsg(object: _86.QueryDropOwnerPairDetailRequestAminoMsg): _86.QueryDropOwnerPairDetailRequest;
                fromProtoMsg(message: _86.QueryDropOwnerPairDetailRequestProtoMsg): _86.QueryDropOwnerPairDetailRequest;
                toProto(message: _86.QueryDropOwnerPairDetailRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDropOwnerPairDetailRequest): _86.QueryDropOwnerPairDetailRequestProtoMsg;
            };
            QueryAllDropRequest: {
                encode(message: _86.QueryAllDropRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllDropRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _86.QueryAllDropRequest;
                fromAmino(object: _86.QueryAllDropRequestAmino): _86.QueryAllDropRequest;
                toAmino(message: _86.QueryAllDropRequest): _86.QueryAllDropRequestAmino;
                fromAminoMsg(object: _86.QueryAllDropRequestAminoMsg): _86.QueryAllDropRequest;
                fromProtoMsg(message: _86.QueryAllDropRequestProtoMsg): _86.QueryAllDropRequest;
                toProto(message: _86.QueryAllDropRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllDropRequest): _86.QueryAllDropRequestProtoMsg;
            };
            QueryDropsResponse: {
                encode(message: _86.QueryDropsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryDropsResponse;
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
                }): _86.QueryDropsResponse;
                fromAmino(object: _86.QueryDropsResponseAmino): _86.QueryDropsResponse;
                toAmino(message: _86.QueryDropsResponse): _86.QueryDropsResponseAmino;
                fromAminoMsg(object: _86.QueryDropsResponseAminoMsg): _86.QueryDropsResponse;
                fromProtoMsg(message: _86.QueryDropsResponseProtoMsg): _86.QueryDropsResponse;
                toProto(message: _86.QueryDropsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDropsResponse): _86.QueryDropsResponseProtoMsg;
            };
            QueryGetMemberRequest: {
                encode(message: _86.QueryGetMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryGetMemberRequest;
                fromPartial(object: {
                    denomA?: string;
                    denomB?: string;
                }): _86.QueryGetMemberRequest;
                fromAmino(object: _86.QueryGetMemberRequestAmino): _86.QueryGetMemberRequest;
                toAmino(message: _86.QueryGetMemberRequest): _86.QueryGetMemberRequestAmino;
                fromAminoMsg(object: _86.QueryGetMemberRequestAminoMsg): _86.QueryGetMemberRequest;
                fromProtoMsg(message: _86.QueryGetMemberRequestProtoMsg): _86.QueryGetMemberRequest;
                toProto(message: _86.QueryGetMemberRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGetMemberRequest): _86.QueryGetMemberRequestProtoMsg;
            };
            QueryGetMemberResponse: {
                encode(message: _86.QueryGetMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryGetMemberResponse;
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
                }): _86.QueryGetMemberResponse;
                fromAmino(object: _86.QueryGetMemberResponseAmino): _86.QueryGetMemberResponse;
                toAmino(message: _86.QueryGetMemberResponse): _86.QueryGetMemberResponseAmino;
                fromAminoMsg(object: _86.QueryGetMemberResponseAminoMsg): _86.QueryGetMemberResponse;
                fromProtoMsg(message: _86.QueryGetMemberResponseProtoMsg): _86.QueryGetMemberResponse;
                toProto(message: _86.QueryGetMemberResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGetMemberResponse): _86.QueryGetMemberResponseProtoMsg;
            };
            QueryAllMemberRequest: {
                encode(message: _86.QueryAllMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllMemberRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _86.QueryAllMemberRequest;
                fromAmino(object: _86.QueryAllMemberRequestAmino): _86.QueryAllMemberRequest;
                toAmino(message: _86.QueryAllMemberRequest): _86.QueryAllMemberRequestAmino;
                fromAminoMsg(object: _86.QueryAllMemberRequestAminoMsg): _86.QueryAllMemberRequest;
                fromProtoMsg(message: _86.QueryAllMemberRequestProtoMsg): _86.QueryAllMemberRequest;
                toProto(message: _86.QueryAllMemberRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllMemberRequest): _86.QueryAllMemberRequestProtoMsg;
            };
            QueryAllMemberResponse: {
                encode(message: _86.QueryAllMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllMemberResponse;
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
                }): _86.QueryAllMemberResponse;
                fromAmino(object: _86.QueryAllMemberResponseAmino): _86.QueryAllMemberResponse;
                toAmino(message: _86.QueryAllMemberResponse): _86.QueryAllMemberResponseAmino;
                fromAminoMsg(object: _86.QueryAllMemberResponseAminoMsg): _86.QueryAllMemberResponse;
                fromProtoMsg(message: _86.QueryAllMemberResponseProtoMsg): _86.QueryAllMemberResponse;
                toProto(message: _86.QueryAllMemberResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAllMemberResponse): _86.QueryAllMemberResponseProtoMsg;
            };
            QueryGetBurningsRequest: {
                encode(message: _86.QueryGetBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryGetBurningsRequest;
                fromPartial(object: {
                    denom?: string;
                }): _86.QueryGetBurningsRequest;
                fromAmino(object: _86.QueryGetBurningsRequestAmino): _86.QueryGetBurningsRequest;
                toAmino(message: _86.QueryGetBurningsRequest): _86.QueryGetBurningsRequestAmino;
                fromAminoMsg(object: _86.QueryGetBurningsRequestAminoMsg): _86.QueryGetBurningsRequest;
                fromProtoMsg(message: _86.QueryGetBurningsRequestProtoMsg): _86.QueryGetBurningsRequest;
                toProto(message: _86.QueryGetBurningsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryGetBurningsRequest): _86.QueryGetBurningsRequestProtoMsg;
            };
            QueryGetBurningsResponse: {
                encode(message: _86.QueryGetBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryGetBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _86.QueryGetBurningsResponse;
                fromAmino(object: _86.QueryGetBurningsResponseAmino): _86.QueryGetBurningsResponse;
                toAmino(message: _86.QueryGetBurningsResponse): _86.QueryGetBurningsResponseAmino;
                fromAminoMsg(object: _86.QueryGetBurningsResponseAminoMsg): _86.QueryGetBurningsResponse;
                fromProtoMsg(message: _86.QueryGetBurningsResponseProtoMsg): _86.QueryGetBurningsResponse;
                toProto(message: _86.QueryGetBurningsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryGetBurningsResponse): _86.QueryGetBurningsResponseProtoMsg;
            };
            QueryAllBurningsRequest: {
                encode(message: _86.QueryAllBurningsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllBurningsRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _86.QueryAllBurningsRequest;
                fromAmino(object: _86.QueryAllBurningsRequestAmino): _86.QueryAllBurningsRequest;
                toAmino(message: _86.QueryAllBurningsRequest): _86.QueryAllBurningsRequestAmino;
                fromAminoMsg(object: _86.QueryAllBurningsRequestAminoMsg): _86.QueryAllBurningsRequest;
                fromProtoMsg(message: _86.QueryAllBurningsRequestProtoMsg): _86.QueryAllBurningsRequest;
                toProto(message: _86.QueryAllBurningsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllBurningsRequest): _86.QueryAllBurningsRequestProtoMsg;
            };
            QueryAllBurningsResponse: {
                encode(message: _86.QueryAllBurningsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllBurningsResponse;
                fromPartial(object: {
                    burnings?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _86.QueryAllBurningsResponse;
                fromAmino(object: _86.QueryAllBurningsResponseAmino): _86.QueryAllBurningsResponse;
                toAmino(message: _86.QueryAllBurningsResponse): _86.QueryAllBurningsResponseAmino;
                fromAminoMsg(object: _86.QueryAllBurningsResponseAminoMsg): _86.QueryAllBurningsResponse;
                fromProtoMsg(message: _86.QueryAllBurningsResponseProtoMsg): _86.QueryAllBurningsResponse;
                toProto(message: _86.QueryAllBurningsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryAllBurningsResponse): _86.QueryAllBurningsResponseProtoMsg;
            };
            QueryOrderRequest: {
                encode(message: _86.QueryOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryOrderRequest;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                }): _86.QueryOrderRequest;
                fromAmino(object: _86.QueryOrderRequestAmino): _86.QueryOrderRequest;
                toAmino(message: _86.QueryOrderRequest): _86.QueryOrderRequestAmino;
                fromAminoMsg(object: _86.QueryOrderRequestAminoMsg): _86.QueryOrderRequest;
                fromProtoMsg(message: _86.QueryOrderRequestProtoMsg): _86.QueryOrderRequest;
                toProto(message: _86.QueryOrderRequest): Uint8Array;
                toProtoMsg(message: _86.QueryOrderRequest): _86.QueryOrderRequestProtoMsg;
            };
            QueryOrderResponse: {
                encode(message: _86.QueryOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryOrderResponse;
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
                        updTime?: string | number | import("long").Long;
                    };
                }): _86.QueryOrderResponse;
                fromAmino(object: _86.QueryOrderResponseAmino): _86.QueryOrderResponse;
                toAmino(message: _86.QueryOrderResponse): _86.QueryOrderResponseAmino;
                fromAminoMsg(object: _86.QueryOrderResponseAminoMsg): _86.QueryOrderResponse;
                fromProtoMsg(message: _86.QueryOrderResponseProtoMsg): _86.QueryOrderResponse;
                toProto(message: _86.QueryOrderResponse): Uint8Array;
                toProtoMsg(message: _86.QueryOrderResponse): _86.QueryOrderResponseProtoMsg;
            };
            QueryOrdersResponse: {
                encode(message: _86.QueryOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryOrdersResponse;
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
                        updTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _86.QueryOrdersResponse;
                fromAmino(object: _86.QueryOrdersResponseAmino): _86.QueryOrdersResponse;
                toAmino(message: _86.QueryOrdersResponse): _86.QueryOrdersResponseAmino;
                fromAminoMsg(object: _86.QueryOrdersResponseAminoMsg): _86.QueryOrdersResponse;
                fromProtoMsg(message: _86.QueryOrdersResponseProtoMsg): _86.QueryOrdersResponse;
                toProto(message: _86.QueryOrdersResponse): Uint8Array;
                toProtoMsg(message: _86.QueryOrdersResponse): _86.QueryOrdersResponseProtoMsg;
            };
            QueryAllOrderRequest: {
                encode(message: _86.QueryAllOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryAllOrderRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _86.QueryAllOrderRequest;
                fromAmino(object: _86.QueryAllOrderRequestAmino): _86.QueryAllOrderRequest;
                toAmino(message: _86.QueryAllOrderRequest): _86.QueryAllOrderRequestAmino;
                fromAminoMsg(object: _86.QueryAllOrderRequestAminoMsg): _86.QueryAllOrderRequest;
                fromProtoMsg(message: _86.QueryAllOrderRequestProtoMsg): _86.QueryAllOrderRequest;
                toProto(message: _86.QueryAllOrderRequest): Uint8Array;
                toProtoMsg(message: _86.QueryAllOrderRequest): _86.QueryAllOrderRequestProtoMsg;
            };
            QueryOrderOwnerRequest: {
                encode(message: _86.QueryOrderOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryOrderOwnerRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").Long;
                        limit?: string | number | import("long").Long;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _86.QueryOrderOwnerRequest;
                fromAmino(object: _86.QueryOrderOwnerRequestAmino): _86.QueryOrderOwnerRequest;
                toAmino(message: _86.QueryOrderOwnerRequest): _86.QueryOrderOwnerRequestAmino;
                fromAminoMsg(object: _86.QueryOrderOwnerRequestAminoMsg): _86.QueryOrderOwnerRequest;
                fromProtoMsg(message: _86.QueryOrderOwnerRequestProtoMsg): _86.QueryOrderOwnerRequest;
                toProto(message: _86.QueryOrderOwnerRequest): Uint8Array;
                toProtoMsg(message: _86.QueryOrderOwnerRequest): _86.QueryOrderOwnerRequestProtoMsg;
            };
            QueryOrderOwnerUidsResponse: {
                encode(message: _86.QueryOrderOwnerUidsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryOrderOwnerUidsResponse;
                fromPartial(object: {
                    orders?: {
                        uids?: (string | number | import("long").Long)[];
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _86.QueryOrderOwnerUidsResponse;
                fromAmino(object: _86.QueryOrderOwnerUidsResponseAmino): _86.QueryOrderOwnerUidsResponse;
                toAmino(message: _86.QueryOrderOwnerUidsResponse): _86.QueryOrderOwnerUidsResponseAmino;
                fromAminoMsg(object: _86.QueryOrderOwnerUidsResponseAminoMsg): _86.QueryOrderOwnerUidsResponse;
                fromProtoMsg(message: _86.QueryOrderOwnerUidsResponseProtoMsg): _86.QueryOrderOwnerUidsResponse;
                toProto(message: _86.QueryOrderOwnerUidsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryOrderOwnerUidsResponse): _86.QueryOrderOwnerUidsResponseProtoMsg;
            };
            QueryOrderOwnerPairRequest: {
                encode(message: _86.QueryOrderOwnerPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryOrderOwnerPairRequest;
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
                }): _86.QueryOrderOwnerPairRequest;
                fromAmino(object: _86.QueryOrderOwnerPairRequestAmino): _86.QueryOrderOwnerPairRequest;
                toAmino(message: _86.QueryOrderOwnerPairRequest): _86.QueryOrderOwnerPairRequestAmino;
                fromAminoMsg(object: _86.QueryOrderOwnerPairRequestAminoMsg): _86.QueryOrderOwnerPairRequest;
                fromProtoMsg(message: _86.QueryOrderOwnerPairRequestProtoMsg): _86.QueryOrderOwnerPairRequest;
                toProto(message: _86.QueryOrderOwnerPairRequest): Uint8Array;
                toProtoMsg(message: _86.QueryOrderOwnerPairRequest): _86.QueryOrderOwnerPairRequestProtoMsg;
            };
            QueryOrderOwnerPairResponse: {
                encode(message: _86.QueryOrderOwnerPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryOrderOwnerPairResponse;
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
                        updTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _86.QueryOrderOwnerPairResponse;
                fromAmino(object: _86.QueryOrderOwnerPairResponseAmino): _86.QueryOrderOwnerPairResponse;
                toAmino(message: _86.QueryOrderOwnerPairResponse): _86.QueryOrderOwnerPairResponseAmino;
                fromAminoMsg(object: _86.QueryOrderOwnerPairResponseAminoMsg): _86.QueryOrderOwnerPairResponse;
                fromProtoMsg(message: _86.QueryOrderOwnerPairResponseProtoMsg): _86.QueryOrderOwnerPairResponse;
                toProto(message: _86.QueryOrderOwnerPairResponse): Uint8Array;
                toProtoMsg(message: _86.QueryOrderOwnerPairResponse): _86.QueryOrderOwnerPairResponseProtoMsg;
            };
            QueryBookRequest: {
                encode(message: _86.QueryBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryBookRequest;
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
                }): _86.QueryBookRequest;
                fromAmino(object: _86.QueryBookRequestAmino): _86.QueryBookRequest;
                toAmino(message: _86.QueryBookRequest): _86.QueryBookRequestAmino;
                fromAminoMsg(object: _86.QueryBookRequestAminoMsg): _86.QueryBookRequest;
                fromProtoMsg(message: _86.QueryBookRequestProtoMsg): _86.QueryBookRequest;
                toProto(message: _86.QueryBookRequest): Uint8Array;
                toProtoMsg(message: _86.QueryBookRequest): _86.QueryBookRequestProtoMsg;
            };
            QueryBookResponse: {
                encode(message: _86.QueryBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryBookResponse;
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
                        updTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _86.QueryBookResponse;
                fromAmino(object: _86.QueryBookResponseAmino): _86.QueryBookResponse;
                toAmino(message: _86.QueryBookResponse): _86.QueryBookResponseAmino;
                fromAminoMsg(object: _86.QueryBookResponseAminoMsg): _86.QueryBookResponse;
                fromProtoMsg(message: _86.QueryBookResponseProtoMsg): _86.QueryBookResponse;
                toProto(message: _86.QueryBookResponse): Uint8Array;
                toProtoMsg(message: _86.QueryBookResponse): _86.QueryBookResponseProtoMsg;
            };
            QueryBookendsRequest: {
                encode(message: _86.QueryBookendsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryBookendsRequest;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                }): _86.QueryBookendsRequest;
                fromAmino(object: _86.QueryBookendsRequestAmino): _86.QueryBookendsRequest;
                toAmino(message: _86.QueryBookendsRequest): _86.QueryBookendsRequestAmino;
                fromAminoMsg(object: _86.QueryBookendsRequestAminoMsg): _86.QueryBookendsRequest;
                fromProtoMsg(message: _86.QueryBookendsRequestProtoMsg): _86.QueryBookendsRequest;
                toProto(message: _86.QueryBookendsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryBookendsRequest): _86.QueryBookendsRequestProtoMsg;
            };
            QueryBookendsResponse: {
                encode(message: _86.QueryBookendsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryBookendsResponse;
                fromPartial(object: {
                    coinA?: string;
                    coinB?: string;
                    orderType?: string;
                    rate?: string[];
                    prev?: string | number | import("long").Long;
                    next?: string | number | import("long").Long;
                }): _86.QueryBookendsResponse;
                fromAmino(object: _86.QueryBookendsResponseAmino): _86.QueryBookendsResponse;
                toAmino(message: _86.QueryBookendsResponse): _86.QueryBookendsResponseAmino;
                fromAminoMsg(object: _86.QueryBookendsResponseAminoMsg): _86.QueryBookendsResponse;
                fromProtoMsg(message: _86.QueryBookendsResponseProtoMsg): _86.QueryBookendsResponse;
                toProto(message: _86.QueryBookendsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryBookendsResponse): _86.QueryBookendsResponseProtoMsg;
            };
            QueryHistoryRequest: {
                encode(message: _86.QueryHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryHistoryRequest;
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
                }): _86.QueryHistoryRequest;
                fromAmino(object: _86.QueryHistoryRequestAmino): _86.QueryHistoryRequest;
                toAmino(message: _86.QueryHistoryRequest): _86.QueryHistoryRequestAmino;
                fromAminoMsg(object: _86.QueryHistoryRequestAminoMsg): _86.QueryHistoryRequest;
                fromProtoMsg(message: _86.QueryHistoryRequestProtoMsg): _86.QueryHistoryRequest;
                toProto(message: _86.QueryHistoryRequest): Uint8Array;
                toProtoMsg(message: _86.QueryHistoryRequest): _86.QueryHistoryRequestProtoMsg;
            };
            QueryHistoryResponse: {
                encode(message: _86.QueryHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryHistoryResponse;
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
                        updTime?: string | number | import("long").Long;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").Long;
                    };
                }): _86.QueryHistoryResponse;
                fromAmino(object: _86.QueryHistoryResponseAmino): _86.QueryHistoryResponse;
                toAmino(message: _86.QueryHistoryResponse): _86.QueryHistoryResponseAmino;
                fromAminoMsg(object: _86.QueryHistoryResponseAminoMsg): _86.QueryHistoryResponse;
                fromProtoMsg(message: _86.QueryHistoryResponseProtoMsg): _86.QueryHistoryResponse;
                toProto(message: _86.QueryHistoryResponse): Uint8Array;
                toProtoMsg(message: _86.QueryHistoryResponse): _86.QueryHistoryResponseProtoMsg;
            };
            QueryQuoteRequest: {
                encode(message: _86.QueryQuoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryQuoteRequest;
                fromPartial(object: {
                    denomAsk?: string;
                    denomBid?: string;
                    denomAmount?: string;
                    amount?: string;
                }): _86.QueryQuoteRequest;
                fromAmino(object: _86.QueryQuoteRequestAmino): _86.QueryQuoteRequest;
                toAmino(message: _86.QueryQuoteRequest): _86.QueryQuoteRequestAmino;
                fromAminoMsg(object: _86.QueryQuoteRequestAminoMsg): _86.QueryQuoteRequest;
                fromProtoMsg(message: _86.QueryQuoteRequestProtoMsg): _86.QueryQuoteRequest;
                toProto(message: _86.QueryQuoteRequest): Uint8Array;
                toProtoMsg(message: _86.QueryQuoteRequest): _86.QueryQuoteRequestProtoMsg;
            };
            QueryQuoteResponse: {
                encode(message: _86.QueryQuoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryQuoteResponse;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _86.QueryQuoteResponse;
                fromAmino(object: _86.QueryQuoteResponseAmino): _86.QueryQuoteResponse;
                toAmino(message: _86.QueryQuoteResponse): _86.QueryQuoteResponseAmino;
                fromAminoMsg(object: _86.QueryQuoteResponseAminoMsg): _86.QueryQuoteResponse;
                fromProtoMsg(message: _86.QueryQuoteResponseProtoMsg): _86.QueryQuoteResponse;
                toProto(message: _86.QueryQuoteResponse): Uint8Array;
                toProtoMsg(message: _86.QueryQuoteResponse): _86.QueryQuoteResponseProtoMsg;
            };
            Pool: {
                encode(message: _85.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Pool;
                fromPartial(object: {
                    pair?: string;
                    denom1?: string;
                    denom2?: string;
                    volume1?: {
                        denom?: string;
                        amount?: string;
                    };
                    volume2?: {
                        denom?: string;
                        amount?: string;
                    };
                    leaders?: {
                        address?: string;
                        drops?: string;
                    }[];
                    drops?: string;
                    history?: string | number | import("long").Long;
                }): _85.Pool;
                fromAmino(object: _85.PoolAmino): _85.Pool;
                toAmino(message: _85.Pool): _85.PoolAmino;
                fromAminoMsg(object: _85.PoolAminoMsg): _85.Pool;
                fromProtoMsg(message: _85.PoolProtoMsg): _85.Pool;
                toProto(message: _85.Pool): Uint8Array;
                toProtoMsg(message: _85.Pool): _85.PoolProtoMsg;
            };
            Leader: {
                encode(message: _85.Leader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Leader;
                fromPartial(object: {
                    address?: string;
                    drops?: string;
                }): _85.Leader;
                fromAmino(object: _85.LeaderAmino): _85.Leader;
                toAmino(message: _85.Leader): _85.LeaderAmino;
                fromAminoMsg(object: _85.LeaderAminoMsg): _85.Leader;
                fromProtoMsg(message: _85.LeaderProtoMsg): _85.Leader;
                toProto(message: _85.Leader): Uint8Array;
                toProtoMsg(message: _85.Leader): _85.LeaderProtoMsg;
            };
            Volume: {
                encode(message: _85.Volume, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Volume;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _85.Volume;
                fromAmino(object: _85.VolumeAmino): _85.Volume;
                toAmino(message: _85.Volume): _85.VolumeAmino;
                fromAminoMsg(object: _85.VolumeAminoMsg): _85.Volume;
                fromProtoMsg(message: _85.VolumeProtoMsg): _85.Volume;
                toProto(message: _85.Volume): Uint8Array;
                toProtoMsg(message: _85.Volume): _85.VolumeProtoMsg;
            };
            Params: {
                encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
                fromPartial(object: {
                    earnRates?: string;
                    burnRate?: string;
                    burnCoin?: string;
                    marketFee?: string;
                }): _84.Params;
                fromAmino(object: _84.ParamsAmino): _84.Params;
                toAmino(message: _84.Params): _84.ParamsAmino;
                fromAminoMsg(object: _84.ParamsAminoMsg): _84.Params;
                fromProtoMsg(message: _84.ParamsProtoMsg): _84.Params;
                toProto(message: _84.Params): Uint8Array;
                toProtoMsg(message: _84.Params): _84.ParamsProtoMsg;
            };
            Order: {
                encode(message: _83.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Order;
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
                    updTime?: string | number | import("long").Long;
                }): _83.Order;
                fromAmino(object: _83.OrderAmino): _83.Order;
                toAmino(message: _83.Order): _83.OrderAmino;
                fromAminoMsg(object: _83.OrderAminoMsg): _83.Order;
                fromProtoMsg(message: _83.OrderProtoMsg): _83.Order;
                toProto(message: _83.Order): Uint8Array;
                toProtoMsg(message: _83.Order): _83.OrderProtoMsg;
            };
            Orders: {
                encode(message: _83.Orders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Orders;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                }): _83.Orders;
                fromAmino(object: _83.OrdersAmino): _83.Orders;
                toAmino(message: _83.Orders): _83.OrdersAmino;
                fromAminoMsg(object: _83.OrdersAminoMsg): _83.Orders;
                fromProtoMsg(message: _83.OrdersProtoMsg): _83.Orders;
                toProto(message: _83.Orders): Uint8Array;
                toProtoMsg(message: _83.Orders): _83.OrdersProtoMsg;
            };
            OrderResponse: {
                encode(message: _83.OrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.OrderResponse;
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
                    updTime?: string | number | import("long").Long;
                }): _83.OrderResponse;
                fromAmino(object: _83.OrderResponseAmino): _83.OrderResponse;
                toAmino(message: _83.OrderResponse): _83.OrderResponseAmino;
                fromAminoMsg(object: _83.OrderResponseAminoMsg): _83.OrderResponse;
                fromProtoMsg(message: _83.OrderResponseProtoMsg): _83.OrderResponse;
                toProto(message: _83.OrderResponse): Uint8Array;
                toProtoMsg(message: _83.OrderResponse): _83.OrderResponseProtoMsg;
            };
            Member: {
                encode(message: _82.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Member;
                fromPartial(object: {
                    pair?: string;
                    denomA?: string;
                    denomB?: string;
                    balance?: string;
                    previous?: string;
                    limit?: string | number | import("long").Long;
                    stop?: string | number | import("long").Long;
                }): _82.Member;
                fromAmino(object: _82.MemberAmino): _82.Member;
                toAmino(message: _82.Member): _82.MemberAmino;
                fromAminoMsg(object: _82.MemberAminoMsg): _82.Member;
                fromProtoMsg(message: _82.MemberProtoMsg): _82.Member;
                toProto(message: _82.Member): Uint8Array;
                toProtoMsg(message: _82.Member): _82.MemberProtoMsg;
            };
            GenesisState: {
                encode(message: _81.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.GenesisState;
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
                        volume1?: {
                            denom?: string;
                            amount?: string;
                        };
                        volume2?: {
                            denom?: string;
                            amount?: string;
                        };
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
                        updTime?: string | number | import("long").Long;
                    }[];
                }): _81.GenesisState;
                fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
                fromAminoMsg(object: _81.GenesisStateAminoMsg): _81.GenesisState;
                fromProtoMsg(message: _81.GenesisStateProtoMsg): _81.GenesisState;
                toProto(message: _81.GenesisState): Uint8Array;
                toProtoMsg(message: _81.GenesisState): _81.GenesisStateProtoMsg;
            };
            Drop: {
                encode(message: _80.Drop, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Drop;
                fromPartial(object: {
                    uid?: string | number | import("long").Long;
                    owner?: string;
                    pair?: string;
                    drops?: string;
                    product?: string;
                    active?: boolean;
                }): _80.Drop;
                fromAmino(object: _80.DropAmino): _80.Drop;
                toAmino(message: _80.Drop): _80.DropAmino;
                fromAminoMsg(object: _80.DropAminoMsg): _80.Drop;
                fromProtoMsg(message: _80.DropProtoMsg): _80.Drop;
                toProto(message: _80.Drop): Uint8Array;
                toProtoMsg(message: _80.Drop): _80.DropProtoMsg;
            };
            Drops: {
                encode(message: _80.Drops, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Drops;
                fromPartial(object: {
                    uids?: (string | number | import("long").Long)[];
                    sum?: string;
                }): _80.Drops;
                fromAmino(object: _80.DropsAmino): _80.Drops;
                toAmino(message: _80.Drops): _80.DropsAmino;
                fromAminoMsg(object: _80.DropsAminoMsg): _80.Drops;
                fromProtoMsg(message: _80.DropsProtoMsg): _80.Drops;
                toProto(message: _80.Drops): Uint8Array;
                toProtoMsg(message: _80.Drops): _80.DropsProtoMsg;
            };
            DropPairs: {
                encode(message: _80.DropPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DropPairs;
                fromPartial(object: {
                    pairs?: string[];
                }): _80.DropPairs;
                fromAmino(object: _80.DropPairsAmino): _80.DropPairs;
                toAmino(message: _80.DropPairs): _80.DropPairsAmino;
                fromAminoMsg(object: _80.DropPairsAminoMsg): _80.DropPairs;
                fromProtoMsg(message: _80.DropPairsProtoMsg): _80.DropPairs;
                toProto(message: _80.DropPairs): Uint8Array;
                toProtoMsg(message: _80.DropPairs): _80.DropPairsProtoMsg;
            };
            Burnings: {
                encode(message: _79.Burnings, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Burnings;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _79.Burnings;
                fromAmino(object: _79.BurningsAmino): _79.Burnings;
                toAmino(message: _79.Burnings): _79.BurningsAmino;
                fromAminoMsg(object: _79.BurningsAminoMsg): _79.Burnings;
                fromProtoMsg(message: _79.BurningsProtoMsg): _79.Burnings;
                toProto(message: _79.Burnings): Uint8Array;
                toProtoMsg(message: _79.Burnings): _79.BurningsProtoMsg;
            };
            Burned: {
                encode(message: _79.Burned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Burned;
                fromPartial(object: {
                    amount?: string;
                }): _79.Burned;
                fromAmino(object: _79.BurnedAmino): _79.Burned;
                toAmino(message: _79.Burned): _79.BurnedAmino;
                fromAminoMsg(object: _79.BurnedAminoMsg): _79.Burned;
                fromProtoMsg(message: _79.BurnedProtoMsg): _79.Burned;
                toProto(message: _79.Burned): Uint8Array;
                toProtoMsg(message: _79.Burned): _79.BurnedProtoMsg;
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
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            pendulumlabs: {
                market: {
                    market: _124.MsgClientImpl;
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
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
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
                        params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                        burned(request?: _86.QueryBurnedRequest): Promise<_86.QueryBurnedResponse>;
                        pool(request: _86.QueryGetPoolRequest): Promise<_86.QueryGetPoolResponse>;
                        poolAll(request?: _86.QueryAllPoolRequest): Promise<_86.QueryAllPoolResponse>;
                        volume(request: _86.QueryVolumeRequest): Promise<_86.QueryVolumeResponse>;
                        volumeAll(request?: _86.QueryAllVolumeRequest): Promise<_86.QueryAllVolumeResponse>;
                        drop(request: _86.QueryDropRequest): Promise<_86.QueryDropResponse>;
                        dropAmounts(request: _86.QueryDropAmountsRequest): Promise<_86.QueryDropAmountsResponse>;
                        dropCoin(request: _86.QueryDropCoinRequest): Promise<_86.QueryDropCoinResponse>;
                        dropsToCoins(request: _86.QueryDropsToCoinsRequest): Promise<_86.QueryDropsToCoinsResponse>;
                        dropPairs(request: _86.QueryDropPairsRequest): Promise<_86.QueryDropPairsResponse>;
                        dropOwnerPair(request: _86.QueryDropOwnerPairRequest): Promise<_86.QueryDropsResponse>;
                        dropAll(request?: _86.QueryAllDropRequest): Promise<_86.QueryDropsResponse>;
                        member(request: _86.QueryGetMemberRequest): Promise<_86.QueryGetMemberResponse>;
                        memberAll(request?: _86.QueryAllMemberRequest): Promise<_86.QueryAllMemberResponse>;
                        burnings(request: _86.QueryGetBurningsRequest): Promise<_86.QueryGetBurningsResponse>;
                        burningsAll(request?: _86.QueryAllBurningsRequest): Promise<_86.QueryAllBurningsResponse>;
                        order(request: _86.QueryOrderRequest): Promise<_86.QueryOrderResponse>;
                        orderAll(request?: _86.QueryAllOrderRequest): Promise<_86.QueryOrdersResponse>;
                        orderOwner(request: _86.QueryOrderOwnerRequest): Promise<_86.QueryOrdersResponse>;
                        orderOwnerUids(request: _86.QueryOrderOwnerRequest): Promise<_86.QueryOrderOwnerUidsResponse>;
                        book(request: _86.QueryBookRequest): Promise<_86.QueryBookResponse>;
                        bookends(request: _86.QueryBookendsRequest): Promise<_86.QueryBookendsResponse>;
                        history(request: _86.QueryHistoryRequest): Promise<_86.QueryHistoryResponse>;
                        quote(request: _86.QueryQuoteRequest): Promise<_86.QueryQuoteResponse>;
                    };
                };
            };
        }>;
    };
}
