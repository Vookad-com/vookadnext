import React from "react";
export default function HeadingL({children}:{children:React.ReactNode}){
    return(
        <h1 className='md:text-4xl text-3xl font-bold'>{children}</h1>
    )
}