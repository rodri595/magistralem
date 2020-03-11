import React, { Component } from 'react';


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
                </ul>
              </div>
              <div className="col-md-4">
                <h5>testing</h5>
                <ul>
                  <li><a href="#">Vision</a></li>
                </ul>
              </div>

              <div className="col-md-4">
              <h5>Magistralem</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec mattis feugiat, velit purus euismod odio, quis vulputate velit urna.</p>
              <p><a href="mailto:magistralem@gmail.com" className="external-links">magistralem@gmail.com</a></p>
              </div>
            </div> 
      <div className="divider"></div>
      <div className="row">
        <div className="col-md-6 col-xs-12">
            <a href="https://www.facebook.com/magistralem/" target="blank"><ion-icon size="large" name="logo-facebook"></ion-icon></a>
            <a href="https://www.instagram.com/magistralemfarma/" target="blank"><ion-icon size="large" name="logo-instagram"></ion-icon></a>
            <a href="https://www.youtube.com/channel/UCu8tH_BIrg7zuwVP3DBWFBw" target="blank"><ion-icon size="large" name="logo-youtube"></ion-icon></a>
            <a href="tel:+504-9992-6637"><ion-icon size="large" name="logo-whatsapp"></ion-icon></a>
          </div>
          <div className="col-md-6 col-xs-12">
            <small>2019 &copy; All rights reserved. Made by <a href="https://www.instagram.com/rodri595/" target="blank" className="external-links">Rodrigo Erazo</a></small>
          </div>
      </div>
    </div>      
        </footer>
    );
  }
}

export default Footer;
