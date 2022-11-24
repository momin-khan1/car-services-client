import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Register.css'
import registerImage from '../../../images/Register.jpg'
import { useNavigate } from 'react-router'

export default function Register() {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate()
    const NavigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(name, email, password)

    }

    return (
        <div className='register'>
            <div className="container mx-auot">
                <div className="row">
                    <div className="col-lg-7 col-12 registerFrom">
                        <img src={registerImage} alt="" />
                    </div>
                    <div className="col-lg-5 col-12">
                        <Form onSubmit={handleRegister} className='fromControl2'>
                            <h3 className='text-center mb-4'>Please Create a Account</h3>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control ref={nameRef} type="name" placeholder="Enter Name" />
                            </Form.Group>

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
                                Register
                            </Button>
                            <p className='mt-3'>Already Have a account  <span className='text-primary' onClick={NavigateLogin} style={{ cursor: "pointer" }}>Please Login</span></p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
