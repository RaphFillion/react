import React, { Component } from 'react';

export default class alert extends Component {
  render() {
    const someCss = `alert alert-${this.props.alertType}`;
    return(
      <>
        <div className={someCss} role="alert">
          {this.props.children}
        </div>
      </>
    )
  }
}