import { Component } from 'react';
import errorImage from '../../../assets/error404.png'

export default class Error404 extends Component {
  render() {
    return(
      <div>
        <img src={errorImage} width='300px' />
        <div>La page demandé n'existe pas</div>
      </div>
    )
  }
}