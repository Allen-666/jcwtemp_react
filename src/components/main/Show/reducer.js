import { fromJS } from "immutable"
import { GET_TABTITLE_DATA } from "./actionCreator"
import { GET_TABLIST_DATA } from "./actionCreator"
import { GET_CITYLIST_DATA } from "./actionCreator"
const defaultStore = fromJS({
    tabtitle: [],
    tablist:[],
    citylist:[],
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        case GET_TABTITLE_DATA:
            return state.update("tabtitle", x => {
                return x.concat(fromJS(action.res));
            });
        case GET_TABLIST_DATA:
            return state.update("tablist", x => {
                return x.concat(fromJS(action.res));
            });
        case GET_CITYLIST_DATA :
            return state.update("citylist", x => {
                return x.concat(fromJS(action.res));
            });    
           
    }
    return state;
}