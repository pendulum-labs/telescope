import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as gravityV1MsgsRegistry from "./v1/msgs.registry";
import * as gravityV1MsgsAmino from "./v1/msgs.amino";
export const gravityAminoConverters = {
    ...gravityV1MsgsAmino.AminoConverter
};
export const gravityProtoRegistry = [...gravityV1MsgsRegistry.registry];
export const getSigningGravityClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...gravityProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...gravityAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningGravityClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningGravityClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
//# sourceMappingURL=client.js.map