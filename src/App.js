import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import Bookmarks from "./components/Bookmarks";
import Settings from "./components/Settings";
import Users from "./components/Users";
import Topic from "./components/Topic";
import Landing from "./components/Landing";
import { TopicProvider } from "./components/TopicContext";
import { ReferenceProvider } from "./components/ReferenceContext";
import { AuthContext, AuthProvider, useAuth } from "./components/Auth";
import CreatePost from "./components/CreatePost";
import CreateRefs from "./components/CreateRefs";
import CreateTopic from "./components/CreateTopic";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import { PrivateRoutes, PublicRoutes } from "./components/Routes";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
	Redirect,
	useHistory,
	useLocation,
} from "react-router-dom";

function App() {
	const { loggedIn } = useAuth();

	return (
		<div className='flex flex-row mx-4'>
			<Switch>
				<Route path='/Landing'>
					<Landing />
				</Route>
        <Route path="/Register">
          <Register />
        </Route>
				<PrivateRoute>
					<Navbar />
					<Route exact path='/' component={Home} />
					<Route path='/Explore' component={Explore} />
					<Route path='/Profile' component={Profile} />
					<Route path='/Topic/:id' component={Topic} />
					<Route path='/CreatePost' component={CreatePost} />
					<Route path='/CreateRefs' component={CreateRefs} />
					<Route path='/CreateTopic' component={CreateTopic} />
          <Route path='/Settings' component={Settings} />
				</PrivateRoute>
			</Switch>
		</div>
	);
}

export default App;
