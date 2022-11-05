import {Component} from 'react';

export default class Title extends Component {
  render() {
    return(
      <h1
        className='border border-dark bg-primary p-2 mt-2 rounded text-white text-center'>
          {this.props.children}
      </h1>
    )
  }
}