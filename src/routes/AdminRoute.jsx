import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

//import AdminDashboard from "../components/Admin/AdminDashboard";
import { useAuth } from "../Context/auth";
import AdminDashboard from "../components/admin/AdminDashboard";

export default function AdminPrivateRoute() {
  
  const [auth] = useAuth();

  return auth?.role && auth.role.includes("admin") ? <AdminDashboard /> : <Navigate to="/unauthorized" />;
}