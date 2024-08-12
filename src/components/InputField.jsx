import {Form} from "react-bootstrap";
import React from "react";

export function InputField({label, description, placeholder, onChange,value, type="text"}) {
    return (
        <Form.Group className="mb-4">
            <Form.Label>
                <div>
                    <span>{label}</span>
                    <span className="opacity-50 d-block">{description}</span>
                </div>
            </Form.Label>
            <Form.Control value={value} type={type} onChange={onChange} placeholder={placeholder} className="mb-2"/>
        </Form.Group>
    )
}