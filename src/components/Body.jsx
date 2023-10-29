import React from 'react';
import Header from './Header';

import '../css/common.css';

// import Outlet
import {Outlet} from 'react-router-dom';



function Body({data}) {


  return (
    <div className='App-wrap'>
      <Header data={data} />
      <Outlet />
      <div className='App-bg'>
        &nbsp;
      </div>
    </div>
  );
}




export default Body;