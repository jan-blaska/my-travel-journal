import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { articlesObject } from "../data/articles"

export default function Country() {
    const params = useParams()

    const [country, setCountry] = useState(params.country)
    useEffect((() => 
        setCountry(articlesObject[`${params.country}`])
    ), [params])
    

    console.log(country.trips)

    /*const trips = country.trips.map((trip) => {
        return (trip)
    })

    console.log(trips)*/
    // console.log(articlesObject[`${params.country}`].imageUrl)

    /*country.trips.map((trip) => {
        
        console.log(trip)
        
        return (
            <div className='adventure-card'>
                <img src="mosque-istanbul.jpg" alt="mosque istanbul" />
                <h3>Istanbul</h3>
                <p>Erasmus study exchange</p>
            </div>
        )
    })*/
    
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

                    </div>
                </div>
            </div>
        </div>
    )

}