import React from 'react';
import 'antd/dist/antd.css';
import "@material-ui/core"
import "@material-ui/icons"
import {
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login/login';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashborad from './layouts/Dashborad/Dashborad';
import "./App.css"
import DB100 from './layouts/DataBase/DB100';
import AddProduct1 from './layouts/Products/AddProductPage/AddProduct1';
import AddCategory from './layouts/Catagerios/AddCategory';
import AddanAlternative from './components/AlternativePageComponent/AddanAlternative';
import AddanArtical from './layouts/Slider/AddanArtical';
import AddanSection from './layouts/Slider/AddanSection';
import UserPage from './layouts/User/UserPage';
import ReportingErrorPage from './layouts/Reports/ReportingErrorPage';
import CommentValidation from './layouts/Reports/CommentValidation';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashborad/*" element={<Dashborad />} />
        <Route path="/Database/DB100/*" element={<DB100 />} />
        <Route path="/Products/Addproducts/*" element={<AddProduct1 />} />
        <Route path="/Categories/AddCategory/*" element={<AddCategory />} />
        <Route path="/Alternatives/*" element={<AddanAlternative />} />
        <Route path="/Slider/*" element={<AddanArtical />} />
        <Route path="/Slider/AddanSection" element={<AddanSection />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/ReportingErrorPage" element={<ReportingErrorPage />} />
        <Route path="/CommentValidation" element={<CommentValidation />} />

      </Routes>


    </div>
  );
}

export default App;
