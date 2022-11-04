import { Component } from 'react';

export default class Weapon extends Component {
  render() {
    return(
      <div>
        <div>
          <img
            src={this.props.weaponPicture} 
            alt={this.props.children}
            style={{opacity: this.props.isCurrentWeapon ? '1' : '0.5', cursor: 'pointer'}}
            onClick={this.props.click}
          />
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}