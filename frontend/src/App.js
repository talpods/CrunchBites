import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {HashRouter  as  Router, Route} from 'react-router-dom'
import Restaurant from './components/Restaurant';
import React from 'react';


import Orders from './components/Orders';
import Home from './components/Home';
import  Menu  from './components/Menu';
import Login from './components/Login';
import Customer from './components/Customer';
import Owner from './components/Owner';


class App extends React.Component {

  
 render(){

 
 return (
   
     
      <Router>
      
     <div id="bodypage" className="flex flex-col h-screen justify-between">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/Customer" component={Customer}/>
      <Route exact path="/Owner" component={Owner}/>
      <Route exact path="/Restaurants" component={Restaurant}/>
      <Route exact path="/Orders" component={Orders}/>
       <Route exact path="/Menu/:id" component={Menu}/>
      <Footer/>
      </div>
      
      </Router>
    
  
  );
 }
}

 

export default App;
