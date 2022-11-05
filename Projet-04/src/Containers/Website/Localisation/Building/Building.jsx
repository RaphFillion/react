import Hours from './Hours/Hours'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'

const Building = (props) => (
  <div className='my-3'>
    <Card>
      <Card.Header>{props.nom}</Card.Header>
      <Card.Body>
        <Card.Title>
          Téléphone: {props.telephone} <br />
          {
            props.mail && `Mail: ${props.mail}`
          }
        </Card.Title>
        <Card.Text>
          <strong>Adresse: </strong> <br />
          {props.adresses[0].lignes[0]} {props.adresses[0].codePostal} - {props.adresses[0].commune} <br />
        </Card.Text>
        <strong>Horaire: </strong> <br />
        {
          props.horaires &&
          <Hours hours={props.horaires} /> 
        } <br />

        {props.url && <Button href={props.url} variant='primary' target='_blank'>Visiter le site web</Button>}
      </Card.Body>
    </Card>
  </div>
)

export default Building