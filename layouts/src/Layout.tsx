import { Content, LayoutContainer, Slide } from './styled'
import slideOne from '../../public/images/slide-1.png'
import slideTwo from '../../public/images/slide-2.png'
import slideThree from '../../public/images/slide-3.png'
import slideFour from '../../public/images/slide-4.png'
import imageBox from '../../public/slide-images/box.png'
import imageGame from '../../public/slide-images/game.png'
import { Contents } from '../../libs/components/Contents/Contents'
import { AboutUs } from '../../libs/components/AboutUs/AboutUs'
import gregory from '../../public/contact-images/gregory.png'
import vladimir from '../../public/contact-images/vladimir.png'
import { FirstSlide } from '../../libs/components/FirstSlide/FirstSlide'
import { Header } from '../../libs/components/Header/Header'
import { useRef } from 'react'
import { useScroll } from '../../libs/hooks/useScroll'

export const Layout = () => {
	const containerRef = useRef(null)
	const { handleWheel } = useScroll(containerRef)

	return (
		<LayoutContainer ref={containerRef} onWheel={handleWheel}>
			<Header />
			<Slide backgroundImage={slideOne}>
				<FirstSlide
					title={'Знаменитая настольная игра теперь в онлайне'}
					description={'Играйте бесплатно с друзьями или с другими людьми'}
				/>
			</Slide>
			<Slide backgroundImage={slideTwo}>
				<Content>
					<Contents
						position={'left'}
						image={imageBox}
						text={
							'Настольная игра "Каркаcсон" – это захватывающее путешествие в средневековую Европу, где каждый игрок становится создателем собственных земель и стратегом. Эта игра захватывает своей простотой правил и глубиной стратегических возможностей, делая каждую партию уникальной.'
						}
					/>
				</Content>
			</Slide>
			<Slide backgroundImage={slideThree}>
				<Content>
					<Contents
						position={'right'}
						image={imageGame}
						text={
							'"Каркаcсон" покорил миллионы игроков по всему миру. Это игра, которая идеально подходит для семейного вечера, дружеской встречи или даже турнира среди заядлых игроков. Погрузитесь в средневековую атмосферу и станьте мастером стратегий с "Каркассоном"!'
						}
					/>
				</Content>
			</Slide>
			<Slide backgroundImage={slideFour}>
				<Content>
					<AboutUs
						photo={gregory}
						name={'Черланов Григорий'}
						direction={'Frontend разработчик проекта'}
						gmail={'mr.greg.cherl@gmail.com'}
						telegram={'https://t.me/mr_gregory_cherl'}
					/>
					<AboutUs
						photo={vladimir}
						name={'Золотов Владимир'}
						direction={'Backend разработчик проекта'}
						gmail={'mr.greg.cherl@gmail.com'}
						telegram={'https://t.me/mr_gregory_cherl'}
					/>
				</Content>
			</Slide>
		</LayoutContainer>
	)
}
