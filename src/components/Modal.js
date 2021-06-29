import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// this page: back to store button is disabled
const Modal = () => {
    return (
        <ProductConsumer>
            {(value) =>{
                
                const {img, title, price} = value.modalProduct;
                // modalOpen: true or false
                const {modalOpen, closeModal} = value;
                if(!modalOpen){
                    return null;
                } else {
                    return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 col-md-6 col-lg-4 mx-auto p-4 text-center">
                                        <h4 className="modalTitle">Item Added to Cart</h4>
                                        <img className="img-fluid" src={img} alt="productModal" />
                                        <h5 className="pt-3">{title}</h5>
                                        <h5>${price}</h5>

                                        {/* <Link to="/">
                                            <button
                                            className="btn"
                                            onClick={()=>closeModal()}
                                            >
                                                Store
                                            </button>
                                        </Link> */}
                                        <Link to="/cart">
                                            <button
                                            className="btn"
                                            onClick={()=>closeModal()}
                                            >
                                                Cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )

                }

              }}

        </ProductConsumer>
            
        
    )
}
const ModalContainer = styled.div`
position: fixed;
top:0;
bottom:0;
left:0;
right:0;
display: flex;
// this shift content in the box to center
justify-content: center;
align-items: center;


#modal{
    background-color:var(--base-color);
    border-radius: 5px;
    box-shadow: var(--shadow);
}
.modalTitle{
    text-shadow: var(--text-shadow);

}
`
export default Modal


