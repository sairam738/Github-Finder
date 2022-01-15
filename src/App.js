import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./Pages/AboutPage";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import User from "./Pages/user";
import {GithubProvider} from "./Context/Github/GithubContext";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className= 'flex flex-col justify-between h-screen'>
          <Navbar />
            <Routes>
              <Route exact path = '/' element = {<Home/>}/>
                <Route path = '/about' element = {<About/>}/>
                <Route path = '/user/:login' element = {<User/>}/>
                <Route path = '/notFound' element = {<NotFound/>}/>
                <Route path = '/*' element = {<NotFound/>}/>
            </Routes>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
