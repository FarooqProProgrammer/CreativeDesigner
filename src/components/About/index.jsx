import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AboutImage } from '../../assets'
import styled from 'styled-components'


const ImageAbout = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
`

const About = () => {
    return (
        <Container className='py-10 vh-100'>
            <h3 data-aos="fade-up" data-aos-duration="500" className='playfair-display mb-5 text-white text-center mx-auto display-1'>About</h3>
            <Row className='pb-6'>
                <Col md={6}>
                    <p data-aos="fade-right" data-aos-duration="1000" className='fs-4 text-white'>We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p data-aos="fade-left" data-aos-duration="1000" className='fs-4 text-white'>After 10 years of experience Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Col>
                <Col md={6}>
                    <ImageAbout data-aos="fade-bottom" data-aos-duration="1000" src={AboutImage} alt='About Image' className='' />
                </Col>
            </Row>
        </Container>
    )
}

export default About
