import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import logo from "../header/logo.png";

import Header from "../header/header";
import Footer from "../footer/footer";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

class Contactanos extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="global-contactanos">
          <section>
            <div className="contact custom_container_wrap">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6">
                    <div className="contact_content">
                      <div className="contact_title">Horarios</div>
                      <div className="row contact_row">
                        <div className="col-xl-6">
                          <div className="contact_text">
                            <p>
                              Mon: 9:00 AM – 5:00 PM
                              <br />
                              Tue: 9:00 AM – 5:00 PM
                              <br />
                              Wed: 9:00 AM – 5:00 PM
                              <br />
                              Thu: 9:00 AM – 5:00 PM
                              <br />
                              Fri: 9:00 AM – 5:00 PM
                              <br />
                              Sat: 9:30 AM – 12:00 PM
                              <br />
                              Sun: Closed
                            </p>
                            <a
                              href="https://www.google.com/maps/dir//Magistralem/@14.09446,-87.2608531,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8f6fa3cd1987c573:0x20222cbc69e679!2m2!1d-87.1908126!2d14.0944701"
                              target="blank"
                              className="btn btn-regular"
                            >
                              Direccion
                            </a>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="contact_info_list">
                            <ul>
                              <li>
                                Colonia Tepeyac, Torre Medica Tepeyac,
                                <br />1 Nivel, #2 Local
                              </li>
                              <li>
                                <a href="tel:+504-2239-0888">+504-2239-0888</a>
                                <br />
                                <a href="tel:+504-9992-6637">+505-9992-6637</a>
                              </li>
                              <li>
                                magistralemfarma@gmail.com
                                <br />
                                janeth.aleman@yahoo.com
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <Map
                      center={[14.094465, -87.190809]}
                      zoom={18}
                      bounds={[
                        [14.096462, -87.18911],
                        [14.091478, -87.192398],
                      ]}
                    >
                      <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[14.094465, -87.190809]}>
                        <Popup>
                          <img src={logo} alt="logo" /> <br />
                          <div className="Map-Marker"></div>
                        </Popup>
                      </Marker>
                    </Map>
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

export default Contactanos;
