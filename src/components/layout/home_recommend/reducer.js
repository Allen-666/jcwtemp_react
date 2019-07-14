import { fromJS } from "immutable"
import { GET_Recommend_Data } from "./actionCreator"
const defaultStore = fromJS({
    recommend_show_list: []
})
export default (state = defaultStore, action) => {
    // console.log(action);
    switch (action.type) {
        case GET_Recommend_Data:
            // console.log(state.theatre_list);
            return state.update('recommend_show_list', x => {
                return x.concat(fromJS(action.res))
            });
    }
    return state;
}