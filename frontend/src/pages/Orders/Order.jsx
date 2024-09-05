import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext'

const Order = () => {

const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <form className='order'>
      <div className="order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="text" placeholder='Email Address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-field">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='province'/>
        </div>
        <div className="multi-field">
          <input type="text" placeholder='Zipcode'/>
          <input type="text" placeholder='country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="order-rigth">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <p>Deliver fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>

      </div>

    </form>
  )
}

export default Order