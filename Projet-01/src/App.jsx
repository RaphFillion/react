import React, {Component} from 'react';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Books from './containers/Books/Books';

export default class App extends Component {
  state = {
    open: false,
  }

  handleAdd = () => {
    this.setState((oldState, props) => {
      return {open: !oldState.open}
    })
  }

  render() {
    return (
      <div className="container">
        <Title>Page listant les livres</Title>
        <Books form={this.state.open} closeAdd={() => this.setState({open: false})} />
        <Button
          type="success"
          click={this.handleAdd}>
            {this.state.open ? 'Fermer l‘ajout' : 'Ajouter'}
        </Button>
      </div>
    )
  }
}
