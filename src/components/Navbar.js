import React, { Component } from 'react';
import logo from '../logo.png'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
                <nav style={NavbarWrapper} className="navbar navbar-expand-lg navbar-dark">
                    <div className="navbar-brand" href="">
                        <img src={logo} alt="logo" />
                    </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h3 className="ml-auto" style={navTitle}>Japanese Sushi Delivery</h3>
                        <ul className="navbar-nav ml-auto">
                            <Link to="/" className="nav-item mr-5">
                                <h2 style={NavText} className="nav-link">Menu</h2>
                            </Link>
                            <Link to="/cart" className="nav-item ml-5 mr-4">
                                <button style={navCart} className="nav-link">
                                    🛒
                                </button>
                            </Link>
                        </ul>
                    </div>
                 </nav>
        )
    }
}
const NavbarWrapper={
    backgroundColor: 'var(--primary-blue)',
    borderBottom:'8px solid var(--highlight-blue)',
    
}

const navCart ={
    fontSize:'28px',
    border:'none',
    backgroundColor:'transparent',
}
const NavText ={
    color: 'var(--highlight-blue)',
} 
const navTitle = {
    fontWeight: 'bold',
    fontSize:'3.3vw',
    opacity:0.8,
    color: 'var(--highlight-blue)',
}

