import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <><div className="fixed-top">
      <Navbar/>
      <Header />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center cardcss">
      <Card  />
      </div>
      <Footer/>
    </>
  );
}

export default App;