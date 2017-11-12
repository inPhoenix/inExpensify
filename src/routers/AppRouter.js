import React from 'react';
import {
  // BrowserRouter,
  Router,
  Route,
  Switch,
  // Link,
  // NavLink
} from 'react-router-dom'
//import Header from '../components/Header'
import createHistory from 'history/createBrowserHistory'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
//import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRouter from './PrivateRouter'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact />
        <PrivateRouter path='/dashboard' component={ExpenseDashBoardPage} />
        <PrivateRouter path='/create' component={AddExpensePage} />
        <PrivateRouter path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
