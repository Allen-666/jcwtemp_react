import { combineReducers } from "redux-immutable"
import infoReducer from "@/components/main/Info/reducer"
import homeReducer from "@/components/main/Home/reducer"
import showReducer from "@/components/main/Show/reducer"
import recommendReducer from '@/components/layout/home_recommend/reducer'

export default combineReducers({
    infoReducer,
    homeReducer,
    showReducer,
    recommendReducer
})
