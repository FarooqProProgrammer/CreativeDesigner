import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Hero = () => {
    return (
        <Container className='py-10'>
            <p className='text-white mw-md-40' data-aos="fade-up" data-aos-duration="1000">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h2 className='playfair-display text-white font-size-150' data-aos="fade-bottom" data-aos-duration="1000">Creative Design</h2>
            <Button className='btn btn-outline-light bg-white text-black'>Get A Quote</Button>
        </Container>
    )
}

export default Hero
