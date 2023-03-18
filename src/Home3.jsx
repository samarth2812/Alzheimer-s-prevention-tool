import React from 'react';
import mind from './images/mindmap.png';
import './Home3.css';

export const Home3 = () => {
  return (
    <div className='home3'>
        {/* <h2 className='head'>Stages of Alzheimer Disease</h2> */}
        <img
              src={mind}
              width="1000"
              height="800"
              alt="Home logo"
            />
    </div>
  )
}
