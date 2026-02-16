import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

// Pages
import Home from "../pages/Home";
import MyGronetters from "../pages/MyGronetters";
import Discussion from "../pages/Populardiscussion.tsx/popularDiscussion";

import Explore from "../pages/Explore";
import Messages from "../pages/Messages";
import MyGronet from "../pages/MyGronet";
import CreateGroup from "../pages/CreateGroup";
import Managegroups from "../pages/Managegroups";




const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />        {/* 👈 IMPORTANT */}
        <Route path="/home" element={<Home />} />
        <Route path="/my-gronetters" element={<MyGronetters />} />
        <Route path="/popular-discussions" element={<Discussion />} />

        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/my-gronet" element={<MyGronet />} />
         <Route path="/create-group" element={<CreateGroup />} /> 
         <Route path="/manage-groups" element={<Managegroups />} />
         
      </Route>
    </Routes>
  );
};

export default AppRoutes;
