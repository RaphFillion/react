import React, { Component } from 'react';
import Button from '../../../components/Button/Button';

export default class modifyForm extends Component {
  state = {
    titreSaisi: this.props.titre,
    auteurSaisi: this.props.auteur,
    pagesSaisi: this.props.pages
  }

  handleValidation = () => {
    this.props.modidfyValidation(this.props.id, this.state.titreSaisi, this.state.auteurSaisi, this.state.pagesSaisi);
  }

  render() {
    return(
      <>
        <td className='align-middle'><input className='form-control' type="text" value={this.state.titreSaisi} onChange={(e) => this.setState({titreSaisi: e.target.value})} /></td>
        <td className='align-middle'><input className='form-control' type="text" value={this.state.auteurSaisi} onChange={(e) => this.setState({auteurSaisi: e.target.value})} /></td>
        <td className='align-middle'><input className='form-control' type="number" value={this.state.pagesSaisi} onChange={(e) => this.setState({pagesSaisi: e.target.value})} /></td>
        <td colSpan={2} className="d-flex justify-content-around mt-2 mb-2">
          <Button type="primary" click={this.handleValidation}>Valider</Button>
        </td>
      </>
    );
  }
}