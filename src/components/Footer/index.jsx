import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Container>
            <div className='d-flex py-5 flex-column justify-content-center align-items-center'>
                <h5 className='text-white'>2022 Company</h5>
                <div className='d-flex justify-content-center align-items-center gap-3'>
                    <Link to="#!" className='text-muted-color'>Privacy Policy</Link>
                    <Link to="#!" className='text-muted-color'>Terms and Conditions</Link>
                </div>
            </div>
        </Container>
    )
}

export default Footer
