import { useState, useEffect } from 'react';

export default function Second() {

  const [Counter, setCounter] = useState(0)

  const [age, setAge] = useState(18)
  const [sex, setSex] = useState(true)
  const [color, setColor] = useState('Noire')

  /* ComponentDidMount[], ComponentDidUpdate */
  useEffect(() => {
    document.title = `L'age est de ${age}`
  }, [age])

  /* ComponentWillUnmount */
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(Counter => Counter + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])


  const birthday = () => setAge(age => age + 1)
  const changeSex = () => setSex(sex => !sex)

  return(
    <div style={{marginTop: '30px'}}>
      <div>Timer: {Counter}</div>
      <div>Age: {age} <button onClick={birthday}>Add</button></div>
      <div><button onClick={changeSex}>{sex ? 'Homme' : 'Femme'}</button></div>
      <div>Couleur : <input type="text" value={color} onChange={(e) => setColor(e.target.value)} /> {color}</div>
    </div>
  )
}