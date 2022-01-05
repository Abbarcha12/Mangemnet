import React from 'react'
import "../../ReportingPageComponents/Button/ReportBtn.css"
import { Button } from 'antd'
// import ClearIcon from '@material-ui/icons/Clear';
export default function RepotBtn(Props) {
    return (
        <div>
            <Button className='ReportinBTn1'><span  className="ReportBtn1">{Props.title}</span><span className="ReportBtn">{Props.icon}</span></Button>
        </div>
    )
}
