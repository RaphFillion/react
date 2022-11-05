import { Component } from 'react';
import axios from 'axios'
import Title from '../../../Components/titles/title';
import Building from './Building/Building';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';


export default class Localisation extends Component {
  state = {
    search: null,
  }

  searchLocalisation = (type) => {
    axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/09/${type}`)
      .then(res => {
        this.setState({search: res.data.features})
      })
  }

  render() {
    return(
      <Container className='h-100'>
        <Title>Rechercher un établissement</Title>
        <Button variant='secondary' className='me-1' onClick={() => this.searchLocalisation('mairie')}>Mairie</Button>
        <Button variant='secondary' className='me-1' onClick={() => this.searchLocalisation('commissariat_police')}>Commissariat</Button>
        <Button variant='secondary' className='me-1' onClick={() => this.searchLocalisation('pole_emploi')}>Pôle emploi</Button>
        <Button variant='secondary' className='me-1' onClick={() => this.searchLocalisation('prefecture')}>Préfecture</Button>
        <Row style={{paddingBottom: '120px'}}>
          { this.state.search &&
            this.state.search.map((result, i) => {
              return (
                <Col key={i} md={6}>
                  <Building {...result.properties} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    )
  }
}