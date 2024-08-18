import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StartCopyPage} from "./pages/StartCopyPage";
import {MarginSettingsPage} from "./pages/MarginSettingsPage";
import {AddSellerPage} from "./pages/AddSellerPage";
import {SellerPage} from "./pages/SellerPage";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/set" element={<StartCopyPage/>} />
                <Route path="/set/margin" element={<MarginSettingsPage/>} />
                <Route path="/set/add-seller" element={<AddSellerPage/>} />
                <Route path="/set/seller/:id" element={<SellerPage/>} />
            </Routes>
        </BrowserRouter>
    )
}