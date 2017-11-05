import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => (
  <header>
    <h1>inExpensify</h1>
    <NavLink className='temp' to='/' activeClassName='is-active' exact>Dashboard</NavLink>
    <NavLink className='temp' to='/create' activeClassName='is-active'> Create</NavLink>
    <NavLink className='temp' to='/help' activeClassName='is-active'> Help</NavLink>
  </header>
)
export default Header