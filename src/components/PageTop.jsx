import {NavLink, Stack} from "react-bootstrap";
import React from "react";
import {ArrowLeft} from "react-bootstrap-icons";

export function PageTop({ title, backLink, description }) {
    return (
        <Stack gap={2} className={"mb-4"}>
            <Stack gap={2}>
                <NavLink href={backLink}>
                    <Stack direction="horizontal" gap={2}>
                        <ArrowLeft size={20} />
                        <span>Назад</span>
                    </Stack>
                </NavLink>
                <h4>{title}</h4>
            </Stack>

            {
                description || <p>{description}</p>
            }

        </Stack>
    )
}