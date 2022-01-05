import React from 'react'
import ReportBtn1 from "../../ReportingPageComponents/Button/ReportBtn1"
function TableBottom() {

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className=' d-flex'>
                            <div className=''><ReportBtn1
                                title="Previous"
                            /></div>
                            <div className=''><ReportBtn1
                                title="Next"

                            /></div>
                        </div>
                    </div>

                    <div className='col-sm-6'></div>
                    <div className=' col-sm-2'> <p>page <span>1</span> of <span>10</span></p></div>


                </div>
            </div>
        </div>
    )
}

export default TableBottom
