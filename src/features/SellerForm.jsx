import {Button, Stack} from "react-bootstrap";

export function SellerForm() {
    return (
        <Stack>
            <Button>Скопировать карточки в ДРУГОЙ магазин</Button>
            <Button>Скопировать карточки в ЭТОТ магазин</Button>
            <Button>Увеличить кол-во карточек в магазине</Button>
            <Button>Изменить экономику товаров</Button>

            <Button className="mt-2">Изменить API ключ селлера</Button>
        </Stack>
    )
}