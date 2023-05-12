import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCarousel,
    MDBCarouselItem,
    MDBCol,
    MDBRipple,
    MDBRow
} from 'mdb-react-ui-kit';


export default function CommentSlider() {
    return (
        <MDBCarousel showIndicators fade dark className='d-flex justify-content-center'>
            <MDBCarouselItem className='w-100 d-block' itemId={1} src='https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-home-image4.jpg'
                alt='...' style={{maxHeight:"650px"}}>
                <div style={{ maxWidth: "50%", margin: "auto", textAlign: "center"}} >
                <h1 className='fs-3'>Selected Works</h1>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.
                        Lorem ipsum dolor Tur adipiscing elit, sed do eiusmod.</p>
                </div>
                <MDBRow xs={2} md={4} className="g-5 my-1 d-flex justify-content-center">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <MDBCol>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp' fluid alt='...' />
                                    <a href='/#'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </MDBCardText>
                                    <MDBBtn href='#'>Button</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBCarouselItem>
            <MDBCarouselItem className='w-100 d-block' itemId={2} src='https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-home-image4.jpg'
                alt='...' style={{maxHeight:"650px"}}>
                <div style={{ maxWidth: "50%", margin: "auto", textAlign: "center" }} >
                    <h1 className='fs-3'>Selected Works</h1>
                    <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.
                        Lorem ipsum dolor Tur adipiscing elit, sed do eiusmod.</p>
                </div>
                <MDBRow xs={2} md={4} className="g-5 my-1 d-flex justify-content-center">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <MDBCol>
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp' fluid alt='...' />
                                    <a href='/#'>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </MDBCardText>
                                    <MDBBtn href='/#'>Button</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}