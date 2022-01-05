import React from 'react'
import {
    Routes,
    Route
    
  } from "react-router-dom";
  import DBdeatils from '../layouts/DataBase/DatabaseDetails/DBdeatils';
  import DBException from '../layouts/DataBase/DBException/DBException';
import Exceptions from '../layouts/DataBase/Exceptions/Exceptions';
import DBSource from '../layouts/DataBase/Source/DBSource';
function DataBaseRouting() {
    return (
        <div>
        <Routes>
        <Route path="DBdeatils" element={<DBdeatils/>}/>
        <Route path="DBException" element={<DBException/>}/>
        <Route path="Exceptions" element={<Exceptions/>}/>
        <Route path="DBSource" element={<DBSource/>}/>



       </Routes>
     
        </div>
    )
}

export default DataBaseRouting
