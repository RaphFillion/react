import React, {Component} from 'react';
import Book from './Book/Book';
import Form from './Form/Form';

export default class Books extends Component {
  state = {
    books: [
      {id: 1, titre: `L'algorithme selon H2PROG`, auteur: 'Matthieu Gaston', pages: '200'},
      {id: 2, titre: `La France du 19ème`, auteur: 'Albert Patrick', pages: '500'},
      {id: 3, titre: `Le monde des animaux`, auteur: 'Marc Merlin', pages: '250'},
      {id: 4, titre: `Le Virus d'asie`, auteur: 'Tya Milo', pages: '120'},
    ]
  }

  handleDelete = (id) => {
    const bookIDTab = this.state.books.findIndex(e => {
      return e.id === id;
    });

    const newBooks = [...this.state.books];

    newBooks.splice(bookIDTab, 1);

    this.setState({books: newBooks});
  }

  render() {
    return (
      <>
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
                return(
                  <tr key={book.id}>
                    <Book {...book} delete={() => this.handleDelete(book.id)}/>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {this.props.form && <Form />}
      </>
    )
  }
}