
import { Navigate, useLocation } from "react-router-dom";
import UserDashboard from "../components/User/UserDashboard";
import { useAuth } from "../Context/auth";

const PrivateRoute = () => {
  
  const [auth] = useAuth(); // Get authentication status from context

  return auth ? (
    <UserDashboard/>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;







// import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// // import Dasboard from "../Dashboard/Dasboard";
// import { useAuth } from "../Context/auth";
// //import PageNotFound from "../../src/Main/PageNotFound";
// import AdoptAnimal from "../components/AdoptAnimal";

// const PrivateRoute = () => {
//   const [loading, setLoading] = useState(true);
//   const [, setAuthenticated] = useState(false); 
//   const [auth] = useAuth(); // Get authentication status from context

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/v1/auth/user-auth", {
//           headers: {
//             Authorization: localStorage.getItem("token")
//           }
//         });
//         if (response.data.ok) {
//           setAuthenticated(true);
//         }
//       } catch (error) {
//         console.error("Error checking authentication:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuthentication();
//   }, []);

//   if (loading) {
//     return null; 
//   }

//   return auth.token ? (
//     <AdoptAnimal />
//   ) : (
//     <Navigate to="/signin" />
//     // <PageNotFound/>
//   );
// };

// export default PrivateRoute;
