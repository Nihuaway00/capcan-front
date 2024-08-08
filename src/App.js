import React from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

function App() {
    return (
        <Container>
            <Row className="gap-0">
                <Col className="mb-4">
                    <h1 className="fw-bolder">OSH-Team</h1>
                    <h4>Subtitle or additional info</h4>
                </Col>
            </Row>
            <Row className="mb-4">
                <Form.Group className="mb-4">
                    <Form.Label>
                        <div>
                            <span>Откуда копировать</span>
                            <span className="opacity-50 d-block">Вы можете использовать ссылку, но это может вызвать ошибки</span>
                        </div>
                    </Form.Label>
                    <Form.Control type="text" placeholder="API - ключ селлера" className="mb-2"/>
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label>
                        <span>Куда копировать</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="API - ключ селлера" className="mb-2"/>
                </Form.Group>
            </Row>
            <Row className="mb-4 gap-2">
                <Form.Check type="checkbox" id="checkbox1" label="Изменить название" className="mb-2"/>
                <Form.Check type="checkbox" id="checkbox2" label="Изменить описание" className="mb-2"/>
                <Form.Check type="checkbox" id="checkbox3" label="Изменить инфографику" className="mb-2"/>
                <Row className="d-flex align-items-start gap-2 p-0">
                    <Col xs="auto" className="pt-1">
                        <div style={{ width: '18px', height: '18px', background: 'gray' }}/>
                    </Col>
                    <Col className="d-flex flex-column gap-2">
                        <div className="d-flex flex-column">
                            <span>Настройки маржинальности товара</span>
                            <span className="opacity-75">По умолчанию цена не будет меняться</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Средняя маржинальность</span>
                            <span>5%</span>
                        </div>
                    </Col>
                </Row>
            </Row>
            <Row className="mb-4 d-flex justify-content-end">
                <Button type="button">Начать копирование</Button>
            </Row>
            <Row className="mb-4">
                <h5>Sellers</h5>
                <ListGroup>
                    <ListGroup.Item>Seller 1</ListGroup.Item>
                    <ListGroup.Item>Seller 2</ListGroup.Item>
                    <ListGroup.Item>Seller 3</ListGroup.Item>
                </ListGroup>
            </Row>
        </Container>
    );
}

export default App;
