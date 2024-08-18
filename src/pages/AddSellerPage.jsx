import {NavLink, Stack} from "react-bootstrap";
import React from "react";
import {InputField} from "../components/InputField";
import {AddSellerForm} from "../features/AddSellerForm";
import {PageTop} from "../components/PageTop";

export function AddSellerPage() {
    const pageInfo = {
        title: "Добавить селлера",
        description: "Добавление селлера поможет вам массово редактировать экономику товаров которые продаются, а также скопировать карточки из этого магазина в другой",
        backLink: "/set"
    }

    return (
        <Stack>
            <PageTop {...pageInfo} />
            <AddSellerForm />
        </Stack>
    )
}