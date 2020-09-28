import React from 'react';

export default function Header({title, children}){
    return (
    <header>
        <h1>{title}</h1>
            <h3>{children}</h3>
    </header>
    );
}