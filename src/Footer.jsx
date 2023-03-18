import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import pic from './images/cure1.png';

const Footer = () => {
  return (
    <div>
     <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='#1!' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <img
              src={pic}
              alt="alzhimers"
              width="70"
              height="70"
            />
              <h6 className='text-uppercase fw-bold mb-4'>
                Alzhe-Cure
              </h6>

              <p>
              Alzheimer's disease is a brain disorder that gets worse over time. We try to slow down the process and bring happiness on the faces of people.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About Alzheimer's
                </a>
              </p>
              <p>
                <a href='https://kushtest1.netlify.app/gamehomepage' className='text-reset'>
                  Memory Games
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Location finder
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Emergency
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://kushtest1.netlify.app/cardmemorygame' className='text-reset'>
                  Memory Game
                </a>
              </p>
              <p>
                <a href='https://kushtest1.netlify.app/slidergame' className='text-reset'>
                  Puzzle Game
                </a>
              </p>
              <p>
                <a href='https://kushtest1.netlify.app/scramble.html' className='text-reset'>
                  Scramble Game
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://Alzheimer-cure.com/'>
        Alzheimer-cure.com
        </a>
      </div>
    </MDBFooter>
      
    </div>
  )
}

export default Footer
