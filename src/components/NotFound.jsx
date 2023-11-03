import React from 'react';

import {Link} from 'react-router-dom';
import Header from './Header';

function NotFound({data, deleteDay}) {
  return (
    <>
    <Header data={data} deleteDay={deleteDay}/>
    <div className='notfound_div'>
      경로가 잘못되었습니다.
      <Link to='/'>
        홈으로 가기
      </Link>
    </div>
    </>
  );
}

export default NotFound;