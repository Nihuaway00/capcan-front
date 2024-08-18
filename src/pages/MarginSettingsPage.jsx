import React, {useState} from 'react';
import {Container, Button, ButtonGroup, Form, NavLink, Row, Col, Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PageTop} from "../components/PageTop";
import {MarginSettingsForm} from "../features/MarginSettingsForm";

export function MarginSettingsPage() {
    const pageInfo = {
        title: "Настройка маржинальности",
        description: "Далее, вам потребуется изменить параметры ваших расходов, для того, чтобы мы могли посчитать маржинальность, а также установить нужную цену на ваш товар",
        backLink: "/set"
    }

    return (
        <Stack>
            <PageTop {...pageInfo}/>
            <MarginSettingsForm />
        </Stack>
    );
}
