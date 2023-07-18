import { MsgValsetConfirm, MsgSendToEth, MsgRequestBatch, MsgConfirmBatch, MsgConfirmLogicCall, MsgSendToCosmosClaim, MsgBatchSendToEthClaim, MsgValsetUpdatedClaim, MsgERC20DeployedClaim, MsgLogicCallExecutedClaim, MsgSetOrchestratorAddress, MsgCancelSendToEth, MsgSubmitBadSignatureEvidence } from "./msgs";
export const registry = [["/gravity.v1.MsgValsetConfirm", MsgValsetConfirm], ["/gravity.v1.MsgSendToEth", MsgSendToEth], ["/gravity.v1.MsgRequestBatch", MsgRequestBatch], ["/gravity.v1.MsgConfirmBatch", MsgConfirmBatch], ["/gravity.v1.MsgConfirmLogicCall", MsgConfirmLogicCall], ["/gravity.v1.MsgSendToCosmosClaim", MsgSendToCosmosClaim], ["/gravity.v1.MsgBatchSendToEthClaim", MsgBatchSendToEthClaim], ["/gravity.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim], ["/gravity.v1.MsgERC20DeployedClaim", MsgERC20DeployedClaim], ["/gravity.v1.MsgLogicCallExecutedClaim", MsgLogicCallExecutedClaim], ["/gravity.v1.MsgSetOrchestratorAddress", MsgSetOrchestratorAddress], ["/gravity.v1.MsgCancelSendToEth", MsgCancelSendToEth], ["/gravity.v1.MsgSubmitBadSignatureEvidence", MsgSubmitBadSignatureEvidence]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        valsetConfirm(value) {
            return {
                typeUrl: "/gravity.v1.MsgValsetConfirm",
                value: MsgValsetConfirm.encode(value).finish()
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToEth",
                value: MsgSendToEth.encode(value).finish()
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgRequestBatch",
                value: MsgRequestBatch.encode(value).finish()
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmBatch",
                value: MsgConfirmBatch.encode(value).finish()
            };
        },
        confirmLogicCall(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmLogicCall",
                value: MsgConfirmLogicCall.encode(value).finish()
            };
        },
        sendToCosmosClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
                value: MsgSendToCosmosClaim.encode(value).finish()
            };
        },
        batchSendToEthClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
                value: MsgBatchSendToEthClaim.encode(value).finish()
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
                value: MsgValsetUpdatedClaim.encode(value).finish()
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
                value: MsgERC20DeployedClaim.encode(value).finish()
            };
        },
        logicCallExecutedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
                value: MsgLogicCallExecutedClaim.encode(value).finish()
            };
        },
        setOrchestratorAddress(value) {
            return {
                typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
                value: MsgSetOrchestratorAddress.encode(value).finish()
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgCancelSendToEth",
                value: MsgCancelSendToEth.encode(value).finish()
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
                value: MsgSubmitBadSignatureEvidence.encode(value).finish()
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
                value: MsgValsetConfirm.fromPartial(value)
            };
        },
        sendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToEth",
                value: MsgSendToEth.fromPartial(value)
            };
        },
        requestBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgRequestBatch",
                value: MsgRequestBatch.fromPartial(value)
            };
        },
        confirmBatch(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmBatch",
                value: MsgConfirmBatch.fromPartial(value)
            };
        },
        confirmLogicCall(value) {
            return {
                typeUrl: "/gravity.v1.MsgConfirmLogicCall",
                value: MsgConfirmLogicCall.fromPartial(value)
            };
        },
        sendToCosmosClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
                value: MsgSendToCosmosClaim.fromPartial(value)
            };
        },
        batchSendToEthClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
                value: MsgBatchSendToEthClaim.fromPartial(value)
            };
        },
        valsetUpdateClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
                value: MsgValsetUpdatedClaim.fromPartial(value)
            };
        },
        eRC20DeployedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
                value: MsgERC20DeployedClaim.fromPartial(value)
            };
        },
        logicCallExecutedClaim(value) {
            return {
                typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
                value: MsgLogicCallExecutedClaim.fromPartial(value)
            };
        },
        setOrchestratorAddress(value) {
            return {
                typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
                value: MsgSetOrchestratorAddress.fromPartial(value)
            };
        },
        cancelSendToEth(value) {
            return {
                typeUrl: "/gravity.v1.MsgCancelSendToEth",
                value: MsgCancelSendToEth.fromPartial(value)
            };
        },
        submitBadSignatureEvidence(value) {
            return {
                typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
                value: MsgSubmitBadSignatureEvidence.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=msgs.registry.js.map