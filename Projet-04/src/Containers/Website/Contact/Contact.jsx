import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Title from '../../../Components/titles/title';
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap';
import ContactForm from './ContactForm/ContactForm';


export default class Contact extends Component {
  render() {
    return(
      <Container className='h-100'>
        <Title>Contactez-nous !</Title>
        <div>
          <h2>Adresse: </h2>
          xx
          <h2>Téléphone: </h2>
          000 000 0000
        </div>
        <h2>Vous préfèrez nous écrire ?</h2>
        <LinkContainer to='form'>
          <Button variant='primary'>Formulaire de contact</Button>
        </LinkContainer>
        <Routes>
          <Route path='form' element={<ContactForm />} />
        </Routes>
      </Container>
    )
  }
}