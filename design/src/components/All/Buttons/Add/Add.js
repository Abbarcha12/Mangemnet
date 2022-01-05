import React from 'react'
import { Button } from 'antd';
import "../SignIn/Sign.css"
import "../../../../Css/join.css"
function Add(Props) {
    return (
        <div>
            <Button className='Add'><p>{Props.Add}</p></Button>
        </div>
    )
}

export default Add
