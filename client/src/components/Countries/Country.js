import React from "react";
const Country = ({flag, name, continent }) => {

    
    return(
        <div>
            <h3 name='name'>{name}</h3>
            <img src={flag} alt='no img' />
            <h4 name='continent'>{continent}</h4>
        </div>
    )
}

export default Country;