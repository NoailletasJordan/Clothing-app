import React from 'react'
import './item.styles.scss'
import { withRouter } from 'react-router-dom'

const Item = (props) => {
  const itemStyle = {
    height: props.size === 'large' ? '50rem' : null,
  }

  const backgroundStyle = {
    backgroundImage: `url(${props.imageUrl})`,
  }

  const handleRedirect = () => {
    props.history.push(`/shop/${props.title.toLowerCase()}`)
  }

  return (
    <div className="item" style={itemStyle} onClick={handleRedirect}>
      <div className="item__background" style={backgroundStyle} />

      <div className="item__content">
        <h2 className="item__content-title">{props.title}</h2>
        <span className="item__content-subtitle">Shop Now</span>
      </div>
    </div>
  )
}

export default withRouter(Item)
