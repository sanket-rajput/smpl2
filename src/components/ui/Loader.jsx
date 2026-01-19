
import './loader.css'

const Loader = ({ size=45 }) => {
	return (
		<div className="container-loader"
		style={{
			'--uib-size': `${size}px`
		}}
		><div className="dot" /></div>
	)
}

export default Loader










