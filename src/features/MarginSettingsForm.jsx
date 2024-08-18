import {Button, ButtonGroup, Col, Container, Form, Row, Stack} from "react-bootstrap";
import React, {useState} from "react";

export function MarginSettingsForm() {
    const [taxSystem, setTaxSystem] = useState('УСН 6%');
    const [expensesFF, setExpensesFF] = useState(100);
    const [otherExpenses, setOtherExpenses] = useState(0);
    const [averageMargin, setAverageMargin] = useState('X%');
    const [marginAdjustment, setMarginAdjustment] = useState(0);

    const handleTaxSystemChange = (event) => {
        setTaxSystem(event.target.value);
    };

    const handleMarginAdjustment = (value) => {
        setMarginAdjustment(prev => prev + value);
    };

    return (
        <Stack gap={3}>
            <Stack>
                <Form.Group className="mb-3">
                    <Stack>
                        <Form.Label>
                            <h6>Налогообложение</h6>
                        </Form.Label>
                        <ButtonGroup>
                            <Button
                                variant={taxSystem === 'УСН 6%' ? 'primary' : 'outline-primary'}
                                value="УСН 6%"
                                onClick={() => setTaxSystem('УСН 6%')}>
                                УСН 6%
                            </Button>
                            <Button
                                variant={taxSystem === 'УСН 2%' ? 'primary' : 'outline-primary'}
                                value="УСН 2%"
                                onClick={() => setTaxSystem('УСН 2%')}>
                                УСН 2%
                            </Button>
                            <Button
                                variant={taxSystem === 'ОСН' ? 'primary' : 'outline-primary'}
                                value="ОСН"
                                onClick={() => setTaxSystem('ОСН')}>
                                ОСН
                            </Button>
                        </ButtonGroup>
                    </Stack>
                </Form.Group>

                <Stack>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label><h6>Расходы на ФФ</h6></Form.Label>
                                <Form.Control
                                    type="number"
                                    value={expensesFF}
                                    onChange={(e) => setExpensesFF(e.target.value)}
                                />
                                <Form.Text className="text-muted">Расходы на 1 единицу товара</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <h6>Прочие расходы</h6>
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    value={otherExpenses}
                                    onChange={(e) => setOtherExpenses(e.target.value)}
                                />
                                <Form.Text className="text-muted">Расходы на 1 единицу товара</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label><h6>Средняя маржинальность</h6></Form.Label>
                                <h2>{averageMargin}</h2>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Stack>
                                    <Form.Label><h6>Изменить маржинальность</h6></Form.Label>
                                    <ButtonGroup>
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() => handleMarginAdjustment(-1)}>
                                            -1%
                                        </Button>
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() => handleMarginAdjustment(1)}>
                                            +1%
                                        </Button>
                                    </ButtonGroup>
                                </Stack>
                            </Form.Group>
                        </Col>
                    </Row>
                </Stack>
            </Stack>
            <Button variant="dark">Готово</Button>
        </Stack>
    )
}