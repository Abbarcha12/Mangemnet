import React from 'react'
import { Layout } from 'antd';
import "../Dashborad/Dash.css";
import { Link } from "react-router-dom"
import GroupIcon from '@material-ui/icons/Group';
import Dash from '../../components/All/Dash/Dash';
// import Dash1 from "../../image/dashborad.png";
import FlagIcon from '@material-ui/icons/Flag';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import StorageIcon from '@material-ui/icons/Storage';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Routing from '../../Routing/Routing';
import "../Dashborad/Dash.css"
const { Sider, Content } = Layout;
function Dashborad() {
  return (


    <div>

      <Layout>
        <Sider>
          <div className='container text-white mt-5 p-2'>
            <div className='row mt-2'>
              <h6><span className='LOGO'>shukran</span><span className='backoffice'>.backoffice</span></h6>
            </div>
            <div className='row Dash mt-5'>
              <div className='col-md-12 Dash1'>
                <Link to="DashboradPage"> <Dash
                  icon={<GroupIcon />}
                  title="Dashborad"
                /></Link>
              </div>
              <Link to="Products"> <Dash
                icon={<StorageIcon />}
                title="Products"
              /></Link>
              <Link to="Categories"><Dash
              icon={<CheckBoxIcon />}
              title="Categories"
            /></Link>
             <Link to="Reporting"> <Dash
             icon={<FlagIcon />}
             title="Reporting"
           /></Link>
              
           <Link to="User">
           <Dash
                icon={<GroupIcon />}
                title="Users"
              />
           </Link>
              <Link to="Alternatives">
              <Dash
                icon={<GroupIcon />}
                title="Alternative"
              />
              </Link>
             <Link to="Slider"> <Dash
             icon={<GroupIcon />}
             title="Sliders"
           /></Link>
             <Link to="DataBase"> <Dash
             icon={<GroupIcon />}
             title="DBingrédients"
           /></Link>
            </div>
            <div className='row mt-5'>
              <hr />
            </div>
            <div className='row Dash'>
              <ArrowBackIosIcon />
            </div>



          </div>
        </Sider>
        <Layout>
          <Content>
          <Routing/>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Dashborad
