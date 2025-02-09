import React from 'react';

const qoute = () => {
    return(
        <div className='text-white w-full h-full flex items-center justify-center bg-gray-800'>
           <div className='flex flex-col'>
            <p className='text-3xl' style={{ color: "#a7a9be", fontStyle: "italic"}}>
                "The only true wisdom is in knowing that you know nothing."
            </p>
            <span className='self-end pe-10' style={{color: "#a7a9be", fontStyle: "italic"  }}>
                Socrates, 399-387 BCE
            </span>
           </div>
        </div>
    )
}

export default qoute;