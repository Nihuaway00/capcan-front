import {Button, Stack} from "react-bootstrap";
import {InputField} from "../components/InputField";
import React, {useState} from "react";
import {IconButton} from "../components/IconButton";
import {CardChecklist} from "react-bootstrap-icons";

export function AddSellerForm() {
    const [sellerApi, setSellerApi] = useState(null);

    return (
        <Stack gap={5}>
            <Stack>
                <InputField
                    value={sellerApi}
                    onChange={(e) => setSellerApi(e.target.value)}
                    label="API ключ селлера которого надо добавить*"
                    placeholder="API - ключ селлера"
                />

                <Stack>
                    <h5>Юнит экономика товаров*</h5>
                    <p>
                        Чтобы добавление селлера было корректно, добавьте юнитку, согласно примеру. Проверьте Свою юнитку,
                        перед добавлением
                    </p>
                    <IconButton icon={<CardChecklist size={24}/>} variant={"outline-secondary"}>
                        Загрузить юнит экономику товаров
                    </IconButton>
                </Stack>
            </Stack>

            <Button href="/set">
                Готово
            </Button>
        </Stack>
    )
}