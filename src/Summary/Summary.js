import React from 'react';
import './Summary.css';
import SummaryOption from '../SummaryOption/SummaryOption';
import Total from '../Total/Total';

class Summary extends React.Component {

  render(){
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <SummaryOption 
          key={featureHash}
          featureHash={featureHash}
          selectedOption={selectedOption}
          feature={feature}  
        />
      );
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total value={total}/>
      </section>
    );
  }
}

export default Summary