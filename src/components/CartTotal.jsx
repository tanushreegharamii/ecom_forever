import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const {currency, delevery_fee, getCartTotalAmount} = useContext(ShopContext)
  return (
    <>
    <div className='w-full'>
        <div className='text-2xl'>
            <Title title1={'CART'} title2={'TOTALS'}/>
        </div>

        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency}{getCartTotalAmount()}.00</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency} {delevery_fee}.00</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency} {getCartTotalAmount() === 0 ? 0 : getCartTotalAmount() + delevery_fee}.00</b>
        </div>
    </div>
    </>
  )
}

export default CartTotal
