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
                   <img src={PortfolioImage1} alt="" className='img-fluid' srcset="" />
                   <img src={PortfolioImage2} alt="" className='img-fluid' srcset="" />
                   <img src={PortfolioImage3} alt="" className='img-fluid' srcset="" />
                   <img src={PortfolioImage5} alt="" className='img-fluid' srcset="" />
                   <img src={PortfolioImage4} alt="" className='img-fluid' srcset="" />
                   <img src={PortfolioImage6} alt="" className='img-fluid' srcset="" />
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    )
}

export default Portfolio
