import React, { Component } from 'react';
import './App.css';
import PicComp from './PicComp'
import ButtonComp from './ButtonComp'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(){
    super()

    this.state={
      city:"sana"
    }
  }

  fetchBtn=(e)=>{
    this.setState({
      city:e.target.name
    })
    fetch(`http://api.weatherstack.com/current?access_key=e49621cf55fd2461357f46f8cc5431e1&query=${this.state.city}`)
      .then(response => response.json())
      .then(data => this.setState({ dataArr: data }));
  }


  render() {
    return (
      <div>
        <PicComp />
        <ButtonComp fetchBtn={this.fetchBtn}/>
      </div>
    );
  }
}

export default App;


