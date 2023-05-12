import { MDBBtn, 
    MDBCard,
     MDBCardBody, 
     MDBCardImage, 
     MDBCardSubTitle, 
     MDBCardText,
     MDBCardTitle, 
     MDBCheckbox, 
     MDBCol, 
     MDBListGroup, 
     MDBListGroupItem, 
     MDBRow } 
     from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Slider from '../layouts/Slider'

export default function ProductList() {

    return (
        <div>
            <Navbar />
            <Slider />
            <MDBRow className='my-5'>
                <MDBCol md='3' className='align-items-start text-center text-md-start'>
                    <MDBListGroup style={{ minWidth: '22rem' }} light className='ms-2'>
                        <MDBListGroupItem disabled aria-disabled='true' className='fw-bold fs-5'>
                            Type of food
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className='p-1'>Dapibus ac facilisis in</MDBListGroupItem>
                        <MDBListGroupItem noBorders className='p-1'>Morbi leo risus</MDBListGroupItem>
                        <MDBListGroupItem noBorders className='p-1'>Porta ac consectetur ac</MDBListGroupItem>
                        <MDBListGroupItem noBorders className='p-1'>Vestibulum at eros</MDBListGroupItem>
                    </MDBListGroup>

                    <MDBListGroup style={{ minWidth: '22rem' }} light className='ms-2'>
                        <MDBListGroupItem disabled aria-disabled='true' className='fw-bold fs-5'>
                            Farms
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className='p-1'>Dapibus ac facilisis in</MDBListGroupItem>
                        <MDBListGroupItem noBorders className='p-1'>Morbi leo risus</MDBListGroupItem>
                        <MDBListGroupItem noBorders className='p-1'>Porta ac consectetur ac</MDBListGroupItem>
                        <MDBListGroupItem noBorders className='p-1'>Vestibulum at eros</MDBListGroupItem>
                    </MDBListGroup>

                    <MDBListGroup style={{ minWidth: '22rem' }} light className='ms-2'>
                        <MDBListGroupItem disabled aria-disabled='true' className='fw-bold fs-5'>
                            Price range
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className='p-1'>
                            <MDBCheckbox inline />
                            Cras justo odio
                        </MDBListGroupItem >

                        <MDBListGroupItem noBorders className='p-1'>
                            <MDBCheckbox inline />
                            Dapibus ac facilisis in
                        </MDBListGroupItem>

                        <MDBListGroupItem noBorders className='p-1'>
                            <MDBCheckbox inline />
                            Morbi leo risus
                        </MDBListGroupItem>

                        <MDBListGroupItem noBorders className='p-1'>
                            <MDBCheckbox inline />
                            Porta ac consectetur ac
                        </MDBListGroupItem>

                        <MDBListGroupItem noBorders className='p-1'>
                            <MDBCheckbox inline />
                            Vestibulum at eros
                        </MDBListGroupItem>

                    </MDBListGroup>

                    <MDBListGroup style={{ minWidth: '22rem' }} light className='ms-2'>
                        <MDBListGroupItem disabled aria-disabled='true' className='fw-bold fs-5'>
                            Showrooms
                        </MDBListGroupItem>
                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Cras justo odio
                                </MDBListGroupItem >

                                <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Dapibus ac facilisis in
                                </MDBListGroupItem>

                                <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Morbi leo risus
                                </MDBListGroupItem>

                                <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Porta ac consectetur ac
                                </MDBListGroupItem>

                                <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Vestibulum at eros
                                </MDBListGroupItem>
                            </MDBCol>
                            <MDBCol md='6'>
                            <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Cras justo odio
                                </MDBListGroupItem >

                                <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Dapibus ac facilisis in
                                </MDBListGroupItem>

                                <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Morbi leo risus
                                </MDBListGroupItem>

                                <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Porta ac consectetur ac
                                </MDBListGroupItem>

                                <MDBListGroupItem noBorders className='p-1'>
                                    <MDBCheckbox inline />
                                    Vestibulum at eros
                                </MDBListGroupItem>
                            </MDBCol>
                        </MDBRow>
                    </MDBListGroup>
                </MDBCol>

                <MDBCol md='9' className='ps-5'>
                    <MDBRow>
                        <MDBCard noBorders shadow='0' className='align-items-start text-center text-md-start'
                            style={{ maxWidth: "90%" }}>
                            <div>
                                <MDBCardTitle className='fs-3 fw-bolder d-inline-block'>Danh mục "Rau cu tuoi song"</MDBCardTitle>
                                <MDBCardSubTitle className='d-inline-block p-2'>{'(tong 12 mon)'}</MDBCardSubTitle>
                            </div>
                            <div id='filter'>
                                <MDBCardText className='d-inline-block fs-5'>Lọc theo: </MDBCardText>
                                <div className='d-inline-block '>
                                    <MDBBtn className='border border-secondary bg-transparent text-dark shadow-0 p-1 mx-2 text-capitalize'>NutriFarm
                                        <MDBBtn className="btn-close ms-1" color="none" aria-label="Close" /></MDBBtn>
                                    <MDBBtn className='border border-secondary bg-transparent text-dark shadow-0 p-1 mx-2 text-capitalize'>NutriFarm
                                        <MDBBtn className="btn-close ms-1" color="none" aria-label="Close" /></MDBBtn>
                                    <MDBBtn className='border border-secondary bg-transparent text-dark shadow-0 p-1 mx-2 text-capitalize'>NutriFarm
                                        <MDBBtn className="btn-close ms-1" color="none" aria-label="Close" /></MDBBtn>
                                    <MDBBtn className='mx-2 p-1' color='tertiary' rippleColor='light'>
                                        Xóa hết
                                    </MDBBtn>
                                </div>
                            </div>
                            <div id='sort'>
                                <MDBCardText className='d-inline-block fs-5'>Ưu tiên xem: </MDBCardText>
                                <div className='d-inline-block '>
                                    <MDBBtn className='shadow-0 mx-2 text-capitalize' color='success'>
                                        Bán chạy nhất
                                    </MDBBtn>
                                    <MDBBtn className='text-dark shadow-0 mx-2 text-capitalize' color='light'>
                                        Giá thấp
                                    </MDBBtn>
                                    <MDBBtn className='text-dark shadow-0 mx-2 text-capitalize' color='light'>
                                        Giá cao
                                    </MDBBtn>
                                </div>
                            </div>

                        </MDBCard>
                    </MDBRow>
                    <MDBRow className="my-3 g-3">
                        {Array.from({ length: 15 }).map((_, idx) => (
                            <MDBCol>
                                <MDBCard style={{ width: '16rem' }} className='rounded-0 border-0 my-2 '>
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
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-5'>
                <MDBCol md='3'>

                </MDBCol>
                <MDBCol md='8'>
                    <MDBBtn>View more</MDBBtn>
                </MDBCol>
            </MDBRow>

            <Footer />
        </div>
    )
}
