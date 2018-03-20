import React, { Component } from 'react'

import img1 from '../../assets/images/blog/img1.jpg'
import img2 from '../../assets/images/blog/img2.jpg'

export default class Blog extends Component {

    render() {
        return (
            <div>
                <section id="blog" className="wow fadeIn ptb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12 mb-xs-30 mb-sm-60">
                                <h2 className="mt-sm">Posts em Destaque </h2>
                                <div className="spacer-15"></div>
                                <div className="row">
                                    <div className="col-sm-4 mb-xs-30">
                                        <div className="blog-post">
                                            <div className="post-media">
                                                <img src={img1} alt="" />
                                                <span className="event-calender blog-date"> 21 <span>Jun</span> </span>
                                            </div>
                                            <div className="post-meta">
                                                <span>por <a href="#">Admin</a>,</span>
                                                <span>
                                                    <a href="#">
                                                      <i className="fa fa-comment-o"></i> 25</a>,
                                                </span>
                                                <span>
                                                <a href="#"><i className="fa fa-heart-o"></i> 57</a>,
                                            </span>
                                            </div>
                                            <div className="post-header">
                                                <h4><a href="#">Maecenas nec fdfodio ante varcy tincidunt</a></h4>
                                            </div>
                                            <div className="post-entry">
                                                <p>Perspiciatis unde omnis iste natus doxes sit voluptatem accusantium dantiumeaque ipsa quae ab illos</p>
                                            </div>
                                            <div className="post-more-link pull-left"><a href="#" className="btn btn-md btn-color-line ">Leia Mais</a></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-xs-30">
                                        <div className="blog-post">
                                            <div className="post-media">
                                                <img src={img2}  alt="" />
                                                <span className="event-calender blog-date"> 08 <span>Fev</span> </span>
                                            </div>
                                            <div className="post-meta">
                                                <span>por <a href="#">Admin</a>,</span>
                                                <span>
                                                    <a href="#">
                                                      <i className="fa fa-comment-o"></i> 15
                                                    </a>,
                                                  </span>
                                                <span>
                                                    <a href="#"><i className="fa fa-heart-o"></i> 39</a>,
                                                </span>
                                            </div>
                                            <div className="post-header">
                                                <h4><a href="#">Maecenas nec odio ante varcy tincidunt</a></h4>
                                            </div>
                                            <div className="post-entry">
                                                <p>Perspiciatis unde omnis iste natus doxes sit voluptatem accusantium dantiumeaque ipsa quae ab illos</p>
                                            </div>
                                            <div className="post-more-link pull-left">
                                                <a href="#" className="btn btn-md btn-color-line ">Leia Mais</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mb-xs-30">
                                        <div className="blog-post">
                                            <div className="post-media">
                                                <img src={img1}  alt="" />
                                                <span className="event-calender blog-date"> 08 <span>Jan</span> </span>
                                            </div>
                                            <div className="post-meta">
                                                <span>por <a href="#">Admin</a>,</span>
                                                <span>
                                                <a href="#"><i className="fa fa-comment-o"></i> 15</a>,
                                            </span>
                                                <span>
                                                    <a href="#"><i className="fa fa-heart-o"></i> 39</a>,
                                                </span>
                                            </div>
                                            <div className="post-header">
                                                <h4><a href="#">Maecenas nec odio ante varcy tincidunt</a></h4>
                                            </div>
                                            <div className="post-entry">
                                                <p>Perspiciatis unde omnis iste natus doxes sit voluptatem accusantium dantiumeaque ipsa quae ab illos</p>
                                            </div>
                                            <div className="post-more-link pull-left">
                                                <a href="#" className="btn btn-md btn-color-line ">Leia Mais</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}