import React from 'react';
import CartTotal from './CartTotal';


// utube: 4:38,4:46-till decrement. export default func
const CartItem = ({item,value}) => {
    const{id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        
        <div className="row my-3 text-capitalize text-center">
            
            {/* <div className="container-fluid pr-5 pl-5 pb-5 mb-5">
                <Stepper/> 
            </div> */}
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} 
                style={{width:'5rem', height:'5rem'}} 
                className="img-fluid"
                alt=""
             />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>
                ${price}
            </div>
            <div className="col- mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span 
                    className="btn-decrement btn btn-black mx-1 my-auto" 
                    style={{fontSize:'8px'}} 
                    onClick={()=>decrement(id)}>
                        ➖
                    </span>
                    <span className="btn btn-black mx-1">
                        {count}
                    </span>
                    <span 
                    className="btn-increment btn btn-black mx-1 my-auto" 
                    style={{fontSize:'8px'}} 
                    onClick={()=>increment(id)}>
                        ➕
                    </span>
                </div>
              </div>     

              <div className="col-10 mx-auto col-lg-2">
                  <div onClick={()=>removeItem(id)}>
                       <h4 className="btn-bin" style={wasteBin}> 🗑 </h4>
                   </div>
               </div>
                <div className="col-10 mx-auto col-lg-2 mb-5 pb-5">
                    <strong>item total : $ {total}</strong>
                </div>
                <div className="w-100">
                    <CartTotal value={value}/>
                </div>
                
                
        </div>
                                  
    )
}
const wasteBin ={
    color:'red',
    fontSize:'28px',
    fontWeight:'bold',
}


export default CartItem



