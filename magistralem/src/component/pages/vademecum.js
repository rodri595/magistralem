import React, { Component } from 'react'
import word from './word.docx';


class Vademecum extends Component {
    render(){
        return(
        <section id="vademecum">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="content-box">
                  <span>descargalo ya !</span>
                  <h2>Vademecum</h2>
                  <p>se trata de una obra que usan profesionales sanitarios como médicos o farmacéuticos para consultar las indicaciones, composiciones y presentaciones de los medicamentos.</p>
                  <a href={word}  download="Vademecum.docx" className="btn btn-regular">Descarga <ion-icon name="download"></ion-icon></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
      }
}
export default Vademecum;