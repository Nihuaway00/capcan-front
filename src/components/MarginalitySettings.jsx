import {Col, Row} from "react-bootstrap";
import React from "react";

export function MarginalitySettings({averagePercentage}){
    return (
        <Row className="d-flex align-items-start gap-1 p-0 px-2">
            <Col xs="auto" className="pt-1 px-1">
                <div style={{ width: '18px', height: '18px', background: 'gray' }}/>
            </Col>
            <Col className="d-flex flex-column gap-2">
                <div className="d-flex flex-column">
                    <span>Настройки маржинальности товара</span>
                    <span className="opacity-75">По умолчанию цена не будет меняться</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span>Средняя маржинальность</span>
                    <span>{averagePercentage}%</span>
                </div>
            </Col>
        </Row>
    )
}