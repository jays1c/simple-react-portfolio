import React, {useState} from 'react'
import './Slider.css'
import { Zoom } from 'react-reveal'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import '../ProjectContainer/ProjectContainer.css'
import '../Projects/Projects.css'



export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <Zoom effect="fadeInUp" duration={2200}>
        <div className="container-slider">
            {dataSlider.map((obj, index) => (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={`${process.env.PUBLIC_URL  }/Imgs/img${index + 1}.png`} alt=""/>
                    </div>
                ))}
            <BtnSlider moveSlide={nextSlide} direction="next" />
            <BtnSlider moveSlide={prevSlide} direction="prev"/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                    <div onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                     />
                ))}
            </div>
        </div>
        </Zoom>


    )
}