import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import {
  startSetExpenses,
//startAddExpense
} from './actions/expenses'
//import { setTextFilter } from './actions/filters'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import './playground/promises.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000  }));
store.dispatch(addExpense({ description: 'Rent', amount: 134000  }));

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)
//store.dispatch(getVisibleExpenses({ description: 'Water bill' }))

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx,document.getElementById('app'))
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'))



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(()=> {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
      console.log('%c User Logged in ', 'background:white;color:deepskyblue;' )
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
    console.log('%c Logout ', 'background:white;color:deepskyblue;' )
  }
})
