import React from 'react'
import {Button} from "antd"
import"./Button.css"
function CloseBtn(Props) {
    return (
        <div>
            <Button className='Close'><p>{Props.close}</p></Button>
        </div>
    )
}

export default CloseBtn
