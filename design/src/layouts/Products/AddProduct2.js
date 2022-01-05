import React from 'react'
import { Input } from 'antd';
// import Productside1 from '../../components/ProductsPageComponent/Productside1'
import ProductLeftside from '../../components/ProductsPageComponent/ProductLeftside'
import ProductName from '../../components/ProductsPageComponent/ProductName'
import ProductSubtable from '../../components/Table/ProductSubtable';
import CloseBtn from '../../components/ReportingPageComponents/Button/CloseBtn'
import Add from '../../components/All/Buttons/Add/Add';
import ProductInputField from '../../components/ProductsPageComponent/ProductInputField';
import ProductSelect from '../../components/ProductsPageComponent/ProductSelect';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom"
import "../../Css/join.css"
import Badge1 from '../../components/DbComponents/Badge1';
import SingleProfile from '../../components/All/ProfileIcon/singleProfile';
import "../../Css/join.css"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Badge from '../../components/DbComponents/Badge';
// import ProductSubtable from '../../components/Table/ProductSubtable';
const { Search } = Input;


function AddProduct2() {
    return (
        <div>
            <div className='container mt-3'>
                <div className='d-flex'>
                    <Add
                        Add="Auto put it as Haram"
                    />
                    <CloseBtn
                        close="Remove Auto Mushbooh"
                    />
                </div>

            </div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='container'>
                            <div className='row'>  <ProductName
                                Name="Product Name"
                            />
                            </div>

                            <div className=''>
                                <ProductInputField
                                    placeh="olivia@untitledui.com"
                                />
                            </div>

                            <div className='row mt-3'>  <ProductName
                                Name="Category"
                            /></div>
                            <div className='row'>
                                <ProductSelect
                                    sel="Select Team Member"
                                />
                            </div>
                            <div className='row mt-3'>  <ProductName
                                Name="Brand"
                            /></div>
                            <div className='row'>
                                <ProductSelect
                                    sel="Select Team Member"
                                />
                            </div>
                            <div className='row mt-3'>  <ProductName
                                Name="Status"
                            /></div>
                            <div className='Close'>
                                <p><span>Hala</span>;<span>Mushooh</span></p>
                            </div>
                            <div className='d-flex'>
                                <div className='col-md-4'>
                                    <Badge1 />
                                </div>
                                <div className='col-md-4'></div>
                                <Badge1 />

                            </div>
                            <div className='row mt-4'>  <ProductName
                                Name="Source (because it’s without barcode)"
                            />
                            </div>

                            <div className=''>
                                <ProductInputField
                                    placeh="olivia@untitledui.com"
                                />
                            </div>
                            <div className='mt-2'><DeleteIcon /></div>
                            <div className='mt-2'><Link to="#">Add another source </Link></div>

                        </div>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-6'>
                    <div className="">
                    <div className='container'>
                        <div className='row'>
                            <ProductName
                                Name="Product photo"
                            />
                        </div>
                        <div className='row'>
                            <div className='col-md-3 mt-3'><SingleProfile /></div>
                            <div className='col-md-9 upload text-center Badge  mb-3'>
                                <FileUploadIcon /><br />
                                <span><Link to="#">Click to upload</Link></span> <span>or drag and drop </span><br /><span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
                                <div>
                                    <div></div>
                                </div>
                            </div>


                        </div>
                        <div className='row'>
                            <ProductName />
                        </div>
                        <div className='row '>
                            <div className=' Badge mt-3'>
                                <div className='d-flex'>
                                    <div className='col-md-2 m-3'><Badge /></div>
                                    <div className='col-md-2 m-3'> <Badge1 /></div>


                                </div>

                            </div>
                        </div>
                        <div className='row mt-3'>  <ProductName
                            Name="Nutriscore"
                        /></div>
                        <div className='row'>
                            <ProductSelect
                                sel="Nutriscore Number.4"
                            />
                            <div className='row mt-3'>  <ProductName
                                Name="Barcode number EAN"
                            /></div>
                            <div className=''>
                                <ProductInputField
                                    placeh="23432134565432"
                                />
                            </div>
                            <div className='row mt-3'>  <ProductName
                                Name="Calories (Kcal) par portion"
                            /></div>
                            <div className=''>
                                <ProductInputField
                                    placeh="1234"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                   
                </div>
</div>
            </div>
            <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className="col-md-2">

                        <ProductName
                            Name="Product alternatives (17)"
                        />
                    </div>
                    <div className="col-md-3">
                        <CloseBtn
                            close="Add a product as an alternative"
                        />
                        <Search placeholder=" " className='mt-3' />
                    </div>
                    <div className='col-md-7'>
                    <ProductSubtable/>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default AddProduct2
