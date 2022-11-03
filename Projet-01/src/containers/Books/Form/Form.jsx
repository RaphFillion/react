import React, {Component} from 'react';
import Button from '../../../components/Button/Button';
import {withFormik} from 'formik';
import * as Yup from 'yup';

class Form extends Component {
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
              style={{marginBottom: '10px'}}
              id="titre"
              name='titre'
              value={this.props.values.titre}
              onChange={this.props.handleChange}
              onBlur = {this.props.handleBlur}
              />
            {
              this.props.touched.titre && this.props.errors.titre
              && <span style={{color: 'red'}}>{this.props.errors.titre}</span>
            }
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="auteur" className="form-label">Auteur</label>
            <input 
              type="text"
              className="form-control"
              style={{marginBottom: '10px'}}
              id="auteur"
              name='auteur'
              value={this.props.values.auteur} 
              onChange={this.props.handleChange}
              onBlur = {this.props.handleBlur}
              />
              {
                this.props.touched.auteur && this.props.errors.auteur
                && <span style={{color: 'red'}}>{this.props.errors.auteur}</span>
              }
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="pages" className="form-label">Pages</label>
            <input 
              type="number" 
              className="form-control" 
              style={{marginBottom: '10px'}}
              id="pages"
              name='nbPages'
              value={this.props.values.nbPages} 
              onChange={(e) => this.props.setFieldValue('nbPages', +e.target.value)}
              onBlur = {this.props.handleBlur}
              />
              {
                this.props.touched.nbPages && this.props.errors.nbPages
                && <span style={{color: 'red'}}>{this.props.errors.nbPages}</span>
              }
          </div>
          <Button type="warning" fullWidth="true" click={this.props.handleReset}>Reset</Button>
          <Button type="success" click={this.props.handleSubmit}>Valider</Button>
        </form>
      </>
    )
  }
}

export default withFormik({
  mapPropsToValues : () => ({
    titre: '',
    auteur: '',
    nbPages: ''
  }),
  validationSchema : Yup.object().shape({
    titre : Yup.string()
      .min(3, 'Le titre doit avoir plus de 3 caractères')
      .max(15, 'Le titre doit avoir moins de 15 caractères')
      .required('Le titre est obligatoire'),
    auteur : Yup.string()
      .min(3, 'L’auteur doit avoir plus de 3 caractères')
      .required('L’auteur est obligatoire'),
    nbPages : Yup.number()
      .lessThan(1000, 'Nombre de page < 1000')
      .moreThan(50, 'Nombre de page > 50')
  }),
  /* validate : values => {
    // Validation avec Formik
    const errors = {};
    if (values.titre.length < 3) {
      errors.titre = 'Le titre doit avoir plus de 3 caractères';
    }
    if (values.titre.length > 15) {
      errors.titre = 'le titre doit avoir moins de 15 caractères';
    }
    if (!values.auteur) {
      errors.auteur = 'Le champs auteur est obligatoire';
    }
    if (!values.nbPages) {
      errors.nbPages = 'Le champs Pages est obligatoire';
    }
    return errors;
  }, */
  handleSubmit : (values, {props}) => {
    props.validation(values.titre, values.auteur, values.nbPages);
  }
})(Form);