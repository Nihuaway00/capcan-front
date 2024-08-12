import React from 'react';
import {Container} from "react-bootstrap";



export function Layout({children}){
    return (
        <Container className="p-4">
            {children}
        </Container>
    )
}