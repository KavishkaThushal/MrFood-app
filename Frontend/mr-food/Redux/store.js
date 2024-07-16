import { combineReducers,configureStore } from "@reduxjs/toolkit";
import {persistReducer,persistStore} from 'redux-persist'
import UserReducer from './Reducers/UserReducer'
import CartReducer from "./Reducers/CartReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';


const rootReducer=combineReducers({
    user:UserReducer,
    cart:CartReducer
})

const persistConfig={
    key:'root',
    storage:AsyncStorage,
    version:1
}

const persistedReducers=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducers,
    middleware:(getDefaultMiddleware)=>(getDefaultMiddleware({
        serializableCheck:false
    }))
})

export const persistor=persistStore(store)

