import React, { useState } from 'react';

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
}
  from 'mdb-react-ui-kit';
import '../styles/login.css';

export default function Login() {
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (

    <MDBContainer fluid className="p-3 my-3" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/healthy-food-background-concept-healthy-food-fresh-vegetables-nuts-fruits-stone-background-top-view-copy-space_187166-21326.jpg?w=2000)', height: '100%' }}>
      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            The best offer <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>


              <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>

                  <div className="text-center mb-3">
                    <p>Sign in with:</p>

                    <MDBRow>
                      <MDBCol col='6'>
                        <MDBBtn className="mb-2 w-100" size="md" style={{ backgroundColor: '#dd4b39' }}>
                          <MDBIcon fab icon="google" className="mx-2" />
                          google
                        </MDBBtn>
                      </MDBCol>

                      <MDBCol col='6'>
                        <MDBBtn className="mb-4 w-100" size="md" style={{ backgroundColor: '#3b5998' }}>
                          <MDBIcon fab icon="facebook-f" className="mx-2" />
                          facebook
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>


                    <p className="text-center mt-3">or:</p>
                  </div>

                  <MDBInput wrapperClass='mb-4' label='Email/ Phonenumber' id='form1' type='email' />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                  </div>

                  <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                  <p className="text-center">Not a member? <a href="#!">Register</a></p>

                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>

                  <div className="text-center mb-3">
                    <p>Sign un with:</p>

                    <MDBRow>
                      <MDBCol col='6'>
                        <MDBBtn className="mb-2 w-100" size="md" style={{ backgroundColor: '#dd4b39' }}>
                          <MDBIcon fab icon="google" className="mx-2" />
                          google
                        </MDBBtn>
                      </MDBCol>

                      <MDBCol col='6'>
                        <MDBBtn className="mb-4 w-100" size="md" style={{ backgroundColor: '#3b5998' }}>
                          <MDBIcon fab icon="facebook-f" className="mx-2" />
                          facebook
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>

                    <p className="text-center mt-3">or:</p>
                  </div>

                  <MDBRow>
                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                    </MDBCol>

                    <MDBCol col='6'>
                      <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput wrapperClass='mb-4' label='Email/ Phonenumber' id='form1' type='email' />
                  <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

                  <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                  </div>

                  <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

                </MDBTabsPane>

              </MDBTabsContent>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

