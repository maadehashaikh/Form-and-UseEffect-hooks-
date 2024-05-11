import React , {useState , useEffect} from 'react'
function UseEffect() {
  let [countX,setCountX] = useState(0);
  let [countY,setCountY] = useState(0);
  const incCountX = () => {
    setCountX(countX+1);
  }
  const incCountY = () => {
    setCountY(countY+1);
  }

 useEffect(function printUseEffect (){
  console.log("component is render now or it is re render now , its is a side effect ");
 },[]);     // [] means on re render it won't work , [countX] depend on only countX , [countX,countY] depend on two state variables 
  return (
    <div>
      <h1>Count is {countX}</h1>
      <button onClick={incCountX}>+1</button>
      <h1>Count is {countY}</h1>
      <button onClick={incCountY}>+1</button>
    </div>
  )
}
export default UseEffect
