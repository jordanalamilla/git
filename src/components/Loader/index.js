import React from 'react';
import LoaderGif from '../../assets/loader.gif';

const Loader = () => {

    return (

        <div id="loader">
            <img style={{ width : 100 }}
                 src={ LoaderGif }
                 alt="Loading animation." />
        </div>
    )
}

export default Loader;