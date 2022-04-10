import React from 'react';

const Bug = ({ bugs }) => {

    return (

        <div className="bug">

            {bugs.map(bug => (

                <div className="bugDetails">

                    <h1 key={bug.bugName}>{bug.bugName}</h1>
                    <p key={bug.bugDesc}>{bug.bugDesc}</p>

                </div>

            ))}

        </div>

    );

}

export default Bug;