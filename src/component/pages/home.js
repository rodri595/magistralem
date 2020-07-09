import React, { Component } from "react";

import banner from "./bannernew.png";
import "@ptkdev/webcomponent-instagram-widget";
import Header from "../header/header";
import Footer from "../footer/footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
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
                  es un programa multinacional que brinda a los farmacéuticos y
                  prescriptores una amplia variedad de formulaciones de
                  ingredientes activos e indicaciones individualizadas.
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
                  De Pureza Hasta Un 95%. Perfecta Para Tus Medicamentos o
                  Cremas Personales Estrategicamente Elaboradas Para Ti e
                  Incrementar Tu Salud.
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
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        FORMA FARMACEUTICA ADECUADA PARA CADA PACIENTE
                      </li>
                      <li>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        POSIBILIDAD DE ASOCIAR VARIOS ACTIVOS
                      </li>
                      <li>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        MAYOR ADHESION ALTRATAMIENTO
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="information-box">
                    <h5>EMPLEAMOS TECNICAS CERTIFICADAS</h5>
                    <div className="divider-light"></div>
                    <ul>
                      <li>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>USO
                        DE MATERIAS PRIMAS
                      </li>
                      <li>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        CUMPLIMIENTO DE LAS NORMAS OFICIALES
                      </li>
                      <li>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        APLICACIÓN DE LAS BUENAS PRACTICAS DE PREPARACIÓN
                      </li>
                      <li>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                        PRESCRIPCIÓN DE PEQUEÑAS CANTIDADES Y DOSIS DE RESCATE
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-xl-12">
                <div className="container">
                  <div className="title-block">
                    <h2>Siguenos en Nuestra Cuenta de Instagram</h2>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <instagram-widget
                            username="@magistralemfarma"
                            grid="3x3"
                            mouse-hover="type1"
                            shadows="type3"
                            border-spacing="10px"
                            border-corners="15"
                          ></instagram-widget>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    );
  }
}
