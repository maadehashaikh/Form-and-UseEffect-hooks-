import React, { useState } from 'react';
function Codedamn() {
  const [counter, setCounter] = useState(0);
  const [incClicks, setIncClicks] = useState(0);
  const [decClicks, setDecClicks] = useState(0);

    const incCount = () => {
      setIncClicks(incClicks+1);
			if(incClicks+1 === 2){
				setCounter(2);
			}
			else if (incClicks+1 === 3 && decClicks+1 === 2){
       setCounter(1);
			}
			else{
        setCounter(counter+1);
			}
		} 

		const decCount = () => {
			setDecClicks(decClicks+1);
			if(incClicks+1 === 3 && decClicks+1 === 2){
				setCounter(1);
			}
			else if(decClicks+1 === 4){
        setCounter(-4);
			}
			else {
        setCounter(counter-1);
			}
			
		} 
   
		console.log(`Counter is ${counter} Inc Clicks ${incClicks} Dec Clicks ${decClicks}`)


  // const incCount = () => {
  //   setIncClicks((prevIncClicks) => {
  //     const newIncClicks = prevIncClicks + 1;
  //     if (newIncClicks === 2) {
  //       setCounter(2);
  //     } else if (newIncClicks === 3 && decClicks === 2) {
  //       setCounter(1);
  //     } else {
  //       setCounter((prevCounter) => prevCounter + 1);
  //     }
  //     return newIncClicks;
  //   });
  // };

  // const decCount = () => {
  //   setDecClicks((prevDecClicks) => {
  //     const newDecClicks = prevDecClicks + 1;
  //     if (newDecClicks === 4) {
  //       setCounter(-4);
  //     } else if (incClicks === 3 && newDecClicks === 2) {
  //       setCounter(1);
  //     } else {
  //       setCounter((prevCounter) => prevCounter - 1);
  //     }
  //     return newDecClicks;
  //   });
  // };

  return (
    <div className="App">
      <h1>Counter: <span>{counter}</span></h1>
      <button onClick={incCount}>Increment</button>
      <button onClick={decCount}>Decrement</button>
    </div>
  );
}

export default Codedamn;




