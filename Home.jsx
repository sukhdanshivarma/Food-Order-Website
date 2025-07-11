import React, { useState,useContext } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Explore menu/Exploremenu'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
import Fooditem from '../../components/Fooditem/Fooditem'
import { StoreContext } from '../../context/StoreContext'
import Appdownload from '../../components/Appdownload/Appdownload'
import PlaceOrder from '../PlaceOrder/PlaceOrder'

const Home = () => {

  const [category,setCategory]= useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}/>
      <Fooditem category={category}/>
      <Appdownload/>
     
      <PlaceOrder/>
    </div>
    
  )
}

export default Home
