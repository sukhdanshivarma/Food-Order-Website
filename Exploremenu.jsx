import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu array of dishes crafted with the finest ingedients and culinary expertise. Our mission is is to satisfy your cravings and elevate your dining experience</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'> 
                        <img className= {category===item.menu_name?"active":""}src={item.menu_image} alt=""/>
                        <p>{item.menu_name}</p>
                    </div>
                )
                
            })}
        </div>
      <hr/>
    </div>
  )
}

export default Exploremenu
