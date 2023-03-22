
import React from 'react'
import './Home4.css';
import pic2 from './images/band-removebg-preview.png'
import Button from 'react-bootstrap/Button';

const Home4 = () => {
  return (
    <div className='container3'>
       <div className='column-2 box3'>
        <img
              src={pic2}
              className="d-inline-block img4"
              alt='band'
            />
        </div>
        <div className='column-1 box3'>
          <h3 className='head'>Get Current location of the patient in case of <h3 className='red'>Emergency.</h3></h3>
            <p className='para'> Wearable device that uses location-tracking technology to help loved ones and medical professionals locate patients who may have wandered off or become lost.The device will provide accurate location information in real-time, even in areas with poor GPS signal or other environmental factors that may interfere with the signal.</p>
            <Button href="https://candid-parfait-9844f4.netlify.app/" className="but" variant="secondary">Find Location Now</Button>{' '}
        </div>
    </div>
  )
}

export default Home4