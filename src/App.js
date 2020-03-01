import React,{Component}  from 'react';
import Jumbotron from './Components/Jumbotron';
import Infotext from './Components/Infotext';
import Cards from './Components/Cards';
import StickyFooter1 from './Components/StickyFooter1';
import {Heading} from './Components/Heading';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import {Layout} from './Layout';
import Nav1 from './Components/Nav1';
import {BrowserRouter as Router, Route} from 'react-router-dom';




class App extends Component{

  render(){
      return(  
            <Router>
              <Nav1/>
                <div>
                  <Route exact path="/" component={Home} />
                </div>
              <div>
             
               <Route exact path="/home" component={Jumbotron} />  
               <Route exact path="/home" component={Infotext} />
               <Route exact path="/home" component={Cards} />
               <Route exact path="/home" component={Heading} />
               <Route exact path="/home" component={StickyFooter1} />


               <Route path="/about" component={About}/>
              <Route path="/about" component={Layout} /> 
              <Route path="/about" component={StickyFooter1} />           
            </div>
         </Router>
           
      );

  }
}



export default App;
