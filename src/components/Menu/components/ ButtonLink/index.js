import React from 'react';
import '../../Menu.css'

function ButtonLink(props) {
  const { className, href, children } = props
  return (
      <a className={className} href={href}>
        {children}
      </a>
  )
}

export default ButtonLink;