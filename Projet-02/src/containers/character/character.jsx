import { Component } from 'react';
import Images from './images/images';

export default class Character extends Component {
  render() {
    return(
      <div className='row'>
        <div className='col-6'>
          <Images 
            idCharacter={this.props.image} 
            left={this.props.before}
            right={this.props.next}
          />
        </div>
        <div className='col-6'>
          Force : {this.props.force} <br />
          Agilité : {this.props.agilite} <br />
          Intelligence : {this.props.intelligence}
        </div>
      </div>
    )
  }
}