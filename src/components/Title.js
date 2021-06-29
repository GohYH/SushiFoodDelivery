import React from 'react'
// use by productlist.js
export default function Title({name, title}) {
    return (
        <div className='row'>
            <div className="col-10 mx-auto my-2">
                <h2 style={titleText}>
                    {name} <strong>{title}</strong>
                </h2>

            </div>
            
        </div>
    )
}


const titleText={
    textTransform:'capitalize',
    fontWeight:'bold',
    textAlign:'center'
}
