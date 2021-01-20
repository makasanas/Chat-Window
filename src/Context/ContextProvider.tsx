import React, { FunctionComponent } from "react";
import ChatContextProvider from "./ChatContext";

const Provider: FunctionComponent = ({ children }) => (
    <ChatContextProvider>{children}</ChatContextProvider>

);

export default Provider;
