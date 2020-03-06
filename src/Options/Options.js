import React from 'react';
import slugify from 'slugify';
import Option from '../Option/Option';
import './Options.css';

class Options extends React.Component {
  render(){
    const options = this.props.feature.map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <Option 
          key={itemHash}
          itemHash={itemHash}
          item={item}
          featureName={this.props.featureName}
          checked={item.name === this.props.selected.name}
          onChange={this.props.onChange}
          />
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