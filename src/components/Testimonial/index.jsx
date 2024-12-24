import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Slider from "react-slick";
import { Service1 } from '../../assets';
import { FaA, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const TestimonialDescription = styled.p`
    
`


const CarouselItem = styled.div`
    background-color: #181818;
    width: 100%;


    .see-full-review { 
        position: absolute;
        bottom: 10px;
        display: flex;
        align-items: center;

        p  {

            color: white;
        }
    }
`



const Testimonial = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

    };


    return (
        <Container className='py-8'>
            <h3 data-aos="fade-up" data-aos-duration="1000" className='playfair-display  text-white text-center mx-auto display-1'>Testimonials</h3>
            <TestimonialDescription data-aos="fade-down" data-aos-duration="500" className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TestimonialDescription>
            <Slider {...settings} className='mt-6'>
                {
                    [...Array(5)].map((item, index) => {
                        return (
                            <CarouselItem>
                                <Row className='gx-1'>
                                    <Col md={4}>
                                        <Image src={Service1} alt='' />
                                    </Col>
                                    <Col md={8} className='px-0'>
                                        <div className='py-3 px-5 h-100 position-relative'>
                                            <h2 className='text-white playfair-display'>“Amazing Team with Lorem Ipsum”</h2>
                                            <p className='text-white mt-sm-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                                            <Link to='#!' className='see-full-review gap-3'>
                                                <p className='mb-0'>See full review </p>
                                                <FaArrowRightLong color='#FFF' />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </CarouselItem>
                        )
                    })
                }
            </Slider>
            <Button className='mt-4 mx-auto d-block bg-transparent border border-white'>See All Review</Button>
        </Container>
    )
}

export default Testimonial
