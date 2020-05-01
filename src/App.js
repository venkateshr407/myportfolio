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
import Contacthit from './Components/Contacthit';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Loader from 'react-loader-spinner'
import Loader from './Loader';

class App extends Component{
  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 3000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
  componentDidMount() {
    this.wait(3000);
    // this.fetchGitHub();
  }
  render(){
  if (this.state.loading) return <Loader />;
      return(  
            <Router>
    
              <Nav1/>
                <div>
                {/* <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      /> */}
                  <Route exact path="/" component={Home} />
                  <Route exact path="/" component={Contacthit} />
                </div>
      
          <div>
               <Route exact path="/gallery" component={Jumbotron} />  
               <Route exact path="/gallery" component={Infotext} />
               <Route exact path="/gallery" component={Cards} />
               <Route exact path="/gallery" component={Heading} />
               <Route exact path="/gallery" component={StickyFooter1} />

               <Route path="/about" component={About}/>
              <Route path="/about" component={Layout} /> 
              <Route exact path="/about" component={Contacthit} />
              <Route path="/about" component={StickyFooter1} />           
            </div>
         </Router>
           
      );

  }
}



export default App;
