// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="usd-and-value-heading">USD</p>
        <p className="usd-and-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="list-container">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCrptocurrency => (
            <CryptocurrencyItem
              key={eachCrptocurrency.id}
              cryptocurrencyDetails={eachCrptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }
  
  render() {
    return (
      <div className="crpto-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt=" cryptocurrency"
          className="image"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
