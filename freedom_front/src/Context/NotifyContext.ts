import React, { createContext } from "react";
import { Notify } from "../Utils/Notify";

const defaultNotify = new Notify(
    () => "",
    () => {} 
);

const NotifyContext = createContext<Notify>(defaultNotify);

export default NotifyContext;