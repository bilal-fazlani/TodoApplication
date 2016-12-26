import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './Reducers/CombinedReducer';
import TodoApp from 'components/TodoApp';
import persistState from "redux-localstorage";

const enhancer = compose(persistState())
const store = createStore(reducer,
    {todos:[], visibilityFilter: "SHOW_ALL", inputText:'', currentId:0},
    enhancer);

if (module.hot) {
  module.hot.accept('./Reducers/CombinedReducer', () => {
    store.replaceReducer(require('./Reducers/CombinedReducer').default);
  });
  module.hot.accept();

  module.hot.dispose((data) => {
    data.counter = store.getState();
    [].slice.apply(document.querySelector('#app').children).forEach(function(c) { c.remove() });
  });
}

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
