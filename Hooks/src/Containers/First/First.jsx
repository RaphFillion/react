import { useState } from 'react'

export default function First() {
  /* Utiliser plusieurs states à place d'un objet state */
const [person, setPerson] = useState({
  age: 18,
  sex: true,
  color: 'noire'
})

const birthday = () => {
  const newPerson = {...person}
  newPerson.age++
  setPerson(newPerson)
}
const changeSex = () => {
  const newPerson = {...person}
  newPerson.sex = !newPerson.sex
  setPerson(newPerson)
}
const changeColor = (newColor) => {
  const newPerson = {...person}
  newPerson.color = newColor
  setPerson(newPerson)
}

  /* let [age, setAge] = useState(18)
  let [sex, setSex] = useState(true)
  let [color, setColor] = useState('noire')

  const birthday = () => setAge(age => age + 1)
  const changeSex = () => setSex(sex => !sex) */

  return(
    <div>
      <div>Age: {person.age} <button onClick={birthday}>Anniversaire</button></div>
      <div><button onClick={changeSex}>{person.sex ? 'Homme' : 'Femme'}</button></div>
      <div>Couleur : <input type="text" value={person.color} onChange={(e) => changeColor(e.target.value)} /> {person.color}</div>
      {/* <div>Age: {age} <button onClick={birthday}>Anniversaire</button></div>
      <div><button onClick={changeSex}>{sex ? 'Homme' : 'Femme'}</button></div>
      <div>Couleur : <input type="text" value={color} onChange={(e) => setColor(e.target.value)} /> {color}</div> */}
    </div>
  )
}