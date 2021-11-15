import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './component/Counter';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
)

// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onDeposit={() => store.dispatch(onDeposit)}
//     onWithdraw={() => store.dispatch({ type: 'WITHDRAW', payload: 10 })}
//   />,
//   document.getElementById('root')
// )

// render()
// store.subscribe(render)
