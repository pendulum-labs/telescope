"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signTypeToJSON = exports.signTypeFromJSON = exports.SignTypeAmino = exports.SignTypeSDKType = exports.SignType = void 0;
/** SignType defines messages that have been signed by an orchestrator */
var SignType;
(function (SignType) {
    SignType[SignType["SIGN_TYPE_UNSPECIFIED"] = 0] = "SIGN_TYPE_UNSPECIFIED";
    SignType[SignType["SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE"] = 1] = "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE";
    SignType[SignType["SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH"] = 2] = "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH";
    SignType[SignType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignType || (exports.SignType = SignType = {}));
exports.SignTypeSDKType = SignType;
exports.SignTypeAmino = SignType;
function signTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGN_TYPE_UNSPECIFIED":
            return SignType.SIGN_TYPE_UNSPECIFIED;
        case 1:
        case "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE":
            return SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE;
        case 2:
        case "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH":
            return SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignType.UNRECOGNIZED;
    }
}
exports.signTypeFromJSON = signTypeFromJSON;
function signTypeToJSON(object) {
    switch (object) {
        case SignType.SIGN_TYPE_UNSPECIFIED:
            return "SIGN_TYPE_UNSPECIFIED";
        case SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE:
            return "SIGN_TYPE_ORCHESTRATOR_SIGNED_MULTI_SIG_UPDATE";
        case SignType.SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH:
            return "SIGN_TYPE_ORCHESTRATOR_SIGNED_WITHDRAW_BATCH";
        case SignType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signTypeToJSON = signTypeToJSON;
//# sourceMappingURL=ethereum_signer.js.map