import React from 'react';
import slugify from 'slugify';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Options extends React.Component {
  render(){
    const options = this.props.feature.map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
        <div key={itemHash} className="feature__item">
        <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(this.props.featureName)}
            checked={item.name === this.props.selected.name}
            onChange={e => this.props.onChange(this.props.featureName, item)}
        />
        <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
        </div>
    );
    });

    
    
  
    return (
        <fieldset className="feature" key={this.props.hash}>
          <legend className="feature__name">
            <h3>{this.props.featureName}</h3>
          </legend>
            {options}
        </fieldset>
      );
    }
}

export default Options