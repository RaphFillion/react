import React, {Component} from 'react';

import classes from './Titre.module.scss';

export default class Title extends Component {
  render() {
    return (
      <>
        <h1 className={`p-2 m-2 text-center rounded bg-dark text-secondary ${classes.policeTitre}` }>
          {this.props.children}
        </h1>
      </>
    )
  }
}