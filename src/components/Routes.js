import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Explore from "./Explore";
import Profile from "./Profile";
import Settings from "./Settings";
import Users from "./Users";
import Topic from "./Topic";
import Landing from "./Landing";
import CreatePost from "./CreatePost";
import CreateRefs from "./CreateRefs";
import CreateTopic from "./CreateTopic";

export const PublicRoutes = () => {
  return (
    <Route path='/Landing' component={Landing} />
  )
};

export const PrivateRoute = () => {
  return (
    <div className='flex flex-row mx-4'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Explore' component={Explore} />
        <Route path='/Profile' component={Profile} />
        <Route path='/topic/:id' component={Topic} />
        <Route path='/CreatePost' component={CreatePost} />
        <Route path='/CreateRefs' component={CreateRefs} />
        <Route path='/CreateTopic' component={CreateTopic} />
        <Route path='/Settings' component={Settings} />
      </Switch>
    </div>
  )
};