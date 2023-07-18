import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as marketTxRegistry from "../market/tx.registry";
import * as marketTxAmino from "../market/tx.amino";
export const pendulumlabsAminoConverters = {
  ...marketTxAmino.AminoConverter
};
export const pendulumlabsProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...marketTxRegistry.registry];
export const getSigningPendulumlabsClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...pendulumlabsProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...pendulumlabsAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningPendulumlabsClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningPendulumlabsClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};