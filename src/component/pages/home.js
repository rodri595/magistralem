import React, { Component } from "react";

import banner from "./banner.png";

class Home extends Component {
  render() {
    return (
      <section className="hero-banner mb-30px">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="content-box">
                <img className="img-fluid" src={banner} alt="banner" />
              </div>
            </div>
            <div className="col-lg-5 pt-5">
              <h1>Formulas Magistrales</h1>
              <p>
                Vel aliquam quis, nulla pede mi commodo tristique nam hac Luctun
                torquent velit felis commodo pellentesque nulla cras vel aliqua
                quisan nulla pede mi commoda
              </p>
            </div>
          </div>
        </div>
        <section id="information">
          <div className="container">
            <div className="title-block">
              <h2>Nuestros Compuestos</h2>
              <p>
                Tenemos los Mejores Productos de la Medicina, con Certificados
                De Pureza Hasta Un 95%. Perfecta Para Tus Medicamentos o Cremas
                Personales Estrategicamente Elaboradas Para Ti e Incrementar Tu
                Salud.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="information-box">
                  <h5>VENTAJAS</h5>
                  <div className="divider-light"></div>
                  <ul>
                    <li>
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                      POSIBILIDAD DE AJUSTAR DOSIS SEGUN NECESIDAD
                    </li>
                    <li>
                      <ion-icon name="checkmark-circle-outline"></ion-icon>FORMA
                      FARMACEUTICA ADECUADA PARA CADA PACIENTE
                    </li>
                    <li>
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                      POSIBILIDAD DE ASOCIAR VARIOS ACTIVOS
                    </li>
                    <li>
                      <ion-icon name="checkmark-circle-outline"></ion-icon>MAYOR
                      ADHESION ALTRATAMIENTO
                    </li>
                    <li>
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                      PRESCRIPCION DE PEQUEÑAS CANTIDADES Y DOSIS DE RESCATE
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="information-box">
                  <h5>
                    EMPLEAMOS TECNICAS CERTIFICADAS PARA ASEGURAR LA CALIDAD DE
                    NUESTROS PRODUCTOS
                  </h5>
                  <div className="divider-light"></div>
                  <ul>
                    <li>
                      <ion-icon name="checkmark-circle-outline"></ion-icon>USO
                      DE MATERIAS PRIMAS RESPALDAS POR CERTIFICADOS DE CALIDAD
                    </li>
                    <li>
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                      CUMPLIMIENTO DE LAS NORMAS OFICIALES
                    </li>
                    <li>
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                      APLICACION DE LAS BUENAS PRACTICAS DE PREPARACION
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
export default Home;
