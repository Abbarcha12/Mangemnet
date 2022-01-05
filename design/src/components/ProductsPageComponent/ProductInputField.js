import React from 'react'
import {Input} from "antd"
import"./Brand/Brand.css"
function ProductInputField(Props) {
    return (
        <div>
            <Input placeholder={Props.placeh} className='placeh'/>
        </div>
    )
}

export default ProductInputField
