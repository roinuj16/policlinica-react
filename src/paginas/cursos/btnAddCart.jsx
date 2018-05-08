import React from 'react'

export default props => {
    if(props.add) {
        return props.children
    } else {
        return (
            <div className="col-md-12 col-sm-6 text-center">
                <a className="btn btn-md btn-color-line " disabled>Curso Adicionado</a>
            </div>
        )
    }
}