/*
 * action type
 */
// export const DEPOSIT = 'deposit';
// export const WITHDRAW = 'withdraw';

/*
 * action creator
 */

export const onDeposit = () => {
    return {
        type: 'DEPOSIT',
        payload: 10
    }
}

export const onWithdraw = () => {
    return {
        type: 'WITHDRAW',
        payload: 10
    }
}