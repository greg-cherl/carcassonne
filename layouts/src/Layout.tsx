import { Content } from '../../libs/components/Content/Content'
import { Header } from '../../libs/components/src/Header/Header'
import { LayoutContainer, Slide, SlideContent } from './styled'
import slideOne from '../../public/images/slide-1.png'
import slideTwo from '../../public/images/slide-2.png'
import slideThree from '../../public/images/slide-3.png'
import slideFour from '../../public/images/slide-4.png'

export const Layout = () => {
	return (
		<LayoutContainer>
			<Header />
			<Slide backgroundImage={slideOne}>
				<SlideContent>
					<Content
						title={'Знаменитая настольная игра теперь в онлайне'}
						description={'Играйте бесплатно с друзьями или с другими людьми'}
						isFirstSlide={true}
					/>
				</SlideContent>
			</Slide>
			<Slide backgroundImage={slideTwo}>
				<SlideContent>
					<Content title={'title-2'} description={'description-2'} />
				</SlideContent>
			</Slide>
			<Slide backgroundImage={slideThree}>
				<SlideContent>
					<Content title={'title-3'} description={'description-3'} />
				</SlideContent>
			</Slide>
			<Slide backgroundImage={slideFour}>
				<SlideContent>
					<Content title={'title-4'} description={'description-4'} />
				</SlideContent>
			</Slide>
		</LayoutContainer>
	)
}
