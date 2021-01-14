import React from 'react';
import Header from './Components/Header';
import Post from './Components/Post';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

function App() {
  return (
    <div className="App">
     <Header/>
     <Post/>
       
     
    </div>
  );
}

export default App;
