import { FC } from 'react'
import gmailImage from '../../../public/contact-images/gmail.png'
import telegramImage from '../../../public/contact-images/telegram.png'

import {
	About,
	Contacts,
	Direction,
	Gmail,
	GmailImage,
	Name,
	Photo,
	Telegram,
	TelegramImage,
} from './styled'

type PropsType = {
	photo: string
	name: string
	direction: string
	gmail: string
	telegram: string
}

export const AboutUs: FC<PropsType> = props => {
	const { photo, name, direction, gmail, telegram } = props
	return (
		<About>
			<Photo src={photo} alt='photo' />
			<Name>{name}</Name>
			<Direction>{direction}</Direction>
			<Contacts>
				<Gmail href={gmail} target='_blank'>
					<GmailImage src={gmailImage} alt='gmail' />
				</Gmail>
				<Telegram href={telegram} target='_blank'>
					<TelegramImage src={telegramImage} alt='telegram' />
				</Telegram>
			</Contacts>
		</About>
	)
}
