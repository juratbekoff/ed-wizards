import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import Home from "./pages/Home.tsx";

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                
                {/*not found page*/}
                <Route path={'*'} element={<h1>Not found!</h1>}/>
            </Route>
        </Routes>
    )
};

export default App;