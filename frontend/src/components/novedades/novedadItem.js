import React from 'react';

const novedadItem = (props) => {
    const {title, subtitle, body, imagen} = props;
    return (
        <div className="novedades" >
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr/>
            <img src= {imagen}/> 

        </div>
    );
}

export default novedadItem;