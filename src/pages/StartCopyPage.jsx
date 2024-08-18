import React from 'react';
import {Container, Row, Col, Form, Button, ListGroup, Stack} from 'react-bootstrap';
import {CopyForm} from "../features/CopyForm";
import {Plus} from "react-bootstrap-icons";
import {IconButton} from "../components/IconButton";

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

        </Stack>
    );
}