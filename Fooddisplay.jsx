import React, { useContext } from 'react'
import './fooddisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'
const Fooddisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='food_display' id='food_display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
          {food_list.map((item,index)=>{
            {console.log(category,item.category);}
            if(category==="All"|| category===item.category){
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>}
          })}
        </div>

      
    </div>
  )
}

export default Fooddisplay
