import {Button, Stack} from "react-bootstrap";

export function IconButton({children, icon, className, variant, onClick, href}) {
    return (
        <Button className={className} variant={variant} onClick={onClick} href={href}>
            <Stack direction="horizontal" alignItems="center" gap={2}>
                {icon}
                {children}
            </Stack>
        </Button>
    )
}