import React, { FC } from 'react'
import classes from './style.module.css'


type TypeProps = {
  text: string
}

export const Link:FC<TypeProps> = (props) => {
  const {text} = props
  return (
		<a href="#" className={classes['link']}>{text}</a>
  )
}