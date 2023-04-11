import React, { useState, createContext } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header"
import ShoeShowcase from "./components/ShoeShowcase"
import ShoeDescription from "./components/ShoeDescription"
import ImageONe from "../src/images/image-product-1-thumbnail.jpg"
import Mobilemenu from "./components/MobileMenu";


export const UserContext  = createContext()

function App() {
  
  const shoeInfo = {
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125.00,
    discount: 50,
    oldPrice: 250.00 
  }
  
  const [itemCount, setItemCount] = useState(0)

  const [cartItems, setCartItems] = useState(0)  /* will be updated only when add to cart is clicked */

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) 

  const [isSlider, setIsSlider] = useState(false) /* related to showCase component */

  const menuElements = ["Collections", "Men", "Women", "About", "Contacts"]

  const updateCartItems = ()=> {
    setCartItems(prev => prev + itemCount)
  }

  const addItem = ()=> {
    setItemCount(prev => prev + 1)
  }

  const subtractItem = ()=> {
    if(itemCount == 0) {
      setItemCount(0)
    } else {
      setItemCount(prev => prev - 1)
    }
  }

  const emptyCart = ()=> {
    setCartItems(null)
  }

  return (
    <div className="App" style={{background: isSlider ? "rgba(7, 7, 7, 0.499)": "inherit"}}>
      <UserContext.Provider value={{itemCount, cartItems, emptyCart, addItem, subtractItem, updateCartItems, isSlider, setIsSlider}} >   
        <Header 
          cartItems={cartItems}
          shoeTitle={shoeInfo.title}
          price={shoeInfo.price}
          isMobileOpen={isMobileMenuOpen}
          toggleMobile={setIsMobileMenuOpen}
          menuElements={menuElements}
        />
        <hr/>
        <main>
          <ShoeShowcase
            imageProduct={ImageONe}
            isSlider={isSlider}
            toggleSlider={setIsSlider}
          />
          <ShoeDescription
            company={shoeInfo.company}
            title={shoeInfo.title}
            description={shoeInfo.description}
            price={shoeInfo.price}
            discount={shoeInfo.discount}
            oldPrice={shoeInfo.oldPrice}
          />
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/Paul-Royce">Paul</a>.
        </div>
        </main>
      </UserContext.Provider >
      <AnimatePresence 
        initial={false}
        onExitComplete={true}
      >
        {isMobileMenuOpen && <Mobilemenu mobilemenu={isMobileMenuOpen} toggleMobileMenu={setIsMobileMenuOpen} menuElements={menuElements} /> }
      </AnimatePresence>
    </div>
  )
}

export default App;
