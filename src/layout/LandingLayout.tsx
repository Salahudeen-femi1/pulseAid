import React from "react";
import NavBar from "../Components/navs/NavBar";
// import Footer from "../components/footer/Footer";

type LayoutProp = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: LayoutProp) {
  return (
    <>
      {/* Top Navigation */}
      <div className="w-full fixed h-30 z-50">
        <NavBar />
      </div>

      {/* Page Content */}
      <div className="bg-[#F6F7F7]/80 ">
        {children}
      </div>

      <div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
