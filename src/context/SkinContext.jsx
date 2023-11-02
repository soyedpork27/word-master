import { createContext , useState, useEffect } from "react";


export const SkinContext = createContext();


// 스킨 프로바이더에 skin이 있다.
export function SkinProvider ({children}) {

  const skinChar = [

    {
      skinId : 1,
      skinName : 'Chiikawa',
      skinCol : '#78D4FF'
    },
    {
      skinId : 2,
      skinName : 'Kuromi',
      skinCol : '#F8AAFF'
    },
    {
      skinId : 3,
      skinName : 'Loopy',
      skinCol : '#FFADB7'
    },
    {
      skinId : 4,
      skinName : 'Maru',
      skinCol : '#FECC54'
    },
    {
      skinId : 5,
      skinName : 'Nuiesi',
      // skinCol : '#026900'
      skinCol : '#3D773C'
    },
    {
      skinId : 6,
      skinName : 'Soong-yee',
      // skinCol : '#985225'
      skinCol : '#A05220'
    }
  ]

  // 선택한 스킨을 로컬 스토리지에서 받아와 스테이트로 관리
  const [skin, setSkin] = useState(()=>skinFromLocalStorage());


  // 선택한 스킨을 로컬 스토리지에 저장
  useEffect(()=>{
    localStorage.setItem('word-skin', JSON.stringify(skin))
  },[skin]);

  // 스킨을 로컬 스토리지에서 가져오는 함수
function skinFromLocalStorage() {
  const skin = localStorage.getItem('word-skin');
  return skin?JSON.parse(skin):skinChar[0];
}

  const updateSkin = (wanted) => {
    // if(wanted === 1) {
    //   setSkin(skinChar[0]);
    // }else if(wanted === 2) {
    //   setSkin(skinChar[1]);
    // }else if(wanted === 3) {
    //   setSkin(skinChar[2]);
    // }else if(wanted === 4) {
    //   setSkin(skinChar[3]);
    // }else if(wanted === 5) {
    //   setSkin(skinChar[4]);
    // }else if(wanted === 6){
    //   setSkin(skinChar[5]);
    // }else if(wanted === 7){
    //   setSkin(skinChar[6]);
    // }
    setSkin(skinChar[wanted-1]);

  }

  return (<SkinContext.Provider value={{skin, skinChar, updateSkin}} >{children}</SkinContext.Provider>);
}


