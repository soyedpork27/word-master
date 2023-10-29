import React from 'react';

import {Link} from 'react-router-dom';

function WordCard({id,num01,idx,word,mean,exam,examMean, part}) {

  // console.log(`idx : ${idx} num01 : ${num01} idx>num01 : ${idx>num01}`);

  console.log(mean);


  const style = {
    margin : {
      left : idx>num01?`80%`:`10px`,
      zIndex : idx+1===num01?`0`:`1`,
      transition : idx>num01?`.3s`:`.5s`,
      display : (idx+1===num01 || idx===num01 || idx-1===num01?`block`:`none`),
      // display : (idx+1>num01 || idx-1<num01?`none`:`block`),
      opacity : idx>num01 || idx+1 === num01?`0`:`1`,
      visibility : idx>num01 || idx+1 === num01?`hidden`:`visible`
    }
  }

  return (
    <>
      <article className='main-card' style={style.margin}>

        <div className='card-header'>
          <span>
            {idx}

            <Link to={`/regis/${id}/${idx}`}>
              <img src={`${process.env.PUBLIC_URL}/images/pencil_light.svg`} alt="수정 아이콘 이미지" title='클릭 시 단어 수정' />
            </Link>
          </span>

        </div>

            <dl>

            {/* 카드 형식 단어와 뜻과 품사 */}
              <dt>
                <h3>{word}</h3>
              </dt>

              {/* 카드 형식 예문 터치 시 번역본 */}
              <dd>
                <p>{part&&<span className='part_icon'>{part}</span> } {mean}</p>
              </dd>

            </dl>

            <dl>

              {/* 단어 예문 */}
              <dt>{exam}</dt>

              {/* 단어 예문 뜻 */}
              <dd>{examMean}</dd>
            </dl>
      </article>
    </>
  );
}

export default WordCard;