import { FC } from 'react'
import { Description, Text } from './styled'
import { LinkButton } from '../LinkButton/LinkButton'

type PropsType = {
	text: string
	image?: string
	position?: string
}

export const Contents: FC<PropsType> = props => {
	const { text, image, position } = props
	return (
		<>
			{position === 'left' ? (
				<>
					<img src={image} alt='box' />
					<Description>
						<Text>{text}</Text>
						<LinkButton name={'Все правила'} />
					</Description>
				</>
			) : (
				<>
					<Description></Description>
					<img src={image} alt='box' />
					<Description>
						<Text>{text}</Text>
						<LinkButton name={'Играть'} />
					</Description>
				</>
			)}
		</>
	)
}
