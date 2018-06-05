import React from 'react'
import PropTypes from 'prop-types'

export class Dropdown extends React.Component {
  renderSelectOptions = (currency, index) => (
    <option key={index} value={currency}>{currency}</option>
  )

  render () {
    const {input} = this.props

    let cryptoNames
    if (this.props.currencies) {
      cryptoNames = this.props.currencies.map(cryptoData => cryptoData.name)
      cryptoNames.sort()
    }

    return (
      <div>
        <select {...input}>
          <option value="">Pick Cryptocurrency</option>
          {this.props.currencies && cryptoNames.map((name, index) => this.renderSelectOptions(name, index))}
        </select>
      </div>
    )
  }
}

Dropdown.propTypes = {
  currencies: PropTypes.array,
  input: PropTypes.object,
  label: PropTypes.string,
}
