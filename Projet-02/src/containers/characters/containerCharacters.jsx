import {Component} from 'react';
import axios from 'axios';
import Title from '../../components/titles/title';
import Button from '../../components/buttons/button';
import Character from '../character/character';
import Weapons from '../weapons/weapons';

export default class containerCharacters extends Component {
  state = {
    character : {
      image : 1,
      force: 0,
      agilite: 0,
      intelligence: 0,
      arme: null
    },
    attributes: 7,
    armes: null,
    loading: false,
    name: ''
  }

  componentDidMount = () => {
    this.setState({loading: true})
    axios.get('https://character-creation-5723e-default-rtdb.firebaseio.com/Armes.json')
      .then(res => {
        const weaponArr = Object.values(res.data)
        this.setState({armes: weaponArr, loading: false})
      })
      .catch(error => {
        console.log(error)
        this.setState({loading: false})
      })
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

  handleChangeWeapon = (weapon) => {
    const newCharacter = {...this.state.character}
    newCharacter.arme = weapon

    this.setState({character: newCharacter})
  }

  handleReset = () => {
    this.setState({
      character : {
        image : 1,
        force: 0,
        agilite: 0,
        intelligence: 0,
        arme: null
      },
      attributes: 7,
      name: ''
    })
  }

  handleValidation = () => {
    this.setState({loading: true})
    const player = {
      character: {...this.state.character},
      name: this.state.name
    }
    axios.post('https://character-creation-5723e-default-rtdb.firebaseio.com/characters.json', player)
      .then(res => {
        console.log(res)
        this.setState({loading: false})
        this.handleReset()
        this.props.refresh()
      })
      .catch(error => {
        console.log(error)
        this.setState({loading: false})
        this.handleReset()
      })
  }

  render() {
    return(
      <>
        <Title>Créateur de personnage</Title>
        {
          this.state.loading && <div>Loading ... </div>
        }
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" value={this.state.name} 
            onChange={e => this.setState({name: e.target.value})}
          />
        </div>
        <Character 
          {...this.state.character} 
          before={this.handleBefore}
          next={this.handleNext} 
          nbAttributes={this.state.attributes}
          remove={this.handleRemove}
          add={this.handleAdd} 
        />
        {
          this.state.armes &&
          <Weapons 
            weaponsList={this.state.armes}
            changeWeapon={this.handleChangeWeapon}
            currentWeapon={this.state.character.arme}
          />
        }
        <div className='d-flex align-items-center gap-5'>
          <Button type='danger' click={this.handleReset}>Réinitialiser</Button>
          <Button type='success' click={this.handleValidation}>Créer</Button>
        </div>
      </>
    )
  }
}