import { Component } from 'react';
import Attribute from './attribute/attribute';

export default class Attributes extends Component {
  render() {
    return(
      <>
        <div>
          Points restants :
          <span className='badge bg-success ms-2'>
            {this.props.nbAttributes}
          </span>
        </div>
        <div>
          <Attribute
            points={this.props.force}
            minus={() => this.props.remove('force')}
            plus={() => this.props.add('force')}>
              Force
          </Attribute>
          <Attribute 
            points={this.props.agilite}
            minus={() => this.props.remove('agilite')}
            plus={() => this.props.add('agilite')}>
              Agilité
          </Attribute>
          <Attribute 
            points={this.props.intelligence}
            minus={() => this.props.remove('intelligence')}
            plus={() => this.props.add('intelligence')}>
              Intelligence
          </Attribute>
        </div>
      </>
    )
  }
}