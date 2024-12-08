import { UserMenu } from "../../Users/UserMenu/UserMenu";
import css from "./Header.module.css";
import bringThemHomeSticker from "../../../Assets/Logos/bring_them_home_logo.png"

export function Header(): JSX.Element {
    return (
        <div className={css.Header}>
			<UserMenu/>
            <img src={bringThemHomeSticker}/>
        </div>
    );
}
