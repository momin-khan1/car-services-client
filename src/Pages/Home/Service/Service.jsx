import React from 'react'
import { useNavigate } from 'react-router';
import './Service.css'

export default function Service({ service }) {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='gx-3 gy-3 col-12 col-md-6 col-lg-3'>
            <div className="card services">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: ${price}</p>
                    <p className="card-text"> {description} </p>
                    <button onClick={() => navigateToServiceDetail(id)}>Book Now({name})</button>
                </div>
            </div>
        </div>
    )
}
