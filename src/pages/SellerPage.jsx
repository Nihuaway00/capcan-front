import {Stack} from "react-bootstrap";
import {PageTop} from "../components/PageTop";
import {SellerForm} from "../features/SellerForm";
import {useLocation, useParams} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import axios from "axios";

function useSeller(id){
    function getSeller(){
        if(!id) return null;
        const data = {
            name: "Хуй сунь вынь & " + id
        }
        //const {data} = axios.get(`/api/seller/${id}`);
        return data;
    }

    return useQuery("seller", getSeller)
}

export function SellerPage() {
    const {id} = useParams();
    const {data, isLoading, isSuccess, error} = useSeller(id);

    if(isLoading){
        return "Загрука...";
    }

    if(error){
        return error.message;
    }


    if(!data){
        return "data is null:" + data;
    }

    const pageInfo = {
        title: data.name, //TODO: откуда мне брать имя селлера?
        backLink: "/set"
    }

    return (
        <Stack>
            <PageTop {...pageInfo}/>
            <SellerForm/>
        </Stack>
    )
}