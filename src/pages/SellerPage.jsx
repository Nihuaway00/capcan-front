import {Stack} from "react-bootstrap";
import {PageTop} from "../components/PageTop";
import {SellerForm} from "../features/SellerForm";

export function SellerPage() {
    const pageInfo = {
        title: "IIIIIIIIIIIIII", //TODO: откуда мне брать имя селлера?
        backLink: "/set"
    }

    return (
        <Stack>
            <PageTop {...pageInfo}/>
            <SellerForm/>
        </Stack>
    )
}