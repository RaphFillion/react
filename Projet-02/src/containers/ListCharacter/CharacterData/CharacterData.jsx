import { Component } from 'react';

import player1 from '../../../assets/images/persos/player1.png'
import player2 from '../../../assets/images/persos/player2.png'
import player3 from '../../../assets/images/persos/player3.png'

import weapon1 from '../../../assets/images/armes/arc.png'
import weapon2 from '../../../assets/images/armes/epee.png'
import weapon3 from '../../../assets/images/armes/fleau.png'
import weapon4 from '../../../assets/images/armes/hache.png'

export default class CharacterData extends Component {
  render() {
    let imgCharacter = '';
    if (this.props.image === 1) imgCharacter = player1
    else if (this.props.image === 2) imgCharacter = player2
    else if (this.props.image === 3) imgCharacter = player3

    let imgWeapon = '';
    if (this.props.arme === 'arc') imgWeapon = weapon1
    else if (this.props.arme === 'epee') imgWeapon = weapon2
    else if (this.props.arme === 'fleau') imgWeapon = weapon3
    else if (this.props.arme === 'hache') imgWeapon = weapon4

    return(
      <div className='row'>
        <div className='col-6'>
          <img src={imgCharacter} />
        </div>
        <div className='col-6'>
          Force: {this.props.force} <br />
          Agilité: {this.props.agilite} <br />
          Intelligence: {this.props.intelligence}
          <img src={imgWeapon} />
        </div>
      </div>
    )
  }
}