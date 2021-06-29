import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block mt-3">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <h6 style={cartHeader}>food</h6>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <h6 style={cartHeader}>name of food</h6>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <h6 style={cartHeader}>price</h6>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <h6 style={cartHeader}>quantity</h6>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <h6 style={cartHeader}>remove</h6>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                    <h6 style={cartHeader}>total</h6>
                    </div>
              </div>
            </div>
        

        )
    }
}

const cartHeader = {
    textTransform:'capitalize',
    fontWeight:'bold',

}
