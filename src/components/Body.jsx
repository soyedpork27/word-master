import React, { useContext } from 'react';
import Header from './Header';

import '../css/common.css';

// import Outlet
import {Outlet} from 'react-router-dom';

import { SkinContext } from '../context/SkinContext';


function Body({data, deleteDay}) {

  const {skin} = useContext(SkinContext);

  const bgCol = [`#F8AAFF`, `#fff`, `#FFADB7`, `#FECC54`];


  const style={
    background : {
      backgroundColor : `${bgCol[skin-1]}`
    }
  }

  return (


        <div className='App-wrap'>
          <Header data={data} deleteDay={deleteDay} />
          <Outlet />
          <div className='App-bg' style={style.background}>
            <img src={`${process.env.PUBLIC_URL}/images/skin/0${skin}/main_char.png`} alt="" />
          </div>
        </div>


  );
}




export default Body;