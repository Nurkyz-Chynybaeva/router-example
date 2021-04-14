
import './App.css';
import About from "./components/About/About"
import Contact from "./components/Сontacts/Contacts"
import Home from "./components/Home/Home"

import { Route } from "react-router-dom"
import { Link, NavLink, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Posts';

function App() {

  const activeLinkStyle = {
    fontWeight : 'bold',

  };


  return (
    <div className="App">


<ul>
  <li> <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/"
            exact
          >
            Home
          </NavLink>
  
  </li>
  <li> <NavLink 
  activeStyle = {activeLinkStyle}
  activeClassName = "activealink" 
  to = "/contacts"
  >Contacts</NavLink>
  
  </li>

  <li> <NavLink 
  activeStyle = {activeLinkStyle}
  activeClassName = "activealink" 
  to = "/posts"
  >Posts</NavLink>
  
  </li>

  

  <li>
  <NavLink
            activeStyle={activeLinkStyle}
            activeClassName="activeLink"
            to="/about"
          >
            About
          </NavLink>
  
  </li>
</ul>


 <Switch>                                                      {/*второй вариант */}

<Route path = "/about" component = {About} />
<Route exact path="/" component={Home} />

<Route  path = "/contacts" component = {Contact} />
<Route path = "/posts" component = {Posts} />
 <Route exact  path = "/" component = {NotFound} />            {/* первый вариант */}
                   
{/* <Redirect to = "/" />                                           третий вариант */}
</Switch>


    </div>
  );
}

export default App;






