import { Component } from 'react';
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import Character01 from '../../../assets/images/persos/player1.png'
import Character02 from '../../../assets/images/persos/player2.png'
import Character03 from '../../../assets/images/persos/player3.png'

export default class Images extends Component {
  render() {
    let imageToPrint = ''
    if (this.props.idCharacter === 1) imageToPrint = Character01
    else if (this.props.idCharacter === 2) imageToPrint = Character02
    else if (this.props.idCharacter === 3) imageToPrint = Character03

    return(
      <div className='row align-items-center justify-content-between'>
        <BsArrowLeftShort 
          size={'50px'} 
          className='col-4' 
          role="button" 
          onClick={this.props.left}
        />

        <img className='col-4 w-25' src={imageToPrint} alt='perso' />

        <BsArrowRightShort
          size={'50px'} 
          className='col-4' 
          role="button" 
          onClick={this.props.right}
        />
      </div>
    )
  }
}