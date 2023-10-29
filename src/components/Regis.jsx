import React,{useState} from 'react';

import TextAreaAutoResize from "react-textarea-autosize";

import {useParams} from 'react-router-dom';

import { useNavigate } from "react-router-dom";


import '../css/regis.css';


function Regis({words, handleWords}) {

  const navigate = useNavigate();

  let {id, idx} = useParams();

  // console.log(idx);
  // console.log(typeof idx);

  let [word, setWord] = useState(words[id-1]["list"][idx-1]["word"]);

  let [mean, setMean] = useState(words[id-1]["list"][idx-1]["mean"]);

  let [exam, setExam] = useState(words[id-1]["list"][idx-1]["exam"]);

  let [examMean, setExamMean] = useState(words[id-1]["list"][idx-1]["examMean"]);

  let [part, setPart] = useState(words[id-1]["list"][idx-1]["part"]);

  console.log(part);


  // 단어 바꾸는 핸들러 함수
  const handleWord = (e) => {
    setWord(e.target.value);
  }

  // 단어 뜻 바꾸는 핸들러 함수
  const handleMean = (e) => {
    setMean(e.target.value);
  }

  // 예문 바꾸는 핸들러 함수
  const handleExam = (e) => {
    setExam(e.target.value);
  }

  // 예문 뜻 바꾸는 핸들러 함수
  const handleExamMean = (e) => {
    setExamMean(e.target.value);
  }

  const handleRadio = (e) => {
    setPart(e.target.value);
  }

  // form submit 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    const obj01 = {
        idx : Number(idx),
        word : word,
        part : part,
        mean : mean,
        exam : exam,
        examMean : examMean
      }

    handleWords(id ,idx ,obj01);

    // 해당 차시로 이동해야 한다.
    navigate(`/main/${id}`);

  }

  return (
    <main>
      <div className='main-background'>

        <section>
          <h2>{id}차슈</h2>
          <p>{idx}번째</p>

          <form onSubmit={handleSubmit}>
            <dl>

            {/* 카드 형식 단어와 뜻과 품사 */}
              <dt>
                단어 <input type='text' value={word} onChange={handleWord} />
              </dt>

              <dd>
                <p>품사</p>
                  <ul className='part_box'>
                    <li className='part_list'>
                      <input type="radio" name="part" id="noun" value="n" className='part_radio' checked={part==="n"} onChange={handleRadio} /> <label htmlFor="noun">명사</label>
                      <div className='checkd_bg'>
                        <img src={`${process.env.PUBLIC_URL}/images/check_icon01.svg`} className='check_icon01' alt="" />
                      </div>
                    </li>
                    <li className='part_list'>
                      <input type="radio" name="part" id="verb" value="v" className='part_radio' checked={part==="v"} onChange={handleRadio} /> <label htmlFor="verb">자동사</label>
                      <div className='checkd_bg'>
                        <img src={`${process.env.PUBLIC_URL}/images/check_icon01.svg`} className='check_icon01' alt="" />
                      </div>
                    </li>
                    <li className='part_list'>
                      <input type="radio" name="part" id="verbt" value="vt" className='part_radio' checked={part==="vt"} onChange={handleRadio} /> <label htmlFor="verbt">타동사</label>
                      <div className='checkd_bg'>
                        <img src={`${process.env.PUBLIC_URL}/images/check_icon01.svg`} className='check_icon01' alt="" />
                      </div>
                    </li>
                    <li className='part_list'>
                      <input type="radio" name="part" id="adjective" value="a" className='part_radio' checked={part==="a"} onChange={handleRadio} /> <label htmlFor="adjective">형용사</label>
                      <div className='checkd_bg'>
                        <img src={`${process.env.PUBLIC_URL}/images/check_icon01.svg`} className='check_icon01' alt="" />
                      </div>
                    </li>
                    <li className='part_list'>
                      <input type="radio" name="part" id="adverb" value="ad" className='part_radio' checked={part==="ad"} onChange={handleRadio} /> <label htmlFor="adverb">부사</label>
                      <div className='checkd_bg'>
                        <img src={`${process.env.PUBLIC_URL}/images/check_icon01.svg`} className='check_icon01' alt="" />
                      </div>
                    </li>
                    <li className='part_list'>
                      <input type="radio" name="part" id="preposition" value="prep" className='part_radio' checked={part==="prep"} onChange={handleRadio} /> <label htmlFor="preposition">전치사</label>
                      <div className='checkd_bg'>
                        <img src={`${process.env.PUBLIC_URL}/images/check_icon01.svg`} className='check_icon01' alt="" />
                      </div>
                    </li>
                  </ul>
              </dd>

              <dd>
                뜻 <input type="text" value={mean} onChange={handleMean} />
              </dd>


              {/* 카드 형식 예문 터치 시 번역본 */}
              <dd>
                예문 <TextAreaAutoResize style={{
                resize: "none",
                outline: "none",
                overflow: "hidden",
                }} value={exam} onChange={handleExam} />
                예문 뜻 <TextAreaAutoResize value={examMean} onChange={handleExamMean} />
              </dd>
            </dl>

              <button type='button' onClick={handleSubmit} >
                수정하기
              </button>

          </form>



        </section>


      </div>
    </main>
  );
}

export default Regis;