import {Component} from 'react';
import Title from '../../components/titles/title';
import Button from '../../components/buttons/button';
import Character from '../character/character';

export default class containerCharacters extends Component {
  state = {
    character : {
      image : 1,
      force: 0,
      agilite: 0,
      intelligence: 0
    }
  }
  handleBefore = () => {
    this.setState((oldState) => {
      const newCharacter = {...oldState.character}
      if (oldState.character.image <= 1) newCharacter.image = 3
      else newCharacter.image--;

      return {character: newCharacter}
    })
  }

  handleNext = () => {
    this.setState((oldState) => {
      const newCharacter = {...oldState.character}
        if (oldState.character.image >= 3) newCharacter.image = 1
        else newCharacter.image++;
  
        return {character: newCharacter}
    })
  }

  render() {
    return(
      <div className='container'>
        <Title>Créateur de personnage</Title>
        <Character 
          {...this.state.character} 
          before={this.handleBefore}
          next={this.handleNext}  
        />
        <div>Armes</div>
        <div className='d-flex align-items-center gap-5'>
          <Button type='danger' click={() => console.log('Réinitialiser')}>Réinitialiser</Button>
          <Button type='success' click={() => console.log('Créer')}>Créer</Button>
        </div>
      </div>
    )
  }
}