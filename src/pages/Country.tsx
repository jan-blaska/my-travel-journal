import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { articlesObject } from "../data/articles"

export default function Country() {
    const params = useParams()

    const [country, setCountry] = useState(articlesObject[`${params.country}`])
    useEffect((() => 
        setCountry(articlesObject[`${params.country}`])
    ), [params])

    const trips = country.trips.map((trip) => {
        return (
            <Link to={`${trip.linkTo}`} key={trip.place}>
                <div className='adventure-card' >
                    <img src={trip.imageUrl} alt={trip.imageAlt} />
                    <h3>{trip.place}</h3>
                    <p>{trip.description}</p>
                </div>
            </Link>
        )
    })
    
    return (
        <div className="section">
            <div className="container">
                <div>
                    <h1 className="country--main-header">{country.countryName}</h1>
                    <div className="country--welcome-section">
                        <img src={country.imageUrl} alt={country.imageAlt} />
                        <h3>{country.description}</h3>
                    </div>
                </div>
                <div className="section--latest-adventures">
                    <h1>{`Trips in ${country.countryName}`}</h1>
                    <div className='adventures-container'>
                        {trips}
                    </div>
                </div>
            </div>
        </div>
    )

}