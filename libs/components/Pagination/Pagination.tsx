import { Link } from 'react-scroll'
import { PaginationContent } from './styled'

export const Pagination = () => {
	return (
		<PaginationContent>
			<Link to='slide1' smooth={true} duration={500}>
				Slide 1
			</Link>
			<Link to='slide2' smooth={true} duration={500}>
				Slide 2
			</Link>
			<Link to='slide3' smooth={true} duration={500}>
				Slide 3
			</Link>
			<Link to='slide4' smooth={true} duration={500}>
				Slide 4
			</Link>
		</PaginationContent>
	)
}
