import * as React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import 'remixicon/fonts/remixicon.css'
import Provider from "./Context/ContextProvider";


function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
