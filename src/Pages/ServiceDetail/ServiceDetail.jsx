import React from 'react'
import { useParams } from 'react-router'
import './ServiceDetail.css'

export default function ServiceDetail() {
    const { serviceId } = useParams()
    return (
        <div className='serviceDetail'>
            <h1>this is serviceDetails {serviceId} </h1>
        </div>
    )
}
