export const createRPCMsgClient = async ({ rpc }) => ({
    cosmos: {
        authz: {
            v1beta1: new (await import("./authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        bank: {
            v1beta1: new (await import("./bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        distribution: {
            v1beta1: new (await import("./distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        gov: {
            v1beta1: new (await import("./gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        staking: {
            v1beta1: new (await import("./staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        },
        vesting: {
            v1beta1: new (await import("./vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
        }
    }
});
//# sourceMappingURL=rpc.tx.js.map