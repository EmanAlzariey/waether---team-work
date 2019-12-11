import React, { Component } from 'react';
import './App.css';
import PicComp from './PicComp'
import ButtonComp from './ButtonComp'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(){
    super()

    this.state={
      city:"",
      dataArr:[]
    }
  }

  fetchBtn=(e)=>{
    this.setState({
      city:e.target.name
    })
    
    fetch(`http://api.weatherstack.com/current?access_key=e49621cf55fd2461357f46f8cc5431e1&query=sanaa`)
      .then(response => response.json())
      .then(json => this.state.dataArr[json]);
  }


  render() {
    return (
      <div>
        
        <ButtonComp fetchBtn={this.fetchBtn}/>
        <PicComp temp={this.state.dataArr.current.temperature}/>
      </div>
    );
  
  }
}

export default App;


