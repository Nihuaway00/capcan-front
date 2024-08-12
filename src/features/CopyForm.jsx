import {InputField} from "../components/InputField";
import {Button, Col, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import {MarginalitySettings} from "../components/MarginalitySettings";
import {CheckBox} from "../components/CheckBox";
import {useMutation} from "react-query";

export function CopyForm() {
    const [fromApi, setFromApi] = useState("");
    const [sellerApi, setSellerApi] = useState("");
    const [changeTitle, setChangeTitle] = useState(false);
    const [changeDesc, setChangeDesc] = useState(false);
    const [changeInfographic, setChangeInfographic] = useState(false);

    const copyMutation = useMutation({
        mutationFn: () => {},
        mutationKey: ["copy"]
    });

    function copyHandler(){
        copyMutation.mutate()
    }


    return (
        <>
            {
                copyMutation.isLoading || (
                    <div>Loading</div>
                )
            }

            <InputField
                value={fromApi}
                onChange={(e) => setFromApi(e.target.value)}
                label="Откуда копировать"
                placeholder="API - ключ селлера"
                description="Вы можете использовать ссылку, но это может вызвать ошибки"
            />
            <InputField
                value={sellerApi}
                onChange={(e) => setSellerApi(e.target.value)}
                label="Куда копировать"
                placeholder="API - ключ селлера"
            />
            <Row className="mb-4 gap-2 px-2">
                <CheckBox onChange={(e) => setChangeTitle(e.target.value)} label={"изменить название"}/>
                <CheckBox onChange={(e) => setChangeDesc(e.target.value)} label={"изменить описание"}/>
                <CheckBox onChange={(e) => setChangeInfographic(e.target.value)} label={"изменить инфографику"} />
                <MarginalitySettings averagePercentage={5}/>
            </Row>
            <Row className="mb-4 px-2 w-auto d-flex justify-content-end">
                <Button onClick={copyHandler} type="button">Начать копирование</Button>
            </Row>
        </>
    )
}