import React from 'react'
import './footer.css'

export default props => (
    <footer className="footer pt-80">
        <div className="container">
            <div className="row footer-info mb-60">
                <div className="col-md-3 col-sm-6 col-xs-12 mb-sm-30">
                    <h5>Jardim do Ingá</h5>
                    <address>
                        <i className="ion-ios-location fa-icons"></i> Av Lucena Roriz, Qd. 58, Lote 27 Luziânia-Go
                    </address>
                    <ul className="link-small">
                        <li><a href="#"><i className="ion-ios-email fa-icons"></i> policlinica@gmail.com</a></li>
                        <li><a><i className="ion-ios-telephone fa-icons"></i> (61) 3623-6550 / (61) 9-8629-5513</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 mb-sm-30">
                    <h5>Cidade Ocidental</h5>
                    <address>
                        <i className="ion-ios-location fa-icons"></i> SQ 12, quadra 01, n. 05 Ocidental-Go
                    </address>
                    <ul className="link-small">
                        <li><a href="#"><i className="ion-ios-email fa-icons"></i> policlinica@gmail.com</a></li>
                        <li><a><i className="ion-ios-telephone fa-icons"></i> (61) 3625-2809 / (61) 9-8585-5675</a></li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-6 col-xs-12 mb-sm-30">
                    <h5>Links Úteis</h5>
                    <ul className="link blog-link">
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> INCM </a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Médis </a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Mondial Assistance </a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> Multicare </a></li>
                        <li><a href="#"><i className="fa fa-angle-double-right"></i> mDoctors </a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="newsletter">
                        <h5>Horário</h5>
                        <div className="opening">
                            <p> Segunda - Sext : <span>8:00 - 18:00</span> </p>
                            <p> Sábado : <span>9:00 - 17:00</span> </p>
                            <p> Domingo : <span>8:00 - 12:00</span> </p>
                        </div>
                        <div className="col-md-12">
                            <ul className="social-network social-circle">
                                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook-f"></i></a></li>
                                <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <p className=""> © 2018 <a><b>Policlínica Saúde</b></a>. Todos os direitos reservados. </p>
            </div>
        </div>
    </footer>
)