import React from 'react';


class Flexi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name:'',states:'' }
  }

  onInputChange = (e) => {
    this.setState({name:e.target.value})
  }
  onSelectChange = (e) => {
    this.setState({states:e.target.value})
  }

  onButtonClick = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name,this.state.states)
  }


  render() { 
    return ( 
      <div>
        <form>
          <label>
            {this.props.config.items[0].label}
          </label>
          {console.log(this.state.name)}
          {console.log(this.state.states)}
          <input
            type={this.props.config.items[0].type}
            onChange={this.onInputChange}
          />
          <br /><br/>
          <label>
            {this.props.config.items[1].label}   </label>
          <select
            name={this.props.config.items[1].state}
            onChange={this.onSelectChange}
          >
            <option
              value={this.props.config.items[1].values[1]}
            >
              {this.props.config.items[1].values[0]}
            </option>
            <option
              value={this.props.config.items[1].values[1]}
            >
              {this.props.config.items[1].values[1]}
            </option>
            <option
              value={this.props.config.items[1].values[2]}
            >
              {this.props.config.items[1].values[2]}
            </option>
          </select>
          <button
            type="submit"
            onClick={this.onButtonClick}
          >
            SUBMIT
          </button>
        </form>
      </div>
     );
  }
}
 
export default Flexi;