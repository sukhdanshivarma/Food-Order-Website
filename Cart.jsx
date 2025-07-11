import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   
  const{cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);

  const navigate= useNavigate();
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          console.log(item._id, cartItems[item._id]);
          if(cartItems[item._id]>0)
          {
            return(
              <div>
              <div key={index} className='cart-items-title cart-items-item'>
                
                <img src={item.image} alt=""/>

                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                 <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr/>
              </div>
            )
          }
          
        })}
        
    </div>
    <div className="cart-bottom">
      <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>Rs. {getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>Rs. {2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
               <p>Total</p>
               <p>Rs. {getTotalCartAmount()+2}</p>
          </div>
          <br/>
          </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          
        </div>
    <div className='cart-promocode'>
        <div>
          <p>If you have a promo code,enter it here</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='promo code'/>
            <button >Submit</button>
            </div>
          </div>
     </div>
        

      </div>
      </div>
    </div>
  )
}

export default Cart
