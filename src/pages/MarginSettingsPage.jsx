import React, {useState} from 'react';
import {Container, Button, ButtonGroup, Form, NavLink, Row, Col, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PageTop} from "../components/PageTop";

export function MarginSettingsPage() {
    const pageInfo = {
        title: "Настройка маржинальности",
        description: "Далее, вам потребуется изменить параметры ваших расходов, для того, чтобы мы могли посчитать маржинальность, а также установить нужную цену на ваш товар",
        backLink: "/set"
    }

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
        <Stack>
            <PageTop {...pageInfo}/>
            <Form.Group className="mb-3">
                <Row>
                    <Form.Label><h6>Налогообложение</h6></Form.Label>
                    <ButtonGroup>
                        <Button
                            variant={taxSystem === 'УСН 6%' ? 'primary' : 'outline-primary'}
                            value="УСН 6%"
                            onClick={() => setTaxSystem('УСН 6%')}
                        >
                            УСН 6%
                        </Button>
                        <Button
                            variant={taxSystem === 'УСН 2%' ? 'primary' : 'outline-primary'}
                            value="УСН 2%"
                            onClick={() => setTaxSystem('УСН 2%')}
                        >
                            УСН 2%
                        </Button>
                        <Button
                            variant={taxSystem === 'ОСН' ? 'primary' : 'outline-primary'}
                            value="ОСН"
                            onClick={() => setTaxSystem('ОСН')}
                        >
                            ОСН
                        </Button>
                    </ButtonGroup>
                </Row>
            </Form.Group>

            <Stack direction="horizontal" gap={3}>
                <Form.Group className="mb-3">
                    <Form.Label><h6>Расходы на ФФ</h6></Form.Label>
                    <Form.Control
                        type="number"
                        value={expensesFF}
                        onChange={(e) => setExpensesFF(e.target.value)}
                    />
                    <Form.Text className="text-muted">Расходы на 1 единицу товара</Form.Text>
                </Form.Group>

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
            </Stack>

            <Stack direction="horizontal" gap={3}>
                <Form.Group className="mb-3">
                    <Form.Label><h6>Средняя маржинальность</h6></Form.Label>
                    <h2>{averageMargin}</h2>
                </Form.Group>

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
            </Stack>

            <Button variant="dark">Готово</Button>
        </Stack>
    );
}
