import React from 'react';

import HomeCard from './HomeCard';

function Home({data}) {


  return (
    <div>
      <main>

        {/* 차시 별 카드 */}
        {
          data.map((item)=>(<HomeCard key={item.id} data={item} />))
        }

      </main>
    </div>
  );
}




// 클래스 만들어두기


export default Home;