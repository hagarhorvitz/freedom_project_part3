import { PayloadAction } from "@reduxjs/toolkit";
import { UsersModel } from "../Models/UsersModel";
import { LikesByDestinationProps, TotalLikesProps, TotalUsersProps, TotalVacationsProps } from "../Models/StatisticsProps";

export function login(currentState:UsersModel, action: PayloadAction<UsersModel>): UsersModel{
    const newState = action.payload;
    return newState;
};

export function logout(currentState:UsersModel, action: PayloadAction<UsersModel>): UsersModel{
    return null;
};


export function initTotalVacations(currentState: TotalVacationsProps, action: PayloadAction<TotalVacationsProps>):TotalVacationsProps{
    const allVacationsCount = action.payload;
    return allVacationsCount;
};

export function initTotalUsers(currentState: TotalUsersProps, action: PayloadAction<TotalUsersProps>):TotalUsersProps{
    const allUsersCount = action.payload;
    return allUsersCount;
};

export function initTotalLikes(currentState: TotalLikesProps, action: PayloadAction<TotalLikesProps>):TotalLikesProps{
    const allLikesCount = action.payload;
    return allLikesCount;
};

export function initLikesByDestination(currentState: LikesByDestinationProps[], action: PayloadAction<LikesByDestinationProps[]>):LikesByDestinationProps[]{
    const allLikesByDestinationCount = action.payload;
    return allLikesByDestinationCount;
};
