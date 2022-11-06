import { useState, useEffect, useRef } from 'react'
import Title from '../../Components/titles/title'
import Button from '../../Components/buttons/button'
import useLoadData from '../../Hooks/useLoadData'

export default function Formation(props) {
  const [formations, loadRoute] = useLoadData()
  const [category, setCategory] = useState('all')

  const isMounted = useRef(false)

  useEffect(() => {
    loadRoute('https://dev.h2prog.com/API_TEST/formations')
  }, [])
  
  useEffect(() => {
    if (isMounted.current) {
      if (category !== 'all') {
        loadRoute('https://dev.h2prog.com/API_TEST/formations/' + category)
      } else {
        loadRoute('https://dev.h2prog.com/API_TEST/formations')
      }
    }
  }, [category])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return(
    <>
      <Title>Bienvenue sur le site listant les formations H2PROD</Title>
      <Button type='primary' click={() => setCategory('all')} isSelected={category == 'all'}>Toutes</Button>
      <Button type='primary' click={() => setCategory('PHP')} isSelected={category == 'PHP'}>PHP</Button>
      <Button type='primary' click={() => setCategory('JavaScript')} isSelected={category == 'JavaScript'}>Javascript</Button>
      <Button type='primary' click={() => setCategory('Algorithmique')} isSelected={category == 'Algorithmique'}>Algorithmique</Button>
      <table className='table'>
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Libellé</th>
            <th>Description</th>
            <th>Catégorie</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {
            formations && 
            formations.map(formation => {
              return(
                <tr key={formation.id}>
                  <td>{formation.id}</td>
                  <td>{formation.libelle}</td>
                  <td>{formation.description}</td>
                  <td>{formation.categorie}</td>
                  <td>{formation.categorie}</td>
                  <td>
                    <img src={formation.image} alt={formation.image} width='100px' />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}