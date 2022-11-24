import React from 'react'
import './Expert.css'
export default function Expert({ expert }) {
    const { name, img, des } = expert
    return (
        <div className='gx-3 gy-3 col-12 col-md-6 col-lg-3'>
            <div className="card expert">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> {des} </p>
                    <button>More Details</button>
                </div>
            </div>
        </div>
    )
}
