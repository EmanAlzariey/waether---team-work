import React, { Component } from 'react';
import './App.css';
import ButtonComp from './ButtonComp'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PicComp from './PicComp';


class App extends Component {
  constructor(){
    super()

    this.state={
      city:"",
      sanaa:'',
      aden:'',
      baghdad:'',
      cairo:'',
      temp:''
    }
  }

  componentDidMount(){
      fetch(`http://api.weatherstack.com/current?access_key=e49621cf55fd2461357f46f8cc5431e1&query=sanaa}`)
      .then(response => response.json())
      .then(json => this.setState({sanaa: json}));
      fetch(`http://api.weatherstack.com/current?access_key=e49621cf55fd2461357f46f8cc5431e1&query=aden`)
      .then(response => response.json())
      .then(json => this.setState({aden: json}));
      fetch(`http://api.weatherstack.com/current?access_key=e49621cf55fd2461357f46f8cc5431e1&query=baghdad`)
      .then(response => response.json())
      .then(json => this.setState({baghdad: json}));
      fetch(`http://api.weatherstack.com/current?access_key=e49621cf55fd2461357f46f8cc5431e1&query=cairo`)
      .then(response => response.json())
      .then(json => this.setState({cairo: json}));
  }

  fetchsanaa=(e)=>{
   console.log(this.state.sanaa)
   this.setState({temp:this.state.sanaa.current.temperature})
  }
  fetchaden=(e)=>{
   console.log(this.state.aden)
   this.setState({temp:this.state.aden.current.temperature})
  }
  fetchbagh=(e)=>{
   console.log(this.state.baghdad)
   this.setState({temp:this.state.baghdad.current.temperature})
  }
  fetchcar=(e)=>{
   console.log(this.state.cairo)
   this.setState({temp:this.state.cairo.current.temperature})
  }


  render() {
    return (
      <div>
        <ButtonComp fetchsanaa={this.fetchsanaa} fetchaden={this.fetchaden} fetchbagh={this.fetchbagh} fetchcar={this.fetchcar} />
        <PicComp t={this.state.temp}/>
        
      </div>
    );
  
  }
}

export default App;


