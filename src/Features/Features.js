import React from 'react';
import './Features.css';
import Options from '../Options/Options'

class Features extends React.Component {
  render(){
    const features = Object.keys(this.props.list).map((feature, idx) => {
      
      const featureHash = feature + '-' + idx;
      
      return (
        <Options 
          key={featureHash}
          feature={this.props.list[feature]} 
          featureName={feature}
          onChange={this.props.onChange} 
          hash={featureHash} 
          selected={this.props.selected[feature]}/>
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}

export default Features