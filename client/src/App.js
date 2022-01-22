import React from "react";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import BlogsList from "./components/Blogs/BlogsList";
import BlogItem from "./components/Blogs/BlogItem";

const App = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={BlogsList} />
            <Route path="/blogs/:id" component={BlogItem} />
        </Switch>
    </Router>
  )
}

export default App;