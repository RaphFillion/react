import { Component } from 'react'
import Characters from './containers/characters/containerCharacters'
import ListCharacter from './containers/ListCharacter/ListCharacter'

export default class App extends Component {
  state = {
    refresh: false
  }

  handleRefresh = () => {
    this.setState((oldState) => {
      return {refresh: !oldState.refresh}
    })
  }

  render() {
    return (
      <div className='container'>
        <Characters refresh = {this.handleRefresh}/>
        <ListCharacter refresh = {this.state.refresh}/>
      </div>
    )
  }
}
