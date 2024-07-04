import { FC } from 'react'
import classes from './style.module.css'
import { Description, Title } from './styled'

type PropsType = {
	title: string
	description: string
	isFirstSlide?: boolean
}

export const Content: FC<PropsType> = props => {
	const { title, description, isFirstSlide } = props
	return (
		<>
			{isFirstSlide ? (
				<div className={classes['content']}>
					<Title>{title}</Title>
					<Description>{description}</Description>
				</div>
			) : (
				<>
					<div className={classes['content']}>
						<p className={classes['description']}>{description}</p>
					</div>
					<div className={classes['content']}>
						<p className={classes['description']}>{description}</p>
					</div>
				</>
			)}
		</>
	)
}
