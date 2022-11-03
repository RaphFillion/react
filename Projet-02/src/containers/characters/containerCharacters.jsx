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
    },
    attributes: 7
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

  handleRemove = (attribute) => {
    this.setState((oldState) => {
      if (oldState.character[attribute] <= 0 || oldState.attributes >= 7) return null;
      const newAttributes = oldState.character[attribute] - 1;
      const newCharacter = {...oldState.character}
      const newPointsAttribute = oldState.attributes + 1

      newCharacter[attribute] = newAttributes;
      return {
        character : newCharacter,
        attributes : newPointsAttribute
      }
    })
  }
  
  handleAdd = (attribute) => {
    this.setState((oldState) => {
      if (oldState.character[attribute] >= 5 || oldState.attributes <= 0) return null;
      const newAttributes = oldState.character[attribute] + 1;
      const newCharacter = {...oldState.character}
      const newPointsAttribute = oldState.attributes - 1

      newCharacter[attribute] = newAttributes;
      return {
        character : newCharacter,
        attributes : newPointsAttribute
      }
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
          nbAttributes={this.state.attributes}
          remove={this.handleRemove}
          add={this.handleAdd} 
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