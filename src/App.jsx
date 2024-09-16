import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
import AnimalModal from "./components/AnimalModal";
import Admin from "./Registration/Admin";
import SideBar from "./components/SideBar";
import Order from "./components/Order";

//Keycloak

import PrivateRoute from "./routes/PrivateRoutes";
import SidebarRescuer from "./components/admin/SidebarRescuer";
import SidebarAnimal from "./components/admin/SidebarAnimal";
import UserSidebar from "./components/User/UserSidebar";
import FosterCarePage from "./components/FosterCarePage";
import FosterCare from "./components/admin/FosterCare";
import Profile from "./components/User/Profile";
import RescuerPrifile from "./components/User/RescuerPrifile";
import FosterCareSideBar from "./components/FosterCare/FosterCareSideBar";
import AnimalsInFosterCare from "./components/FosterCare/AnimalsInFosterCare";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminPrivateRoute from "./routes/AdminRoute";
import Unauthorized from "./components/Pages/Unauthorized";






function App() {

  useEffect(() => {
    if (window.opener) {
      // send them to the opening window
      window.focus();
      window.opener.location.href = "/";
      window.close();
    }
  }, []);
  return (
    <>

      <Layout>

        <Routes>
          < Route path="/" element={<Home />} />
          <Route path="/rescuer" element={<RescuerPage />} />
          < Route path="/about" element={<About />} />
          < Route path="/contact" element={<Contact />} />
          < Route path="/Signin" element={<Signin />} />
          < Route path="/userSignUp" element={<UserSignUp />} />
          <Route path="/admin/signup" element={<Admin />} />
          < Route path="/rescuerSignUp" element={<RescuerSignUp />} />
          < Route path="/adoptAnimal" element={<AdoptAnimal />} />
          <Route path="/blogPage" element={<BlogPage />} />
          <Route path="/animalRegistration" element={<AnimalRegistration />} />
          <Route path="/animalModal" element={<AnimalModal />} />

      
          <Route path="admin" element={<AdminPrivateRoute />}>
            <Route path="rescuer" element={<SidebarRescuer />} />
            <Route path="animals" element={<SidebarAnimal />} />
            <Route path="fosterCare" element={<FosterCare />} />
          </Route>

          <Route path="/unauthorized" element={<Unauthorized/>}/>
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/order" element={<Order />} />
          <Route path="/userSidebar" element={<UserSidebar />} />
          <Route path="/userProfile" element={<Profile />} />
          <Route path="/rescuerProfile" element={<RescuerPrifile />} />
          <Route path="/fosterCare" element={<FosterCareSideBar />} />
          <Route path="/fosterCare/animals" element={<AnimalsInFosterCare />} />
          {/* <Route path="/rescuer"element={<PrivateRoute/>}/> */}

        </Routes>

      </Layout>
    </>
  );
}

export default App
