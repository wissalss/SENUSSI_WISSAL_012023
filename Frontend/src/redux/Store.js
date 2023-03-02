import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/Featurs';

export default configureStore({
    reducer: {
        user: userReducer,
    }
})