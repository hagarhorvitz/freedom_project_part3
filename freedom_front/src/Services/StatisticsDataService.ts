import axios from "axios";
import appConfig from "../Utils/AppConfig";
import { store, totalLikesActions, totalLikesByDestinationSActions, totalUsersSActions, totalVacationsActions } from "../Redux/State";
import { LikesByDestinationProps, TotalLikesProps, TotalUsersProps, TotalVacationsProps } from "../Models/StatisticsProps";

class StatisticsDataService {
    private checkToken(){
        const token = localStorage.getItem("token");
        return token ? `Bearer ${token}` : null;
    };

    private hasDataChanged<T>(currentStateData: T, localStorageData: T): boolean {
        return JSON.stringify(currentStateData) === JSON.stringify(localStorageData); // true = same / false = different
    };


    public async getTotalVacationsByStatus(): Promise<TotalVacationsProps>{
        const token = this.checkToken();
        const currentState = store.getState().totalVacations;
        const vacationsLocalStorage = JSON.parse(localStorage.getItem("totalVacations"))
        if (currentState && this.hasDataChanged(currentState, vacationsLocalStorage)) 
            return currentState;
        const options = {headers : {Authorization: token }}  
        const response = await axios.get(appConfig.totalVacationsUrl, options);
        const vacations = await response.data; 
        store.dispatch(totalVacationsActions.initTotalVacations(vacations));
        localStorage.setItem("totalVacations", JSON.stringify(vacations));
        return vacations;
    };

    public async getTotalUsers(): Promise<TotalUsersProps>{
        const token = this.checkToken();
        const currentState = store.getState().totalUsers;
        const usersLocalStorage = JSON.parse(localStorage.getItem("totalUsers"))
        if (currentState && this.hasDataChanged(currentState, usersLocalStorage))
            return currentState;
        const options = {headers : {Authorization: token }}
        const response = await axios.get(appConfig.totalUsersUrl, options);
        const users = await response.data; 
        store.dispatch(totalUsersSActions.initTotalUsers(users));
        localStorage.setItem("totalUsers", JSON.stringify(users));
        return users;
    };

    public async getTotalLikes(): Promise<TotalLikesProps>{
        const token = this.checkToken();
        const currentState = store.getState().totalLikes;
        const likesLocalStorage = JSON.parse(localStorage.getItem("totalLikes"))
        if (currentState && this.hasDataChanged(currentState, likesLocalStorage))
            return currentState;
        const options = {headers : {Authorization: token }}
        const response = await axios.get(appConfig.totalLikesUrl, options);
        const likes = await response.data; 
        store.dispatch(totalLikesActions.initTotalLikes(likes));
        localStorage.setItem("totalLikes", JSON.stringify(likes));
        return likes;
    };

    public async getLikesByDestination(): Promise<LikesByDestinationProps[]>{
        const token = this.checkToken();
        if (store.getState().totalLikesByDestination.length > 0){
            return store.getState().totalLikesByDestination;
        }
        const options = {headers : {Authorization: token }}
        const response = await axios.get(appConfig.totalCountryLikesUrl, options);
        const likes = await response.data; 
        store.dispatch(totalLikesByDestinationSActions.initLikesByDestination(likes));
        localStorage.setItem("likesByDestination", JSON.stringify(likes));
        return likes;
    };
}

export const statisticsDataService = new StatisticsDataService();
