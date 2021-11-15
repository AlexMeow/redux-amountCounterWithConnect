/* eslint-disable no-useless-constructor */
import React from "react";
import { connect } from 'react-redux';
import { onDeposit, onWithdraw } from '../actions';
// import PropTypes from 'prop-types';

function Counter (props) {
    return (
        <div style={{ listStyleType: "none"}}>
            <li>
                <button onClick={props.onDeposit}>
                    Deposit $10
                </button>
            </li>
            <li>
                <button onClick={props.onWithdraw}>
                    Withdraw $10
                </button>
            </li>
            $ {props.amount} 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        amount: state.amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeposit: () => dispatch(onDeposit()),
        onWithdraw: () => dispatch(onWithdraw())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

// class Counter extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const { value, onWithdraw } = this.props;

//         return (
//             <div style={{ listStyleType: "none"}}>
//                 <li>
//                     <button onClick={}>
//                         Deposit $10
//                     </button>
//                 </li>
//                 <li>
//                     <button onClick={onWithdraw}>
//                         Withdraw $10
//                     </button>
//                 </li>
//                 $ {value} 
//             </div>
//         );
//     }  
// }

// Counter.propTypes = {
//     value: PropTypes.number.isRequired,
//     // onDeposit: PropTypes.func.isRequired,
//     onWithdraw: PropTypes.func.isRequired,
// };

// export default Counter;