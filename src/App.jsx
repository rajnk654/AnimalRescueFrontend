import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signin from './Registration/Signin'
import UserSignUp from './Registration/UserSignUp'
import Layout from './components/layout/Layout'
import RescuerSignUp from "./components/RescuerSignUp";
import RescuerPage from "./components/RescuerPage";
import AdoptAnimal from "./components/AdoptAnimal";
import BlogPage from "./components/BlogPage";
import AnimalRegistration from "./Registration/AnimalRegistration";
//import Header from "./components/layout/Header";



function App() {
  return (
    <>
      <Layout>
      
        <Routes>
          < Route path="/" element={<Home />} />
          <Route path="/rescuer" element={<RescuerPage/>}/>
          < Route path="/about" element={<About />} />
          < Route path="/contact" element={<Contact />} />
          < Route path="/Signin" element={<Signin />} />
          < Route path="/userSignUp" element={<UserSignUp />} />
          < Route path="/rescuerSignUp" element={<RescuerSignUp />} />
          < Route path="/adoptAnimal" element={<AdoptAnimal />} />
          <Route path="/blogPage"element={<BlogPage/>}/>
          <Route path="/animalRegistration" element={<AnimalRegistration/>}/>
        </Routes>
       
      </Layout>
      

    </>
  );
}

export default App
