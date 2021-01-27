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
    header: () => (
      <header className="w-full shadow h-16 bg-white flex flex-row fixed">
        <h1 className="font-bold p-5 w-1/5">App Name</h1>
        <h1 className="font-bold p-5 w-3/5 border-l border-r">Home</h1>
        <h1 className="font-bold p-5 w-1/5">Who to Follow</h1>
      </header>
    ),
    sidebar: () => <Sidebar />,
    main: () => <Home />,
  },
  {
    path: "/Explore",
    header: () => (
      <header className="w-full shadow h-16 bg-white flex flex-row fixed">
        <h1 className="font-bold p-5 w-1/5">App Name</h1>
        <h1 className="font-bold p-5 w-3/5 border-l border-r">Explore</h1>
        <h1 className="font-bold p-5 w-1/5">Who to Follow</h1>
      </header>
    ),
    sidebar: () => <Sidebar />,
    main: () => <Explore />,
  },
  {
    path: `/Topic/:id`,
    header: () => (
      <header className="w-full shadow h-16 bg-white flex flex-row fixed">
        <h1 className="font-bold p-5 w-1/5">App Name</h1>
        <h1 className="font-bold p-5 w-3/5 border-l border-r">Topic</h1>
        <h1 className="font-bold p-5 w-1/5">Who to Follow</h1>
      </header>
    ),
    sidebar: () => <Sidebar />,
    main: () => <Topic />,
  },
  {
    path: "/Profile",
    exact: true,
    header: () => (
      <header className="w-full shadow h-16 bg-white flex flex-row fixed">
        <h1 className="font-bold p-5 w-1/5">App Name</h1>
        <h1 className="font-bold p-5 w-3/5 border-l border-r">Profile</h1>
        <h1 className="font-bold p-5 w-1/5">Who to Follow</h1>
      </header>
    ),
    sidebar: () => <Sidebar />,
    main: () => <Profile />,
  },
  {
    path: "/Profile/:id",
    header: () => (
      <header className="w-full shadow h-16 bg-white flex flex-row fixed">
        <h1 className="font-bold p-5 w-1/5">App Name</h1>
        <h1 className="font-bold p-5 w-3/5 border-l border-r">Profile</h1>
        <h1 className="font-bold p-5 w-1/5">Who to Follow</h1>
      </header>
    ),
    sidebar: () => <Sidebar />,
    main: () => <Users />,
  },
  {
    path: "/Bookmarks",
    header: () => (
      <header className="w-full shadow h-16 bg-white flex flex-row fixed">
        <h1 className="font-bold p-5 w-1/5">App Name</h1>
        <h1 className="font-bold p-5 w-3/5">Bookmarks</h1>
        <h1 className="font-bold p-5 w-1/5">Who to Follow</h1>
      </header>
    ),
    sidebar: () => <Sidebar />,
    main: () => <Bookmarks />,
  },
  {
    path: "/Settings",
    header: () => (
      <header className="w-full shadow h-16 bg-white flex flex-row fixed">
        <h1 className="font-bold p-5 w-1/5">App Name</h1>
        <h1 className="font-bold p-5 w-3/5">Settings</h1>
        <h1 className="font-bold p-5 w-1/5">Who to Follow</h1>
      </header>
    ),
    sidebar: () => <Sidebar />,
    main: () => <Settings />,
  },
];

function App() {

  return (
    //<UserProvider>
      <TopicProvider>
        <ReferenceProvider>
          <Router>
            <Switch className="flex flex-col">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.header />}
                />
              ))}
            </Switch>
            <div className="flex flex-row">
              <Navbar />
              <main className=" border-l border-r h-max w-3/5 bg-lightgray">
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
              </main>
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
    //</UserProvider>
  );
}

export default App;
