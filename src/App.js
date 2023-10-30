import './App.css';

import './css/reset.css';

import {useImmer} from 'use-immer';

import Body from './components/Body';
import Regis from './components/Regis';
import Main from './components/Main';
import Home from './components/Home';

// router-dom import
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  let [words, setWords] = useImmer(initialData);

  // 수정된 객체를 받아 핸들링
  const handleWords = (id ,idx,obj) => {

    console.log(`id : ${id}`);
    console.log(`idx : ${idx}`);

    // 스테이트 변경
    setWords((prev)=>{
      prev[id-1]["list"].splice(idx-1 ,1 ,obj);
    });
  }

  const handleCheck = (id, idx, chk) => {

    setWords((prev)=>{
      prev[id-1]["list"][idx-1].check = chk;
    });
  }

  const client = new QueryClient();

  const router =  createBrowserRouter([
    {
      path : '/',
      element : <Body data={words} />,
      children : [
        {
          index : true,
          element : <Home data={words} />
        },
        {
          path : '/main/:id/:idx',
          element : <Main data={words} handleCheck={handleCheck} />
        },
        {
          path : '/regis/:id/:idx',
          element : <Regis words={words} handleWords={handleWords} />
        }
      ]
    }
  ]);

  return (

    <QueryClientProvider client={client}>

      <RouterProvider router={router} />
      
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
  },
  {
    id : 3,
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
  },
  {
    id : 4,
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
