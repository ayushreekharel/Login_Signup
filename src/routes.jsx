import Signpage from "./App";
import Login from "./login";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./home";
function Route_path(){
    return(
        <Router>
        <Routes>
          {/* Define route paths */}
          <Route path="/" element={<Signpage />} />  {/* Default path */}
          <Route path="/login" element={<Login />} />  {/* Path for login page */}
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>  
    )
}
export default Route_path