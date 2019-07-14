const defaultStore = {
    count: 0
}

export default (state = defaultStore, action) => {
    switch (action.type) {
        case "NUM_ADD":
            state.count++;
            break;
    }
    return state;
}