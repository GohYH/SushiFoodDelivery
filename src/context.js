import React, { Component} from 'react';
import{storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        // previous it was storeProducts, when start setProducts chg to []
            products: [],
            detailProduct: detailProduct,
    // addToCart func.To do setup for cart need to temp set cart:storeProducts. when cartItem styling done set back to cart=[]
    // set u chg back to [], the cart page will not show any product when u access it
            cart: [],
    // during setup:true, so the modal can be viewed modal-1
            modalOpen: false,
            modalProduct:detailProduct,
            cartSubTotal:0,
            cartTax:0,
            cartTotal:0
    }

    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts= [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts};
        });
    };

    getItem = id => {
    const product = this.state.products.find(item => item.id===id);
    return product;
};

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() =>{
            return {detailProduct: product}
        })
    };

addToCart = id => {
    // tempProducts is set as [] in setProducts func
    let tempProducts =[...this.state.products];
    // call getItem func to get its id from products array
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    // chg the array data - refer to data.js array obj for more info
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
        return {products: tempProducts,
            cart:[...this.state.cart, product],
            detailProduct: {...product}
        };
// callback funct to check functionality during nitial setup
// },()=>{console.log(this.state)});
// after addTotal func write this statement

}, this.addTotal);

};

// modal-2
openModal = id => {
    const product = this.getItem(id);
    this.setState(()=>{
        return {modalProduct: product, modalOpen:true}
    })
}
closeModal = () =>{
    this.setState(() => {
        return {modalOpen: false}
    })
}

// Cart: after addTotal do increment func.cartitem.js onClick +
increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.id===id)

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(()=> {return{cart:[...tempCart]}},()=>{this.addTotal()})
};

decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=> item.id ===id)

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count-1;

    if(product.count === 0){
    // call func - note: removeItem func must be available.
        this.removeItem(id);
    } else {
        product.total = product.count * product.price;
        this.setState(
            ()=>{
                return {cart:[...tempCart]};
            },
            ()=>{
                this.addTotal();
            }
        );
    }
    };

// removing single item when click on wastebin
removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart =[...this.state.cart];
    tempCart = tempCart.filter(item => item.id !==id);
  
    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    // set the incart to original false
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
  
    this.setState(()=>{
      return {
        cart:[...tempCart],
        products:[...tempProducts]
      }
    },()=>{
      this.addTotal();
    })
  };
  
// cartTotal.js func> then: ProductProvider add to this.state.clearState
clearCart = () => {
    this.setState(() =>{
      return {cart: [] };
  
      },() => {
        this.setProducts();
        this.addTotal();   
      }
      
    );
  };
  

// cart step: set cart state> Cart.js> Cartcolumns.js> CartList.js>CartTotal.js
//1.after cartTotal.js styling done, write func. 2.addTotal() to addTocart func callback
// this func is not tie to any button click, it does auto cal when item addToCart
addTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.05;
    const tax = parseFloat(tempTax.toFixed(2));
 
    const total = parseFloat((subTotal + tax).toFixed(2));

    this.setState(()=>{
        // these3 obj hv passed in state & set value to 0
        return {
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        }
    })
}

// modal-3> Modal.js
    render() {
        return (
            <ProductContext.Provider 
                value={{
                        ...this.state,
                        handleDetail: this.handleDetail,
                        addToCart: this.addToCart,
                        openModal: this.openModal,
                        closeModal: this.closeModal,
                        increment: this.increment,
                        decrement: this.decrement,
                        clearCart:this.clearCart,
                        removeItem: this.removeItem
                }}       
            >
            
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };