import React, {useState,useEffect} from 'react';

import {useParams} from 'react-router-dom';

import '../css/main.css';
import WordCard from './WordCard';

// import {useLocation} from 'react-router-dom';


function Main({data}) {


  let {id, idx} = useParams();

  // 해당 차시의 데이터만 받아오기 위해
  let [getData, setGetData] = useState(data[id-1]);

  

  // num01에 따라 나올 단어가 정해진다.
  let [num01, setNum01] = useState(idx?idx:1);


  // 차시(id)가 바뀌면 데이터가 바뀌어야 한다.
  useEffect(()=>{
    setGetData(data[id-1]);

    // 차시(id)가 바뀌면 처음 단어로 돌아가야 한다.
    setNum01(1)
  },[id,data]);



  

    // 우측 카드가 밀려 들어오는 함수
    const slideInNext = () => {
      if(num01!==data[id-1]["list"].length){
        setNum01((prev)=>(prev+1));
      }
    }

    const slideInPrev = () => {
      if(num01!==1){
        setNum01((prev) => (prev-1));
      }
    }

  return (
    <main>
        <h2 className='day-title'>
          {id} 차시
        </h2>

        <div className='main-wrap'>
          <div className='main-box' >

          {getData.list.map((item)=>(<WordCard key={item.idx} num01={num01} id={id} idx={item.idx} word={item.word} mean={item.mean} exam={item.exam} examMean={item.examMean} part={item.part} />))}


          
          </div>
        </div>
      

      <button onClick={slideInPrev} className='button prev'> <img src={`${process.env.PUBLIC_URL}/images/angle01_light.svg`} alt="" /> </button>
      <button onClick={slideInNext} className='button next'> <img src={`${process.env.PUBLIC_URL}/images/angle02_light.svg`} alt="" /> </button>

    </main>
  );
}



export default Main;