import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import './Home1.css';
import pic from './images/pic.png';

export const Home1 = () => {
  return (
    <div>
    <Container className='box'>
        <Row>
            <Col className='cola' sm>
                <h1 className='heading'>The day With the Most Light is the Day We Fight.</h1>
            <Alert variant="secondary">
      <Alert.Heading>About 6.5 million people in the United States age 65 and older live with Alzheimer's disease.</Alert.Heading>
      <p>
      Alzheimer's disease is a brain disorder that gets worse over time. It's characterized by changes in the brain that lead to deposits of certain proteins. Alzheimer's disease causes the brain to shrink and brain cells to eventually die. Alzheimer's disease is the most common cause of dementia — a gradual decline in memory, thinking, behavior and social skills. These changes affect a person's ability to function.
      </p>
      <hr />
      <p id="pt" className="fg mb-0">
      severe loss of brain function can cause dehydration, malnutrition or infection. These complications can result in death.
      </p>
    </Alert>
            </Col>
            <Col sm>
            <img
              src={pic}
              className="d-inline-block"
              alt="alzhimers"
            />
            </Col>
        </Row>
    </Container>
    </div>
  )
}
