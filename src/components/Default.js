import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div style={pageContentContainer}>
                <h3 style={pageContent}> 
                    <span style={textContent}>
                        Page not found
                    </span> 
                         - Please click the <span style={textContent}>Menu</span> for Home Page
                </h3>
            </div>
        )
    }
}

const pageContentContainer = {
    marginTop: '50px',
    
}
const pageContent = {
    textAlign:'center',
    paddingBottom:'50px',
    wordSpacing: '6px',
}

const textContent={
    fontWeight: 'bold',
}