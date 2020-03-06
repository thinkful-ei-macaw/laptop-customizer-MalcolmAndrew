import React from 'react';
import slugify from 'slugify';
import './Option.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Options extends React.Component {
  render(){
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.featureName)}
          checked={this.props.checked}
          onChange={e => this.props.onChange(this.props.featureName, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

export default Options