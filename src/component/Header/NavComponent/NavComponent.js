import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavComponent.styles.scss'

const NavComponent = (props) => {
  return (
    <li className="nav__component ">
      <NavLink
        className={
          props.white
            ? 'nav__component__navlink nav__component__navlink--white'
            : 'nav__component__navlink'
        }
        exact
        to={props.linkTo}
        activeClassName="active"
      >
        {props.children}
      </NavLink>
    </li>
  )
}

export default NavComponent
