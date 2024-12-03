import React,{createContext,useState} from 'react'
import Count from './Components/Count';
import Display from './Components/Display';


export const store = createContext();

const App = () => {
  const[data,setData] = useState([
    {
      brandName:'Realme'
    },
    {
      brandName:'Oppo'
    },
    {
      brandName:'Noika'
    }
  ]);

  return (
    <store.Provider value={[data,setData]}>
      <center>
        <Count />
        <Display />
      </center>
    </store.Provider>
  )
}

export default App
