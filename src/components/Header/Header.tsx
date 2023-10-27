import { NavLink, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { RiArrowDownSLine } from "react-icons/ri"
import menuItemsAdventures from "./Menu-items-adventures"

// for more items, such as countries, thing of using .map method



export default function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    
    function detectIfIsMobile() {
        if(window.innerWidth > 1000) {
			setIsMobile(false)
		} else {
			setIsMobile(true)
        }
    }
    
    useEffect(() => {
		detectIfIsMobile()
	}, [])
    
	useEffect(() => {
		window.addEventListener('resize', detectIfIsMobile)
	})
    
    return (
        <header>
            <div className="container">
                <nav>
                    {isMobile && 
                        <button className="nav--hamburger" onClick={() => setMenuIsOpen(!menuIsOpen)}>
                            {menuIsOpen
                                ? (<img src="/close.png" alt="close icon to close navigation menu for mobile" /> ) 
                                : (<img src="/hamburger.png" alt="hamburger icon as navigation menu for mobile" /> ) 
                            }
                        </button>
                    }
                    
                    <Link className="nav--link-main" to="/">Jan Blaška Travel Diary</Link>
                    
                    {((isMobile === false) || (isMobile === true && menuIsOpen)) &&
                        <div className="nav--links">
                            
                            <NavLink 
                                className={({isActive}) => isActive ? "nav-link-selected" : null } 
                                to="/about-me"
                            >
                                About me
                            </NavLink>
                            
                            <div className="nav--links-adventures">
                                <button className="nav--links-adventures-btn">
                                    Adventures
                                    <RiArrowDownSLine className="dropdown-icon" />
                                    
                                </button>
                                <div className="nav--links-adventures-grid">
                                    {menuItemsAdventures.map((item) => {
                                        return (
                                            <div className="nav--links-adventures-grid-continent">
                                                <h3>{item.continent}</h3>
                                                <div className="nav--links-adventures-grid-continent-countries">
                                                {item.countries.map(country => {
                                                    return (
                                                        <NavLink 
                                                            className={({isActive}) => isActive ? "nav-link-selected" : null } 
                                                                to={`/${country.linkTo}`}
                                                            >
                                                                {country.name}
                                                         </NavLink>
                                                    )
                                                })}
                                                </div>
                                                
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        
                            {/*<NavLink 
                                className={`nav-link-adventures ${({isActive}) => isActive ? "nav-link-selected" : null}`}
                                to="/adventures"
                            >
                                Adventures
                            </NavLink>
                            <NavLink 
                                className={({isActive}) => isActive ? "nav-link-selected" : null } 
                                to="/travel-tips"
                            >
                                Travel tips
                            </NavLink>*/}
                            
                            <NavLink 
                                className={({isActive}) => isActive ? "nav-link-selected" : null } 
                                to="/contact"
                            >
                                Contact
                            </NavLink>
                            
                        </div>
                    }
                    <div className="nav--languages">
                        <button>
                            <img src="/english-flag.png" alt="button set english language" />
                        </button>
                        {/*<button>
                            <img src="/czech-flag.png" alt="button set czech language" />
                        </button>*/}
                    </div>       
                </nav>
            </div>
        </header>
    )
}