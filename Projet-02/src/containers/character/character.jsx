import { Component } from 'react';
import Images from './images/images';
import Attributes from './attributes/attributes';

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
          <Attributes 
            nbAttributes={this.props.nbAttributes}
            force={this.props.force}
            agilite={this.props.agilite}
            intelligence={this.props.intelligence}
            remove={this.props.remove}
            add={this.props.add}
          />
        </div>
      </div>
    )
  }
}