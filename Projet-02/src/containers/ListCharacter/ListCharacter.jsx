import { Component } from 'react';
import axios from 'axios'
import Title from '../../components/titles/title';
import CharacterData from './CharacterData/CharacterData';
export default class ListCharacter extends Component {
  state = {
    characters: null,
    loading: false
  }

  loadData = () => {
    this.setState({loading: true})
    axios.get('https://character-creation-5723e-default-rtdb.firebaseio.com/characters.json')
      .then(res => {
        const characters = Object.values(res.data)
        this.setState({characters, loading: false})
      })
      .catch(error => {
        console.log(error)
        this.setState({loading: false})
      })
  }

  componentDidMount = () => {
    this.loadData();
  }
  
  componentDidUpdate = (oldProps, oldState) => {
    if (oldProps.refresh !== this.props.refresh) {
      this.loadData();
    }
  }

  render() {
    return(
      <>
        {this.state.loading && <div>Loading ... </div>}
        {
          !this.state.loading && this.state.characters &&
            <div className='row'>
              {
                this.state.characters.map((character, i) => {
                  return (
                    <div key={i} className='col-6'>
                      <Title>{character.name}</Title>
                      <CharacterData {...character.character} />
                    </div>
                  )
                })
              }
            </div>
        }
      </>
    )
  }
}