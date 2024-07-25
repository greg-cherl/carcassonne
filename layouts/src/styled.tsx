// ===

import styled from 'styled-components'

type SlideProps = {
	backgroundImage: string
}

export const LayoutContainer = styled.div`
	color: white;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	height: 100vh;
	overflow-y: scroll;
	scrollbar-width: none;
`

export const Slide = styled.div<SlideProps>`
	width: 100%;
	height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
		url(${props => props.backgroundImage});
	background-size: cover;
	background-position: center;
	scroll-snap-align: start;
`

export const Content = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	gap: 15px;
	width: 100%;
	height: 100%;
	justify-content: space-around;
`
