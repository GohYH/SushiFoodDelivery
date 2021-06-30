import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CartTotal extends Component {

    render() {
        const {cartSubTotal, cartTax, cartTotal, clearCart} = this.props.value;

        return (
            <React.Fragment>
                <div className="text-right pr-5">

                    <Link to="/cart">
                     <button
                        className="btn-clearCart btn btn-outline-danger mb-3"
                        style={{background:'var(--primary-color)', color:"white"}}
                        
                        onClick={()=>clearCart()}
                        >
                            Clear Cart
                        </button>
                    </Link>

                    <h6>
                        <span>SubTotal:</span>
                    <strong>$ {cartSubTotal}</strong> 
                    </h6>
                    <h6>
                    <span>5% Tax:</span>
                    <strong>$ {cartTax}</strong> 
                    </h6>
                    <h6 className="pb-5">
                    <span>Total:</span>
                    <strong>$ {cartTotal}</strong> 
                    </h6>
                </div>
            </React.Fragment>
        )
    }
}
