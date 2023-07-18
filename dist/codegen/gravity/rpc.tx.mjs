export const createRPCMsgClient = async ({ rpc }) => ({
    cosmos: {
        authz: {
            v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        bank: {
            v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        distribution: {
            v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        gov: {
            v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        staking: {
            v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        }
    },
    gravity: {
        v1: new (await import("./v1/msgs.rpc.msg")).MsgClientImpl(rpc)
    }
});
//# sourceMappingURL=rpc.tx.js.map