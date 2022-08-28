import React, {Component} from 'react';

import classes from './personne.module.scss';

class Personne extends Component {
  render() {
    const monStyle = {
      color: 'white'
    }
    monStyle.fontSize = '12px';

    if (this.props.sexe) {
      monStyle.backgroundColor = '#03a1fc';
    } else {
      monStyle.backgroundColor = '#fc6fdb';
    }

    return (
      <>
        <h2 className={classes.monTitre}>{this.props.nom}</h2>
        {this.props.children}
        <div style={monStyle}>Sexe: {this.props.sexe ? 'Homme' : 'Femme'}</div>
        <button onClick={this.props.click}>Anniversaire</button>
      </>
    );
  }
}

export default Personne;