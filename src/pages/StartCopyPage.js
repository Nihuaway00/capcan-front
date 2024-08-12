import React from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import {CopyForm} from "../features/CopyForm";

export function StartCopyPage() {

    function copyHandler(){

    }

    return (
        <>
            <Row className="gap-0">
                <Col className="mb-4">
                    <h1 className="fw-bolder">OSH-Team</h1>
                    <h4>Subtitle or additional info</h4>
                </Col>
            </Row>
            <CopyForm />
            <Row className="mb-4">
                <h5>Sellers</h5>
                <ListGroup>
                    <ListGroup.Item>Seller 1</ListGroup.Item>
                    <ListGroup.Item>Seller 2</ListGroup.Item>
                    <ListGroup.Item>Seller 3</ListGroup.Item>
                </ListGroup>
            </Row>
        </>
    );
}