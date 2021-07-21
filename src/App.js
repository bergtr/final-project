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
import { AuthContext, AuthProvider } from "./components/Auth";
import CreatePost from "./components/CreatePost";
import CreateRefs from "./components/CreateRefs";
import CreateTopic from "./components/CreateTopic";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
	Redirect,
	useHistory,
	useLocation,
} from "react-router-dom";

const routes = [
	{
		path: "/",
		exact: true,
		sidebar: () => <Navbar />,
		main: () => <Home />,
	},
	{
		path: "/Explore",
		sidebar: () => <Navbar />,
		main: () => <Explore />,
	},
	{
		path: "/CreatePost",
		sidebar: () => <Navbar />,
		main: () => <CreatePost />,
	},
	{
		path: "/CreateRefs",
		sidebar: () => <Navbar />,
		main: () => <CreateRefs />,
	},
	{
		path: "/CreateTopic",
		sidebar: () => <Navbar />,
		main: () => <CreateTopic />,
	},
	{
		path: `/Topic/:id`,
		sidebar: () => <Navbar />,
		main: () => <Topic />,
	},
	{
		path: "/Profile",
		exact: true,
		sidebar: () => <Navbar />,
		main: () => <Profile />,
	},
	{
		path: "/Profile/:id",
		sidebar: () => <Navbar />,
		main: () => <Users />,
	},
	{
		path: "/Settings",
		sidebar: () => <Navbar />,
		main: () => <Settings />,
	},
  {
    path: "/Landing",
    sidebar: () => '',
    main: () => <Landing />
  }
];

function App() {
	return (
		<AuthProvider>
			<TopicProvider>
				{/* <ReferenceProvider> */}
					<div className='flex flex-row mx-4'>

						<Switch>
							{routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									children={<route.sidebar />}
								/>
							))}
						</Switch>

						{/* <Navbar /> */}
						{/* <main className="w-main border-l border-r bg-lightgray"> */}

						<Switch>
							{routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									children={<route.main />}
								/>
							))}
						</Switch>
					</div>
				{/* </ReferenceProvider> */}
			</TopicProvider>
		</AuthProvider>
	);
}

export default App;
