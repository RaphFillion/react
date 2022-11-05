import { Component } from 'react';

export default class Error extends Component {
  render() {
    return(
      <div className='alert alert-danger'>
        {this.props.children}
      </div>
    )
  }
}