import React from 'react';

const Hireable = props => {

    return (

        <div id='hireable'>
        
            {
                (() => {
                    switch( props.hireable ) {
                        case true:
                            return <a href="https://dev.jordanalamilla.ca/#contact" className="green button" target="_blank" rel="noopener noreferrer">Available For Hire</a>
                        default:
                            return <div className="disabled button">Working For { props.company }</div>
                    }
                })()
            }

        </div>

    )
}

export default Hireable;