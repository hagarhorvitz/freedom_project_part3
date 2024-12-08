import axios from "axios";
import { CredentialModel } from "../Models/CredentialModel";
import { UsersModel } from "../Models/UsersModel";
import { jwtDecode } from "jwt-decode";
import appConfig from "../Utils/AppConfig";
import { store, userActions } from "../Redux/State";

class UserService {
    public constructor(){
        const token = localStorage.getItem("token");
        if(!token) return;

        const dbUser = jwtDecode<{user: UsersModel}>(token).user;
        const action = userActions.login(dbUser);
        store.dispatch(action);
    };

	public async login(credential: CredentialModel):Promise<void>{    
        const response = await axios.post<string>(appConfig.loginUrl, credential);     
        const token = await response.data;
        const dbUser = jwtDecode<{user: UsersModel}>(token).user;
        const action = userActions.login(dbUser);
        store.dispatch(action);
        localStorage.setItem("token", token);
    };

    
    public async logout(user: UsersModel):Promise<void> {
        const response = await axios.post<object>(appConfig.logoutUrl, user);  
        const action = userActions.logout(); 
        store.dispatch(action); 
        const removeItemsArr = ["token", "totalVacations", "totalUsers", "totalLikes", "likesByDestination"]
        removeItemsArr.forEach( item => localStorage.removeItem(item));
    };
}

export const userService = new UserService();
