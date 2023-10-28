export default function Turkey() {
    
    return (
        <div className="section">
            <div className="container">
                <div>
                    <h1 className="country--main-header">Turkey</h1>
                    <div className="country--welcome-section">
                        <img src="/countries/turkey/mosque-istanbul.jpg" alt="Photo of the Turkey master piece - mosque Hagia Sofia." />
                        <h3>Welcome to country, where East meets West. Explore captivating history, stunning landscapes, and the genuine hospitality of its people.</h3>
                    </div>
                </div>
                {/*<div>
                    <h1 className="country--main-header">Dominican republic</h1>
                    <div className="country--welcome-section">
                        <img src="/countries/turkey/mosque-istanbul.jpg" alt="Photo of the Turkey master piece - mosque Hagia Sofia." />
                        <h3>Discover the vibrant rhythms and pristine beaches of the Dominican Republic, where culture and natural beauty unite in harmony.</h3>
                    </div>
                </div>
                <div>
                    <h1 className="country--main-header">Switzerland</h1>
                    <div className="country--welcome-section">
                        <img src="/countries/turkey/mosque-istanbul.jpg" alt="Photo of the Turkey master piece - mosque Hagia Sofia." />
                        <h3>Where breathtaking alpine landscapes meet precision craftsmanship, creating a timeless heaven for both nature enthusiasts and connoisseurs.</h3>
                    </div>
                </div>*/}
                <div className="section--latest-adventures">
                    <h1>Trips in Turkey</h1>
                    <div className='adventures-container'>
                        <div className='adventure-card'>
                            <img src="mosque-istanbul.jpg" alt="mosque istanbul" />
                            <h3>Istanbul</h3>
                            <p>Erasmus study exchange</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}