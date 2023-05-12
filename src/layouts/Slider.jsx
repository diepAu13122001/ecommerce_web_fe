import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Slider() {
  return (
    <MDBCarousel showControls dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://media.istockphoto.com/id/530581630/vector/rainbow-of-fruit-and-vegetables.jpg?s=612x612&w=0&k=20&c=pCu9Hr0KfgFsBFm9Vw_t0f42Lo8feyYREsIAIjLbz_A='
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://media.istockphoto.com/id/854725372/photo/healthy-food-clean-eating-selection.jpg?b=1&s=170667a&w=0&k=20&c=oG4MU1094TNbtH6TvzNN_OH3AHk7E9MT0HIjBkVgCTc='
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://media.istockphoto.com/id/1301565375/photo/paleo-diet-healthy-food-background.jpg?b=1&s=170667a&w=0&k=20&c=JyZorfsSyyL3bANRR2HrY4CUMFH8avqs3lvm0YlU8bU='
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}