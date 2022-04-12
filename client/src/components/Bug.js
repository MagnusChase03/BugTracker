import React from 'react';

const Bug = ({ bugs }) => {

    return (

        <div className="bug">

            {bugs.map(bug => (

                <div className="bugDetails border border-3 border-info d-flex flex-row m-2 p-2 bg-dark text-white rounded-pill align-center">

                    <span key={bug.bugName} className="fs-2 ps-4 pe-2">{bug.bugName}</span>
                    <span key={bug.bugDesc} className="px-2 my-3">{bug.bugDesc}</span>

                </div>

            ))}

        </div>

    );

}

export default Bug;