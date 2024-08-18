import {InputField} from "../components/InputField";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {MarginSettings} from "../components/MarginSettings";
import {CheckBox} from "../components/CheckBox";
import {useMutation} from "react-query";
import {Alert} from "../components/Alert";
import {CardChecklist, CheckLg, Clipboard2Heart} from "react-bootstrap-icons";
import {SuccessCopyAlert} from "../components/prefabs/SuccessCopyAlert";
import {BadCopyAlert} from "../components/prefabs/BadCopyAlert";

export function CopyForm() {
    const [fromApi, setFromApi] = useState("");
    const [sellerApi, setSellerApi] = useState("");
    const [changeTitle, setChangeTitle] = useState(false);
    const [changeDesc, setChangeDesc] = useState(false);
    const [changeInfographic, setChangeInfographic] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const copyMutation = useMutation({
        mutationFn: () => {},
        mutationKey: ["copy"]
    });

    function copyHandler(){
        copyMutation.mutate()
    }

    function hideAlertHandler(){
        setShowAlert(false);
    }

    useEffect(() => {
        setShowAlert(copyMutation.isSuccess || copyMutation.isError);
    }, [copyMutation.isSuccess, copyMutation.isError]);


    return (
        <>
            {
                copyMutation.isSuccess || <SuccessCopyAlert
                    show={showAlert}
                    onHide={hideAlertHandler}
                    onClick={hideAlertHandler}
                />
            }

            {
                copyMutation.isError || <BadCopyAlert
                    show={showAlert}
                    onHide={hideAlertHandler}
                    onClick={hideAlertHandler}
                />
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
                <CheckBox onChange={(e) => setChangeInfographic(e.target.value)} label={"изменить инфографику"}/>
                <MarginSettings averagePercentage={5}/>
            </Row>
            <Row className="mb-4 px-2 w-auto d-flex justify-content-end">
                <Button onClick={copyHandler} type="button">Начать копирование</Button>
            </Row>
        </>
    )
}