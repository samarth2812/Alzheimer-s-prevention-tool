import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pic1 from './images/memorygame.jpg';
import pic2 from './images/puzzlegame.jpg';
import pic3 from './images/scra.jpg';
import Button from 'react-bootstrap/Button';
import './Home2.css';

export const Home2 = () => {
  return (
    <div>
      <h1 className='qw'>Alzheimer's Prevention tool</h1>
    <Carousel fade>
      <Carousel.Item className='d-flex justify-content-center align-items-center'>
        <img
          className="art d-block w-80"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Memory Game</h3>
          <p>Memory games can actually go a long way in helping out with your cognitive functions. Memory games have been proven to help out in improving your brain’s ability .</p>
          <Button href='https://kushtest1.netlify.app/cardmemorygame' variant="info">Play</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='d-flex justify-content-center align-items-center'>
        <img
          className="art d-block w-80"
          src={pic2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Puzzle Game</h3>
          <p>puzzles can test many problem-solving skills including logic, pattern recognition, sequence solving, spatial recognition, and word completion .</p>
          <Button href='https://kushtest1.netlify.app/slidergame' variant="info">Play</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=' d-flex justify-content-center align-items-center'>
        <img
          className="art d-block w-80"
          src={pic3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Scramble Game</h3>
          <p>
          Scrabble helps develop your intellectual abilities.Scrabble helps boosts the immune system.
          </p>
          <Button href="https://kushtest1.netlify.app/scramble.html" variant="info">Play</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
