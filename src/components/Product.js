import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import styled from 'styled-components';


export default class Product extends Component {
    render() {
        // pass in props 
        const{id, title, img, price, inCart} = this.props.product;

        return (
            // note: productList.js, before <ProductConsumer> must add className="row" for below bootstrap col to work 
            <ProductWrapper className={"col-10 col-md-6 col-lg-4 mx-auto my-3"}>  
                 <div className={"card"}>  
                        <ProductConsumer className={"card-text"}>
                            {value=>{
                                return(
                            <div className={"img-container p-5"}
                                    onClick={()=>value.handleDetail(id)}
                                >
                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top" />
                                </Link>

                            <button className={"cart-btn"}
                            disabled={inCart ? true: false}
                            onClick={()=>{
                                value.addToCart(id)
                                value.openModal(id)
                            }}
                            
                            >
                                {inCart ? (<p disabled>in Cart</p>) : (<p>🛒</p>)}
                            </button>
                            </div>
                        )
                    }}
                    </ProductConsumer>    

                    <div style={{display:'flex'}} className={"card-footer justify-content-between"}>
                        <p style={{flex:'0.5'}} className={"align-self-center mb-0 flex:0.5"}>
                            {title}
                        </p>
                        <p style={{flex:'0.5'}} className={"font-italic mb-0 flex:0.5"}> <span className="mr-1">$</span>
                            {price} 
                        </p>
                        
                    </div>
                 </div>
            
            </ProductWrapper>
        )
    }
}


const ProductWrapper = styled.div`

    .card{
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background:transparent;
        border-top:transparent;
        transition: all 1s linear;
    }
    &:hover{
        .card{
            border:0.04rem solid rgba(0,0,0,0.2);
            box-shadow; 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background:rgba(247,247,247);
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform:scale(1.2);
    }
    .cart-btn{
        // .img-container set to relative as reference
        position: absolute;
        bottom:0;
        right:0;
        padding:0.2rem 0.4rem;
        border:none;
        font-size: 1.4rem;
        border-radius:0.5rem 0 0 0;
        // shift to hide from view
        transform: translate(100%, 100%);
        transition: all 1s ease-in-out;
        background: cyan;
    }
    .img-container:hover .cart-btn{
        // shift to view
        transform: translate(0,0);
        transition: all 0.7s linear;
    }
    .cart-btn:hover{
        background: var(--highlight-blue);
        cursor: pointer;
    }
    img{
        display:block;
        min-width: 200px;
       
    }
  .container-fluid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        margin: 0 auto;
  }
`

