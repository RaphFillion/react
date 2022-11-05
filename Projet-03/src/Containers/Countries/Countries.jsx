import { useLocation } from 'react-router-dom'
import Title from '../../Components/titles/title'
import Country from '../ManageCountry/Country/Country'

const Countries = () => {
  const {state} = useLocation()

  return(
    <div className='container'>
      <Title>Page de {state.name}</Title>
      <div>
        <Country {...state} link={true} />
      </div>
    </div>
  )
}

export default Countries;