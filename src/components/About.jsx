import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import { SectionWrapper } from "../hoc";
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-70%">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText} >Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    > 
    I'm a skilled full stack web developer. I've studied JavaScript, TypeScript, Node.js, React, Redux, Express.
    I have practice frameworks like Three.js, Vite. I'm a quick learner and 
    collaborate closely with my partners to create efficient, scalable, 
    and user-friendly solutions that solve
    real-world problems. I used relational and no relational data bases like SQL and MongoDB. I'm a Philosphy teacher, I've worked with groups, I manage social skills and soft skills like Collaborative work, Creativity, Interpersonal skills, Emotional Intelligence, Excellent communication skills with the ability to engage, influence, and inspire team members to drive collaboration and alignment.
    I did some projects and learnt a lot of frameworks and tips with them and still learning everyday. I like team work, so if you let me, I can work with your team and we can collaborate to bring your ideas to life!...
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
  </>
  )
}


export default SectionWrapper(About, "about");
