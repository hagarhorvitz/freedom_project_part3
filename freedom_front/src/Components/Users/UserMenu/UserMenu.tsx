import { NavLink, useNavigate } from "react-router-dom";
import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/State";
import { UsersModel } from "../../../Models/UsersModel";
import { userService } from "../../../Services/UserService";
import Stack from '@mui/material/Stack';
import { useContext } from "react";
import NotifyContext from "../../../Context/NotifyContext";


export function UserMenu(): JSX.Element {

    const user = useSelector<AppState, UsersModel>(store=> store.user);
    
    const notify = useContext(NotifyContext);
    
    const navigate = useNavigate();
    async function log_out(){
        try {
            await userService.logout(user);
            notify.success("Logged out Successfully, See you next time!😎", 4500)
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err, 4500);
            navigate("/home");
        }
    };

    return (
        <div className={css.UserMenu}>
            {
            !user && <Stack direction="row" spacing={1}>
                <span>Hello Guest!</span>
                <span>|</span>
                <NavLink to="/login">Login</NavLink>
            </Stack>
            }
            {
            user && <Stack direction="row" spacing={1}>
                <span>Hello {user.first_name} {user.last_name}</span>
                <span>|</span>
                <NavLink to="/home" onClick={log_out}>Logout</NavLink>
            </Stack>
            }
        </div>
    );
}
