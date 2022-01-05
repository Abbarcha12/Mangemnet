import React from 'react'
import CloseBtn from '../../components/ReportingPageComponents/Button/CloseBtn'
import Add from '../../components/All/Buttons/Add/Add'
import ProductName from '../../components/ProductsPageComponent/ProductName'
import {Input} from "antd"
import TextIcons from '../../components/AlternativePageComponent/TextIcons'
import {Link} from "react-router-dom"
import ProductSelect from '../../components/ProductsPageComponent/ProductSelect'
import SingleProfile from '../../components/All/ProfileIcon/singleProfile'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import ProductSubtable from '../../components/Table/ProductSubtable'
import DbEmail from '../../components/DbComponents/DbEmail'
import MainTiltle from '../../components/All/MianTiltle/MainTiltle'
const { Search } = Input;
const { TextArea } = Input;


function AddanSection() {
    return (
        <div>
            
        <div className='container mt-5'>
        <div className='row '>
        <div className=' d-flex justify-content-between '>
            <div>

                <MainTiltle
                    MainTiltle1="Create an Section"
                />
            </div>
            <div className='mt-3'>
                <Link to="/Dashborad/Slider"> <CloseBtn
                    close="Close"
                /></Link>
            </div>

        </div>

    </div>

    <div>
           <div className='container'>
           <div className='row'>

           <div className='col-md-7 mt-5'>
               <div className='row g-0'>
                   <div className='col-sm-3'>
                       <CloseBtn
                           close="Worldwide"
                       />
                   </div>
                   <div className='col-sm-2'>
                       <CloseBtn
                           close="UK"
                       />
                   </div>
                   <div className='col-sm-2'>
                       <CloseBtn
                           close="Europe"
                       />
                   </div>
                   <div className='col-sm-2'>
                       <CloseBtn
                           close="Middle East"
                       />
                   </div>
                  
               </div>
           </div>
           <div className='col-md-3'></div>
       </div>

           
           </div> 
           <div className='container mt-5'>
           <div className='row'>
           <div className=' d-flex col-md-4'>
           <CloseBtn 
           close="French version"/>
           <CloseBtn
           close="English version"/>

           </div>
           </div>
           </div>
           <hr/>
           <div className='mt-5'>
           <div className=' mt-3 mb-3 '>
           <DbEmail
               Number2="Name EN"  
               placeh="Untitled UI"
           />
           </div>
           <hr/>
   
           </div>
           <div className='row'>
           <div className='  d-flex justify-content-center mt-5 col-md-4'>
           <p>Product alternatives (17)</p>
           </div>
           <div className='col-md-2'>
           <div className=" Search mt-5 " > <Search placeholder=" search "  /></div></div>
           
           <div className='col-md-6 mt-5'>
           <ProductSubtable/>
           </div>
           </div>
           <hr/>
           <div className='row mt-4'>
           <div className='col-md-4'>
           <ProductName
           Name="Image Preview EN"
           />
           </div>
           <div className='col-md-8'>
           <div className='row'>
           <div className='col-md-3 mt-3'><SingleProfile /></div>
           <div className='col-md-9 upload text-center Badge p-3 mb-3'>
           <FileUploadIcon/><br/>
           <span><Link to="#">Click to upload</Link></span> <span>or drag and drop </span><br/><span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
           <div>
           <div></div>
           </div>
           </div>
           
           
           </div>
           </div>
           </div>
           <hr/>
           <div className='row'>
           <div className='col-md-3'>
           <ProductName
           Name="Text"
           />
           </div>
           <div className='col-md-6'>
           <div className='row'>
           <div className='col-md-4'>
           <ProductSelect
           sel="Normal text"
           />
           </div>
           <div className='col-md-8'>
           <TextIcons/>
           </div>
           </div>
           <div className='row'>
           <TextArea rows={16} />
           </div>
         
           </div>
           <div className='col-md-3'></div>

           </div>
        <div className='row'>
        <div className='col-md-9'>
        <div className=' mt-5 '  >
        <ProductName
        Name="Featured ?"
        />
        </div>
        </div>
        <div className='col-md-3 mt-5 '>
        <Add
        Add="Put it featured"
        />
        </div>
        
        </div>
           <hr/>
           <div className='row'>
           <div className='col-md-4'></div>
           <div className='col-md-4'></div>
           <div className='col-md-4 d-flex'>
            <div className='d-flex '>
            <div className='m-2'>
            <CloseBtn
            close="Save"
            />
            </div>
            <div className='m-2'>
            <Add
            Add="Publish"
            />
            </div>
            </div>
           
          
          
           </div>

           </div>
        </div>
    </div>
    </div>
    )
}

export default AddanSection
