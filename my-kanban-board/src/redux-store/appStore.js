import { configureStore } from "@reduxjs/toolkit";
import kanbanReducer from "./kanbanStore";
import boardReducer from "./boardStore";
import themeReducer from "./themeStore"
export const store = configureStore({
    reducer:{
        kanban:kanbanReducer,
        board :boardReducer,
        theme: themeReducer,
    }
})

















