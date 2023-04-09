import React, { useState, useEffect, useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import { UserContext } from '../App'
import Preview from './Preview'
import SliderImages from './SliderImages'
import pictureOne from "../images/image-product-1-thumbnail.jpg"
import pictureTwo from "../images/image-product-2-thumbnail.jpg"
import pictureThree from "../images/image-product-3-thumbnail.jpg"
import pictureFour from "../images/image-product-4-thumbnail.jpg"


function ShoeShowcase() {

  const mobile = 700
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  const imagesArray = [
    {
        name: "zero",
        path: pictureOne
    },
    {
        name: "one",
        path: pictureTwo
    },
    {
        name: "two",
        path: pictureThree
    },
    {
        name: "three",
        path: pictureFour
    }
  ]

  const [imageChange, setImageChange] = useState(0)

  const primaryImage = {
    backgroundImage: `url(${imagesArray[imageChange].path})`
  }

  const handlePreviewOne = ()=> setImageChange(0)
  const handlePreviewTwo = ()=> setImageChange(1)
  const handlePreviewThree = ()=> setImageChange(2)
  const handlePreviewFour = ()=> setImageChange(3)
  

  const increaseimagecount = ()=> imageChange == imagesArray.length - 1? setImageChange(0) : setImageChange(prev => prev + 1)

  const decreaseimagecount = ()=> {
    if(imageChange == 0) {
      setImageChange(imagesArray.length - 1)
    } else {
      setImageChange(prev => prev - 1)
    }
  }

  
  const propContext = useContext(UserContext)

  return (
    <div className="showcase-cont">
        <div onClick={()=> width > mobile ? propContext.setIsSlider(prev => prev = true): propContext.setIsSlider(prev => prev = false)} className="main-image" style={primaryImage} >
          <span className='arrow arrow-left' onClick={()=> decreaseimagecount()}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
          </span>
          {/* MAIN IMAGE */}
          <span className='arrow arrow-right' onClick={()=> increaseimagecount()}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
          </span>
        </div>
        <AnimatePresence initial={false} onExitComplete={true}>
          {propContext.isSlider && <SliderImages />}
        </AnimatePresence>
        <div className="preview-cont">
          {width > mobile && <Preview image={imagesArray[0].path} handleClick={handlePreviewOne} />}
          {width > mobile && <Preview image={imagesArray[1].path} handleClick={handlePreviewTwo} />}
          {width > mobile && <Preview image={imagesArray[2].path} handleClick={handlePreviewThree} />}
          {width > mobile && <Preview image={imagesArray[3].path} handleClick={handlePreviewFour} />}
        </div>
    </div>
  )
}

export default ShoeShowcase