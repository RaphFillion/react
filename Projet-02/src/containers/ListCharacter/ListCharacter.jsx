import { Component } from 'react';
import axios from 'axios'

export default class ListCharacter extends Component {
  state = {
    characters: null,
    loading: false
  }

  componentDidMount = () => {
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
  render() {
    return(
      <>
        liste de personnages
      </>
    )
  }
}