import React from 'react';

import HomeCard from './HomeCard';

import '../css/home.css';

function Home({data, addDay}) {

  console.log(data.length+1);

  // + 버튼 클릭 시 차시 추가하기
  const handleAddDay = () => {
    addDay(Number(data.length+1))
  }


  return (
    <div>
      <main className='home-main'>

        {/* 차시 별 카드 */}
        {
          data.map((item)=>(<HomeCard key={item.id} data={item} />))
        }

        {
          data.length < 10 &&
          <>
            <div className='home-card add' onClick={handleAddDay} >
              <p className='add_p'>차시 추가</p>
              <img src={`${process.env.PUBLIC_URL}/images/plus.svg`} alt="추가 버튼 이미지" title='클릭 시 추가' className='add-day' />

              <h2>&nbsp;</h2>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <div className='null_progress'>&nbsp;</div>
            </div>
          </>
        }

      </main>
    </div>
  );
}




// 클래스 만들어두기


export default Home;