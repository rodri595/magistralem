import React, { Component } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import file from "./Vademecum-2020.pdf";

class Vademecum extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="global-vademecum">
          <section id="vademecum">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 ">
                  <img
                    src="https://image.flaticon.com/icons/svg/1590/1590685.svg"
                    alt="logo"
                  />
                </div>
                <div className="col-xl-6 ">
                  <div className="content-box">
                    <span>descargalo ya !</span>
                    <h2>Vademecum</h2>
                    <p>
                      se trata de una obra que usan profesionales sanitarios
                      como médicos o farmacéuticos para consultar las
                      indicaciones, composiciones y presentaciones de los
                      medicamentos.
                    </p>
                    <a
                      href={file}
                      download="Vademecum.pdf"
                      className="btn btn-regular"
                    >
                      Descarga <ion-icon name="download"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Vademecum;
