import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Country extends Component {
  render() {
    return(
      <div className='row border p-3 h-100'>
        <div className='col-4'>
          <img src={this.props.flag} className='w-100' style={{objectFit: 'cover', height: (!this.props.link ? '100px' : '100%')}} />
        </div>
        <div className='col'>
          <h3>{this.props.name}</h3>
          <div>{this.props.capital}</div>
          <div>{this.props.region}</div>
          {this.props.link && <div>{this.props.currency}</div>}
          {!this.props.link && <NavLink to={`${this.props.name}`} state={{...this.props}} className='nav-link'>Voir la fiche du pays</NavLink>}
        </div>
      </div>
    )
  }
}