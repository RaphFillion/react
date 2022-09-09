import React, {Component} from 'react';
import Book from './Book/Book';
import Form from './Form/Form';
import FormModify from './modifyForm/modifyForm';
import Alert from '../../components/alert/alert';

export default class Books extends Component {
  state = {
    books: [
      {id: 1, titre: `L'algorithme selon H2PROG`, auteur: 'Matthieu Gaston', pages: '200'},
      {id: 2, titre: `La France du 19ème`, auteur: 'Albert Patrick', pages: '500'},
      {id: 3, titre: `Le monde des animaux`, auteur: 'Marc Merlin', pages: '250'},
      {id: 4, titre: `Le Virus d'asie`, auteur: 'Tya Milo', pages: '120'},
    ],
    lastId: 4,
    idModifiedBook: 0,
    messageAlert: null
  }

  handleDelete = (id) => {
    const bookIDTab = this.state.books.findIndex(e => {
      return e.id === id;
    });

    const newBooks = [...this.state.books];

    newBooks.splice(bookIDTab, 1);

    this.setState({books: newBooks, messageAlert: {message: 'Suppression effectué', type: 'danger'}});
  }

  handleAjoutLivre = (titre, auteur, pages) => {
    const newLivre = {
      id: this.state.lastId + 1,
      titre: titre,
      auteur: auteur,
      pages: pages
    }
    const newList = [...this.state.books];
    newList.push(newLivre);

    this.setState((oldState) => {
      return {books: newList, lastId: oldState.lastId + 1, messageAlert: {message: 'Ajout effectué', type: 'success'}}
    });

    this.props.closeAdd();
  }

  handleModifyBooks = (id, titre, auteur, pages) => {
    const idBook = this.state.books.findIndex(l => {
      return l.id === id;
    });
    const newBook = { id, titre, auteur, pages };
    const newList = [...this.state.books];
    newList[idBook] = newBook;

    this.setState({
      books: newList,
      idModifiedBook: 0,
      messageAlert: {message: 'Modification effectué', type: 'warning'}
    })
  }

  render() {
    return (
      <>
        {this.state.messageAlert && <Alert alertType={this.state.messageAlert.type}>{this.state.messageAlert.message}</Alert>}
        <table className='table text-center'>
          <thead>
            <tr className='table-default'>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Nombre de pages</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.books.map(book => {
                if (book.id !== this.state.idModifiedBook) {
                  return(
                    <tr key={book.id}>
                      <Book {...book} delete={() => this.handleDelete(book.id)} modify={() => this.setState({idModifiedBook: book.id})}/>
                    </tr>
                  )
                } else {
                  return(
                    <tr key={book.id}>
                      <FormModify 
                        id={book.id} 
                        titre={book.titre} 
                        auteur={book.auteur} 
                        pages={book.pages} 
                        modidfyValidation={this.handleModifyBooks}/>
                    </tr>
                  ); 
                }
              })
            }
          </tbody>
        </table>
        {this.props.form && <Form validation = {this.handleAjoutLivre} />}
      </>
    )
  }
}