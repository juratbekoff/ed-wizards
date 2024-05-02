import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {About, Contact, Home, Lessons, Sources, Team, Testimonials} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path={"/lessons"} element={<Lessons/>}/>
                <Route path={"/sources"} element={<Sources/>}/>
                <Route path={"/team"} element={<Team/>}/>
                <Route path={"/testimonials"} element={<Testimonials/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/contact"} element={<Contact/>}/>

                {/*not found page*/}
                <Route path={'*'} element={<h1>Not found!</h1>}/>
            </Route>
        </Routes>
    )
};

export default App;