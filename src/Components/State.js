import React, { useState } from 'react'

function State() {
    const[age,setAge]=useState(0)
    return (

        <div>
            <input type='number'></input>
            <input type='number'></input>
        </div>
    )
}

export default State
