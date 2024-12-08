import css from "./PageNotFound.module.css";
import pageNotFoundImage from "../../../Assets/Images/page_not_found_2.jpg"

export function PageNotFound(): JSX.Element {
    return (
        <div className={css.PageNotFound}>
            <img src={pageNotFoundImage}/>
        </div>
    );
}
