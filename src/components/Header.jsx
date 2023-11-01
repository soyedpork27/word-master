import React, {useContext, useState} from 'react';

import '../css/header.css';

// import Link
import {Link, useNavigate} from 'react-router-dom';
import { SkinContext } from '../context/SkinContext';

function Header({data, deleteDay}) {

  // useContext 에서 skin 정보를 받아옴
  const {skin, updateSkin} = useContext(SkinContext);

  // 스킨 정보에 따라 배열의 값을 사용하기 위해 변수 선언
  const bgCol = [`#F8AAFF`, `#fff`, `#FFCED2`, `#FFE093`];

  // context 로 받아온 skin 을 스테이트로 관리
  const [selectedSkin , setSelectedSkin] = useState(skin);

  // 화면 이동을 위해 useNavigate 사용
  const navigation = useNavigate();

  // gnb 슬라이드 토글 스테이트
  let [toggle, setToggle] = useState(0);

  let [deleteToggle, setDeleteToggle] = useState(false)

  let style = {
    gnb : {
      left : toggle===1?`calc(100% - 260px)`:`100%`,
      backgroundColor : `${bgCol[skin-1]}`
    }
  }

  // 뒤로가기 버튼 클릭 시 이전 화면으로 이동
  const goToPrev = () =>{
    navigation(-1);
  }

  const [modToggle, setModToggle] = useState(false);


  // 버튼 클릭 시 모달 닫히기
  const handleModBtn = () => {
    setModToggle(true);
    setToggle(false);
  }

  // 버튼 클릭 시 토글 유지 후 차시 삭제 아이콘 뜨기
  const handleDay = (id) => {
    deleteDay(id);
  }

  // skin submit 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    updateSkin(selectedSkin);
    setModToggle(false);
  }

  return (
    <div className='header_wrap'>
      <header>
        <div className='arrow_box' onClick={goToPrev} ><img src={`${process.env.PUBLIC_URL}/images/arrow_light.svg`} alt="뒤로가기 버튼" title='클릭 시 뒤로가기' /></div>
        <h1 className='logo'><Link to={`/`}><img src={`${process.env.PUBLIC_URL}/images/skin/0${skin}/home.png`} alt="메인 이미지" className='home_img' /></Link></h1>
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

          <button onClick={handleModBtn} className='skin-reset_btn'>스킨 바꾸기</button>

          <ul className='gnb'>

            {data.map((item)=>(<li key={item.id} className='one_depth'><Link to={`/main/${item.id}/1`} state={0} className="gnb_link" onClick={()=>(setToggle(false))} >{item.id} 차시</Link>{deleteToggle&&<button type='button' className='day_delete_img' onClick={()=>(handleDay(item.id))} ><img src={`${process.env.PUBLIC_URL}/images/trash.svg`} alt="" /></button>}</li>))}

          </ul>

          <button onClick={()=>(setDeleteToggle(prev=>(!prev)))} className='skin-reset_btn'>차시 {deleteToggle?`수정 완료`:`삭제`}</button>

        </nav>

        {modToggle &&
        <>
          <div className='skin_modal_wrap'>
            <form onSubmit={handleSubmit}>
            <div className='skin_modal'>
              <h3 className='skmod_title'>스킨을 정해주세요</h3>

              <ul className='skmod_ul'>

                <li className='skmod_li'>
                  <input type="radio" id="skin-01" className='skin_chk' name="skin_chk" checked={selectedSkin===1} onChange={()=>setSelectedSkin(1)}/>
                  <label htmlFor="skin-01" className='skin_label'>
                    Kuromi
                    <div className='skin_selected'><img src={`${process.env.PUBLIC_URL}/images/skin/01/select.png`} alt="" /></div>
                  </label>
                </li>

                <li className='skmod_li'>
                <input type="radio" id="skin-03" className='skin_chk' name="skin_chk" checked={selectedSkin===3} onChange={()=>setSelectedSkin(3)}/>
                  <label htmlFor="skin-03" className='skin_label'>
                    Loopy
                    <div className='skin_selected'><img src={`${process.env.PUBLIC_URL}/images/skin/03/select.png`} alt="" /></div>
                  </label>
                </li>

              </ul>

              <button type='submit' className='skin-reset_btn'>수정하기</button>
              <button type='button' className='skin-reset_btn' onClick={()=>(setModToggle(false))}>취소</button>
            </div>
            </form>
          </div>
        </> }

    </div>
    );
}

export default Header;