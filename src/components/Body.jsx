import React from 'react';
import Header from './Header';

import '../css/common.css';

// import Outlet
import {Outlet} from 'react-router-dom';


function Body({data}) {



  const bgCol = `#F8AAFF`;

  const style={
    background : {
      backgroundColor : `${bgCol}`
    }
  }

  return (
    <div className='App-wrap'>
      <Header data={data} />
      <Outlet />
      <div className='App-bg' style={style.background}>
        <img src={`${process.env.PUBLIC_URL}/images/skin/01/main_char.png`} alt="" />
      </div>
    </div>
  );
}




export default Body;