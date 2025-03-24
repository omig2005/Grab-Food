import React from 'react'
import NavBar from '../Components/NavBar'
import Category from '../Components/Category'
import Cart from '../Components/Cart'
// import FoodCard from '../Components/FoodCard'
import FoodItems from '../Components/FoodItems'
function Home() {
  return (
    <div>
     <NavBar/> 
    <Category/>
    <FoodItems/>
    <Cart/>

    </div>
  )
}

export default Home
