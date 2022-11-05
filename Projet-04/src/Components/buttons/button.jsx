import {Component} from 'react';

export default class button extends Component {
  render() {
    return(
      <>
        <button
          className={`btn btn-${this.props.type}`}
          onClick={this.props.click}
          style={this.props.isSelected ? {opacity: 1} : {opacity: .7}}>
            {this.props.children}
        </button>
      </>
    )
  }
}