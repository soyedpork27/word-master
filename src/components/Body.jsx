import React, { useContext } from 'react';
import Header from './Header';

import '../css/common.css';

// import Outlet
import {Outlet} from 'react-router-dom';

import { SkinContext } from '../context/SkinContext';


function Body({data, deleteDay}) {

  const {skin} = useContext(SkinContext);

  


  const style={
    background : {
      backgroundColor : `${skin.skinCol}`
    }
  }

  return (


        <div className='App-wrap'>
          <Header data={data} deleteDay={deleteDay} />
          <Outlet />
          <div className='App-bg' style={style.background}>
            <img src={`${process.env.PUBLIC_URL}/images/skin/${skin.skinId}/main_char.png`} alt="" />
          </div>
        </div>


  );
}




export default Body;