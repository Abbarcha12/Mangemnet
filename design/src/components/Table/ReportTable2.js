import React from 'react'
import Halal from '../All/Buttons/Status/Halal'
import Number1 from '../All/Number/Number'
import Name from '../All/Names/Name'
import DeleteIcon1 from '../All/DeleteIcon/DeleteIcon'
function ReportTable2() {
    return (
        <div>
            <div className='Tablepro table-responsive'>
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">
                                <Name
                                    Name1="Store ID"
                                />
                            </th>
                            <th scope="col">
                                <Name
                                    Name1="Date added"

                                />
                            </th>
                            <th scope="col">
                                <Name
                                    Name1="Status"

                                />
                            </th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className='even'>

                            <td><Number1
                                title="2345T43245TY5"
                            /></td>
                            <td><Number1
                                title="2345T43245TY5"
                            /></td>
                            <td><Halal /></td>


                            <td><DeleteIcon1 /></td>


                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReportTable2
