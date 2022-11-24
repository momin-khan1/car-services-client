import React, { useEffect, useState } from 'react'
import Expert from '../Expert/Expert'
import './Experts.css'

export default function Experts() {
    const [experts, setExperts] = useState([])
    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className='experts' id='experts'>
            <h3>Our Experts</h3>
            <div className="container">
                <div className="row">
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    )
}
