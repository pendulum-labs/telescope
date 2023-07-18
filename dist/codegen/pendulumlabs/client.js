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
exports.getSigningPendulumlabsClient = exports.getSigningPendulumlabsClientOptions = exports.pendulumlabsProtoRegistry = exports.pendulumlabsAminoConverters = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const marketTxRegistry = __importStar(require("../market/tx.registry"));
const marketTxAmino = __importStar(require("../market/tx.amino"));
exports.pendulumlabsAminoConverters = {
    ...marketTxAmino.AminoConverter
};
exports.pendulumlabsProtoRegistry = [...marketTxRegistry.registry];
const getSigningPendulumlabsClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.pendulumlabsProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.pendulumlabsAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
exports.getSigningPendulumlabsClientOptions = getSigningPendulumlabsClientOptions;
const getSigningPendulumlabsClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes }) => {
    const { registry, aminoTypes } = (0, exports.getSigningPendulumlabsClientOptions)({
        defaultTypes
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
exports.getSigningPendulumlabsClient = getSigningPendulumlabsClient;
//# sourceMappingURL=client.js.map