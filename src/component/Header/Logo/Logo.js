import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.styles.scss'

import { ReactComponent as LogoImg } from '../../../assets/logo_transparent.svg' //nom capitalizé obligatoire

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo__container">
        <LogoImg className="logo__img" />
      </div>
    </Link>
  )
}

export default Logo
