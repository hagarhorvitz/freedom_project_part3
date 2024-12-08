import { Route, Routes } from "react-router-dom";
import css from "./Routing.module.css";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { LoginForm } from "../../Users/LoginForm/LoginForm";
import { AboutPage } from "../../AboutMe/AboutPage/AboutPage";
import { AllStatisticsDisplay } from "../../Statistics/AllStatisticsDisplay/AllStatisticsDisplay";
import { HomePage } from "../../Home/HomePage/HomePage";

export function Routing(): JSX.Element {
    return (
        <div className={css.Routing}>
			<Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/statistics" element={<AllStatisticsDisplay/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}
