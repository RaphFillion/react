import { Component } from 'react';
import axios from 'axios' 
import Title from '../../Components/titles/title'
import Button from '../../Components/buttons/button'
import Country from './Country/Country';

export default class ManageCountry extends Component {
  state = {
    countryList: [],
    loading: false,
    regionSelect: null,
    currentPage: 1,
  }

  componentDidMount = () => {
    this.handleRegion('all')
  }

  handleRegion = (region) => {
    let param = ''
    if (region === 'all') param = region
    else param = `region/${region}`

    this.setState({loading: true})
    axios.get(`https://restcountries.com/v3.1/${param}`)
      .then(res => {
        const countryList = res.data.map(country => {
          if (country.currencies !== undefined) {
            let [first] = Object.keys(country.currencies)
            return {
              name: country.name.official,
              capital: country.capital,
              region: country.region,
              flag: country.flags.svg,
              currency: country.currencies[first].name
            }
          }
        })
        this.setState({countryList, loading: false, regionSelect: region, currentPage: 1})
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false})
      })
  }

  render() {
    let pagination = []
    let countryList = ''
    if (this.state.countryList) {
      let end = this.state.countryList.length / 10
      if (this.state.countryList.length % 10 !== 0) end++
      for (let i = 1; i <= end; i++) {
        pagination.push(
          <Button 
            key={i} 
            type='info' 
            isSelected={this.state.currentPage === i}
            click={() => this.setState({currentPage: i})}>
              {i}
          </Button>
        )
      }
      const listStart = (this.state.currentPage - 1) * 10
      const listEnd = (this.state.currentPage) * 10
      const reducedList = this.state.countryList.slice(listStart, listEnd)
      countryList = 
        reducedList.map((country, i) => {
          return (
            <div className='col-12 col-md-6 mt-5' key={i} style={{height: '225px'}}>
              <Country {...country}/>
            </div>
          )
        })
    }
    return(
      <div className='container'>
        <Title>Liste des pays du monde</Title>
        <Button 
          type="info" 
          click={() => this.handleRegion('all')} 
          isSelected={this.state.regionSelect === 'all'}>
            Tous
        </Button>
        <Button 
          type="info" 
          click={() => this.handleRegion('Americas')}
          isSelected={this.state.regionSelect === 'Americas'}>
            Amérique
        </Button>
        <Button 
          type="info" 
          click={() => this.handleRegion('Europe')}
          isSelected={this.state.regionSelect === 'Europe'}>
            Europe
        </Button>
        <Button 
          type="info" 
          click={() => this.handleRegion('Asia')}
          isSelected={this.state.regionSelect === 'Asia'}>
            Asie
        </Button>
        <Button 
          type="info" 
          click={() => this.handleRegion('Africa')}
          isSelected={this.state.regionSelect === 'Africa'}>
            Afrique
        </Button>
        <Button 
          type="info" 
          click={() => this.handleRegion('Oceania')}
          isSelected={this.state.regionSelect === 'Oceania'}>
            Océanie
        </Button>
        <span className='badge bg-success ms-3'>Pays: {this.state.countryList.length}</span>
        {
          this.state.loading 
          ? <div>Loading ... </div> :
          <div className='row'>
            {countryList}
          </div>
        }
        <div className='my-5'>{pagination}</div>
      </div>
    )
  }
}