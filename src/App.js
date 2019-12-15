import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'


import ListOfCountries from "./components/listOfCountries/listOfCountries";
import CreateBurger from "./components/burger/createBurger";
import Navbar from "./components/navbar/navbar";
import Messanger from "./components/messanger/messanger";

function App() {
  return (
     <div>
         <BrowserRouter>
             <Navbar />
             <Switch>
                 <Route path="/" exact render={()=><div>HOME</div>} />
                 <Route path="/ListOfCountries" component={ListOfCountries} />
                 <Route path="/CreateBurger" component={CreateBurger} />
                 <Route path="/Messanger" component={Messanger} />
             </Switch>
         </BrowserRouter>
     </div>
  );
}

export default App;
