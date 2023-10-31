import React from 'react';

import {Link} from 'react-router-dom';

function HomeCard({data}) {

  const progress = Math.floor((data.list.filter((item)=>(item.check===true)).length / data.list.length) * 100);

  const style={
    progress : {
      width : `${(data.list.filter((item)=>(item.check===true)).length / data.list.length) * 100}%`
    },
    progressImg : {
      width : `${progress!==0?`32px`:`0px`}`
    }
  }

  console.log(data.list.filter((item)=>(item.check===true)).length);

  console.log(data.list.length);

  return (
    <div className='home-card'>
      <article>
        <Link to={`/main/${data.id}/1`}>
          <h2>{data.id}차시</h2>
          <p>{data.list.length}/20</p>

          <p>진행률 : {progress}%</p>
          {/* <p>진행률 : {(data.list.filter((item)=>(item.check===true)).length / data.list.length) * 100}%</p> */}

          <div className='home-progress_bar'>
            <div className='progress' style={style.progress}>
              <img src={`${process.env.PUBLIC_URL}/images/skin/03/progress.png`} alt="" className='progress_img' style={style.progressImg} />
            </div>
          </div>

        </Link>
      </article>
    </div>
  );
}

export default HomeCard;