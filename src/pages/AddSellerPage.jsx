import {NavLink, Stack} from "react-bootstrap";
import React from "react";
import {InputField} from "../components/InputField";
import {AddSellerForm} from "../features/AddSellerForm";

export function AddSellerPage() {
    return (
        <Stack>
            <NavLink href={"/set"}>Назад</NavLink>
            <h4>Добавить селлера</h4>
            <p>
                Добавление селлера поможет вам массово редактировать экономику товаров которые продаются, а также скопировать карточки из этого магазина в другой
            </p>
            <AddSellerForm />
        </Stack>
    )
}