import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';


export default function Navbar() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar sticky='top' expand='lg' light bgColor='light' style={{ fontSize: 18, fontWeight: 'bolder' }}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          <img
            src="https://i.ibb.co/v42X3Cc/rectangle-logo.png"
            width="120"
            className="d-inline-block align-top"
            alt="Website logo"
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Product
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/Products'>Vegetable</MDBDropdownItem>
                  <MDBDropdownItem link>Cereals</MDBDropdownItem>
                  <MDBDropdownItem link>Natural spices</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Recipe</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Blog
              </MDBNavbarLink>
            </MDBNavbarItem>
           
            <MDBNavbarItem>
              <MDBNavbarLink href='/Cart'>
                <span>
                  <MDBIcon fas icon='shopping-cart'>
                    <span class="position-absolute translate-middle badge rounded-pill badge-danger"
                    style={{fontSize:'0.5em'}}>
                      99+</span></MDBIcon>
                </span>

              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                <span>
                  <MDBIcon fas icon="search" />
                </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>
                <span>
                  <MDBIcon fas icon="user-circle" />
                </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}
