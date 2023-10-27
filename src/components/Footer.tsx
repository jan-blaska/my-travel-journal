import { Link } from "react-router-dom"

export default function Footer() {
    return (
            <footer>
                {/* wave created by generator - https://getwaves.io/*/}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#3D3A33" fill-opacity="1" d="M0,160L26.7,181.3C53.3,203,107,245,160,234.7C213.3,224,267,160,320,154.7C373.3,149,427,203,480,234.7C533.3,267,587,277,640,272C693.3,267,747,245,800,240C853.3,235,907,245,960,234.7C1013.3,224,1067,192,1120,160C1173.3,128,1227,96,1280,96C1333.3,96,1387,128,1413,144L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                </svg>
                <div className="footer">
                    <div className="section">
                        <div className="container">
                            <div className="footer--container">
                                <div className="footer--text">
                                    <h1>Jan Blaška Travel Diary</h1>
                                    <div>
                                        <div className="footer--links">
                                            <Link to="/about-me">About me</Link>
                                            <Link to="#">Destinations</Link>
                                            <Link to="/contact">Contact</Link>
                                        </div>
                                        <div className="footer--get-connected">
                                            <p>Do not hesitate to connect with me on social media!</p>
                                            <div className="footer--social-media">
                                                <a href="http://www.facebook.com">
                                                    <img src="/footer/facebook.png" alt="facebook icon" />
                                                </a>
                                                <a href="http://www.instagram.com">
                                                    <img src="/footer/instagram.png" alt="instagram icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p>© 2023 Jan Blaska  |  created by me</p>
                                </div>
                                <img className="footer--my-photo" src="/footer/me-column.jpg" alt="jan blaska standing by the column" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
    )
}