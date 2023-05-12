import { MDBBtn, MDBCard, MDBCardHeader, MDBCardLink, MDBCardText, MDBCardTitle, MDBCheckbox, MDBCol, MDBIcon, MDBListGroup, MDBListGroupItem, MDBProgress, MDBProgressBar, MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBTooltip, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

export default function Cart() {
    return (
        <div>
            <Navbar />
            <div id='cart-components' className='align-items-start text-md-start'>
                <MDBTypography tag="h3" className='my-3'>Giỏ hàng ({1} sản phẩm)</MDBTypography>
                <MDBRow>
                    <MDBCol md="8">
                        <MDBTable className='my-2'>
                            <MDBTableHead>
                                <tr>
                                    <MDBCheckbox name='flexCheck' value='' id='choosing-all' />
                                    <td colSpan={2} className='square border border-0'>Chọn tất cả ({1} sản phẩm)</td>
                                    <th scope='col' className='square border border-0'>Số lượng</th>
                                    <th scope='col' className='square border border-0'>Thành tiền</th>
                                    <th scope='col' className='square border border-0'><MDBIcon fas icon="trash-alt" /></th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <th><MDBCheckbox name='flexCheck' value='' id='choosing-all' />
                                    </th>
                                    <th scope='col'>
                                        <a class="product-image" href="https://www.fahasa.com/cau-ma-nha-xi-hanako-tap-3-tai-ban-2022.html">
                                            <img src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-home-image5.jpg" width="120" height="120" alt="" />
                                        </a>
                                    </th>
                                    <th scope='col'>
                                        <MDBTypography>"Cậu" Ma Nhà Xí Hanako - Tập 3 (Tái Bản 2022)</MDBTypography>
                                        <span className='d-flex align-items-center'>
                                            <p className='text-danger fs-4 mb-0 float-start me-3'>27.000d</p>
                                            <p className='text-muted text-decoration-line-through fs-6 mb-0'>30.000d</p>
                                        </span>

                                    </th>
                                    <th scope='col'>
                                        <div className="d-flex justify-content-around border border-1">
                                            <MDBBtn color='white' className=' border border-0 shadow-0 float-start px-2 py-0 fs-4 text-muted'>-</MDBBtn>
                                            <input type="text" className=' border border-0 shadow-0 text-center fw-bold fs-5' style={{ maxWidth: "30px", outline: "none" }} />
                                            <MDBBtn color='white' className=' border border-0 shadow-0 px-2 py-0 fs-4 text-muted'>+</MDBBtn>
                                        </div>
                                    </th>
                                    <th scope='col' className='text-danger fs-5'>27.000d</th>
                                    <th scope='col'><MDBIcon fas icon="trash-alt" /></th>
                                </tr>
                                <tr>
                                    <th><MDBCheckbox name='flexCheck' value='' id='choosing-all' />
                                    </th>
                                    <th scope='col'>
                                        <a class="product-image" href="https://www.fahasa.com/cau-ma-nha-xi-hanako-tap-3-tai-ban-2022.html">
                                            <img src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/11/fruit-home-image5.jpg" width="120" height="120" alt="" />
                                        </a>
                                    </th>
                                    <th scope='col'>
                                        <MDBTypography>"Cậu" Ma Nhà Xí Hanako - Tập 3 (Tái Bản 2022)</MDBTypography>
                                        <span className='d-flex align-items-center'>
                                            <p className='text-danger fs-4 mb-0 float-start me-3'>27.000d</p>
                                            <p className='text-muted text-decoration-line-through fs-6 mb-0'>30.000d</p>
                                        </span>

                                    </th>
                                    <th scope='col'>
                                        <div className="d-flex justify-content-around border border-1">
                                            <MDBBtn color='white' className=' border border-0 shadow-0 float-start px-2 py-0 fs-4 text-muted'>-</MDBBtn>
                                            <input type="text" className=' border border-0 shadow-0 text-center fw-bold fs-5' style={{ maxWidth: "30px", outline: "none" }} />
                                            <MDBBtn color='white' className=' border border-0 shadow-0 px-2 py-0 fs-4 text-muted'>+</MDBBtn>
                                        </div>
                                    </th>
                                    <th scope='col' className='text-danger fs-5'>27.000d</th>
                                    <th scope='col'><MDBIcon fas icon="trash-alt" /></th>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBCard className='mb-3'>
                            <MDBCardHeader className='text-primary'>
                                <MDBTypography className='mb-0 float-start text-uppercase'>
                                    <MDBIcon fas icon="ticket-alt" className='me-2' />
                                    khuyến mãi
                                </MDBTypography>
                                <MDBIcon fas icon="angle-right" className='float-end' />
                            </MDBCardHeader>
                            <MDBListGroup>
                                <MDBListGroupItem>
                                    <div className='d-flex justify-content-between'>
                                        <MDBCardTitle className='text-uppercase'>mã giảm {10}k</MDBCardTitle>
                                        <MDBCardLink>Chi tiết</MDBCardLink>
                                    </div>
                                    <MDBCardText>Đơn hàng mua sản phẩm Manga từ 120K</MDBCardText>
                                    <div className='d-flex justify-content-between'>
                                        <MDBTypography tag='small'>
                                            <MDBProgress className='mb-2'>
                                                <MDBProgressBar width={75} valuemin={0} valuemax={100} />
                                            </MDBProgress>
                                            Mua thêm 100.000 đ để nhận mã
                                        </MDBTypography>
                                        <MDBBtn className='shadow-0' color='success'>Mua thêm</MDBBtn>
                                    </div>
                                </MDBListGroupItem>
                            </MDBListGroup>
                            <MDBListGroup>
                                <MDBListGroupItem>
                                    <div className='d-flex justify-content-between'>
                                        <MDBCardTitle className='text-uppercase'>mã giảm {10}k</MDBCardTitle>
                                        <MDBCardLink>Chi tiết</MDBCardLink>
                                    </div>
                                    <MDBCardText>Đơn hàng mua sản phẩm Manga từ 120K</MDBCardText>
                                    <div className='d-flex justify-content-between'>
                                        <MDBTypography tag='small'>
                                            <MDBProgress className='mb-2'>
                                                <MDBProgressBar width={75} valuemin={0} valuemax={100} />
                                            </MDBProgress>
                                            Mua thêm 100.000 đ để nhận mã
                                        </MDBTypography>
                                        <MDBBtn className='shadow-0' color='success'>Mua thêm</MDBBtn>
                                    </div>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    <div className="d-grid gap-2">
                                        <MDBBtn className='me-1 text-md-start align-items-center' color='secondary'>
                                            {4} khuyến mãi đủ điều kiện
                                            <MDBIcon fas icon="angle-right" className='float-end pt-1' />
                                        </MDBBtn>
                                    </div>
                                    <MDBTypography className='text-muted my-2'>Có thể áp dụng đồng thời nhiều mã
                                        <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Áp dụng tối đa 1 mã giảm giá và 1 mã freeship">
                                            <MDBIcon fas icon="exclamation-circle" className='ms-1' />
                                        </MDBTooltip>
                                    </MDBTypography>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCard>

                        <MDBCard>
                            <MDBCardHeader>
                                <div className='mb-5'>
                                    <MDBTypography className='mb-0 float-start w-75'> Thành tiền</MDBTypography>
                                    <MDBTypography className='mb-0 float-end'> 127.300 đ</MDBTypography>
                                </div>
                                <div className='mb-5'>
                                    <MDBTypography className='float-start w-75'> 
                                        Giảm giá (Nhập mã thành công - Mã giảm giá 10% - Đơn hàng từ 100K - Khi mua Sách Học Ngoại Ngữ)</MDBTypography>
                                    <MDBTypography className='mb-0 float-end'> -10.000 đ</MDBTypography>
                                </div>
                                <div id='shipping-fee'>
                                    <MDBTypography className='mb-0 float-start w-75'> Phí vận chuyển (Giao hàng tiêu chuẩn)</MDBTypography>
                                    <MDBTypography className='mb-0 float-end'> 18.000 đ</MDBTypography>
                                </div>
                            </MDBCardHeader>
                            <MDBListGroup flush>
                                <MDBListGroupItem className='square border border-0'>
                                    <MDBCardText className='fw-bolder float-start'>Tổng Số Tiền (gồm VAT)</MDBCardText>
                                    <MDBCardText className='fw-bolder float-end fs-4 text-danger'>127.300 đ</MDBCardText>
                                </MDBListGroupItem>
                                <div className="d-grid gap-2">
                                    <MDBBtn color='danger' className='fs-5' href='/checkoutNoAcc'>Thanh toán</MDBBtn>
                                </div>
                                <MDBTypography color='danger' className="text-center">(Giảm giá trên web chỉ áp dụng cho bán lẻ)</MDBTypography>

                            </MDBListGroup>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
            <Footer />
        </div>
    )
}
