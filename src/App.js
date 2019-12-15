import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'


import ListOfCountries from "./components/listOfCountries/listOfCountries";
import CreateBurger from "./components/burger/createBurger";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact render={()=><div>HOME PAGE</div>} />
            <Route path="/ListOfCountries" component={ListOfCountries} />
            <Route path="/CreateBurger" component={CreateBurger} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
