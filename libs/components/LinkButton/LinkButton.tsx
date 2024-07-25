import { FC } from 'react'
import { ButtonLink } from './styled'

type PropsType = {
	name: string
}

export const LinkButton: FC<PropsType> = props => {
	const { name } = props
	return (
		<ButtonLink href='#' target='_blank'>
			{name}
		</ButtonLink>
	)
}
