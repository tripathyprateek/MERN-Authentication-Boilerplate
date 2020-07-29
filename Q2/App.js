import React from 'react';
import Flexi from './Flexi';

const flexiConfig = {
  items: [
    {
      "name": "person_name",
      "label": "Person's Name",
      "type": "TextField",
    },
    {
      "name": "state",
      "label": "Person's state",
      "type": "DropDown",
      "values": [
        "Maharastra",
        "Kerala",
        "Tamil Nadu"
      ]
    }
  ]
};



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submitted:{} }
  }

  onFlexiSubmit = (name,state) => {
    this.setState({
      submitted: {
        name: name,
        state:state
      }
    })
    return this.state.submitted;
  }

  render() { 
    return ( 
      <div>
        {console.log(this.state.submitted)}
        <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig}/>
      </div>
     );
  }
}
 
export default App;
