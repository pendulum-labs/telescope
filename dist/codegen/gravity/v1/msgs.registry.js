"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const msgs_1 = require("./msgs");
exports.registry = [["/gravity.v1.MsgValsetConfirm", msgs_1.MsgValsetConfirm], ["/gravity.v1.MsgSendToEth", msgs_1.MsgSendToEth], ["/gravity.v1.MsgRequestBatch", msgs_1.MsgRequestBatch], ["/gravity.v1.MsgConfirmBatch", msgs_1.MsgConfirmBatch], ["/gravity.v1.MsgConfirmLogicCall", msgs_1.MsgConfirmLogicCall], ["/gravity.v1.MsgSendToCosmosClaim", msgs_1.MsgSendToCosmosClaim], ["/gravity.v1.MsgBatchSendToEthClaim", msgs_1.MsgBatchSendToEthClaim], ["/gravity.v1.MsgValsetUpdatedClaim", msgs_1.MsgValsetUpdatedClaim], ["/gravity.v1.MsgERC20DeployedClaim", msgs_1.MsgERC20DeployedClaim], ["/gravity.v1.MsgLogicCallExecutedClaim", msgs_1.MsgLogicCallExecutedClaim], ["/gravity.v1.MsgSetOrchestratorAddress", msgs_1.MsgSetOrchestratorAddress], ["/gravity.v1.MsgCancelSendToEth", msgs_1.MsgCancelSendToEth], ["/gravity.v1.MsgSubmitBadSignatureEvidence", msgs_1.MsgSubmitBadSignatureEvidence]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        valsetConfirm(value) {
            return {
                typeUrl: "/gravity.v1.MsgValsetConfirm",
                value: msgs_1.MsgValsetConfirm.encode(value).finish()
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToEth",
                value: msgs_1.MsgSendToEth.encode(value).finish()
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgRequestBatch",
                value: msgs_1.MsgRequestBatch.encode(value).finish()
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmBatch",
                value: msgs_1.MsgConfirmBatch.encode(value).finish()
            };
        },
        confirmLogicCall(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmLogicCall",
                value: msgs_1.MsgConfirmLogicCall.encode(value).finish()
            };
        },
        sendToCosmosClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
                value: msgs_1.MsgSendToCosmosClaim.encode(value).finish()
            };
        },
        batchSendToEthClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
                value: msgs_1.MsgBatchSendToEthClaim.encode(value).finish()
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
                value: msgs_1.MsgValsetUpdatedClaim.encode(value).finish()
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
                value: msgs_1.MsgERC20DeployedClaim.encode(value).finish()
            };
        },
        logicCallExecutedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
                value: msgs_1.MsgLogicCallExecutedClaim.encode(value).finish()
            };
        },
        setOrchestratorAddress(value) {
            return {
                typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
                value: msgs_1.MsgSetOrchestratorAddress.encode(value).finish()
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgCancelSendToEth",
                value: msgs_1.MsgCancelSendToEth.encode(value).finish()
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
                value: msgs_1.MsgSubmitBadSignatureEvidence.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        valsetConfirm(value) {
            return {
                typeUrl: "/gravity.v1.MsgValsetConfirm",
                value
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToEth",
                value
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgRequestBatch",
                value
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmBatch",
                value
            };
        },
        confirmLogicCall(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmLogicCall",
                value
            };
        },
        sendToCosmosClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
                value
            };
        },
        batchSendToEthClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
                value
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
                value
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
                value
            };
        },
        logicCallExecutedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
                value
            };
        },
        setOrchestratorAddress(value) {
            return {
                typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
                value
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgCancelSendToEth",
                value
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
                value
            };
        }
    },
    fromPartial: {
        valsetConfirm(value) {
            return {
                typeUrl: "/gravity.v1.MsgValsetConfirm",
                value: msgs_1.MsgValsetConfirm.fromPartial(value)
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToEth",
                value: msgs_1.MsgSendToEth.fromPartial(value)
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgRequestBatch",
                value: msgs_1.MsgRequestBatch.fromPartial(value)
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmBatch",
                value: msgs_1.MsgConfirmBatch.fromPartial(value)
            };
        },
        confirmLogicCall(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmLogicCall",
                value: msgs_1.MsgConfirmLogicCall.fromPartial(value)
            };
        },
        sendToCosmosClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
                value: msgs_1.MsgSendToCosmosClaim.fromPartial(value)
            };
        },
        batchSendToEthClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
                value: msgs_1.MsgBatchSendToEthClaim.fromPartial(value)
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
                value: msgs_1.MsgValsetUpdatedClaim.fromPartial(value)
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
                value: msgs_1.MsgERC20DeployedClaim.fromPartial(value)
            };
        },
        logicCallExecutedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
                value: msgs_1.MsgLogicCallExecutedClaim.fromPartial(value)
            };
        },
        setOrchestratorAddress(value) {
            return {
                typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
                value: msgs_1.MsgSetOrchestratorAddress.fromPartial(value)
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgCancelSendToEth",
                value: msgs_1.MsgCancelSendToEth.fromPartial(value)
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
                value: msgs_1.MsgSubmitBadSignatureEvidence.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=msgs.registry.js.map