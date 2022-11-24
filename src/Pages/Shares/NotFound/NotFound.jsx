import React from 'react'
import './NotFound.css'
import notFound from '../../../images/404.webp'

export default function NotFound() {
    return (
        <div className='notFound'>
            <img src={notFound} alt="" />
        </div>
    )
}
