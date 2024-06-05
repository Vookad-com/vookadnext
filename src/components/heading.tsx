import React from "react";
export default function HeadingL({children}:{children:React.ReactNode}){
    return(
        <h1 className='text-5xl'>{children}</h1>
    )
}