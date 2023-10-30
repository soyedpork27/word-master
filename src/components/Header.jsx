import React, {useState} from 'react';

import '../css/header.css';

// import Link
import {Link, useNavigate} from 'react-router-dom';

function Header({data}) {

  const navigation = useNavigate();

  let [toggle, setToggle] = useState(0);

  let style = {
    gnb : {
      left : toggle===1?`calc(100% - 260px)`:`100%`
    }
  }

  const goToPrev = () =>{
    navigation(-1);
  }

  return (
    <div className='header_wrap'>
      <header>
        <div className='arrow_box' onClick={goToPrev} ><img src={`${process.env.PUBLIC_URL}/images/arrow_light.svg`} alt="뒤로가기 버튼" title='클릭 시 뒤로가기' /></div>
        <h1 className='logo'><Link to={`/`}>홈</Link></h1>
        <div className='gnb_toggle_btn' onClick={()=>(setToggle(prev =>{
          if(prev===1){
            return 0;
          }else{
            return 1;
          }
        }))}>
          <img src={`${process.env.PUBLIC_URL}/images/${toggle?`exit_light.svg`:`toggle_light.svg`}`} alt="" />
        </div>


      </header>

      <nav className='gnb_box' style={style.gnb}>
          <ul className='gnb'>

            {data.map((item)=>(<li key={item.id}><Link to={`/main/${item.id}/1`} state={0} className="gnb_link" onClick={()=>(setToggle(false))} >메뉴{item.id}</Link></li>))}

          </ul>

        </nav>

    </div>
    );
}

export default Header;