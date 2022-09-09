import './App.css';
import Header from './components/HomePages/Header';
import About from './components/HomePages/About';
// import Contact from './components/HomePages/Contact';
import Education from './components/HomePages/Education';
import Experience from './components/HomePages/Experience';
import Footer from './components/HomePages/Footer';
import Login from './components/HomePages/Login';
import NavBar from './components/HomePages/NavBar';
import Projects from './components/HomePages/Projects';
//Admin component
import Admin from './components/AdminComponents/Admin';
//Edit components

// import EditAbout from './components/EditComponents/EditAbout';
// import EditEducation from './components/EditComponents/EditEducation';
// import EditExperience from './components/EditComponents/EditExperience';
// import EditProjects from './components/EditComponents/EditProjects';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     {/* NavBar component */}
     <NavBar />
     {/* <Header /> */}
     <Routes>
        <Route exact path='/' element={<Header />}/>
     </Routes>
     <Routes>
        <Route exact path='/' element={<About />}/>
     </Routes>
     <Routes>
        <Route exact path='/' element={<Education />}/>
     </Routes>
     <Routes>
        <Route exact path='/' element={<Projects />}/>
     </Routes>
     <Routes>
        <Route exact path='/' element={<Experience />}/>
     </Routes>
     {/* <Routes>
        <Route exact path='/' element={<Footer />}/>
     </Routes> */}
     <Routes>
        <Route exact path='/login' element={<Login />}/>
     </Routes>
     <Routes>
        <Route exact path='/admin' element={<Admin />}/>
     </Routes>

     <Footer />
    </div>
  );
}

export default App;
