/* eslint-disable import/no-anonymous-default-export */
// import {onDeposit, onWithdraw} from '../actions'

// export default (state = 0, action) => {
//   switch (action.type) {
//     case 'DEPOSIT':
//       return state + action.payload;
//     case 'WITHDRAW':
//       return state - action.payload;
//     default:
//       return state
//   }
// }

const initialState = {
  amount: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        amount: state.amount + action.payload,
      }
      case 'WITHDRAW':
        return {
          ...state,
          amount: state.amount - action.payload,
        }
    default:
      return state;
  }
};

export default rootReducer;

