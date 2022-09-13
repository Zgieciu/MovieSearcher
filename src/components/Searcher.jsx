import React from 'react';

import '../styles/Searcher.css';

const Searcher = props => {
    return ( 
        <div className="searcher">
            <input type="text" placeholder={props.placeholder}/>
        </div>
     );
}
 
export default Searcher;