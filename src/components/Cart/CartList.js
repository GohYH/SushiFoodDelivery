import React from 'react'
import CartItem from './CartItem';

// context.js addToCart func> cart:[...this.state.cart, product],
const CartList = ({value}) => {
    const{cart} = value
    return (
        <div className="container-fluid">
            
             {/* passing props to cartItem.js */}
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value} />
            })}
            
        </div>
    )
}

export default CartList

