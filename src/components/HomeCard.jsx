import React,{useContext} from 'react';

import {Link} from 'react-router-dom';
import { SkinContext } from '../context/SkinContext';

function HomeCard({data}) {

  const {skin} = useContext(SkinContext);

  const progress = Math.floor((data.list.filter((item)=>(item.check===true)).length / data.list.filter((item)=>(item.word)).length) * 100);

  const style={
    progress : {
      width : `${(data.list.filter((item)=>(item.check===true)).length / data.list.filter((item)=>(item.word)).length) * 100}%`
    },
    progressImg : {
      // width : `${progress!==0?`32px`:`0px`}`
      width : `32px`
    }
  }

  console.log(data.list.filter((item)=>(item.check===true)).length);

  console.log(data.list.length);

  // console.log(typeof progress);

  return (
    <div className='home-card'>
      <article>
        <Link to={`/main/${data.id}/1`}>
          <h2>{data.id}차시</h2>
          <p>{data.list.filter((item)=>(item.word)).length}/20</p>

          <p>진행률 : {progress?progress:`0`}%</p>
          {/* <p>진행률 : {(data.list.filter((item)=>(item.check===true)).length / data.list.length) * 100}%</p> */}

          <div className='home-progress_bar'>
            <div className='progress' style={style.progress}>
              {progress < 100 || !progress ?
              <>
                {/* 진행중인 경우 */}
                <img src={`${process.env.PUBLIC_URL}/images/skin/0${skin}/progress.png`} alt="" className='progress_img' style={style.progressImg} />
              </>:
              <>
                {/* 완료 한 경우 */}
                <img src={`${process.env.PUBLIC_URL}/images/skin/0${skin}/done.png`} alt="" className='progress_img' style={style.progressImg} />
              </>}
              
            </div>
          </div>

        </Link>
      </article>
    </div>
  );
}

export default HomeCard;