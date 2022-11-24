import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Login.css'
import loginImage from '../../../images/login.jpg'
import { useNavigate } from 'react-router'

export default function Login() {

    const navigate = useNavigate()
    const emailRef = useRef('');
    const passwordRef = useRef('')

    const formHandleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)
    }

    const NavigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='login'>
            <div className="container mx-auot">
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="col-lg-5 col-12">
                        <Form onSubmit={formHandleSubmit} className='fromControl'>
                            <h3 className='text-center mb-4'>Please Login here</h3>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Log In
                            </Button>
                            <p className='mt-3'>New To Website?  <span className='text-primary' onClick={NavigateRegister} style={{ cursor: "pointer" }}>Please Register</span></p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
