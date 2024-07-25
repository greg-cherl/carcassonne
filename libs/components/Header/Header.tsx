import React from 'react'
import HeaderLogo from '../../../public/images/header-logo.png'

import classes from './style.module.css'
import { Link } from '../Link/Link'

export const Header = () => {
	return (
		<div className={classes['header']}>
			<Link text={'Правила игры'} />
			<img src={HeaderLogo} alt='каркассон' />
			<Link text={'О нас'} />
		</div>
	)
}
