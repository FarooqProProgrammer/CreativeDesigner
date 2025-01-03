import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { PortfolioImage1, PortfolioImage2, PortfolioImage3, PortfolioImage4, PortfolioImage5, PortfolioImage6 } from '../../assets'
import { Container } from 'react-bootstrap'


const Portfolio = () => {
    return (
        <Container className=''>
            <h3 data-aos="fade-up" data-aos-duration="500" className='playfair-display mb-5 text-white text-center mx-auto display-1'>Portfolio</h3>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter="20px">
                   <img data-aos="fade-up" data-aos-duration="1000" src={PortfolioImage1} alt="" className='img-fluid' srcset="" />
                   <img data-aos="fade-up" data-aos-duration="2000" src={PortfolioImage2} alt="" className='img-fluid' srcset="" />
                   <img data-aos="fade-up" data-aos-duration="3000" src={PortfolioImage3} alt="" className='img-fluid' srcset="" />
                   <img data-aos="fade-up" data-aos-duration="4000" src={PortfolioImage5} alt="" className='img-fluid' srcset="" />
                   <img data-aos="fade-up" data-aos-duration="5000" src={PortfolioImage4} alt="" className='img-fluid' srcset="" />
                   <img data-aos="fade-up" data-aos-duration="6000" src={PortfolioImage6} alt="" className='img-fluid' srcset="" />
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    )
}

export default Portfolio
