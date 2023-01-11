import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <section>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <main className="min-h-[calc(100vh-20vh)]"> {children} </main>
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
