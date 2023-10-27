import videoBg from '/video-bg.mp4'
import Map from '../components/Map'

export default function Home() {
    
    return (
        <div className='home-page'>

            <div className='overlay'></div>
            <div className='home--header'>
                <div className='home--header-myname'>
                    <h2>Jan</h2>
                    <h1>Blaška</h1>
                </div>
                <h3 className='home--header-webname'>
                    my Travel Journal
                </h3>
                <button className='home--header-btn'>Explore</button>
            </div>
            <video src={videoBg} autoPlay loop muted />

            <div className="section">
                <div className="container">
                    <div className="home--welcome-message">
                        <h3>Hello! <span className='hand-written'>My name is</span><span className='green'>Jan Blaška.</span></h3>
                        <h2>Welcome TO my travel journal!</h2>
                        <h4>Make a tea or a coffee, and <span className='grey-box'>lets explore with me some adventure 📷.</span></h4>
                    </div>
                    <p className='home--map-description'>Click on the country you are interested in</p>
                    <Map />
                </div>
            </div>
            <div className="section bg-orange">
                <div className="container">
                    <div className="home--citation">
                        <h3>The journey of a thousand miles begins with one step.</h3>
                        <h4>Lao Tzu</h4>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="section--latest-adventures">
                        <h1>Latest Adventures</h1>
                        <div className='adventures-container'>
                            <div className='adventure-card'>
                                <img src="mosque-istanbul.jpg" alt="mosque istanbul" />
                                <h3>Istanbul</h3>
                                <p>Erasmus study exchange</p>
                            </div>
                            <div className='adventure-card'>
                                <img src="mosque-istanbul.jpg" alt="mosque istanbul" />
                                <h3>Istanbul</h3>
                                <p>Erasmus study exchange</p>
                            </div>
                            <div className='adventure-card'>
                                <img src="mosque-istanbul.jpg" alt="mosque istanbul" />
                                <h3>Istanbul</h3>
                                <p>Erasmus study exchange</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}