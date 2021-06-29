import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// utube: 3:00
export default class Details extends Component {
    render() {
        return (

            <ProductConsumer>
                {value => {
                    const{id, img, info, price, title, inCart} = value.detailProduct;

                    return (
                        
                        <ProductWrapper className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1 className="text-muted font-weight-bold">Food Details</h1>
                            
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* product description */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>{title}</h2>
                                    {/* <h4 className="tex-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4> */}
                                    <h4>
                                        <strong>
                                            price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Some info about the food:
                                    </p>
                                    <div className="text-muted lead">
                                        {info}
                                    </div>
                                    <Link to="/">
                                         <button className="btn text-capitaize mr-4 mt-5" >
                                             back to product
                                        </button>
                                     </Link>
                                    
                                    <Link to="/cart">
                                        <button 
                                        className="btn text-capitaize mt-5" 
                                        cart
                                            // if item is inCart then true to disable the click       
                                        disabled={inCart? true:false}
                                            // activate func in context.js
                                        onClick={()=>{
                                            value.addToCart(id);
                                            // value.openModal(id);
                                        }}
                                        >
                                            {/* if true display inCart, otherwise display Add to cart */}
                                        {inCart ? "inCart":"Add to cart"}
                                        </button>
                                    </Link>
                                    </div>
                                    </div>
                                </ProductWrapper>
                                );
                            }}
                        </ProductConsumer>
        )
    }
}

const ProductWrapper = styled.div`
.detail-title{
    text-shadow: var(--text-shadow);
}

.detail-wrapper{
    display:flex;
    flex-direction: columns;
    flex:1;

}
detail-child-1{
    flex:0.5;
}
detail-child-2{
    flex:0.5;
}
// utube 3:10
.btn-details {
    display: inline-block;
    // className:Cart pass in props to change button color when clicked & added into cart
    border-color: ${props => props.cart ? "var(--primary-color)" : "var(--btn-border)"};
    color: ${prop => prop.cart ? "var(--primary-color)" : "var(--btn-border)"};
    background-color: ${prop => prop.cart ? "var(--primary-color)" : "var(--btn-border)"};
    
    border: 0.2px solid var(--base-color);
    color: darkslategray;
    background-color: transparent;
    
    padding: 4px 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }
  
  .btn-details:hover{
    background-color: darkslategray;
    color: var(--base-color);
  
  }
  
  .btn-details:focus {
    outline: none;
  }
  
  .btn-details:active {
    transform: scale(0.98);
  }
  
  .btn-details-block {
    display: block;
    width: 100%;
  }
`

