import { createContext , useState } from "react";


export const SkinContext = createContext();



// 스킨 프로바이더에 skin이 있다.
export function SkinProvider ({children}) {

  const [skin, setSkin] = useState(1);

  const updateSkin = (wanted) => {
    if(wanted === 1) {
      setSkin(1);
    }
    else if(wanted === 2) {
      setSkin(2);
    }else if(wanted === 3) {
      setSkin(3);
    }else if(wanted === 4) {
      setSkin(4);
    }else if(wanted === 5) {
      setSkin(5)
    }


  }

  return (<SkinContext.Provider value={{skin, updateSkin}} >{children}</SkinContext.Provider>);
}