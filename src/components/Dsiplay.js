import React, { useCallback, useContext, useState} from 'react'
import { store } from '../App'

const Display = () => {
    const[data,setData] = useContext(store);
    const[name,setName] = useState('');
    const submitHandler = ele =>{
        ele.preventDefault()
        setData([...data,{brandName:name}])
    }
  return (
    <div className="card">
      <div className="card-body">
        {data.map(item => <h3 className='card-title'>{item.brandName}</h3>)}
        <form className='form' onSubmit={submitHandler}>
            <input onChange={(ele)=>setName(ele.target.value)} type='text' placeholder='Enter your Brand'/>
            <input type='submit' value='Add' />
        </form>
      </div>
    </div>
  )
}

export default Display
