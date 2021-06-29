import React, {useState} from 'react'

const OrderConfirmation = () => {
    const[orderId, setorderId] = useState(0);
    const[isDisabledD, setisDisabledD] = useState(true);
    const[isSubmitid, setIsSubmitid] = useState(false);

    const orderidHandler = ({orderId}) => {
        
        var orderId = Math.floor(Math.random() * 1000000)
        
        setorderId(orderId)
        alert('Order ID:' + orderId  + '\n Your order has been received');
        
        setisDisabledD(true);
        setIsSubmitid(true);
    }

    return (
        <div style={orderIdContainer}>
           
            <button
                disabled={isDisabledD}
                style={btn}
                onClick={OrderConfirmation}
                >
               
                Confirm Order{isSubmitid && <span>🔒</span>}
            </button> 
            <h5 className={"mt-3"}>
                Order ID: {orderId}
            </h5>
            <h5>
                {isDisabledD && <span>Order Status: Received ✔</span>}
            </h5>

              
                    
        </div>
    )
}

const orderIdContainer = {
    width:'380px',
     fontSize:'17px',
}

const btn = {
    marginTop: '20px',
    width: '130px',
    backgroundColor:'darkSlategray',
    color:'white',
    borderRadius:'5px',
    paddingTop:'5px',
    paddingBottom:'5px',
  
  }

export default OrderConfirmation;