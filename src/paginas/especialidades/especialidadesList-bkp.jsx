import React from 'react'

import './especialidades.css'

export default props => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <div className="col-md-3" key={todo.id}>
                <div className="thumbnail">
                    <a href={`#/especialidades-detalhes/${todo.id}`}  id="Fisioterapia">
                        <img src={todo.img_path} alt={todo.nome}/>
                        <div className="caption">
                            <h4 className="text-center" >{todo.nome}</h4>
                        </div>
                    </a>
                </div>
            </div>
        ))
    };
    return (
        <section id="" className="wow fadeIn ptb-80">
            <div className="container">
                <div className="row js-thumbs">
                    {renderRows()}
                </div>
            </div>
        </section>
    );
}