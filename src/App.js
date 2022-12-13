import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import Form from "./Form";
import Middle from "./Middle";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Middle />
        <Form />
        <Footer />
      </>
    );
  }
}

export default App;
