import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//pages
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Home from "./component/pages/home";
import Vademecum from "./component/pages/vademecum";
import Nosotros from "./component/pages/nosotros";
import Contactanos from "./component/pages/contactanos";

//css
import "./Assets/css/style.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={Home} />
          <Route exact path="/Vademecum" component={Vademecum} />
          <Route exact path="/Nosotros" component={Nosotros} />
          <Route exact path="/Contactanos" component={Contactanos} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
