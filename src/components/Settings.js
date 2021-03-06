import React from "react";
import SettingsSidebar from "../components/SettingsSidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Settings() {
  return (
    <Router>
      <header className="h-16 ml-64 w-full border-r bg-white fixed">
        <h1 className="font-bold p-5">Settings</h1>
      </header>
      <main className="ml-64 mt-16 h-max bg-white flex flex-row">
        <SettingsSidebar />
        <div className="w-full">
          <Switch>
            <Route path="/Settings/username">
              <div className="flex flex-col content-around border-2 border-black">
                <div className="p-2">
                  <h3 className='py-1'>Current Username</h3>
                  <p className='py-1'>@Username</p>
                </div>
                <div className="flex flex-col content-around border-t">
                  <p className="px-2 py-1">New Username</p>
                  <input
                    className="w-full h-8 rounded-full px-2 py-4 mb-2"
                    type="text"
                    placeholder="Enter new username"
                  />
                </div>
              </div>
            </Route>
            <Route path="/Settings/password">
              <div className="flex flex-col content-around border-2 border-black">
                <p className="px-2 py-1">Current Password</p>
                <input
                  className="w-full h-8 rounded-full px-2 py-4 mb-2"
                  placeholder="Enter current password"
                  type="password"
                  id="pass"
                  name="password"
                  minlength="8"
                  required
                />
                <div className="flex flex-col content-around border-t">
                  <p className="px-2 py-1">New password</p>
                  <input
                    className="w-full h-8 rounded-full px-2 py-4 mb-2"
                    placeholder="Enter new password"
                    type="password"
                    id="pass"
                    name="password"
                    minlength="8"
                    required
                  />
                </div>
                <div className="flex flex-col content-around border-t">
                  <p className="px-2 py-1">Confirm new password</p>
                  <input
                    className="w-full h-8 rounded-full px-2 py-4 mb-2"
                    placeholder="Enter new password again"
                    type="password"
                    id="pass"
                    name="password"
                    minlength="8"
                    required
                  />
                </div>
              </div>
            </Route>
            <Route path="/Settings/email">
              <div className="flex flex-col content-around border-2 border-black">
                <div className="p-2">
                  <h3 className='py-1'>Current Email</h3>
                  <p className='py-1'>user@email.com</p>
                </div>
                <div className="flex flex-col content-around border-t">
                  <p className="px-2 py-1">New Email</p>
                  <input
                    className="w-full h-8 rounded-full px-2 py-4 mb-2"
                    type="text"
                    placeholder="Enter new email"
                  />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default Settings;
