import {Component} from 'react';

export default class Title extends Component {
  render() {
    return(
      <h1
        className='border border-dark bg-primary p-2 m-2 mt-5 rounded text-white text-center'
        style={{fontFamily: 'Poor story'}}>
          {this.props.children}
      </h1>
    )
  }
}