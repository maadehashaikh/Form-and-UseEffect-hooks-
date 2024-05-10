import React , {useState , useEffect} from 'react'

function UseEffect() {
  let [count,setCount] = useState(0);
  const incCount = () => {
    setCount(count+1);
  }
 useEffect(function printUseEffect (){
  console.log("component is render now or it is re render now , its is a side effect ");
 })
  return (
    <div>
      
      <h1>Count is {count}</h1>
      <button onClick={incCount}>+1</button>
    </div>
  )
}
export default UseEffect
