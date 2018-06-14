import React from 'react'

import './especialidades.css'

export default props => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
        <div className="col-xs-12 col-sm-6 col-md-3" key={todo.id}>
            <div className="image-flip" id='topo'>
                <div className="mainflip">
                    <div className="frontside">
                        <div className="card">
                            <div className="card-body text-center">
                                <p className='img'>
                                    <img className=" img-fluid" alt="Team Cards Flipper" src={todo.img_path} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="backside">
                        <div className="card">
                            <div className="card-body text-center mt-4">
                                <h4 className="card-title">{todo.nome}</h4>
                                <p className="card-text">
                                    <div dangerouslySetInnerHTML={{__html: todo.conteudo}}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))
    };

    return (
        <section id="team" className="pb-5">
            <div className="container">
                <div className="row">
                    { renderRows() }
                </div>
            </div>
        </section>
            );
}