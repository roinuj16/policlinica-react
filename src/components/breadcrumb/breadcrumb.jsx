import React from 'react'

export default props => (
    <div>
        <section className="inner-intro bg-img overlay-bg-color light-color parallax parallax-background">
            <div className="container">
                <div className="row title">
                    <h2 className="h2">{props.name}</h2>
                    <div className="page-breadcrumb"> <a>Início</a>/<span>{props.name}</span> </div>
                </div>
            </div>
        </section>
    </div>
)