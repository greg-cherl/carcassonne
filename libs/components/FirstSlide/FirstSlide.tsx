import { FC } from 'react'
import { Description, FirstSlideContent, Title } from './styled'
import { LinkButton } from '../LinkButton/LinkButton'

type PropsType = {
	title: string
	description: string
}

export const FirstSlide: FC<PropsType> = props => {
	const { title, description } = props
	return (
		<FirstSlideContent>
			<Title>{title}</Title>
			<Description>{description}</Description>
			<LinkButton name={'Играть'} />
		</FirstSlideContent>
	)
}
