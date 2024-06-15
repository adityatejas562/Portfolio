import React from 'react';
import { BallCanvas } from './canvas';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Technologies</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </div>

      <div className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        <p>Technologies I work with:</p>
      </div>

      <div className='mt-20 flex flex-wrap justify-start gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
