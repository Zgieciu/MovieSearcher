import React from 'react';

import '../styles/Searcher.css';

const Searcher = props => {
    return ( 
        <div className="searcher">
            <input type="text" placeholder={props.placeholder} value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
        </div>
     );
}

export default Searcher;