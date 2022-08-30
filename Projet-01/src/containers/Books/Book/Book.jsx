import React, {Component} from 'react';
import Button from '../../../components/Button/Button';

export default class Book extends Component {
  render() {
    return(
      <>
        <td className='align-middle'>{this.props.titre}</td>
        <td className='align-middle'>{this.props.auteur}</td>
        <td className='align-middle'>{this.props.pages} pages</td>
        <td colSpan={2} className="d-flex justify-content-around mt-2 mb-2">
          <Button type="warning" click={() => console.log('modification')}>Modification</Button>
          <Button type="danger" click={this.props.delete}>Suppression</Button>
        </td>
      </>
    )
  }
}