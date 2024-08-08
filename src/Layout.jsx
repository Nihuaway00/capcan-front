import React from 'react';

export function Layout({children}){
    return (
        <div className="container p-4">
            {children}
        </div>
    )
}