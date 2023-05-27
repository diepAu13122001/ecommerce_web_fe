import React from 'react'
import Navbar from '../layouts/Navbar'
import { MDBBtn, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBInputGroup, MDBListGroup, MDBListGroupItem, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBRadio, MDBRow, MDBTable, MDBTableBody, MDBTableHead, MDBTypography } from 'mdb-react-ui-kit'

export function CheckoutNoAcc() {    
    return (
        <div style={{ backgroundColor: "#f8f6f0" }}>
            <Navbar />
            <div>
                {stickyFooter()}
            </div>
            <MDBRow className='text-start bg-white my-3' style={{ position: "relative" }}>
                <MDBCol className="d-flex align-items-center">
                    <div style={{ backgroundColor: "#f39801" }} className='float-start px-2 py-2 me-3'>
                        <MDBIcon fas icon="exclamation-triangle" color='white' className='fs-3' />
                    </div>
                    <MDBTypography className='mb-0'>
                        Bạn đã là thành viên? {" "}
                        <a href="#" className="stretched-link text-danger position-relative fw-bolder text-decoration-underline">Đăng nhập ngay</a>
                    </MDBTypography>
                </MDBCol>
            </MDBRow>

            <MDBRow className='text-start bg-white my-3 px-3' id='order-address'>
                <div className='text-uppercase fw-bolder fs-5 my-3 pb-2 border-bottom'>Địa chỉ giao hàng</div>
                <MDBInputGroup textBefore='Họ tên người nhận' className='mb-3'>
                    <input className='form-control' type='text' placeholder="Nhập họ và tên người nhận" />
                </MDBInputGroup>
                <MDBInputGroup textBefore='Email' className='mb-3'>
                    <input className='form-control' type='email' placeholder="Nhập email" />
                </MDBInputGroup>
                <MDBInputGroup textBefore='Số điện thoại' className='mb-3'>
                    <input className='form-control' type='text' placeholder="Ví dụ: 097123xxx (10 ký tự số)" />
                </MDBInputGroup>
                <MDBInputGroup textBefore='Quốc gia' className='mb-3'>
                    <input disabled className='form-control' type='text' placeholder="Việt Nam" />
                </MDBInputGroup>
                <MDBInputGroup textBefore='Tỉnh/ Thành phố' className='mb-3'>
                    <input disabled className='form-control' type='text' placeholder="Thành phố Hồ Chí Minh" />
                </MDBInputGroup>
                <MDBInputGroup textBefore='Quận/ Huyện' className='mb-3 w-100'>
                    <input className='form-control' type=''></input>
                </MDBInputGroup>
                <MDBInputGroup textBefore='Email' className='mb-3'>
                    <input className='form-control' type='text' placeholder="Nhập email" />
                </MDBInputGroup>
                <MDBInputGroup textBefore='Email' className='mb-3'>
                    <input className='form-control' type='text' placeholder="Nhập email" />
                </MDBInputGroup>
            </MDBRow>
            <MDBRow className='text-start bg-white my-3 px-3' id='order-address'>
                <div className='text-uppercase fw-bolder fs-5 my-3 pb-2 border-bottom'>Phương thức vận chuyển</div>
                <div className="d-inline-flex p-2">
                    <MDBRadio name='radioNoLabel' id='radioNoLabell' value='' aria-label='...' checked />
                    <div>
                        <MDBTypography tag='strong'>Giao hàng tiêu chuẩn: 19.000đ</MDBTypography>
                        <MDBTypography>Thứ Bảy - 13/05</MDBTypography>
                    </div>
                </div>
            </MDBRow>
            <MDBRow className='text-start bg-white my-3 px-3' id='order-address'>
                <div className='text-uppercase fw-bolder fs-5 my-3 pb-2 border-bottom'>Phương thức thanh toán</div>
                <div id='paymentMethodList'></div>
                <div className="d-inline-flex p-2"> 
                    <MDBRadio name='radioNoLabel' id='radioNoLabell' value='' aria-label='...' checked />
                    <div style={{ background: "url(https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_airpay.svg?q=102192) no-repeat ", width: "40px" }}></div>
                    <MDBTypography className='mx-2'>Ví ZaloPay</MDBTypography>
                </div>
                
            </MDBRow>
            <div style={{ height: "300px" }}></div>
        </div>
    )
}

export function CheckoutWithAcc() {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {stickyFooter()}
            </div>
        </div>
    )
}

function stickyFooter() {
    return (
        <div className='shadow-4-strong fixed-bottom bg-white'>
            <MDBTable className='mt-3'>
                <MDBTableBody className="text-end fs-6">
                    <tr>
                        <td className='square border border-0 py-1'> Thành tiền</td>
                        <td className='square border border-0 py-1'>127.300 đ</td>
                    </tr>
                    <tr>
                        <td className='square border border-0 py-1'>Giảm giá (Nhập mã thành công - Mã giảm giá 10% - Đơn hàng từ 100K - Khi mua Sách Học Ngoại Ngữ)</td>
                        <td className='square border border-0 py-1'>-10.000 đ</td>
                    </tr>
                    <tr>
                        <td className='square border border-0 py-1'> Phí vận chuyển (Giao hàng tiêu chuẩn)</td>
                        <td className='square border border-0 py-1'>18.000 đ</td>
                    </tr>
                    <tr className='fw-bolder square border-bottom'>
                        <td className='square border border-0 py-1'> Tổng Số Tiền (gồm VAT)</td>
                        <td className='square border border-0 py-1 text-danger'>408.730 đ</td>
                    </tr>
                    <tr>
                        <td className='text-start square border border-0 py-1'>
                            <MDBBtn color='none' className='text-dark fw-bolder mt-3 fs-5' href='/cart'> Quay về giỏ hàng</MDBBtn>
                        </td>
                        <td className='square border border-0 py-1'>
                            <MDBBtn color='success' className='fs-5' href='/checkoutNoAcc'>Xác nhận thanh toán</MDBBtn>
                        </td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}
