import React from "react";

export default function Orange({children}:{children:React.ReactNode}){
    return (
        <span className="text-orange-500">
            {children}
        </span>
    )
}