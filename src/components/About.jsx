import { useMemo } from 'react'

import { styles } from '../styles'

import { SectionWrapper } from '../hoc'

import { ContainerScroll } from './ui/container-scroll-animation';
import InfiniteLoopSlider from './ui/infinite-loop-slider'

const DURATION = 50000;
const ROWS = 6;
const TAGS_PER_ROW = 10;

const TAGS = [
  "INC",
  "Impetus",
  "Concepts",
  "Pradnya",
  "Project",
  "Presentation",
  "Embeded Systems",
  "Web Development",
  "IOT",
  "Hardware",
  "Application Development",
  "Project Management",
];

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const Text = () => {
  return (
    <p className='text-white-100'>
      <span className='block pb-4'>
      <span className='font-semibold text-orange-100'>Impetus and Concepts (InC)</span> is a flagship technical event of SCTR&apos;s Pune Institute of Computer Technology, Pune, which will be held from 20th to 22nd March 2026. InC is an intercollegiate international level competition that has been catching the attention of corporate giants for the quality of projects and an opportunity to recruit/mentor young talented budding entrepreneurs.
      </span>
      <span className='block border-secondary pt-5 pb-4'>
      Every year InC sets a new benchmark and provides an opportunity for students to realize their ideas into effective products. Over the years, it has become the most popular and awaited event with continuous improvement in footfall, the number and quality of projects/papers, etc. This event also sets a platform for students to design, exhibit, and watch their ideas come true. This technical fest has inventive events namely - Impetus, Concepts, Pradnya.
      </span>
      <span className='block border-secondary pt-5'>
      Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains. Concepts is a Project Competition for Final Year Students, all engineering branches confined to specific domains. Pradnya is an International Coding Competition. Students are invited with projects addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education, etc. and the best project judged by the juries will be awarded with a cash prize of <span className='text-orange-100'>&#8377;1 Lakh Cash Prize from PICT.</span>
      </span>
    </p>
  )

}

const Tag = ({ text }) => (
  <li className='text-secondary text-nowrap bg-tertiary p-4 text-lg mr-4 rounded-md font-light opacity-85'><span className='text-yellow-500'>#</span>&nbsp;{text}</li>
);


const About = () => {

  const rows = useMemo(() => {
    return [...new Array(ROWS)].map((_, i) => ({
      id: i,
      duration: random(DURATION - 5000, DURATION + 5000),
      reverse: i % 2,
      tags: shuffle(TAGS).slice(0, TAGS_PER_ROW),
    }));
  }, []);

  return(
    <div className='relative group'>
      <div className='md:mt-16 px-5 sm:pt-24 py-4 overflow-hidden'
      >
        <ContainerScroll 
        titleComponent={
        <h2 className={`${styles.sectionSubText}`}>
          What is Impetus and Concepts? <br />
          <span className={`${styles.sectionHeadText}`}>
            About Us.
          </span>
        </h2>
        } 
        ><Text /></ContainerScroll>
      </div>
      <div className="absolute top-0 -z-10 w-full inset-0 overflow-hidden flex flex-col py-2 justify-between blur-sm group-hover:blur-none duration-300">
        {rows.map((row) => (
          <InfiniteLoopSlider
            key={row.id}
            duration={row.duration}
            reverse={row.reverse}
          >
            {row.tags.map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
          </InfiniteLoopSlider>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-full w-5 sm:w-24 bg-gradient-to-r from-primary/0 to-primary/100" />
      <div className="absolute top-0 left-0 h-full w-5 sm:w-24 bg-gradient-to-l from-primary/0 to-primary/100" />
    </div>
  )
  
}

export default SectionWrapper(About, "about")