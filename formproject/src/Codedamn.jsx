import React, { useState } from 'react'
function Codedamn() {
	const [clicks,setClicks] = useState(0);
  const [counter,setCounter] = useState(0);

	const incCount = () => {
    setCounter(counter+1);
	}
	const countClicks = () => {
		setClicks(clicks+1);
		if (clicks + 1 === 2) {
      setCounter(2);
    }
		else if(clicks + 1 === 3){
			setCounter(1);
		}
	}
	const decCount = () => {
		setCounter(counter-1);
	}
	const decCounClicks = () => {
		setClicks(clicks + 1);
		if(clicks+1 === 2){
			setCounter(1)
		}
		else if (clicks+1 ===4){
			setCounter(-4);
		}
	}
	console.log(`counter is ${counter} and clicks are ${clicks}`);
	return (
		<>
			<h1>Counter : <span>{counter}</span></h1>
			<button onClick={() => {incCount() ; countClicks()}}>Increment</button>
			<button onClick={() => {decCount() ; decCounClicks()}}>Decrement</button>
		</>
	)
}
export default Codedamn


