import React from 'react';
import ReactDOM from 'react-dom'
import Features from './Features';
import renderer from 'react-test-renderer'

const SELECTED = {
    Processor: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    'Operating System': {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    'Video Card': {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    Display: {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    }
}

const FEATURES = {
  Processor: [
    {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    {
      name: 'Professor X AMD Fire Breather with sidewinder technology',
      cost: 1200
    }
  ],
  "Operating System": [
    {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    {
      name: 'Bodhi Linux',
      cost: 300
    }
  ],
  "Video Card": [
    {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    {
      name: 'Mind mild breeze 2000',
      cost: 1345
    }
  ],
  Display: [
    {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    },
    {
      name: '15.3" HGTV (3840 x 2160) Home makeover edition',
      cost: 1400
    },
  ]
};



describe('<Features />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Features list={FEATURES} selected={SELECTED}/>, div)
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders this UI as expected', () => {
    const tree = renderer.create(<Features list={FEATURES} selected={SELECTED}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

  
})


