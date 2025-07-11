import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder= ()=>{
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>


        <input type='text' placeholder='Email Address' />
        <input type='text' placeholder='street' />
        <div className='multi-feilds'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone' />
        <div className='place-order-right'>
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
        <button >PROCEED TO PAYMENT</button>
        </div>
        </div>
          
        </div>
        </div>
      </div>
      
    </form>



  )
}

export default PlaceOrder
