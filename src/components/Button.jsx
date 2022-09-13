import React from 'react';

import '../styles/Button.css';

const Button = props => {
    return ( 
        <div className="button">
            <button onClick={props.clickFunction}>{props.value}</button>
        </div>
     );
}
 
export default Button;