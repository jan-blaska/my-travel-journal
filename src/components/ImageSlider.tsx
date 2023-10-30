import { useState } from "react"

export default function ImageSlider({slides}) {
    
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const sliderStyles = {
        height: "100%",
        position: "relative"
    }
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    }
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    }
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    }
    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
    }
    const dotStyles = {
        margin: "0 5px",
        cursor: "pointer",
        fontSize: "50px"
    }


    function goToPrevious() {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    function goToNext() {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    function goToSlide(slideIndex) {
        setCurrentIndex(slideIndex)
    }

    
    return (
        <div style={sliderStyles}>

            <div style={leftArrowStyles} onClick={() => goToPrevious()}>&#129092;</div>
            <div style={rightArrowStyles} onClick={() => goToNext()}>&#129094;</div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slides, slideIndex) => {
                    return (
                        <div 
                            key={slideIndex} 
                            style={dotStyles} 
                            onClick={() => goToSlide(slideIndex)}
                        >
                            &bull;
                        </div>
                    )
                })}
            </div>
        </div>
    )
}