import { MDBBadge, MDBBtnGroup, MDBCol, MDBRadio, MDBRow, MDBTable, MDBTableBody, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

export default function ProductDetails() {
    return (
        <div>
            <Navbar />
            <MDBRow id='overview' className='my-4'>
                <MDBCol md='6'>
                    <img src='https://i.ibb.co/qJSRGVK/6-tomato-png-image.png' className='img-fluid w-75 my-3' alt='...' />
                    <img src='https://post.healthline.com/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg' className='img-fluid w-75 my-3' alt='...' />
                </MDBCol>
                <MDBCol md='6' className='align-items-start text-center text-md-start'>
                    <h1>Ngũ Cốc Dinh Dưỡng Granola</h1>
                    <div id='rating' className='d-inline-block'>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <MDBTypography className='d-inline-block ms-3 text-info'>183 đánh giá </MDBTypography>
                        <MDBTypography className='d-inline-block mx-3'>|</MDBTypography>
                        <MDBTypography className='d-inline-block text-info'>1.023 lượt mua </MDBTypography>
                    </div>
                    <div id='price' className='d-flex justify-content-start'>
                        <MDBTypography className='d-inline-block text-secondary fs-3' tag='s'>50.000đ</MDBTypography>
                        <h1 className='d-inline-block text-danger mx-3'>
                            <strong>30.000đ</strong>
                        </h1>
                        <MDBBadge className='ms-1 h-50 mt-3' color='danger' >10% GIẢM</MDBBadge>
                    </div>
                    <div id='weigh'>
                        <MDBTypography className='fw-bold'>Khối lượng</MDBTypography>
                        <MDBBtnGroup>
                            <MDBRadio btn btnColor='secondary' id='btn-radio' name='options' wrapperTag='span' label='Radio button' />
                            <MDBRadio
                                btn
                                btnColor='secondary'
                                id='btn-radio2'
                                name='options'
                                wrapperClass='mx-2'
                                wrapperTag='span'
                                label='Radio button'
                                defaultChecked
                            />
                            <MDBRadio btn btnColor='secondary' id='btn-radio3' name='options' wrapperTag='span' label='Radio button' />
                        </MDBBtnGroup>
                    </div>

                    <MDBTable id='detail-info'>
                        <MDBTableBody>
                            <tr>
                                <td>Mark</td>
                                <td>Thornto kjhfsd kjhfsdfkjfhds fsdhfkjsdf fjsdkfjs kfjdsfkh fkjshfkjsd kfjsdfkjsd dskfhsdkf dskfhsdkfsfkjsds dkfsfkjsdsdn</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornto kjhfsd kjhfsdfkjfhds fsdhfkjsdf fjsdkfjs kfjdsfkh fkjshfkjsd kfjsdfkjsd dskfhsdkf dskfhsdkfsfkjsds dkfsfkjsdsdn</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </MDBCol>
            </MDBRow>
            <div id='comments'>
                comments
            </div>
            <div id='recommend-list'>
                danh sách các sản phẩm thường mua cùng
            </div>
            <Footer />
        </div>
    )
}
