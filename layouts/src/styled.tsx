import styled from 'styled-components'

type SlideProps = {
	backgroundImage: string
}

export const LayoutContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 100%;
	color: white;
`

export const Slide = styled.div<SlideProps>`
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
		url(${props => props.backgroundImage});
	background-size: cover;
	background-position: center;
`

export const SlideContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	text-align: center;
`
