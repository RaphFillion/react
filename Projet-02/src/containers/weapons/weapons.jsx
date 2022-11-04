import { Component } from 'react';
import Weapon from './weapon/weapon';
import arc from '../../assets/images/armes/arc.png'
import epee from '../../assets/images/armes/epee.png'
import fleau from '../../assets/images/armes/fleau.png'
import hache from '../../assets/images/armes/hache.png'

export default class Weapons extends Component {
  render() {
    return(
      <div className='row text-center'>
        {this.props.weaponsList.map((weapon, i) => {
          let tabWeapon;
          switch(weapon) {
            case 'arc' : tabWeapon = arc;
              break;
            case 'epee' : tabWeapon = epee;
              break;
            case 'fleau' : tabWeapon = fleau;
              break;
            case 'hache' : tabWeapon = hache;
              break;
          }
          return(
            <div className='col-3' key={i}>
              <Weapon 
                weaponPicture={tabWeapon}
                isCurrentWeapon={this.props.currentWeapon === weapon}
                click={() => this.props.changeWeapon(weapon)}>
                  {weapon}
              </Weapon>
            </div>
          ) 
        })}
      </div>
    )
  }
}