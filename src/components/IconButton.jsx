import {Button, Stack} from "react-bootstrap";

export function IconButton({children, icon, className}) {
    return (
        <Button className={className}>
            <Stack direction="horizontal" alignItems="center" gap={2}>
                {icon}
                {children}
            </Stack>
        </Button>
    )
}