import React, {Component} from 'react';
import Personne from './components/Personne/Personne';
import Horloge from './containers/Horloge/Horloge';
import AgePersonne from './components/Personne/agePersonne/AgePersonne';

import './App.scss';

class App extends Component {
  state = {
    personnes: [
      {id: 1, nom: 'Raphaël', age: 22, sexe: true},
      {id: 2, nom: 'Tya', age: 21, sexe: false},
      {id: 5, nom: 'Mathieu', age: 45, sexe: true},
      {id: 7, nom: 'Toto', age: 23, sexe: true},
    ]
  }

  anniversaireHandler = (id) => {
    const numPersonne = this.state.personnes.findIndex(e => {
      return e.id === id;
    });

    // Création d'une copie d'une nouvelle personne
    const newPersonne = {...this.state.personnes[numPersonne]};
    newPersonne.age++;

    // Création d'une copie d'un nouveau tableau
    const newTab = [...this.state.personnes];
    newTab[numPersonne] = newPersonne;

    this.setState({personnes: newTab});
  }

  render() {
    return (
      <>
        <button onClick={this.anniversaireHandler}>Anniversaire</button>
        <Horloge />

        {
          this.state.personnes.map(personne => {
            return (
              <Personne key={personne.id} {...personne} click={() => this.anniversaireHandler(personne.id)}>
                <AgePersonne age={personne.age}/>
              </Personne>
            )
          })
        }

      </>
    )
  }
}

export default App;