import React, { Component, lazy, Suspense } from "react";
// import Jumbotron from "./Components/Jumbotron";
import Cards from "./Components/Cards";
import StickyFooter1 from "./Components/StickyFooter1";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import { Layout } from "./Layout";
import Nav1 from "./Components/Nav1";
// import PostParent from './Components/PostParent';
import Contacthit from "./Components/Contacthit";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loader from "./Loader";
import withMadhuram from "./HOC/madhuram";
import { Gallary } from "./Components/Gallery/Gallary";
import withGallery from "./HOC/withGallery";
const PostParent = lazy(() => import("./Components/PostParent"));

class App extends Component {
  render() {
    if (this.props.isLoading) return <Loader />;

    console.log(this.props, "props");
    return (
      <Router>
        <Nav1 />
        <Route
          exact
          path="/"
          component={() => <Home data={this.props?.data} />}
        />
        <Route
          exact
          path="/"
          component={() => <Contacthit data={this.props?.data} />}
        />
        <Route exact path="/gallery" component={() => <Gallary galleryData={this.props.galleryData}/>} />
        <Route exact path="/gallery" component={Cards} />
        <Suspense
          fallback={
            <div
              className="spinner-grow text-success spinnerStyle"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          }
        >
          <Route exact path="/gallery" component={PostParent} />
        </Suspense>
        {/* <Route exact path="/gallery" component={StickyFooter1} /> */}
        <Route path="/about" component={About} />
        <Route path="/about" component={Layout} />
        <Route
          exact
          path="/about"
          component={() => <Contacthit data={this.props.data} />}
        />
        <Route path="/about" component={StickyFooter1} />
      </Router>
    );
  }
}




export default withGallery(withMadhuram(App));

