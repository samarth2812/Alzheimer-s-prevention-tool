import React from 'react'
import pic3 from './images/doctor-removebg-preview.png';
import Button from 'react-bootstrap/Button';
import './Home5.css';

const Home5 = () => {
  return (
    <div className='container4'>
        <div className='column-2 box4'>
        <img
              src={pic3}
              className="d-inline-block img5"
              alt='band'
            />
        </div>
        <div className='column-2 box4'>
          <h3 className='headd m-5'>"Alzheimer's disease is a relentless disease that affects not only the person with the disease but also their loved ones who care for them."  <h3 className='redd'>- Ronald Reagan</h3></h3>
          <Button variant="secondary" className='in'>Fill the emergency form now!!</Button>{' '}
        </div>
        
    </div>
  )
}

export default Home5