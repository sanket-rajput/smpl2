
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => 
  function HOC() {
		return (
			<motion.section
			key={idName}
			variants={staggerContainer()}
			initial="hidden"
			whileInView={'show'}
			viewport={{once: true, amount: 0.25}}
			className={`${styles.paddingY} mx-auto relative z-0 w-full`}
			>	
				<span className='hash-span' id={idName}>&nbsp;</span>
				<Component />
			</motion.section>
		)
	}


export default SectionWrapper