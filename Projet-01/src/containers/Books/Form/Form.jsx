import React, {Component} from 'react';
import Button from '../../../components/Button/Button';

export default class Form extends Component {
  state = {
    titreSaisi: '',
    auteurSaisi: '',
    pagesSaisi: ''
  }

  handleValidationForm = (e) => {
   e.preventDefault();
   this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.pagesSaisi);
   this.setState({
    titreSaisi: '',
    auteurSaisi: '',
    pagesSaisi: ''
   });
  }

  render() {
    return(
      <>
        <h2 className='p-2 m-2 text-center rounded bg-dark text-secondary' style={{fontFamily: 'montserrat'}}>Affichage du formulaire d'ajout</h2>
        <form className='mb-4'>
          <div className="mb-3 mt-3">
            <label htmlFor="titre" className="form-label">Titre du livre</label>
            <input
              type="text"
              className="form-control"
              id="titre"
              value={this.state.titreSaisi}
              onChange={(e) => this.setState({titreSaisi: e.target.value})} />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="auteur" className="form-label">Auteur</label>
            <input 
              type="text"
              className="form-control"
              id="auteur" 
              value={this.state.auteurSaisi} 
              onChange={(e) => this.setState({auteurSaisi: e.target.value})} />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="pages" className="form-label">Pages</label>
            <input 
              type="number" 
              className="form-control" 
              id="pages" 
              value={this.state.pagesSaisi} 
              onChange={(e) => this.setState({pagesSaisi: e.target.value})} />
          </div>
          <Button type="success" click={this.handleValidationForm}>Valider</Button>
        </form>
      </>
    )
  }
}