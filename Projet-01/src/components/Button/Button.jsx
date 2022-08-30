import React, {Component} from 'react';

export default class button extends Component {
  render() {
    return(
      <>
        <button
          className={`btn btn-${this.props.type} ${this.props.type === 'success' ? 'w-100' : ''}`}
          onClick={this.props.click}>{this.props.children}</button>
      </>
    )
  }
}