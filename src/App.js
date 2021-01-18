import React,{Component, lazy , Suspense}  from 'react';
import Jumbotron from './Components/Jumbotron';
import Infotext from './Components/Infotext';
import Cards from './Components/Cards';
import StickyFooter1 from './Components/StickyFooter1';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import {Layout} from './Layout';
import Nav1 from './Components/Nav1';
// import PostParent from './Components/PostParent';
import Contacthit from './Components/Contacthit';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Loader from './Loader';
const PostParent = lazy(() => import('./Components/PostParent'));

class App extends Component{

  state = { loading: true };
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 7000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
  componentDidMount() {
    this.wait(7000);
  }

  render(){
  if (this.state.loading) return <Loader />;
  
      return(  
            <Router>
    
              <Nav1/>
                <div>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/" component={Contacthit} />
                </div>
      
          <div>
              <Route exact path="/gallery" component={Jumbotron} />  
              <Route exact path="/gallery" component={Infotext} />
              

              <Route exact path="/gallery" component={Cards} />
              <Suspense 
                fallback={<div 
                className="spinner-grow text-success spinnerStyle" role="status">
                <span className="sr-only">Loading...</span>
                </div>}
              >
                <Route exact path="/gallery" component={PostParent} />
              </Suspense>  
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
