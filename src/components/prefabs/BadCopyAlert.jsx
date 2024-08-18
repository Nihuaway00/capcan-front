import {Alert} from "../Alert";
import {CheckLg, X, XCircle, XSquare} from "react-bootstrap-icons";
import React from "react";

export function BadCopyAlert({show, onHide, onClick}) {
    return (<Alert
        title={"Ошибка :("}
        description={"Мы работаем над ошибкой. \n" +
            "Напишите Александу в ТГ и он решит как можно быстрее решит вашу проблему."}
        additional={"@topleess"}
        show={show}
        onHide={onHide}
        action={"Хорошо"}
        onClick={onClick}
        icon={<X size={36} />}
    />)
}