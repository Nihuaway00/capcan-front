import {Form} from "react-bootstrap";
import React from "react";

export function CheckBox({onChange, label}) {
    return <Form.Check type="checkbox" onChange={onChange} label={label} className="mb-2"/>
}