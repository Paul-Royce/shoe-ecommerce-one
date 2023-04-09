import React, {useState}from 'react'

const Preview = ({image, handleClick}) => {
  const [isPreviewClicked, setIsPreviewClicked] = useState(false)

  const active = ()=> {
    setIsPreviewClicked(prev => !prev )
    return handleClick() 
  }

  return (
    <div  style={{backgroundImage: `url(${image})`, border: isPreviewClicked? "3px solid salmon" : "none"}} className="preview" onMouseEnter={()=> active()}  onMouseLeave={()=> active()}></div>
  )
}

export default Preview