import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/Home";
import MyGronetters from "../pages/MyGronetters";
import PopularDiscussions from "../pages/PopularDiscussions";
import Explore from "../pages/Explore";
import Messages from "../pages/Messages";
import MyGronet from "../pages/MyGronet";
import CreateGroup from "../pages/CreateGroup";



const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />        {/* 👈 IMPORTANT */}
        <Route path="/home" element={<Home />} />
        <Route path="/my-gronetters" element={<MyGronetters />} />
        <Route path="/popular-discussions" element={<PopularDiscussions />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/my-gronet" element={<MyGronet />} />
         <Route path="/create-group" element={<CreateGroup />} /> 
         
      </Route>
    </Routes>
  );
};

export default AppRoutes;
