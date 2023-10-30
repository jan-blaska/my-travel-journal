import ImageSlider from "../../components/ImageSlider"

export default function Istanbul() {
    
    const slides = [
        {url: "https://drive.google.com/uc?id=1qDJyZxMfs966PtWo-bk4nuUAZlhbsbUF", alt: "Photo from istanbul inside imageslider No.1"},
        {url: "https://drive.google.com/uc?id=1LvkXfKNfrMTJtchoRcp_qfErGz1wBtjJ", alt: "Photo from istanbul inside imageslider No.2"},
        {url: "https://drive.google.com/uc?id=1S6PfwH3shy7IqHdgCMIhF78JXh03ISC0", alt: "Photo from istanbul inside imageslider No.3"},
        {url: "https://drive.google.com/uc?id=1z-jxvWGFBSIwAY5gDLDXEz-8YH-cT4E4", alt: "Photo from istanbul inside imageslider No.4"},
        {url: "https://drive.google.com/uc?id=1tq4dGMAXDFtJj-B4euIcgk7hp5AemLw8", alt: "Photo from istanbul inside imageslider No.5"}
    ]
    
    const containerStyles = {
        width: "1000px",
        height: "800px",
        margin: "0 auto"
    }

    return (
        
        <div className="section">
            <div className="container">
                <div>
                    <h1 className="country--main-header">Istanbul</h1>
                    <div className="country--welcome-section">
                        <img src="https://drive.google.com/uc?id=1LyojTH45h3rvV4Y1TnoXvy_q4ZTCAlzT" alt="Photo of the Turkey master piece - mosque Hagia Sofia." />
                        <h3>Welcome to city, where history and modernity harmonize by the Bosphorus. Explore ancient wonders, vibrant markets, and the enchanting fusion of East and West.</h3>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div style={containerStyles}>
                    <ImageSlider slides={slides}/>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                
                
            </div>
        </div>
       
    )
}