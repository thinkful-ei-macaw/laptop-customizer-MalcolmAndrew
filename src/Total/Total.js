import React from 'react'
import './Total.css'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Total extends React.Component {
  render(){
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(this.props.value)}
        </div>
      </div>
    );
  }
}

export default Total