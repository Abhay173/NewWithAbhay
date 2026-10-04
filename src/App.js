import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'

export default class App extends Component {
  name = 'Abhay Pratap'
  render() {
    return (
      <div>
      <Navbar/>
      <News/>
      </div>
    )
  }
}

