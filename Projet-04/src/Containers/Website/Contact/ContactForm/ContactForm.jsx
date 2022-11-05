import { withFormik } from 'formik'
import * as Yup from 'yup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const ContactForm = (props) => (
  <div className='mt-3'>
    <Form>
      <Form.Group className="mb-3" controlId="nom">
        <Form.Label>Nom</Form.Label> <Badge className='ms-1' bg='warning'>min 5 caractères</Badge>
        <Form.Control name='nom' onChange={props.handleChange} value={props.values.nom} onBlur={props.handleBlur} type="text" placeholder="Votre nom" />
        <Form.Text className="text-danger">
          {
            (props.touched.nom && props.errors.nom) && props.errors.nom
          }
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="mail">
        <Form.Label>Email</Form.Label>
        <Form.Control name='email' onChange={props.handleChange} value={props.values.email} onBlur={props.handleBlur} type="text" placeholder="Votre email" />
        <Form.Text className="text-danger">
          {
            (props.touched.email && props.errors.email) && props.errors.email
          }
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label> <Badge className='ms-1' bg='warning'>Entre 100 et 200 caractères</Badge>
        <Form.Control name='message' onChange={props.handleChange} value={props.values.message} onBlur={props.handleBlur} as='textarea' rows='3' />
        <Form.Text className="text-danger">
          {
            (props.touched.message && props.errors.message) && props.errors.message
          }
        </Form.Text>
      </Form.Group>
      <Button variant="primary" onClick={props.handleSubmit}>
        Valider
      </Button>
    </Form>
  </div>
)

export default withFormik({
  mapPropsToValues: () => ({
    nom: '',
    email: '',
    message: ''
  }),
  validationSchema: Yup.object().shape({
    nom: Yup.string().min(5, 'Le nom doit avoir plus de 5 caractères').required('Le nom est obligatoire'),
    email: Yup.string().email('L’email n’a pas le bon format').required('L’email est obligatoire'),
    message: Yup.string().min(100, 'Le message doit faire plus de 100 caractères').max(200, 'Le message doit faire moins de 200 caractères').required('Le message est obligatoire'),
  }),
  handleSubmit: (values, {props}) => {
    alert('Message envoyé')
  }
})(ContactForm)