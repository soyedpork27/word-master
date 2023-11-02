import './App.css';

import './css/reset.css';

import {useEffect} from 'react';

import {useImmer} from 'use-immer';

import Body from './components/Body';
import Regis from './components/Regis';
import Main from './components/Main';
import Home from './components/Home';
import AddWord from './components/AddWord';


import { SkinProvider } from './context/SkinContext';


// router-dom import
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  // 로컬스토리지에서 불러온 데이터를 스테이트로 관리한다.
  let [words, setWords] = useImmer(()=>wordsFromLocalStorage());


  // 로컬스토리지에 단어를 저장하기
  useEffect(()=>{
    // 로컬스토리지에 특정 키에 객체를 직렬화 하여 저장
    localStorage.setItem("word-master", JSON.stringify(words))
  }, [words])

  // 수정된 객체를 받아 핸들링
  const handleWords = (id ,idx,obj) => {

    console.log(`id : ${id}`);
    console.log(`idx : ${idx}`);

    // 스테이트 변경
    setWords((prev)=>{
      prev[id-1]["list"].splice(idx-1 ,1 ,obj);
    });
  }

  // 단어를 추가하는 함수
  const addWord = (id, idx, obj) => {
    if(idx < 20){
    setWords((prev)=>{
      prev[id-1]["list"].splice(idx-1, 1, {...obj},{
        idx : Number(idx)+1,
        word : "",
        part : "",
        mean : "",
        exam : "",
        examMean : "",
        check : false
      })
    })
    }else{
      setWords((prev)=>{
        prev[id-1]["list"].splice(idx-1, 1, obj);
      });
    }
  }

  // 단어 체크 시 프로퍼티 바꾸는 함수
  const handleCheck = (id, idx, chk) => {

    setWords((prev)=>{
      prev[id-1]["list"][idx-1].check = chk;
    });
  }

  // 차시를 추가하는 함수
  const addDay = (id) => {

    const obj = {
      id,
      list : [
        {
          idx : 1,
          word : undefined,
          part : "",
          mean : undefined,
          exam : "",
          examMean : "",
          check : false
        },

      ]
    }

    setWords((prev) => {
      prev.splice(id, 0, {...obj})
    });
  }

  const deleteDay = (id) => {

    setWords((prev) => {
      prev.splice(id-1, 1);
      prev.forEach((item)=>{
        if(item.id > id){
          item.id = item.id-1;
        }
      });
    })

  }

  const client = new QueryClient();

  const router =  createBrowserRouter([
    {
      path : '/',
      element : <Body data={words} deleteDay={deleteDay} />,
      children : [
        {
          index : true,
          element : <Home data={words} addDay={addDay} />
        },
        {
          path : '/main/:id/:idx',
          element : <Main data={words} handleCheck={handleCheck} />
        },
        {
          path : '/regis/:id/:idx',
          element : <Regis words={words} handleWords={handleWords} />
        },
        {
          path : '/addWord/:id/:idx',
          element : <AddWord words={words} addWord={addWord} />
        }
      ]
    }
  ]);

  return (

    <QueryClientProvider client={client}>
      {/* 스킨 프로바이더로 겹침 */}
      <SkinProvider>
        <RouterProvider router={router} />
      </SkinProvider>      
    </QueryClientProvider>
    // <div className="App">
    //   <Body />


    //   <Regis/>
    // </div>
  );
}

const initialData=[
  {
    id : 1,
    list : [
      {
        idx : 1,
        word : "example",
        part : "n",
        mean : "예시",
        exam : "This is an example sentence",
        examMean : "이 문장은 예시 문장입니다.",
        check : true
      },
      {
        idx : 2,
        word : "",
        part : "",
        mean : "",
        exam : "",
        examMean : "",
        check : false
      },
      {
        idx : 3,
        word : "",
        part : "",
        mean : "",
        exam : "",
        examMean : "",
        check : false
      },
      {
        idx : 4,
        word : "",
        part : "",
        mean : "",
        exam : "",
        examMean : "",
        check : false
      }
    ]
  }
];

// 로컬 스토리지에서 데이터를 불러오는 함수
function wordsFromLocalStorage(){

  // 키에 대응되는 데이터를 변수에 할당
  const words = localStorage.getItem("word-master");

  // 키에서 데이터를 가져왔다면 파싱하고 그렇지 않다면 다른 배열을 할당
  return  words ? JSON.parse(words) : initialData;

}

export default App;
