import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import { UserContext } from "../App";
import Preview from "./Preview";
import pictureOne from "../images/image-product-1-thumbnail.jpg"
import pictureTwo from "../images/image-product-2-thumbnail.jpg"
import pictureThree from "../images/image-product-3-thumbnail.jpg"
import pictureFour from "../images/image-product-4-thumbnail.jpg"

const SliderImages = ()=> {

      const [imageChange, setImageChange] = useState(0)
      
      const imagesArray = [
        {
            name: "one",
            path: pictureOne
        },
        {
            name: "two",
            path: pictureTwo
        },
        {
            name: "three",
            path: pictureThree
        },
        {
            name: "four",
            path: pictureFour
        }
      ]

      const mainImage = {
        backgroundImage: `url(${imagesArray[imageChange].path})` 
      }

      
      const handlePreviewOne = ()=> setImageChange(0)
      const handlePreviewTwo = ()=> setImageChange(1)
      const handlePreviewThree = ()=> setImageChange(2)
      const handlePreviewFour = ()=> setImageChange(3)

      const slideRight = ()=> {
        if(imageChange == imagesArray.length - 1) {
            setImageChange(0)
        }else {
            setImageChange(prev => prev + 1)
        }
      }
      
      const slideLeft = ()=> {
        if(imageChange <= 0) {
            setImageChange(imagesArray.length - 1)
        }else {
            setImageChange(prev => prev - 1)
        }
      }

      const propContext = useContext(UserContext)
    return(
        <motion.div 
            initial={{y: "-100vh", x: "-15vw"}}
            animate={{y: 0, x: "-15vw"}}
            exit={{y: "100vh", x: "-15vw"}}
            className="showcase-cont slider"
        >
            <TfiClose id="delete" onClick={()=> propContext.setIsSlider(prev => prev = false)}/>
            <div className="img-box flexbox">
                <span onClick={slideLeft} className="arrow-desktop arrow-desktop-left" >
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
                </span>
                <div className="main-image" style={mainImage}>
                    {/* MAIN IMAGE */}
                </div>
                <span onClick={slideRight} className="arrow-desktop arrow-desktop-right">
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
                </span>
            </div>
            <div className="preview-cont">
                <Preview image={imagesArray[0].path} handleClick={handlePreviewOne} />
                <Preview image={imagesArray[1].path} handleClick={handlePreviewTwo} />
                <Preview image={imagesArray[2].path} handleClick={handlePreviewThree} />
                <Preview image={imagesArray[3].path} handleClick={handlePreviewFour} />
            </div>
        </motion.div>

    )
}
export default SliderImages