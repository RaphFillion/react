import { Component } from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiFillPlusSquare } from 'react-icons/ai'

export default class Attribute extends Component {
  render() {
    let nbAttribute = [];
    for(let i = 0; i < this.props.points; i++) {
      nbAttribute.push(<AiFillPlusSquare key={i} fill={'green'}/>)
    }
    return(
      <div className='d-flex align-items-center gap-3 '>
        <AiOutlineMinus role='button' size={'20px'} onClick={this.props.minus}/>
        <div>{this.props.children}</div> {nbAttribute}
        <AiOutlinePlus role='button' size={'20px'} onClick={this.props.plus}/>
      </div>
    )
  }
}