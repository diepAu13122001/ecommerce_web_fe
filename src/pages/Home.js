import React from 'react';
import Slider from '../layouts/Slider';
import SupportForm from '../layouts/SupportForm';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardGroup,
    MDBCardImage,
    MDBCardOverlay,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
import CommentSlider from '../layouts/CommentSlider';
export default function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <MDBCardGroup className="bg-light">
                <MDBCard border='light' style={{ textAlign: "left" }} className='rounded-0'>
                    <MDBCardImage src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-home-image1.jpg" alt="Card image" className='h-100' />
                    <MDBCardOverlay className='mx-5'>
                        <MDBCardTitle className='fw-bold fs-2 my-4'>Card title</MDBCardTitle>
                        <MDBCardText className='my-3'>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBBtn variant='success' className='rounded-0'>View more</MDBBtn>
                    </MDBCardOverlay>
                </MDBCard>
                <MDBCard border='light'>
                    <MDBCardImage src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-home-image2.jpg" alt="Card image" />
                    <MDBCardOverlay>
                        <MDBCardTitle className='my-4'>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>Last updated 3 mins ago</MDBCardText>
                    </MDBCardOverlay>
                </MDBCard>
                <MDBCard border='light'>
                    <MDBCardImage src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-home-image3.jpg" alt="Card image" />
                    <MDBCardOverlay>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </MDBCardText>
                        <MDBCardText>Last updated 3 mins ago</MDBCardText>
                    </MDBCardOverlay>
                </MDBCard>
            </MDBCardGroup>
            <div style={{ maxWidth: "50%", margin: "auto" }}>
                <h1 style={{ marginTop: "100px" }} className='fs-4 text-uppercase'>promotional products</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <MDBRow className="my-5 ">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <MDBCol>
                            <MDBCard style={{ width: '18rem' }} className='rounded-0 border-0'>
                                <MDBCardImage variant="top" src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-home-image5.jpg" />
                                <MDBCardBody>
                                    <MDBCardTitle>Card Title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </div>
            <div className='d-flex justify-content-center'>
                <MDBRow className="mb-5 ">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <MDBCol>
                            <MDBCard style={{ width: '18rem' }} className='rounded-0 border-0'>
                                <MDBCardImage variant="top" src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-home-image5.jpg" />
                                <MDBCardBody>
                                    <MDBCardTitle>Card Title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </div>
            <MDBBtn className='my-4' color='success'>View more</MDBBtn>
            <MDBCardGroup id='succeed-figures' className='bg-success justify-content-around' style={{ padding: "70px" }}>
                <div className=''>
                    <img alt=''
                        src='https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-counter-img1-1.png'
                    />
                    <h1 className='text-white'>9859</h1>
                    <h5 className='text-white'>Team energy left</h5>
                </div>
                <div className=''>
                    <img alt=''
                        src='https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-counter-img2-1.png'
                    />
                    <h1 className='text-white'>9859</h1>
                    <h5 className='text-white'>Team energy left</h5>
                </div>
                <div className=''>
                    <img alt=''
                        src='https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-counter-img4-1.png'
                    />
                    <h1 className='text-white'>9859</h1>
                    <h5 className='text-white'>Team energy left</h5>
                </div>
                <div className=''>
                    <img alt=''
                        src='https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-counter-img3-1.png'
                    />
                    <h1 className='text-white'>9859</h1>
                    <h5 className='text-white'>Team energy left</h5>
                </div>
            </MDBCardGroup>

            <CommentSlider />

            <SupportForm />

            <Footer />

        </div>

    );
}