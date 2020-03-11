
import React, { Component } from 'react'
import about from './1.jpg';



class Nosotros extends Component {
    render(){
        return(
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Nuestra Historia</h2>
                            <h3 className="section-subheading text-muted">Todo comenzo...</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src={about} alt="Magistralem"/>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Octubre 2018</h4>
                                            <h4 className="subheading">Nuestros Inicios</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src={about} alt="Magistralem"/>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Diciembre 2018</h4>
                                            <h4 className="subheading">Nuestro mejor tiempo</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src={about} alt="Magistralem"/>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Enero 2019</h4>
                                            <h4 className="subheading">Implementacion del SAR</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src={about} alt="Magistralem"/>
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Abril 2019</h4>
                                            <h4 className="subheading">Rodrigo Crea la Pagina</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>Se Parte <br/>De La Familia!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="divider-light"></div>
                <section class="rehomes-choose-us-area section-padding-100-60">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="section-heading text-center wow fadeInUp" data-wow-delay="200ms">
                                    <h2><span>Por Que </span>Nosotros?</h2>
                                    <p>Tenemos Años De Experiencia.</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="single-choose-us-content wow fadeInUp" data-wow-delay="200ms">

                                    <ion-icon size="large" name="ribbon"></ion-icon>

                                    <h5>Medicamentos A Tu Gusto</h5>
                                    <p>Quis ipsum suspendisse ultrices, risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="single-choose-us-content wow fadeInUp" data-wow-delay="200ms">
                                    
                                    <ion-icon size="large" name="flash"></ion-icon>
                                    
                                    <h5>No Mas Filas</h5>
                                    <p>Quis ipsum suspendisse ultrices, risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="single-choose-us-content wow fadeInUp" data-wow-delay="200ms">
                                    <ion-icon size="large" name="cash"></ion-icon>
                                    <h5>Ahorra Mas Tu Dinero</h5>
                                    <p>Quis ipsum suspendisse ultrices, risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        
        )
      }
}
export default Nosotros;