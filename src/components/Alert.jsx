import {Button, Modal, Stack} from "react-bootstrap";
import React from "react";

export function Alert({show, onHide, title, description, additional, action, onClick, icon}){
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header>
                <Stack gap={2} direction="horizontal">
                    {icon}
                    <Modal.Title>{title}</Modal.Title>
                </Stack>

            </Modal.Header>
            <Modal.Body>
                <Stack gap={2}>
                    <span>{description}</span>
                    <span>{additional}</span>
                </Stack>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={onClick}>
                    {action}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}