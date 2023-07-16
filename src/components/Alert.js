import React from 'react'

const Alert = (props) => {
    return (
        <div className={`alert alert-${props.color} alert-box px-5`} role="alert">
            {props.type} : {props.massage}
        </div>
    )
}

export default Alert