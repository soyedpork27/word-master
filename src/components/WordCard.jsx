import React, {useState} from 'react';

import {Link, useNavigate} from 'react-router-dom';

function WordCard({id,num01,idx,word,mean,exam,examMean, part, check, handleCheck}) {

  const navigate = useNavigate();

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

  let [chk, setChk] = useState(check);

  // 체크 관리하는 함수
  const handleChk = () => {
    setChk((prev) => (!prev));
    handleCheck(id, idx, chk);

    // 페이지 유지시키기
    navigate(`/main/${id}/${idx}`);
  }

  // useEffect(()=>{
  //   setChk(check);
  // },[check]);

  return (
    <>
      <article className='main-card' style={style.margin}>

        <div className='card-header'>
          <span>
            {idx}
          </span>

          <div className='word-icon_box'>
            <button className='check_img' onClick={handleChk}>
              <img src={`${process.env.PUBLIC_URL}/images/check_icon_${check?`03`:`02`}.svg`} alt="" />
            </button>

            <Link to={`/regis/${id}/${idx}`}>
              <img src={`${process.env.PUBLIC_URL}/images/pencil_light.svg`} alt="수정 아이콘 이미지" title='클릭 시 단어 수정' />
            </Link>
          </div>



        </div>
          {word&&mean?
          <>
          <dl className='card-word_wrap'>

            {/* 카드 형식 단어와 뜻과 품사 */}
              <dt className='card-word'>
                <h3>{word}</h3>
              </dt>

              {/* 카드 형식 예문 터치 시 번역본 */}
              <dd className='card-mean'>
                {part&&<span className='part_icon'>{part}</span> } <p>{mean}</p>
              </dd>

            </dl>

            {exam ?
            <dl className='card-exam_wrap'>
            {/* 단어 예문 */}
              <dt>{exam}</dt>

            {/* 단어 예문 뜻 */}
              <dd>{examMean}</dd>
            </dl>  :
            <dl className='card-exam_wrap null'>
              <Link to={`/regis/${id}/${idx}`}>
                <img src={`${process.env.PUBLIC_URL}/images/skin/03/null_char.png`} alt="" className='null_img' />
              </Link>
            </dl>}
          </>
          :
          <dl className='card-word null'>
            <dt >단어를 추가해 주세요.</dt>
            <Link to={`/addWord/${id}/${idx}`}>
              <img src={`${process.env.PUBLIC_URL}/images/plus.svg`} alt="plus 아이콘 이미지" title='클릭 시 단어 추가' className='plus_img' />
            </Link>
          </dl>
          }
            
      </article>
    </>
  );
}

export default WordCard;