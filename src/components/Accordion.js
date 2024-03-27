import React, { useState } from 'react';

const Accordion = ({ numbers, title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item border-b border-white-100 py-4 px-5 cursor-pointer">
            <div className="accordion-title flex justify-between items-center gap-4" onClick={() => setIsActive(!isActive)}>

                <div className='font-russo font-semibold lg:text-xl pb-4 text-white-100'>
                    {title}
                </div>

                <div className='p-4 rounded-md bg-blue-100 shadow-md text-white-100 w-10 h-10 flex items-center justify-center'>
                    {isActive ? <span className='rotate-90 ml-1.5 text-4xl'>&#8250;</span> : <span className='-rotate-90 mr-1.5 text-4xl'>&#8250;</span>}
                </div>
            </div>
            {isActive && <div className="accordion-content font-inter text-white-100 mt-4">{content}</div>}
        </div>
    );
};

export default Accordion
