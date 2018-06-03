import React from 'react'

/**
 * class = Classe css erro/success...
 * message = Mensagem a ser exibida
 */
export default props => {
    return (
        <div>
            <div className={`alert alert-${props.cssClass}`}>
                {props.message}
            </div>
        </div>
    )
}