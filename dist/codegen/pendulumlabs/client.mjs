import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as marketTxRegistry from "../market/tx.registry";
import * as marketTxAmino from "../market/tx.amino";
export const pendulumlabsAminoConverters = {
    ...marketTxAmino.AminoConverter
};
export const pendulumlabsProtoRegistry = [...marketTxRegistry.registry];
export const getSigningPendulumlabsClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...pendulumlabsProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...pendulumlabsAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningPendulumlabsClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningPendulumlabsClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
//# sourceMappingURL=client.js.map