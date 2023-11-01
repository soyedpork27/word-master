import './App.css';

import './css/reset.css';

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

  let [words, setWords] = useImmer(initialData);

  console.log(words);

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
        word : "As",
        part : "prep",
        mean : "~처럼, ~때문에, ~만큼",
        exam : "As you wish",
        examMean : "당신이 바라는 대로",
        check : true
      },
      {
        idx : 2,
        word : "cake",
        part : "n",
        mean : "케이크",
        exam : "",
        examMean : "",
        check : false
      },
      {
        idx : 3,
        word : "coffee",
        part : "n",
        mean : "커피",
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
  },
  {
    id : 2,
    list : [
      {
        idx : 1,
        word : "MacBook",
        part : "n",
        mean : "맥북",
        exam : "",
        examMean : "",
        check : false
      },
      {
        idx : 2,
        word : "iPad",
        part : "n",
        mean : "아이패드",
        exam : "",
        examMean : "",
        check : false
      },
      {
        idx : 3,
        word : "iPhone",
        part : "n",
        mean : "아이폰",
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

export default App;
