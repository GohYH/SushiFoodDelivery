import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
// import CartTotal from './CartTotal';
import {ProductConsumer} from '../../context';
import Stepper from '../Stepper/Stepper';

export default class Cart extends Component {
    
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length > 0){
                            return (
                                <React.Fragment>
                                    <div>
                                        <Title name="your" title="order details" />
                                    </div>

                                    <div className="container-fluid pr-0 pl-0 pb-5 mb-5">
                                        <Stepper/> 
                                    </div>
                                    <CartColumns />
                                    <div>
                                        <CartList value={value} />
                                
                                    </div>
                                        {/* <CartTotal value={value}/>  */}
                                    
                                    </React.Fragment>
                            )

                        }else{
                            // if nothing is added to cart load this page
                            return <EmptyCart />
                        }
                    }}

                </ProductConsumer>

            </section>
        
        )
    }
}
