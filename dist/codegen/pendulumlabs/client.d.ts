import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const pendulumlabsAminoConverters: {
    "/pendulumlabs.market.market.MsgCreatePool": {
        aminoType: string;
        toAmino: (message: import("../market/tx").MsgCreatePool) => import("../market/tx").MsgCreatePoolAmino;
        fromAmino: (object: import("../market/tx").MsgCreatePoolAmino) => import("../market/tx").MsgCreatePool;
    };
    "/pendulumlabs.market.market.MsgCreateDrop": {
        aminoType: string;
        toAmino: (message: import("../market/tx").MsgCreateDrop) => import("../market/tx").MsgCreateDropAmino;
        fromAmino: (object: import("../market/tx").MsgCreateDropAmino) => import("../market/tx").MsgCreateDrop;
    };
    "/pendulumlabs.market.market.MsgRedeemDrop": {
        aminoType: string;
        toAmino: (message: import("../market/tx").MsgRedeemDrop) => import("../market/tx").MsgRedeemDropAmino;
        fromAmino: (object: import("../market/tx").MsgRedeemDropAmino) => import("../market/tx").MsgRedeemDrop;
    };
    "/pendulumlabs.market.market.MsgCreateOrder": {
        aminoType: string;
        toAmino: (message: import("../market/tx").MsgCreateOrder) => import("../market/tx").MsgCreateOrderAmino;
        fromAmino: (object: import("../market/tx").MsgCreateOrderAmino) => import("../market/tx").MsgCreateOrder;
    };
    "/pendulumlabs.market.market.MsgCancelOrder": {
        aminoType: string;
        toAmino: (message: import("../market/tx").MsgCancelOrder) => import("../market/tx").MsgCancelOrderAmino;
        fromAmino: (object: import("../market/tx").MsgCancelOrderAmino) => import("../market/tx").MsgCancelOrder;
    };
    "/pendulumlabs.market.market.MsgMarketOrder": {
        aminoType: string;
        toAmino: (message: import("../market/tx").MsgMarketOrder) => import("../market/tx").MsgMarketOrderAmino;
        fromAmino: (object: import("../market/tx").MsgMarketOrderAmino) => import("../market/tx").MsgMarketOrder;
    };
};
export declare const pendulumlabsProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPendulumlabsClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPendulumlabsClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
