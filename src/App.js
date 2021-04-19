import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import Bookmarks from "./components/Bookmarks";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import Users from "./components/Users";
import Topic from "./components/Topic";
import { TopicProvider } from "./components/TopicContext";
import { ReferenceProvider } from "./components/ReferenceContext";
import { AuthProvider } from "./components/Auth";
import CreatePost from "./components/CreatePost";
import CreateRefs from "./components/CreateRefs";
import CreateTopic from "./components/CreateTopic";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Home />,
  },
  {
    path: "/Explore",
    sidebar: () => <Sidebar />,
    main: () => <Explore />,
  },
  {
    path: "/CreatePost",
    sidebar: () => <Sidebar />,
    main: () => <CreatePost />,
  },
  {
    path: "/CreateRefs",
    sidebar: () => <Sidebar />,
    main: () => <CreateRefs />,
  },
  {
    path: "/CreateTopic",
    sidebar: () => <Sidebar />,
    main: () => <CreateTopic />,
  },
  {
    path: `/Topic/:id`,
    sidebar: () => <Sidebar />,
    main: () => <Topic />,
  },
  {
    path: "/Profile",
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Profile />,
  },
  {
    path: "/Profile/:id",
    sidebar: () => <Sidebar />,
    main: () => <Users />,
  },
  {
    path: "/Settings",
    sidebar: () => <Sidebar />,
    main: () => <Settings />,
  },
];

function App() {
  return (
    <AuthProvider>
      <TopicProvider>
        <ReferenceProvider>
          <Router>
            <div className="flex flex-row mx-4">
              <Navbar />
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
              {/* </main> */}
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
            </div>
          </Router>
        </ReferenceProvider>
      </TopicProvider>
    </AuthProvider>
  );
}

export default App;
