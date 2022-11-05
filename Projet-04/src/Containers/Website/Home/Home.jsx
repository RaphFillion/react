import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Title from '../../../Components/titles/title'
import Button from '../../../Components/buttons/button'
import chateau from '../../../assets/images/chateau.jpg'

const Home = (props) => (
  <Container className='h-100'>
    <Title>Bienvenue sur le site de l'Ariège</Title>
    <p>Le site vous aidant à trouver les établissements pubhlics de l'Ariège</p>
    <Image src={chateau} fluid thumbnail className='w-100' />
  </Container>
)


export default Home