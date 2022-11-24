import React, { useEffect, useState } from 'react'
import Service from '../Service/Service'
import './Services.css'

export default function Services() {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='servicess' id='services'>
            <h2>Our Services</h2>
            <div className="container">
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>

    )
}
