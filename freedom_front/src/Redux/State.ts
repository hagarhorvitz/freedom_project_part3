import { configureStore, createSlice } from "@reduxjs/toolkit";
import { UsersModel } from "../Models/UsersModel"
import { initLikesByDestination, initTotalLikes, initTotalUsers, initTotalVacations, login, logout } from "./Reducers";
import { LikesByDestinationProps, TotalLikesProps, TotalUsersProps, TotalVacationsProps } from "../Models/StatisticsProps";

export type AppState = {
    user: UsersModel,
    totalVacations: TotalVacationsProps,
    totalUsers: TotalUsersProps,
    totalLikes: TotalLikesProps,
    totalLikesByDestination: LikesByDestinationProps[],
};
function getStateFromLocalStorage<T>(key: string) {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : null;
    } catch (err: any) {
        return null;
    }
};


const userSlice = createSlice( {
    name: "user",
    initialState: null,
    reducers: {login, logout}
});
export const userActions = userSlice.actions;

const totalVacationsSlice = createSlice( {
    name: "totalVacations",
    initialState: getStateFromLocalStorage<TotalVacationsProps>("totalVacations"),
    reducers: {initTotalVacations}
});
export const totalVacationsActions = totalVacationsSlice.actions;

const totalUsersSlice = createSlice( {
    name: "totalUsers",
    initialState: getStateFromLocalStorage<TotalUsersProps>("totalUsers"),
    reducers: {initTotalUsers}
});
export const totalUsersSActions = totalUsersSlice.actions;

const totalLikesSlice = createSlice( {
    name: "totalLikes",
    initialState: getStateFromLocalStorage<TotalLikesProps>("totalLikes"),
    reducers: {initTotalLikes}
});
export const totalLikesActions = totalLikesSlice.actions;

const totalLikesByDestinationSlice = createSlice( {
    name: "totalLikesByDestination",
    initialState: getStateFromLocalStorage<LikesByDestinationProps[]>("likesByDestination") || [],
    reducers: {initLikesByDestination}
});
export const totalLikesByDestinationSActions = totalLikesByDestinationSlice.actions;


export const store = configureStore<AppState>({
    reducer: {
        user : userSlice.reducer,
        totalVacations : totalVacationsSlice.reducer,
        totalUsers : totalUsersSlice.reducer,
        totalLikes : totalLikesSlice.reducer,
        totalLikesByDestination : totalLikesByDestinationSlice.reducer,
        }
});