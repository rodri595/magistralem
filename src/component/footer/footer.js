import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Top Products</h5>
              <ul>
                <li>Cold Cream</li>
                <li>Urea</li>
                <li>Hand Sanitizer</li>
                <li>Minoxidil</li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>Magistralem</h5>
              <p>
                Se enfoca en la optimización y fundamentación de la formulación
                individualizada, aumentando así el espectro de alternativas
                terapéuticas para los prescriptores, para facilitar los
                tratamientos farmacéuticos individualizados.
              </p>
              <p>
                <a
                  href="mailto:magistralem@gmail.com"
                  className="external-links"
                >
                  magistralem@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <a
                href="https://www.facebook.com/magistralemfarma"
                target="blank"
              >
                <ion-icon size="large" name="logo-facebook"></ion-icon>
              </a>
              <a
                href="https://www.instagram.com/magistralemfarma/"
                target="blank"
              >
                <ion-icon size="large" name="logo-instagram"></ion-icon>
              </a>
              <a
                href="https://www.youtube.com/channel/UCu8tH_BIrg7zuwVP3DBWFBw"
                target="blank"
              >
                <ion-icon size="large" name="logo-youtube"></ion-icon>
              </a>
              <a
                href="https://wa.me/50499926637?text=|Web|Buen%20Dia%20Dra.%20Janeth%20Aleman%20,Mi%20Nombre%20es:%20"
                target="blank"
              >
                <ion-icon size="large" name="logo-whatsapp"></ion-icon>
              </a>
            </div>
            <div className="col-md-6 col-xs-12">
              <small>
                2019 &copy; All rights reserved. Made with ♥ by{" "}
                <a
                  href="https://www.instagram.com/rodri595/"
                  target="blank"
                  className="external-links"
                >
                  Rodrigo Erazo
                </a>
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
