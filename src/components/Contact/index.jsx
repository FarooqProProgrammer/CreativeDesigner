import React from 'react'
import { Button, Container } from 'react-bootstrap'
import styled from 'styled-components'

const FormLabel = styled.label`
    color: white;
    font-size: 40px;
`

const FormInput = styled.input`
    width: 100%;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none; /* Remove outline */
    color: white;

    &:focus-within { 
        border-top: none;
        border-left: none;
        border-right: none;
        outline: none; /* Ensure no outline on focus */
    }
`

const FormTextArea = styled.textarea`
     width: 100%;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none; /* Remove outline */
    color: white;

    &:focus-within { 
        border-top: none;
        border-left: none;
        border-right: none;
        outline: none; /* Ensure no outline on focus */
    }
`

const Contact = () => {
    return (
        <Container className='py-5'>
            <h3 className='playfair-display mb-5 text-white text-center mx-auto display-1'>Contact</h3>

            <div className='mt-3'>
                <FormLabel className='d-block'>Name</FormLabel>
                <FormInput type='text' placeholder='Jhon Doe' />
            </div>
            <div className='mt-3'>
                <FormLabel className='d-block'>Email</FormLabel>
                <FormInput type='text' placeholder='jhon@email.com' />
            </div>
            <div className='mt-3'>
                <FormLabel className='d-block'>Message</FormLabel>
                <FormTextArea rows={7}  placeholder='Enter your message here...' />
            </div>
            <div className="mt-3">
                <Button className='btn btn-light' size='lg'>SEND</Button>
            </div>

        </Container>
    )
}

export default Contact
