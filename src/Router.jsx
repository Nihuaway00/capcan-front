import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StartCopyPage} from "./pages/StartCopyPage";
import {MarginSettingsPage} from "./pages/MarginSettingsPage";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/set" element={<StartCopyPage/>} />
                <Route path="/set/margin" element={<MarginSettingsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}