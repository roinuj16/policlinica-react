import React from 'react'

/**
 * class = Classe css erro/success...
 * message = Mensagem a ser exibida
 */
export default props => {
    return (
        <div className={`alert alert-${props.cssClass}`}>
            <p>{props.message}</p>
        </div>
    )
}