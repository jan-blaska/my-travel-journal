import { useState } from "react"
// This will be substituted by the Firebase database using useEffect and fetch:
import { countriesArray } from "../data/countries-visited"
import { ComposableMap, Geographies, Geography, ZoomableGroup, Sphere, Graticule } from "react-simple-maps"


export default function Map() {
    const [countries, setCountries] = useState(countriesArray)
    const [position, setPosition] = useState({coordinates: [0,0], zoom: 1})

    // ---> geoUrl, official link, but now not functioning 
    // const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
    const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
    

    function handleMoveEnd(position) {
        setPosition(position)
    }

    return (
        <div style={{width: "100%", height: "fit-content"}}>
             <ComposableMap
                
                width={900}
                height={500}
                projectionConfig={{
                    rotate: [0,0,0],
                    scale: 100
                }}
             >
                { countries.length > 0
                ?
                    <ZoomableGroup
                        zoom={position.zoom}
                        center={position.coordinates}
                        onMoveEnd={handleMoveEnd}
                    >
                        <Sphere 
                            stroke="#ebe8eb"
                            strokeWidth={0.5}
                        />
                        <Graticule 
                            stroke="#ebe8eb"
                            strokeWidth={0.5}
                        />
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo, index) => {
                                    // ---> filter visited countries using original version of geoUrl
                                    // const country = countries.find(country => country.alpha2.toUpperCase() === geo.properties["Alpha-2"])
                                    const country = countries.find(country => country.id == geo.id)
                                    const isVisited = country ? country.isVisited : false
                                    // console.log(geo)

                                    return (
                                        <Geography 
                                            key={geo.rsmKey} 
                                            geography={geo}
                                            style={{
                                                default: { fill: isVisited ? 'green' : '#dbd9d3', outline: "none" },
                                                hover: { fill: "#000", outline: "none" },
                                                pressed: {fill: "#000", outline: "none" }
                                            }}
                                            
                                            stroke="#FFF"
                                            strokeWidth={0.3}
                                            // change onClick event, ex. redirect to the article/s about the country clicked
                                            onClick={() => console.log(geo.properties.name)}
                                            className="country"
                                        />
                                    )
                                })
                            }
                        </Geographies>

                    </ ZoomableGroup>
                :
                <p>Loading</p>

                }
                
            </ComposableMap>
        </div>
    )
}