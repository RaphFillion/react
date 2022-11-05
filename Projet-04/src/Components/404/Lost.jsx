import Title from '../titles/title'
import Container from 'react-bootstrap/Container'

const Lost = (props) => (
  <Container className='h-100'>
    <Title>Erreur 404</Title>
    <p>La page n'existe pas</p>
  </Container>
)

export default Lost