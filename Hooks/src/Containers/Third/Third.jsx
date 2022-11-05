import { useState } from 'react';

function useIncrement(number) {
  const [Counter, setCounter] = useState(number)

  const increment = () => {
    setCounter(Counter => Counter + 1)
  }

  return [Counter, increment]
}

export default function Third() {
  const [Counter, setCounter] = useIncrement(0)
  const [Counter2, setCounter2] = useIncrement(10)

  return(
    <div style={{marginTop: '30px'}}>
      <button onClick={setCounter}>{Counter}</button>
      <button onClick={setCounter2}>{Counter2}</button>
    </div>
  )
}