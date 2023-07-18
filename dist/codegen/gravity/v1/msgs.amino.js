"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const msgs_1 = require("./msgs");
exports.AminoConverter = {
    "/gravity.v1.MsgValsetConfirm": {
        aminoType: "/gravity.v1.MsgValsetConfirm",
        toAmino: msgs_1.MsgValsetConfirm.toAmino,
        fromAmino: msgs_1.MsgValsetConfirm.fromAmino
    },
    "/gravity.v1.MsgSendToEth": {
        aminoType: "/gravity.v1.MsgSendToEth",
        toAmino: msgs_1.MsgSendToEth.toAmino,
        fromAmino: msgs_1.MsgSendToEth.fromAmino
    },
    "/gravity.v1.MsgRequestBatch": {
        aminoType: "/gravity.v1.MsgRequestBatch",
        toAmino: msgs_1.MsgRequestBatch.toAmino,
        fromAmino: msgs_1.MsgRequestBatch.fromAmino
    },
    "/gravity.v1.MsgConfirmBatch": {
        aminoType: "/gravity.v1.MsgConfirmBatch",
        toAmino: msgs_1.MsgConfirmBatch.toAmino,
        fromAmino: msgs_1.MsgConfirmBatch.fromAmino
    },
    "/gravity.v1.MsgConfirmLogicCall": {
        aminoType: "/gravity.v1.MsgConfirmLogicCall",
        toAmino: msgs_1.MsgConfirmLogicCall.toAmino,
        fromAmino: msgs_1.MsgConfirmLogicCall.fromAmino
    },
    "/gravity.v1.MsgSendToCosmosClaim": {
        aminoType: "/gravity.v1.MsgSendToCosmosClaim",
        toAmino: msgs_1.MsgSendToCosmosClaim.toAmino,
        fromAmino: msgs_1.MsgSendToCosmosClaim.fromAmino
    },
    "/gravity.v1.MsgBatchSendToEthClaim": {
        aminoType: "/gravity.v1.MsgBatchSendToEthClaim",
        toAmino: msgs_1.MsgBatchSendToEthClaim.toAmino,
        fromAmino: msgs_1.MsgBatchSendToEthClaim.fromAmino
    },
    "/gravity.v1.MsgValsetUpdatedClaim": {
        aminoType: "/gravity.v1.MsgValsetUpdatedClaim",
        toAmino: msgs_1.MsgValsetUpdatedClaim.toAmino,
        fromAmino: msgs_1.MsgValsetUpdatedClaim.fromAmino
    },
    "/gravity.v1.MsgERC20DeployedClaim": {
        aminoType: "/gravity.v1.MsgERC20DeployedClaim",
        toAmino: msgs_1.MsgERC20DeployedClaim.toAmino,
        fromAmino: msgs_1.MsgERC20DeployedClaim.fromAmino
    },
    "/gravity.v1.MsgLogicCallExecutedClaim": {
        aminoType: "/gravity.v1.MsgLogicCallExecutedClaim",
        toAmino: msgs_1.MsgLogicCallExecutedClaim.toAmino,
        fromAmino: msgs_1.MsgLogicCallExecutedClaim.fromAmino
    },
    "/gravity.v1.MsgSetOrchestratorAddress": {
        aminoType: "/gravity.v1.MsgSetOrchestratorAddress",
        toAmino: msgs_1.MsgSetOrchestratorAddress.toAmino,
        fromAmino: msgs_1.MsgSetOrchestratorAddress.fromAmino
    },
    "/gravity.v1.MsgCancelSendToEth": {
        aminoType: "/gravity.v1.MsgCancelSendToEth",
        toAmino: msgs_1.MsgCancelSendToEth.toAmino,
        fromAmino: msgs_1.MsgCancelSendToEth.fromAmino
    },
    "/gravity.v1.MsgSubmitBadSignatureEvidence": {
        aminoType: "/gravity.v1.MsgSubmitBadSignatureEvidence",
        toAmino: msgs_1.MsgSubmitBadSignatureEvidence.toAmino,
        fromAmino: msgs_1.MsgSubmitBadSignatureEvidence.fromAmino
    }
};
//# sourceMappingURL=msgs.amino.js.map