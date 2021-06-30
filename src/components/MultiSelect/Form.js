import { FormHelperText } from '@material-ui/core'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'


// this page link to stepper.js - for 1st page Menu html> navbar: self collection
export default class Form extends Component {
    constructor(props){
        super(props)
            this.state ={
                username:'',
                block:'',
                unit:'',
                streetname:'',
                postalcode:'',
                contact:'',  
              

            }
    }

    handleUsername = (e) =>{
        this.setState({
            username:  e.target.value
        })
    }
    handleBlock =(e) => {
        this.setState({
            block: e.target.value
        })
    }
    handleUnit =(e)=>{
        this.setState({
            unit: e.target.value
        })
    }
    handleStreetname = (e) => {
        this.setState({
            streetname: e.target.value
        })
    }
    handlePostalcode = (e) => {
        this.setState({
            postalcode: e.target.value
        })
    }
    handleContact = (e) =>{
        this.setState({
            contact:e.target.value
        })
    }

    handleSubmit = (e) => {
        
        alert(`${this.state.username},\n ${this.state.block},\n ${this.state.unit},\n ${this.state.streetname},\n ${this.state.postalcode},\n ${this.state.contact}, \n Click Next to continue`)
        e.preventDefault() 
      
    }
    render() {
               
        return (
            // bootstrap: display flex @ large viewport, resume to 1 col display when below it.
            <div className="d-lg-flex mx-0 mx-md-5 px-0 px-md-3">
                    <form 
                    onSubmit={this.handleSubmit} 
                    action="POST" method="GET" 
                    className="mt-5 text-left"
                    style={formTop}
                    >
                    
                    <fieldset className="mx-3">
                        <label>Your Name</label><br></br>
                            <input type='text' 
                            required
                            className="px-2 py-1 mb-2" 
                            style={input}
                            placeholder="e.g. Alan" value={this.state.username} onChange={this.handleUsername} 
                            /><br></br>
                    
                        <label>Block</label><br></br>
                            <input
                            className="px-2 py-1 mb-2" 
                            style={input}
                            type='text' placeholder="e.g. 22A" maxlength="10" value={this.state.block} onChange={this.handleBlock} required
                            /><br></br>
              
                        <label>Unit</label><br></br>
                            <input
                            className="px-2 py-1 mb-2" 
                            style={input}
                            type='tel' placeholder="06-1225" maxlength="7" value={this.state.unit} onChange={this.handleUnit} required
                            /><br></br>
               
                        <label>Street Name</label><br></br>
                            <input type='text' 
                            required
                            className="px-2 py-1 mb-2" 
                            style={input}
                            placeholder="e.g. Ang Mo Kio, Stree 13" value={this.state.streetname} onChange={this.handleStreetname} 
                            /><br></br>
                            
                            <label>Postal Code</label><br></br>
                            <input
                            className="px-2 py-1 mb-2" 
                            style={input}
                            type='tel' placeholder="123456" pattern="[0-9]{6}" maxlength="6" value={this.state.postalcode} onChange={this.handlePostalcode} required
                            /><br></br>

                        <label>Contact number</label><br></br>
                            <input
                            className="px-2 py-1 mb-2" 
                            style={input}
                            type='tel' placeholder="12345678" pattern="[0-9]{8}" maxlength="8" value={this.state.contact} onChange={this.handleContact} required
                            /><br></br>
            
                            <button 
                            className="btn" 
                            style={formbtn}
                            type="">Confirm</button>
                    </fieldset>
                </form>
                <div style={formBottom} className="mx-auto">
                    <h5 style={personalDetails}>{this.state.username} <span style={innerText}>Personal Details</span></h5>
                    <div className="mx-4">
                            <p>{this.state.block}</p>
                            <p>{this.state.unit}</p>
                            <p>{this.state.streetname}</p>
                            <p>{this.state.postalcode}</p>
                            <p className="pb-3">{this.state.contact}</p>
                    </div>
                </div>
         </div>
        )
    } 
}

const formTop={
    width:'98%',
    marginRight:'30px',
}
const formBottom={
    marginTop:'80px',
    width:'98%',
    maxHeight:'420px',
    backgroundColor:'var(--base-color)',
}

const input = {
    width:'100%',
}

const formbtn = {
    marginTop:'20px',
    marginBottom:'40px',
    width: '100px',
}

const personalDetails = {
    marginTop: '20px',
    backgroundColor:'darkslategray',
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    padding:'8px',
    position: 'relative',
    top:'-20px',

}
 const innerText = {
     fontWeight:'normal',
     fontSize:'smaller',
 }