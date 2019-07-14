import { fromJS } from "immutable"
import { GET_LIST_DATA } from "./actionCreator"
const defaultStore = fromJS({
    theatre_list: []
})
export default (state = defaultStore, action) => {
    // console.log(action);
    switch (action.type) {
        case GET_LIST_DATA:
            // console.log(state.theatre_list);
            return state.update('theatre_list', x => {
                return x.concat(fromJS(action.res))
            });
    }
    return state;
}