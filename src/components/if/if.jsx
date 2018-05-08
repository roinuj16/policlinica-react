import React from 'react'

export default props => {
    if(props.mostrar) {
        return props.children
    } else {
        return false
    }
}