import React from 'react';

const technologies = () => {
    return (
        <div className='w-full flex flex-col gap-10 items-center'>
            <h1 className='text-white text-4xl'><span className='font-bold text-orange-500 text-5xl'>T</span>echnologies</h1>
            <div className='h-48 gap-10 flex mt-16 flex-row justify-center items-center w-full'>
                <div className='p-4 text-white  border-r-1 border-b-1 border-orange-400 h-full w-4/12'>
                    <h6 className='text-lg' style={{color: "#a7a9be"}}>
                        <span className='text-5xl me-2' style={{fontWeight: "bold"}}>01</span>Programming Languages
                    </h6>
                </div>
                <div className='p-4 text-white border-l-1 border-b-1 b border-orange-400 h-full w-4/12'>
                    <h6 className='text-lg' style={{color: "#a7a9be"}}>
                            <span className='text-5xl me-2' style={{fontWeight: "bold"}}>02</span>Frameworks & Libraries
                    </h6>
                </div>
            </div>
            <div className='h-48 flex flex-row gap-10 justify-center items-center w-full'>
                <div className='p-4 text-white border-t-1 border-r-1  b border-orange-400 h-full w-4/12'>
                    <h6 className='text-lg' style={{color: "#a7a9be"}}>
                        <span className='text-5xl me-2' style={{fontWeight: "bold"}}>03</span>Database Management
                    </h6>
                </div>
                <div className='p-4 text-white border-t-1 border-l-1 b border-orange-400 h-full w-4/12'>
                    <h6 className='text-lg' style={{color: "#a7a9be"}}>
                        <span className='text-5xl me-2' style={{fontWeight: "bold"}}>04</span>Version Control
                    </h6>
                </div>
            </div>
        </div>
    )
}
export default technologies