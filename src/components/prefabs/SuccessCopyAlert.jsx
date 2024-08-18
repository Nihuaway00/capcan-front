import {Alert} from "../Alert";
import {CheckLg} from "react-bootstrap-icons";
import React from "react";

export function SuccessCopyAlert({show, onHide, onClick}) {
    return (<Alert
        title={"Успешно!"}
        description={"Скоро карточки скопируются, надо немного подождать. Маржинальность можно будет изменить выбрав селлера ниже в списке"}
        additional={""}
        show={show}
        onHide={onHide}
        action={"Хорошо"}
        onClick={onClick}
        icon={<CheckLg size={24} />}
    />)
}