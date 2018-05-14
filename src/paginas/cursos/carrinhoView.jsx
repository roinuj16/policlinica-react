import React from 'react'
import If from '../../components/if/if'
export default props => {

   const cursos = props.listaCursos || [];
   const btnComprar = props.btnComprar;
   const cursosCarrinho = () => {
        if(cursos.length <= 0) {
            return (
                <div className="row js-carrinho-zerado">
                    <div className="col-xs-12 col-md-12">
                        <p className='icone-vazio'>
                            <span className="fa fa-shopping-cart fa-4x pull-left"></span>
                        </p>
                    </div>
                    <div className="col-xs-12 col-md-12" >
                        <p className='txt-vazio'>Seu carrinho ainda esta vazio...</p>
                    </div>
                </div>
            )
        }

        return cursos.map(todo => {
            return (
                <div key={todo.id}>
                    <div className="row">
                        <div className="col-xs-2">
                            <img className="img-responsive" width={100} height={70} src={todo.path_image}/>
                        </div>
                        <div className="col-xs-4">
                            <h4 className="product-name"><strong>{ todo.nome }</strong></h4>
                        </div>
                        <div className="col-xs-6">
                            <div className="col-xs-6 text-right">
                                <h6>
                                    <strong>
                                        {todo.valor.toLocaleString('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </strong>
                                </h6>
                            </div>
                            <If mostrar={btnComprar === 'show'}>
                                <div className="col-xs-2">
                                    <a onClick={() => props.removeCurso(todo)} className="btn btn-link btn-xs">
                                        <span className="glyphicon glyphicon-trash"> </span>
                                    </a>
                                </div>
                            </If>
                        </div>
                    </div>
                    <hr/>
                </div>
            )
        })
    }

    const alteravalor = () => {
        let soma = 0;
        if (cursos.length > 0) {
            soma = cursos.reduce((preVal, elem) => {
                return preVal + elem.valor
            }, 0);
        }
        return soma;
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-shopping-cart"></span> Detalhes do Pedido
                                {/*<div className="pull-right">*/}
                                    {/*<small><a className="afix-1" href="#">Editar Carrinho</a></small>*/}
                                {/*</div>*/}
                            </div>
                            <div className="panel-body">
                                {cursosCarrinho()}
                            </div>
                            <div className="panel-footer">
                                <div className="row text-center">
                                    <div className="col-xs-9">
                                        <h4 className="text-right">Total
                                            <strong> {alteravalor().toLocaleString('pt-br', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}</strong></h4>
                                    </div>
                                    <If mostrar={btnComprar === 'show'}>
                                        <div className="col-xs-3">
                                            <button onClick={() => props.iniciarCompra(cursos, alteravalor())}
                                                    type="button" className="btn btn-success btn-block">
                                                Comprar
                                            </button>
                                        </div>
                                    </If>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}