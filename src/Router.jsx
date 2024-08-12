import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StartCopyPage} from "./pages/StartCopyPage";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/set" element={<StartCopyPage/>} />
            </Routes>
        </BrowserRouter>
    )
}