import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Website from './Containers/Website/Website'

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Website />
      </BrowserRouter>
    )
  }
}
