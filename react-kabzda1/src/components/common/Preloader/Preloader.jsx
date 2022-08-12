import React from 'react';
import preloader from '../../../imiges/Spinner-1s-200px.svg';
import './Preloader.css';

let Preloader = (props) => {
    return (
        <div className='preloader'>
            <img src={preloader} alt="Please_wait" />
        </div>
    );
}

export default Preloader;
