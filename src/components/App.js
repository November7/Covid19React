import React from 'react';
import './App.scss';
import API_DATA from '../mocks/API_DATA.json'
import CountriesTable from './CountriesTable/CountriesTable';
import Summary from './Summary/Summary';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      FETCH_DATA: {
        Global: {},
        Countries: []
      },
      countries: [],
      global: {}
    }
    //this.filterTiles = this.filterTiles.bind(this)
  }

  filterTiles = (e)=> {
    const filterCountries = this.state.FETCH_DATA.Countries.filter(country => country.Country.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({
      countries: filterCountries
    })
  }

  componentDidMount() {
    
    axios.get('https://api.covid19api.com/summary').then( response => {
      this.setState({
          FETCH_DATA: response.data,
          countries: response.data.Countries,
          global: response.data.Global
        })
    })
    // this.setState({
    //   FETCH_DATA: API_DATA,
    //   countries: API_DATA.Countries,
    //   global: API_DATA.Global
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          #ZOSTANWDOMU
        </header>
        <div className="content">
          <Summary
            global={this.state.global}
            filterTiles={this.filterTiles}
          />
          <CountriesTable
            countries={this.state.countries}
          /> 
        </div>
      </div>
    );
  }
}

export default App;
