import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {HashRouter  as  Router, Route} from 'react-router-dom'
import Restaurant from './components/Restaurant';
import React from 'react';
import axios from 'axios';
import Photo from './Components/Photo.js';

import Orders from './components/Orders';
import Home from './components/Home';

class App extends React.Component {
  constructor() {
    super();

    this.state = { restaurants: [] }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/restaurants')
      .then(res =>{
        this.setState({restaurants: res.data })
      });
  }

  
  render() {

    const restaurants = this.state.restaurants.map(photo => {
      return <Photo photo={photo}/>
    });

  function App() {
 return (
   
     
      <Router>
      
     <div id="bodypage" className="flex flex-col h-screen justify-between">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Restaurants" component={Restaurant}/>
      <Route exact path="/Orders" component={Orders}/>
      <Footer/>
      </div>
      
      </Router>
    
  
  );
}

export default App;
