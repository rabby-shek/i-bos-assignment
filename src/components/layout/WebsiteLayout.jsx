import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../topnav/TopNav";
import Footer from "../footer/Footer";
const WebsiteLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default WebsiteLayout;
