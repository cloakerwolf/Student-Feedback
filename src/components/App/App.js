import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Content from '../Content/Content';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SubmitFeedback from '../SubmitFeedback/SubmitFeedback';
import Admin from '../Admin/Admin';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
          <Route exact path="/" component={Feeling} />
          <Route path="/content" component={Content} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/submitfeedback" component={SubmitFeedback} />
          <Route path="/admin" component={Admin} />
      </div>
      </Router>
    );
  }
}

export default App;
