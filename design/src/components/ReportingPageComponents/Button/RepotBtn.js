import React from 'react'
import "../../ReportingPageComponents/Button/ReportBtn.css"
import { Button } from 'antd'
// import ClearIcon from '@material-ui/icons/Clear';
export default function RepotBtn(Props) {
    return (
        <div>
            <Button className='ReportinBTn'><span  className="ReportBtn">{Props.title} <span className='ReportBtn'></span>{Props.icon}</span></Button>
        </div>
    )
}
