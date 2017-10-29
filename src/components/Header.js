import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => (
  <header>
    <h1>inExpensify</h1>
    <NavLink to='/' activeClassName='is-active' exact>Home</NavLink>
    <NavLink to='/help' activeClassName='is-active'> Help</NavLink>
    <NavLink to='/edit' activeClassName='is-active'> Edit</NavLink>
    <NavLink to='/create' activeClassName='is-active'> Create</NavLink>
  </header>
)
export default Header