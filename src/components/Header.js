import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => (
  <header>
    <h1>inExpensify</h1>
    <NavLink className='temp' to='/dashboard' activeClassName='is-active'>Dashboard</NavLink>
    <NavLink className='temp' to='/create' activeClassName='is-active'> Create</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)
