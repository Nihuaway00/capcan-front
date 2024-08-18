import React from 'react';
import {Container, Row, Col, Form, Button, ListGroup, Stack} from 'react-bootstrap';
import {CopyForm} from "../features/CopyForm";

export function StartCopyPage() {

    function copyHandler(){

    }

    return (
        <Stack>
            <Stack className="gap-0">
                <Stack className="mb-4">
                    <h1 className="fw-bolder">OSH-Team</h1>
                    <h4>Subtitle or additional info</h4>
                </Stack>
            </Stack>
            <CopyForm />
            <Stack className="mb-4">
                <h5>Sellers</h5>
                <ListGroup>
                    <ListGroup.Item>Seller 1</ListGroup.Item>
                    <ListGroup.Item>Seller 2</ListGroup.Item>
                    <ListGroup.Item>Seller 3</ListGroup.Item>
                </ListGroup>
            </Stack>
        </Stack>
    );
}