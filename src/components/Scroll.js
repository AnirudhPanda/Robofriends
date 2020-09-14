import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '580px'}}>
            {/* as in children of scroll */}
            {props.children}
        </div>
    )

}

export default Scroll;